/* İstifadəçinin doğum tarixini soruşan və bu günə qədər yaşadığı
günlərin sayını göstərən proqram yazın. */

let birthDate = prompt("Doğum tarixinizi daxil edin (YYYY-MM-DD) formatında");

let userDate = new Date(birthDate);

let today = new Date();

let diffMs = today - userDate;

let diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

alert(`Bu günə qədər ${diffDays} gün yaşamısınız`);