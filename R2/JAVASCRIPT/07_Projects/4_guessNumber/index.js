const randNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt")
const usrInput = document.querySelector('#guessField');
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
        const guess = parseInt(usrInput.value);
        console.log("🚀 ~ guess:", guess)
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess) || guess < 1 || guess > 100){
        alert('Please enter a valid number')
    } else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMsg(`Game over. Random number was ${randNum}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    if(guess === randNum){
        displayMsg(`You guessed it right`)
        endGame()
    } else if(guess < randNum){
        displayMsg(`Number is TOO low`)

    } else if(guess > randNum){
        displayMsg(`Number is TOO high`)

    }

}

function displayGuess(guess){
    usrInput.value = ''
    guessSlot.innerHTML += `${guess}`
    numGuess++;
    remainGuess.innerHTML = `${11 - numGuess}`
}

function displayMsg(msg){

}

function endGame() {

}

function newGame() {

}
