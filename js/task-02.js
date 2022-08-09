const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// let banana = ingredients.map(()=> document.createElement('li'));
// console.log(banana)

let cherry = document.createElement('li');
cherry.textContent ='1';

console.log(cherry);


let liItems = ingredients.map(
(element) => {
let variable = document.createElement('li');
variable.textContent = `${element}`;
return variable
}
)
console.log(liItems)

let list = document.getElementById('ingredients');

list.prepend(...liItems);