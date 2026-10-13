'use strict';

const http = require('node:http');

// Railway → Variables → BOT_TOKEN
const TOKEN = '8579577038:AAFInyB5SHoBqF_Q8lhISGSlsNfMhsNcjnY'

const GROUP = 'daooadsfjdjd';

// KAP listesinin yedeği
// Açılışta ve her gün yenilenir
const BUNDLED_CODES = `
A1CAP A1YEN AAGYO ACSEL ADEL ADESE ADGYO AEFES AFYON
AGESA AGHOL AGROT AGYO AHGAZ AHSGY AKBNK AKCNS AKENR
AKFGY AKFIS AKFYE AKGRT AKHAN AKMGY AKSA AKSEN AKSGY
AKSUE AKYHO ALARK ALBRK ALBTN ALCAR ALCTL ALFAS ALGYO
ALKA ALKIM ALKLC ALTNY ALVES ANELE ANGEN ANHYT ANSGR
ARASE ARCLK ARDYZ ARENA ARFYE ARMGD ARSAN ARTMS ARZUM
ASELS ASGYO ASTOR ASUZU ATAGY ATAKP ATATP ATATR ATEKS
ATLAS ATSYH AVGYO AVHOL AVOD AVPGY AVTUR AYCES AYDEM
AYEN AYES AYGAZ AZTEK BAGFS BAHKM BAKAB BALAT BALSU
BANVT BARMA BASCM BASGZ BAYRK BEGYO BERA BESLR BESTE
BETAE BEYAZ BFREN BIENY BIGCH BIGEN BIGTK BIMAS BINBN
BINHO BIOEN BIZIM BJKAS BKRGY BLCYT BLUME BMSCH BMSTL
BNTAS BOBET BORLS BORSK BOSSA BRISA BRKO BRKSN BRKVY
BRLSM BRMEN BRSAN BRYAT BSOKE BTCIM BUCIM BULGS BURCE
BURVA BVSAN BYDNR CANTE CASA CATES CCOLA CELHA CEMAS
CEMTS CEMZY CEOEM CGCAM CIMSA CITAS CLEBI CMBTN CMENT
CONSE COSMO CRDFA CRFSA CUSAN CVKMD CWENE DAGI DAPGM
DARDL DCTTR DENGE DERHL DERIM DESA DESPC DEVA DGATE
DGGYO DGNMO DIRIT DITAS DMRGD DMSAS DNISI DOAS DOCO
DOFER DOFRB DOGUB DOHOL DOKTA DSTKF DUNYH DURDO DURKN
DYOBY DZGYO EBEBK ECILC ECOGR ECZYT EDATA EDIP EFOR
EGEEN EGEGY EGEPO EGGUB EGPRO EGSER EKDMR EKGYO EKIM
EKIZ EKOS EKSUN ELITE EMKEL EMNIS EMPAE ENDAE ENERY
ENJSA ENKAI ENPRA ENSRI ENTRA EPLAS ERBOS ERCB EREGL
ERSU ESCAR ESCOM ESEN ETILR ETYAT EUHOL EUKYO EUPWR
EUREN EUYO EYGYO FADE FENER FLAP FMIZP FONET FORMT
FORTE FRIGO FRMPL FROTO FZLGY GARAN GARFA GATEG GEDIK
GEDZA GENIL GENKM GENTS GEREL GESAN GIPTA GLBMD GLCVY
GLRMK GLRYH GLYHO GMTAS GOKNR GOLDA GOLTS GOODY GOZDE
GRNYO GRSEL GRTHO GSDDE GSDHO GSRAY GUBRF GUNDG GWIND
GZNMI HALKB HATEK HATSN HDFGS HEDEF HEKTS HKTM HLGYO
HOROZ HRKET HTTBT HUBVC HUNER HURGZ ICBCT ICUGS IDGYO
IEYHO IHAAS IHEVA IHGZT IHLAS IHLGM IHYAY IMASM INDES
INFO INGRM INTEK INTEM INTET INVEO INVES ISATR ISBIR
ISBTR ISCTR ISDMR ISFIN ISGSY ISGYO ISKPL ISKUR ISMEN
ISSEN ISVEA ISYAT IZENR IZFAS IZINV IZMDC JANTS KAPLM
KARCL KAREL KARSN KARTN KATMR KAYSE KBORU KCAER KCHOL
KENT KERVN KFEIN KGYO KIMMR KLGYO KLKIM KLMSN KLNMA
KLRHO KLSER KLSYN KLYPV KMPUR KNFRT KOCMT KONKA KONTR
KONYA KOPOL KORDS KOTON KPEKS KRDMA KRDMB KRDMD KRGYO
KRONT KRPLS KRSTL KRTEK KRVGD KSTUR KTLEV KTSKR KUTPO
KUVVA KUYAS KZBGY KZGYO LIDER LIDFA LILAK LINK LKMNH
LMKDC LOGO LRSHO LUKSK LXGYO LYDHO LYDYE MAALT MACKO
MAGEN MAKIM MAKTK MANAS MARBL MARMR MARTI MASFN MAVI
MCARD MEDTR MEGAP MEGMT MEKAG MEPET MERCN MERIT MERKO
METEN METRO MEYSU MGROS MHRGY MIATK MMCAS MNDRS MNDTR
MOBTL MOGAN MOPAS MPARK MRGYO MRSHL MSGYO MTRKS MTRYO
MZHLD NATEN NETAS NETCD NETGL NIBAS NTGAZ NTHOL NUGYO
NUHCM OBAMS OBASE ODAS ODINE OFSYM ONCSM ONRYT ORCAY
ORGE ORMA ORZAX OSMEN OSTIM OTKAR OTTO OYAKC OYAYO
OYLUM OYYAT OZATD OZGYO OZKGY OZRDN OZSUB OZYSR PAGYO
PAHOL PAMEL PAPIL PARSN PASEU PATEK PCILT PEKGY PENGD
PENTA PETKM PETUN PGSUS PINSU PKART PKENT PLTUR PNLSN
PNSUT POLHO POLTK PRDGS PRKAB PRKME PRZMA PSDTC PSGYO
QNBFK QNBTR QUAGR QUICK RALYH RAYSG REEDR RGYAS RNPOL
RODRG RTALB RUBNS RUZYE RYGYO RYSAS SAFKR SAHOL SAMAT
SANEL SANFM SANKO SARAE SARKY SASA SAYAS SDTTR SEGMN
SEGYO SEKFK SEKUR SELEC SELVA SERNT SEYKM SILVR SISE
SKBNK SKTAS SKYLP SKYMD SMART SMRTG SMRVA SNGYO SNICA
SNPAM SODSN SOHOE SOKE SOKM SONME SRVGY SSAAT SUMAS
SUNTK SURGY SUWEN SVGYO TABGD TARKM TATEN TATGD TAVHL
TBORG TCELL TCKRC TDGYO TEHOL TEKTU TERA TEZOL TGSAS
THYAO TKFEN TKNKA TKNSA TLMAN TMPOL TMSN TNZTP TOASO
TRALT TRCAS TRENJ TRGYO TRHOL TRILC TRMET TSGYO TSKB
TSPOR TTKOM TTRAK TUCLK TUKAS TUPRS TUREX TURGG TURSG
UCAYM UFUK ULAS ULKER ULUFA ULUSE ULUUN UMPAS UNLU
USAK USHOL VAKBN VAKFA VAKFN VAKKO VANGD VBTYZ VERTU
VERUS VESBE VESTL VEYAS VKFYO VKGYO VKING VRGYO VSNMD
YAPRK YATAS YAYLA YBTAS YEOTK YESIL YGGYO YIGIT YKBNK
YKSLN YONGA YUNSA YYAPI YYLGD ZEDUR ZERGY ZGYO ZOREN
ZRGYO
`;

