/* Addaki hərflərin sayını konsola çıxarın.
fullName dəyişənində istifadəçinin tam adı saxlanılır.
Probel hərf olaraq sayılmır. */

let fullName = "Murad Orucov";

let fullNameWithOutOfSpace = fullName.replaceAll(" ", "");
console.log(fullNameWithOutOfSpace.length);
