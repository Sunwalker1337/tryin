//variables
let form = document.querySelector('.login-form');
let formData =  new FormData(form);

let email = document.querySelector('[type="email"]')
let password = document.querySelector('[type="password"]')


console.log(formData.entries())

// function
function collector (){
    event.preventDefault(); 
    
    formData.set('email', email.value)
    formData.set('password', password.value)

    if(email.value === ""){
        alert('All fields must be filled.')
    }
    if(password.value === ""){
        alert('All fields must be filled.')
    }


    let data ={
        email : formData.get('email'),
        password : formData.get('password')
    }

    console.log(data)

    form.reset()
};


// event listeners
form.addEventListener('submit', collector)





