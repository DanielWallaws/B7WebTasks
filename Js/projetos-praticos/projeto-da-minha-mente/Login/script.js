
setTimeout(() => {
    const form = document.querySelector('.form-container');
    const body = document.querySelector('body');
    this.renderForm = false;

    if(form.style.opacity == 0) {
        
        form.style.opacity = 200;
        body.style.backgroundColor = 'rgb(212, 212, 212)';
        
        return this.renderForm = true;   

    } else {
        
        return renderForm = false;

    }
    
}, 1500);

   

console.log(this.renderForm);

class LoginValues {
    

    constructor(user, password) {
        this.valueUser = user;
        this.valuePassword =  password;
    }
    get() {

    }
    set() {

    }

}
const userName = document.getElementsByClassName('user-input')[0].value;
const password = document.getElementsByClassName('password-input')[0].value;
const btnSubmit = document.querySelector('.btn-submit');




btnSubmit.addEventListener('click', (e)=> {
    e.preventDefault()

    if(this.renderForm == true) {
        /// Parei aqui para resolver a charada
        if(userName !== '' && password !== '') {
            console.log('Entrou no if da classe')
            let valuesLogin = new LoginValues(userName, password);
            console.log(valuesLogin)
        }
    }
})
