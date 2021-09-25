const buttons = document.querySelectorAll('.buttons div');
const scores = document.querySelectorAll('.scores p');
const userScoreMsg = document.querySelector('p.user');
const botScoreMsg = document.querySelector('p.computer');
const winMsg = document.querySelector('header h1');
const userImg = document.querySelector('img.user');
const botImg = document.querySelector('img.computer');

buttons.forEach(button => {
  button.addEventListener('click', function () {
    playRound(this.classList[0]);
  });
});

scores.forEach(score => {
  score.addEventListener('transitionend', function () {
    this.classList.remove('update');
  });
});

function playRound(userChoice) {
  const winConditions = {
    rock: ['rock', 'scissors', 'paper'],
    paper: ['paper', 'rock', 'scissors'],
    scissors: ['scissors', 'paper', 'rock'],
    winMessage: ['tie', 'win', 'lose']
  }
  const botChoice = calcBotMove();
  const winner = checkWinner(userChoice, botChoice);

  function checkWinner(user, bot) {
    for (let i = 0; i < 3; i += 1) {
      if (bot == winConditions[user][i]) {
        return (winConditions.winMessage[i]);
      } else {
        continue;
      }
    }
  }

  function updateScore(user, bot, message) {
    let userScore = userScoreMsg.textContent.split(' ');
    let botScore = botScoreMsg.textContent.split(' ');

    winMsg.textContent = `You ${message}`;

    switch (message) {
      case 'win': {
        userScore[1] = Number(userScore[1]) + 1;
        userScoreMsg.textContent = userScore.join(' ');
        userScoreMsg.classList.add('update');
        break;
      }
      case 'lose': {
        botScore[1] = Number(botScore[1]) + 1;
        botScoreMsg.textContent = botScore.join(' ');
        botScoreMsg.classList.add('update');
        break;
      }
      default: {
        break;
      }
    }
    
    userImg.src = `images/${user}-500.png`;
    botImg.src = `images/${bot}-500.png`;
  }

  function calcBotMove() {
    return winConditions.rock[Math.floor(Math.random() * 3)];
  }

  updateScore(userChoice, botChoice, winner);
}