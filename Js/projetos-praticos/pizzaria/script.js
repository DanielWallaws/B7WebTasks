let cart = [];
let modalQt = 1;
modalKey = 0;



const select = (element)=> document.querySelector(element);
const selectAll = (element)=> document.querySelectorAll(element);


pizzaJson.map((item, index)=>{
    let pizzaItem =  select('.models .pizza-item').cloneNode(true);
    
    pizzaItem.setAttribute('data-key', index)
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        modalQt = 1;
        modalKey = key;

        select('.pizzaBig img').src = pizzaJson[key].img;
        select('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        select('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        select('.pizzaInfo--actualPrice').innerHTML = `R$ ${item.price.toFixed(2)}`;
        
        select('.pizzaInfo--size.selected').classList.remove('selected');

        selectAll('.pizzaInfo--size').forEach((size, sizeIndex)=> {
            if(sizeIndex == 2) {
                size.classList.add('selected')
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        })

        select('.pizzaInfo--qt').innerHTML = modalQt;

        select('.pizzaWindowArea').style.opacity = 0;
        select('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            select('.pizzaWindowArea').style.opacity = 1;
        },200)

    })
    
    select('.pizza-area').append(pizzaItem);

});

function closeModal() {
    select('.pizzaWindowArea').style.opacity = 0;
    setTimeout(() => {
    select('.pizzaWindowArea').style.display = 'none';
    }, 500) 
}

selectAll('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click',closeModal);
})

select('.pizzaInfo--qtmenos').addEventListener('click', ()=> {
    if(modalQt > 1) {
    modalQt--;
    select('.pizzaInfo--qt').innerHTML = modalQt;
    }
})

select('.pizzaInfo--qtmais').addEventListener('click', ()=> {
    modalQt++;
    select('.pizzaInfo--qt').innerHTML = modalQt;
})

selectAll('.pizzaInfo--size').forEach((size, sizeIndex)=> {
    size.addEventListener('click', (e)=> {
        select('.pizzaInfo--size.selected').classList.remove('selected');
        size.classList.add('selected');
    })
})

select('.pizzaInfo--addButton').addEventListener('click', ()=> {
    let size = select('.pizzaInfo--size.selected').getAttribute('data-key');
    
    let identifier = pizzaJson[modalKey].id + '@' + size;

    let key = cart.findIndex((item)=> item.identifier == identifier);

    console.log(key)

    if(key > -1) {
        cart[key].qt += modalQt;
    } else {
        cart.push({
            identifier,
            id: pizzaJson[modalKey].id,
            size: parseInt(size),
            qt: modalQt
        })
    }
    console.log(cart)
    
    closeModal();
})