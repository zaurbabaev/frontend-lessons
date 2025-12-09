/* İstifadəçinin soyadını və adını almaq üçün proqram tərtib edin.
Proqram bir mesajla istifadəçinin soyadını və adını daxil etməsini istəyir və
konsola «Salam, <ad>!» mesajını çıxarır. */

let fullName = prompt("Soyadınızı və adınızı daxil edin");

let fullNameArray = fullName.split(" ");

console.log(`Salam, <${fullNameArray[1]}>!`);
