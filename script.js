const ROCK = 'Rock';
const SCISSORS = 'Scissors';
const PAPER = 'Paper';

let userWins = 0;
let computerWins = 0;

function userWinsTheGame() {
    userWins += 1
    let yourScore = document.getElementById('your-score');
    yourScore.textContent = userWins;
}

function computerWinsTheGame() {
    computerWins += 1;
    let computerScore = document.getElementById('computer-score');
    computerScore.textContent = computerWins;
}

const pictureButtons = document.querySelectorAll('.picture-buttons');
pictureButtons.forEach(button => {
    button.addEventListener('click', e => {
        const textDiv = document.getElementById('text-div');
        const opponentResult = [ROCK, PAPER, SCISSORS];
        const computerChoice = opponentResult[Math.floor(Math.random() * 3)].toUpperCase();
        textDiv.textContent = 'Computer chooses ' + computerChoice;


        const playerChoice = e.target.id.toUpperCase();
        console.log(playerChoice);

        if (playerChoice === computerChoice.toUpperCase()) {
            textDiv.textContent += ": It's a DRAW!";
            return;
        }

        const rockBeatsScissors = playerChoice === ROCK.toUpperCase() && computerChoice === SCISSORS.toUpperCase();
        const scissorsBeatsPaper = playerChoice === SCISSORS.toUpperCase() && computerChoice === PAPER.toUpperCase();
        const paperBeatsRock = playerChoice === PAPER.toUpperCase() && computerChoice === ROCK.toUpperCase();

        if (rockBeatsScissors || scissorsBeatsPaper || paperBeatsRock) {
            userWinsTheGame()
            textDiv.textContent += ": YOU WIN!";
            return;
        }

        const rockLosesToPaper = playerChoice === ROCK.toUpperCase() && computerChoice === PAPER.toUpperCase();
        const scissorsLosesToRock = playerChoice === SCISSORS.toUpperCase() && computerChoice === ROCK.toUpperCase();
        const paperLosesToScissors = playerChoice === PAPER.toUpperCase() && computerChoice === SCISSORS.toUpperCase();
        console.log(computerChoice);

        if(rockLosesToPaper || scissorsLosesToRock || paperLosesToScissors) {
            computerWinsTheGame();
            textDiv.textContent += ": You lose!";
            return;
        }
    })
})