const opponentResult = ['Rock', 'Paper', 'Scissors'];
let userWins = 0;
let computerWins = 0;

function userWinsTheGame() {
    userWins +=1
    yourScore.value = userWins;
    yourScore.textContent = yourScore.value;
}

function computerWinsTheGame() {
    computerWins += 1;
    computerScore.value = computerWins;
}

const textDiv = document.getElementById('text-div');
let yourScore = document.getElementsByTagName('your-score');
let computerScore = document.getElementById('computer-score');
const pictureButtons = document.querySelectorAll('.picture-buttons');
pictureButtons.forEach(button => {
    button.addEventListener('click', e => {
        textDiv.textContent = opponentResult[Math.floor(Math.random() * 3)];



        if(e.target.id === 'rock' && textDiv.textContent === 'Rock') {
            return textDiv.textContent += ": It's a DRAW!";
        } else if (e.target.id === 'rock' && textDiv.textContent === 'Scissors') {
            //add 1 to userWins
            userWinsTheGame()
            console.log(yourScore.value);
            //debugger;
            //update your-score <p> to = userWins variable
            return textDiv.textContent += ": YOU WIN!";
        } else if (e.target.id === 'rock' && textDiv.textContent === 'Paper') {
            computerWinsTheGame();
            return textDiv.textContent += ": You lose!";
        }

        if(e.target.id === 'scissors' && textDiv.textContent === 'Rock') {
            computerWinsTheGame();
            return textDiv.textContent += " : You lose!";
        } else if (e.target.id === 'scissors' && textDiv.textContent === 'Scissors') {
            return textDiv.textContent += ": It's a DRAW!";
        } else if (e.target.id === 'scissors' && textDiv.textContent === 'Paper') {
            return textDiv.textContent += ": YOU WIN!";
        }

        if(e.target.id === 'paper' && textDiv.textContent === 'Rock') {
            userWinsTheGame()
            return textDiv.textContent += ": YOU WIN!";
        } else if (e.target.id === 'paper' && textDiv.textContent === 'Paper') {
            return textDiv.textContent += ": It's a DRAW!";
        } else if (e.target.id === 'paper' && textDiv.textContent === 'Scissors') {
            computerWinsTheGame();
            return textDiv.textContent += " : You lose!";
        }
    })
})