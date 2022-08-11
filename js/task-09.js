//variables
let body = document.querySelector('body');
let colorBtn = document.querySelector('.change-color');
let colorName =  document.querySelector('.color')
let colorRandomizer = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

colorBtn.addEventListener('click', skittles)

function skittles(){
let color = colorRandomizer();
body.style.backgroundColor = color;
colorName.innerText = color;
}
