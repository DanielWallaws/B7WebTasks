
class Person {

    age = 0;
    steps = 0;

    constructor(name) {
        this.name = name;
    }

    takeAstep() {
        this.steps++;
    }

    setAge(newAge) {
        if(typeof newAge == 'number') {
            this.age = newAge;
        } else {
            console.error(`${newAge} is not number. Please, isert a number.`)
        }
    }
}

let p1 = new Person('João');

let p2 = new Person('Maria')

let p3 = new Person('Pedro')

p1.age = 25;

p1.takeAstep();

p1.takeAstep();

console.log(`Passos de ${p1.name}: ${p1.steps}`)

p1.setAge('sdsds')

console.log(`A idade de João é: ${p1.age}`)