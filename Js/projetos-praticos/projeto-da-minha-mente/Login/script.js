
function renderForm() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            const form = document.querySelector('.form-container');
            const body = document.querySelector('body');
        
            if(form.style.opacity == 0) {
                
                form.style.opacity = 200;
                body.style.backgroundColor = 'rgb(212, 212, 212)';
            } 
        
        }, 1200);

        const btnSubmit = document.querySelector('.btn-submit');

        btnSubmit.addEventListener('click', (e)=> {
            e.preventDefault()

            //Desafio 2: construir um Regex para o email e para a senha

            const userName = document.getElementsByClassName('user-input')[0].value;
            const password = document.getElementsByClassName('password-input')[0].value;

            let valueLogin = {
                valueUser: userName,
                valuePassword: password
            };

            if (userName == false || password == false) {
                reject('Falta usuário ou senha')
                console.error('Insira usuário e senha e tente novamente')
            } else {
                resolve(valueLogin)
                console.log(valueLogin);
            }

        })
    })
}

renderForm();
