// test log
console.log("hello world!");

//function to get computers choice
function getComputerChoice() {
  // creating an array for computer to choose from.
  const computerChoice = ["Rock", "Paper", "Scissor"];
  //generating a random number to grab selection
  const random = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[random];
}

//function to get players choice choice
function getPlayerChoice() {
  // creating an array for computer to choose from.
  const playerChoice = ["Rock", "Paper", "Scissor"];
  //generating a random number to grab selection
  const random = Math.floor(Math.random() * playerChoice.length);
  return playerChoice[random];
}

//storing the answers of both player and computer
const player = getPlayerChoice();
const computer = getComputerChoice();

//function to play One round of the game
function playOneRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log(
      "player: " + playerSelection,
      "computer: " + computer,
      "its a draw"
    );
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    console.log(
      "player: " + playerSelection,
      "computer: " + computer,
      "Paper beats rock, You loose!"
    );
  } else if (playerSelection === "Paper" && computerSelection === "Scissor") {
    console.log(
      "player: " + playerSelection,
      "computer: " + computer,
      "Scissor beats Paper, You loose!"
    );
  } else if (playerSelection === "Scissor" && computerSelection === "Rock") {
    console.log(
      "player: " + playerSelection,
      "computer: " + computer,
      "Rock beats Scissor, You loose!"
    );
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    console.log(
      "player: " + playerSelection,
      "computer: " + computer,
      "Paper beats Rock, You Win!"
    );
  } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
    console.log(
      "player: " + playerSelection,
      "computer: " + computer,
      "Scissor beats Paper, You Win!"
    );
  } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
    console.log(
      "player: " + playerSelection,
      "computer: " + computer,
      "Rock beats Scissor, You Win!"
    );
  }
}

playOneRound(player, computer);
