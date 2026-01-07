/* console.log(document);

console.log(document.querySelector("h1"));
document.getElementsByTagName 
document.getElementsByClassName */

/* const title1 = document.querySelector("h1");
console.log(title1);

console.log(title1.innerText); */

const title1 = document.querySelector("#heading-1");
console.log(title1.innerText);


const collect = document.getElementsByTagName("h1");
console.log(collect);


const byClass = document.querySelectorAll(".display-4");
console.log(byClass);


const h1Elem = document.querySelector("h1");
const newSpan = document.createElement("span");
newSpan.innerText = " - 2026";
h1Elem.append(newSpan);


const list2 = document.querySelector("#list-2");
const newLi = document.createElement("li");
newLi.innerText = "New li element";
const liElement = document.querySelector("#list-2 li:nth-child(2)");
list2.insertBefore(newLi, liElement);

list2.style.background = "red";
list2.firstElementChild.innerText = "Hello";

const list = document.getElementById("list-2");
list.remove();