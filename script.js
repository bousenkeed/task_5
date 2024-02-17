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

// функция создания контейнера с товаром

function createProduсts(object) {
    const productList = document.createElement('div');
    productList.classList.add('products-list');
    list.append(productList);
    productList.id = `${object.id}`;

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Удалить товар';
    deleteBtn.id = `${object.id}`;

    const productValue = document.createElement('p');
    productValue.classList.add('product');
    productValue.textContent = `Название: ${object.name}, цена: ${object.price}`;

    productList.append(productValue, deleteBtn);
}
//Функция отображения массива с товарами на странице

function addToTist() {
    list.innerHTML = '';
    for (let obj of productArray) {
        createProduсts(obj);
    }
};

btnSubmit.addEventListener('click', addToTist);



// Функция фильтрации по каталогу

const prodCatList = document.getElementById("productCategory-list")

function catalogFilter() {
    list.innerHTML = '';
    for (let obj of productArray) {
        if (prodCatList.value === 'Невыбрано') {
            addToTist();
        } else if (prodCatList.value === obj.category) {
            createProduсts(obj);
        }
    }
};
prodCatList.addEventListener('change', catalogFilter);

// Функция удаления по нажатию на кнопку

// Подскажите, Я создаю кнопку на 37ой строке 
// Но я не могу повешать на нее addEvenListener , потому что кнопка создасться только в
// момент добавления товара
// А когда добавляю Слушателя то ошибка в консоле.
// В общем вопрос, как слушателя добавить на кнопку, которая только будет создана,
// но еще не создана? 
