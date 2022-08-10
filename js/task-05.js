//VARIABLES
let input = document.getElementById('name-input');
let greetName = document.getElementById('name-output');

//LISTENERS
input.addEventListener('input', greetings);

//FUNCTIONS
function greetings(){
    
    if( input.value === ''){greetName.textContent = "Anonymous"}
    else {greetName.textContent = input.value}
    
    
    
}