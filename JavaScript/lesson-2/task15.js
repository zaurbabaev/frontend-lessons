/* 12345 və 98765 ədədlərinin hasilindən alınan nəticənin 6 - cı rəqəmini tapan proqram yazın. */

let firstNumber = 12345;
let secondNumber = 98765;

let sum = firstNumber * secondNumber;

console.log(sum);

console.log("------------VERSION 1------------\n");

let sixthNumber = String(sum).charAt(5);

console.log(sixthNumber);


console.log("------------VERSION 2------------\n");

sixthNumber = String(sum)[5];

console.log(sixthNumber);


console.log("------------VERSION 3------------\n");

sixthNumber = sum.toString()[5];

console.log(sixthNumber);

