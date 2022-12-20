// let telefone = '5';

// //'9' a istring referenciada deve conter 9 caracteres, '.padEnd completa com asterisco necessarios se não houver os 9 cacteres 'end' no final
// console.log(telefone.padEnd(9, '*')) 

// let telefone = '55655';

// //'9' a istring referenciada deve conter 9 caracteres, '.padStart completa com asterisco necessarios se não houver os 9 cacteres 'start' no inicio
// console.log(telefone.padStart(9, '*')) 

// let cartao = '12345678925';

// let lastDigits = cartao.slice(-4);

// let cataoMascarado = lastDigits.padStart(16, '*')

// console.log(lastDigits)

let cartao = '12345678925';

let lastDigits = cartao.slice(0, 3);

let cataoMascarado = lastDigits.padEnd(16, '*')

console.log(cataoMascarado)