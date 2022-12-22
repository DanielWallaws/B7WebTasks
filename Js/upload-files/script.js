async function send() {
    let file = document.getElementById('file').files[0];

    let body = new FormData();
    body.append('title', 'Bla bla bla');
    body.append('arquivo', file);

    let req = await fetch('https://www.meusite.com.br', {
        method: 'POST',
        body: body,
        headers: {
            'Content-type' : 'multipart/form-data'
        }
    })

    //console.log(file);

}