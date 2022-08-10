let incBtn = document.querySelector('[data-action = increment]');
console.log(incBtn);
let decBtn = document.querySelector('[data-action = decrement]');
console.log(decBtn);

let counter = document.getElementById('value');




incBtn.addEventListener('click', increment)

decBtn.addEventListener('click', decrement)

function increment () {
    console.log('inc click')
    return counter.innerText = Number(counter.innerText)+1;
    
};

function decrement () {
    console.log('dec click')
    return counter.innerText = Number(counter.innerText)-1;
};