
/* Task-1 - İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin.
Bu rəqəmi üçrəqəmli olana kimi 7 vahid artırın.
Son dəyəri konsola çıxarın. */

/* const prompt = require("prompt-sync")();
let number = Number(prompt("Ədəd daxil edin"));

while (number < 100) {
    number += 7;
}
console.log(number - 7); */

// ------------------------------------------------------------------
/* Task-2
Konsola N dəfə «I know how to use cycles» mesajı çıxaran proqram yazın.
Proqram N ədədini istifadəçidən soruşur. */


/* const prompt = require("prompt-sync")();
let number = Number(prompt("Ədəd daxil  => "));

let count = 0;
while (number > count) {
    console.log("I know how to use cycles");
    ++count;
} */

// ------------------------------------------------------------------

/* Task-3
Sonu 0 ilə bitən bütün üçrəqəmli ədədləri konsola çıxaran proqram yazın.

for (let i = 100; i < 1000; i += 10) {
    console.log(i);
}

let num = 1000;
let i = 100;
while (num > i) {
    console.log(i);
    i += 10;
} */

// ------------------------------------------------------------------

/* Task-4
Bütün ikirəqəmli tək ədədlərin cəmini konsola çıxaran proqram yazın. */

/* let num = 10;
let sum = 0;

while (num <= 99) {
    if (num % 2 === 1) {
        sum += num;
    }
    num++;
}

 console.log(sum);
*/

// const prompt = require("prompt-sync")();

// let a = Number(prompt("Reqem daxil edin"));

// console.log(a);

// ------------------------------------------------------------------

/*
Task 5
İstifadəçinin daxil etdiyi ədədin bölünəni olan bütün üçrəqəmli ədədlərin cəmini hesablayan proqram yazın.
100-999
Yəni daxil etdiyimiz rəqəmə bölünən ədədlərin cəmini tapmaq Məsələn 5 daxil etsək. O zaman 100-dən 999-a qədər olan ədələrdən hansı 5-ə qalıqsız bölünürsə həmin ədədləri toplayırıq.
*/

/* const number = require("prompt-sync")();

let enteredNumber = Number(number("Ədəd daxil edin: => "));

if (isNaN(enteredNumber)) {
    console.log("Ədəd daxil edin");
}
else if (enteredNumber === 0) {
    console.log("0-a bölmək olmaz")
} else {
    let sum = 0;
    let start = 100;
    let end = 999;
    while (start <= end) {
        if (start % enteredNumber === 0) {
            sum += start;
        }
        start++;
    }

    console.log(`Alınan nəticə :  ${sum}`);
} */

// ------------------------------------------------------------------


/* Task 6
Sadə ədədləri çıxaran proqram yazın.
İstifadəçidən n ədədini soruşan və n-dən 0-a kimi bütün sadə ədədləri azalan ardıcıllıqla çıxaran proqram yazın.
«23» ədədi daxil edildikdə, konsola «23», «19», «17», «13», «11», «7», «5», «3», «2», «1» ardıcıllığı çıxarılmalıdır.
*/

/* const prompt = require("prompt-sync")();

let n = Number(prompt("Zəhmət olmasa ədəd daxil edin: => "));


let num = n;

while (num >= 1) {
    let isPrime = true;
    if (n === 1) {
        console.log(1);
    }
    else {
        let i = 2;
        while (i < num) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
            i++;
        }
    }

    if (isPrime) {
        console.log(`${num}`);

    }
    num--;
} */

// ------------------------------------------------------------------

/* Task 7
10-a qədər bütün reqemlerin hasilin tapan proqram tərtib edin
Alınan dəyəri konsola çıxarın.
*/

/* let i = 1;
let result = 1;

while (i <= 10) {
    result *= i;
    i++;
}
console.log(`10-a qədər bütün reqemlerin hasilin: => {result}`); */

// ------------------------------------------------------------------

/*Task 8
İstifadəçidən mətn daxil etməsini tələb edən və mətn elementlərini əks qaydada düzən proqram tərtib edin. */

/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa mətn daxil edin: => ");

let reversedStr = "";

let strLength = Number(str.length);

while (strLength > 0) {
    reversedStr += str[strLength - 1];
    strLength--;
}

console.log(reversedStr); */

// ------------------------------------------------------------------

/* Task 9
Mətndə "." hərfinin ilk dəfə hansı indeksdə yerləşdiyini tapan proqram tərtib edin.
*/


/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa mətn daxil edin: => ");

let strLength = Number(str.length);

let pointIndex = 0;

let i = 0;
while (strLength > 0) {
    if (str[i] === ".") {
        pointIndex = i;
        break;
    }
    i++;
}
console.log(i); */

