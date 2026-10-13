'use strict';
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const BOT_TOKEN = '8579577038:AAFInyB5SHoBqF_Q8lhISGSlsNfMhsNcjnY'
const GROUP = 'daooadsfjdjd';
const BUNDLED_CODES = 'A1CAP A1YEN AAGYO ACSEL ADEL ADESE ADGYO AEFES AFYON AGESA AGHOL AGROT AGYO AHGAZ AHSGY AKBNK AKCNS AKENR AKFGY AKFIS AKFYE AKGRT AKHAN AKMGY AKSA AKSEN AKSGY AKSUE AKYHO ALARK ALBRK ALBTN ALCAR ALCTL ALFAS ALGYO ALKA ALKIM ALKLC ALTNY ALVES ANELE ANGEN ANHYT ANSGR ARASE ARCLK ARDYZ ARENA ARFYE ARMGD ARSAN ARTMS ARZUM ASELS ASGYO ASTOR ASUZU ATAGY ATAKP ATATP ATATR ATEKS ATLAS ATSYH AVGYO AVHOL AVOD AVPGY AVTUR AYCES AYDEM AYEN AYES AYGAZ AZTEK BAGFS BAHKM BAKAB BALAT BALSU BANVT BARMA BASCM BASGZ BAYRK BEGYO BERA BESLR BESTE BETAE BEYAZ BFREN BIENY BIGCH BIGEN BIGTK BIMAS BINBN BINHO BIOEN BIZIM BJKAS BKRGY BLCYT BLUME BMSCH BMSTL BNTAS BOBET BORLS BORSK BOSSA BRISA BRKO BRKSN BRKVY BRLSM BRMEN BRSAN BRYAT BSOKE BTCIM BUCIM BULGS BURCE BURVA BVSAN BYDNR CANTE CASA CATES CCOLA CELHA CEMAS CEMTS CEMZY CEOEM CGCAM CIMSA CITAS CLEBI CMBTN CMENT CONSE COSMO CRDFA CRFSA CUSAN CVKMD CWENE DAGI DAPGM DARDL DCTTR DENGE DERHL DERIM DESA DESPC DEVA DGATE DGGYO DGNMO DIRIT DITAS DMRGD DMSAS DNISI DOAS DOCO DOFER DOFRB DOGUB DOHOL DOKTA DSTKF DUNYH DURDO DURKN DYOBY DZGYO EBEBK ECILC ECOGR ECZYT EDATA EDIP EFOR EGEEN EGEGY EGEPO EGGUB EGPRO EGSER EKDMR EKGYO EKIM EKIZ EKOS EKSUN ELITE EMKEL EMNIS EMPAE ENDAE ENERY ENJSA ENKAI ENPRA ENSRI ENTRA EPLAS ERBOS ERCB EREGL ERSU ESCAR ESCOM ESEN ETILR ETYAT EUHOL EUKYO EUPWR EUREN EUYO EYGYO FADE FENER FLAP FMIZP FONET FORMT FORTE FRIGO FRMPL FROTO FZLGY GARAN GARFA GATEG GEDIK GEDZA GENIL GENKM GENTS GEREL GESAN GIPTA GLBMD GLCVY GLRMK GLRYH GLYHO GMTAS GOKNR GOLDA GOLTS GOODY GOZDE GRNYO GRSEL GRTHO GSDDE GSDHO GSRAY GUBRF GUNDG GWIND GZNMI HALKB HATEK HATSN HDFGS HEDEF HEKTS HKTM HLGYO HOROZ HRKET HTTBT HUBVC HUNER HURGZ ICBCT ICUGS IDGYO IEYHO IHAAS IHEVA IHGZT IHLAS IHLGM IHYAY IMASM INDES INFO INGRM INTEK INTEM INTET INVEO INVES ISATR ISBIR ISBTR ISCTR ISDMR ISFIN ISGSY ISGYO ISKPL ISKUR ISMEN ISSEN ISVEA ISYAT IZENR IZFAS IZINV IZMDC JANTS KAPLM KARCL KAREL KARSN KARTN KATMR KAYSE KBORU KCAER KCHOL KENT KERVN KFEIN KGYO KIMMR KLGYO KLKIM KLMSN KLNMA KLRHO KLSER KLSYN KLYPV KMPUR KNFRT KOCMT KONKA KONTR KONYA KOPOL KORDS KOTON KPEKS KRDMA KRDMB KRDMD KRGYO KRONT KRPLS KRSTL KRTEK KRVGD KSTUR KTLEV KTSKR KUTPO KUVVA KUYAS KZBGY KZGYO LIDER LIDFA LILAK LINK LKMNH LMKDC LOGO LRSHO LUKSK LXGYO LYDHO LYDYE MAALT MACKO MAGEN MAKIM MAKTK MANAS MARBL MARMR MARTI MASFN MAVI MCARD MEDTR MEGAP MEGMT MEKAG MEPET MERCN MERIT MERKO METEN METRO MEYSU MGROS MHRGY MIATK MMCAS MNDRS MNDTR MOBTL MOGAN MOPAS MPARK MRGYO MRSHL MSGYO MTRKS MTRYO MZHLD NATEN NETAS NETCD NETGL NIBAS NTGAZ NTHOL NUGYO NUHCM OBAMS OBASE ODAS ODINE OFSYM ONCSM ONRYT ORCAY ORGE ORMA ORZAX OSMEN OSTIM OTKAR OTTO OYAKC OYAYO OYLUM OYYAT OZATD OZGYO OZKGY OZRDN OZSUB OZYSR PAGYO PAHOL PAMEL PAPIL PARSN PASEU PATEK PCILT PEKGY PENGD PENTA PETKM PETUN PGSUS PINSU PKART PKENT PLTUR PNLSN PNSUT POLHO POLTK PRDGS PRKAB PRKME PRZMA PSDTC PSGYO QNBFK QNBTR QUAGR QUICK RALYH RAYSG REEDR RGYAS RNPOL RODRG RTALB RUBNS RUZYE RYGYO RYSAS SAFKR SAHOL SAMAT SANEL SANFM SANKO SARAE SARKY SASA SAYAS SDTTR SEGMN SEGYO SEKFK SEKUR SELEC SELVA SERNT SEYKM SILVR SISE SKBNK SKTAS SKYLP SKYMD SMART SMRTG SMRVA SNGYO SNICA SNPAM SODSN SOHOE SOKE SOKM SONME SRVGY SSAAT SUMAS SUNTK SURGY SUWEN SVGYO TABGD TARKM TATEN TATGD TAVHL TBORG TCELL TCKRC TDGYO TEHOL TEKTU TERA TEZOL TGSAS THYAO TKFEN TKNKA TKNSA TLMAN TMPOL TMSN TNZTP TOASO TRALT TRCAS TRENJ TRGYO TRHOL TRILC TRMET TSGYO TSKB TSPOR TTKOM TTRAK TUCLK TUKAS TUPRS TUREX TURGG TURSG UCAYM UFUK ULAS ULKER ULUFA ULUSE ULUUN UMPAS UNLU USAK USHOL VAKBN VAKFA VAKFN VAKKO VANGD VBTYZ VERTU VERUS VESBE VESTL VEYAS VKFYO VKGYO VKING VRGYO VSNMD YAPRK YATAS YAYLA YBTAS YEOTK YESIL YGGYO YIGIT YKBNK YKSLN YONGA YUNSA YYAPI YYLGD ZEDUR ZERGY ZGYO ZOREN ZRGYO';
const MINUTE = 60000;
const HISTORY_LIMIT = 12;
const TTL = 30 * 86400000;
const sleep = ms => new Promise(r => setTimeout(r, ms));
const money = n => n.toLocaleString('tr-TR', {minimumFractionDigits:2, maximumFractionDigits:2}) + ' TL';
const number = n => n.toLocaleString('tr-TR', {maximumFractionDigits:2});
function createStore(dir) {
  fs.mkdirSync(dir,{recursive:true,mode:0o700});
  const file = path.join(dir,'state.json');
  const state = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file,'utf8')) : {
    version:2,offset:0,jobs:[],memories:{},lastReply:{},revisions:{},failures:[],
    symbols:BUNDLED_CODES.split(' '),listDate:'13.10.2026'
  };
  if (state.version !== 2 || !Array.isArray(state.jobs) || !Array.isArray(state.symbols)) throw new Error('Kayit dosyasi gecersiz');
  function save() {
    try {
      const temp=file+'.tmp';
      const fd=fs.openSync(temp,'w',0o600);
      try { fs.writeFileSync(fd,JSON.stringify(state)); fs.fsyncSync(fd); } finally { fs.closeSync(fd); }
      fs.renameSync(temp,file);
    } catch(e) {e.storage=true;throw e;}
  }
  return {state,save};
}
function parseKap(html) {
  const text=html.replace(/\\"/g,'"');
  const begin=text.indexOf('"marketName":"YILDIZ PAZAR"');
  const end=text.indexOf('"marketName":"YAPILANDIRILMIŞ',begin);
  if(begin<0 || end<begin) throw new Error('KAP formati degisti');
  const codes=[...new Set([...text.slice(begin,end).matchAll(/"stockCode":"([A-Z0-9]{3,6})"/g)].map(m=>m[1]))];
  if(codes.length<400 || codes.length>1200) throw new Error('KAP listesi eksik');
  return codes;
}
function extractCodes(text,symbols) {
  const tokens=String(text).normalize('NFKC').replace(/[\u200B-\u200D\uFEFF]/g,'')
    .toLocaleUpperCase('tr-TR').replace(/İ/g,'I').match(/[\p{L}\p{N}]+/gu) || [];
  return [...new Set(tokens.filter(t=>symbols.has(t)))].slice(0,3);
}
const mean = values => values.reduce((a,b)=>a+b,0)/values.length;
function technical(bars) {
  if(bars.length<50) return null;
  const closes=bars.map(b=>b.close),price=closes.at(-1);
  const ma20=mean(closes.slice(-20)),ma50=mean(closes.slice(-50));
  let gain=0,loss=0;
  for(let i=1;i<=14;i++) {const d=closes[i]-closes[i-1];gain+=Math.max(d,0)/14;loss+=Math.max(-d,0)/14;}
  for(let i=15;i<closes.length;i++) {const d=closes[i]-closes[i-1];gain=(gain*13+Math.max(d,0))/14;loss=(loss*13+Math.max(-d,0))/14;}
  const rsi=gain===0 && loss===0?50:loss===0?100:100-100/(1+gain/loss);
  const recent=bars.slice(-20),lows=recent.map(b=>b.low).filter(n=>n<price),highs=recent.map(b=>b.high).filter(n=>n>price);
  const volumes=bars.slice(-21,-1).map(b=>b.volume).filter(n=>Number.isFinite(n) && n>0);
  return {direction:price>ma20 && ma20>ma50?'pozitif':price<ma20 && ma20<ma50?'negatif':'kararsız',
    ma20,ma50,rsi,support:lows.length?Math.min(...lows):null,resistance:highs.length?Math.max(...highs):null,
    averageVolume:volumes.length>=10?mean(volumes):null};
}
async function marketData(code,fetchFn=fetch) {
  const url=`https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(code+'.IS')}?range=6mo&interval=1d&_=${Date.now()}`;
  const r=await fetchFn(url,{headers:{'User-Agent':'Mozilla/5.0','Cache-Control':'no-cache'},cache:'no-store',signal:AbortSignal.timeout(15000)});
  if(!r.ok) throw new Error('Piyasa verisi alinamadi');
  const j=await r.json(),d=j.chart?.result?.[0],q=d?.indicators?.quote?.[0];
  if(!d || j.chart?.error || !q || d.meta.currency!=='TRY' || !Number.isFinite(d.meta.regularMarketPrice) || !Number.isFinite(d.meta.regularMarketTime)) throw new Error('Piyasa verisi gecersiz');
  const bars=(d.timestamp || []).map((time,i)=>({time,close:q.close[i],high:q.high[i],low:q.low[i],volume:q.volume?.[i]}))
    .filter(b=>[b.time,b.close,b.high,b.low].every(Number.isFinite) && b.close>0 && b.high>=b.low);
  const price=d.meta.regularMarketPrice,time=d.meta.regularMarketTime;
  const day=t=>new Date(t*1000).toLocaleDateString('en-CA',{timeZone:'Europe/Istanbul'});
  const last=bars.at(-1),sameDay=last && day(last.time)===day(time);
  if(sameDay) {last.close=price;last.high=Math.max(last.high,price);last.low=Math.min(last.low,price);}
  const regular=d.meta.currentTradingPeriod?.regular;
  const now=Date.now()/1000;
  const inSession=Boolean(regular && now>=regular.start && now<=regular.end);
  return {code,price,time,stale:now-time>4*86400,delayed:true,
    session:inSession?'saglayicinin_seans_araligi':'seans_disi_veya_seans_bilgisi_yok',
    volume:Number.isFinite(d.meta.regularMarketVolume)?d.meta.regularMarketVolume:sameDay?last.volume:null,
    technical:sameDay?technical(bars):null};
}
function calculations(profile,data,route) {
  const result={};
  if(profile.cost>0 && Number.isFinite(data.price)) {
    result.returnPercent=(data.price/profile.cost-1)*100;
    if(profile.quantity>0) result.pnl=Math.round((data.price-profile.cost)*profile.quantity*100)/100;
  }
  if(profile.cost>0 && profile.quantity>0 && route.addQuantity>0 && route.addPrice>0) {
    result.averageCost=(profile.cost*profile.quantity+route.addQuantity*route.addPrice)/(profile.quantity+route.addQuantity);
    result.totalQuantity=profile.quantity+route.addQuantity;
  }
  return result;
}
function literalNumbers(text) {
  return (String(text).match(/\d[\d.,]*/g) || []).map(raw=>{
    const n=raw.replace(/[.,]+$/,'');
    if(n.includes(',')) return Number(n.replace(/\./g,'').replace(',','.'));
    if(/^\d{1,3}(\.\d{3})+$/.test(n)) return Number(n.replace(/\./g,''));
    return Number(n);
  }).filter(Number.isFinite);
}
function normalize(text) {
  return String(text).normalize('NFKC').toLocaleLowerCase('tr-TR')
    .replace(/ı/g,'i').replace(/ş/g,'s').replace(/ğ/g,'g').replace(/ü/g,'u').replace(/ö/g,'o').replace(/ç/g,'c')
    .replace(/[\u200B-\u200D\uFEFF]/g,'').replace(/[^a-z0-9.,\s]/g,' ').replace(/\s+/g,' ').trim();
}
function distance(a,b) {
  if(a.length===b.length) {
    const mismatches=[];for(let i=0;i<a.length;i++) if(a[i]!==b[i]) mismatches.push(i);
    if(mismatches.length===2 && mismatches[1]===mismatches[0]+1 && a[mismatches[0]]===b[mismatches[1]] && a[mismatches[1]]===b[mismatches[0]]) return 1;
  }
  let row=Array.from({length:b.length+1},(_,i)=>i);
  for(let i=1;i<=a.length;i++) {const next=[i];for(let j=1;j<=b.length;j++) next[j]=Math.min(next[j-1]+1,row[j]+1,row[j-1]+(a[i-1]===b[j-1]?0:1));row=next;}
  return row[b.length];
}
const VOCAB=['ekleme','eklemek','ekleyeyim','ekliyim','alim','alinir','alayim','alalim','girilir','gireyim','satayim','satalim','satilir','cikayim','cikalim','bekleyeyim','tutayim','destek','direnc','maliyet','ortalama','hacim','karsilastir','zarar','kar','risk','dusuyor','yukselir','bilanco','temettu','bolunme','lot','vadeli'];
function correct(text) {
  return normalize(text).split(' ').map(word=>{
    if(word.length<5 || VOCAB.includes(word) || /\d/.test(word)) return word;
    let best=word,bestD=word.length>=9?3:2;
    for(const candidate of VOCAB) {
      if(candidate[0]!==word[0] || Math.abs(candidate.length-word.length)>2) continue;
      const d=distance(word,candidate);if(d<bestD) {best=candidate;bestD=d;}
    }
    return best;
  }).join(' ');
}
const INTENTS={
  average:{label:'ortalama maliyet hesabını',tests:[[/ortalama|maliyet.{0,15}(dusur|azalt|kac olur|nereye)/,12]]},
  add:{label:'ekleme yapmayı',tests:[[/\bekle|\bekli|ilave|takviye|artir|cogalt|biraz daha|daha fazla|ustune koy|topla/,8]]},
  exit:{label:'pozisyonu azaltmayı veya çıkmayı',tests:[[/satay|satal|satilir|satmak|satsam|satiyim|satim|cikay|cikal|ciksam|cikmak|cikilir|cikis|elden cikar|pozisyon.{0,12}(kapat|azalt)|zarar.{0,8}kes|stop|kurtul/,10]]},
  buy:{label:'yeni alım yapmayı',tests:[[/\balim\b|alinir|alay|alal|alsam|ali[my]im|almak|alabilir|girey|girelim|girilir|giris|girsem|firsat|uygun mu/,8]]},
  hold:{label:'beklemeyi',tests:[[/bekle|tutay|tutal|tutsam|elde tut|tasimaya|sabred/,7]]},
  support:{label:'destek seviyesini',tests:[[/destek|dip|asagi.{0,10}seviye|nereye.{0,10}(duser|sark)/,6]]},
  resistance:{label:'direnç seviyesini',tests:[[/direnc|hedef|nereye.{0,10}(cikar|gider)|kaca.{0,10}(cikar|gider)/,6]]},
  volume:{label:'işlem hacmini',tests:[[/hacim|islem.{0,10}(adet|miktar)|kac lot/,7]]},
  orderbook:{label:'tavan taban veya bekleyen lot bilgisini',tests:[[/tavan|taban|bekleyen|emir defter|alis kuyruk/,13]]},
  profit:{label:'kâr zarar hesabını',tests:[[/kar.?zarar|ne kadar.{0,10}(kar|zarar)|karday|zararday|kazanc|kazandim|zararim|karim|getiri|yuzde kac/,7]]},
  compare:{label:'hisseleri karşılaştırmayı',tests:[[/karsilastir|hangisi|kiyas|daha iyi|mi yoksa|mu yoksa/,9]]},
  news:{label:'hareketin nedenini veya haberleri',tests:[[/neden|niye|sebep|haber|kap aciklama|bilanco nasil/,8]]},
  risk:{label:'riski değerlendirmeyi',tests:[[/risk|guvenli|tehlike|oynak|volatil|kredili|kaldirac|butun param|tum param|tek hisse/,8]]},
  outlook:{label:'genel görünümü',tests:[[/yorum|nasil|ne dusun|ne dersin|ne diyorsun|ne alemde|ne tarafta|yon|beklenti|toparlar|yuksel|duser|dusuyor|durum|ne olur|ne olacak|gidecek|hareket|gorunum/,4]]}
};
const CONCEPTS=[
  ['rsi','RSI fiyatın yükseliş ve düşüş hızını ölçen bir göstergedir\nTek başına alım satım kararı verdirmez'],
  ['destek','Destek satışların karşılanabildiği fiyat bölgesidir\nAltında kalıcılık baskının arttığını gösterebilir'],
  ['direnc','Direnç yükselişin zorlanabildiği fiyat bölgesidir\nÜzerinde kalıcılık güçlenme işareti olabilir'],
  ['hacim','Hacim gerçekleşen işlem miktarını gösterir\nFiyat hareketini geçmiş hacimle birlikte değerlendirmek gerekir'],
  ['temettu','Temettü şirketin dağıtılmasına karar verdiği kâr payıdır\nDağıtım günü fiyat düzeltmesi olabileceği için tek başına ek kazanç sayılmaz'],
  ['bedelsiz','Bedelsiz sermaye artırımında pay sayısı artarken fiyat düzeltilir\nTek başına portföy değerini büyütmez'],
  ['bedelli','Bedelli sermaye artırımında yeni pay almak için ödeme gerekebilir\nRüçhan hakkının koşullarını ve tarihlerini incelemek gerekir'],
  ['bilanco','Bilanço şirketin varlık borç ve özkaynak durumunu gösterir\nKâr nakit akışı ve borçluluk birlikte değerlendirilir'],
  ['lot','Lot işlem miktarı birimidir\nNormal hisse işlemlerinde lot adedi sahip olunan pay miktarını ifade eder'],
  ['stop','Stop zarar büyümeden pozisyonu azaltmak veya kapatmak için önceden belirlenen koşuldur\nSabit garanti fiyat değildir'],
  ['maliyet','Ortalama maliyet toplam alış tutarının pay adedine bölünmesiyle bulunur\nKomisyon varsa hesaba ayrıca katılır'],
  ['f k','Fiyat kazanç oranı şirket değerini kazancıyla karşılaştırır\nDüşük olması tek başına ucuzluk garantisi değildir'],
  ['pd dd','Piyasa değeri defter değeri oranı şirket değerini özkaynaklarıyla karşılaştırır\nSektör ve özkaynak kalitesi birlikte incelenir']
];
function findIntent(text,codes=[]) {
  const t=correct(text);
  if(codes.length>=2 && /\b(mi|mu|hangisi|yoksa)\b/.test(t)) return {intent:'compare',confidence:1};
  const scored=Object.entries(INTENTS).map(([intent,rule])=>({intent,score:rule.tests.reduce((n,[r,s])=>n+(r.test(t)?s:0),0)})).sort((a,b)=>b.score-a.score);
  if(!scored[0].score) return {intent:'unclear',confidence:0};
  if(scored[0].intent==='average') return {intent:'average',confidence:1};
  if(scored[0].score===scored[1].score) return {intent:scored[0].intent,confidence:0.5};
  return {intent:scored[0].intent,confidence:0.9};
}
function parseAmount(raw) {return literalNumbers(raw)[0] ?? null;}
function extractDetails(text,waiting) {
  const t=normalize(text),p={};
  let match=t.match(/(?:maliyet(?:im|i|in|imiz)?|ortalamam|ortalama maliyetim)\s*(?:ise|var|su|fiyat)?\s*(\d[\d.,]*)/)
    || t.match(/(\d[\d.,]*)\s*(?:tl|lira)?\s*(?:maliyetim|maliyetle|maliyet)/);
  if(match) p.cost=parseAmount(match[1]);
  const newOrder=/\bekle|\bekli|ilave|daha al|alsam|alirsam|\balim/.test(t);
  match=t.match(/(\d[\d.,]*)\s*(?:lot(?:u|luk)?|adet|pay)\b/) || t.match(/(?:lotum|adetim|miktarim)\s*(\d[\d.,]*)/);
  if(match) p[newOrder?'addQuantity':'quantity']=parseAmount(match[1]);
  match=t.match(/(\d[\d.,]*)\s*(?:tl|lira)(?:dan|den)?/) || t.match(/(\d[\d.,]*)(?:dan|den)\s*(?:al|ekle)/);
  if(match && (newOrder || waiting?.kind==='plan')) p.addPrice=parseAmount(match[1]);
  if(!p.cost && waiting?.kind==='position') {
    const first=t.match(/^(\d[\d.,]*)\s*(?:tl|lira|maliyet|ve|lot|\s|$)/);
    if(first) p.cost=parseAmount(first[1]);
  }
  if(waiting?.kind==='plan' && p.quantity) {p.addQuantity=p.quantity;delete p.quantity;}
  if(waiting?.kind==='plan' && !p.addQuantity && /^\d[\d.,]*$/.test(t)) p.addQuantity=parseAmount(t);
  if(/kisa vade|gunluk|gun ici|bugun|yarin|bir.{0,5}gun|\d+\s*gun/.test(t)) p.horizon='kısa vade';
  else if(/hafta|orta vade/.test(t)) p.horizon='birkaç hafta';
  else if(/uzun|ay|sene|yil/.test(t)) p.horizon='uzun vade';
  if(/risk.{0,15}(dusuk|az)|temkinli|risk istem|zarara dayanam/.test(t)) p.risk='düşük';
  else if(/yuksek risk|risk alabil|riske girebil/.test(t)) p.risk='yüksek';
  else if(/orta risk/.test(t)) p.risk='orta';
  for(const key of ['cost','quantity','addQuantity','addPrice']) {
    if(p[key]!==undefined && (!(p[key]>0) || !Number.isFinite(p[key]) || (/quantity/i.test(key) && !Number.isInteger(p[key])))) delete p[key];
  }
  p.closed=/hepsini sattim|tamamini sattim|pozisyonu kapattim|pozisyonum kalmadi/.test(t);
  return p;
}
function phraseKey(text,codes) {
  let t=correct(text);for(const c of codes) t=t.replace(new RegExp('\\b'+c.toLowerCase()+'\\b','g'),'');
  return t.replace(/\d[\d.,]*/g,'').replace(/\b(hocam|hoca|lutfen|abi|kanka)\b/g,'').replace(/\s+/g,' ').trim();
}
function resolve(text,mem,symbols) {
  const explicit=extractCodes(text,symbols),t=correct(text),waiting=mem.waiting;
  let codes=explicit.length?explicit:mem.lastSymbols || [];
  const details=extractDetails(text,waiting);
  const key=phraseKey(text,explicit);
  let result=findIntent(text,codes),learned=false;
  const concept=CONCEPTS.find(([word])=>t.includes(word) && /nedir|ne demek|nasil hesap|ne ise|acikla/.test(t));
  if(concept) return {intent:'concept',codes:[],details,concept:concept[1],confidence:1};
  if(/^(merhaba|selam|selamun|gunaydin|iyi aksam|tesekkur|sag ol|eyvallah)/.test(t)) return {intent:'greeting',codes:[],details,confidence:1};
  if(waiting?.kind==='intent' && /^(evet|aynen|dogru|tamam|onu|o)$/i.test(t)) {
    result={intent:waiting.suggestion || 'unclear',confidence:waiting.suggestion?1:0};learned=Boolean(waiting.suggestion);
  } else if(mem.aliases?.[key]) result={intent:mem.aliases[key],confidence:1};
  else if(waiting?.kind==='intent' && result.intent!=='unclear' && result.confidence>0.5) learned=true;
  const supplied=Object.keys(details).some(k=>k!=='closed');
  if(waiting && waiting.kind!=='intent' && (supplied || details.closed || (explicit.length && waiting.kind==='stock'))) {
    if(result.intent==='unclear' || result.intent==='outlook' || (result.intent==='hold' && /\bbeklerim\b/.test(t)) || (waiting.intent==='average' && result.intent==='add')) result={intent:waiting.intent,confidence:1};
  }
  if(learned && waiting.phrase) {
    mem.aliases=mem.aliases || {};
    mem.aliases[waiting.phrase]=result.intent;
    const keys=Object.keys(mem.aliases);if(keys.length>100) delete mem.aliases[keys[0]];
  }
  if(result.intent==='unclear' && explicit.length && phraseKey(text,explicit)==='') result={intent:'outlook',confidence:1};
  if(details.closed && codes.length) result={intent:'hold',confidence:1};
  if(explicit.length>1) {delete details.cost;delete details.quantity;delete details.addPrice;delete details.addQuantity;details.closed=false;}
  return {...result,codes,details,key};
}
function personalizedReply(intent,facts,profile) {
  const f=facts[0],m=f?.market,t=m?.technical;
  if(intent==='orderbook') return 'Tavan taban ve bekleyen lot verisi bu kaynakta yok\nGerçekleşen işlem miktarı bekleyen emir değildir';
  if(intent==='news') return 'Haber akışı bağlı değil bu hareketin nedenini doğrulayamıyorum\nYalnızca fiyat hacim ve günlük teknik görünümü değerlendirebilirim';
  if(intent==='average' && f?.calc.averageCost>0) return `Yeni ortalama maliyetin ${money(f.calc.averageCost)} olur\nToplam ${number(f.calc.totalQuantity)} lot bu hesap komisyon hariç`;
  if(intent==='profit' && Number.isFinite(f?.calc.pnl)) return `Mevcut pozisyonda ${f.calc.pnl<0?'zarar':'kâr'} ${money(Math.abs(f.calc.pnl))}\nOransal ${f.calc.returnPercent<0?'zarar':'getiri'} yüzde ${number(Math.abs(f.calc.returnPercent))} komisyon hariç`;
  if(!m || m.stale) return 'Güncel fiyat verisi doğrulanamadı\nBu durumda güncel işlem beklentisi üretemiyorum';
  if(intent==='volume') {
    if(!Number.isFinite(m.volume)) return 'Gerçekleşen işlem miktarı bu sorguda alınamadı';
    const avg=t?.averageVolume;
    return `Günlük gerçekleşen işlem miktarı ${number(m.volume)} adet\n${avg?m.volume>avg*1.5?'Son günlerin ortalamasına göre hacim yüksek':m.volume<avg*0.7?'Son günlerin ortalamasına göre hacim zayıf':'Hacim son günlerin ortalamasına yakın':'Karşılaştırma için yeterli hacim geçmişi yok'}`;
  }
  if(intent==='compare' && facts.length>1) {
    const sorted=facts.filter(f=>f.market?.technical && !f.market.stale).sort((a,b)=>({pozitif:2,kararsız:1,negatif:0}[b.market.technical.direction]-{pozitif:2,kararsız:1,negatif:0}[a.market.technical.direction]));
    if(sorted.length<2) return 'Karşılaştırma için iki hissede de yeterli veri gerekiyor';
    if(sorted[0].market.technical.direction===sorted[1].market.technical.direction) return 'İki hissenin günlük yön görünümü benzer\nBu verilerle birini kesin üstün göstermek doğru olmaz';
    return `${sorted[0].code} günlük trend açısından daha güçlü görünüyor\nBu karşılaştırma şirket kalitesi veya kesin getiri sıralaması değildir`;
  }
  if(intent==='risk') return 'Tek hisseye yoğunlaşmak ve borçla işlem yapmak kayıp riskini büyütür\nVade ve taşıyabileceğin zarar sınırını birlikte belirlemek önemli';
  if(!t) return 'Son fiyat alınabildi ancak teknik yorum için yeterli günlük geçmiş yok';
  const support=t.support?money(t.support):null,resistance=t.resistance?money(t.resistance):null;
  if(intent==='support') return support?`${support} destek bölgesi izlenebilir\nAltında kalıcılık satış baskısını artırabilir`:'Son günlük verilerde fiyat altında net destek çıkarılamadı';
  if(intent==='resistance') return resistance?`${resistance} direnç bölgesi izlenebilir\nÜzerinde kalıcılık günlük görünümü güçlendirebilir`:'Son günlük verilerde fiyat üstünde net direnç çıkarılamadı';
  const high=t.rsi>=70,low=t.rsi<=30;
  const longer=profile.horizon==='uzun vade';
  let first='',second='';
  if(intent==='add') {
    first=t.direction==='negatif'?'Düşüş sürerken ekleme yapmak pozisyon riskini büyütür':high?'Yükseliş güçlü olsa da bu bölgede ekleme kısa vadeli geri çekilme riski taşır':'Eklemede tek sefer yerine teyit ve pozisyon büyüklüğünü birlikte değerlendirmek daha temkinli';
    second=support?`${support} korunmadan maliyet düşürmek tek başına avantaj sağlamaz`:'Yeni ekleme için net destek teyidi yok';
  } else if(intent==='buy') {
    first=t.direction==='negatif'?'Yeni alım açısından düşüşün durduğuna dair teyit zayıf':high?'Yükseliş güçlü ancak kısa vadeli yorulma riski artmış':'Yeni alım için günlük trend ve destek teyidi birlikte izlenebilir';
    second=t.direction==='pozitif' && resistance?`${resistance} direnci yakınsa risk getiri alanı daralabilir`:support?`${support} altında kalıcılık alım senaryosunu zayıflatır`:'Net seviye teyidi olmadan güçlü giriş beklentisi yok';
  } else if(intent==='exit') {
    first=profile.cost && m.price<profile.cost?'Sadece maliyete dönmesini beklemek çıkış planı yerine geçmez':'Çıkışta tek fiyat yerine kademeli azaltma ve görünümün bozulduğu koşul değerlendirilebilir';
    second=t.direction==='negatif' && support?`${support} kaybedilirse pozisyonu azaltma senaryosu güçlenir`:resistance?`${resistance} civarında güç kaybı olursa kademeli azaltma değerlendirilebilir`:'Kararı vade ve taşıyabileceğin zarar sınırıyla birlikte değerlendirmek gerekir';
  } else if(intent==='hold') {
    first=t.direction==='pozitif'?'Günlük yükseliş korunuyor bekleme senaryosu destek buluyor':t.direction==='negatif'?'Beklerken düşüşün sürebileceğini hesaba katmak gerekiyor':'Günlük görünüm kararsız bekleme kararında sınır belirlemek önemli';
    second=support?`${support} altında kalıcılık bekleme senaryosunu zayıflatır`:'Net destek bulunmadığı için fiyat üzerinden güçlü teyit verilemiyor';
  } else {
    first=t.direction==='pozitif'?'Günlük yön pozitif yükseliş eğilimi korunuyor':t.direction==='negatif'?'Günlük yön negatif satış baskısı öne çıkıyor':'Günlük görünüm kararsız yön teyidi zayıf';
    if(low) first+=' tepki gelse de dönüş teyidi yok';
    else if(high) first+=' kısa vadeli yorulma riski var';
    second=t.direction==='negatif' && support?`Toparlanma zayıf kalırsa ${support} desteğine sarkabilir`:resistance?`Güçlenme devam ederse ${resistance} direnci test edilebilir`:support?`${support} desteğinin korunması önemli`:'Net destek direnç seviyesi çıkarılamadı';
  }
  if(profile.risk==='düşük' && ['buy','add'].includes(intent)) first='Düşük risk tercihin açısından teyit beklemek acele işlemden daha tutarlı';
  if(longer && ['buy','add','hold','exit'].includes(intent)) second='Uzun vadeli karar için bilanço ve nakit akışı da gerekir günlük teknik veri tek başına yeterli değil';
  return first+'\n'+second;
}
async function buildRuleReply(job,state,now,market) {
  const mem=structuredClone(memoryFor(state,job.key,now()));
  const route=resolve(job.text,mem,new Set(state.symbols));
  const {intent,codes,details}=route;
  if(codes.length) mem.lastSymbols=codes;
  let profile={};
  if(codes.length===1) {
    profile=mem.profiles[codes[0]] || {};
    if(details.closed) {delete profile.cost;delete profile.quantity;delete profile.plannedQuantity;delete profile.plannedPrice;}
    for(const key of ['cost','quantity','horizon','risk']) if(details[key]!==undefined) profile[key]=details[key];
    if(details.addQuantity) profile.plannedQuantity=details.addQuantity;
    if(details.addPrice) profile.plannedPrice=details.addPrice;
    mem.profiles[codes[0]]=profile;
  }
  let body='',kind=null;
  if(intent==='greeting') body='Buradayım hocam hisseyi veya merak ettiğin konuyu yazabilirsin';
  else if(intent==='concept') body=route.concept;
  else if(intent==='unclear' || route.confidence<=0.5) {
    const suggestion=intent==='unclear'?null:intent;
    body=suggestion?`${INTENTS[suggestion].label} mı soruyorsun hocam`:'Alım ekleme çıkış veya hangi konuyu sorduğunu biraz daha açık yazar mısın hocam';
    mem.waiting={kind:'intent',suggestion,phrase:route.key,intent:suggestion};
  } else if(!codes.length) {body='Hangi hisse için soruyorsun hocam';kind='stock';}
  else if(details.closed) body='Pozisyonu kapattığını not ettim mevcut maliyet ve lot bilgisini temizledim';
  else if(['buy','add','exit','hold'].includes(intent) && !profile.horizon) {
    body=['add','exit'].includes(intent) && !profile.cost?'Maliyetin kaç ve kısa vade mi düşünüyorsun':'Kısa vade mi düşünüyorsun yoksa daha uzun süre bekleyebilir misin';kind='position';
  } else if(['add','exit'].includes(intent) && !profile.cost) {body='Mevcut maliyetin kaç hocam';kind='position';}
  else if(['profit','average'].includes(intent) && (!profile.cost || !profile.quantity)) {body='Mevcut maliyetini ve lot miktarını yazar mısın';kind='position';}
  else if(intent==='average' && (!profile.plannedQuantity || !profile.plannedPrice)) {body='Kaç lot eklemeyi ve hangi fiyattan almayı düşünüyorsun';kind='plan';}
  if(kind) mem.waiting={kind,intent};
  else if(intent!=='unclear' && route.confidence>0.5) delete mem.waiting;
  const facts=[];
  if(!['greeting','concept','unclear'].includes(intent) && route.confidence>0.5) {
    for(const code of codes) {
      let data=null;try {data=await market(code);} catch {console.log('Piyasa verisi alinamadi',code);}
      const p=mem.profiles[code] || {};
      const calc=calculations(p,data && !data.stale?data:{},{addQuantity:p.plannedQuantity,addPrice:p.plannedPrice});
      facts.push({code,market:data,profile:p,calc});
    }
  }
  if(!body) body=personalizedReply(intent,facts,profile);
  const header=facts.filter(f=>f.market && !f.market.stale).map(f=>`${f.code} ${money(f.market.price)}`).join('   ');
  const text=[header,body].filter(Boolean).join('\n');
  mem.updatedAt=now();
  mem.history=[...mem.history,{role:'user',text:job.text},{role:'assistant',text}].slice(-HISTORY_LIMIT);
  return {text,mem};
}

function memoryFor(state,key,now) {
  const old=state.memories[key];
  if(old && now-old.updatedAt<=TTL) return old;
  return {updatedAt:now,lastSymbols:[],profiles:{},history:[]};
}
function createEngine(store,{now=Date.now,market=marketData,send,botId,botUsername=''}={}) {
  const state=store.state;
  let busy=false,closing=false;
  const keyFor=m=>`${m.chat.id}:${m.message_thread_id || 0}:${m.from?.id || m.sender_chat?.id}`;
  function eligible(message) {
    if(!message?.text || message.from?.is_bot || message.text.startsWith('/')) return false;
    if(message.chat.type==='private') return true;
    if(message.chat.username?.toLowerCase()!==GROUP && String(message.chat.id)!==String(state.groupId)) return false;
    if(extractCodes(message.text,new Set(state.symbols)).length) return true;
    if(String(message.reply_to_message?.from?.id)===String(botId)) return true;
    const lower=message.text.toLocaleLowerCase('tr-TR');
    if((botUsername && lower.includes('@'+botUsername.toLowerCase())) || /\bhocam\b|\bhoca\b|\bbot\b/u.test(lower)) return true;
    const key=keyFor(message),mem=state.memories[key];
    return Boolean((mem && now()-mem.updatedAt<15*MINUTE) || state.jobs.some(j=>j.key===key && now()-j.createdAt<15*MINUTE));
  }
  function forget(message) {
    const key=keyFor(message);
    delete state.memories[key];
    state.jobs=state.jobs.filter(j=>j.key!==key);
    state.revisions[key]=(state.revisions[key] || 0)+1;
    store.save();
  }
  function ingest(update) {
    if(update.update_id<state.offset) return;
    const m=update.message;
    if(eligible(m) && !state.jobs.some(j=>j.updateId===update.update_id)) {
      const key=keyFor(m);
      const waiting=state.jobs.filter(j=>j.key===key).length;
      if(waiting>=20 || state.jobs.length>=1000) throw new Error('Kalici soru kuyrugu dolu');
      state.jobs.push({id:crypto.randomUUID(),updateId:update.update_id,key,chatId:m.chat.id,threadId:m.message_thread_id,
        messageId:m.message_id,text:m.text.slice(0,4000),createdAt:now(),notBefore:now()+MINUTE,attempts:0,revision:state.revisions[key] || 0});
    }
    state.offset=update.update_id+1;store.save();
  }
  async function build(job) { return buildRuleReply(job,state,now,market); }
  async function tick() {
    if(busy || closing) return;
    const seen=new Set();
    const job=state.jobs.find(j=>{
      const id=String(j.chatId);if(seen.has(id)) return false;seen.add(id);
      return now()>=Math.max(j.notBefore,(state.lastReply[id] || 0)+MINUTE);
    });
    if(!job) return;
    busy=true;
    try {
      if(job.revision!==(state.revisions[job.key] || 0)) {state.jobs=state.jobs.filter(j=>j.id!==job.id);store.save();return;}
      // Telegram gonderim hatasinda pahali AI cevabini tekrar uretme
      // Bir dakikadan eski hazir cevap varsa guncel veriden yeniden olustur
      if(job.answer && now()-(job.preparedAt || 0)>MINUTE) {delete job.answer;delete job.memory;}
      if(!job.answer) {
        const result=await build(job);
        if(closing || job.revision!==(state.revisions[job.key] || 0)) return;
        job.answer=result.text;job.memory=result.mem;job.preparedAt=now();store.save();
      }
      if(closing) return;
      await send('sendMessage',{chat_id:job.chatId,text:job.answer,message_thread_id:job.threadId,
        reply_parameters:{message_id:job.messageId,allow_sending_without_reply:true}});
      if(job.revision===(state.revisions[job.key] || 0)) state.memories[job.key]=job.memory;
      state.lastReply[String(job.chatId)]=now();
      state.jobs=state.jobs.filter(j=>j.id!==job.id);store.save();
    } catch(e) {
      if(e.storage) throw e;
      console.error('Yanit islemi hatasi',e.message);
      if(e.code===403 || (e.code===400 && /chat not found|CHAT_ID_INVALID/i.test(e.message))) {
        state.failures.push({id:job.id,chatId:job.chatId,reason:e.message,at:now()});state.failures=state.failures.slice(-50);
        state.jobs=state.jobs.filter(j=>j.id!==job.id);
      } else {
        job.attempts++;
        job.notBefore=now()+Math.max(Number(e.wait || 0)*1000,Math.min(900000,MINUTE*2**Math.min(job.attempts-1,4)));
      }
      store.save();
    } finally {busy=false;}
  }
  function cleanup() {
    for(const [key,mem] of Object.entries(state.memories)) if(now()-mem.updatedAt>TTL && !state.jobs.some(j=>j.key===key)) delete state.memories[key];
    store.save();
  }
  return {ingest,tick,forget,cleanup,keyFor,build,close(){closing=true;},isBusy:()=>busy};
}
async function telegram(method,body) {
  const r=await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/${method}`,{
  const r=await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/${method}`,{
    method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body),signal:AbortSignal.timeout(40000)
  });
  const j=await r.json();
  if(!j.ok) {const e=new Error(`Telegram ${j.error_code} ${j.description || ''}`);e.code=j.error_code;e.wait=j.parameters?.retry_after;throw e;}
  return j.result;
}
async function main() {
  if(!process.env.BOT_TOKEN) throw new Error('Railway Variables BOT_TOKEN gerekli');
  if(!BOT_TOKEN || BOT_TOKEN==='BURAYA_BOT_TOKENINI_YAZ') throw new Error('server.js basindaki BOT_TOKEN alanina tokenini yaz');
  const store=createStore(process.env.DATA_DIR || './data');
  const state=store.state;
  const me=await telegram('getMe',{});
  const chat=await telegram('getChat',{chat_id:'@'+GROUP});
  state.groupId=chat.id;store.save();
  const engine=createEngine(store,{send:telegram,botId:me.id,botUsername:me.username});
  let closing=false,connected=false,lastPoll=0;
  const server=http.createServer((req,res)=>{
    if(!['/','/health'].includes(req.url)) {res.writeHead(404);res.end();return;}
    const ok=connected && Date.now()-lastPoll<180000;
    res.writeHead(ok?200:503,{'Content-Type':'application/json'});res.end(JSON.stringify({ok,symbols:state.symbols.length,waiting:state.jobs.length}));
  });
  server.listen(Number(process.env.PORT || 3000),'0.0.0.0');
  await telegram('deleteWebhook',{drop_pending_updates:false});
  async function refresh() {
    try {
      const r=await fetch('https://www.kap.org.tr/tr/Pazarlar',{signal:AbortSignal.timeout(20000)});
      if(!r.ok) throw new Error();
      state.symbols=parseKap(await r.text());state.listDate=new Date().toLocaleDateString('tr-TR',{timeZone:'Europe/Istanbul'});store.save();
      console.log('KAP listesi',state.symbols.length);
    } catch {console.log('KAP mevcut liste kullaniliyor');}
  }
  await refresh();
  const worker=setInterval(()=>void engine.tick().catch(e=>{console.error('Kalici sira hatasi',e.message);process.exit(1);}),1000);
  const daily=setInterval(()=>{void refresh();engine.cleanup();},86400000);
  const shutdown=()=>{closing=true;engine.close();clearInterval(worker);clearInterval(daily);server.close();setTimeout(()=>process.exit(0),10000).unref();};
  process.on('SIGTERM',shutdown);process.on('SIGINT',shutdown);
  console.log('Anahtarsiz sohbet botu hazir',state.symbols.length,'hisse');
  while(!closing) {
    try {
      const updates=await telegram('getUpdates',{offset:state.offset,timeout:25,allowed_updates:['message']});
      connected=true;lastPoll=Date.now();
      for(const update of updates) {
        const m=update.message;
        const allowed=m && (m.chat.type==='private' || String(m.chat.id)===String(state.groupId));
        const command=m?.text?.trim().split(/\s/)[0].split('@')[0].toLowerCase();
        if(allowed && !m.from?.is_bot && ['/start','/help','/durum','/unut'].includes(command)) {
          if(command==='/unut') engine.forget(m);
          const text=command==='/unut'?'Bu sohbetteki hafızanı ve bekleyen sorularını sildim':command==='/durum'?
            `${state.symbols.length} hisse tanımlı\nBekleyen soru ${state.jobs.length}\nYanıt aralığı bir dakika\nFiyat kaynağı gecikmeli olabilir`:
            'Hisseyi veya borsa sorunu yaz hocam diyerek de sorabilirsin\nYanıtlar bir dakika arayla gelir\nGeniş kelime eşleştirme ve konuşma hafızası kullanırım hafızanı /unut ile silebilirsin';
          await telegram('sendMessage',{chat_id:m.chat.id,text,message_thread_id:m.message_thread_id});
        }
        engine.ingest(update);
      }
    } catch(e) {
      if(e.storage) throw e;
      connected=false;console.error('Telegram baglanti hatasi',e.message,e.cause?.code || '');
      if(e.code===409) console.error('Tek replica kullan ayni tokenle calisan diger botu kapat');
      if(e.code===401) throw new Error('Telegram tokeni gecersiz');
      await sleep(Math.max(5,Number(e.wait || 0))*1000);
    }
  }
}
module.exports={createStore,createEngine,extractCodes,parseKap,technical,calculations,literalNumbers,marketData,money,normalize,distance,findIntent,resolve,extractDetails,buildRuleReply,personalizedReply};
if(require.main===module) main().catch(e=>{console.error(e.message);process.exit(1);});
