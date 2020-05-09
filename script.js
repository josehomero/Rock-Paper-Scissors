const opponentResult = ['Rock', 'Paper', 'Scissors'];

const textDiv = document.getElementById('text-div');
const pictureButtons = document.querySelectorAll('.picture-buttons');
pictureButtons.forEach(button => {
    button.addEventListener('click', e => {
        textDiv.textContent = opponentResult[Math.floor(Math.random() * 3)];

        if(e.target.id === 'rock' && textDiv.textContent === 'Rock') {
            return textDiv.textContent += ": It's a DRAW!";
        } else if (textDiv.textContent === 'Scissors' && e.target.id === 'rock') {
            return textDiv.textContent += ": YOU WIN!";
        } else if (textDiv.textContent === 'Paper' && e.target.id === 'rock') {
            return textDiv.textContent += ": You lose!";
        }

        if(e.target.id === 'scissors' && textDiv.textContent === 'Rock') {
            return textDiv.textContent += " : You lose!";
        } else if (e.target.id === 'scissors' && textDiv.textContent === 'Scissors') {
            return textDiv.textContent += ": It's a DRAW!";
        } else if (e.target.id === 'scissors' && textDiv.textContent === 'Paper')
            return textDiv.textContent += ": YOU WIN!";

        if(e.target.id === 'paper' && textDiv.textContent === 'Rock') {
            return textDiv.textContent += ": YOU WIN!";
        } else if (e.target.id === 'paper' && textDiv.textContent === 'Paper') {
            return textDiv.textContent += ": It's a DRAW!";
        } else if (e.target.id === 'paper' && textDiv.textContent === 'Scissors') {
            return textDiv.textContent += " : You lose!";
        }
    })
})