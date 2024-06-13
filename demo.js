let randomNumber=parseInt(Math.floor(Math.random()*100)+1);
console.log(randomNumber)

const submit=document.querySelector('#sub');
const userInput=document.querySelector('#guessfield');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const startOver=document.querySelector('.resultPress');
const lowOrHi=document.querySelector('.lowOrHi')

const p=document.createElement('p');
let previousGuesses=[];
let numGuesses=1;
let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        validateGuess(guess);

    });
}

function validateGuess (guess){
    if(isNaN(guess)){
        alert('Please enter valid number');
    }else if(guess<1){
        alert('Please enter a number greater than 1!');
    }else if(guess>100){
        alert('Please enter a number less than 100!')
    }else{
        previousGuesses.push(guess);

        if(numGuesses===11){
            displayGuesses(guess);
            displayMessage('Game Over! Number was${randomNumber} ');
            endGame();

        }else {
            displayGuesses(guess);
            checkGuess(guess);
             
        }
    }

}


function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage('You guessed correctly');
        endGame();
    }else if(guess<randomNumber){
        displayMessage('Too low! Try again');

    }else if(guess>randomNumber){
        displayMessage('Too High! Try again');
    }
}
function displayGuesses(guess){
userInput.value='';
guessSlot.innerHTML+=`${guess}`;
numGuesses++
remaining.innerHTML=`${11-numGuesses}`;
}
function displayMessage(message){
    lowOrHi.innerHTML=`<h1>${message}</h1>`

}

