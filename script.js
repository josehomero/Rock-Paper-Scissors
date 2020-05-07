const opponentResult = ['Rock', 'Paper', 'Scissors'];

const textDiv = document.getElementById('text-div');
const pictureButtons = document.querySelectorAll('.picture-buttons');
pictureButtons.forEach(button => {
    button.addEventListener('click', e => {
        textDiv.textContent = opponentResult[Math.floor(Math.random() * 3)];
    })
})