/** Task 1
Üç addan ibarət massiv yaradın.
Massivin ikinci elementinin dəyərini “Classified” ilə əvəz edin.
Massivi konsola çıxarın. */

/* const stud = ["Arif", "Hesen", "Kenan"];
stud[1] = "Classified";
console.log(stud); */


/**
 Task -2
Massiv verilib. "Episode 4: New Hope" kimi mesajları ardıcıl olaraq konsola çıxarın.
Massiv elementlərin düzün.
let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi']; */
//*Episode 4: New Hope
//*Episode 5: Empire strikes back
//*Episode 6: Return of the Jdi

/* let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi'];

for (let i = 0; i < arr.length; i++) {
    console.log(`Episode ${i + 4}: ${arr[i]}`);
} */



/** Task-3 
Şöbə işçilərinin əmək haqqını təhlil etmək üçün proqram tərtib edin.
Şöbədə müxtəlif maaşlarla 10 nəfər çalışır. Şöbə işçilərinin əmək haqlarını təhlil etmək
üçün proqram tərtib edin.
 - Bütün bir departamentin bir il üçün ümumi maaşlarının cəmini qaytaran bir funksiya yazın.
salary massivi əsasında il ərzində bütün işçilərin maaşlarının cəmini qaytaran
 getAnnualSalary() funksiyasını yazın.
- Ay nömrəsinə görə işçilərin aylıq maaşlarını massiv halında almaq üçün funksiya yazın.
Ayın nömrəsini parametr kimi qəbul edən və salary massivindən
 həmin ay üçün işçi maaşlarını massiv halında qaytaran getMonthlySalary() funksiyasını yazın.
Ayın nömrəsi elementin indeks nömrəsi ilə eyni deyil.
- Rüb ərzində maaşların ümumi cəmini qaytaran funksiya yazın.
Parametr kimi rübün rəqəmini (1, 2, 3 və ya 4) qəbul edən və
 salary massivi əsasında həmin rüb üçün şöbənin bütün
işçilərinin maaşlarının cəmini qaytaran getQuarterSalary() funksiyasını yazın.
Rüb - 3 aylıq bir müddətdir.  
yanvar fevral mart
aprel may iyun
iyul avqust sentyabr
oktyabr noyabr dekabr*/

let salary = [
    [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
    [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
    [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
    [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75],
];

function getAnnualSalary(salary) {
    let sum = 0;
    for (let i = 0; i < salary.length; i++) {
        for (let j = 0; j < salary[i].length; j++) {
            sum += salary[i][j];
        }
    }
    return sum;
}

console.log(getAnnualSalary(salary));

function getMonthlySalary(month) {
    let arr = [];
    // let arr2 = [];
    for (let i = 0; i < salary.length; i++) {
        arr[i] = salary[i][month - 1];
        // arr2.push(salary[i][month - 1]);
    }
    return arr;
}

console.log(getMonthlySalary(1));

function getQuarterSalary(quarter) {
    let start = (quarter - 1) * 3;
    let end = start + 3;

    let sum = 0;
    for (let i = 0; salary.length; i++) {
        for (let j = start; j < end; j++) {
            sum += salary[i][j];
        }
    }
    return sum;
}

console.log(getQuarterSalary(2));



/** Task-4
İstifadəçidən beş ədəd elementi daxil etməyi tələb edən, onları massivə yazan və
ən kiçik ədədi konsola çıxaran proqram yazın. */

/* const prompt = require("prompt-sync")();

const numbers = prompt("Zəhmət olmasa 5 ədəd daxil edin => ");

let splitArr = numbers.split(" ").map(Number);

console.log(splitArr);

let min = splitArr[0];

for (let i = 1; i < splitArr.length; i++) {
    if (splitArr[i] < min) {
        min = splitArr[i]
    }
}

console.log(min); */





/** Task -5
Verilən mətn tip dəyərdəki vergülləri nöqtəli vergüllə əvəz edin.
'32, 31, 34, 36, 31' mətni verilmişdir ,İçindəki vergülləri nöqtəli
vergüllə əvəz edin.(Massivden istifade ederek)(join) */

/* let str = '32, 31, 34, 36, 31'.split(',').join(';');

console.log(str); */


/** Task-6
Üç qrup yoldaşının adlarından ibarət massiv yaradın;
Başqa bir qrup yoldaşının adını massivin sonuna əlavə edin;
İlk adı silin;
Massivi konsola çıxarın. */

/* const str = ["Yusif", "Hesen", "kenan"];
str.push("Vusal");
str.shift();
console.log(str); */



