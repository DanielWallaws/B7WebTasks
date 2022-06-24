let pessoa = {
    nome: 'Daniel',
    sobrenome: 'Wallaws', 
    idade: '31',
    social: {
        facebook: 'b7web',
        instagram: 'daniel' 
    }, 
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}` //Tamplate string pesquisar
    }
};

let {nome,sobrenome, idade} = pessoa;

//console.log(pessoa.nomeCompleto());
console.log(nome, sobrenome, idade);