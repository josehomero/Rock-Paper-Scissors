const textDiv = document.getElementById('text-div');
const opponentResult = ['Rock', 'Paper', 'Scissors'];

//const createTextInDiv = function (text) {
    //var divText = document.createElement('p');
    //textDiv.textContent = opponentResult[Math.floor(Math.random() * 3)];
  //  textDiv.appendChild(divText);
//}

const pictureButtons = document.querySelectorAll('.picture-buttons');
pictureButtons.forEach(button => {
    button.addEventListener('click', e => {
        function displayedResult() {
            textDiv.textContent = opponentResult[Math.floor(Math.random() * 3)]
        }
    })
})