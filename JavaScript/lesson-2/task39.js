/* 0-50 Arasında Təsadüfi Ədəd
0 ilə 100 arasında Math.random() ilə təsadüfi ədəd yaradın və onun 0-50 arasında olub olmadığını yoxlayın.
 */

let randomNumber = Math.random() * 100;

let getRandomNumber = Number(randomNumber.toFixed(0));

if (getRandomNumber >= 0 && getRandomNumber <= 50) {
    console.log(`${getRandomNumber} daxil etdiniz`);
} else {
    console.log(`${getRandomNumber} ədədi 0-50 aralığında deyil.`);
}



console.log("--------------- VERSION 2----------------");
switch (true) {
    case (getRandomNumber >= 0 && getRandomNumber <= 50): console.log(`${getRandomNumber} daxil etdiniz`); break;
    default: console.log(`${getRandomNumber} ədədi 0-50 aralığında deyil.`);

}