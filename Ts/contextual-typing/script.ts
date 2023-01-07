let names  = ['paulo','bruno', 'diego', 'bonieky', 'ana', 90];

names.forEach(function(nome){
    if(typeof nome === 'string') {
        console.log(nome.toUpperCase)
    } else {
        console.log(nome)
    }
})

//Contextual-typing: O typescript verificará o contexto do código e com base nesse contexto ele irá determinar os types sem necessitar que 
// definamos o tipo