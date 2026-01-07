/** Task1
HTML-kod verilmişdir. Siyahının ilk elementini konsola çıxarın. */

/* console.log(document.querySelector("li"));

console.log(document.querySelector("ul li"));

console.log(document.querySelector("ul li:nth-child(1)"));

console.log(document.querySelectorAll("li")[0]);

console.log(document.getElementsByTagName("li")[0]);

console.log(document.querySelector("ul li:first-child")); */

/** Task2
HTML-kod verilmişdir. Yalnız JS-kodundan istifadə edərək dəyişklik edin:
- Başlığı silin;
- Siyahının sonuna mətn ilə yeni bir bölmə «TITAN RTX» əlavə edin . */

/* document.querySelector("h1").remove();

const ulList = document.querySelector("ul");
const newLi = document.createElement("li");
newLi.innerText = "TITAN RTX";

ulList.append(newLi); */


/** Task3
HTML-kod verilmişdir. Yalnız JS-kodundan istifadə edərək dəyişklik edin:
- başlıq mətnini «GeForce 20 Series» -a;
- fon rəngi stili primary klası olan elementləri #ebebeb rənginə dəyişdirin. */

/* const h1 = document.querySelector("h1");
h1.innerText = " GeForce 20 Series";

const primaryClasses = document.querySelectorAll(".primary");
primaryClasses.forEach(s => {
    s.style.background = "#ebebeb";
}); */

/* const h1 = document.querySelector("h1");
h1.innerText = "GeForce 20 Series";

const primaryClasses = document.querySelectorAll(".primary");
primaryClasses.forEach(el => {
    el.classList.add("grey-bg");
}); */


/** Task 4
HTML-kodu verilib. Siyahının primary klasına sahib olan bütün elementlərini konsola çıxarın. */

/* const primaryClasses = document.querySelectorAll("li.primary");
primaryClasses.forEach(el => console.log(el)); */


/** Task-5
HTML-kod verilmişdir. Yalnız JS kodundan istifadə edərək sinifləri dəyişdirin:
- bütün siyahı elementlərinə item sinifi əlavə edin;
- siyahıda primary sinfi olmayan elementlərə secondary sinfi əlavə edin. */

const ulList = document.querySelectorAll("ul li");
ulList.forEach(el => {
    if (!el.classList.contains("primary")) {
        el.classList.add("secondary");
    }
    el.classList.add("item");
})

// ---------------------------VERSION 2-----------------------------------------------

document.querySelectorAll("ul li").forEach(li => {

    if (!li.classList.contains("primary")) {
        li.classList.add("secondary");
    }
    li.classList.add("item");

});


