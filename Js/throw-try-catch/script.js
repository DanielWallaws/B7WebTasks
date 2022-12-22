function sayMyName(name = '') {
    if(name === '') {
        throw 'Nome é obrigatório' //É um tratamento básico de erro. O certo é trabalhar juntamente com o 'try catch'
    }

    console.log('Deopis do erro')

}

//sayMyName() //Se eu chamar a função e não tiver o tratamento dos erros, erro aparecerá mas será como o Uncaught (não capturado) dessa forma parando a aplicação

try {
    sayMyName()
} catch(e) {
    console.log(e)
} //importante fazer o catch porque se não fizer o error pode parar minha aplicação inteira.