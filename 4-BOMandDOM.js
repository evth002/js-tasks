//1
console.log(`с помощью браузера ${navigator} я открыл страничку ${location}`);

//2
// В файле html есть разметка:
/* <ul id="list">
<li>Джон</li>
<li>Пит</li>
<li>Джессика</li>
<li>Сара</li>
</ul> */
// Вывести в консоль каждое из имен (содержимое каждого li).

for (let li of document.querySelectorAll('li')) {
    console.log(li.innerText);
}

// Задание 3
// Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)

for (let li of document.querySelectorAll('li')) {
    for (let i = 0; i < 4; i++) {
        document.body.children[0].children[i].innerText = i;
    }
    console.log(document.body.children[0].innerText);
}

//from video
let span = document.createElement('span');
document.body.appendChild(span);
span.innerText = 'qqqqqqq';

let ul = document.createElement('ul');
let li = document.createElement('li');
ul.appendChild(li);
li.innerText = 'pppp';
document.body.appendChild(ul);

// Задание 4
// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, 
//содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. 
//Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.

function generator(tag, color, content) {
    let newTag = document.createElement(tag);
    newTag.style.color = color;
    newTag.innerText = content;
    document.body.appendChild(newTag);
    console.log(newTag);
}

generator('div', 'red', 'пррривет');
generator('p', 'green', 'jj')


// Задание 5
// Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. 
//Добавить абзац с текстом на страницу.

let paragraph = document.createElement('p');
paragraph.innerText = 'ыыы';
paragraph.style.fontSize = '36px';
paragraph.style.fontWeight = 'bold';
document.body.appendChild(paragraph);

// Задание 6

// Вставить в страницу (в html документ) тег <select>. С помощью js добавить в этот select опции (option) 
//под годы от 1960 по 2020.

for (i = 0; i < 61; i++) {
    let option = document.createElement('option');
    option.innerText = i + 1960;
    document.querySelector('select').appendChild(option);
}

// Задание 7
// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:

let array = [
    {name: "Женя",
    order: true
    },
    {name: "Кристина",
    order: true
    },
    {name: "Павел",
    order: false
    },
    {name: "Виолетта",
    order: false
    },
    {name: "Костя",
    order: true
    }
];

// Перебирать массив, для каждой ячейки массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом


for (i = 0; i < array.length; i++) {
    let li = document.createElement('li');
    if (array[i].order == true) {
        li.innerText = `Клиент ${array[i].name} оплатил_а заказ`;
    } else {
        li.innerText = `Клиент ${array[i].name} отменил_а заказ`;
    }
    document.querySelector('#ul').appendChild(li);
}

// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта 
//(а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, 
//если false – то отменил.

// Задание 8
// Есть массив ссылок:

let linksArr = ['https://www.onliner.by/', 
    'https://www.youtube.com/', 
    'https://vk.com/', 
    'https://www.google.com/', 
    'https://yandex.ru/'
];

// Вам нужно:
// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)

let divv = document.createElement('div');
divv.style.padding = '20px';
divv.style.background = 'skyblue';

// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
// ПОДСКАЗКА Для создания атрибута используется js метод setAttribute:
// element.setAttribute(name, value) - где name - сам атрибут, который нужно добавить, value - его значение.
// Вкладывать ссылки в див нужно с помощью метода appendChild или append.

for (i = 0; i < linksArr.length; i++) {
    let a = document.createElement('a');
    a.innerText = linksArr[i];
    a.setAttribute('href', linksArr[i]);
    a.setAttribute('target', '_blank');
    a.style.padding = '10px';
    divv.appendChild(a);
}

// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY

document.body.appendChild(divv);

// Задание 9
// Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML 
//все элементы с классом "forRemove" и удалит их.
// ПОДСКАЗКА Для удаления DOM-элементов можно использовать метод element.remove()

let element = document.querySelectorAll('.forRemove');
function remove() {
    for (i = 0; i < document.querySelectorAll('.forRemove').length; i++) {
        element[i].remove();
    }
}
remove();


// Задание 10*
// Создать массив объектов с полями name, age. Создать html таблицу с двумя колонками,
// заполненную этими объектами. Name должно быть красного цвета, age - синего.

let newarr = [{name: 'Nikita', age: '14'}, {name: 'Erik', age: '16'}, {name: 'Arseniy', age: '15'}];

let table = document.createElement('table');
for (i = 0; i < newarr.length; i++) {
    let tr = document.createElement('tr');

    let td1 = document.createElement('td');
    tr.appendChild(td1);
    td1.innerText = newarr[i].name;
    td1.style.color = 'red';

    let td2 = document.createElement('td');
    tr.appendChild(td2);
    td2.innerText = newarr[i].age;
    td2.style.color = 'blue';

    document.body.appendChild(tr);
}

document.body.appendChild(table);
