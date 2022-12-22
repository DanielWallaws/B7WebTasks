function loadPosts() {

    document.getElementById("posts"). innerHTML = 'carregando...'

    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(resultado){
            // console.log(resultado);
            return resultado.json()
        })
        .then(function(json) {

            montarBlog(json);
            //console.log(json)
            //document.getElementById("posts"). innerHTML = json.length+' posts'
        })
        .catch(function(error){
            console.log('Deu problema');
        });
    }, 1200);

    
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

