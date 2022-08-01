const ALLOW_ONLY_NUMBERS = (/^[0-9.,]+$/);
const moves = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

let playerMove = '';
let computerMove = '';

let rounds = -1;

// Gets computer's choice that will randomly return either 'Rock', 'Paper', or 'Scissors'. 
// Uses the Math.random() function to pick 0, 1, and 2 and will choose the psuedo-random choice from the `moves` array.
function getComputerChoice() {
    return moves[Math.floor(Math.random() * 3)];
}

// Plays a single round of Rock Paper Scissors.
// Grabs player's (`playerSelection`) and computer's (`computerSelection`) moves and compares the values to declare who is the winner of the round.
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); // making player input case-insensitive by making them into an all lowercase string

    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
    } else {
        if (    // player winning situation
            (playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {
            roundWinner = 'player';
            playerScore += 1;
        } else {
            roundWinner = 'computer';
            computerScore += 1;
        }
    }

    // Making the first letter uppercase so the string output is nicer
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)

    if (roundWinner === 'tie') {
        return `It's a tie! ${playerSelection} (Player) and ${computerSelection} (Computer)`
    } else if (roundWinner === 'player') {
        return `Player wins! ${playerSelection} (Player) beats ${computerSelection} (Computer)`
    } else {
        return `Computer wins! ${computerSelection} (Computer) beats ${playerSelection} (Player)`
    }
}

function game(rounds) {
    console.log(`Alright! Let's play ${rounds} rounds of Rock Paper Scissors!`)
    for (let round = 0; round < rounds; round++) {
        console.log(`Current round: Round ${round+1}`);
        playerMove = prompt("What's your move?").toLowerCase();
        while (playerMove !== 'rock' && playerMove !== 'paper' && playerMove !== 'scissors') {
            playerMove = prompt("That's not a move, silly! What's your move?").toLowerCase();
        }
        console.log(playRound(playerMove, getComputerChoice()));
    }
}

console.log("Welcome to Rock Paper Scissors! How many rounds do you want to play?")
rounds = prompt('Type in how many rounds of Rock Paper Scissors do you want to play...')
// while (rounds == ALLOW_ONLY_NUMBERS) {
//     rounds = prompt("That's not a number, silly! How many rounds do you want to play?");
//     console.log(typeof rounds);
// } 
game(rounds);
