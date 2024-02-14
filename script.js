const productName = document.getElementById('productName');
const btnSubmit = document.querySelector('.btn');
const productCategory = document.getElementById('productCategory');
const productPrice = document.getElementById('productPrice');
let list = document.querySelector('.list');
let count = 1;
const productArray = [];


//Функция добавления товаров в массив
function addToArray() {
    let obj = {};
    if (productName.value && productPrice.value) {
        obj.name = productName.value
        obj.id = count;
        obj.category = productCategory.value;
        obj.price = productPrice.value;
        productArray.push(obj);
        count++;
        productName.value = '';
        productPrice.value = '';
        console.log(obj);
    }
}

btnSubmit.addEventListener('click', addToArray);
console.log(productArray);

//Функция отображения массива с товарами на странице
function addToTist() {
    list.innerHTML = '';
    for (let obj of productArray) {

        list.insertAdjacentHTML('beforeend',
            `<div class="products-list"> 
        <p class="product"> Название: ${obj.name}, цена: ${obj.price} </p>
        <button class="delete-btn" type="submit"> Удалить товар </button> </div>`);
    }
};

btnSubmit.addEventListener('click', addToTist);



// Функция фильтрации по каталогу

const prodCatList = document.getElementById("productCategory-list")

function catalogFilter() {
    const newCatalog = [];
    console.log(prodCatList.value);
    list.innerHTML = '';
    for (let obj of productArray) {
        if (prodCatList.value === 'Невыбрано') {
            addToTist();
        } else if (prodCatList.value === obj.category) {
            newCatalog.push(obj);
            list.insertAdjacentHTML('beforeend',
                `<div class="products-list"> 
            <p class="product"> Название: ${obj.name}, цена: ${obj.price} </p>
            <button class="delete-btn" type="submit"> Удалить товар </button> </div>`);
        }
    }
    console.log(newCatalog);
};

prodCatList.addEventListener('change', catalogFilter);

// Функция удаления по нажатию на кнопку



// Подскажите, Я создаю кнопку на 37ой строке <button class="delete-btn" type="submit">
// Но я не могу повешать на нее addEvenListener , потому что кнопка создасться только в
// момент добавления товара
const deleteBtn = document.querySelector('.delete-btn');
console.log(deleteBtn);
// Если сейчас посмотреть в консоль то будет null
deleteBtn.addEventListener('click', function() {
    console.log('Привет');
})
// А когда добавляю Слушателя то ошибка в консоле.
// В общем вопрос, как слушателя добавить на кнопку, которая только будет создана,
// но еще не создана?