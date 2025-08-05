const randNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt")
const usrInput = parseInt(document.querySelector('#guessField').value);
const guessSlot = document.querySelector('.guesses');
const remainGuess = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click', function (e) {
        e.preventDefault();//value ko server par jane se rokta he
        const guess = usrInput;
        validateGuess(guess);
    })
}

function validateGuess(guess){

}

function checkGuess(guess){

}

function displayGuess(guess){

}

function displayMsg(msg){

}

function endGame() {

}

function newGame() {

}
