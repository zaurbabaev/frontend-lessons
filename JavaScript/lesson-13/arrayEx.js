/* let list = ["Book1", "Book", "Book3", "User1"];

let newArray = list.map(item => item.length)

console.log(newArray); */

let arr1 = ["Murad", "Arif", "Zaur", "Rena", "Lamiye"];
let arr2 = [45, 89, -100, 1000, 1, 50];
let arr3 = ["ə", "ı", "ö", "ğ", "ü"];
let arr4 = [
    {
        age: 25,
        name: "Murad"
    },
    {
        age: 25,
        name: "Arif"
    },
    {
        age: 27,
        name: "Zaur"
    },
    {
        age: 23,
        name: "Lamiye"
    }
]

arr1.sort();
arr2.sort((a, b) => a - b);
arr3.sort((a, b) => a.localeCompare(b));
arr4.sort((a, b) => a.name.length - b.name.length);

let result = arr1.reduce((acc, item) => acc + item);

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(result);

