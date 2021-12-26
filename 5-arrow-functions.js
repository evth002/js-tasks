// Задание 1
// Дан объект:

let user = { name: 'Tom', age: 20, isMarried: false };

// Cформировать массив строк вида "имя_поля - значение_поля":
// ['name - Tom', 'age - 20', 'isMarried - false']
// Реализовать это в виде функции, которая принимает объект и возвращает массив. Использовать цикл for-in


function returnArray(object) {
    let array = [];
    
    for (let property in object) {
        array.push(` ${property} - ${object[property]}`);
    }
    console.log(array);
}
returnArray(user);


// Задание 2
// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, 
// должно выводиться ообщение об ошибке.
// Примеры результатов вызова функции:
// sum(2,4); // 6
// sum('d',4); // введенные данные не являются числами
// sum(1, [2]); // введенные данные не являются числами
// sum(1); // введите два параметра
// sum(); // введите два параметра

function sum(a, b) {
    if (arguments.length !== 2) {
        console.log('введите два параметра');
    } else if (typeof a == "number" && typeof b == "number") {
        console.log(a + b);
    } else if (typeof a != "number" || typeof b != "number") {
        console.log('введенные данные не являются числами');
    }
}
sum(2, 3);
sum(2, 4);
sum('d',4);
sum(1, [2]); 
sum(1);
sum();


// Задание 3
// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не 
// больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
// Написать функцию в стрелочном синтаксисе.

let guessWho = () => {
    let a = prompt('введите число');
    let b =  Math.floor(Math.random()*10);
    if (a == b) {console.log('Вы выиграли')} 
    else {console.log(`Вы не угадали, ваше число - ${a},  а выпало число ${b}`)}
}

guessWho();

//Задание 4
//Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.

let numbers = [1, 2, 3];

function copyArr(arr) {
    return arr.map(item => item);
}
let newArr = copyArr(numbers);
console.log(newArr);

// Задание 5
// На странице в html задать список элементов li с числами. 
// Джававскриптом нужно выбрать из этого списка четные числа и создать из них массив. 
// Затем, используя метод forEach, создать из массива новый спсок элементов li и поместить эти элементы в исходный тег ul. 
// Для обхода через querySelectorAll использовать цикл for-of (forEach работать не будет).

let ul = document.querySelector('ul')
let numbers = document.querySelectorAll('li');
let newNumbers = [];
for (let number of numbers) {
    if (number.innerText % 2 == 0) {
        newNumbers.push(number.innerText);
    }
} 
console.log(newNumbers);

newNumbers.forEach(number => {
    let li = document.createElement('li');
    li.innerText = number;
    ul.appendChild(li);
})

// Задание 6
// Создать разметку формы с инпутом для текста и селектом для категории (добавить несколько option с
// текстом Категория 1, Категория 2, Категория 3). Под формой должны должен быть список ul. 
// В этот список каждую секунду добавляется новый элемент li с произвольным текстом (напр. Hello). 
// Для этого можно использовать функцию setInterval https://learn.javascript.ru/se...
// Вся разметка должна быть создана джаваскриптом. В HTML в начале body должен быть пустой.

let form = document.createElement('form');
let input = document.createElement('input');
input.type = "text";
let select = document.createElement('select');
for (i = 1; i < 5; i++) {
    let option = document.createElement('option');
    option.innerText = `Категория ${i}`;
    select.appendChild(option);
}
form.appendChild(input);
form.appendChild(select);
document.body.appendChild(form);

let ul = document.createElement('ul');
document.body.appendChild(ul);

let timerId = setInterval(() => {
    let li = document.createElement('li');
    li.innerText = 'Hello';
    ul.appendChild(li);
}, 1000);
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 10000); 

//или 

const createLi = (text) => {
    let li = document.createElement('li');
    li.innerText = text;
    ul.appendChild(li);
};
let interval = setInterval(createLi, 1000, 'some text');
setTimeout(() => { clearInterval(interval) }, 5000);
