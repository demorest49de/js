'use strict';

// region primitives
// const name = 'xiaomi 12t pro';
// const quantity = 5;
// const category = 'phones';
// const price = 50000;
//
// console.log('имя: ', name);
// console.log('всего товара на сумму: ', quantity * price);


// console.log('Numbers: ', 5, 3.5, Infinity, -Infinity, NaN);
//
// console.log('bigInt: ', 10n, BigInt(10));
//
// console.log('Strings: ', 'one', "two", `three`);
//
// console.log('Логический: ', true, false);
//
// console.log('undefined: ', undefined);
//
// console.log('Symbol: ', Symbol(), Symbol('key'));

// console.log(': ', typeof 5.5);
// console.log(': ',typeof (NaN));
// console.log(': ',typeof (Infinity));
//
// console.log(': ',Number.MAX_VALUE);
// console.log(': ',Number.MAX_SAFE_INTEGER);


// const myName = 'Max'
// console.log(`My name is ${myName}`);
//
// const birthYear = 1981;
// const nowYear = new Date().getFullYear();


//  тики - обратный опостроф + интерполяция
// document.body.innerHTML = `<h1 class="title">Hi ${myName}</h1>
// <p>I'm ${nowYear - birthYear} years old</p>
// `;
// endregion

//region objects
// const obj = {
//     num: 5,
//     str: 'str',
//     bool: true,
//     foo() {
//     },
//
//     arr: [1, 2, 3],
//     obj: {
//         a: 1,
//         b: 2
//     }
//
// };
// console.log(': ', typeof (obj));
//
// const arr = [[1, 2, 3], {a: 1, b: 2}, 'str', 4, false, () => {
// }];
// console.log(': ', typeof (arr));
//
// const foo = () => {
// };
//
// console.log(': ', typeof (foo));
//
// const err = new Error();
// console.log(': ', typeof (err));
//
// const regExp = /А-Я/i;
// console.log(': ',typeof (regExp));
//endregion

//region отличие var let const
// var one = 1;
// var one = 1;
// var one = 1;
// var one = 1;
// var one = 1;
//
// let two = 2;
// two = 'two';
// const three = 3;
//
// console.log(': ', one, two, three);
//endregion

// region loops
// let test;
// let test = JSON.stringify({a: 1, b: 2});
// test = JSON.parse(test);

// let test = 30 + '';
// test = null + '';

// test = '5' * 2;
// test = Number('5');
// //унарный оператор
// test = +'5';
//
// test = Boolean('5');

//пустая строка
//test = !!'0'; - true

// test = !![1, 2];

// test = +true; //1
// test = +undefined; //NaN
// test = +null; //0
// test = +''; //0
// test = +'hi'; //NaN
// test = +'55cc';
// test = true + false;
//
// console.log('test: ', typeof (test));
// console.log('test: ', test);

// let i = 0;
// for (; ;) {
//     i += 1;
//     if (i % 5) continue;
//
//     if (i > 10) break;
//
//     console.log(': ', i);
// }

//endregion loops

//region arrays

// const animals = ['mouse','dog','cat']
// animals.length = 3
// console.log(animals);
//
// animals[0] = 'fish'
// console.log(animals);
//
// const animals = ['mouse', 'dog', 'cat'];
// animals.push('parrot', 'monkey', 'monkey');//добавление в конец массива
// animals.unshift('parrot2', 'monkey2');//добавление в начало массива
// // animals.pop();//удаление элементов в конце
// console.log(animals);
// const fromTail = animals.pop();
// console.log(fromTail);
// const fromHead = animals.shift();//удаление в начале
// console.log(fromHead);
//
//
// console.log('Array.isArray(animals): ', Array.isArray(animals));
//
// const foo = function (){
//     console.log(arguments);
//     console.log(Array.isArray(arguments));
// }
//
// foo(1,2,3,4,5);
//
//
// const scientists = ['m', 'a', 't', 'c', 'd'];
//
// const removed = scientists.splice(3, 0, 'perelstein', 'newton');//удаление из массива из определенного элемента
// const removed = scientists.splice(0, scientists.length);//удаление из массива из определенного элемента
// console.log(removed);
// console.log('scientists: ', scientists);
//
// console.log(': ', scientists.includes('a'));
//
// const numbers = [1, 2, 3, 4, 5, 7, 8, 9];

// console.log(': ', numbers.join(`, `));// join очень удобен для вставки разделителя запятой
// const removed = numbers.splice(0, numbers.length);
//
// for (let i = 0; i < 15; i++) {
//     numbers[i] = Math.trunc(Math.random() * 200);
// }
// const scientists = ['m', 'a', 't', 'c', 'd'];
// const numbers = [123, 54, 13, 93, 141, 91, 74, 16, 61, 106, 166, 116, 41, 80, 43];
//
// const sortArray = ([...arr]) => {
//     arr.sort((a, b) => a - b);
//
//     return arr;
// };


// const [x, y, ...restOfIt] = numbers;
// console.log(': ', x, y, restOfIt);
//
// const newArray = restOfIt.slice(6);//взять все элементы начиная с 6-го
// console.log('newArray: ', newArray);
//
// const string = 'Hello world';
// const [a, b, ...restofstring] = string;
// console.log(': ',restofstring);

