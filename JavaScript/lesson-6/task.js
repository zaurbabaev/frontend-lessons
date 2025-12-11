/* Stringi tərsinə çevir

Input: "hello"
Output: "olleh" */

/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa söz daxil edin: => ");

let reversedStr = "";

let strLength = str.length;
for (let i = 0; i < strLength; i++) {
    reversedStr += str[strLength - 1 - i];
}

console.log(reversedStr); */

/* ## 2. Stringdə saitlərin sayını tap

Input: "education"
Output: 5 */


/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa söz daxil edin: => ").toLowerCase();

let sait = ['a', 'e', 'i', 'o', 'u'];


let count = 0;

for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < sait.length; j++) {
        if (str[i] === sait[j]) {
            count++;
        }
    }
}

console.log(count); */


/* ## 3. Stringdə samitlərin sayını tap

Input: "banana"
Output: 3 (b, n, n) */

/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa söz daxil edin: => ").toLowerCase();

let sait = "aeiou";


let count = 0;

for (let i = 0; i < str.length; i++) {
    if (!sait.includes(str[i])) {
        count++;
    }
}

console.log(count); */


/* ## 4. Verilmiş hərfin neçə dəfə təkrarlanması

Input: "programming", letter = "g"
Output: 2 */

/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa söz daxil edin: => ").toLowerCase();

let letter = prompt("Zəhmət olmsa axtarılacaq hərfi daxil di: => ").toLowerCase();

let count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
        count++;
    }
}

console.log(`Hərf "${letter}" sözündə ${count} dəfə təkrarlanır.`);*/

/* ## 6. Boşluqların sayını tap

Input: "hello world js code"
Output: 3 */

/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa söz daxil edin: => ").toLowerCase();

let count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
        count++;
    }
}

console.log(`"${str}" sözündə ${count} boşluq var `); */


/* ## 7. Sözləri tərsinə çevir (söz-söz)

Input: "hello world"
Output: "world hello" */

/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa söz daxil edin: => ").toLowerCase();

let reversedStr = "";

for (let i = 0; i < str.length; i++) {
    reversedStr += str[str.length - 1 - i];
}

console.log(reversedStr); */


/* ## 8. Stringin hər bir hərfini ayrıca sətirə yaz

Input: "abc"
Output:
a
b
c */

/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa söz daxil edin: => ").toLowerCase();

for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
} */


/* ## 9. Ən uzun sözü tap

Input: "I love programming in JavaScript"
Output: "programming"     */

/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa söz daxil edin: => ").toLowerCase();

let strArray = str.split(" ");


let longestWord = "";

for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].length > longestWord.length) {
        longestWord = strArray[i];
    }
}

console.log(longestWord); */


/* ## 10. Hər iki sözün eyni olub olmadığını yoxla

Input: "Hello", "hello"
Output: TRUE (case-insensitive) */

/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa 2 söz daxil edin və aralarında vergül qoyun: => ");

let arr = str.split(",");

let firstWord = arr[0].trim().toLowerCase();
let secondWord = arr[1].trim().toLowerCase();

console.log(firstWord === secondWord ? "TRUE" : "FALSE"); */


/* ## 11. Verilmiş stringi yalnız hərflərlə filtrlə

Input: "ab12c3**d"
Output: "abcd" */

/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa söz daxil edin: => ");

let findStr = str.replace(/[^a-zA-Z]/g, "");


console.log(findStr); */


/* ## 12. Verilmiş stringi yalnız rəqəmlərlə filtrlə

Input: "a11b2c9"
Output: "1129" */

/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa söz daxil edin: => ");

let digits = str.replace(/\D/g, "");

console.log(digits); */


/* ## 13. Stringdəki böyük hərflərin sayını tap

Input: "HeLLo JS"
Output: 4 */

/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa söz daxil edin: => ");


let count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
        count++;
    }
}

console.log(count); */


/* ## 14. Stringdəki kiçik hərflərin sayını tap

Input: "HeLLo JS"
Output: 3 */

/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa söz daxil edin: => ");


let count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
        count++;
    }
}

console.log(count); */

/* ## 15. Verilmiş stringdə neçə söz olduğunu tap

Input: "hello world from js"
Output: 4 */

/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa söz daxil edin: => ");

let arr = str.split(" ");

console.log(arr.length); */

/* ## 16. Verilən hərfi stringdən sil

Input: string = "banana", remove = "a"
Output: "bnn" */

/* let word = "banana";

let letter = "a";

let newWord = "";

for (let i = 0; i < word.length; i++) {
    if (word[i] !== letter) {
        newWord += word[i];
    }
}

console.log(newWord); */

/* ## 17. Cümlədəki sözləri böyük hərflə başlat

Input: "hello world"
Output: "Hello World" */

/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa söz daxil edin: => ");

let newWord = "";

newWord += str[0].toUpperCase();

