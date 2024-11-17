const data = [
    {
        id: 111,
        title: 'Молоко',
        price: 100,
        src: './images/milk.jpeg',
    },
    {
        id: 222,
        title: 'Шоколад',
        price: 50,
        src: './images/shoko.jpeg',
    },
    {
        id: 333,
        title: 'Вода',
        price: 24,
        src: './images/water.jpeg',
    },
    {
        id: 444,
        title: 'Хлеб',
        price: 33,
        src: './images/bread.jpeg',
    },
];

const searchInput = document.querySelector('.inputID');
const searchBtn = document.querySelector('.search');
const searchResult = document.querySelector('.search-result-item');
const addToCart = document.querySelector('.addToCart');
const cart = document.querySelector('.cart');
const sum = document.querySelector('.sum');
const printReceipt = document.querySelector('.print-receipt');
const receipt = document.querySelector('.receipt');
const check = document.querySelector('.check');

const cartSelect = [];

searchInput.addEventListener('input', (e) => { 
    items = data.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()));
    if (items.length == 0) {alert('Товар не найден')}
        else {searchResult.textContent = items.map((el) => `${el.title} -- ${el.price} руб`)};
    }
)

 addToCart.addEventListener('click', (e)=> 

    {let item = {};
        item.title = (e.view.items[0].title);
        item.price = (e.view.items[0].price);
        item.count = 1;
        
        if (cartSelect.find((item) => item.title == e.view.items[0].title)) {
               cartSelect.find((item) => {item.count = (item.count + 1)});
        } else {
             cartSelect.push(item); 
        }
        while (cart.firstChild) {
            cart.firstChild.remove();
        }
        cartSelect.forEach((item) => {let div = document.createElement('div');
            div.textContent = `Наименование: ${item.title} --- Цена: ${item.price} --- Количество:${item.count}`;
            cart.appendChild(div);

        sum.textContent = `${cartSelect.reduce((total, item) => total += item.count ? item.count * item.price : el.price, 0)}рублей`
})})

printReceipt.addEventListener('click', () =>
{  let html = cartSelect.map((item) => `<p>${item.title}---${item.price * item.count}</p>`).join('');
document.querySelector('.receipt').innerHTML = html;
check.classList.toggle('checkBorder');
   })



     
    
    

 




   



