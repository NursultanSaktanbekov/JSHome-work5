'use strict'


// let drawCats = function (howManyTimes) {
//     for (let i = 0; i < howManyTimes; i++) {
//     console.log(i + " =^.^=");
//     }
// };
// drawCats(100);

// let printMultipleTimes = function (howManyTimes, whatToDraw) {
//     for (let i = 0; i < howManyTimes; i++) {
//         console.log(i + " " + whatToDraw);
//     }
// };
// printMultipleTimes(5, "^_^");

/* 1) Математические расчеты и функции

Создайте две функции, add и multiply; пусть каждая принимает
по два аргумента. Функция add должна складывать аргументы
и возвращать результат, а функция multiply — перемножать
аргументы.

С помощью только этих двух функций вычислите следующее
несложное выражение: 36325 * 9824 + 777 */

// function add (a, b) {
//     return a + b;
// } 

// function multiply (a, b) {
//     return a * b;
// }
// let result = add(multiply (36325, 9824), 777)
// console.log(result);

/* 2) Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

 */

// function square(number) {
//     return number * number;
// }

/* 3) Сделайте функцию, которая возвращает сумму двух чисел. */

// function addNumbers(a, b) {
//     return a + b;
// }
// let num1 = 10;
// let num2 = 20;
// let sum = addNumbers(num1, num2);
// console.log(sum)

/* 4) Сделайте функцию, которая отнимает от первого числа второе и делит на третье. */

// function subtractAndDivide(a, b, c) {
//     return (a - b) / c;
// }
// let num1 = 40;
// let num2 = 20;
// let num3 = 5;
// let sum = subtractAndDivide(num1, num2, num3);
// console.log(sum);

/*  5) Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке. */


function getDayOfTheWeek (number) {
    let dayOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (number >= 1 && number <= 7) {
        return dayOfTheWeek[number - 1];
    } else {
        return "Incorrect Day"
    }
}

let dayNumber = 4;
let day = getDayOfTheWeek(dayNumber);
console.log("Day with a number " + dayNumber + " - this is " + day);


