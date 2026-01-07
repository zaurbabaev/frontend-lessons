"use strict"
/* const tabs = document.querySelectorAll(".phone nav ul li");
const images = document.querySelectorAll(".phone img");



tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));

        images.forEach(img => img.classList.remove("show"));

        tab.classList.add("active");

        images[index].classList.add("show");
    });
}); */


/* const tabs = document.querySelectorAll(".phone nav ul li");
const images = document.querySelectorAll(".phone img");

tabs.forEach((tab, index) => {

    tab.addEventListener("click", () => {


        tabs.forEach(t => t.classList.remove("active"));
        images.forEach(img => img.classList.remove("show"));

        tab.classList.add("active");

        images[index].classList.add("show");
    });
}); */


const tabs = document.querySelectorAll(".phone nav ul li");
const images = document.querySelectorAll(".phone img");

tabs.forEach((tab, index) => {

    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        images.forEach(img => img.classList.remove("show"));

        tab.classList.add("active");

        images[index].classList.add("show");
    });
});