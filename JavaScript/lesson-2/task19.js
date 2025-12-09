// Qiyməti mətn halına salan proqram tərtib edin.
// İstifadəçidən «530.90» formatında qiymət daxil etməyi xahiş edən və
// qiyməti «530 manat 90 qəpik» formatında konsola çıxaran proqram tərtib edin.

let number = prompt("Ədəd daxil edin:");


let priceArray = number.split(".");

console.log(`${priceArray[0]} manat ${priceArray[1]} qəpik`);