// ------------------------------------------------------------------

/* Task 10
Mətndə rəqəmlərin olub olmadığını yoxlayan proqram yazın.
İstifadəçidən mətn daxil etməsini tələb edən və mətndə rəqəmlərin
olub-olmaması barədə konsola mesaj çıxaran proqram tərtib edin. */

/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa mətn daxil edin: => ");

let i = 0;
let hasDigits = false;

while (str.length > i) {

    if (!isNaN(str[i]) && str[i] !== " ") {
        hasDigits = true;
        break;
    }
    i++;
}

if (hasDigits) {
    console.log(`Mətn daxilində rəqəm vardır. => ${str}`);
}
else {
    console.log(`Mətn daxilində rəqəm yoxdur. => ${str}`);
} */

// ------------------------------------------------------------------

/* Task 11
Dəyərin palendrom olub olmadığını yoxlayın:
"ata" => true
"level"=> true
"school"=> false */

/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa mətn daxil edin: => ");

let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}

let isPalendrome = str === reversedStr;

console.log(isPalendrome); */

// ------------------------------------------------------------------

/* Task 12
Ən kiçik üçrəqəmli ədəddən başlayaraq yalnız 5-ə bölünəndə qalıq 2 verən ədədləri konsola çıxarın.
Ədədlər 500-dən böyük olana qədər davam etsin.
 */

/* let num = 100;

while (num <= 500) {
    if (num % 5 === 2) {
        console.log(num);
    }
    num++;
} */

// ------------------------------------------------------------------

/*
Task-13
İstifadəçidən tam ədəd daxil etməsini xahiş edin.
Bu ədədin rəqəmlərindən ibarət olan bütün ədədlərin cəmini hesablayın.
Məsələn: 453 daxil edildikdə nəticə 4+5+3=12 olmalıdır. */

/* const prompt = require("prompt-sync")();

let n = Number(prompt("Zəhmət olmasa ədəd daxil edin: => "));

let result = 0;
let remainder = 0;
let digit = n;

while (digit > 0) {

    remainder = digit % 10;
    result += remainder;
    digit = Math.floor(digit / 10);
}

console.log(result); */

// ------------------------------------------------------------------

/* Task-14
İstifadəçidən ədəd daxil etməsini tələb edin və həmin ədədin bütün bölənlərini azalan sıra ilə konsola çıxarın.
Məsələn: 12 daxil edildikdə 12, 6, 4, 3, 2, 1 göstərilməlidir.
*/

/* const prompt = require("prompt-sync")();

let n = Number(prompt("Zəhmət olmasa ədəd daxil edin: => "));

let bolen = n;

while (bolen >= 1) {
    if (n % bolen === 0) {
        console.log(bolen);
    }
    bolen--;
} */

// ------------------------------------------------------------------

/* Task-15
1-dən 30-a qədər yalnız 3-ə və 5-ə eyni anda bölünən ədədləri konsola çıxaran proqram yazın.
 */

/* let start = 1;
let end = 30;

while (start <= end) {
    if (start % 3 === 0 && start % 5 === 0) {
        console.log(start);
    }
    start++;
} */

// ------------------------------------------------------------------

/* Task-16
İstifadəçidən bir söz daxil etməsini tələb edin.
Sözdəki hərfləri biri-birindən tire (-) ilə ayıraraq konsola çıxarın.
Məsələn: "test" daxil edildikdə "t-e-s-t" çıxmalıdır.
*/
/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa mətn daxil edin: => ");


let newStr = "";

for (let i = 0; str.length > i; i++) {
    newStr += str[i];
    if (i !== str.length - 1) {
        newStr += "-";
    }
}

console.log(newStr); */

/* Test-17
Mətndə boşluq (" ") simvollarının sayını tapan proqram yazın.
*/

/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa mətn daxil edin: => ");

let blankCount = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
        blankCount++;
    }
}

console.log(blankCount); */

/* Task-18
İstifadəçidən iki tam ədəd daxil etməsini xahiş edin.
Kiçik ədəddən böyük ədədə qədər olan bütün ədədlərin kvadratlarını konsola çıxarın.
Məsələn: 3 və 6 daxil edildikdə 9, 16, 25, 36 göstərilməlidir.
*/

/* const prompt = require("prompt-sync")();

let num1 = Number(prompt("Birinci ədədi daxil edin: => "));
let num2 = Number(prompt("Ikinci ədədi daxil edin: => "));

let start = num1;
let end = num2;

if (num1 > num2) {
    start = num2;
    end = num1;
}

while (start <= end) {
    console.log(start ** 2);
    start++;
} */


