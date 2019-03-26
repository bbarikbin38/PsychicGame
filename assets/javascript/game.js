//creating a variable that will store the winning letters in an array
var winningLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z"];

//assigning a variable for the guesses a user will make
var userGuesses = [];

//assigning a variable to track wins. starting at 0
var wins = 0;

//assigning a variable to track losses. starting at 0.
var losses = 0;

//assigning a variable to track remaining guesses. starting at 9.
var guessesRemaining = 9;

// created a variable that picks a random letter from the winningLetters variable.  
var currentLetter = winningLetters[Math.floor(Math.random() * winningLetters.length)];
console.log(winningLetters);
console.log(currentLetter);
displayWins();
displayLosses();

// function to display the wins
function displayWins() {
    document.querySelector("#win-tracker").innerHTML = wins;
}

// function to display the losses. I could have also done jquery here now that i am looking at this again
function displayLosses() {
    document.querySelector("#loss-tracker").innerHTML = losses;
}

// function to display the guesses left
function displayRemainingGuesses() {
    document.querySelector("#guesses-left").innerHTML = guessesRemaining;
}

function displayGuesses() {
    document.querySelector("#current-guesses").innerHTML = userGuesses;
}
// this is how the game restarts itself
function pickNewWinningNumber() {
    guessesRemaining = 9;
    userGuesses = [];
    currentLetter = winningLetters[Math.floor(Math.random() * winningLetters.length)];
    console.log(currentLetter);
}

// creating a on key down function that captures the users guesses, and pushes to the userGuesses variable, then displays the information
document.onkeydown = function (event) {

    // this is allowing only the letters a through z on the keyboard from the ascii table values.
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        //when a key is entered the guesses remaining will reduce by one
        guessesRemaining--;
        // making the guess lower case so it can match the winning letters array
        var guess = event.key.toLowerCase();
        // adding the guess to the user guesses array, then running functions to update wins, losses, guesses remaining
        userGuesses.push(" " + guess);
    } else {
        alert("You can only enter letters 'a' through 'z' on your keyboard. Please try again.");
        return false;
    }

    if (guess === currentLetter) {

        // Then we will loss and this will update the HTML to display the win and run the new winning # function.
        wins++;
        alert("You Win!");
        pickNewWinningNumber();
    }

    if (guessesRemaining === 0) {

        // Then we will loss and this will update the HTML to display the loss and run the new winning # function..
        losses++;
        alert("You Lose!");
        pickNewWinningNumber();
    }

    displayWins();
    displayLosses();
    displayRemainingGuesses();
    displayGuesses();
    console.log(userGuesses);
}



