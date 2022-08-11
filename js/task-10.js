//variables

let canvas = document.getElementById('boxes');
let createBtn = document.querySelector('[data-create]');
let collapseBtn = document.querySelector('[data-destroy]');
let input = document.querySelector('[type=number]');
console.log(input)
//color maker
let colorizer = function getRandomHexColor1() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// box prototype

// let box = document.createElement('div');
//     box.style.width = '30px';
//     box.style.height = '30px';
//     box.style.backgroundColor = `${colorizer()}`;

//     console.log(box);


    

// event listeners

createBtn.addEventListener('click', createBoxes);
collapseBtn.addEventListener('click', destroy);

//functions
function createBoxes(amount){
amount = input.value;

let boxArray = [];

let width = 20;
let height = 20;



for(let i = 0; i< amount; i+=1){
  
  let divBox = document.createElement('div');
  divBox.style.width =`${width+=10}px`;
  divBox.style.height = `${height+=10}px`;
  divBox.style.backgroundColor = colorizer();
  
  boxArray.push(divBox);
  
  
}

 
  canvas.prepend(...boxArray)

}


function destroy(){
  canvas.innerHTML = "";
}


