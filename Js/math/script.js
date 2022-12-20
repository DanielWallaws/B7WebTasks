// let newValue =  Math.round(3.67) // Arredendo o valor conforme o parâmentro passado , nesse caso 3.67 vai para 4

// console.log(newValue)

// let newValue =  Math.floor(3.67) // Arredendo o valor para cima conforme o parâmentro passado, nesse caso 3.67 vai para 3

// console.log(newValue)

// let newValue =  Math.ceil(3.1) // Arredendo o valor para baixo conforme o parâmentro passado, nesse caso 3.67 vai para 3

// console.log(newValue)

// let newValue =  Math.min(7, 1100, 600, 3, -4) // Obtém o menor valor passado.
// console.log(newValue)

// let newValue =  Math.max(7, 1100, 600, 3, -4) // Obtém o maior valor passado.
// console.log(newValue)

// let newValue =  Math.random() // Retorna um número aleatório entre 0 e 1.
// console.log(newValue)


// Para retornar um número entre o outro
// utilizamos o Math.random e multiplicamos por 100 depois arrendondamos o valor pra baixo, para que tenhamos valores aleatórios
// somente até aquele valor por qual multiplicamos
let newValue =  Math.floor(Math.random() * 100)  
console.log(newValue)