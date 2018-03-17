const readline = require('readline');

// Declare a variable for my showing output, default should be showing only udnerscore
// Declare a variable to track whether game wins
// Declare a variable for actual;
// Declare a variable for tracking how many chances I have

// initialize an output with the length of the answer
// prompt for user input 
// after receiving user input, go through the following process:
  // check to see if the user input is a letter 
    // if user input is a letter, check to see if the answer contains the letter
       // if answer contains letter, rewrite output so that it shows that letter
       // else you lose a change for guess
    // if user input is not a letter, ask to input again and you lose a chance for guess


let hangmanOutput = [];
let hangmanAnswer = "javascript";
let hangmanHash = {};
let chances = 10;
let gameOver = false;
let userInputLog = [];
let rl;

// This function creates the output for hangmanOutput according to it's length
function initialize(answer) {
    for (let i = 0; i < hangmanAnswer.length; i++) {
        hangmanOutput.push("_");
        if (hangmanHash[hangmanAnswer[i]]) {
            hangmanHash[hangmanAnswer[i]].push(i);
        } else {
            hangmanHash[hangmanAnswer[i]] = [i];
        }
    }
}

// Prompt for user input
function getUserInput() {
    rl = readline.createInterface(process.stdin, process.stdout),
    prefix = 'Hangman Game Guess> ';
    rl.on('line', function (line) {
        var firstLetter = line.trim().slice(0, 1).toLowerCase();
        if (!gameOver) {
            if (hangmanHash[firstLetter]) {
                parseUserInput(firstLetter);
                staticBoard(firstLetter);
                checkGameStatus();
            } else {
                chances--;
                staticBoard(firstLetter);
                checkGameStatus();
            }
        } else {
            console.log("Game Over!");
            rl.close();
        }
        rl.setPrompt(prefix, prefix.length);
        rl.prompt();
    }).on('close', function () {
        console.log('You terminated the game!');
        process.exit(0);
    });
    console.log('Guess a letter! (Click ctrl+c to terminate game)');
    rl.setPrompt(prefix, prefix.length);
    rl.prompt();

}

// Replace letter with the letter 
function parseUserInput(letter) {
    let indices = hangmanHash[letter];
    indices.forEach(idx => hangmanOutput[idx] = letter);
}

// Show my current stats
function staticBoard(currentInput) {
    var output = hangmanOutput.indexOf("_") ? hangmanOutput.join(" ") : hangmanOutput.join(" ");
    checkGameStatus();
    console.log("Your Current Input: " + currentInput);
    console.log("-----------------------------------");
    console.log("Chances left: " + chances);
    console.log("Current Result: " + output);
    console.log();
    console.log("-----------------------------------");
    console.log(" ");
    console.log(" ");
}

function checkGameStatus(){
    if (chances === 0 || (hangmanOutput.join("") === hangmanAnswer)) {
        gameOver = true;
    } 
}

// Initialize all my game logic
function hangman() {
    console.log("...initializing hangman");
    initialize();
    staticBoard();
    getUserInput();
    checkGameStatus();
}

hangman();
