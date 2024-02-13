const productName = document.getElementById('productName');
const btnSubmit = document.querySelector('.btn');
const productCategory = document.getElementById('productCategory');
const productPrice = document.getElementById('productPrice');
let count = 1;
const productArray = [];

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
        console.log(obj);
    }
}

btnSubmit.addEventListener('click', addToArray);
console.log(productArray);
//Почему этот консольлог срабатывает пока я не открываю массив в режиме отображения кода?

for (let obj of productArray) {
    console.log(obj);
    // Почему не срабатывает этот консольлог?
}
