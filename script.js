const ALLOW_ONLY_NUMBERS = (/^[0-9.,]+$/);
const moves = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

let playerMove = '';
let computerMove = '';

let resultText = '';

let rounds = 1;

const history = document.querySelector('.results .history');
const fluff = document.querySelector('.results .history .fluff');
const points = document.querySelector('.results .points');
const winner = document.querySelector('.winner');

// Gets computer's choice that will randomly return either 'Rock', 'Paper', or 'Scissors'. 
// Uses the Math.random() function to pick 0, 1, and 2 and will choose the psuedo-random choice from the `moves` array.
function getComputerChoice() {
    const min = 0 // First element's index (rock)
    const max = 2 // Last element's index (paper)
    return moves[Math.floor(Math.random() * (max - min + 1)) + min];
}

function decideWinner() {
    if (playerScore === computerScore) {
        winner.innerHTML = "It's a tie!";
    } else if (playerScore > computerScore) {
        winner.innerHTML = "👑 You win!";
    } else {
        winner.innerHTML = "💻 Computer wins!";
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundWinner = '';

    computerMove = '';
    playerMove = '';
    resultText = '';
    rounds = 1;

    history.innerHTML = '';
    points.innerHTML = 'Player: 0 <br> Computer: 0';
    winner.innerHTML = '';
}

function titleCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Plays a single round of Rock Paper Scissors.
// Grabs player's (`playerSelection`) and computer's (`computerSelection`) moves and compares the values to declare who is the winner of the round.
function playRound() {
    fluff.innerHTML = '';
    if (rounds > 5) {
        decideWinner();
        return;
    }

    let playerSelection = this.id;
    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
    } else {
        if ( // player winning situation
            (playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {
            roundWinner = 'player';
            playerScore++;
        } else {
            roundWinner = 'computer';
            computerScore++;
        }
    }

    // Making the first letter uppercase so the string output is nicer
    playerSelection = titleCase(playerSelection);
    computerSelection = titleCase(playerSelection);

    console.log(roundWinner, playerSelection, computerSelection);

    if (roundWinner === 'tie') {
        resultText = `[${rounds}] It's a tie! ${playerSelection} (Player) and ${computerSelection} (Computer)`;
    } else if (roundWinner === 'player') {
        resultText = `[${rounds}] Player wins! ${playerSelection} (Player) beats ${computerSelection} (Computer)`;
    } else {
        resultText = `[${rounds}] Computer wins! ${computerSelection} (Computer) beats ${playerSelection} (Player)`;
    }

    history.innerHTML += resultText + '<br>';
    points.innerHTML = `Player: ${playerScore} <br> Computer: ${computerScore}`;

    rounds++;
}

// ---------------------------------------------------------------

document.querySelectorAll('.buttons button').forEach((button) => {
    button.addEventListener("click", playRound);
})

const resetButton = document.querySelector('.reset button');
resetButton.addEventListener("click", resetGame);