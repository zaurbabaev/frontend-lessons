/* Dəyişən dəyərini saniyə metrə çevirin və onu konsola çıxarın.
kmhSpeed dəyişəni avtomobilin sürətinin "saatda kilometrlərlə"
dəyərini saxlayır. msSpeed dəyişəni təyin edin və
ona eyni sürət dəyərini "saniyədə metrə" çevirərək yazın. */

let kmhSpeed = 75;
let kmToMetr = 1000;
let hourToSecond = 60 * 60;

let msSpeed = kmhSpeed * kmToMetr / hourToSecond;

console.log(msSpeed.toFixed(2));

