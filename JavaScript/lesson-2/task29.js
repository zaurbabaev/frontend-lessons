/* Ayın adını mətnlə konsola yazdıran bir program yazın.
İstifadəçidən ayın nömrəsini soruşun və adını konsola çıxarın. */

let month = prompt("Ayın nömrəsini daxil edin:");
let monthArray = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentybr", "Oktyabr", "Noyabr", "Dekabr"];

console.log("----------- VERSION 1 ----------------");

switch (month) {
    case "1": alert(`Siz ${monthArray[0]} ayını daxil etdiniz`); break;
    case "2": alert(`Siz ${monthArray[1]} ayını daxil etdiniz`); break;
    case "3": alert(`Siz ${monthArray[2]} ayını daxil etdiniz`); break;
    case "4": alert(`Siz ${monthArray[3]} ayını daxil etdiniz`); break;
    case "5": alert(`Siz ${monthArray[4]} ayını daxil etdiniz`); break;
    case "6": alert(`Siz ${monthArray[5]} ayını daxil etdiniz`); break;
    case "7": alert(`Siz ${monthArray[6]} ayını daxil etdiniz`); break;
    case "8": alert(`Siz ${monthArray[7]} ayını daxil etdiniz`); break;
    case "9": alert(`Siz ${monthArray[8]} ayını daxil etdiniz`); break;
    case "10": alert(`Siz ${monthArray[9]} ayını daxil etdiniz`); break;
    case "11": alert(`Siz ${monthArray[10]} ayını daxil etdiniz`); break;
    case "12": alert(`Siz ${monthArray[11]} ayını daxil etdiniz`); break;
    default: alert(`Sizin daxil etdiyiniz ay yoxdur`);
}


console.log("----------- VERSION 2 ----------------");

if (month >= 1 && month <= 12) {
    alert(`Siz ${monthArray[month - 1]} ayını daxil etdiniz`);
} else {
    alert(`Sizin daxil etdiyiniz ay yoxdur`);
}
