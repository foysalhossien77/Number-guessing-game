'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
/*
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //   // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);
let score = 20;
let highScore = 0;

const displayMessageOnScreen = function (message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const inputValue = Number(document.querySelector('.guess').value);
  // console.log(inputValue);

  //When no input / empty input
  if (!inputValue) {
    // document.querySelector('.message').textContent = '⛔ No Number Input';
    displayMessageOnScreen('⛔ No Number Input'); //Refectoring code

    //When input is corret
  } else if (inputValue === secretNumber) {
    // document.querySelector('.message').textContent = '🏆 Correct Number';
    displayMessageOnScreen('🏆 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if(score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
 
      //When input is wrong
    }
  } else if(inputValue !== secretNumber) {
      if (score > 1) {
        // document.querySelector('.message').textContent = inputValue > secretNumber ? '📈 Too High!' : '📉 Too Low!';

        displayMessageOnScreen(inputValue > secretNumber ? '📈 Too High!' : '📉 Too Low!')
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        // document.querySelector('.message').textContent = '⚡ You lost the game!';
        displayMessageOnScreen('⚡ You lost the game!');
        document.querySelector('.score').textContent = 0;
      }
    }
});


//Again button

document.querySelector('.again').addEventListener('click', function(){
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // console.log(secretNumber);
  score = 20;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessageOnScreen('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});





    //When input is too high
  //   else if (inputValue > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '⚡ You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //When input is too low
  //   else if (inputValue < secretNumber) {
  //   if(score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '⚡ You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }