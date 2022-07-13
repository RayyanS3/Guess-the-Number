'use strict';

//Variable declerations
let randomNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//Function declarations for repeated code inputs
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const secretNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const playerScore = function (points) {
  document.querySelector('.score').textContent = points;
};

//Event handler - 'Check button'
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    displayMessage('No Number!');

    //When guess is correct
  } else if (guess === randomNum) {
    displayMessage('Correct Number!');
    secretNumber(randomNum);

    //CSS Style manipulation
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is too high/low
  } else if (guess !== randomNum) {
    if (score > 1) {
      displayMessage(guess > randomNum ? 'Too High!' : 'Too Low!');
      score--;
      playerScore(score);
    } else {
      displayMessage('You lost the game!!');
      playerScore(0);
    }
  }
});

//Event handler - 'Again button'
document.querySelector('.again').addEventListener('click', function () {
  randomNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  playerScore(20);
  displayMessage('Start guessing...');
  secretNumber('?');
  document.querySelector('.guess').value = '';

  //CSS Style reverse-manipulation
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
