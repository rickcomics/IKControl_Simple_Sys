const newButton = document.createElement('button');
newButton.textContent = 'wallet connect';
button.classList.add('btn');
button.setAttribute('type', 'button');

button.addEventListener('click', () => {
  alert('Oh, you clicked me!')
})


document.body.appendChild(newButton);
