//GAME CACHE
//result cache
const rock = "rock".toUpperCase();
const paper = "paper".toUpperCase();
const scissor = "scissor".toUpperCase();
//SCORE CACHE
let playerScore = 0;
let computerScore = 0;
let getScore = null;
let gameRound = 1;

//function to get computers choice
function getComputerChoice() {
  // creating an array for computer to choose from.
  const computerChoice = [rock, paper, scissor];
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

function verifyAnswer(choice) {
  if (choice !== rock) {
    if (choice !== paper) {
      if (choice !== scissor) {
        alert("not Valid selection");
        getScore = null;
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
    return (getScore = false);
  }
  // function to declare win
  function youWin() {
    console.log(playerSelection + " beats " + computerSelection + " ,You Win!");
    return (getScore = true);
  }
  // function to declare draw
  function draw() {
    console.log("its a draw");
    return (getScore = null);
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

//function to store calculate score
function scoreBoard(score) {
  if (score === null) {
    playerScore++;
    computerScore++;
  } else if (score) {
    playerScore++;
  } else {
    computerScore++;
  }
}

//function to play multiple round of games
const game = () => {
  for (let i = 0; i < 5; i++) {
    console.log("ROUND: " + gameRound + " Choose your Option");
    //storing the answers of both player and computer
    const playerAnswer = getPlayerChoice();
    const computerInput = getComputerChoice();
    const playerInput = verifyAnswer(playerAnswer);

    playOneRound(playerInput, computerInput);
    scoreBoard(getScore);
    console.log("playerScore: " + playerScore);
    console.log("computerScore: " + computerScore);
    gameRound++;
  }

  if (playerScore === computerScore) {
    console.log("the match is draw");
  } else if (playerScore > computerScore) {
    console.log("the winner of this game is  player");
  } else {
    console.log("the winner of this game is computer");
  }
};

game();
