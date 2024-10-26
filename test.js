const btn = document.createElement('btn');
btn.innerText = "text";
btn.addListClass = "btn";
btn.addEventListener('click', () => {
  alert('Oh, you clicked me!')
})
document.body.appendChild('btn');
