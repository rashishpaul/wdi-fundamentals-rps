////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
        console.log('tie');
    } else if (playerMove === 'rock' && computerMove === 'scissors') {
        console.log('player');
    } else if (playerMove === 'rock' && computerMove === 'paper') {
        console.log('computer');
    } else if (playerMove === 'paper' && computerMove === 'rock') {
        console.log('player');
    } else if (playerMove === 'paper' && computerMove === 'scissors') {
        console.log('computer');
    } else if (playerMove === 'scissors' && computerMove === 'rock') {
        console.log('computer');
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
        console.log('player');
    }
        return winner;
    }

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    var winner = getWinner();
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();

//unsure of this code    
    while (computerWins < 5 && playerWins < 5){
        playerWins ++
}
    else {
        computerWins ++
    }        
    return [playerWins, computerWins];
}

