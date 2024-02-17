const productName = document.getElementById('productName');
const btnSubmit = document.querySelector('.btn');
const productCategory = document.getElementById('productCategory');
const productPrice = document.getElementById('productPrice');
let list = document.querySelector('.list');
let count = 1;
let productArray = [];


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
    }
}

btnSubmit.addEventListener('click', addToArray);

// функция создания контейнера с товаром
function createProduсts(object) {
    const productList = document.createElement('div');
    productList.classList.add('products-list');
    list.append(productList);
    productList.id = `${object.id}`;

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Удалить товар';
    deleteBtn.type = 'submit';
    deleteBtn.id = `${object.id}`;

    // Удаление товара из каталога
    deleteBtn.onclick = () => {
        if (Number(deleteBtn.id) === object.id) {
            let id = object.id;
            const product = document.getElementById(`${id}`);
            product.remove();
            const newProductArray = productArray.filter((object) => object.id !== id);
            productArray = newProductArray;
        }
    }

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