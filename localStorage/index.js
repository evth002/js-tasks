let callButton = document.querySelector('#call-button');
let popup = document.querySelector('#popup');
let popupButton = document.querySelector('#popup-button');
let popupWindow = document.querySelector('#popup-window');
let addingButton = document.querySelector('.adding_button');
let taskManager = document.querySelector('.task-manager');
let searchForm = document.querySelector('.search_form');
let toDoList = document.querySelector('.to_do_list');
let taskArr = [];

if (localStorage.img) {
    document.body.style.backgroundImage = `url(${localStorage.img})`
    document.body.style.transition = '.3s';
    document.body.style.backgroundSize = 'contain';
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundPosition = 'center';
}

function addLi(text) {
    let li = document.createElement('li');
    li.innerText = text;
    let checkbox = document.createElement('input');

    checkbox.addEventListener('click', function(event) {
        if (checkbox.checked) {
            li.style.textDecoration = 'line-through';
            toDoList.append(li);
        } else {
            li.style.textDecoration = 'none'
            toDoList.prepend(li);
        }
    })
    li.prepend(checkbox);
    toDoList.prepend(li);

    let remover = document.createElement('button');
    remover.addEventListener('click', function(event) {
        li.remove();
    })
    li.appendChild(remover);
    let i = document.createElement('i');
    remover.appendChild(i);

    checkbox.type ="checkbox";
    li.style.listStyle = 'none';
    i.className = 'fa-solid fa-xmark';
    remover.style.width = '20px';
    remover.style.marginLeft = '5px';
}

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addLi(taskManager.value);
    taskArr.push(taskManager.value);
    localStorage.tasks = JSON.stringify(taskArr);
    taskManager.value = '';
})

if (localStorage.tasks) {
    taskArr = JSON.parse(localStorage.tasks);
    for (let task of taskArr) {
        addLi(task);
    }
} 

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

let allTasksDone = document.querySelector('.all_tasks_done');
    allTasksDone.addEventListener('click', function(event){
    event.preventDefault();
    let liArr = document.querySelectorAll('li');
    liArr.forEach(li.style.textDecoration = 'line-through')
})

// Задание 1
// 1) Сделать код таск-менеджера из прошлого урока более читаемым, разбив его на отдельные функции. 
// По сабмиту формы после preventDefault должна вызываться одна функция - addLi(text) и очищаться input. Все остальные действия - внутри функций.
// 2) Добавить кнопку, которая помечает все задачи как сделанные.
// - Добавить тег button в html код и повесить на него обработчик события click
// - В обработчике найти все существующие теги li при помощи функции document.querySelectorAll
// - В цикле обойти найденные в пункте теги li. Каждому проставить li.style.textDecoration = 'line-through';
// 3) Добавить сохранение задач в таск-менеджер, чтобы они сохранялись между перезагрузками страницы.
// Основное задание - сохранять сами задачи, без удаления и выделения как сделанные.
// Сохранять удаление задач и статус выполнения - необязательно, т.к. это потребует значительной переработки кода.

// Задание 2
// 1) 
// Задать объект с полем name. 
// Задать переменную, которая будет хранить JSON упомянутого объекта. 
// Задать переменную, которая будет хранить результат парсинга предыдущей переменной.
// 2)
// Создать переменную user, в которой хранится объект. 
// Записать переменную в localStorage. 
// Создать переменную newUser, в которой будет храниться JS объект из localStorage.

let obj = {name: 'Vasya'};
let objJSON = JSON.stringify(obj.name);
let objParse = JSON.parse(objJSON);

let user = obj;
localStorage.name = user.name;
let newUser = localStorage.name;

// Задание 3
// Разместить на странице несколько картинок. При клике на любую картинку она плавно становится на бэкграунд всей страницы, а тег картинки получает уникальные css-свойства (чтобы было понятно, что сейчас эта картинка является выбранным элементом). При перезагрузке страницы последнее выбранное состояние должно сохраниться, реализовать через LocalStorage.
// Пример реализации:
// https://ucarecdn.com/6e689f37-...

// ПОДСКАЗКИ
// - значение атрибута можно узнать с помощью метода element.getAttribute(' ');
// - элемент, по которому пришелся клик, = 
// event.target
// остальные элементы - 
// !event.target
// Порядок работы, если нет своих идей:
// 1. Собираем изображения в массив.
// 2. Перебираем массив с изображениями, добавляем на них обработчик клика.
// Внутри обработчика еще раз перебираем массив, проверяем, какая именно картинка является нажатой 
//(на нее пришелся клик - event.target). У остальных убираем класс active, а ей добавляем, записываем ее индекс или
//url в память и ставим ее на фон body.
// При загрузке страницы проверяем, есть ли информация об активной картинке в LocalStorage, если есть - 
//добавляем ей класс active и ставим ее на фон. Если нет - можно присвоить класс и поставить на фон первую картинку.


let images = document.querySelectorAll('img');

for (let image of images) {
    image.addEventListener('click', event => {
        for (image of images) {
            image.classList.remove('active');
        }
        event.target.classList.add('active');
        let url = event.target.getAttribute('src');
        localStorage.img = url;
        document.body.style.backgroundImage = `url(${url})`

        document.body.style.backgroundSize = 'contain';
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundPosition = 'center';
        document.body.style.transition = '.3s';
    })
}

