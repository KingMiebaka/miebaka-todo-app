const addMeButton = document.getElementById('addMeButton');
const inputField = document.querySelector('#input-field');
const output = document.querySelector('#output');
const alertBox = document.querySelector('#alert');
const yesButton = document.querySelector('#yes');
const noButton = document.querySelector('#no');

addMeButton.addEventListener('click', () => {
    if (inputField.value.trim() !== '') { // Check if input field is not empty
        const newMessage = document.createElement('li');
        newMessage.textContent = inputField.value;
        output.appendChild(newMessage);
        inputField.value = '';
        inputField.focus();

        const trashIcon = document.createElement('i');
        trashIcon.className = 'fas fa-trash trash-icon';
        newMessage.appendChild(trashIcon);

        trashIcon.addEventListener('click', () => {
            alertBox.classList.remove('hide');
            yesButton.addEventListener('click', () => {
                newMessage.remove();
                alertBox.classList.add('hide');
            });
        });
    }
});

noButton.addEventListener('click', () => {
    alertBox.classList.add('hide');
});
