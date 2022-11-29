const select = (element)=> document.querySelector(element);
const selectAll = (element)=> document.querySelectorAllS(element);


pizzaJson.map((item, index)=>{
    //console.log(item);
    let pizzaItem =  select('.models .pizza-item').cloneNode(true);
    
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    
   
    console.log()
    select('.pizza-area').append(pizzaItem);
});
