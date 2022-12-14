// let lista = [45, 4, 9, 16, 25]
// let lista2 = [];

let lista = [
    {id: '1' ,nome: 'Daniel', sobrenome: 'Wallaws'},
    {id: '2' ,nome: 'Paulo', sobrenome: 'XYZ'},
    {id: '3' ,nome: 'Fulano', sobrenome: 'Da Silva'}
]

let pessoa = lista.findIndex(function(item){
    return (item.sobrenome == 'XYZ')? true : false;//O '.find' encontra o item do array e return ele todo, o '.findeIndex' retorna somente o que foi pedito do item
});

// let pessoa = lista.find(function(item){ //O '.find' encontra o item do array e return ele todo, o '.findeIndex' retorna somente o que foi pedito do item
//     return (item.sobrenome == 'XYZ')
// });


let res = pessoa;

console.log(res);

// lista2 = lista.map(function(item) {
//     return item * 2;
// });

// for(let i in lista) {
//     lista2.push(lista[i] * 2)
// }

// lista2 = lista.filter(function(item) {
//     if(item <20) {
//         return true;
//     } else {

//     }
// });

// lista2 = lista.every(function(item) {
//     if(item > 20) {
//         return true;
//     } else {
//         return false;
//     }
// });

// lista2 = lista.every(function(item) {
//     return (item >10)? true : false;
// });

// lista2 = lista.some(function(item) {
//     if(item > 20) {
//         return true;
//     } else {
//         return false;
//     }
// });

// lista2 = lista.find(function(item) {
    
//     return (item == 16)? true : false;
    
// })

// lista2 = lista.findIndex(function(item) { //O '.find' encontra o item do array e return ele todo, o '.findeIndex' retorna somente o que foi pedito do item
    
//     return (item == 16)? true : false;
    
// })

// let res = lista2;

// console.log(res);