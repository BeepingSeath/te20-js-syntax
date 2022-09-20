const namninput = document.querySelector('#input-field');
const button = document.querySelector('button');
const messageBox = document.querySelector('#message-box');

button.addEventListener('click', () => {
    const namn = namninput.value; 
    let message = document.createElement('p');
    for (let i = namn.length-1; i >= 0; i--){
        message.textContent += namn[i];
        messageBox.appendChild(message);
    }
});