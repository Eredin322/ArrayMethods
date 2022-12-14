// TASK 01
// По нажатию b-1 выполняется функция f1. Функция с помощью reverse должна развернуть массив a1 и вывести в out-1 через пробел.


let a1 = [22, 33, 44, 55, 66, 77, 88];

const f1 = () => {
    document.querySelector('.out-1').innerHTML = a1.reverse();
}


// TASK 02
// По нажатию b-2 выполняется функция f2. Функция с помощью reverse должна развернуть строку s2 и вывести в out-2.

let s2 = 'mazahackercrackall';

const f2 = () => {
    document.querySelector('.out-2').innerHTML = s2.split('').reverse().join('');
}

// TASK 03
// По нажатию b-3 выполняется функция f3. Функция с помощью reverse должна развернуть вложенные в a3 и присвоить a3_res, вывести в out-3 через пробел. Массив a3_res очищать при старте функции.


let a3 = [[44, 55, 66], [77, 88, 99]]; // ожидаю 66 55 44 99 88 77
let a3_res = [];

const f3 = () => {
    for (let i = 0; i < a3.length; i++) {
        a3_res.push(a3[i].reverse());
    }
    document.querySelector('.out-3').innerHTML = a3_res;
}

// TASK 04
// Функция reverse меняет исходный массив. Напишите функцию f4, которая запускается по кнопке b-4. Функция создает новый массив на основе a4 с обратным порядком элементов и возвращает его. Использовать reverse запрещено. Исходный массив - не должен изменяеться.


let a4 = [55, 66, 77, 88, 99];

const f4 = () => {
    let res = a4.reduce((accum, item) => {
        return [item, ...accum];
    }, [])
    document.querySelector('.out-4').innerHTML = res;
}

// TASK 05
// Напишите функцию f5, которая запускается по кнопке b-5. Функция создает и возвращает новый массив на основе a5 c попарно замененными четными и нечетными элементами. Исходный массив менять запрещено! Количество элементов в массиве всегда четное.

let a5 = [1, 2, 3, 4, 5, 6, 7, 8]; // ожидаю [2, 1, 4, 3, 6, 5, 8, 7]

const f5 = () => {
    let a5_res = [];
    for (let i = 0; i < a5.length; i = i + 2) {
        a5_res.push(a5[i + 1]);
        a5_res.push(a5[i]);
    }
    document.querySelector('.out-5').innerHTML = a5_res;
}

// TASK 06
//  Напишите функцию f6, которая запускается по кнопке b-6. Функция сортирует массив a6 по возрастанию и выводит в out-6 через пробел. Не указывайте функции сортировки. Изучите результат на двух значениях переменной a6.


// let a6 = [1, 4, 2, 6, 7, 3, 5, 2, 9];
a6 = ['hi', 'low', 'lo', 'hihi'];

const f6 = () => {
    let a6_res = a6.sort();
    document.querySelector('.out-6').innerHTML = a6_res;
}

// TASK 07
// Напишите функцию f7, которая запускается по кнопке b-7. Функция сортирует массив a7 по возрастанию и выводит в out-7 через пробел. Не указывайте функции сортировки. Изучите результат. Понимаете ли вы почему так произошло?


let a7 = [10, 4, 20, 6, 70, 30, 5, 2, 9];

const f7 = () => {
    let a7_res = a7.sort((a, b) => a - b)
    document.querySelector('.out-7').innerHTML = a7_res;
}

// TASK 08
//  Напишите функцию f8, которая запускается по кнопке b-8. Функция сортирует массив a8 по возрастанию и выводит в out-8 через пробел. Функцию сортировки укажите самостоятельно.

let a8 = [10, 4, 20, 6, 70, 30, 5, 2, 9];

const f8 = () => {
    let a8_res = a8.slice();
    for (let k = 0; k < a8_res.length; k++) {
        for (let i = 0; i < a8_res.length; i++) {
            let greater;
            if (a8_res[i] - a8_res[i + 1] > 0) {
                greater = a8_res[i];
                a8_res[i] = a8_res[i + 1];
                a8_res[i + 1] = greater;
            } else {
                continue;
            }
        }
    }
    return a8_res;
}

// TASK 09
// Напишите функцию f9, которая запускается по кнопке b-9. Функция сортирует массив a9  по возрастанию или по убыванию в зависимости от аргумента s. Если s равно ASC - то по возрастанию, если s равно DESC то по убыванию, и возвращает измененный массив.

let a9 = [9, 9, 45, 3, 1, 83, 50, 6, 5, 35, 8, 4];

const f9 = (s) => {
    let a9_res;
    if (s === 'ASC') {
        a9_res = a9.sort((a, b) => a - b)
    }
    if (s === 'DESC') {
        a9_res = a9.sort((a, b) => b - a)
    }
    return a9_res;
}

// TASK 10
// По нажатию b-10 выполняется функция f10. Функция сортирует массив a10 по полю age (по позрастанию) и выводит имена (после сортировки) в out-10. Вывод через пробел.

let a10 = [
    { "name": "Ivan", "age": 34 },
    { "name": "Petro", "age": 24 },
    { "name": "Orest", "age": 45 },
    { "name": "Virii", "age": 35 },
    { "name": "Blamo", "age": 47 },
    { "name": "Vandeya", "age": 27 },
    { "name": "Inna", "age": 35 },
    { "name": "Gretta", "age": 25 },
    { "name": "Brianna", "age": 55 }
];

const f10 = () => {
    let a10_res = a10.sort((a, b) => {
        return a.age - b.age;
    })
    document.querySelector('.out-10').innerHTML = '';
    for (let i = 0; i < a10_res.length; i++) {
        document.querySelector('.out-10').innerHTML += a10_res[i].name + ' ';
    }
}



document.querySelector('.b-1').addEventListener('click', f1);
document.querySelector('.b-2').addEventListener('click', f2);
document.querySelector('.b-3').addEventListener('click', f3);
document.querySelector('.b-4').addEventListener('click', f4);
document.querySelector('.b-5').addEventListener('click', f5);
document.querySelector('.b-6').addEventListener('click', f6);
document.querySelector('.b-7').addEventListener('click', f7);
document.querySelector('.b-8').addEventListener('click', () => {
    document.querySelector('.out-8').innerHTML = f8();
});
document.querySelector('.b-9').addEventListener('click', () => {
    document.querySelector('.out-9').innerHTML = f9('DESC');
});
document.querySelector('.b-10').addEventListener('click', f10);