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
const player = getPlayerChoice().toUpperCase();
const computer = getComputerChoice().toUpperCase();

//function to play One round of the game
function playOneRound(playerSelection, computerSelection) {
  //log players choice
  console.log("Player: " + playerSelection);
  console.log("Computer: " + computerSelection);
  // function to declare loose
  function youLoose() {
    console.log(
      computerSelection + " beats " + playerSelection + " ,You loose!"
    );
  }
  // function to declare win
  function youWin() {
    console.log(playerSelection + " beats " + computerSelection + " ,You Win!");
  }
  // function to declare draw
  function draw() {
    console.log("its a draw");
  }
  //result cache
  const rock = "Rock".toUpperCase();
  const paper = "Paper".toUpperCase();
  const scissor = "Scissor".toUpperCase();
  // conditional statement to get result
  if (playerSelection === computerSelection) {
    draw();
  } else if (playerSelection === rock) {
    computerSelection === paper ? youLoose() : youWin();
  } else if (playerSelection === paper) {
    computerSelection === scissor ? youLoose() : youWin();
  } else if (playerSelection === scissor) {
    computerSelection === rock ? youLoose() : youWin();
  }
}

playOneRound(player, computer);
