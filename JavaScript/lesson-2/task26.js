/* İstifadəçidən bir il daxil etməsini soruşun və ilin uzun il olub olmadığını yoxlayın.  
Uzun il 4-ə qalıqsız bölünən ildir.  
Daxil edilmiş il uzun ildirsə, konsola mesaj cıxarın.  
«İl uzun il deyil» və ya «İl uzun ildir» mesajını çıxarın.
 */

let isLeapYear = prompt("Il daxil edin: ");

console.log("----------- VERSION 1 ----------------");

if (isLeapYear % 4 == 0) {
    alert("İl uzun ildir");
} else {
    alert("Il uzun il deyil");
}

console.log("----------- VERSION 2 ----------------");

alert(isLeapYear % 4 == 0 ? "Il uzun ildir" : "Il uzun il deyil");