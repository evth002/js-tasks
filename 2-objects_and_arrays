//1.1 
let n = 13;
alert(n >= 0 && n <= 100);

//1.2
if ( n <= 0 || n >= 100) {
    alert(false);
} else alert (true);

//from video
let user = {
    name: 'Kolua',
    age: '10',
    gender: 'male',
}

console.log(user.age + user.gender);

user.name = 'Vitua';
user['name'] = 'Stas';
console.log(user['name']);

userProperty = 'age';
alert(user[userProperty]);         

nameProperty =  'name';
ageProperty = 'age';
genderProperty = 'gender';
user2 = { [nameProperty]: 'Lucy', [ageProperty]: 20, [genderProperty]: 'female'};
console.log(user2);

for (let property in user2) {
    console.log(property + ': ' + user2[property]);
}

console.log(`${user2.name} is my bf`);

//2
//Создайте объект с именами и заработными платами
// const engineers = {
//     Den: 1000,
//     Matt: 5000,
//     Steve: 2000
// }
//Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате:
//Заработная плата ххх составляет ххх рублей.


const engineers = {
    Den: 1000,
    Matt: 5000,
    Steve: 2000
}
for (let propert in engineers) {
    console.log(`Заработная плата ${propert} составляет ${engineers[propert]} рублей`);
}


//from video

let array = ['hello', 'world', '!'];
array[0] = 'goodbye';
console.log(array);

console.log(array[array.length - 1]);

for (let i = 0; i <array.length; i++) {
    console.log(array[i]);
};

//3 
// Создать массив из 5 элементов.
// Используя цикл for, вывести каждый второй элемент массива в консоль.

let arr = [1, 2, 'q', 'hh', 5];
for (let i = 0; i < arr.length; i = i + 2) {
    console.log(arr[i]);
}

//4
// Есть массив произвольных чисел:

let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];

// Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:
// Индексу 0 соответствует число 42
// Индексу 1 соответствует число 65
// и т.д.

for (let i = 0; i < numbers.length; i++) {
    console.log(`Индуксу ${i} соответствует число ${numbers[i]}`);
}

//from video 

let num = [1, 2, 3];
for (let i = 0; i < num.length; i++) {
    console.log(num[i] + i);
}
//for (let item of num) {
    //alert(item);
//}
num[num.length] = 4;
num.push(5);
console.log(num);

//5 
// Есть массив произвольных чисел:
let number = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// 1) Вывести в консоль все элементы массива, используя 2 разных цикла: for-of и for со счетчиком

for (let item of number) {
    console.log(item);
} 

for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
}

// 2) Посчитать и вывести в консоль сумму элементов в массиве.
// Подсказка: в задачах такого типа нужно заранее предусмотреть переменную (например, sum) и записать 
//в нее начальное значение (в случае с суммой - ноль). Затем уже описать цикл, в котором эта сумма будет 
//считаться (в каждой итерации цикла к ней будет прибавляться следующий элемент массива).

let sum = 0;
for (let i = 0; i < number.length; i++) {
    sum = sum + number[i];
}
console.log(sum);

// 3) Посчитать и вывести в консоль сумму четных элементов в массиве.                                              

let sumEven = 0;
for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 == 0) {
        sumEven = sumEven + number[i];
    }
}
console.log(sumEven);

// 4) Найти и вывести в консоль максимальное число массива.
// Подсказка: как и в случае с суммой, здесь сначала нужно объявить переменную (например, max), 
//записать в нее первый элемент массива, а затем уже в цикле искать максимальное значение.

let maxNumber = number[0];
for (let i = 1; i < number.length; i++) {
    while (number[i] > maxNumber) {
        maxNumber = number[i];
    }
};
console.log(maxNumber);

// 5) Определить и вывести в консоль индекс максимального числа массива                                          
//(или индексы, если число встречается более одного раза). Само максимальное число мы уже 
//нашли в прошлой части задачи, повторно его искать не нужно.

for (let i = 0; i < number.length; i++) {
    if (number[i] == maxNumber) {
        console.log(i);
    }
}

// Задание 6
// Определить массив 

let arrr = [5, 4, 3, -3, -10, -1, 8, -20, 0];

// В цикле создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.
// Подсказка. Изначально нужно объявить пустой массив-хранилище (например, let newArr = []). 
//Затем пройтись в цикле по массиву arr, и в каждой итерации, если элемент положительный, добавлять его в массив newArr.

let newArr = [];
for (let i = 0; i < number.length; i++) {
    if (arrr[i] >= 0) {
        newArr.push(arrr[i]);
    }
}
console.log(newArr);

// Задание 7
// Определить массив, например 
let nums = [5, 4, 3, 8, 0];
//и переменную 
let limit = 5;
// Создать новый пустой массив. В цикле наполнить его элементами nums, 
//но в новом должны содержаться элементы, больше и равные (>=) значению переменной limit.

let newNums = [];
for (let i = 0; i < number.length; i++) {
    if (nums[i] >= limit) {
        newNums.push(nums[i]);
    }
}
console.log(newNums);

// Задание 8
// Описать массив из объектов с двумя полями: строковым и числовым.

const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 8}]

// Пройти в цикле по массиву и вывести строковое поле каждого объекта, если его числовое поле больше 10.


for (let i = 0; i < users.length; i++) {
    if(users[i].age > 10) {
        console.log(users[i].name);
    }
}

// Задание 9*
// Задать массив слов. Например:

let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];

// 1) В цикле сформировать массив объектов с ключами word (само слово), length (длина слова). 
//Вывести этот массив в консоль.
// Подсказка: длину строки можно определить с помощью метода .length. Например, 
//для переменной let string = 'text' это будет string.length (результат - 4, т.к. слово text состоит из 4 символов)

let veg = [];
for (let i = 0; i < vegetables.length; i++) {
    let word = vegetables[i];
    let length = word.length;
    veg.push(word, length);
} 
console.log(veg);

// 2) Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", 
//например "картошка - 8"

for (let i = 0; i < veg.length - 1; i = i + 2) {
    console.log(veg[i] + ' - ' + veg[i + 1]);
}
