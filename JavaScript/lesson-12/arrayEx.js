/** Task-8
Massivin bütün elementlərinin dəyərin ikiqat artırın.
5 rəqəmdən ibarət massiv yaradın.
Orijinal massivin surətini çıxarın və yeni massivin bütün elementlərini ikiqat artırın.
Orijinal massivin dəyişmədiyini yoxlayın.
 */

/** const arr = [2, 4, 6, 8, 10];
const newArr = arr.map((num) => num * 2);

console.log(arr);
console.log(newArr); */


/** Task-09
Proqramlaşma şöbəsinin işçilərini saxlayan massiv yaradın.
Şirkətin 10 işçisi haqqında məlumat olan massiv verilib. development massivi yaradın,
hansıki proqramlaşma şöbəsinin işçilərini özündə saxlayacaq,
yəni department özəlliyinin dəyəri «development» olan işçiləri.
*/
/** let employees = [
    ['Jaylee Macy', 'marketing'],
    ['John Smith', 'management'],
    ['Blossom Hartley', 'design'],
    ['Austin Carpenter', 'marketing'],
    ['Joan Knowles', 'development'],
    ['Sally Nunez', 'management'],
    ['Laurel Ward', 'development'],
    ['Lark Simon', 'marketing'],
    ['Jane Stone', 'management'],
    ['Courtney Olson', 'development'],
];

let development = [];
employees.forEach((emp) => {
    if (emp[1] === 'development') {
        development.push(emp[0]);
    }
});

console.log(development); */

/** Task-10
Elektron növbəni idarə etmək üçün proqram tərtib edin.
İstifadəçidən məlumat tələb edən və növbəni yeniləyən proqram tərtib edin.

- İstifadəçidən növbəni yeniləmək üçün məlumat tələb edin.
- Əgər istifadəçi yeni müştərinin ad və soyadını daxil edibsə,
proqram müştərini növbənin sonuna əlavə edir.
- İstifadəçi boş bir dəyər daxil edərsə, proqram növbədə birincinin adını və
 soyadını göstərir və onu növbədən çıxarır.
- İstifadəçi «=» işarəsini daxil edərsə, proqram dayanır və növbə massivini konsola çıxarır. */


/** const prompt = require("prompt-sync")();

const queue = [];

while (true) {
    let input = prompt("Zəhmət olmasa ad soyad daxil edin (çıxmaq üçün '='): => ");

    if (input === "=") {
        console.log("Program dayandırıldı.");
        console.log("Son növbə:", queue);
        break;
    }

    if (input === "") {
        if (queue.length === 0) {
            console.log("Növbə boşdur.");
        } else {
            let first = queue.shift();
            console.log("Növbədən çıxarılan", first);

        }
    } else {
        queue.push(input);
        console.log("Növbəyə əlavə olundu:", input);
    }

    console.log("Cari növbə:", queue);

} */

/** Task-11
Rəqəmlər massivini parametr kimi qəbul edən və həmin massivdən konsola
bütün mənfi ədədləri çıxaran funksiya yazın. */

/** let arr = [12, 2, 34, -30, -29, 12, -38, 0, -9];

let myFn = (array) => {
    array.forEach((num) => {
        if (num < 0) {
            console.log(num);
        }
    })
}

myFn(arr);

//! ------------------- VERSION - 2 -----------------

let filter = arr.filter((num) => num < 0);

console.log(filter); */



/** Task-12
Rəqəmlər massivini parametr kimi qəbuil edən və həmin massivdəki bütün müsbət
ədədləri konsola çıxaran funksiya yazın.
İterasiya üçün anonim funksiyadan istifadə edin. */

/** let arr = [12, 2, 34, -30, -29, 12, -38, 0, -9];

let newArr = arr.filter((num) => num > 0);

console.log(newArr); */


/** Task-13
Geri çağırış funksiyalarını yazın (callback) printWithDashes, printWithHearts, printWithIndex.
Massiv verilmişdir. 3 geri çağırış funksiyası yazın (callback): printWithDashes,
 printWithHearts, printWithIndex, hansıki onlar belə çağırılan zamanı
names.forEach(printWithDashes);
names.forEach(printWithHearts);
names.forEach(printWithIndex);
-array- const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];

OUTPUT:
kosnsolda çıxsın:

---

Michael

---

---

Trevor

---

---

Franklin

---

---

Lamar

---

---

Jimmy

---

<3<3<3<3 Michael <3<3<3<3
<3<3<3<3 Trevor <3<3<3<3
<3<3<3<3 Franklin <3<3<3<3
<3<3<3<3 Lamar <3<3<3<3
<3<3<3<3 Jimmy <3<3<3<3
0 - Michael
1 - Trevor
2 - Franklin
3 - Lamar
4 - Jimmy */

