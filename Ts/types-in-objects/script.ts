function sumarry(usuario: {nome: string, idade:number}) {
    return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`; 
}

let u = {
    nome: 'Bonieky',
    idade: 90
}

sumarry(u);