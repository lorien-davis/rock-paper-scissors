const getOpponentSelection = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

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

const computeRound = (player, opponent) => {
  if (player === opponent) return "tie";

  return checkPlayerWins(player, opponent) ? "win" : "lose";
};

const printResults = (player, opponent, result, round) => {
  console.log(`---ROUND ${round}---`);
  console.log(`You: ${player}\nComputer: ${opponent} \nResult: ${result}`);
};

const playRound = () => {
  const opponent = getOpponentSelection();
  const player = prompt("Input your selection").toLowerCase();
  const result = computeRound(player, opponent);

  return { player, opponent, result };
};

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
