// Задание 1
// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li.
// Содержимое li - нажатая клавиша.

let input = document.querySelector('input');
let ul = document.querySelector('ul');
input.addEventListener('keyup', function (event) {
    let li = document.createElement('li');
    li.innerText = event.key;
    ul.appendChild(li);
});


// Задание 2
// Вставить в html теги input и div (просто предусмотреть в разметке). Обрабатывая событие keyup на теге input, 
// выводить в консоль введенный текст каждый раз, как только клиент вписывает 
// любой символ в поле(или стирает любой символ из поля).Вам понадобится считывать значение поля, это input.value

input.addEventListener('keyup', function (event) {
    console.log(input.value)
});


// Задание 3
// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список 
// тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен 
// (проставить пустую строку в value).

let inp = document.querySelector('.inp');
let form = document.querySelector('form');
let button = document.querySelector('button');
let ull = document.querySelector('.ul');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let li = document.createElement('li');
    li.innerText = inp.value;
    ul.appendChild(li);
    inp.value = ' ';
})


// Задание 4
// Калькулятор.
// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой.
// Добавить в html div. Опции select - арифметические знаки. В оба инпута пользователь вводит число.
// Когда пользователь отправляет форму, над двумя числами выполняется действие, выбранное в select.
// Результат отображается в div.

// 1) решить с помощью if

let forrm = document.querySelector('.calculator');
let select = document.querySelector('select');
let a = document.querySelector('.imp1');
let b = document.querySelector('.imp2');
let result = document.querySelector('.result');

forrm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (select.value == '+') {
        result.innerText = Number(a.value) + Number(b.value);
    } else if (select.value == '-') {
        result.innerText = a.value - b.value;
    } else if (select.value == '*') {
        result.innerText = a.value * b.value;
    } else if (select.value == '/') {
        result.innerText = a.value / b.value;
    }
})


// 2) решить с помощью eval (https://developer.mozilla.org/...)

forrm.addEventListener('submit', function(event) {
    event.preventDefault();
    result.innerText = eval(a.value + select.value + b.value)
})


// Задание 5
// Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку
// изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки, поворачивать кнопку на
// рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.

let baton = document.querySelector('.baton');
baton.style.marginTop = '20px';

let randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

baton.addEventListener('mouseenter', function(event) {
    baton.style.backgroundColor = `rgb( ${randomInteger(0, 255)}, ${randomInteger(0, 255)}, ${randomInteger(0, 255)})`;
})
baton.addEventListener('mouseleave', function(event) {
    baton.style.transform = `rotate(${randomInteger(-180, 180)}deg)`;
})
