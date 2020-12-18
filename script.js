// console.log('hello world');

const setColor = document.querySelector('#set-color');
const colorInput = document.querySelector('#color-input');
const brush = document.querySelector('.brush');
const body = document.querySelector('body');


// console.log(colorInput.innerText);

setColor.addEventListener('click', changeColor);

function changeColor(event) {
  event.preventDefault();
  brush.style.background = colorInput.value;
}

for(let i = 0; i < 10000; i++) {
  let newDiv = document.createElement('div');
  newDiv.classList.add('square');
  body.appendChild(newDiv);
}

body.addEventListener('mouseover', paint);

function paint(event) {
  event.preventDefault();
  if (event.target.classList.contains('square')){
    event.target.style.background = brush.style.background;
  }
}
// console.log(body);
