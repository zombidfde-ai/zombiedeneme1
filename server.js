'use strict';
const http = require('node:http');
const TOKEN = '8579577038:AAFInyB5SHoBqF_Q8lhISGSlsNfMhsNcjnY'
const GROUP = 'daooadsfjdjd';
// KAP anlik liste yedegi; acilista ve her gun yenilenir.
const BUNDLED_CODES = 'A1CAP A1YEN AAGYO ACSEL ADEL ADESE ADGYO AEFES AFYON AGESA AGHOL AGROT AGYO AHGAZ AHSGY AKBNK AKCNS AKENR AKFGY AKFIS AKFYE AKGRT AKHAN AKMGY AKSA AKSEN AKSGY AKSUE AKYHO ALARK ALBRK ALBTN ALCAR ALCTL ALFAS ALGYO ALKA ALKIM ALKLC ALTNY ALVES ANELE ANGEN ANHYT ANSGR ARASE ARCLK ARDYZ ARENA ARFYE ARMGD ARSAN ARTMS ARZUM ASELS ASGYO ASTOR ASUZU ATAGY ATAKP ATATP ATATR ATEKS ATLAS ATSYH AVGYO AVHOL AVOD AVPGY AVTUR AYCES AYDEM AYEN AYES AYGAZ AZTEK BAGFS BAHKM BAKAB BALAT BALSU BANVT BARMA BASCM BASGZ BAYRK BEGYO BERA BESLR BESTE BETAE BEYAZ BFREN BIENY BIGCH BIGEN BIGTK BIMAS BINBN BINHO BIOEN BIZIM BJKAS BKRGY BLCYT BLUME BMSCH BMSTL BNTAS BOBET BORLS BORSK BOSSA BRISA BRKO BRKSN BRKVY BRLSM BRMEN BRSAN BRYAT BSOKE BTCIM BUCIM BULGS BURCE BURVA BVSAN BYDNR CANTE CASA CATES CCOLA CELHA CEMAS CEMTS CEMZY CEOEM CGCAM CIMSA CITAS CLEBI CMBTN CMENT CONSE COSMO CRDFA CRFSA CUSAN CVKMD CWENE DAGI DAPGM DARDL DCTTR DENGE DERHL DERIM DESA DESPC DEVA DGATE DGGYO DGNMO DIRIT DITAS DMRGD DMSAS DNISI DOAS DOCO DOFER DOFRB DOGUB DOHOL DOKTA DSTKF DUNYH DURDO DURKN DYOBY DZGYO EBEBK ECILC ECOGR ECZYT EDATA EDIP EFOR EGEEN EGEGY EGEPO EGGUB EGPRO EGSER EKDMR EKGYO EKIM EKIZ EKOS EKSUN ELITE EMKEL EMNIS EMPAE ENDAE ENERY ENJSA ENKAI ENPRA ENSRI ENTRA EPLAS ERBOS ERCB EREGL ERSU ESCAR ESCOM ESEN ETILR ETYAT EUHOL EUKYO EUPWR EUREN EUYO EYGYO FADE FENER FLAP FMIZP FONET FORMT FORTE FRIGO FRMPL FROTO FZLGY GARAN GARFA GATEG GEDIK GEDZA GENIL GENKM GENTS GEREL GESAN GIPTA GLBMD GLCVY GLRMK GLRYH GLYHO GMTAS GOKNR GOLDA GOLTS GOODY GOZDE GRNYO GRSEL GRTHO GSDDE GSDHO GSRAY GUBRF GUNDG GWIND GZNMI HALKB HATEK HATSN HDFGS HEDEF HEKTS HKTM HLGYO HOROZ HRKET HTTBT HUBVC HUNER HURGZ ICBCT ICUGS IDGYO IEYHO IHAAS IHEVA IHGZT IHLAS IHLGM IHYAY IMASM INDES INFO INGRM INTEK INTEM INTET INVEO INVES ISATR ISBIR ISBTR ISCTR ISDMR ISFIN ISGSY ISGYO ISKPL ISKUR ISMEN ISSEN ISVEA ISYAT IZENR IZFAS IZINV IZMDC JANTS KAPLM KARCL KAREL KARSN KARTN KATMR KAYSE KBORU KCAER KCHOL KENT KERVN KFEIN KGYO KIMMR KLGYO KLKIM KLMSN KLNMA KLRHO KLSER KLSYN KLYPV KMPUR KNFRT KOCMT KONKA KONTR KONYA KOPOL KORDS KOTON KPEKS KRDMA KRDMB KRDMD KRGYO KRONT KRPLS KRSTL KRTEK KRVGD KSTUR KTLEV KTSKR KUTPO KUVVA KUYAS KZBGY KZGYO LIDER LIDFA LILAK LINK LKMNH LMKDC LOGO LRSHO LUKSK LXGYO LYDHO LYDYE MAALT MACKO MAGEN MAKIM MAKTK MANAS MARBL MARMR MARTI MASFN MAVI MCARD MEDTR MEGAP MEGMT MEKAG MEPET MERCN MERIT MERKO METEN METRO MEYSU MGROS MHRGY MIATK MMCAS MNDRS MNDTR MOBTL MOGAN MOPAS MPARK MRGYO MRSHL MSGYO MTRKS MTRYO MZHLD NATEN NETAS NETCD NETGL NIBAS NTGAZ NTHOL NUGYO NUHCM OBAMS OBASE ODAS ODINE OFSYM ONCSM ONRYT ORCAY ORGE ORMA ORZAX OSMEN OSTIM OTKAR OTTO OYAKC OYAYO OYLUM OYYAT OZATD OZGYO OZKGY OZRDN OZSUB OZYSR PAGYO PAHOL PAMEL PAPIL PARSN PASEU PATEK PCILT PEKGY PENGD PENTA PETKM PETUN PGSUS PINSU PKART PKENT PLTUR PNLSN PNSUT POLHO POLTK PRDGS PRKAB PRKME PRZMA PSDTC PSGYO QNBFK QNBTR QUAGR QUICK RALYH RAYSG REEDR RGYAS RNPOL RODRG RTALB RUBNS RUZYE RYGYO RYSAS SAFKR SAHOL SAMAT SANEL SANFM SANKO SARAE SARKY SASA SAYAS SDTTR SEGMN SEGYO SEKFK SEKUR SELEC SELVA SERNT SEYKM SILVR SISE SKBNK SKTAS SKYLP SKYMD SMART SMRTG SMRVA SNGYO SNICA SNPAM SODSN SOHOE SOKE SOKM SONME SRVGY SSAAT SUMAS SUNTK SURGY SUWEN SVGYO TABGD TARKM TATEN TATGD TAVHL TBORG TCELL TCKRC TDGYO TEHOL TEKTU TERA TEZOL TGSAS THYAO TKFEN TKNKA TKNSA TLMAN TMPOL TMSN TNZTP TOASO TRALT TRCAS TRENJ TRGYO TRHOL TRILC TRMET TSGYO TSKB TSPOR TTKOM TTRAK TUCLK TUKAS TUPRS TUREX TURGG TURSG UCAYM UFUK ULAS ULKER ULUFA ULUSE ULUUN UMPAS UNLU USAK USHOL VAKBN VAKFA VAKFN VAKKO VANGD VBTYZ VERTU VERUS VESBE VESTL VEYAS VKFYO VKGYO VKING VRGYO VSNMD YAPRK YATAS YAYLA YBTAS YEOTK YESIL YGGYO YIGIT YKBNK YKSLN YONGA YUNSA YYAPI YYLGD ZEDUR ZERGY ZGYO ZOREN ZRGYO';
let symbols = new Set(BUNDLED_CODES.split(' '));
let listDate = '13.10.2026';
let groupId;
let offset = 0;
let shuttingDown = false;
let polling = false;
const requestLimits = new Map();
const sleep = ms => new Promise(r=>setTimeout(r,ms));
function parseKap(html) {
  const text = html.replace(/\\"/g, '"');
  const begin = text.indexOf('"marketName":"YILDIZ PAZAR"');
  const end = text.indexOf('"marketName":"YAPILANDIRILMIŞ', begin);
  if (begin < 0 || end < begin) throw new Error('KAP formati degisti');
  const codes = [...text.slice(begin,end).matchAll(/"stockCode":"([A-Z0-9]{3,6})"/g)].map(m=>m[1]);
  const result = new Set(codes);
  if (result.size < 400 || result.size > 1200) throw new Error('KAP listesi dogrulanamadi');
  return result;
}
async function refreshSymbols() {
  try {
    const r = await fetch('https://www.kap.org.tr/tr/Pazarlar', {signal:AbortSignal.timeout(20000)});
    if (!r.ok) throw new Error();
    symbols = parseKap(await r.text());
    listDate = new Date().toLocaleDateString('tr-TR',{timeZone:'Europe/Istanbul'});
    console.log(`KAP listesi: ${symbols.size} kod`);
  } catch { console.log('KAP yenilenemedi; mevcut liste kullaniliyor.'); }
}
async function telegram(method,body) {
  const r = await fetch(`https://api.telegram.org/bot${TOKEN}/${method}`,{
    method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body),signal:AbortSignal.timeout(40000)
  });
  const j=await r.json();
  if (!j.ok) {
    const e=new Error(`Telegram ${j.error_code || r.status}`);
    e.wait=Number(j.parameters?.retry_after || 5);throw e;
  }
  return j.result;
}
function extractCodes(text) {
  const normalized=String(text).normalize('NFKC').replace(/[\u200B-\u200D\uFEFF]/g,'')
    .toLocaleUpperCase('tr-TR').replace(/İ/g,'I');
  const tokens=normalized.match(/[\p{L}\p{N}]+/gu) || [];
  return [...new Set(tokens.filter(t=>symbols.has(t)))].slice(0,3);
}
function mean(v) {return v.reduce((a,b)=>a+b,0)/v.length;}
function rsi(closes) {
  let gain=0,loss=0;
  for(let i=1;i<=14;i++) {const d=closes[i]-closes[i-1];gain+=Math.max(d,0);loss+=Math.max(-d,0);}
  gain/=14;loss/=14;
  for(let i=15;i<closes.length;i++) {const d=closes[i]-closes[i-1];gain=(gain*13+Math.max(d,0))/14;loss=(loss*13+Math.max(-d,0))/14;}
  return gain===0 && loss===0?50:loss===0?100:100-100/(1+gain/loss);
}
function analyze(bars) {
  const clean=bars.filter(b=>[b.close,b.high,b.low].every(Number.isFinite) && b.close>0 && b.high>=b.low);
  if(clean.length<50) throw new Error('Yeterli gunluk fiyat gecmisi yok');
  const last=clean.at(-1), closes=clean.map(b=>b.close);
  const ma20=mean(closes.slice(-20)),ma50=mean(closes.slice(-50)),strength=rsi(closes);
  const positive=last.close>ma20 && ma20>ma50;
  const negative=last.close<ma20 && ma20<ma50;
  const recent=clean.slice(-20);
  const lows=recent.map(b=>b.low).filter(p=>p<last.close);
  const highs=recent.map(b=>b.high).filter(p=>p>last.close);
  const support=lows.length?Math.min(...lows):null;
  const resistance=highs.length?Math.max(...highs):null;
  return {price:last.close,positive,negative,strength,support,resistance};
}
function money(value) {
  const cents=Math.round(value*100),whole=Math.floor(cents/100),part=cents%100;
  return part?`${whole} lira ${String(part).padStart(2,'0')} kuruş`:`${whole} TL`;
}
function stamp(time) {
  const d=new Date(time*1000);
  const date=d.toLocaleDateString('tr-TR',{timeZone:'Europe/Istanbul',day:'numeric',month:'long'});
  const hour=d.toLocaleTimeString('tr-TR',{timeZone:'Europe/Istanbul',hour:'2-digit',minute:'2-digit',hour12:false}).replace(':',' ');
  return `${date} saat ${hour}`;
}
function formatAnalysis(code,bars,meta,question='') {
  const a=analyze(bars);
  const direction=a.positive?'pozitif':a.negative?'negatif':'kararsız';
  let comment=a.positive?'yükseliş eğilimi korunuyor':a.negative?'satış baskısı öne çıkıyor':'net yön oluşmuş değil';
  if(a.strength>=70) comment=a.positive?'yükseliş güçlü ancak kısa vadede yorulma riski var':'momentum yüksek ancak trend teyidi zayıf';
  else if(a.strength<=30) comment=a.negative?'baskı sürüyor tepki gelse de dönüş teyidi yok':'tepki ihtimali var ancak güçlenme teyidi yok';
  const recent=bars.slice(-21,-1).map(b=>b.volume).filter(v=>Number.isFinite(v) && v>0);
  if(a.strength>30 && a.strength<70 && recent.length>=10 && Number.isFinite(meta.volume) && meta.volume>mean(recent)*1.5) {
    comment=a.positive?'yükselişe yüksek işlem hacmi eşlik ediyor':a.negative?'düşüşe yüksek işlem hacmi eşlik ediyor':comment;
  }
  const levels=[];
  if(a.support) levels.push(`Destek ${money(a.support)}`);
  if(a.resistance) levels.push(`direnç ${money(a.resistance)}`);
  const age=Date.now()/1000-meta.time;
  const lines=[`${code} son fiyat ${money(meta.price)}`,`Günlük yön ${direction} ${comment}`];
  if(levels.length) lines.push(levels.join('  '));
  if(/lot|hacim|adet|tavan|taban|bekleyen/i.test(question)) {
    if(Number.isFinite(meta.volume) && meta.volume>=0) lines.push(`Günlük gerçekleşen işlem miktarı ${Math.round(meta.volume)} adet`);
    if(/tavan|taban|bekleyen/i.test(question)) lines.push('Tavan taban ve bekleyen lot verisi bu kaynakta yok');
  }
  lines.push(`Yahoo verisi ${stamp(meta.time)} TSİ ${age>4*86400?'eski veri':'gecikmeli olabilir'}`);
  return lines.join('\n');
}
async function getComment(code,question='') {
  const ticker=encodeURIComponent(code+'.IS');
  const url=`https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?range=6mo&interval=1d&_=${Date.now()}`;
  const r=await fetch(url,{headers:{'User-Agent':'Mozilla/5.0','Cache-Control':'no-cache'},cache:'no-store',signal:AbortSignal.timeout(15000)});
  if(!r.ok) throw new Error('Fiyat kaynagi yanit vermedi');
  const j=await r.json(), data=j.chart?.result?.[0];
  if(!data || j.chart?.error || data.meta?.currency!=='TRY') throw new Error('Hisse verisi bulunamadi');
  const q=data.indicators?.quote?.[0];
  if(!q || !data.timestamp?.length) throw new Error('Fiyat gecmisi yok');
  const bars=data.timestamp.map((time,i)=>({time,close:q.close[i],high:q.high[i],low:q.low[i],volume:q.volume?.[i]}))
    .filter(b=>[b.time,b.close,b.high,b.low].every(Number.isFinite) && b.close>0);
  const meta={time:data.meta.regularMarketTime,price:data.meta.regularMarketPrice,volume:data.meta.regularMarketVolume};
  if(!Number.isFinite(meta.time) || !Number.isFinite(meta.price)) throw new Error('Fiyat zamani yok');
  const last=bars.at(-1);
  if(!last) throw new Error('Fiyat gecmisi yok');
  const day=t=>new Date(t*1000).toLocaleDateString('en-CA',{timeZone:'Europe/Istanbul'});
  if(day(last.time)===day(meta.time)) {
    last.close=meta.price;
    last.high=Math.max(last.high,meta.price);
    last.low=Math.min(last.low,meta.price);
    if(!Number.isFinite(meta.volume)) meta.volume=last.volume;
  } else throw new Error('Son fiyat ile gunluk veri tarihi uyusmuyor');
  if(bars.length<50) {
    return `${code} son fiyat ${money(meta.price)}\nTeknik yorum için yeterli günlük geçmiş yok\nYahoo verisi ${stamp(meta.time)} TSİ gecikmeli olabilir`;
  }
  return formatAnalysis(code,bars,meta,question);
}
async function handle(m,deps={}) {
  if(!m?.text || m.from?.is_bot) return;
  const privateChat=m.chat.type==='private';
  if(!privateChat && String(m.chat.id)!==String(groupId) && m.chat.username?.toLowerCase()!==GROUP) return;
  const send=deps.telegram || telegram;
  const comment=deps.getComment || getComment;
  const reply=async text=>send('sendMessage',{chat_id:m.chat.id,text,message_thread_id:m.message_thread_id,
    reply_parameters:{message_id:m.message_id,allow_sending_without_reply:true}});
  if(/^\/(start|help)(@\w+)?(?:\s|$)/i.test(m.text)) {
    await reply('ALFAS veya thyao yorumunuz nedir hocam gibi yazabilirsin\nSon alınan fiyatı ve kısa günlük teknik yorumu paylaşırım\nVeri gecikmeli olabilir');return;
  }
  if(/^\/durum(@\w+)?$/i.test(m.text.trim())) {
    await reply(`Tanımlı hisse kodu ${symbols.size}\nKAP listesi ${listDate.replace(/\./g,' ')}\nKaynak Yahoo Finance\nHer sorguda yeniden veri istenir\nHedef grup ${GROUP}`);return;
  }
  const codes=extractCodes(m.text);
  if(!codes.length) return;
  const userKey=`${m.chat.id}:${m.from?.id || m.sender_chat?.id}`;
  // Eski 10 saniyelik sessiz engel art arda sorulari cevapsiz birakiyordu
  // Artik dakikada 20 sorguya kadar tum sorular cevaplanir
  let bucket=requestLimits.get(userKey);
  if(!bucket || bucket.until<Date.now()) {bucket={count:0,until:Date.now()+60000,warned:false};requestLimits.set(userKey,bucket);}
  if(bucket.count>=20) {
    if(!bucket.warned) {bucket.warned=true;await reply('Çok hızlı sorgu geliyor bir dakika sonra tekrar deneyebilirsin');}
    return;
  }
  bucket.count++;
  for(const code of codes) {
    let text;
    try {text=await comment(code,m.text);}
    catch {text=`${code} için güncel fiyat verisi alınamadı\nŞu anda yorum üretemiyorum biraz sonra tekrar dene`;}
    await reply(text);
  }
}
async function main() {
  if(!TOKEN || !/^\d+:[\w-]+$/.test(TOKEN)) throw new Error('Railway Variables alanina BOT_TOKEN ekle');
  await telegram('getMe',{});
  try {const chat=await telegram('getChat',{chat_id:'@'+GROUP});groupId=chat.id;}
  catch {console.log('Grup kimligi alinamadi; grup kullanici adiyla kontrol edilecek.');}
  await telegram('deleteWebhook',{drop_pending_updates:true});
  await refreshSymbols();
  const daily=setInterval(()=>void refreshSymbols(),86400000);daily.unref();
  setInterval(()=>{for(const [k,v] of requestLimits) if(v.until<Date.now()) requestLimits.delete(k);},60000).unref();
  console.log(`Bot hazir: ${symbols.size} hisse kodu`);
  polling=true;
  while(!shuttingDown) {
    try {
      const updates=await telegram('getUpdates',{offset,timeout:25,allowed_updates:['message']});
      for(const u of updates) {
        offset=u.update_id+1;
        try {await handle(u.message);} catch {console.error('Mesaja yanit gonderilemedi.');}
      }
    } catch(e) {console.error('Telegram baglantisi yeniden denenecek.');await sleep(Math.max(5,e.wait || 5)*1000);}
  }
}
function startServer() {
  const server=http.createServer((req,res)=>{
    if(req.url!=='/' && req.url!=='/health') {res.writeHead(404);res.end();return;}
    res.writeHead(polling?200:503,{'Content-Type':'application/json'});
    res.end(JSON.stringify({ok:polling,symbols:symbols.size}));
  });
  server.listen(Number(process.env.PORT || 3000),'0.0.0.0');
  process.on('SIGTERM',()=>{shuttingDown=true;polling=false;server.close();setTimeout(()=>process.exit(0),5000).unref();});
  main().catch(e=>{console.error(e.message);process.exit(1);});
}
module.exports={parseKap,extractCodes,analyze,formatAnalysis,getComment,handle,money};
if(require.main===module) startServer();
