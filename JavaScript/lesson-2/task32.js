let a = 6, b = 4, c = 2;

let x = ++a - b-- + c++ - --b + a++;
let y = a-- + --c - ++b + x++ - --a;

console.log(a, b, c, x, y);