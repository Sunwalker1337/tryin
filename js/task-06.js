let input = document.getElementById('validation-input');
let passLength = input.getAttribute('data-length');

console.log(passLength);

input.addEventListener('blur', validation);

function validation () {

    input.classList.add('valid','invalid')

    if(input.value.length >= passLength){
        input.classList.toggle('invalid')
    } else {
        input.classList.toggle('valid')
    }
}