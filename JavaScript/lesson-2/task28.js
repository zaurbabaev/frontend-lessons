/* İstifadəçidən onun cinsini (M və ya F hərfləri şəklində) sorğulayan və
gender dəyişəninə male yaxud female sözlərindən birini yazdıran proqramı yazın */

let gender = prompt("Please enter your gender");

switch (gender.toUpperCase()) {
    case "M": alert("Male"); break;
    case "F": alert("Female"); break;
    default: alert("You enter incorrect gender");
}