// const newNum = [1,2,3] // слияние массивов спред оператор можно использовать в средине
//
// const joined = [...numbers, ...scientists]// после равно спрэд оператор, до равно рест оператор
// console.log(': ',joined);
//
// const scientists = ['m', 'a', 't', 'c', 'd'];
// const numbers = [123, 54, 13, 93, 141, 91, 74, 16, 61, 106, 166, 116, 41, 80, 43];
//
//
// const cloneNumber = [...numbers];// копирование массива по значению
//
// const newClonedNumbers = numbers;// копирование по ссылке
//
// console.log('cloneNumber == numbers: ',cloneNumber == numbers);
// console.log('newClonedNumbers == numbers: ',newClonedNumbers == numbers);
// newClonedNumbers[2] = 5000
// console.log(': ',newClonedNumbers);
// console.log(': ',numbers);
// console.log(': ===================');
// cloneNumber[2] = 500
// console.log(': ',cloneNumber);
// console.log(': ',numbers);
//
// const dnumbers = numbers.slice()//тоже способ клонирования массива по значению
// console.log(': ',dnumbers);
//
// const arr = [].concat(numbers);// тоже новый массив
//
// const newArray = sortArray(numbers);
// console.log(`newArray: ${newArray}`);
// console.log(`numbers: ${numbers}`);


//маппинг

// const mapping = (arr) => {
//     const newArray = [];
//
//     // for (let i = 0; i < arr.length; i++) {
//     //     newArray[i] = arr[i] + 1;
//     // }
//     for (let i = 0; i < arr.length; i++) {
//         if ((arr[i] % 2)) {// фишка в том что если 6 % 2 - тру если остаток есть и фолс - если остатка нет
//             newArray.push(arr[i]);
//         }
//     }
//
//     return newArray;
// };
//
// const newArray = mapping(numbers);
// console.log(`newArray: ${newArray}`);
// console.log(`numbers: ${numbers}`);
//endregion arrays

//region forEach, map, reduce, find, filter
// const foo = (item, i, array) => {
//     console.log(array);
// };
const numbers = [123, 13, 93, 141, 91, 16, 74, 54, 61, 106, 166, 116, 41, 80, 43];
const scientists = ['mendeleev', 'aristotel', 'tutchev', 'curi', 'darwin'];

// numbers.forEach((item, i, array)=>{// foreach - ничего не возвращает перебор элементов.
// используется для добавления элементов в другой массив по условию.
//     console.log(item);
// })

// scientists.forEach(foo);// функцию можно задавать снаружи
//
// const item = numbers.find((item, i, arr) => {// find - найти первый элемент по условию
//     return !(item % 2);
// });
// console.log(item);

// const items = numbers.filter((item, i, arr) => {//find - найти массив элементов по условию
//     return !(item % 2);
// });
// console.log(item);
//
// const newArr = numbers.map((item) => {//map - работа с каждым элементом отдельно
//     // можно задать много разных инструкций и переделать массив как следует
//     if (item * 2 > 200) return null;
//     return item;
// });
//
// console.log(': ', newArr);

// const newArr = numbers.some((item) => typeof item === 'string');// проверка на условие любого эл-та массива
// console.log(': ', newArr);

// const newArr = numbers.every((item) => typeof item === 'number');// проверка на условие всех эл-тов массива
// console.log(': ', newArr);

const countSomething = [
    {
        name: 'mendeleev',
        count: 3
    },
    {
        name: `pushkin`,
        count: 4
    },
    {
        name: 'tutchev',
        count: 5
    }
];

// const newItem = countSomething.reduce((acc, item, i, arr) => {
//     console.log(': ', acc, item.count);
//     return acc + item.count;
// }, 0);
// console.log(newItem);
// console.log('newItem: ', newItem);
//flat - выпрямление массива вложеные массивы становятся элементами одномерного массива
// const nested = [123, 13, 93, 141, 91, [16, 74, 54], 61, 106, 166, 116, 41, 80, 43];
// console.log(': ',nested);
// const flatArray = nested.flat(Infinity)
// console.log(': ',flatArray);

//endregion forEach, map, reduce, find, filter

const login = 'andrey';
const lastname = 'shevchenko';

const user = {
    firstname: login,
    lastname,
    'last used weapon': 'army nife',
    cars: ['toyota', 'mazda'],
    age: 41,
    status: {alive: true, wanted: false},
    say() {
        console.log(`suprise...`);
    }
};

// const property = 'firstname';
// console.log(': ', user.firstname);
// console.log(': ', user['lastname']);
// console.log(': ', user['last used weapon']);
// console.log(': ', user[property]);
// user.say();

// console.log(': ',user);
// delete user.cars;
// console.log(': ',user);

user.firstname = 'demorest';//изменение
user.smoke = true;//добавление свойств в объект

console.log(': ', user);

//объект как и массив ссылочный

const element = {
    tagName: 'div',
    className: 'container',
};

const el2 = element;//
//element = {}; // нельзя  в константе уже существует объект;

console.log(': ', el2 === element);

const decorObj = obj => {
    obj.prop = 'asdf';
};

decorObj(element);// декорирование добавление новых свойств
console.log('element: ', element);




