///////////////////////////////////////////////////
//-----------VARIABLE DECLARATION----------//
//////////////////////////////////////////////////

/////////////////GAME CACHE///////////////////
//result cache
const rock = "rock".toUpperCase();
const paper = "paper".toUpperCase();
const scissor = "scissor".toUpperCase();
const rockImg = "✊";
const paperImg = "🖐";
const scissorImg = "✌️";
//SCORE CACHE
let playerScore = 0;
let computerScore = 0;
let setScore = null;
let gameRound = 1;
let playerInput;
let computerInput;

/////////////////DOM-SELECTORS///////////////////
const btnRock = document.querySelector(".btn--rock");
const btnPaper = document.querySelector(".btn--paper");
const btnScissor = document.querySelector(".btn--scissor");
const playerText = document.querySelector(".player--text");
const computerText = document.querySelector(".computer--text");
const playerScoreText = document.querySelector(`.player--score--number`);
const computerScoreText = document.querySelector(`.computer--score--number`);
const statusText = document.querySelector(".text--status");
const resultText = document.querySelector(".text--result");

///////////////////////////////////////////////////
//--------------EVENT-HANDLER FUNCTIONS---------//
//////////////////////////////////////////////////
btnRock.addEventListener("click", () => {
  playerText.textContent = `Player Choose: ${rockImg}`;
  playerInput = rock;
  playRound();
});

btnPaper.addEventListener("click", () => {
  playerText.textContent = `Player Choose: ${paperImg}`;
  playerInput = paper;
  playRound();
});

btnScissor.addEventListener("click", () => {
  playerText.textContent = `Player Choose: ${scissorImg}`;
  playerInput = scissor;
  playRound();
});
///////////////////////////////////////////////////
//--------------HELPER FUNCTIONS---------//
//////////////////////////////////////////////////

///////function to get player choice//////////
const getPlayerChoice = () => {
  return playerInput;
};

///////function to get computers choice//////////
function getComputerChoice() {
  // creating an array for computer to choose from.
  const computerChoice = [rock, paper, scissor];
  //generating a random number to grab selection
  const random = Math.floor(Math.random() * computerChoice.length);
  computerInput = computerChoice[random];
}

//////////function to display computer selection////////////

const displayComputerChoice = (choice) => {
  if (choice === rock) {
    computerText.textContent = `computer Choose: ${rockImg}`;
  } else if (choice === paper) {
    computerText.textContent = `computer Choose: ${paperImg}`;
  } else if (choice === scissor) {
    computerText.textContent = `computer Choose: ${scissorImg}`;
  }
};

//////////function to store calculate score////////////
function scoreBoard(score) {
  if (score === null) {
    playerScore;
    computerScore;
  } else if (score) {
    playerScore++;
    playerScoreText.textContent = `${playerScore}`;
  } else {
    computerScore++;
    computerScoreText.textContent = `${computerScore}`;
  }
}

///////////////////////////////////////////////////
//--------------PLAY ONE ROUND FUNCTION---------//
//////////////////////////////////////////////////

//////////function to play One round of the game//////////////
function playOneRound(playerSelection, computerSelection) {
  ////////log players choice/////////////
  console.log("Player: " + playerSelection);
  console.log("Computer: " + computerSelection);

  /////// function to declare loose ///////////////
  function youLoose() {
    resultText.textContent = `${computerSelection} beats ${playerSelection}, You loose!`;
    setScore = false;
  }
  //////// function to declare win ///////////
  function youWin() {
    resultText.textContent = `${playerSelection} beats ${computerSelection}, You Win!`;
    setScore = true;
  }
  /////// function to declare draw ///////////
  function draw() {
    resultText.textContent = `it's a Draw`;
    setScore = null;
  }

  /////////// conditional statement to get result //////////
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

///////////////////////////////////////////////////
//--------------ROUNDS OF GAME FUNCTION---------//
//////////////////////////////////////////////////

// const game = () => {
//   for (let i = 0; i < 1; i++) {
//     console.log("ROUND: " + gameRound + " Choose your Option");

//     //storing the answers of both player and computer
//     // const playerInput = getPlayerChoice();
//     // const computerInput = getComputerChoice();

//     playOneRound(playerInput, computerInput);
//     scoreBoard(setScore);
//     console.log("playerScore: " + playerScore);
//     console.log("computerScore: " + computerScore);
//     gameRound++;
//   }

// if (playerScore === computerScore) {
//   console.log("the match is draw");
// } else if (playerScore > computerScore) {
//   console.log("the winner of this game is  player");
// } else {
//   console.log("the winner of this game is computer");
// }
// };

const playRound = () => {
  statusText.textContent = `ROUND: ${gameRound}`;
  // console.log("ROUND: " + gameRound + " Choose your Option");

  getComputerChoice();

  playOneRound(playerInput, computerInput);
  displayComputerChoice(computerInput);

  scoreBoard(setScore);
  console.log("playerScore: " + playerScore);
  console.log("computerScore: " + computerScore);
  gameRound++;
};
