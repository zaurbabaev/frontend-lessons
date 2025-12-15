/* Task-1 
İstifadəçi adını parametr kimi qəbul edən və konsola
«[İstifadəçi adı] is active now» mesajı çıxaran funksiya tərtib edin.
Funksiyanı 3 müxtəlif ad üçün çağırın. */

/*


function showUserName(userName) {
    console.log(`${userName} is active now`);
}

showUserName("Zaur");
showUserName("Vusal");
showUserName("Nail"); */

/* Task-2
Parametr olaraq üç ədəd qəbul edən və konsolda ən böyüyünü göstərən bir funksiya tərtib edin.
Fərqli arqumentlərlə funksiyanı üç dəfə çağırın. */

/* function getMaxValue(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else
        return c;
}

console.log(getMaxValue(23, 34, 5));
console.log(getMaxValue(2, 5, 8));
console.log(getMaxValue(56, 3, 90)); */



/* Task-3
Rubl və dollarla hesab qəbul edən və bütün hesablardakı məbləğin
cəmin rublla göstərən funksiya yazın.
Tutaq ki, müştərinin rubl hesabında 1200 rubl, dollar hesabında isə 20 dollar var.
Bir dollar üçün məzənnə 75 rubl təşkil edir.
Bu halda, funksiya belə mesaj göstərməlidir: Bütün depozitlər üzrə məbləğ: 2700 rubl. */

/* function myDeposite(rubl, usd) {
    const total = usd * 75 + rubl;
    console.log(`Bütün depozitlər üzrə məbləğ: ${total} rubl.`);
    return total;
}

myDeposite(1200, 20); */



/* Task-4
İstifadəçidən 1 ilə 99 arasında rəqəm daxil etməsini tələb edən və
onu mətn şəklində konsola çıxaran numberToText funksiyası tərtib edin.
Birdən ona qədər rəqəmin daxil edilməsi zamanı  bir söz göstərilir.(bir ,iki, üç və.s)
Hər hansı digər iki rəqəmli rəqəmi daxil edilməsi zamanı, boşluqla ayrılmış iki söz göstərilir,
məsələn, "iyirmi bir". */

/* const prompt = require("prompt-sync")();

const number = Number(prompt("Zəhmət olmasa 1 ilə 99 arası bir rəqəm daxil edin: => "));

if (number < 1 || number > 99) {
    console.log("Zəhmət olmasa yalnız 1 ilə 99 arası rəqəm daxil edin.");
} else {
    numberToText(number);
}

function numberToText(number) {
    const numArr = String(number).split("");
    let result = 0;
    if (numArr.length === 1) {
        result = unity(numArr[0]);
        console.log(result);
        return result;
    }
    else {
        const tens = decimal(numArr[0]);
        const ones = unity(numArr[1]);
        result = ones === "" ? tens : tens + " " + ones;
        console.log(result);
        return result;
    }
}

function unity(a) {
    switch (a) {
        case "0": return "";
        case "1": return "bir";
        case "2": return "iki";
        case "3": return "üç";
        case "4": return "dörd";
        case "5": return "beş";
        case "6": return "altı";
        case "7": return "yeddi";
        case "8": return "səkkiz";
        case "9": return "doqquz";
        default: return "düzgün rəqəm daxil edin";
    }
}

function decimal(a) {
    switch (a) {
        case "1": return "on";
        case "2": return "iyirmi";
        case "3": return "otuz";
        case "4": return "qırx";
        case "5": return "əlli";
        case "6": return "altmış";
        case "7": return "yetmiş";
        case "8": return "səksən";
        case "9": return "doxsan";
        default: return "düzgün rəqəm daxil edin";
    }

} */

/* ------------------------- VERSION 2 -------------------*/

