/** Task-1
HTML-kod verilmişdir. Siyahının ilk elementini konsola çıxarın. */

/* const firstElem = document.querySelector("li");
console.log(firstElem); */

/** Task-2
HTML-kod verilmişdir. Yalnız JS-kodundan istifadə edərək dəyişklik edin:
- Başlığı silin;
- Siyahının sonuna mətn ilə yeni bir bölmə «TITAN RTX» əlavə edin . */

/* const getH1 = document.querySelector("h1");

getH1.remove();


const ulElem = document.querySelector("ul");
const newLi = document.createElement("li");
newLi.innerText = "TITAN RTX";
ulElem.append(newLi); */

/** Task-3
HTML-kod verilmişdir. Yalnız JS-kodundan istifadə edərək dəyişklik edin:
- başlıq mətnini «GeForce 20 Series» -a;
- fon rəngi stili primary klası olan elementləri #ebebeb rənginə dəyişdirin. */

/* const getH1 = document.querySelector("h1");
getH1.innerText = "GeForce 20 Series"

const allPrimarys = document.querySelectorAll(".primary");
console.log(allPrimarys);

allPrimarys.forEach(item => {
    item.style.background = "#ebebeb";
}) */

/** Task-4
HTML-kodu verilib. Siyahının primary klasına sahib olan bütün elementlərini konsola çıxarın. */

/* const allPrimarys = document.querySelectorAll(".primary");

allPrimarys.forEach(e => {
    console.log(e);
}
) */


/** Task-5
HTML-kod verilmişdir. Yalnız JS kodundan istifadə edərək sinifləri dəyişdirin:
- bütün siyahı elementlərinə item sinifi əlavə edin;
- siyahıda primary sinfi olmayan elementlərə secondary sinfi əlavə edin. */

const allLi = document.querySelectorAll("li");

allLi.forEach(elem => {
    elem.classList.add("item");
    if (!elem.classList.contains("primary")) {
        elem.classList.add("secondary");
    }
})



