/** Task 1
Üç addan ibarət massiv yaradın.
Massivin ikinci elementinin dəyərini “Classified” ilə əvəz edin.
Massivi konsola çıxarın. */

/** let arr = ["Zaur", "Vusal", "Nail"];

arr[1] = "Classified";
console.log(arr); */


/**
 Task -2
Massiv verilib. "Episode 4: New Hope" kimi mesajları ardıcıl olaraq konsola çıxarın.
Massiv elementlərin düzün.
let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi']; */
//*Episode 4: New Hope
//*Episode 5: Empire strikes back
//*Episode 6: Return of the Jdi

/** let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi'];

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
    let salarySum = 0;
    for (let i = 0; i < salary.length; i++) {
        for (let j = 0; j < salary[i].length; j++) {
            salarySum += salary[i][j];
        }
    }
    return salarySum
}


console.log(getAnnualSalary(salary));


function getMonthlySalary(month) {
    let salaryofMonth = [];
    for (let i = 0; i < salary.length; i++) {
        salaryofMonth.push(salary[i][month - 1]);
    }
    return salaryofMonth;
}

console.log(getMonthlySalary(12));

function getQuarterSalary(quarter) {

    let startMonth = (quarter - 1) * 3;
    let endMonth = (startMonth + 3);

    let sum = 0;

    for (let i = 0; i < salary.length; i++) {
        for (let j = startMonth; j < endMonth; j++) {
            sum += salary[i][j];
        }
    }
    return sum;
}

console.log(getQuarterSalary(1));



/** Task-4
İstifadəçidən beş ədəd elementi daxil etməyi tələb edən, onları massivə yazan və
ən kiçik ədədi konsola çıxaran proqram yazın. */

/* const prompt = require("prompt-sync")();
console.log("Zəhmət olamsa 5 ədəd daxil edin");

let arr = [];

for (let i = 0; i < 5; i++) {
    let number = +prompt(`Zəhmət olmasa  ${i + 1}ci ədədi daxil edin: => `)
    arr.push(number);
}

let min = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log("Minimum ədəd " + min); */


/** Task -5
Verilən mətn tip dəyərdəki vergülləri nöqtəli vergüllə əvəz edin.
'32, 31, 34, 36, 31' mətni verilmişdir ,İçindəki vergülləri nöqtəli
vergüllə əvəz edin.(Massivden istifade ederek)(join) */

/** let str = '32, 31, 34, 36, 31';
// let newStr = str.replaceAll(",", ";");
let result = str.split(", ").join("; ");

console.log(result); */

/** Task-6
Üç qrup yoldaşının adlarından ibarət massiv yaradın;
Başqa bir qrup yoldaşının adını massivin sonuna əlavə edin;
İlk adı silin;
Massivi konsola çıxarın. */

/** let students = ["Arif", "Ruslan", "Kenan"];
students.push("Musa");
students.shift();
console.log(students); */



