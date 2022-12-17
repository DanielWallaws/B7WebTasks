
setTimeout(() => {
    const form = document.querySelector('.form-container');
    const body = document.querySelector('body');
    renderForm;

    if(form.style.opacity == 0) {
        
        form.style.opacity = 200;
        body.style.backgroundColor = 'rgb(212, 212, 212)';
        
        return renderForm = true;   

    } else {
        
        return renderForm = false;

    }
    
}, 1500);

this.renderForm = true;   

console.log(this.renderForm);

class LoginValues {
    constructor(user, password) {
        this.valueUser = user;
        this.valuePassword =  password;
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

    let promisseLogin = new Promise(function(myResolve, myReject){
        myResolve(valuesLogin == true);
        myReject(valuesLogin == false);
    });
    promisseLogin.then(
        function(value) {console.log('Logou')},
        function(error) {console.error('Não logou')}
    )
})
