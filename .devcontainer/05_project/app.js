const randomNumber = parseInt(Math.random()*10+1);

// selecting all the elements required, so that we can work on them

const submitButton = document.querySelector("#submitButton");
const numberEntered = document.querySelector("#guessField");

const previousGuesses = document.querySelector("#prevGuesses");
const remainingGuesses = document.querySelector("#guessesRemaining");

const lowOrHigh = document.querySelector("#lowOrHigh");
const guessesDiv = document.querySelector("#wrapper");