/** const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];

function printWithDashes(name) {
    console.log("---");
    console.log(name);
    console.log("---");
}
function printWithHearts(name) {
    console.log(`❤️❤️❤️❤️ ${name} ❤️❤️❤️❤️`);
}

function printWithIndex(name, index) {
    console.log(`${index} - ${name}`);
}

names.forEach(printWithDashes);
names.forEach(printWithHearts);
names.forEach(printWithIndex); */

/** Task-14
Kebab-case formatında mətni parametr kimi qəbul edən və onu UPPER_CASE mətninə
çevirən kebabToUpper funksiyasını yazın.
INPUT: console.log(kebabToUpper('first-user'));
OUTPUT: FIRST_USER

# MAP,FILTER,FIND
 */

/** let str = "dhad-djajdlk-kdlakd-kldalk-kldkal";


function kebabToUpper(str) {
    return str
        .split("-")
        .map(word => word.toUpperCase())
        .join("_");
}

console.log(kebabToUpper(str));

//! ------------------- VERSION - 2 -----------------

function kebabToUpper2(str) {
    let parts = str.split("-");
    let result = [];

    for (let i = 0; i < parts.length; i++) {
        result.push(parts[i].toUpperCase());
    }
    return result.join("_");
}

console.log(kebabToUpper2(str)); */


/** Task-15
Orijinal massivin elementlərindən ibarət yeni massiv yaradın.
Rəqəmlər massivi verilmişdir.
Aşağıdakı kimi dəyişdirilən orijinal massivin elementlərindən ibarət yeni massiv yaradın:

- mənfi ədədlər müsbət olublar;
- müsbət ədədlər ikiqat artırılıb.
  let numbers = [1, 5, -7, 3, -9, 4, -6, 2]; */

/** let numbers = [1, 5, -7, 3, -9, 4, -6, 2];

let result = [];
numbers.map((num) => {
    if (num < 0) {
        result.push(num *= -1);
    } else {
        result.push(num *= 2);
    }
});

console.log(numbers);

console.log(result); */

/**  Task-16
Mətnlər massivini parametr kimi qəbul edən və massivin ilk üç simvoldan
ibarət elementini qaytaran funksiya yazın. */

/** let arr = ["Hello", "JavaScript", "yes", "ok"];

function firstSymbol(array) {
    return array.map(text => text.slice(0, 3));
}


console.log(arr);
console.log(firstSymbol(arr)); */


/** Task-17
Adlar massivi verilib. A hərfi ilə başlayan orijinal massivdəki
elementlərdən ibarət yeni massiv yaradın. */

/** let arr = ["Zaur", "Vusal", "Arzu", "Arif", "Ilkin", "Amil"];

let res = [];
arr.filter((name) => {
    if (name.startsWith("A")) {
        res.push(name);
    }
})

console.log(res); */

/** Task-18
addTax() funksiyası yaradın. Verilmiş ƏDV-siz qiymətlərlə olan
price massivini ona ötürün. addTax() funksiyasının köməyi ilə ƏDV ilə
qiymətlərin daxil olduğu massiv yaradın və onu konsola çıxarın. ƏDV 20% təşkil edir. */


/* let prices = [100, 150, 145, 300, 80];

function addTax(prices) {
    return prices.map(price => price * 1.2);
}

console.log(addTax(prices)); */


/** Task-19
Rəqəmlər massivini parametr kimi qəbul edən və massivdə neçə tək və cüt ədədin
olması barədə məlumatı qaytaran countEvensAndOdds() funksiyasını yazın.
Numune: Funksiya «Massivdə 4 cüt və 2 tək ədəd var» formasında mesaj qaytarır. */

/* let numbers = [2, 3, 5, 6, 9, 10, 12, 24, 30, 31];
let evensCount = 0; // cut
let oddsCount = 0; // tek

numbers.filter((num) => {
    if (num % 2 === 0) {
        evensCount++
    }
    else {
        oddsCount++;
    }
});

console.log(`Massivdə ${evensCount} cüt və ${oddsCount} tək ədəd var.`);


function countEvensAndOdds(numbers) {
    let evens = numbers.filter(num => num % 2 === 0);
    let odds = numbers.filter(num => num % 2 === 1);

    return `Massivdə ${evens.length} cüt və ${odds.length} tək ədəd var.`;
}

console.log(countEvensAndOdds(numbers)); */

/** Task-20
Tam ədədlər massivini qəbul edən, onu artan ardıcıllıqla sıralayan və sıralanmış massivi geri
qaytaran sortArray funksiyasını yazın. */

/** let array = [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22];

function sortArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}



function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
console.log(sortArray(array)); */



/* let arr = [1, 2, 3, 4, 5, 8];

let result = arr.reduce((acc, num) => {
    num % 2 === 0 ? acc.evens++ : acc.odds++;
    return acc;
}, { evens: 0, odds: 0 });

console.log(result); */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let [first, second, ...restArray] = numbers;

console.log(first);
console.log(second);
console.log(restArray);













