async function loadPosts() {

    document.getElementById("posts"). innerHTML = 'carregando...'

    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await req.json();
    montarBlog(json);

    //O async e await acima resume esse código todo abaixo(sem o timeout, inclusive posso colocar um timer também)
    

    // setTimeout(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(function(resultado){
    //         // console.log(resultado);
    //         return resultado.json()
    //     })
    //     .then(function(json) {

    //         montarBlog(json);
    //         //console.log(json)
    //         //document.getElementById("posts"). innerHTML = json.length+' posts'
    //     })
    //     .catch(function(error){
    //         console.log('Deu problema');
    //     });
    // }, 1000);

}

function montarBlog(lista) {
    let html = '';

    for(let i in lista) {
        html += '<h3>'+lista[i].title+'</h3>';
        html += lista[i].body+'<br/>';
        html += '<hr>'; // Linha horizontal
    }

    document.getElementById("posts").innerHTML = html;

}

