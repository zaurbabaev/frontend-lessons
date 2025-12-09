/* Sadə Kalkulyator (switch-case)
İki ədəd və operator (+, -, *, /) verilib. switch-case ilə əməliyyatı icra edin.
let a = 5, b = 3, op = "*"; */

let a = 6;
let b = 0;
let op = "/";

let result = 0;
switch (op) {

    case "+": result = a + b; break;
    case "-": result = a - b; break;
    case "*": result = a * b; break;
    case "/": result = b !== 0 ? a / b : "0-a bölmək olmaz"; break;
    case "%": result = b !== 0 ? a % b : "0-a bölmək olmaz"; break;
    default: result = "Incorrect operator";
}
console.log(result);



console.log("------------VERSION 2---------------");

let firstNumber = Number(prompt("Enter first number"));
let secondNumber = Number(prompt("Enter second number"));
let operation = prompt("Enter operation");

let myResult = 0;
switch (operation) {

    case "+": myResult = Number(firstNumber) + Number(secondNumber); break;
    case "-": myResult = firstNumber - secondNumber; break;
    case "*": myResult = firstNumber * secondNumber; break;
    case "/": myResult = secondNumber !== 0 ? firstNumber / secondNumber : "0-a bölmək olmaz"; break;
    case "%": myResult = secondNumber !== 0 ? firstNumber % secondNumber : "0-a bölmək olmaz"; break;
    default: myResult = "Incorrect operator";
}
alert(`${firstNumber} ${operation} ${secondNumber} = ${myResult}`);