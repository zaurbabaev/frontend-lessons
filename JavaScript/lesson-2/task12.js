/* İstifadəçidən tam adı «AD SOYAD» formatında daxil etməyi xahiş edin. 
Tam adını konsola fərqli qaydada yəni «SOYAD AD» formatında çıxarın, */

let nameAndSurname = prompt("Adınızı və Soyadınızı daxil edin:");

console.log("---------- Version 1------------");

let surnameIndex = nameAndSurname.indexOf(" ");

let myName = nameAndSurname.substring(0, surnameIndex);

let surname = nameAndSurname.substring(surnameIndex);

console.log(`Salam,${surname} ${myName}\n`);



console.log("---------- Version 2------------");

let fullNameArray = nameAndSurname.split(" ");

console.log(`Salam, ${fullNameArray[1]} ${fullNameArray[0]}`);


