/* const prompt = require("prompt-sync")();
let number = prompt("Zəhmət olmasa 10-99 arası ədəd daxil edin: => ");

console.log(`${number[0]} ${number[1]}`); */


/* const prompt = require("prompt-sync")();
let number = prompt("Zəhmət olmasa bir rəqəm daxil edin: => ");

if (number >= 0) {
    number = String(number);
    console.log(number.length);
} */

/* const prompt = require("prompt-sync")();
let number = prompt("Zəhmət olmasa iki rəqəm daxil edin (aralarında boşluq qoyaraq): => ");
let num = number.split(" ").map(Number);

let sum = 0;
for (let i = 0; i < num.length; i++) {
    sum += num[i] ** 2;
}
console.log(sum); */

/* const prompt = require("prompt-sync")();
let number = +prompt("Zəhmət olmasa üç rəqəm ədəd daxil edin: => ");

if (number >= 100 && number <= 999) {
    let result = 1;
    let digit = number;
    while (digit > 0) {
        let remainder = digit % 10;
        result *= remainder;
        digit = Math.floor(digit / 10);
    }
   console.log("Rəqəmlərin hasili:", result);
} else {
    console.log("Xəta: Zəhmət olmasa yalnız üçrəqəmli ədəd daxil edin!");
} */

/* const t1 = 31;
const t2 = 15;
const t3 = 40;
let min = 0;

if (t1 < t2 && t1 < t3) {
    min = t1;
} else if (t2 < t1 && t2 < t3) {
    min = t2;
} else {
    min = t3;
}

console.log(min); */

/* let num = 11;
let count = 0;

while (num !== 1) {
    if (num % 2 === 0) {
        num /= 2;
    }
    else {
        num += 1;
    }
    count++;
}

console.log(count); */




/* console.log('a');
console.log('bb');
console.log('ccc');

let str = ['a', 'b', 'c'];
for (let i = 0; i < str.length; i++) {
    let res = "";
    for (let j = 0; j <= i; j++) {
        res += str[i];
    }
    console.log(res);
} */

/* let a = 5;
let m = 25;
let count = 1;
while (m > 0) {
    if ((a + 1) * 2 > m) {
        break;
    }
    a += 1;
    m -= a;
    count++;
}

console.log(count); */


/* let language = "java script";
const getchangename = function () {
    let language = "Html";
}
getchangename();
console.log(language); */

function addNumber(x, y) {
    if (isNaN(x) || isNaN(y)) {

    }
}

console.log(0 && hi);

discountPrice = function (price) {
    return price * 0.85;
}