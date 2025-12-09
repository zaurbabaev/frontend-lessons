/* İstifadəçidən soyad, ad və ata adını istəyən,
soyadı və baş hərfləri konsola çıxaran proqram tərtib edin.
Məsələn, «İvanov Pyotr Sergeevich» — «İvanov P.S.». */

let fullName = prompt("Ad soyad və ata adını daxil edin:");

console.log("-------------VERSION 1-----------\n");

let fullNameArray = fullName.split(" ");
let surname = fullNameArray[0];
let name = String(fullNameArray[1]).charAt(0);
let fatherName = String(fullNameArray[2]).charAt(0);

console.log(`<${surname} ${name}.${fatherName}.>.`);

console.log("-------------VERSION 2-----------\n");

name = fullNameArray[1].toString()[0];
fatherName = fullNameArray[2].toString()[0];
console.log(`<${surname} ${name}.${fatherName}.>.`);


