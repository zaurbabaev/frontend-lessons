/* Depozitdən mənfəətin hesablanması üçün proqram yazın.
Proqram istifadəçidən əmanətin məbləğini, müddətini və
faiz dərəcəsini daxil etməsini istəyir və gözlənilən mənfəəti hesablayır. */

let mebleg = Number(prompt("Əmanətin məbləğini daxil edin"));
let muddet = Number(prompt("Müddəti daxil edin"));
let faiz = Number(prompt("İllik faiz dərəcəsini daxil edin"));

let menfeet = mebleg * (faiz / 100) * muddet;

alert(`Əmanətin məbləği ${mebleg} manat, müddət: ${muddet}, faiz dərəcəsi ${faiz} gözlənilən mənfəət ${menfeet}`)