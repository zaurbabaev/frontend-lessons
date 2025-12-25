/** Task -1
Massivdəki yalnız tək ədədlərin kvadratlarından ibarət yeni massiv yaradın. */

/** let arr = [1, 2, 3, 4, 5];

let newArr = [];
for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 !== 0) {
        newArr.push(arr[i] ** 2);
    }
}
console.log(newArr); */


/** Task-2
Massivdəki ən böyük və ən kiçik ədədin fərqini tapın. */

/** let arr = [10, 3, 25, 1];

let min = arr[0];
let max = arr[0];
let result = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    else if (arr[i] < min) {
        min = arr[i];
    }
}

result = max - min;
console.log(result); */

/**Task-3
Massivdəki təkrarlanan elementləri silin. */

/** let arr = [1, 2, 2, 3, 4, 4];

let newArr = [];

for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
        newArr.push(arr[i]);
    }
}

console.log(newArr); */

/** Task-4
Massivdəki yalnız müsbət ədədlərin cəmini hesablayın. */

/** let arr = [-2, 5, 10, -3];
let result = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        result += arr[i];
    }
}

console.log(result); */

/** Task-5
Massivdəki sözlərin uzunluqlarından ibarət massiv yaradın. */

/** let arr = ["alma", "banan", "kivi"];

let arrNew = [];
for (let i = 0; i < arr.length; i++) {

    arrNew.push(arr[i].length);
}

console.log(arrNew); */

/** Task-6
Massivdə 5-dən böyük ədədləri 2-yə vurun. */

/** let arr = [3, 6, 8, 2];

let newArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
        newArr.push(arr[i] * 2);
    }
}

console.log(newArr); */

/** Task-7
Massivdəki ən uzun sözü tapın. */

/** let arr = ["js", "javascript", "react"];

let result = "";

let longestStr = "";

for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestStr.length) {
        longestStr = arr[i];
    }
}

console.log(longestStr); */

/** Task-8
Massivi artan sıraya salın, orijinal dəyişməsin. */

/** let arr = [4, 1, 9, 2];

let newArr = arr.sort();
console.log(newArr); */

/** Task -9
Massivdəki cüt ədədlərin sayını tapın. */

/** let arr = [1, 2, 3, 4, 6];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        count++;
    }
}

console.log(count); */

/** Task-10
Massivdəki ədədlərin ədədi ortasını tapın. */

/** let arr = [2, 4, 6, 8];

let sum = 0;
let result = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(sum / arr.length); */

/** Task-11
Massivdə ən çox təkrarlanan elementi tapın. */

//! let arr = [1, 2, 2, 3, 3, 3];
//! let count = 0;
//! let result = 0;

//! for (let i = 0; i < arr.length; i++) {
//!     if (result.includes(arr[i])) {
//!         count++;
//!     }

//! }

//! console.log(result);

/** Task-12
Massivdəki mənfi ədədləri 0 ilə əvəz edin. */

/** let arr = [-1, 2, -3, 4];
let newArr = [];


for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        newArr[i] = 0;;
    }
    else {
        newArr.push(arr[i]);
    }
}

console.log(newArr); */

/** Task -13
Massivdəki bütün sözləri böyük hərflə yazın. */


/** let arr = ["js", "react"];

let newArr = [];
for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].toUpperCase());
}

console.log(newArr); */

/** Task -14
 Massivdə palindrom sözləri tapın. */

/** let arr = ["ana", "alma", "ata"];

let newArr = [];

for (let i = 0; i < arr.length; i++) {
    let isPalindrome = true;
    for (let j = 0; j < arr[i].length / 2; j++) {
        if (arr[i][j] !== arr[i][arr[i].length - j - 1]) {
            isPalindrome = false;
            break;
        }
    }

    if (isPalindrome) {
        newArr.push(arr[i]);
    }
}

console.log(newArr); */

/** Task-15
Massivdəki ədədləri müsbət, mənfi və sıfır olaraq qruplaşdırın. */

/** let arr = [-2, 0, 5, 3, -1];

let result = {
    positive: [],
    negative: [],
    zero: []
};

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        result.positive.push(arr[i]);
    } else if (arr[i] < 0) {
        result.negative.push(arr[i]);
    } else {
        result.zero.push(arr[i]);
    }
}

console.log(result); */

/** Task-16
Massivdə həm cüt, həm də 3-ə bölünən ədədləri tapın. */

/** let arr = [3, 6, 9, 12, 8];

let result = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] % 3 === 0) {
        result.push(arr[i]);
    }
}

console.log(result);

//! -------------- VERSION 2 ----------------
let res2 = arr.filter(num => num % 2 === 0 && num % 3 === 0);
console.log(res2); */

/** Task-17
Massivdəki sözlərin ilk hərflərindən string yaradın. */

/** let str = ["JavaScript", "React", "Node"];

let res = "";
for (let i = 0; i < str.length; i++) {
    res += str[i][0];
}

console.log(res);

//! -------------- VERSION 2 ----------------

let res2 = str.map(word => word[0]).join("");
console.log(res2);

//! -------------- VERSION 3 ----------------

let res3 = str.reduce((acc, word) => acc + word[0], "");

console.log(res3); */

/** Task-18
Massivin artan sıra ilə olub-olmadığını yoxlayın. */

