// COMPUTER SELECTION FUNCTION
// return either rock, paper or scissors
const getOpponentSelection = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

// CHECK WINNER FUNCTION
// if player selected rock && opponent selected scissors -> return true
// if player selected paper && opponent selected rock -> return true
// if player selected scissors && opponent selected paper -> return true
// else -> return false
const checkPlayerWins = (player, opponent) => {
  switch (player) {
    case "rock":
      return opponent === "scissors" ? true : false;
    case "paper":
      return opponent === "rock" ? true : false;
    case "scissors":
      return opponent === "paper" ? true : false;
  }
};

// COMPUTE ROUND FUNCTION
// take two arguments, player selection and computer selection.
// if player selection beats computer -> return win
// else -> return lose
// if both arguments are the same -> return tie
const computeRound = (player, opponent) => {
  if (player === opponent) return "tie";

  return checkPlayerWins(player, opponent) ? "win" : "lose";
};

// PRINT FUNCTION
// console log the results of a round or game
const printResults = (player, opponent, result, round) => {
  console.log(`---ROUND ${round}---`);
  console.log(`You: ${player}\nComputer: ${opponent} \nResult: ${result}`);
};

// PLAY ROUND FUNCTION
// generate opponent selection
// get player selection and convert to lowercase
// compute winner
// return round data
const playRound = () => {
  const opponent = getOpponentSelection();
  const player = prompt("Input your selection").toLowerCase();
  const result = computeRound(player, opponent);

  return { player, opponent, result };
};

// GAME FUNCTION
// play three rounds
// keep score of who wins and loses
// print results of each round
// print winner at end of game with differences in score
const playGame = () => {
  const score = { player: 0, computer: 0 };
  let rounds = 3;

  for (let i = 1; i <= rounds; i += 1) {
    const round = playRound();

    switch (round.result) {
      case "win":
        score.player += 1;
        break;
      case "lose":
        score.computer += 1;
        break;
      default:
        rounds += 1;
        break;
    }

    printResults(round.player, round.opponent, round.result, i);
  }

  score.player > score.computer
    ? console.log(`You won by ${score.player - score.computer}!`)
    : console.log(`You lost by ${score.computer - score.player}!`);
};
