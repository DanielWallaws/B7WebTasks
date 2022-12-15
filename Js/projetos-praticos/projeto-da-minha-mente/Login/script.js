setTimeout(() => {
    const form = document.querySelector('.form-container');
    if(form.style.opacity == 200) {
        form.style.opacity = 0;
    } else {
        form.style.opacity = 200;
    }
}, 1500);

const btnSubmit = document.querySelector('.btn-submit');

btnSubmit.addEventListener('click', (e)=> {
    e.preventDefault();
    if(e) {
        window.alert('Logou')
    }
})