let symbols = new Set(BUNDLED_CODES.trim().split(/\s+/));
let listDate = '13.10.2026';

let groupId;
let offset = 0;
let shuttingDown = false;
let polling = false;

const requestLimits = new Map();

const sleep = ms => new Promise(resolve => {
  setTimeout(resolve, ms);
});

function parseKap(html) {
  const text = html.replace(/\\"/g, '"');

  const begin = text.indexOf(
    '"marketName":"YILDIZ PAZAR"'
  );

  const end = text.indexOf(
    '"marketName":"YAPILANDIRILMIŞ',
    begin
  );

  if (begin < 0 || end < begin) {
    throw new Error('KAP formatı değişti');
  }

  const section = text.slice(begin, end);

  const codes = [
    ...section.matchAll(
      /"stockCode":"([A-Z0-9]{3,6})"/g
    )
  ].map(match => match[1]);

  const result = new Set(codes);

  if (result.size < 400 || result.size > 1200) {
    throw new Error('KAP listesi doğrulanamadı');
  }

  return result;
}

async function refreshSymbols() {
  try {
    const response = await fetch(
      'https://www.kap.org.tr/tr/Pazarlar',
      {
        signal: AbortSignal.timeout(20000)
      }
    );

    if (!response.ok) {
      throw new Error('KAP yanıt vermedi');
    }

    symbols = parseKap(await response.text());

    listDate = new Date().toLocaleDateString(
      'tr-TR',
      { timeZone: 'Europe/Istanbul' }
    );

    console.log(`KAP listesi güncellendi ${symbols.size}`);
  } catch {
    console.log(
      'KAP yenilenemedi mevcut liste kullanılıyor'
    );
  }
}

async function telegram(method, body) {
  const response = await fetch(
    `https://api.telegram.org/bot${TOKEN}/${method}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(40000)
    }
  );

  const result = await response.json();

  if (!result.ok) {
    const error = new Error(
      `Telegram ${result.error_code || response.status}`
    );

    error.wait = Number(
      result.parameters?.retry_after || 5
    );

    throw error;
  }

  return result.result;
}

function extractCodes(text) {
  const normalized = String(text)
    .normalize('NFKC')
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
    .toLocaleUpperCase('tr-TR')
    .replace(/İ/g, 'I');

  const tokens = normalized.match(
    /[\p{L}\p{N}]+/gu
  ) || [];

  return [
    ...new Set(
      tokens.filter(token => symbols.has(token))
    )
  ].slice(0, 3);
}

function mean(values) {
  return values.reduce(
    (total, value) => total + value,
    0
  ) / values.length;
}

function rsi(closes) {
  let gain = 0;
  let loss = 0;

  for (let i = 1; i <= 14; i++) {
    const difference = closes[i] - closes[i - 1];

    gain += Math.max(difference, 0);
    loss += Math.max(-difference, 0);
  }

  gain /= 14;
  loss /= 14;

  for (let i = 15; i < closes.length; i++) {
    const difference = closes[i] - closes[i - 1];

    gain = (
      gain * 13 + Math.max(difference, 0)
    ) / 14;

    loss = (
      loss * 13 + Math.max(-difference, 0)
    ) / 14;
  }

  if (gain === 0 && loss === 0) return 50;
  if (loss === 0) return 100;

  return 100 - 100 / (1 + gain / loss);
}

function analyze(bars) {
  const clean = bars.filter(bar => {
    return [
      bar.close,
      bar.high,
      bar.low
    ].every(Number.isFinite) &&
      bar.close > 0 &&
      bar.high >= bar.low;
  });

  if (clean.length < 50) {
    throw new Error('Yeterli günlük fiyat geçmişi yok');
  }

  const last = clean.at(-1);
  const closes = clean.map(bar => bar.close);

  const ma20 = mean(closes.slice(-20));
  const ma50 = mean(closes.slice(-50));

  const strength = rsi(closes);

  const positive = (
    last.close > ma20 &&
    ma20 > ma50
  );

  const negative = (
    last.close < ma20 &&
    ma20 < ma50
  );

  const recent = clean.slice(-20);

  const lows = recent
    .map(bar => bar.low)
    .filter(price => price < last.close);

  const highs = recent
    .map(bar => bar.high)
    .filter(price => price > last.close);

  const support = lows.length
    ? Math.min(...lows)
    : null;

  const resistance = highs.length
    ? Math.max(...highs)
    : null;

  return {
    price: last.close,
    positive,
    negative,
    strength,
    support,
    resistance
  };
}

function money(value) {
  return value.toLocaleString('tr-TR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }) + ' TL';
}

// Her sohbetin ayrı soru kuyruğu bulunur
// İlk cevap 60 saniye bekler
// Sonraki cevaplar arasında en az 60 saniye olur

function createReplyQueue({
  delayMs = 60000,
  maxPending = 100,
  setTimer = setTimeout,
  clearTimer = clearTimeout,
  onError = () => {
    console.error('Sıradaki yanıt gönderilemedi');
  }
} = {}) {
  const chats = new Map();

  let closed = false;

  function schedule(id, state) {
    state.timer = setTimer(() => {
      void run(id, state);
    }, delayMs);
  }

  async function run(id, state) {
    state.timer = null;

    if (closed) return;

    if (!state.jobs.length) {
      chats.delete(id);
      return;
    }

    state.running = true;

    const job = state.jobs.shift();

    try {
      await job();
    } catch (error) {
      onError(error);
    } finally {
      state.running = false;

      if (!closed) {
        schedule(id, state);
      }
    }
  }

  function enqueue(id, job) {
    if (closed) return false;

    let state = chats.get(id);

    if (!state) {
      state = {
        jobs: [],
        timer: null,
        running: false
      };

      chats.set(id, state);

      state.jobs.push(job);
      schedule(id, state);

      return true;
    }

    if (state.jobs.length >= maxPending) {
      return false;
    }

    state.jobs.push(job);

    return true;
  }

  function close() {
    closed = true;

    for (const state of chats.values()) {
      if (state.timer !== null) {
        clearTimer(state.timer);
      }
    }

    chats.clear();
  }

  function pending() {
    return [...chats.values()].reduce(
      (total, state) => total + state.jobs.length,
      0
    );
  }

  return {
    enqueue,
    close,
    pending
  };
}

const replyQueue = createReplyQueue();

function formatAnalysis(
  code,
  bars,
  meta,
  question = ''
) {
  const analysis = analyze(bars);

  const direction = analysis.positive
    ? 'pozitif'
    : analysis.negative
      ? 'negatif'
      : 'kararsız';

  let comment = analysis.positive
    ? 'yükseliş eğilimi korunuyor'
    : analysis.negative
      ? 'satış baskısı öne çıkıyor'
      : 'net yön oluşmuş değil';

  if (analysis.strength >= 70) {
    comment = analysis.positive
      ? 'yükseliş güçlü ancak kısa vadede yorulma riski var'
      : 'momentum yüksek ancak trend teyidi zayıf';
  } else if (analysis.strength <= 30) {
    comment = analysis.negative
      ? 'baskı sürüyor tepki gelse de dönüş teyidi yok'
      : 'tepki ihtimali var ancak güçlenme teyidi yok';
  }

  const recentVolumes = bars
    .slice(-21, -1)
    .map(bar => bar.volume)
    .filter(volume => {
      return Number.isFinite(volume) && volume > 0;
    });

  if (
    analysis.strength > 30 &&
    analysis.strength < 70 &&
    recentVolumes.length >= 10 &&
    Number.isFinite(meta.volume) &&
    meta.volume > mean(recentVolumes) * 1.5
  ) {
    if (analysis.positive) {
      comment = 'yükselişe yüksek işlem hacmi eşlik ediyor';
    } else if (analysis.negative) {
      comment = 'düşüşe yüksek işlem hacmi eşlik ediyor';
    }
  }

  let expectation =
    'Önümüzdeki seanslarda yönün netleşmesi beklenebilir';

  if (analysis.negative && analysis.support) {
    expectation =
      `Toparlanma zayıf kalırsa önümüzdeki seanslarda ` +
      `${money(analysis.support)} desteğine sarkabilir`;
  } else if (
    analysis.positive &&
    analysis.support &&
    analysis.resistance
  ) {
    expectation =
      `${money(analysis.support)} üzerinde kaldıkça ` +
      `önümüzdeki seanslarda ` +
      `${money(analysis.resistance)} direncini test edebilir`;
  } else if (
    analysis.positive &&
    analysis.resistance
  ) {
    expectation =
      `Yükseliş korunursa önümüzdeki seanslarda ` +
      `${money(analysis.resistance)} direnci izlenebilir`;
  } else if (
    analysis.positive &&
    analysis.support
  ) {
    expectation =
      `${money(analysis.support)} üzerinde ` +
      `yükseliş eğilimi korunabilir ` +
      `üst hedef için net seviye yok`;
  } else if (
    analysis.support &&
    analysis.resistance
  ) {
    expectation =
      `${money(analysis.support)} destek ` +
      `${money(analysis.resistance)} direnç ` +
      `bu aralık aşılmadan net yön beklemek zor`;
  }

  const lines = [
    `${code} son fiyat ${money(meta.price)}`,
    `Günlük yön ${direction} ${comment}`,
    expectation
  ];

  if (
    /lot|hacim|adet|tavan|taban|bekleyen/i.test(question)
  ) {
    if (
      Number.isFinite(meta.volume) &&
      meta.volume >= 0
    ) {
      lines.push(
        `Günlük gerçekleşen işlem miktarı ` +
        `${Math.round(meta.volume)} adet`
      );
    }

    if (/tavan|taban|bekleyen/i.test(question)) {
      lines.push(
        'Tavan taban ve bekleyen lot verisi bu kaynakta yok'
      );
    }
  }

  return lines.join('\n');
}

async function getComment(code, question = '') {
  const ticker = encodeURIComponent(code + '.IS');

  const url =
    `https://query1.finance.yahoo.com/v8/finance/chart/` +
    `${ticker}?range=6mo&interval=1d&_=${Date.now()}`;

  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0',
      'Cache-Control': 'no-cache'
    },
    cache: 'no-store',
    signal: AbortSignal.timeout(15000)
  });

  if (!response.ok) {
    throw new Error('Fiyat kaynağı yanıt vermedi');
  }

  const result = await response.json();

  const data = result.chart?.result?.[0];

  if (
    !data ||
    result.chart?.error ||
    data.meta?.currency !== 'TRY'
  ) {
    throw new Error('Hisse verisi bulunamadı');
  }

  const quotes = data.indicators?.quote?.[0];

  if (!quotes || !data.timestamp?.length) {
    throw new Error('Fiyat geçmişi yok');
  }

  const bars = data.timestamp
    .map((time, index) => ({
      time,
      close: quotes.close[index],
      high: quotes.high[index],
      low: quotes.low[index],
      volume: quotes.volume?.[index]
    }))
    .filter(bar => {
      return [
        bar.time,
        bar.close,
        bar.high,
        bar.low
      ].every(Number.isFinite) &&
        bar.close > 0;
    });

  const meta = {
    time: data.meta.regularMarketTime,
    price: data.meta.regularMarketPrice,
    volume: data.meta.regularMarketVolume
  };

  if (
    !Number.isFinite(meta.time) ||
    !Number.isFinite(meta.price)
  ) {
    throw new Error('Fiyat veya veri saati yok');
  }

  if (Date.now() / 1000 - meta.time > 4 * 86400) {
    return (
      `${code} son alınan fiyat ${money(meta.price)}\n` +
      `Fiyat verisi eski olduğu için ` +
      `güncel beklenti oluşturulamıyor`
    );
  }

  const last = bars.at(-1);

  if (!last) {
    throw new Error('Fiyat geçmişi yok');
  }

  const day = timestamp => {
    return new Date(
      timestamp * 1000
    ).toLocaleDateString('en-CA', {
      timeZone: 'Europe/Istanbul'
    });
  };

  if (day(last.time) === day(meta.time)) {
    last.close = meta.price;

    last.high = Math.max(
      last.high,
      meta.price
    );

    last.low = Math.min(
      last.low,
      meta.price
    );

    if (!Number.isFinite(meta.volume)) {
      meta.volume = last.volume;
    }
  } else {
    throw new Error(
      'Son fiyat ile günlük veri tarihi uyuşmuyor'
    );
  }

  if (bars.length < 50) {
    return (
      `${code} son fiyat ${money(meta.price)}\n` +
      `Teknik yorum için yeterli günlük geçmiş yok`
    );
  }

  return formatAnalysis(
    code,
    bars,
    meta,
    question
  );
}

