
/*posso fazer com que parametros sejam opcionais caso o Ts esteja reclamando de parametros não informados utilizando o "?" interrogação*/
function sumarry(usuario: {nome: string, idade?:number})  {
    if(usuario.idade !== undefined) {
        return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`; 
    } else {
        return `Olá ${usuario.nome}, tudo bem?`; 

    }
}
    

let u = {
    nome: 'Bonieky',
    //idade: 90
}

sumarry(u);