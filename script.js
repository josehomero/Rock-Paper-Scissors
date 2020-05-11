const opponentResult = ['Computer chooses Rock', 'Computer chooses Paper', 'Computer chooses Scissors'];
let userWins = 0;
let computerWins = 0;

let yourScore = document.getElementById('your-score');
function userWinsTheGame() {
    userWins += 1
    yourScore.textContent = userWins;
}

let computerScore = document.getElementById('computer-score');
function computerWinsTheGame() {
    computerWins += 1;
    computerScore.textContent = computerWins;
}

const textDiv = document.getElementById('text-div');

const pictureButtons = document.querySelectorAll('.picture-buttons');
pictureButtons.forEach(button => {
    button.addEventListener('click', e => {
        textDiv.textContent = opponentResult[Math.floor(Math.random() * 3)];

        if (e.target.id === 'rock' && textDiv.textContent === 'Computer chooses Rock') {
            return textDiv.textContent += ": It's a DRAW!";
        } else if (e.target.id === 'rock' && textDiv.textContent === 'Computer chooses Scissors') {
            userWinsTheGame()
            return textDiv.textContent += ": YOU WIN!";
        } else if (e.target.id === 'rock' && textDiv.textContent === 'Computer chooses Paper') {
            computerWinsTheGame();
            return textDiv.textContent += ": You lose!";
        }

        if (e.target.id === 'scissors' && textDiv.textContent === 'Computer chooses Rock') {
            computerWinsTheGame();
            return textDiv.textContent += " : You lose!";
        } else if (e.target.id === 'scissors' && textDiv.textContent === 'Computer chooses Scissors') {
            return textDiv.textContent += ": It's a DRAW!";
        } else if (e.target.id === 'scissors' && textDiv.textContent === 'Computer chooses Paper') {
            userWinsTheGame();
            return textDiv.textContent += ": YOU WIN!";
        }

        if (e.target.id === 'paper' && textDiv.textContent === 'Computer chooses Rock') {
            userWinsTheGame()
            return textDiv.textContent += ": YOU WIN!";
        } else if (e.target.id === 'paper' && textDiv.textContent === 'Computer chooses Paper') {
            return textDiv.textContent += ": It's a DRAW!";
        } else if (e.target.id === 'paper' && textDiv.textContent === 'Computer chooses Scissors') {
            computerWinsTheGame();
            return textDiv.textContent += " : You lose!";
        }
    })
})