let date = "2025.12.04";

let dateArray = date.split(".");

console.log(dateArray);

console.log("---------- SLICE() ------------");


let jsExample = "JavaScript";
let today = "2025.12.04";

let sliceExample1 = jsExample.slice(0, 4);
let sliceExample2 = today.slice(5, 7);

console.log(sliceExample1);
console.log(sliceExample2);

console.log("---------- INCLUDES() ------------");

console.log("Hello world".includes("world"));
console.log("Hello world".includes("hi"));

console.log("---------- SEARCH() ------------");

console.log("JavaScript".search("Script"));


console.log("---------- INDEXOF() ------------");
console.log("banana".indexOf("na"));

console.log("-------- LASTINDEXOF() ----------");
console.log("banana".lastIndexOf("na"));


console.log("---------- REPLACE() ------------");
console.log("hello word".replace("o", "0"));

console.log("---------- REPLACEALL() ------------");
console.log("hello word".replaceAll("o", "0"));

console.log("---------- SUBSTRING() ------------");
console.log("JavaScript".substring(0, 4));
console.log("JavaScript".substring(4));
console.log("JavaScript".substring(4, 0));

console.log("---------- TRIM() ------------");
console.log("     Hello     ".trim());