for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
        newWord += str[i].toUpperCase();
    } else {
        newWord += str[i];
    }
}

console.log(newWord); */


/* ## 18. Stringdə ardıcıl ən uzun hərf seriyasını tap

Input: "aaabbccccd"
Output: "cccc" */

/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa söz daxil edin: => ");

let maxChar = "";
let maxLength = "";

let currentChar = "";
let currentLength = "";


for (let i = 0; i < str.length; i++) {

    if (str[i] === currentChar) {
        currentLength++;
    } else {
        currentChar = str[i];
        currentLength = 1;
    }
    if (currentLength > maxLength) {
        maxLength = currentLength;
        maxChar = currentChar;
    }

}

console.log(maxChar.repeat(maxLength)); */



/* ## 19. Palindrome olub-olmadığını yoxla

Input: "level"
Output: TRUE */

/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa söz daxil edin: => ");

let reversedStr = "";

for (let i = 0; i < str.length; i++) {
    reversedStr += str[str.length - i - 1];
}

console.log(str === reversedStr ? "TRUE" : "FALSE"); */


/* ## 20. Verilmiş hərfin ilk indeksini tap

Input: "javascript", letter = "a"
Output: 1 */

/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa söz daxil edin: => "),
    letter = prompt("Zəhmət olmasa axtarılacaq hərfi daxil edin: => ");

let index = -1; 

for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
        index = i;
        break;
    }
}

console.log(index); */

/* ## 21. Verilmiş hərfin son indeksini tap

Input: "banana", letter = "a"
Output: 5 */

/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa söz daxil edin: => "),
    letter = prompt("Zəhmət olmasa axtarılacaq hərfi daxil edin: => ");

let index = -1;

for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
        index = i;
    }
}

console.log(index); */

/* ## 22. Stringdə bütün saitləri çıxart

Input: "javascript"
Output: "jvscrpt" */


/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa söz daxil edin: => ");

let vowels = "aeiou";

let newStr = "";

for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i].toLowerCase())) {
        newStr += str[i];
    }
}

console.log(newStr); */

/* ## 23. Sadece ilk hərfi böyük yaz

Input: "javascript"
Output: "Javascript" */

/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa söz daxil edin: => ");

console.log(str[0].toUpperCase() + str.slice(1)); */

/* ## 24. Hər sözün son hərf ini götür

Input: "hello world js"
 Output: "ods" 
 */
/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa söz daxil edin: => ");

let strArray = str.split(" ");

let newStr = "";

for (let i = 0; i < strArray.length; i++) {
    let word = strArray[i];
    newStr += word[word.length - 1];
}

console.log(newStr); */

/* ## 25. Eyni simvolların sayını hesablama (frequency)

Input: "apple"
Output:
a → 1
p → 2
l → 1
e → 1 
*/

/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa söz daxil edin: => ");

let frequency = {};


for (let i = 0; i < str.length; i++) {

    let char = str[i];
    if (frequency[char]) {
        frequency[char]++;
    } else {
        frequency[char] = 1;
    }

}

for (let char in frequency) {
    console.log(`${char} → ${frequency[char]}`);
} */


/* ## 26. Stringdə olan unikal hərfləri tap

Input: "banana"
Output: "b" */

/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa söz daxil edin: => ");

for (let i = 0; i < str.length; i++) {
    if(str[i])
} */


/* ## 27. Eynisi olmayan simvolları çıxart

Input: "aabbcdeeff"
Output: "cd" */

/* const prompt = require("prompt-sync")();
let str = prompt("Zəhmət olmasa söz daxil edin: => ");

let frequency = {};

for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (frequency[char]) {
        frequency[char]++;
    } else {
        frequency[char] = 1;
    }
}

let result = "";
for (let char in frequency) {
    if (frequency[char] === 1) {
        result += char;
    }
}

console.log(result); */


/* ## 28. Sözləri uzunluğa görə say

Input: "JS is super fast"
Output: [2, 2, 5, 4] */

/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa söz daxil edin: => ");

let words = str.split(" ");

let arr = [];

for (let i = 0; i < words.length; i++) {
    words[i] = words[i].length;
    arr[i] = words[i];
}

console.log(arr); */

/* ## 29. Stringdən bütün xüsusi simvolları sil

Input: "he!!ll@o# wor$ld%"
Output: "hello world" */

/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa söz daxil edin: => ");

let word = str.replace(/[^a-zA-Z]/g, "");

console.log(word); */


/* ## 30. Cümlədəki sözlərin uzunluqlarını çıxart

Input: "I love JavaScript"
Output: [1, 4, 10] */

/* const prompt = require("prompt-sync")();

let str = prompt("Zəhmət olmasa söz daxil edin: => ");

let words = str.split(" ");

let arr = [];

for (let i = 0; i < words.length; i++) {
    words[i] = words[i].length;
    arr[i] = words[i];
}

console.log(arr);  */

