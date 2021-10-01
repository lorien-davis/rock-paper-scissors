const playerIcon = document.querySelector("#player");
const opponentIcon = document.querySelector("#opponent");
const resultText = document.querySelector(".results");
const buttons = document.querySelectorAll("div.button");

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

const getRoundResults = (player, opponent) => {
  if (player === opponent) return "tie";

  return checkPlayerWins(player, opponent) ? "win" : "lose";
};

const printResults = (player, opponent, result) => {
  console.log(`You: ${player}\nComputer: ${opponent} \nResult: ${result}`);
};

const computeRound = (player) => {
  const opponent = getOpponentSelection();
  const result = getRoundResults(player, opponent);

  return { player, opponent, result };
};

const changeIcon = (icon, selection) => {
  icon.src = `./img/${selection}.png`;
};

const changeText = (textElement, newText) => {
  textElement.textContent = newText;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const roundInfo = computeRound(e.currentTarget.id);

    changeIcon(playerIcon, roundInfo.player);
    changeIcon(opponentIcon, roundInfo.opponent);
    changeText(resultText, roundInfo.result);
  });
});
