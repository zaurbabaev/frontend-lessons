/* İstifadəçi tərəfindən daxil edilmiş tarixin təsvirini çıxarın.
İstifadəçidən tarixi «2009.12.19» formatında daxil etməyi xahiş edin.
Tarixin təsvirini «19 Dekabr 2009-cu il» formatında çıxarın.
Daxil edilmiş dəyərə validator əlavə edin.
İstifadəçi səhv formatda dəyər daxil edərsə, «Yanlış dəyər daxil edilib» bildirişi göstərin. */

let date = prompt("Tarix daxil edin: (Format YYYY.MM.DD)");
let monthArray = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentybr", "Oktyabr", "Noyabr", "Dekabr"];
let dateArray = date.split(".");

let findMonth = Number(date.slice(5, 7));

console.log(findMonth);



/* if (findMonth >= 1 && findMonth <= 12)
    alert(`${dateArray[2]} ${monthArray[findMonth - 1]} ${dateArray[0]} - cu il`); */


console.log("------------ VERSION 2 ---------------\n");


if (!date || date.length !== 10 || date[4] !== "." || date[7] !== ".") {
    alert("Yanlış dəyər daxil edilib");
} else {

    let year = Number(dateArray[0]);
    let month = Number(dateArray[1]);
    let day = Number(dateArray[2]);

    if (isNaN(year) || isNaN(month) || isNaN(day)) {
        alert("Yanlış dəyər daxil edilib");
    } else if (year < 1 || month < 1 || month > 12 || day < 1 || day > 31) {
        alert("Yanlış dəyər daxil edilib");
    } else {
        alert(`${day} ${monthArray[month - 1]} ${year}-cu il`);
    }
}

