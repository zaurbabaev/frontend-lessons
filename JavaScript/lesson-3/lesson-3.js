let num = 10;

num += 5;

console.log(num);

num /= 5;
console.log(num);

num **= 5;
console.log(num);

num = 10;
let b = 10;

num += 5 - 10 / (50 + b);
console.log(num.toFixed(2));


let num1 = "15";
let num2 = 15;
console.log(num1 == num2);
console.log(num1 === num2);


let username = prompt("Enter username...");

if (username === "Admin") {
    let password = prompt("Enter Password..."); //12345
    if (password === "12345") {
        alert("Welcome to Dashboard!")
    } else {
        alert("Wrong Password");
    }
} else {
    alert("Access Denied!");
}