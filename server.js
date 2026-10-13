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
const cache = new Map();
const cooldown = new Map();
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
  const tokens=String(text).toLocaleUpperCase('tr-TR').replace(/İ/g,'I').match(/[A-Z0-9]+/g) || [];
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
function formatAnalysis(code,bars,meta) {
  const a=analyze(bars);
  const n=x=>x.toLocaleString('tr-TR',{minimumFractionDigits:2,maximumFractionDigits:2});
  const direction=a.positive?'Pozitif':a.negative?'Negatif':'Yatay / kararsız';
  let comment=a.positive?'Yükseliş eğilimi öne çıkıyor.':a.negative?'Satış baskısı öne çıkıyor.':'Göstergeler net yön vermiyor.';
  if(a.strength>=70) comment+=' RSI yüksek; geri çekilme riski artmış olabilir.';
  else if(a.strength<=30) comment+=' RSI düşük; tepki ihtimali var, dönüş teyidi yok.';
  const levels=[];
  if(a.support) levels.push(`${n(a.support)} destek`);
  if(a.resistance) levels.push(`${n(a.resistance)} direnç`);
  const timestamp=new Date(meta.time*1000).toLocaleString('tr-TR',{timeZone:'Europe/Istanbul',dateStyle:'short',timeStyle:'short'});
  const barDate=new Date(bars.at(-1).time*1000).toLocaleDateString('tr-TR',{timeZone:'Europe/Istanbul'});
  const age=Date.now()/1000-meta.time;
  const ageNote=age>4*86400?' Veri eski; güncel görünümü yansıtmayabilir.':'';
  return `${code} | ${direction}\n${comment}\n${levels.length?levels.join(' • '):'Yakın seviye hesaplanamadı.'}\nSon fiyat: ${n(meta.price)} TL\nGünlük teknik görünüm (${barDate}); açık seans mumu değişebilir.\nYahoo Finance: ${timestamp} TSİ; gecikmeli olabilir.${ageNote}\nOtomatik teknik yorum; yatırım tavsiyesi değildir.`;
}
async function getComment(code) {
  const saved=cache.get(code);
  if(saved && saved.until>Date.now()) return saved.text;
  const ticker=encodeURIComponent(code+'.IS');
  const url=`https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?range=6mo&interval=1d`;
  const r=await fetch(url,{headers:{'User-Agent':'Mozilla/5.0'},signal:AbortSignal.timeout(15000)});
  if(!r.ok) throw new Error('Fiyat kaynagi yanit vermedi');
  const j=await r.json(), data=j.chart?.result?.[0];
  if(!data || j.chart?.error || data.meta?.currency!=='TRY') throw new Error('Hisse verisi bulunamadi');
  const q=data.indicators?.quote?.[0];
  if(!q || !data.timestamp?.length) throw new Error('Fiyat gecmisi yok');
  const bars=data.timestamp.map((time,i)=>({time,close:q.close[i],high:q.high[i],low:q.low[i]}))
    .filter(b=>[b.time,b.close,b.high,b.low].every(Number.isFinite) && b.close>0);
  const meta={time:data.meta.regularMarketTime,price:data.meta.regularMarketPrice};
  if(!Number.isFinite(meta.time) || !Number.isFinite(meta.price)) throw new Error('Fiyat zamani yok');
  const text=formatAnalysis(code,bars,meta);
  cache.set(code,{text,until:Date.now()+300000});
  return text;
}
async function handle(m) {
  if(!m?.text || m.from?.is_bot) return;
  const privateChat=m.chat.type==='private';
  if(!privateChat && String(m.chat.id)!==String(groupId) && m.chat.username?.toLowerCase()!==GROUP) return;
  const reply=async text=>telegram('sendMessage',{chat_id:m.chat.id,text,message_thread_id:m.message_thread_id,
    reply_parameters:{message_id:m.message_id,allow_sending_without_reply:true}});
  if(/^\/(start|help)(@\w+)?(?:\s|$)/i.test(m.text)) {
    await reply('Hisse kodunu yaz: ALFAS, THYAO, ASELS. Günlük fiyatlardan kısa teknik yorum veririm. /durum: liste bilgisi. Fiyat kaynağı gecikmeli veya geçici olarak kullanılamaz olabilir.');return;
  }
  if(/^\/durum(@\w+)?$/i.test(m.text.trim())) {
    await reply(`Tanımlı hisse kodu: ${symbols.size}\nKAP liste tarihi: ${listDate}\nVeri: Yahoo Finance, günlük mumlar.\nHedef grup: @${GROUP}`);return;
  }
  const codes=extractCodes(m.text);
  if(!codes.length) return;
  const userKey=`${m.chat.id}:${m.from?.id || m.sender_chat?.id}`;
  if((cooldown.get(userKey) || 0)>Date.now()) return;
  cooldown.set(userKey,Date.now()+10000);
  for(const code of codes) {
    let text;
    try {text=await getComment(code);}
    catch {text=`${code}: Doğrulanmış fiyat verisi alınamadı veya geçmiş yetersiz. Şu anda yorum üretemiyorum; biraz sonra tekrar dene.`;}
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
  setInterval(()=>{for(const [k,v] of cooldown) if(v<Date.now()) cooldown.delete(k);for(const [k,v] of cache) if(v.until<Date.now()) cache.delete(k);},60000).unref();
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
module.exports={parseKap,extractCodes,analyze,formatAnalysis,getComment};
if(require.main===module) startServer();
