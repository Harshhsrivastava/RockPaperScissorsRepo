const userScoreDisplay = document.getElementById('userScore');
const compScoreDisplay = document.getElementById('compScore');
const resultDisplay = document.getElementById('result');
const userScoreDiv = document.getElementById('userScoreDiv');
const compScoreDiv = document.getElementById('compScoreDiv');
const choices = document.querySelectorAll('.choice');

let userScore = 0;
let compScore = 0;

choices.forEach(choice => choice.addEventListener('click', playRound));

function playRound(e) {
  const userChoice = e.target.id || e.target.parentNode.id;
  const compChoice = getComputerChoice();
  const result = getResult(userChoice, compChoice);

  updateScore(result);
  displayResult(result, userChoice, compChoice);
  updateScoreColor(result);
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getResult(userChoice, compChoice) {
  if (userChoice === compChoice) {
    return 'draw';
  } else if (
    (userChoice === 'rock' && compChoice === 'scissors') ||
    (userChoice === 'paper' && compChoice === 'rock') ||
    (userChoice === 'scissors' && compChoice === 'paper')
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}

function updateScore(result) {
  if (result === 'win') {
    userScore++;
  } else if (result === 'lose') {
    compScore++;
  }
  userScoreDisplay.textContent = userScore;
  compScoreDisplay.textContent = compScore;
}

function displayResult(result, userChoice, compChoice) {
  let message;
  if (result === 'draw') {
    message = 'Game was a draw!';
  } else if (result === 'win') {
    message = `You win! ${userChoice} beats ${compChoice}.`;
  } else {
    message = `You lose! ${compChoice} beats ${userChoice}.`;
  }
  resultDisplay.textContent = message;
}

function updateScoreColor(result) {
  if (result === 'win') {
    userScoreDiv.style.backgroundColor = 'lightgreen';
    compScoreDiv.style.backgroundColor = '#f0f0f0';
    resultDisplay.style.backgroundColor = 'lightgreen';
  } else if (result === 'lose') {
    userScoreDiv.style.backgroundColor = '#f0f0f0';
    compScoreDiv.style.backgroundColor = 'lightcoral';
    resultDisplay.style.backgroundColor = 'lightcoral';
  } else {
    userScoreDiv.style.backgroundColor = '#f0f0f0';
    compScoreDiv.style.backgroundColor = '#f0f0f0';
    resultDisplay.style.backgroundColor = '#f0f0f0';
  }
}