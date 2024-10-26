const btn = document.createElement('btn');
btn.innerText = "text";
btn.addEventListener('click', () => {
  alert('Oh, you clicked me!')
})
document.body.appendChild('btn');
