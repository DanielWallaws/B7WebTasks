// class Person {
    //Esse é um tamplate da classe
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;

//     }
// }

// let p1 = new Person('João', 20);

// let p2 = new Person('Maria', 30)

// let p3 = new Person('Pedro', 40)

// console.log(p1.name + p1.age)

class Person {

    //Se eu tirar o age de dentro do construtor e der um valor a ele, esse valor fica padrão 
    //para todo objeto criado a partir da classe Person

    age = 0;

    constructor(name) {
        this.name = name;
    }
}

//A não ser que eu redefina o valor padrão, acessando a variável e instânciando ela com novo
// valor.

//exemplo:
let p1 = new Person('João');

let p2 = new Person('Maria')

let p3 = new Person('Pedro')

p1.age = 25;

console.log(p1.age)