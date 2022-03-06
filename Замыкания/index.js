// Задание 1
// Реализовать функционал модального окошка, которое открывается с затемнением фона при нажатии на кнопку и закрывается 
// по нажатию на кнопку-крестик или на тёмную область вокруг окошка.

// ПОСЛЕДОВАТЕЛЬНОСТЬ РАБОТЫ:
// 1) HTML, CSS
// Посмотрите видео, как подготовить верстку

// 2) JS
// - Соберите в переменные необходимые элементы: кнопку для открытия окошка, само окошко вместе с фоном, 
// окошко без фона, кнопку закрытия окошка.
// - Повесьте обработчик клика на кнопку открытия - к окошку должен добавляться класс, 
// в котором через CSS задана видимость блока.

// Чтобы добавить класс к DOM-элементу, используется метод element.classList.add('classname')

// - Повесьте обработчик клика на кнопку закрытия окошка - при этом должен удаляться класс, который добавляли в 
// предыдущем обработчике. Чтобы удалить класс из DOM-элемента, используется метод element.classList.remove('classname')

// - Повесьте обработчик клика на глобальный объект window, чтобы реализовать закрытие окошка по клику на тёмную область.
// Т.к. эта область является "оболочкой" окошка, мы должны проверить, была ли именно эта область целью клика 
// (не центральная, основная часть окошка, а именно тёмная).

// Для обращения к элементу, на который пришелся клик, можно использовать метод 
// e.target (e - это параметр функции-обработчика события, и его свойство target точно вказывает на тот элемент,
// на который кликнул пользователь).


let callButton = document.querySelector('#call-button');
let popup = document.querySelector('#popup');
let popupButton = document.querySelector('#popup-button');
let popupWindow = document.querySelector('#popup-window');

callButton.addEventListener('click', function(event) {
    event.preventDefault()
    popup.classList.remove('popup__closed');
})
popupButton.addEventListener('click', function(event) {
    event.preventDefault()
    popup.classList.add('popup__closed');
})

window.addEventListener('click', function(event) {
    if (event.target == popup) {
        popup.classList.add('popup__closed');
    }
})

// Задание 2
// Реализовать вертикальное меню, которое "выезжает" по клику на кнопку-бургер и закрывается по клику на кнопку-крестик.
// Пример, как это должно выглядеть и работать:  https://ucarecdn.com/eef643a8-...

// ПОСЛЕДОВАТЕЛЬНОСТЬ РАБОТЫ:
// 1) HTML, CSS
// В разметке предусмотреть два блока: боковую панель и main.
// Боковая панель имеет фиксированное позиционирование, занимает определенную ширину (например, 250px) и 100% высоты экрана. Укажите для нее стиль overflow-x: hidden, чтобы при сворачивании панели (ширина ее будет становиться 0) все ее содержимое скрывалось.
// Задать фоновый цвет, внутри сверстать навигацию (ссылки). Кнопку закрытия разместить в правом верхнем углу панели с помощью position: absolute.
// Main расположен по центру экрана, но когда боковая панель открыта - имеет margin-left по размеру ширины боковой выезжающей панели. Внутри main разместите кнопку-бургер, которая будет открывать боковую панель, а также заголовок и какой-то контент.
// 2) JS
// Создайте переменные для обеих кнопок, для боковой панели и для main.
// Повесьте на кнопки обработчики кликов:
// - при клике на бургер должна увеличиться ширина боковой панели (с 0 до например 250px), а у main должен появится слева отступ. Сам бургер при открытии боковой панели должен исчезать.
// - при клике на крестик ширина боковой панели должна становиться равной нулю, также должен исчезать левый отступ у main и должна появляться кнопка-бургер.

let openMenuButton = document.querySelector('#open_menu_button');
let menu = document.querySelector('.menu');
let closeMenuButton = document.querySelector('.close_menu_button');
let main = document.querySelector('main');

openMenuButton.addEventListener('click', function(event) {
    event.preventDefault();
    menu.style.width = '250px';
    menu.style.padding = '20px';
    main.style.marginLeft = '250px';
    main.style.transition = '.4s';
    menu.style.transition = '.4s';

    openMenuButton.style.visibility = 'hidden';
    openMenuButton.style.opacity = '0';
    closeMenuButton.style.visibility = 'visible';
    closeMenuButton.style.opacity = '1';
})

closeMenuButton.addEventListener('click', function(event) {
    event.preventDefault();
    menu.style.width = '0px';
    menu.style.padding = '0px';
    main.style.marginLeft = '0';
    
    openMenuButton.style.visibility = 'visible';
    openMenuButton.style.opacity = '1';
    closeMenuButton.style.visibility = 'hidden';
    closeMenuButton.style.opacity = '0';
})

// Задание 3
// Самостоятельно реализовать меню, открывающееся по клику на бургер, который тут же превращается в крестик.
// Образец - dev.by, или можно посмотреть здесь: https://ucarecdn.com/aeb69a87-...
// Внутри открывающегося по клику на бургер блока сначала идет строка поиска, при клике в нее (фокусное состояние) фон строки меняется на белый.
// Все нужные иконки скачать с сайта dev.by, из кода в инспекторе.


// Задание 4
// Реализовать функционал мини таск-менеджера.
// Функционально должно работать так: https://ucarecdn.com/a2aeaed4-...
// Затем стилизовать (написать CSS) на свое усмотрение.

// ПОСЛЕДОВАТЕЛЬНОСТЬ РАБОТЫ:
// 1) Описать в html форму с полем input и кнопкой отправки формы. Под формой предусмотреть пустой список ul.
// 2) На событие отправки формы добавлять в список ul элемент li со значением инпута. Сам инпут при этом очищать.
// 3) Внутри добавляющегося li перед текстом должен также добавляться чекбокс.
// Для добавления элемента внутрь в начало используйте метод element.prepend(element).
// 4) При отметке чекбокса задача должна перечеркиваться (становиться выполненной) и перемещаться вниз списка. Если отметку снять - перечеркивание убирается и задача помещается в начало списка.
// Отмеченный чекбокс - js-свойство .checked
// Перечеркнутый текст - CSS-свойство text-decoration: line-through
// 5) К каждой задаче добавить кнопку для удаления, реализовать само удаление.
// Для удаления элементов используется метод element.remove().
// 6) Пропишите CSS, чтобы ваш таск-менеджер выглядел получше: уберите маркеры у списка, оформите кнопки.


let addingButton = document.querySelector('.adding_button');
let toDoList = document.querySelector('.to_do_list');
let taskManager = document.querySelector('.task-manager');
let searchForm = document.querySelector('.search_form');

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let li = document.createElement('li');
    li.innerText = taskManager.value;
    let checkbox = document.createElement('input');

    checkbox.addEventListener('click', function(event) {
        if (checkbox.checked == false) {
            li.style.textDecoration = 'none'
            toDoList.prepend(li);
        }
        if (checkbox.checked == true) {
            li.style.textDecoration = 'line-through';
            toDoList.append(li);
        }
    })

    li.prepend(checkbox);
    toDoList.prepend(li);
    let remover = document.createElement('button');
    remover.addEventListener('click', function(event) {
        event.preventDefault();
        li.remove();
    })
    li.appendChild(remover);
    let i = document.createElement('i');
    remover.appendChild(i);
    taskManager.value = ' ';

    checkbox.type ="checkbox";
    li.style.listStyle = 'none';
    i.className = 'fa-solid fa-xmark';
    remover.style.width = '20px';
    remover.style.marginLeft = '5px';
})