async function handle(message, dependencies = {}) {
  if (
    !message?.text ||
    message.from?.is_bot
  ) {
    return;
  }

  const privateChat = (
    message.chat.type === 'private'
  );

  if (
    !privateChat &&
    String(message.chat.id) !== String(groupId) &&
    message.chat.username?.toLowerCase() !== GROUP
  ) {
    return;
  }

  const send = dependencies.telegram || telegram;

  const comment = (
    dependencies.getComment || getComment
  );

  const reply = async text => {
    return send('sendMessage', {
      chat_id: message.chat.id,
      text,
      message_thread_id: message.message_thread_id,
      reply_parameters: {
        message_id: message.message_id,
        allow_sending_without_reply: true
      }
    });
  };

  if (
    /^\/(start|help)(@\w+)?(?:\s|$)/i.test(
      message.text
    )
  ) {
    await reply(
      'ALFAS veya thyao yorumunuz nedir hocam gibi yazabilirsin\n' +
      'Sorular sıraya alınır ilk yanıt ve sonraki yanıtlar birer dakika bekler\n' +
      'Son alınan fiyat gecikmeli olabilir'
    );

    return;
  }

  if (
    /^\/durum(@\w+)?$/i.test(
      message.text.trim()
    )
  ) {
    await reply(
      `Tanımlı hisse kodu ${symbols.size}\n` +
      `KAP listesi ${listDate.replace(/\./g, ' ')}\n` +
      `Kaynak Yahoo Finance gecikmeli olabilir\n` +
      `Veri yanıt sırası geldiğinde yeniden istenir\n` +
      `Bekleyen soru ${replyQueue.pending()}\n` +
      `Yanıt aralığı 60 saniye\n` +
      `Hedef grup ${GROUP}`
    );

    return;
  }

  const codes = extractCodes(message.text);

  if (!codes.length) return;

  const userKey =
    `${message.chat.id}:` +
    `${message.from?.id || message.sender_chat?.id}`;

  let bucket = requestLimits.get(userKey);

  if (!bucket || bucket.until < Date.now()) {
    bucket = {
      count: 0,
      until: Date.now() + 60000,
      warned: false
    };

    requestLimits.set(userKey, bucket);
  }

  if (bucket.count >= 20) {
    if (!bucket.warned) {
      bucket.warned = true;

      await reply(
        'Çok hızlı sorgu geliyor bir dakika sonra tekrar deneyebilirsin'
      );
    }

    return;
  }

  bucket.count++;

  const enqueue = dependencies.enqueue || (
    (id, job) => replyQueue.enqueue(id, job)
  );

  const accepted = enqueue(
    String(message.chat.id),
    async () => {
      const answers = [];

      for (const code of codes) {
        try {
          answers.push(
            await comment(code, message.text)
          );
        } catch {
          answers.push(
            `${code} için güncel fiyat verisi alınamadı\n` +
            `Şu anda yorum üretemiyorum biraz sonra tekrar dene`
          );
        }
      }

      await reply(answers.join('\n\n'));
    }
  );

  if (!accepted) {
    await reply(
      'Soru kuyruğu dolu biraz sonra tekrar deneyebilirsin'
    );
  }
}

