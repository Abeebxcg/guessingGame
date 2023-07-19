'use strict';
let score = 20;
let highscore = 0;

const number = Math.trunc(Math.random() * 20 + 1);
console.log(number);

// document.querySelector('.number').textContent = number;
//console.log(userValue);
document.querySelector('.check').addEventListener('click', function () {
  let userInput = Number(document.querySelector('.guess').value);
  //   console.log(userInput);
  if (!userInput) {
    document.querySelector('.message').textContent = '🌋 input a valid number';
  } else if (userInput > number) {
    if (score >= 1) {
      score--;
      document.querySelector('.message').textContent = 'Number is higher';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You loose';
    }

    //alert(userInput);
  } else if (userInput < number) {
    if (score >= 1) {
      score--;
      document.querySelector('.message').textContent = 'Number is lower';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You loose';
    }

    //  (userInput);
  } else if (userInput == number) {
    if (score >= 1) {
      score++;

      document.querySelector('.message').textContent = 'You got it right';
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.score').textContent = score;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
      document.querySelector('.message').textContent = 'You loose';
    }

    //alert(userInput);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //   alert('great');
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'black';
});