/* const prompt = require("prompt-sync")();
const number = Number(prompt("Zəhmət olmasa 1 ilə 99 arası bir rəqəm daxil edin: => "));

if (number < 1 || number > 99) {
    console.log("Zəhmət olmasa yalnız 1 ilə 99 arası rəqəm daxil edin.");
} else {
    console.log(numberToText(number));
}

function numberToText(number) {
    const units = ["", "bir", "iki", "üç", "dörd", "beş", "altı", "yeddi", "səkkiz", "doqquz"];
    const tens = ["", "on", "iyirmi", "otuz", "qırx", "əlli", "altmış", "yetmiş", "səksən", "doxsan"];

    const t = Math.floor(number / 10);
    const u = number % 10;

    return u === 0 ? tens[t] : `${tens[t]} ${units[u]}`;
} */


/* Task-5
Parametr kimi iki ədəd qəbul edən və onlardan ən kiçiyini qaytaran min() funksiyası tərtib edin. */

/* function min(a, b) {
    return a > b ? b : a;
}

console.log(min(23, 4));
console.log(min(2, 4)); */


/* Task-6 
Parametr kimi iki ədəd və riyazi əməliyyatın işarəsini qəbul edən və
bu riyazi əməliyyatın nəticəsini qaytaran calc funksiyasını yazın.
Məsələn, calc(4, 6, '+');  //  10 qaytaracaq */

/* function calc(a, b, operation) {
    switch (operation) {
        case "+": return a + b;
        case "-": return a - b;
        case "/": return a / b;
        case "*": return a * b;
        default: return "Yanlış əməliyyat!";
    }
}

console.log(calc(4, 6, "+"));
console.log(calc(4, 6, "-"));
console.log(calc(4, 6, "/"));
console.log(calc(4, 6, "*")); */


/* Task-7
Altı rəqəmli ədəd qəbul edən və ilk üç rəqəminin cəminin ikinci üç rəqəminin cəminə bərabər
olduğunu yoxlayan isLucky funksiyasını yazın.
Bilet uğurlu olarsa, funksiya true, uğursuz olarsa, false qaytarmalıdır.
Məsələn, isLucky(234801);  // true qaytaracaq */

/* function isLucky(number) {

    let firstPart = 0;
    let secondPart = 0;

    number = String(number);

    if (number.length !== 6) {
        console.log("Zəhmət olmasa 6 rəqəmli ədəd daxil edin");
        return false;
    }
    for (let i = 0; i < 3; i++) {
        firstPart += +number[i];
        secondPart += +number[i + 3];
    }
    const result = firstPart === secondPart;
    console.log(result);
    return result;
}

isLucky(234801); */

/* Task-8
Funksiya parametr kimi bir neçə sözdən ibarət mətn qəbul edir.
Funksiya geriyə eyni mətni qaytarmalıdır, lakin içindəki hər söz böyük hərflə başlamalıdır.
Məsələn, capitalizeWords('Hello my name is Harry'); // 'Hello My Name Is Harry' qaytaracaq. */

/* function capitalizeWords(word) {

    let newWord = "";
    let array = word.split(" ");
    for (let i = 0; i < array.length; i++) {
        newWord += array[i][0].toUpperCase() + array[i].slice(1) + " ";
    }
    return newWord.trim();
}

console.log(capitalizeWords("Hello my name is Harry")); */


/* 
Task-9
Bir ədədi parametr kimi qəbul edən və cüt olduqda true,
tək olduqda isə false qaytaran isEven() funksiyasını yazın. */

/* function isEven(number) {
    return Number(number % 2 === 0);
}

console.log(isEven(5)); */

/* 
Task-10 
Telefon nömrəsini parametr kimi qəbul edən ısvalidnumber() funksiyasını yazın.
Telefon nömrəsi 11 rəqəmdən ibarət olduqda və +7 ilə başladıqda, funksiya true qaytarır.
+7123456789 */

/* function isValidNumber(phoneNumber) {

    return phoneNumber.startsWith("+7") && phoneNumber.length === 12;
}

console.log(isValidNumber("+71234567890")); */

