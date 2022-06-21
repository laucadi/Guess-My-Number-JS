'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🔥 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 21);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '❗️ No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = `🔥  Correct Number!`;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.background =
      'linear-gradient(to right, #11998e, #38ef7d)';
    document.querySelector('.message').style.fontSize = '5rem';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '❌  Too High' : '❌ To low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' ☹︎ You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }

  document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.message').textContent = `Start guessing...`;
    document.querySelector('.message').style.fontSize = '3rem';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.background =
      'linear-gradient(to right, #000000, #434343)';
    score = 20;
  });

  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = `❌ To high`;
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = ' ☹︎ You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = `❌ To low`;
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = ' ☹︎ You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});
