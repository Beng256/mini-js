const level = localStorage.getItem('level');
console.log("Level:", level);
let maxNumber = 0;
const gameTitle = document.getElementById('gameTitle');
const gameInput = document.getElementById('guessInput');
if (level === 'easy') {
  maxNumber = 10;
  gameInput.max = 10;
  document.getElementById('hintBtn').disabled = true;
  gameTitle.textContent = "Tebak Angka Level Mudah!";
}
if (level === 'medium') {
  maxNumber = 50;
  gameInput.max = 50;
  gameTitle.textContent = "Tebak Angka Level Medium!!";
}
if (level === 'hard') {
  maxNumber = 100;
  gameInput.max = 100;
  gameTitle.textContent = "Tebak Angka Level Sulit!!!";
}
let randomNumber = Math.floor(Math.random() * maxNumber) + 1;
let attempts = 0;
let maxAttempts = 5;
const hintMessage = document.getElementById('hint');
hintMessage.textContent = "Pakai hint kalo mau mudah, tapi maks percobaan jadi 3 kali"
const tryMessage = document.getElementById('numTry');
showTry();

function showTry() {
    tryMessage.textContent = `Percobaan kamu: ${attempts}`;
}
    

function checkGuess() {
  const userGuess = Number(document.getElementById('guessInput').value);
  const message = document.getElementById('message');
    
  attempts++;
  showTry();

  if (userGuess === randomNumber) {
    message.textContent = `Benar! Angkanya ${randomNumber}. Tebakanmu cuma butuh ${attempts} percobaan. Restart kalo mau mulai lagi`;
    message.style.color = "lightgreen";
    disableInput();
    return;
  } else if (userGuess < randomNumber) {
    message.textContent = "Terlalu kecil. Coba lagi.";
    message.style.color = "orange";
  } else if (userGuess > randomNumber) {
    message.textContent = "Terlalu besar. Coba lagi.";
    message.style.color = "orange";
  }
  if (attempts >= maxAttempts) {
    message.textContent = `Yah gagal deh, nomer yang asli itu ${randomNumber}. Kalo mau mulai lagi harus restart!`;
    message.style.color = "red";
    disableInput();
    return;
  }
}

function disableInput(){
  document.getElementById('guessInput').disabled = true;
  document.getElementById('btnGuess').disabled = true;
}

function restartGame() {
  randomNumber = Math.floor(Math.random() * maxNumber) + 1;
  attempts = 0;
  maxAttempts = 5;
  showTry();
  document.getElementById('guessInput').disabled = false;
  document.getElementById('guessInput').value = '';
  document.getElementById('message').textContent = ''; 
  hintMessage.textContent = "Pakai hint kalo mau mudah, tapi maks percobaan jadi 3 kali";
}

function hint() {
  maxAttempts = 3;
  let numHint = randomNumber % 10;
  hintMessage.textContent = `Ini angka belakang dari nomer jawaban: ${numHint}`;
}
