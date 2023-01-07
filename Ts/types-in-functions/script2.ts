function firstLetterUpperCase(name: string): string /*:string - estou definindo que o retorno da minha função é do tipo string*/ {
    let firstLetter = name.charAt(0).toUpperCase()
    return firstLetter + name.substring(1) //substring: restante dos caracteres a partir da posição 1
};

let people: string =  firstLetterUpperCase('bonieky')

function sum(n1:number, n2:number) : number{
    return n1 + n2;
}

let some = sum(90,15); 
