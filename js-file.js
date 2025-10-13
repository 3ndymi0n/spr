

function computerTurnSelection(turns) {
  const computerChoice = Math.floor(Math.random() * turns.length)
  return turns[computerChoice];
};

function playerTurnSelection(choice) {
  return choice === 'scissors' ? 'scissors'
       : choice === 'paper' ? 'paper'
       : 'rock'
};

function playRound() {
  const turns = ["scissors", "paper", "rock"];
  const RULES  = {
    paper: "rock",
    scissors: "paper",
    rock: "scissors"
  };

  const computerTurn = computerTurnSelection(turns);
  const playerTurn = playerTurnSelection(prompt("scissors, paper or rock?"));

  console.log(`Computer picked ${computerTurn} and player picked ${playerTurn}.`)

  if(RULES[playerTurn] === computerTurn) {
    return "player";
  } else if (RULES[computerTurn] === playerTurn) {
    return "computer";
  } else {
    return "draw";
  }
};

function playGame() {
  let computerScore = 0;
  let playerScore = 0;
  let draw = 0;
  let roundCounter = 0;

  while (computerScore < 5 && playerScore < 5) {
    let round = playRound();
    roundCounter += 1;
    if (round === "player") {
      playerScore += 1;
    } else if (round === "computer"){
      computerScore += 1;
    } else {
      draw += 1;
    }
    console.log(`Round ${roundCounter}, player score is ${playerScore} and computer Score is ${computerScore} and draw counter is ${draw}.`)
  }
};

playGame();