/** let arr = [1, 2, 3, 4];

let res = true;

for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
        res = false;
        break;
    }
}

console.log(res); */

/** Task-19
Massivdəki bütün elementlər eynidirmi? */

/** let arr = [5, 5, 5, 5];

let res = true;

for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
        res = false;
        break;
    }
}

console.log(res); */


/** Task-20
Massivi sola bir addım sürüşdürün. */

/** let arr = [1, 2, 3, 4];

let firstElement = arr.shift();

arr.push(firstElement);

console.log(arr);

//! -------------- VERSION 2 ----------------

let arr2 = [1, 2, 3, 4];

arr2.push(arr2.splice(0, 1)[0]);
console.log(arr2); */


/** Task -21
 Ən uzun və ən qısa sözün uzunluq fərqini tapın. */

/** let arr = ["a", "javascript", "js"];

let longestStr = arr[0];
let shortestStr = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longestStr.length) {
        longestStr = arr[i];
    } if (arr[i].length < shortestStr.length) {
        shortestStr = arr[i];
    }
}

let different = longestStr.length - shortestStr.length;
console.log(different); */

/** Task-22
Massivdən null və undefined elementləri silin. */

/** let arr = [1, null, 2, undefined, 3];
let res = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== null && arr[i] !== undefined) {
        res.push(arr[i]);
    }
}

console.log(res);

//! -------------- VERSION 2 ----------------

let res2 = arr.filter(x => x !== null && x !== undefined);
console.log(res2);

//! -------------- VERSION 3 ----------------

let res3 = arr.filter(x => x != null);

console.log(res3);

//! -------------- VERSION 4 ----------------

let res4 = arr.filter(Boolean);
console.log(res4); */

/** Task-23
Reverse istifadə etmədən massivi tərsinə çevirin. */

/** let arr = [1, 2, 3];

let res = [];

for (let i = 0; i < arr.length; i++) {
    res.push(arr.at(-1 - i));
}

console.log(res);

//! -------------- VERSION 2 ----------------

let res2 = [];
for (let i = arr.length - 1; i >= 0; i--) {
    res2.push(arr[i]);
}

console.log(res2);


//! -------------- VERSION 3 ----------------

let res3 = [];
for (let i = 0; i < arr.length; i++) {
    res3.unshift(arr[i]);
}

console.log(res3); */

/** Task-25
Massivdəki sözləri uzunluğuna görə sıralayın. */

/** let arr = ["js", "javascript", "go", "when"];

arr.sort((a, b) => a.length - b.length);

console.log(arr);


//! -------------- VERSION 2 ----------------

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i].length > arr[j].length) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log(arr); */

/** Task-26
Müsbət ədədlərin faizini hesablayın. */

/**
let arr = [-1, 2, 3, 4];
 let res = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        res.push(arr[i]);
    }
}

let diff = res.length * 100 / arr.length;

console.log(`Müsbət ədədlər ümumi massivin ${diff} faizini təşkil edir`); 

//! -------------- VERSION 2 ----------------

let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        count++;
    }
}

let percent = count * 100 / arr.length;

console.log(`Müsbət ədədlər ümumi massivin ${percent} faizini təşkil edir`);


//! -------------- VERSION 3 ----------------

let res3 = arr.filter(num => num > 0).length * 100 / arr.length;

console.log(`Müsbət ədədlər ümumi massivin ${res3} faizini təşkil edir`);

//! -------------- VERSION 4 ----------------

let coun2 = arr.reduce((acc, num) => {
    if (num > 0) {
        acc++;
    }
    return acc;
}, 0);

let per = coun2 * 100 / arr.length;

console.log(`Müsbət ədədlər ümumi massivin ${per} faizini təşkil edir`);
*/

/** Task-27
Number və string tipləri ayırın. */

/** let arr = [1, "a", 2, "b"];

let obj = {
    numbers: [],
    strings: []
};

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
        obj.numbers.push(arr[i]);
    }
    else if (typeof arr[i] === "string") {
        obj.strings.push(arr[i]);
    }
}

console.log(obj);


//! -------------- VERSION 2 ----------------

for (let item of arr) {
    if (typeof item === "number") {
        obj.numbers.push(item);
    }
    else if (typeof item === "string") {
        obj.strings.push(item);
    }
}

console.log(obj); */

/** Task-28
Massivdə unikal sözləri saxlayın. */

/** let arr = ["a", "b", "a", "c", "c"];

let res = [];

for (let i = 0; i < arr.length - 1; i++) {
    if (!res.includes(arr[i])) {
        res.push(arr[i]);
    }
}

console.log(res);


let res2 = [...new Set(arr)];

console.log(res2); */

/** Task-29
Elementlərin neçə dəfə təkrarlandığını göstərin. */

/** let arr = ["a", "b", "a", "c", "b"];

let frequency = {};


for (let i = 0; i < arr.length; i++) {
    let char = arr[i];

    if (frequency[char]) {
        frequency[char]++;
    }
    else {
        frequency[char] = 1;
    }
}


console.log(frequency); */

/** Task-30
Ardıcıl eyni elementləri silin. */

/** let arr = [1, 1, 2, 2, 3, 1];

let res = [];

res.push(arr[0]);

for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
        res.push(arr[i]);
    }
}

console.log(res); */


