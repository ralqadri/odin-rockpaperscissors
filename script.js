const moves = ['rock', 'paper', 'scissors'];

// Gets computer's choice that will randomly return either 'Rock', 'Paper', or 'Scissors'. 
// Uses the Math.random() function to pick 0, 1, and 2 and will choose the psuedo-random choice from the `moves` array.
function getComputerChoice() {
    return moves[Math.floor(Math.random() * 3)];
}