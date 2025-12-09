/* İstifadəçidən yaşını soruşun.
Əgər yaşı 18-dən azdırsa, o zaman brauzerdə «Access denied» bildirişi çıxarın.
Əks halda «Access granted» bildirişini çıxarın. */

let age = Number(prompt("Yaşınızı daxil edin: "));

console.log("----------- VERSION 1 ----------------");

if (age >= 18) {
    alert("Access granted");
}
else {
    alert("Access denied");

}

console.log("----------- VERSION 2 ----------------");


alert(age >= 18 ? "Access granted" : "Access denied");


