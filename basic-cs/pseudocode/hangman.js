const readline = require('readline');

// Declare a variable for my showing output, default should be showing only -----
// Declare a variable to track whether games win or not
// Declare a variable for my final answer;
// Declare a variable for tracking how many chances I have

// initialize an output with the length of the answer
// prompt for user input 
// after receiving user input, go through the following process:
  // check to see if the user input is a letter 
    // if user input is a letter, check to see if the answer contains the letter
       // if answer contains letter, rewrite output so that it shows that letter
       // else you lose a change for guess
    // if user input is not a letter, ask to input again and you lose a chance for guess

let hangmanOutput = "";
let hangmanAnswer = "javascript";
let gameOver = false;

// This function creates the output for hangmanOutput according to it's length
function initialize(answer) {
  if (typeof answer !== "string") {
    return "Error input";
  } else {
    for (var i = 0; i < answer.length; i++) {
      hangmanOutput += "_";
    }
  }
  console.log("initializing..." + answer);
}

// Prompt for user input
function getUserInput (){
    var rl = readline.createInterface(process.stdin, process.stdout),
      prefix = 'Hangman Game Guess> ';

    rl.on('line', function (line) {
      switch (line.trim()) {
        case 'hello':
          console.log('world!');
          break;
        default:
          console.log('Say what? I might have heard `' + line.trim() + '`');
          break;
      }
      rl.setPrompt(prefix, prefix.length);
      rl.prompt();
    }).on('close', function () {
      console.log('Have a great day!');
      process.exit(0);
    });
    console.log('Guess a letter! (Click ctrl+c to terminate game)');
    rl.setPrompt(prefix, prefix.length);
    rl.prompt();
}

// Check to see if the answer is correct
function checkAnswer(letter) {
  var isALetter = typeof letter;
  if ((hangmanAnswer.indexOf(letter) > -1) && (isALetter)) {
    return true;
  } else {
    return false;
  }
}

// Show my current stats
function staticBoard() {
  console.log("Your Current Word ");
  console.log("Chances left: ");
}

// Initialize all my game logic
function hangman() {
  console.log("this is hangman");
  var input = getUserInput();
  if (input) {
    initialize(input);
    console.log("Hangman output: " + hangmanOutput);
    console.log("Hangman length: " + hangmanOutput.length);
  }
}

hangman();