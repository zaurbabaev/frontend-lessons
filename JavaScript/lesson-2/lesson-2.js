/* const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    alert("click edildi");
}) */

let str1 = "Salam mən Zaur";
console.log(str1);

let str2 = 'Salam mən Zaur';
console.log(str2);

let str3 = "Salam mən 'Zaur'";
console.log(str3);

let str4 = "Salam mən \"Zaur\"";
console.log(str4);

let str5 = `Salam mən \`Zaur\``;
console.log(str5);

let userName = "Kamil";
let str6 = `Salam mən ${userName}`;
console.log(str6);

let strConvertion1 = "256";
let strToNum = Number(strConvertion1);
console.log(strToNum);
console.log(typeof strToNum)

let strConvertion2 = "a";
let strToNum2 = Number(strConvertion2);
console.log(strToNum2);
console.log(typeof strToNum2)

let strConvertion3 = "  ";
let strToBoolean = Boolean(strConvertion3);
console.log(strToBoolean);
console.log(typeof strToBoolean)

let strConvertion4 = "";
let strToNumber = Number(strConvertion4);
console.log(strToNumber);
console.log(typeof strToNumber)

let numberToBoolean1 = 12;
let numberToBoolean2 = -3;
let numberToBoolean3 = 0;
console.log(Boolean(numberToBoolean1));
console.log(Boolean(numberToBoolean2));
console.log(Boolean(numberToBoolean3));


let und = undefined;
console.log(String(und));
console.log(Number(und));
console.log(Boolean(und));
