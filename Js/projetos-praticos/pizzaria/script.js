const select = (element)=> document.querySelector(element);
const selectAll = (element)=> document.querySelectorAllS(element);


pizzaJson.map((item, index)=>{
    //console.log(item);
    let pizzaItem =  select('.models .pizza-item').cloneNode(true);
    
    pizzaItem.setAttribute('data-key', index)
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();
        // target: alvo
        // closest: pegar o elemento mais próximo
        let key = e.target.closest('.pizza-item').getAttribute('data-key')
        console.log(pizzaJson[key])


        select('.pizzaWindowArea').style.opacity = 0;
        select('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            select('.pizzaWindowArea').style.opacity = 1;
        },200)

    })
    
    select('.pizza-area').append(pizzaItem);

});
