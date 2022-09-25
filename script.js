//GAME CACHE
//result cache
const rock = "rock".toUpperCase();
const paper = "paper".toUpperCase();
const scissor = "scissor".toUpperCase();

//function to get computers choice
function getComputerChoice() {
  // creating an array for computer to choose from.
  const computerChoice = ["Rock", "Paper", "Scissor"];
  //generating a random number to grab selection
  const random = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[random];
}

//prompt to get players choice
const getPlayerChoice = () => {
  //prompt for user input
  const answer = prompt("Select your option: ").toUpperCase();
  return answer;
};

//storing the answers of both player and computer
const playerAnswer = getPlayerChoice();
const computerInput = getComputerChoice().toUpperCase();

function verifyAnswer(choice) {
  if (choice !== rock) {
    if (choice !== paper) {
      if (choice !== scissor) {
        alert("not Valid selection");
        return getPlayerChoice();
      } else {
        return choice;
      }
    } else {
      return choice;
    }
  } else {
    return choice;
  }
}

const playerInput = verifyAnswer(playerAnswer);

//function to play One round of the game
function playOneRound(playerSelection, computerSelection) {
  //log players choice
  console.log("Player: " + playerSelection);
  console.log("Computer: " + computerSelection);
  // function to declare loose
  function youLoose() {
    return console.log(
      computerSelection + " beats " + playerSelection + " ,You loose!"
    );
  }
  // function to declare win
  function youWin() {
    return console.log(
      playerSelection + " beats " + computerSelection + " ,You Win!"
    );
  }
  // function to declare draw
  function draw() {
    return console.log("its a draw");
  }

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

//function to play multiple round of games
const game = (player, computer) => {
  //SCORE CACHE
  const playerScore = 0;
  const computerScore = 0;
  playOneRound(player, computer);
  //loop of 5 rounds
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
};

game(playerInput, computerInput);
