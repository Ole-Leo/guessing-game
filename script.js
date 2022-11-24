'use strict';

const checkBtn = document.querySelector('.check');
const hintMessage = document.querySelector('.message');
const scoreMessage = document.querySelector('.score');
const highScoreMessage = document.querySelector('.highscore');
const number = document.querySelector('.number');
let secretNumber = Math.ceil(Math.random() * 20);
let score = 20;
let highScore = 0;

console.log(secretNumber);

function createTextContent(element, message) {
  element.textContent = message;
}

checkBtn.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    createTextContent(hintMessage, '⛔️ No number!');
  } else if (guess === secretNumber) {
    createTextContent(hintMessage, '🎉 Correct Number!');
    createTextContent(number, secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      createTextContent(highScoreMessage, highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      createTextContent(
        hintMessage,
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
      score--;

      createTextContent(scoreMessage, score);
    } else {
      createTextContent(hintMessage, '💥 You lost the game');
      createTextContent(scoreMessage, 0);
    }
  }
});

const againBtn = document.querySelector('.again');

againBtn.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.ceil(Math.random() * 20);
  console.log(secretNumber);
  createTextContent(hintMessage, 'Start guessing...');
  createTextContent(scoreMessage, score);
  createTextContent(number, '?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
});
