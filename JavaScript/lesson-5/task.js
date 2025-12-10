// const prompt = require("prompt-sync")();

// let number = Number(prompt("Zəhmət olmasa ədəd daxil edin: => "));

// for (let n = number; n > 1; n--) {
//     let count = 0;

//     for (let i = n; i > 0; i--) {
//         if (n % i === 0) {
//             count++;
//         }
//     }
//     if (count === 2) {
//         console.log(n);
//     }
// }

// let n = 43;


// while (n > 1) {

//     let i = n;
//     let count = 0;

//     while (i > 0) {
//         if (n % i === 0) {
//             count++;
//         }
//         i--;
//     }
//     if (count === 2) {
//         console.log(n);
//     }
//     n--;
// }


//F(n) = F(n-1) + F(n-2)


// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(number));

// const prompt = require("prompt-sync")();

// let number = Number(prompt("Zəhmət olmasa ədəd daxil edin: => "));

// let a = 0;
// let b = 1;

// for (let i = 0; i < number; i++) {
//     console.log(a);
//     let next = a + b;
//     a = b;
//     b = next;
// }

// nums = [2,7,11,15], target = 9

// let array = [2, 7, 11, 15];
// let target = 18;
// for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//         if (array[i] + array[j] === target) {
//             console.log(i, j);
//         }
//     }
// }


/* Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807. */

// let array1 = [2, 4, 3];
// let array2 = [5, 6, 4];

// let reversedArray1 = [];
// let reversedArray2 = [];

// for (let i = 0; i < array1.length; i++) {
//     reversedArray1[i] = array1[array1.length - 1 - i];
// }

// let firstArray = reversedArray1.join("");


// for (let i = 0; i < array2.length; i++) {
//     reversedArray2[i] = array2[array2.length - 1 - i];
// }

// let secondArray = reversedArray2.join("");

// let sumArrays = +firstArray + +secondArray;

// console.log(sumArrays);

// let arraySum = sumArrays.toString().split("").map(Number);

// let sumReversed = [];

// for (let i = 0; i < arraySum.length; i++) {
//     sumReversed[i] = arraySum[arraySum.length - 1 - i];

// }
// console.log(sumReversed);