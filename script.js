const level = localStorage.getItem('level');
let maxNumber = 0;
if (level === 'easy') {
  maxNumber = 10;
  document.getElementById('hintBtn').disabled = true;
}
if (level === 'medium') maxNumber = 50;
if (level === 'hard') maxNumber = 100;
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

  if (attempts > maxAttempts) {
    message.textContent = `Yah gagal deh, nomer yang asli itu ${randomNumber}. Kalo mau mulai lagi harus restart!`;
    message.style.color = "red";
    disableInput();
    return;
  }

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
  showTry();
}

function disableInput(){
  document.getElementById('guessInput').disabled = true;
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