async function main() {
  if (
    !TOKEN ||
    !/^\d+:[\w-]+$/.test(TOKEN)
  ) {
    throw new Error(
      'Railway Variables alanına BOT_TOKEN ekle'
    );
  }

  await telegram('getMe', {});

  try {
    const chat = await telegram('getChat', {
      chat_id: '@' + GROUP
    });

    groupId = chat.id;
  } catch {
    console.log(
      'Grup kimliği alınamadı grup kullanıcı adıyla kontrol edilecek'
    );
  }

  await telegram('deleteWebhook', {
    drop_pending_updates: true
  });

  await refreshSymbols();

  const daily = setInterval(() => {
    void refreshSymbols();
  }, 86400000);

  daily.unref();

  const cleanup = setInterval(() => {
    for (const [key, value] of requestLimits) {
      if (value.until < Date.now()) {
        requestLimits.delete(key);
      }
    }
  }, 60000);

  cleanup.unref();

  console.log(
    `Bot hazır ${symbols.size} hisse kodu`
  );

  polling = true;

  while (!shuttingDown) {
    try {
      const updates = await telegram(
        'getUpdates',
        {
          offset,
          timeout: 25,
          allowed_updates: ['message']
        }
      );

      for (const update of updates) {
        offset = update.update_id + 1;

        try {
          await handle(update.message);
        } catch {
          console.error(
            'Mesaja yanıt gönderilemedi'
          );
        }
      }
    } catch (error) {
      console.error(
        'Telegram bağlantısı yeniden denenecek'
      );

      await sleep(
        Math.max(5, error.wait || 5) * 1000
      );
    }
  }
}

function startServer() {
  const server = http.createServer(
    (request, response) => {
      if (
        request.url !== '/' &&
        request.url !== '/health'
      ) {
        response.writeHead(404);
        response.end();
        return;
      }

      response.writeHead(
        polling ? 200 : 503,
        {
          'Content-Type': 'application/json'
        }
      );

      response.end(
        JSON.stringify({
          ok: polling,
          symbols: symbols.size
        })
      );
    }
  );

  server.listen(
    Number(process.env.PORT || 3000),
    '0.0.0.0'
  );

  process.on('SIGTERM', () => {
    shuttingDown = true;
    polling = false;

    replyQueue.close();
    server.close();

    setTimeout(() => {
      process.exit(0);
    }, 5000).unref();
  });

  main().catch(error => {
    console.error(error.message);
    process.exit(1);
  });
}

module.exports = {
  parseKap,
  extractCodes,
  analyze,
  formatAnalysis,
  getComment,
  handle,
  money,
  createReplyQueue
};

if (require.main === module) {
  startServer();
}
