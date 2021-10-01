const playerIcon = document.querySelector("#player");
const opponentIcon = document.querySelector("#opponent");
const resultText = document.querySelector(".results");
const buttons = document.querySelectorAll(".button");

// Returns rock, paper or scissors at random
const getOpponentSelection = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

// Returns tie, win or lose depending on inputs
const checkPlayerWins = (player, opponent) => {
  if (player === opponent) return "tie";

  switch (player) {
    case "rock":
      return opponent === "scissors" ? "win" : "lose";
    case "paper":
      return opponent === "rock" ? "win" : "lose";
    case "scissors":
      return opponent === "paper" ? "win" : "lose";
  }
};

// Returns an object with information about the computed round
const computeRound = (player) => {
  const opponent = getOpponentSelection();
  const result = checkPlayerWins(player, opponent);

  return { player, opponent, result };
};

const changeIcon = (icon, selection) => {
  icon.src = `https://raw.githubusercontent.com/lorien-davis/rock-paper-scissors/master/img/${selection}.png`;
};

const changeText = (textElement, newText) => {
  textElement.textContent = newText;
};

// On each button press compute a round and
// update the DOM to match the results
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const roundInfo = computeRound(e.currentTarget.id);

    changeIcon(playerIcon, roundInfo.player);
    changeIcon(opponentIcon, roundInfo.opponent);
    changeText(resultText, roundInfo.result);
  });
});
