// let date = new Date(); //Pega a data do dispositivo que acessa no momento

// console.log(date);


// let date = new Date(); 

// console.log(date.toDateString());//data mais resumida

// let date = new Date(); 

// console.log(date.toUTCString()); //Retira o fuso e retorna o horário oficial de Grenwich

// let date = new Date(0); 

// console.log(date.toUTCString());  //Retorna o valor da variável como string

// let date = new Date(); 
// let newValue = date.getFullYear(); // Pega o ano corrente

// console.log(newValue);  //

// let date = new Date(); 
// let newValue = date.getMonth(); //Lembrando que o dia para o Mês começa no dia 0

// console.log(newValue);  //

// let date = new Date(); 
// let newValue = date.getDay(); // Retorna o dia da semana

// console.log(newValue);  //

// let date = new Date(); 
// let newValue = date.getDate(); // Retorna o dia no mês. 

// console.log(newValue);  //

// let date = new Date(); 
// let newValue = date.getHours(); // Retorna a hora. 

// console.log(newValue);  //

// let date = new Date(); 
// let newValue = date.getMinutes(); // Retorna os minutos 

// console.log(newValue);  //

// let date = new Date(); 
// let newValue = date.getSeconds(); // Retona o segundos.

// console.log(newValue);  //

// let date = new Date(); 
// let newValue = date.getMilliseconds(); // Retona os Milisegundos.

// console.log(newValue);  //

// let date = new Date(); 
// let newValue = date.getTime(); // Retona time stump (diferença dos milisegundos entre 1 de janeuro de 1970 00h até a data/hora atual )

// console.log(newValue);  //


// let newValue = Date.now(); // Retona time stump só que nesse caso sem precisar declarar objeto e etc. É do padrão ECMAScript 6

// console.log(newValue);  //

// let date = new Date(); 

// date.setMonth(10); //Seta mes para novembro 

// let newValue = date;
// console.log(newValue);  //

// let date = new Date(); 

// date.setDate(date.getDate() + 5) //Seta o dia para 5 dias a frente

// let newValue = date;
// console.log(newValue);  //

let date = new Date(); 

date.setDate(date.getDate() + 90) //Seta o dia para 90 dias a frente (nesse caso o próprio JS automáticamente o mês e o dia da semana)
                                    // Esse Parâmentro pode ser utilizado para os intens da data.

let newValue = date;
console.log(newValue); 
