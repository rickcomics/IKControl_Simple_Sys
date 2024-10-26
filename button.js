const newButton = document.createElement('button');
newButton.textContent = 'wallet connect';
newButton.classList.add('btn');
newButton.setAttribute('type', 'button');

newButton.addEventListener('click', () => {
  alert('Oh, you clicked me!')
})


document.body.appendChild(newButton);
