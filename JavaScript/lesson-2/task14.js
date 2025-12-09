/* İstifadəçidən iki ayrı prompt əmri ilə iki ədəd daxil etməsini istəyin.
Bu ədədlərin toplama, çıxma, vurma və bölməsinin nəticələrin konsola 
alt-alta 4 sətir olaraq çıxarın. */

let firstNumber = Number(prompt("Birinci rəqəmi daxil edin"));
let secondNumber = Number(prompt("Ikinci rəqəmi daxil edin"));

let addition = firstNumber + secondNumber;
let subtraction = firstNumber - secondNumber;
let multiplication = firstNumber * secondNumber;
let division = firstNumber / secondNumber;
console.log(`${addition} \n ${subtraction} \n ${multiplication} \n ${division.toFixed(2)}`);

