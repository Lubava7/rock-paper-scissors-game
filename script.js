const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const winnerDisplay = document.getElementById("winner");

const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;

const computerScoresDisplay = document.getElementById("computer-scores");
const userScoresDisplay = document.getElementById("user-scores");
let userScore = 0;
let computerScore = 0;

let result;

const totalRoundDisplay = document.getElementById("total-round");
let totalRound = 0;

const userCrown = document.getElementById("user-crown");
const computerCrown = document.getElementById("computer-crown");

// let isGameOver = false;

// добавиь сохранение победителя в локал сторадж

const rule1 = document.querySelector(".rule1");
const rule2 = document.querySelector(".rule2");
const rule3 = document.querySelector(".rule3");
const rule4 = document.querySelector(".rule4");
const rule5 = document.querySelector(".rule5");
const rule6 = document.querySelector(".rule6");
const rule7 = document.querySelector(".rule7");
const rule8 = document.querySelector(".rule8");
const rule9 = document.querySelector(".rule9");
const rule10 = document.querySelector(".rule10");

userScoresDisplay.innerHTML = userScore;
computerScoresDisplay.innerHTML = computerScore;
totalRoundDisplay.innerHTML = totalRound;
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", function (e) {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    winner();
    getCrown();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);

  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else if (randomNumber === 3) {
    computerChoice = "scissors";
  } else if (randomNumber === 4) {
    computerChoice = "lizard";
  } else if (randomNumber === 5) {
    computerChoice = "spock";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getCrown() {
  if (userScore > computerScore) {
    userCrown.innerHTML = "👑";
    computerCrown.innerHTML = " ";
  }
  if (computerScore > userScore) {
    computerCrown.innerHTML = "👑";
    userCrown.innerHTML = " ";
  }
}

function winner() {
  if (computerChoice === userChoice) {
    result = "Draw!";
    totalRound += 1;
    rule9.style.background = "transparent";
    rule3.style.background = "transparent";
    rule1.style.background = "transparent";
    rule7.style.background = "transparent";
    rule2.style.background = "transparent";
    rule8.style.background = "transparent";
    rule5.style.background = "transparent";
    rule4.style.background = "transparent";
    rule6.style.background = "transparent";
    rule10.style.background = "transparent";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "You Win!";
    userScore = userScore + 1;
    totalRound += 1;
    rule3.style.background = "green";

    rule1.style.background = "transparent";
    rule2.style.background = "transparent";
    rule4.style.background = "transparent";
    rule5.style.background = "transparent";
    rule6.style.background = "transparent";
    rule7.style.background = "transparent";
    rule8.style.background = "transparent";
    rule9.style.background = "transparent";
    rule10.style.background = "transparent";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "Computer win!";
    computerScore = computerScore + 1;
    totalRound += 1;
    rule3.style.background = "green";

    rule1.style.background = "transparent";
    rule2.style.background = "transparent";
    rule4.style.background = "transparent";
    rule5.style.background = "transparent";
    rule6.style.background = "transparent";
    rule7.style.background = "transparent";
    rule8.style.background = "transparent";
    rule9.style.background = "transparent";
    rule10.style.background = "transparent";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "Computer win!";
    computerScore = computerScore + 1;
    totalRound += 1;
    rule1.style.background = "green";

    rule3.style.background = "transparent";
    rule2.style.background = "transparent";
    rule4.style.background = "transparent";
    rule5.style.background = "transparent";
    rule6.style.background = "transparent";
    rule7.style.background = "transparent";
    rule8.style.background = "transparent";
    rule9.style.background = "transparent";
    rule10.style.background = "transparent";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "You win!";
    userScore = userScore + 1;
    totalRound += 1;
    rule1.style.background = "green";

    rule3.style.background = "transparent";
    rule2.style.background = "transparent";
    rule4.style.background = "transparent";
    rule5.style.background = "transparent";
    rule6.style.background = "transparent";
    rule7.style.background = "transparent";
    rule8.style.background = "transparent";
    rule9.style.background = "transparent";
    rule10.style.background = "transparent";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You win!";
    userScore = userScore + 1;
    totalRound += 1;
    rule2.style.background = "green";

    rule3.style.background = "transparent";
    rule1.style.background = "transparent";
    rule4.style.background = "transparent";
    rule5.style.background = "transparent";
    rule6.style.background = "transparent";
    rule7.style.background = "transparent";
    rule8.style.background = "transparent";
    rule9.style.background = "transparent";
    rule10.style.background = "transparent";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "Computer win!";
    computerScore = computerScore + 1;
    totalRound += 1;
    rule2.style.background = "green";

    rule3.style.background = "transparent";
    rule1.style.background = "transparent";
    rule4.style.background = "transparent";
    rule5.style.background = "transparent";
    rule6.style.background = "transparent";
    rule7.style.background = "transparent";
    rule8.style.background = "transparent";
    rule9.style.background = "transparent";
    rule10.style.background = "transparent";
  }
  if (computerChoice === "spock" && userChoice === "lizard") {
    result = "You win!";
    userScore = userScore + 1;
    totalRound += 1;
    rule5.style.background = "green";

    rule3.style.background = "transparent";
    rule1.style.background = "transparent";
    rule4.style.background = "transparent";
    rule2.style.background = "transparent";
    rule6.style.background = "transparent";
    rule7.style.background = "transparent";
    rule8.style.background = "transparent";
    rule9.style.background = "transparent";
    rule10.style.background = "transparent";
  }
  if (computerChoice === "lizard" && userChoice === "spock") {
    result = "Computer win!";
    computerScore = computerScore + 1;
    totalRound += 1;
    rule5.style.background = "green";

    rule3.style.background = "transparent";
    rule1.style.background = "transparent";
    rule4.style.background = "transparent";
    rule2.style.background = "transparent";
    rule6.style.background = "transparent";
    rule7.style.background = "transparent";
    rule8.style.background = "transparent";
    rule9.style.background = "transparent";
    rule10.style.background = "transparent";
  }
  if (computerChoice === "lizard" && userChoice === "scissors") {
    result = "You win!";
    userScore = userScore + 1;
    totalRound += 1;
    rule7.style.background = "green";

    rule3.style.background = "transparent";
    rule1.style.background = "transparent";
    rule4.style.background = "transparent";
    rule2.style.background = "transparent";
    rule6.style.background = "transparent";
    rule5.style.background = "transparent";
    rule8.style.background = "transparent";
    rule9.style.background = "transparent";
    rule10.style.background = "transparent";
  }
  if (computerChoice === "lizard" && userChoice === "paper") {
    result = "Computer win!";
    computerScore = computerScore + 1;
    totalRound += 1;
    rule8.style.background = "green";

    rule3.style.background = "transparent";
    rule1.style.background = "transparent";
    rule4.style.background = "transparent";
    rule2.style.background = "transparent";
    rule6.style.background = "transparent";
    rule5.style.background = "transparent";
    rule7.style.background = "transparent";
    rule9.style.background = "transparent";
    rule10.style.background = "transparent";
  }
  if (computerChoice === "lizard" && userChoice === "rock") {
    result = "You win!";
    userScore = userScore + 1;
    totalRound += 1;
    rule4.style.background = "green";

    rule3.style.background = "transparent";
    rule1.style.background = "transparent";
    rule7.style.background = "transparent";
    rule2.style.background = "transparent";
    rule6.style.background = "transparent";
    rule5.style.background = "transparent";
    rule8.style.background = "transparent";
    rule9.style.background = "transparent";
    rule10.style.background = "transparent";
  }
  if (computerChoice === "scissors" && userChoice === "lizard") {
    result = "Computer win!";
    computerScore = computerScore + 1;
    totalRound += 1;
    rule7.style.background = "green";

    rule3.style.background = "transparent";
    rule1.style.background = "transparent";
    rule4.style.background = "transparent";
    rule2.style.background = "transparent";
    rule6.style.background = "transparent";
    rule5.style.background = "transparent";
    rule8.style.background = "transparent";
    rule9.style.background = "transparent";
    rule10.style.background = "transparent";
  }
  if (computerChoice === "paper" && userChoice === "lizard") {
    result = "You win!";
    userScore = userScore + 1;
    totalRound += 1;
    rule8.style.background = "green";

    rule3.style.background = "transparent";
    rule1.style.background = "transparent";
    rule7.style.background = "transparent";
    rule2.style.background = "transparent";
    rule6.style.background = "transparent";
    rule5.style.background = "transparent";
    rule4.style.background = "transparent";
    rule9.style.background = "transparent";
    rule10.style.background = "transparent";
  }
  if (computerChoice === "rock" && userChoice === "lizard") {
    result = "Computer win!";
    computerScore = computerScore + 1;
    totalRound += 1;
    rule4.style.background = "green";

    rule3.style.background = "transparent";
    rule1.style.background = "transparent";
    rule7.style.background = "transparent";
    rule2.style.background = "transparent";
    rule6.style.background = "transparent";
    rule5.style.background = "transparent";
    rule8.style.background = "transparent";
    rule9.style.background = "transparent";
    rule10.style.background = "transparent";
  }
  if (computerChoice === "scissors" && userChoice === "spock") {
    result = "You win!";
    userScore = userScore + 1;
    totalRound += 1;
    rule6.style.background = "green";
    rule3.style.background = "transparent";
    rule1.style.background = "transparent";
    rule7.style.background = "transparent";
    rule2.style.background = "transparent";
    rule8.style.background = "transparent";
    rule5.style.background = "transparent";
    rule4.style.background = "transparent";
    rule9.style.background = "transparent";
    rule10.style.background = "transparent";
  }
  if (computerChoice === "paper" && userChoice === "spock") {
    result = "Computer win!";
    computerScore = computerScore + 1;
    totalRound += 1;
    rule10.style.background = "green";
    rule3.style.background = "transparent";
    rule1.style.background = "transparent";
    rule7.style.background = "transparent";
    rule2.style.background = "transparent";
    rule8.style.background = "transparent";
    rule5.style.background = "transparent";
    rule4.style.background = "transparent";
    rule9.style.background = "transparent";
    rule6.style.background = "transparent";
  }
  if (computerChoice === "rock" && userChoice === "spock") {
    result = "You win!";
    userScore = userScore + 1;
    totalRound += 1;
    rule9.style.background = "green";
    rule3.style.background = "transparent";
    rule1.style.background = "transparent";
    rule7.style.background = "transparent";
    rule2.style.background = "transparent";
    rule8.style.background = "transparent";
    rule5.style.background = "transparent";
    rule4.style.background = "transparent";
    rule6.style.background = "transparent";
    rule10.style.background = "transparent";
  }
  if (computerChoice === "spock" && userChoice === "scissors") {
    result = "Computer win!";
    computerScore = computerScore + 1;
    totalRound += 1;
    rule6.style.background = "green";
    rule3.style.background = "transparent";
    rule1.style.background = "transparent";
    rule7.style.background = "transparent";
    rule2.style.background = "transparent";
    rule8.style.background = "transparent";
    rule5.style.background = "transparent";
    rule4.style.background = "transparent";
    rule9.style.background = "transparent";
    rule10.style.background = "transparent";
  }
  if (computerChoice === "spock" && userChoice === "paper") {
    result = "You win!";
    userScore = userScore + 1;
    totalRound += 1;
    rule10.style.background = "green";
    rule3.style.background = "transparent";
    rule1.style.background = "transparent";
    rule7.style.background = "transparent";
    rule2.style.background = "transparent";
    rule8.style.background = "transparent";
    rule5.style.background = "transparent";
    rule4.style.background = "transparent";
    rule6.style.background = "transparent";
    rule9.style.background = "transparent";
  }
  if (computerChoice === "spock" && userChoice === "rock") {
    result = "Computer win!";
    computerScore = computerScore + 1;
    totalRound += 1;
    rule9.style.background = "green";
    rule3.style.background = "transparent";
    rule1.style.background = "transparent";
    rule7.style.background = "transparent";
    rule2.style.background = "transparent";
    rule8.style.background = "transparent";
    rule5.style.background = "transparent";
    rule4.style.background = "transparent";
    rule6.style.background = "transparent";
    rule10.style.background = "transparent";
  }
  winnerDisplay.innerHTML = result;
  userScoresDisplay.innerHTML = userScore;
  computerScoresDisplay.innerHTML = computerScore;
  totalRoundDisplay.innerHTML = totalRound;
}
