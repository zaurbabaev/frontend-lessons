let a = 7, b = 3, c = 5;

let x = a-- - ++b + c++ - --a + b++ - --c + a++ - b-- + c++;
let y = --x + a++ - --b + c-- - x++ + ++a - b++ + --c - x--;
let z = a-- + ++b - --c + x++ - --y + b-- - ++x + c++ - --a + y++;

console.log(a, b, c, x, y, z);