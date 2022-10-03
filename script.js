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

//INITIAL-GAME CONDITIONS
let gameRound = 1;
let playerInput;
let computerInput;
let gameRunning = true;
let gameLimit = 11;

/////////////////DOM-SELECTORS///////////////////
const btnRock = document.querySelector(".btn--rock");
const btnPaper = document.querySelector(".btn--paper");
const btnScissor = document.querySelector(".btn--scissor");
const btnReset = document.querySelector(".btn--reset");
const playerText = document.querySelector(".player--text");
const computerText = document.querySelector(".computer--text");
const playerScoreText = document.querySelector(`.player--score--number`);
const computerScoreText = document.querySelector(`.computer--score--number`);
const statusText = document.querySelector(".text--status");
const resultText = document.querySelector(".text--result");

///////////////////////////////////////////////////
//--------------EVENT-HANDLER FUNCTIONS---------//
//////////////////////////////////////////////////

//event-listener on ROCK BUTTON
btnRock.addEventListener("click", () => {
  if (gameRunning === true) {
    playerText.textContent = `Player Choose: ${rockImg}`;
    playerInput = rock;
    playRound();
  }
});

//event-listener on PAPER BUTTON
btnPaper.addEventListener("click", () => {
  if (gameRunning === true) {
    playerText.textContent = `Player Choose: ${paperImg}`;
    playerInput = paper;
    playRound();
  }
});

//event-listener on SCISSOR BUTTON
btnScissor.addEventListener("click", () => {
  if (gameRunning === true) {
    playerText.textContent = `Player Choose: ${scissorImg}`;
    playerInput = scissor;
    playRound();
  }
});

//event-listener on RESET BUTTON
btnReset.addEventListener("click", () => {
  console.log(`reset button was clicked`);
  statusText.textContent = `ROUND: ${(gameRound = 1)}`;
  playerText.textContent = `Player Choose: ❓`;
  computerText.textContent = `Computer Choose: ❓`;
  resultText.textContent = `SCORE`;
  playerScoreText.textContent = `${(playerScore = 0)}`;
  computerScoreText.textContent = `${(computerScore = 0)}`;
  gameRunning = true;
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
    computerText.textContent = `Computer Choose: ${rockImg}`;
  } else if (choice === paper) {
    computerText.textContent = `Computer Choose: ${paperImg}`;
  } else if (choice === scissor) {
    computerText.textContent = `Computer Choose: ${scissorImg}`;
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
//--------------COMPARE RESULT FUNCTION---------//
//////////////////////////////////////////////////

//////////function to play One round of the game//////////////
function matchResults(playerSelection, computerSelection) {
  ////////log players choice/////////////
  console.log("Player: " + playerSelection);
  console.log("Computer: " + computerSelection);

  /////// function to declare loose ///////////////
  function youLoose() {
    resultText.textContent = `${computerSelection} beats ${playerSelection}, You loose!`;
    setScore = false;
  }

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
//--------------END GAME FUNCTION---------//
//////////////////////////////////////////////////

const endGame = () => {
  if (playerScore === computerScore) {
    resultText.textContent = `The match is draw`;
    // console.log("the match is draw");
  } else if (playerScore > computerScore) {
    resultText.textContent = `The winner of this game is Player`;
    // console.log("the winner of this game is  player");
  } else {
    resultText.textContent = `The winner of this game is Computer`;
  }
  gameRunning = false;
};

///////////////////////////////////////////////////
//--------------PLAY ONE-ROUND FUNCTION---------//
//////////////////////////////////////////////////

const playRound = () => {
  statusText.textContent = `ROUND: ${gameRound}`;
  // console.log("ROUND: " + gameRound + " Choose your Option");
  getComputerChoice();
  matchResults(playerInput, computerInput);
  displayComputerChoice(computerInput);
  scoreBoard(setScore);
  gameRound++;
  gameRound === gameLimit && endGame();
  console.log(gameRunning);
};
