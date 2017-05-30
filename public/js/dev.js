const output = document.getElementById('target');
const eventButton = document.querySelector('button')

eventButton.addEventListener('click', () => {
  output.innerHTML === "" ? output.innerHTML = '<h2>It works!</h2>' : output.innerHTML = ''
});