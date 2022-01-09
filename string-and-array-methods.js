// Задание 1
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

let string = 'hello world';

function ucFirst(str) {
    let newStr = str[0].toUpperCase() + str.slice(1);
    return newStr;
}
console.log(ucFirst(string));

// Задание 2
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.

let string2 = 'XXx';
let string3 = 'badwoRD';

function checkSpam(str) {
    let newStr = str.toLowerCase();
    if (newStr.includes('badword')  || newStr.includes('xxx')) {
        return true;
    } else { return false};
}
console.log(checkSpam(string)); 
console.log(checkSpam(string2)); 
console.log(checkSpam(string3)); 

// Задание 3
// Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). 
// Пример: «привет Женя» -> «янеЖ тевирп»

function reverseStr(str) {
    let splitStr = str.split('');
    let reverseStr = splitStr.reverse();
    let newStr = reverseStr.join('');
    return newStr;
}
console.log(reverseStr(string));

// Задание 4
// Массив содержит строки с информацией о железнодорожных станциях на севере Англии. 
// Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, 
// за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. 

let stations = [
'MAN675847583748sjt567654;Manchester Piccadilly',
'GNF576746573fhdg4737dh4;Greenfield',
'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
'SYB4f65hf75f736463;Stalybridge',
'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
];

// Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:
// MAN: Manchester Piccadilly

// Вывести эти строки в консоль
// ПОДСКАЗКА:
// 1. Извлеките трёхбуквенный код станции и сохраните его в новой переменной.
// 2. Найдите номер символьного номера точки с запятой.
// 3. Извлеките название для чтения человеком, используя номер индекса точки с запятой в качестве контрольной точки и
// сохраните его в новой переменной.
// 4. Объедините две новые переменные и строк

// Задание 4.1
// Выведите полученные строковые значения на странице в виде списка (ul li) 

let ul = document.createElement('ul');
for (elem of stations) {
    code = elem.substr(0, 3);
    let i = elem.indexOf(';');
    let station = elem.slice(i + 1);
    
    let str = `${code}: ${station}`;
    console.log(str);
    
    let li = document.createElement('li');
    li.innerText = str;
    ul.appendChild(li);
}
document.body.appendChild(ul);

// Задание 5
// Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, 
// содержащий только уникальные элементы arr.
// Пример:
//console.log(unique(strings)); должен вывести "кришна, харе, :-O"

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

function unique(arr) {
    let uniqueArr = [];
    for (i = 0; i < arr.length; i++) {
        let elem = arr[i];
        if (i == arr.indexOf(elem)) {
            uniqueArr.push(arr[i])
        }
    }
    return uniqueArr;
}

console.log(unique(strings));
