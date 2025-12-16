/* 
Task-11
Mətni parametr kimi qəbul edən və bu mətndəki hərflərin sayını qaytaran numCounter funksiyasını yazın.
"15263538479359486()-="';:!@#$%^&*()"
REGEX() */

/* function countOfLetters(text) {
    return text.replace(/[^a-zA-Z]/g, "").length;
}

console.log(countOfLetters('15263538479359486()-=":!@#$%^&*()asdj')); */

/*
 
Task-12 
Verilmiş ədədin sadə olub-olmadığını yoxlayan `isPrime()` funksiyasını yazın.
Məsələn, `isPrime(7)` çağırıldıqda `true`, `isPrime(8)` çağırıldıqda `false` qaytarmalıdır. */

/* function isPrime(n) {

    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }

    }
    return true;
}

console.log(isPrime(43)); */


/* Task-13
Verilmiş ədədin rəqəmlərinin cəmini qaytaran `sumOfDigits()` funksiyasını yazın.
Məsələn, `sumOfDigits(1234)` çağırıldıqda `10` qaytarmalıdır (1 + 2 + 3 + 4 = 10). */

/* function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

console.log(sumOfDigits(1234)); */


/* Task-14
Verilmiş mətnin palindrom olub-olmadığını yoxlayan `isPalindrome()` funksiyasını yazın.
Məsələn, `isPalindrome("level")` çağırıldıqda `true`, `isPalindrome("hello")` çağırıldıqda `false` qaytarmalıdır. */

/* function isPalindrome(text) {

    for (let i = 0; i < text.length / 2; i++) {
        if (text.at(i) !== text.at(- 1 - i)) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('level')); */


/* 
Task -15
Verilmiş cümlədəki ən uzun sözü qaytaran `longestWord()` funksiyasını yazın.
Məsələn, `longestWord("Javascript is a powerful language")` çağırıldıqda `"Javascript "` qaytarmalıdır. */

/* function longestWord(text) {

    let strArray = text.split(" ");
    let longestWord = "";

    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i].length > longestWord.length) {
            longestWord = strArray[i];
        }
    }

    console.log(longestWord);
}

longestWord("Javascript is a powerful language"); */

/* Task-16
Daxil edilən iki tarix arasındakı günlərin sayını qaytaran `daysBetweenDates()` funksiyasını yazın.
Məsələn, `daysBetweenDates("2025-04-01", "2025-04-10")` çağırıldıqda `9` qaytarmalıdır. */


/* function daysBetweenDates(firstDate, secondDate) {

    const first = new Date(firstDate);
    const second = new Date(secondDate);

    const difference = second - first;

    return difference / (1000 * 60 * 60 * 24);

}

const millSecToDay = daysBetweenDates("2025-04-01", "2025-04-10");
console.log(millSecToDay); */


/* Task-17
Verilmiş stringi tərsinə çevirən `reverseArray()` funksiyasını yazın.
Məsələn, `reverseArray("1, 2, 3, 4, 5")` çağırıldıqda `"5, 4, 3, 2, 1"` qaytarmalıdır. */


/* function reverseArray(arr) {
    let reverse = [];
    for (let i = 0; i < arr.length; i++) {
        reverse[i] = arr.at(-1 - i);
    }
    return reverse;
}

console.log(reverseArray([1, 2, 3, 4, 5])); */



/* Task-18
İstifadəçi adı və yaş parametr kimi qəbul edən və `"[Ad] is [Yaş] years old"` mesajını qaytaran `userInfo()` funksiyasını yazın.
Məsələn, `userInfo("Murad", 25)` çağırıldıqda `"Murad is 25 years old"` qaytarmalıdır. */

/* function userInfo(name, age) {
    console.log(`${name} is ${age} years old`);

}

userInfo("Zaur", 12); */

/* Task-19
Daxil edilən mətnin hər bir simvolunun ASCII dəyərini qaytaran `charCodes()` funksiyasını yazın.
Məsələn, `charCodes("ABC")` çağırıldıqda '65, 66, 67' qaytarmalıdır. */

/* function charCodes(text) {
    let charNum = [];
    for (let i = 0; i < text.length; i++) {
        charNum[i] = text.charCodeAt(i);
    }
    return charNum.join(", ");
}

console.log(charCodes("ABC")); */


/* Task-20
Verilmiş ədədin faktorialını qaytaran bir factorial() funksiyası yazın.
Məsələn, factorial(5) çağırıldıqda 120 qaytarmalıdır. */

/* function factorial(value) {
    let result = +1;
    for (let i = 1; i <= value; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); */




