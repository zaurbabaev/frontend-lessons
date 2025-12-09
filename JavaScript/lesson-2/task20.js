/* Vergi nəzərə alınmadan əmək haqqı məbləğini hesablayan proqram tərtib edin.
Proqram istifadəçidən əmək haqqı məbləğin soruşur və
13% vergi istisna olmaqla məbləği konsola çıxarır. */


let salary = prompt("Əmək haqqınızı daxil edin:");
let tax = salary * 0.13;

let netSalary = salary - tax;

console.log(`Salary: ${salary}`);
console.log(`Tax sum: ${tax}`);
console.log(`Net salary: ${netSalary}`);
