import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { Store, loadConfig, WorkQueue, TelegramAPI, Bot, sessionKey, shouldRespond, runPolling,
  createHealthServer, httpText, httpJson } from '../server.js';

async function temporaryStore(t, values = {}) {
  const base = process.env.BOT_TEST_TMP_DIR || os.tmpdir();
  await fs.mkdir(base, { recursive: true });
  const dir = await fs.mkdtemp(path.join(base, 'borsa-bot-test-'));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  const config = loadConfig({ DATA_DIR: dir, AI_MIN_INTERVAL_MS: '0', ...values });
  const store = new Store(config);
  await store.init();
  return { store, config };
}

test('member and topic memory stays isolated and survives restart', async t => {
  const { store, config } = await temporaryStore(t);
  const message = { chat: { id: -20 }, from: { id: 11 }, message_thread_id: 6 };
  const key = sessionKey(message);
  await store.remember(key, 'THYAO maliyetim 300', 'Veriye bakalım', [{ title: 'x', url: 'https://example.com' }]);
  assert.equal((await store.history(key)).length, 2);
  assert.deepEqual(await store.history(sessionKey({ ...message, from: { id: 12 } })), []);
  assert.deepEqual(await store.history(sessionKey({ ...message, message_thread_id: 7 })), []);
  const reopened = new Store(config);
  await reopened.init();
  assert.equal((await reopened.history(key))[0].content, 'THYAO maliyetim 300');
  await reopened.forget(key);
  assert.deepEqual(await reopened.history(key), []);
  assert.deepEqual(reopened.sources(key), []);
});

test('daily budget cannot overspend under concurrent requests and persists', async t => {
  const { store, config } = await temporaryStore(t, { MAX_DAILY_AI_REQUESTS: '2' });
  const results = await Promise.allSettled([store.reserveAI(), store.reserveAI(), store.reserveAI()]);
  assert.equal(results.filter(x => x.status === 'fulfilled').length, 2);
  assert.equal(results[2].reason.code, 'DAILY_LIMIT');
  const reopened = new Store(config);
  await reopened.init();
  await assert.rejects(reopened.reserveAI(), { code: 'DAILY_LIMIT' });
});

test('memory expiry and message window prevent unlimited retention', async t => {
  const { store, config } = await temporaryStore(t, { HISTORY_TURNS: '1' });
  await store.remember('one', 'old', 'old');
  await store.remember('one', 'new', 'new');
  assert.equal((await store.history('one')).length, 2);
  store.now = () => Date.now() + config.historyTtlDays * 86400000 + 1;
  assert.deepEqual(await store.history('one'), []);
});

test('invalid state fails explicitly instead of silently wiping memory', async t => {
  const { config } = await temporaryStore(t);
  await fs.writeFile(path.join(config.dataDir, 'state.json'), '{broken');
  await assert.rejects(new Store(config).init());
});

test('queue caps active work and rejects overflow', async () => {
  const queue = new WorkQueue(1, 1);
  let release;
  const first = queue.run(() => new Promise(resolve => { release = resolve; }));
  const second = queue.run(async () => 'second');
  await assert.rejects(queue.run(async () => 'overflow'), { code: 'QUEUE_FULL' });
  await new Promise(resolve => setImmediate(resolve));
  release('first');
  assert.deepEqual(await Promise.all([first, second]), ['first', 'second']);
});

test('group routing honors mentions foreign commands bots and allowlist', () => {
  const me = { id: 99, username: 'BorsaBot' };
  const config = loadConfig({ GROUP_MODE: 'mentions', ALLOWED_CHAT_IDS: '-20' });
  const message = { text: 'selam', chat: { id: -20, type: 'supergroup' }, from: { id: 1 } };
  assert.equal(shouldRespond(message, me, config), false);
  assert.equal(shouldRespond({ ...message, text: '@BorsaBot selam' }, me, config), true);
  assert.equal(shouldRespond({ ...message, reply_to_message: { from: { id: 99 } } }, me, config), true);
  assert.equal(shouldRespond({ ...message, text: '/help@OtherBot' }, me, config), false);
  assert.equal(shouldRespond({ ...message, from: { id: 1, is_bot: true } }, me, config), false);
  assert.equal(shouldRespond({ ...message, chat: { id: -21, type: 'supergroup' } }, me, config), false);
});

test('source buttons carry clickable links and no Telegram parse mode', async () => {
  let sent;
  const telegram = new TelegramAPI('test', async (url, options) => {
    sent = JSON.parse(options.body);
    return { ok: true, result: { message_id: 8 } };
  });
  await telegram.send({ chat: { id: -1 }, message_id: 3, message_thread_id: 9 }, 'Kısa yanıt', [
    { title: 'KAP', url: 'https://kap.org.tr' },
    { title: 'bad', url: 'javascript:alert(1)' },
  ]);
  assert.equal(sent.reply_markup.inline_keyboard.length, 1);
  assert.equal(sent.reply_markup.inline_keyboard[0][0].url, 'https://kap.org.tr');
  assert.equal(sent.parse_mode, undefined);
