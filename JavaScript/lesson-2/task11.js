/* İstifadəçinin adını və soyadını boşluqlarla ayıraraq fullName dəyişəninə yazın. 
fullName dəyişəninin dəyərindən istifadə edərək istifadəçinin baş hərflərini 
konsola çıxaran proqram yazın. */

console.log("---------------VERSION 1------------");

let fullName = "Zaur Babayev";

let firstLetter = fullName[0];

let indexOfSpace = fullName.indexOf(" ");
let secondLetter = fullName[indexOfSpace + 1];


console.log(`First letter is ${firstLetter} second letter is ${secondLetter}\n`);


console.log("---------------VERSION 2------------");

let fullNameArray = fullName.split(" ");
console.log(`First letter is ${fullNameArray[0].slice(0, 1)} second letter is ${fullNameArray[1].slice(0, 1)}\n`);

console.log("---------------VERSION 3------------");

console.log(`First letter is ${String(fullNameArray[0]).substring(0, 1)} second letter is ${String(fullNameArray[1]).substring(0, 1)}`);





