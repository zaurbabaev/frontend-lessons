// /* Konsola mesaj verin: «My name is Murad». */

// let myName = "My name is Murad";
// console.log(myName);


// /* Adı name və adınızın mənimsədildiyi sabit dəyişən təyin edin.
// Bu dəyişənin dəyərini konsolda göstərin. */

// const name = "Zaur";
// const surname = "Babayev";

// console.log(`My name is ${name} and my surname is ${surname}`);

// /* Depodaki bütün kitabların ümumi dəyərini konsola çıxarın.
// Kitab mağazasındaki kitabın qiyməti bookPrice dəyişənində
// və depodaki kitab sayı bookAmount dəyişənində saxlanılır. */

// let bookPrice = 750;
// let bookAmount = 14;

// let totalPrice = bookPrice * bookAmount;

// console.log(`Total price of all books is ${totalPrice}`);


// /* Dəyişən dəyərini saniyə metrə çevirin və onu konsola çıxarın.
// kmhSpeed dəyişəni avtomobilin sürətinin "saatda kilometrlərlə"
// dəyərini saxlayır. msSpeed dəyişəni təyin edin və
// ona eyni sürət dəyərini "saniyədə metrə" çevirərək yazın. */

// let kmhSpeed = 75;
// let kmToMetr = 1000;
// let hourToSecond = 60 * 60;

// let msSpeed = kmhSpeed * kmToMetr / hourToSecond;

// console.log(msSpeed.toFixed(2));

// /* İstifadəçinin doğum tarixini soruşan və bu günə qədər yaşadığı
// günlərin sayını göstərən proqram yazın. */

// let birthDate = prompt("Doğum tarixinizi daxil edin (YYYY-MM-DD) formatında");

// let userDate = new Date(birthDate);

// let today = new Date();

// let diffMs = today - userDate;

// let diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

// alert(`Bu günə qədər ${diffDays} gün yaşamısınız`);

// /* Ədədlər üzərində əməliyyatları yerinə yetirin.
// num dəyişənində iki rəqəmli ədəd saxlanılır.
// Belə proqram yazın:

// - Bu ədədin beşinci dərəcə qüvvətə qaldırılmış vəziyyətini.
// - 3-ə bölünmədən qalan bu ədədin qalığını. */

// let num = 37;
// let quvvet = 37 ** 5;
// console.log(quvvet);

// let mod = num % 3;
// console.log(mod);


// // firstName dəyişənində istifadəçinin adı,
// // lastName — dəyişənində isə soyadı saxlanır.
// // Konsola bu növ mesaj çıxarın “Sizin adınız [firstName] [lastName]. Tanışlığımıza çox şadam!”

// let firstName = "Zaur";
// let lastName = "Babayev";
// console.log(`Sizin adınız ${firstName} ${lastName}. Tanışlığımıza çox şadam!”`)

// /* Şablon mətnlərdən istifadə edərək, konsola
// “Sizi bir daha görməyimizə şadıq, [firstName] [lastName]” mesajını çıxarın. */

// let firstName = "Zaur";
// let lastName = "Babayev";
// console.log(`Sizi bir daha görməyimizə şadıq ${firstName} ${lastName}`);


// /* Addaki hərflərin sayını konsola çıxarın.
// fullName dəyişənində istifadəçinin tam adı saxlanılır.
// Probel hərf olaraq sayılmır. */

// let fullName = "Murad Orucov";

// let fullNameWithOutOfSpace = fullName.replaceAll(" ", "");
// console.log(fullNameWithOutOfSpace.length);


// /* İstifadəçinin adını və soyadını boşluqlarla ayıraraq fullName dəyişəninə yazın.
// fullName dəyişəninin dəyərindən istifadə edərək istifadəçinin baş hərflərini
// konsola çıxaran proqram yazın. */

// console.log("---------------VERSION 1------------");

// let fullName = "Zaur Babayev";

// let firstLetter = fullName[0];

// let indexOfSpace = fullName.indexOf(" ");
// let secondLetter = fullName[indexOfSpace + 1];


// console.log(`First letter is ${firstLetter} second letter is ${secondLetter}\n`);


// console.log("---------------VERSION 2------------");

// let fullNameArray = fullName.split(" ");
// console.log(`First letter is ${fullNameArray[0].slice(0, 1)} second letter is ${fullNameArray[1].slice(0, 1)}\n`);

// console.log("---------------VERSION 3------------");

// console.log(`First letter is ${String(fullNameArray[0]).substring(0, 1)} second letter is ${String(fullNameArray[1]).substring(0, 1)}`);





// /* İstifadəçidən tam adı «AD SOYAD» formatında daxil etməyi xahiş edin.
// Tam adını konsola fərqli qaydada yəni «SOYAD AD» formatında çıxarın, */

// let nameAndSurname = prompt("Adınızı və Soyadınızı daxil edin:");

// console.log("---------- Version 1------------");

// let surnameIndex = nameAndSurname.indexOf(" ");

// let myName = nameAndSurname.substring(0, surnameIndex);

// let surname = nameAndSurname.substring(surnameIndex);

// console.log(`Salam,${surname} ${myName}\n`);



// console.log("---------- Version 2------------");

// let fullNameArray = nameAndSurname.split(" ");

// console.log(`Salam, ${fullNameArray[1]} ${fullNameArray[0]}`);




// /* İstifadəçidən adını daxil etməsini istəyin.
// Konsola "Salam, [ad]!" formatında salamlama mesajı çıxarın. */


// let myName = prompt("Zəhmət olmasa adınızı daxil edin:");

// console.log(`Salam, ${myName}!`);


// /* İstifadəçidən iki ayrı prompt əmri ilə iki ədəd daxil etməsini istəyin.
// Bu ədədlərin toplama, çıxma, vurma və bölməsinin nəticələrin konsola
// alt-alta 4 sətir olaraq çıxarın. */

// let firstNumber = Number(prompt("Birinci rəqəmi daxil edin"));
// let secondNumber = Number(prompt("Ikinci rəqəmi daxil edin"));

// let addition = firstNumber + secondNumber;
// let subtraction = firstNumber - secondNumber;
// let multiplication = firstNumber * secondNumber;
// let division = firstNumber / secondNumber;
// console.log(`${addition} \n ${subtraction} \n ${multiplication} \n ${division.toFixed(2)}`);


// /* 12345 və 98765 ədədlərinin hasilindən alınan nəticənin 6 - cı rəqəmini tapan proqram yazın. */

// let firstNumber = 12345;
// let secondNumber = 98765;

// let sum = firstNumber * secondNumber;

// console.log(sum);

// console.log("------------VERSION 1------------\n");

// let sixthNumber = String(sum).charAt(5);

// console.log(sixthNumber);


// console.log("------------VERSION 2------------\n");

// sixthNumber = String(sum)[5];

// console.log(sixthNumber);


// console.log("------------VERSION 3------------\n");

// sixthNumber = sum.toString()[5];

// console.log(sixthNumber);

// /* Rəqəmlərin cəmini göstərən proqram yazın.
// İstifadəçidən dörd rəqəmli ədəd daxil etməsini xahiş edən və
// sonra daxil edilmiş ədədlərin rəqəmlərinin cəmini konsola çıxaran proqram yazın. */

// let number = prompt("Zəhmət olmasa 4 rəqəmli bir ədəd daxil edin");

// let sum = 0;
// for (let index = 0; index < 4; index++) {
//     sum += Number(number[index])
// }

// console.log(sum);



// /* İstifadəçinin soyadını və adını almaq üçün proqram tərtib edin.
// Proqram bir mesajla istifadəçinin soyadını və adını daxil etməsini istəyir və
// konsola «Salam, <ad>!» mesajını çıxarır. */

// let fullName = prompt("Soyadınızı və adınızı daxil edin");

// let fullNameArray = fullName.split(" ");

// console.log(`Salam, <${fullNameArray[1]}>!`);


// // Qiyməti mətn halına salan proqram tərtib edin.
// // İstifadəçidən «530.90» formatında qiymət daxil etməyi xahiş edən və
// // qiyməti «530 manat 90 qəpik» formatında konsola çıxaran proqram tərtib edin.

// let number = prompt("Ədəd daxil edin:");


// let priceArray = number.split(".");

// console.log(`${priceArray[0]} manat ${priceArray[1]} qəpik`);


// /* Vergi nəzərə alınmadan əmək haqqı məbləğini hesablayan proqram tərtib edin.
// Proqram istifadəçidən əmək haqqı məbləğin soruşur və
// 13% vergi istisna olmaqla məbləği konsola çıxarır. */


// let salary = prompt("Əmək haqqınızı daxil edin:");
// let tax = salary * 0.13;

// let netSalary = salary - tax;

// console.log(`Salary: ${salary}`);
// console.log(`Tax sum: ${tax}`);
// console.log(`Net salary: ${netSalary}`);


// /* İstifadəçidən soyad, ad və ata adını istəyən,
// soyadı və baş hərfləri konsola çıxaran proqram tərtib edin.
// Məsələn, «İvanov Pyotr Sergeevich» — «İvanov P.S.». */

// let fullName = prompt("Ad soyad və ata adını daxil edin:");

// console.log("-------------VERSION 1-----------\n");

// let fullNameArray = fullName.split(" ");
// let surname = fullNameArray[0];
// let name = String(fullNameArray[1]).charAt(0);
// let fatherName = String(fullNameArray[2]).charAt(0);

// console.log(`<${surname} ${name}.${fatherName}.>.`);

// console.log("-------------VERSION 2-----------\n");

// name = fullNameArray[1].toString()[0];
// fatherName = fullNameArray[2].toString()[0];
// console.log(`<${surname} ${name}.${fatherName}.>.`);


// /* Depozitdən mənfəətin hesablanması üçün proqram yazın.
// Proqram istifadəçidən əmanətin məbləğini, müddətini və
// faiz dərəcəsini daxil etməsini istəyir və gözlənilən mənfəəti hesablayır. */

// let mebleg = Number(prompt("Əmanətin məbləğini daxil edin"));
// let muddet = Number(prompt("Müddəti daxil edin"));
// let faiz = Number(prompt("İllik faiz dərəcəsini daxil edin"));

// let menfeet = mebleg * (faiz / 100) * muddet;

// alert(`Əmanətin məbləği ${mebleg} manat, müddət: ${muddet}, faiz dərəcəsi ${faiz} gözlənilən mənfəət ${menfeet}`)


// /* Müxtəlif müqayisə operatorları ilə 5 ifadə yazın.
// value dəyişəni üçün müxtəlif müqayisə operatorları ilə 5 ifadə yazın,
// hansıki əməliyyat nəticəsi value = 10 üçün true və value = 20 üçün false olacaq. */

// let value = 20;


// console.log(value === 10);

// console.log(value < 15);

// console.log(value <= 10);

// console.log(value !== 20);

// console.log(value > 5 && value < 15);



// /* İstifadəçidən yaşını soruşun.
// Əgər yaşı 18-dən azdırsa, o zaman brauzerdə «Access denied» bildirişi çıxarın.
// Əks halda «Access granted» bildirişini çıxarın. */

// let age = Number(prompt("Yaşınızı daxil edin: "));

// console.log("----------- VERSION 1 ----------------");

// if (age >= 18) {
//     alert("Access granted");
// }
// else {
//     alert("Access denied");

// }

// console.log("----------- VERSION 2 ----------------");


// alert(age >= 18 ? "Access granted" : "Access denied");


// /* İstifadəçidən bir il daxil etməsini soruşun və ilin uzun il olub olmadığını yoxlayın.
// Uzun il 4-ə qalıqsız bölünən ildir.
// Daxil edilmiş il uzun ildirsə, konsola mesaj cıxarın.
// «İl uzun il deyil» və ya «İl uzun ildir» mesajını çıxarın.
//  */

// let isLeapYear = prompt("Il daxil edin: ");

// console.log("----------- VERSION 1 ----------------");

// if (isLeapYear % 4 == 0) {
//     alert("İl uzun ildir");
// } else {
//     alert("Il uzun il deyil");
// }

// console.log("----------- VERSION 2 ----------------");

// alert(isLeapYear % 4 == 0 ? "Il uzun ildir" : "Il uzun il deyil");

// /* if...else operatoru ilə yazılmış kodu switch operatoruna dəyişdirməklə kodu yenidən yazın. */

// let id = prompt("enter product id:");

// if (id === "1") {
//     alert("Available 10 pcs.");
// } else if (id === "2") {
//     alert("Available 256 pcs.");
// } else if (id === "3") {
//     alert("Available 53 pcs.");
// } else if (id === "4") {
//     alert("There are 3 available.");
// } else {
//     alert("Out of stock");
// }

// console.log("--------- Switch version --------");

// switch (id) {
//     case "1": alert("Available 10 pcs."); break;
//     case "2": alert("Available 256 pcs."); break;
//     case "3": alert("Available 53 pcs. "); break;
//     case "4": alert("There are 3 available."); break;
//     default: alert("Out of stock");
// }


// /* İstifadəçidən onun cinsini (M və ya F hərfləri şəklində) sorğulayan və
// gender dəyişəninə male yaxud female sözlərindən birini yazdıran proqramı yazın */

// let gender = prompt("Please enter your gender");

// switch (gender.toUpperCase()) {
//     case "M": alert("Male"); break;
//     case "F": alert("Female"); break;
//     default: alert("You enter incorrect gender");
// }

// /* Ayın adını mətnlə konsola yazdıran bir program yazın.
// İstifadəçidən ayın nömrəsini soruşun və adını konsola çıxarın. */

// let month = prompt("Ayın nömrəsini daxil edin:");
// let monthArray = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentybr", "Oktyabr", "Noyabr", "Dekabr"];

// console.log("----------- VERSION 1 ----------------");

// switch (month) {
//     case "1": alert(`Siz ${monthArray[0]} ayını daxil etdiniz`); break;
//     case "2": alert(`Siz ${monthArray[1]} ayını daxil etdiniz`); break;
//     case "3": alert(`Siz ${monthArray[2]} ayını daxil etdiniz`); break;
//     case "4": alert(`Siz ${monthArray[3]} ayını daxil etdiniz`); break;
//     case "5": alert(`Siz ${monthArray[4]} ayını daxil etdiniz`); break;
//     case "6": alert(`Siz ${monthArray[5]} ayını daxil etdiniz`); break;
//     case "7": alert(`Siz ${monthArray[6]} ayını daxil etdiniz`); break;
//     case "8": alert(`Siz ${monthArray[7]} ayını daxil etdiniz`); break;
//     case "9": alert(`Siz ${monthArray[8]} ayını daxil etdiniz`); break;
//     case "10": alert(`Siz ${monthArray[9]} ayını daxil etdiniz`); break;
//     case "11": alert(`Siz ${monthArray[10]} ayını daxil etdiniz`); break;
//     case "12": alert(`Siz ${monthArray[11]} ayını daxil etdiniz`); break;
//     default: alert(`Sizin daxil etdiyiniz ay yoxdur`);
// }


// console.log("----------- VERSION 2 ----------------");

// if (month >= 1 && month <= 12) {
//     alert(`Siz ${monthArray[month - 1]} ayını daxil etdiniz`);
// } else {
//     alert(`Sizin daxil etdiyiniz ay yoxdur`);
// }


// /* İstifadəçi tərəfindən daxil edilmiş tarixin təsvirini çıxarın.
// İstifadəçidən tarixi «2009.12.19» formatında daxil etməyi xahiş edin.
// Tarixin təsvirini «19 Dekabr 2009-cu il» formatında çıxarın.
// Daxil edilmiş dəyərə validator əlavə edin.
// İstifadəçi səhv formatda dəyər daxil edərsə, «Yanlış dəyər daxil edilib» bildirişi göstərin. */

// let date = prompt("Tarix daxil edin: (Format YYYY.MM.DD)");
// let monthArray = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentybr", "Oktyabr", "Noyabr", "Dekabr"];
// let dateArray = date.split(".");

// let findMonth = Number(date.slice(5, 7));

// console.log(findMonth);



// /* if (findMonth >= 1 && findMonth <= 12)
//     alert(`${dateArray[2]} ${monthArray[findMonth - 1]} ${dateArray[0]} - cu il`); */


// console.log("------------ VERSION 2 ---------------\n");


// if (!date || date.length !== 10 || date[4] !== "." || date[7] !== ".") {
//     alert("Yanlış dəyər daxil edilib");
// } else {

//     let year = Number(dateArray[0]);
//     let month = Number(dateArray[1]);
//     let day = Number(dateArray[2]);

//     if (isNaN(year) || isNaN(month) || isNaN(day)) {
//         alert("Yanlış dəyər daxil edilib");
//     } else if (year < 1 || month < 1 || month > 12 || day < 1 || day > 31) {
//         alert("Yanlış dəyər daxil edilib");
//     } else {
//         alert(`${day} ${monthArray[month - 1]} ${year}-cu il`);
//     }
// }


// /* Ədədin Müsbət, Mənfi və ya Sıfır Olduğunu Yoxla
// Verilmiş ədədin müsbət, mənfi və ya sıfır olduğunu müəyyən edin. */

// let number = prompt("Ədədin Müsbət, Mənfi və ya Sıfır Olduğunu Yoxla");

// if (number > 0) {
//     alert("Daxil etdiyiniz ədəd müsbətdir");
// }
// else if (number < 0) {
//     alert("Daxil etdiyiniz ədəd mənfidir")
// } else {
//     alert("Daxil etdiyiniz ədəd 0-dır");
// }

// /* Üç Ədəddən Ən Böyüyünü Tap
// let a = 5, b = 8, c = 3; */

// let a = 23, b = 8, c = 12;

// if (a > b && a > c) {
//     console.log(`${a} ədədi böyükdür`);
// } else if (b > a && b > c) {
//     console.log(`${b} ədədi böyükdür`);
// }
// else {
//     console.log(`${c} ədədi böyükdür`);

// }

// /* Cüt və ya Tək Ədəd
// Verilmiş ədədin cüt(even) və ya tək(odd) olduğunu ternary operatoru ilə müəyyən edin. */

// let number = 21;

// let oddOrEven = number % 2 == 0 ? "Even" : "Odd";

// console.log(oddOrEven);

// /* Kvadratın Sahəsi (S=a*a)və Perimetri(P=4*a)
// Bir tərəfi a olan kvadrat üçün sahəni və perimetri tapın. */

// let a = prompt("Kvadratın terefinin uzunluğunu daxil edin");

// let sahe = a * a;
// let perimetr = 4 * a;

// alert(`Tərəfinin uzunluğu ${a} olan kvadratın sahəsi ${sahe} perimetri isə ${perimetr} `);


// /* Qiymətə Görə Nəticə (switch-case)
// Qiymət verilir (0-100). Aşağıdakı qaydaya əsasən nəticəni switch-case ilə yazın:

// - 90-100: Əla
// - 75-89: Yaxşı
// - 60-74: Orta
// - 0-59: Zəif */


// let grade = prompt("Qiyməti 0-100 arası daxil edin.");
// switch (true) {
//     case (grade >= 90 && grade <= 100): alert("Əla"); break;
//     case (grade >= 75 && grade <= 89): alert("Yaxşı"); break;
//     case (grade >= 60 && grade <= 74): alert("Orta"); break;
//     case (grade >= 0 && grade <= 59): alert("Zəif"); break;
//     default: alert("Düzgün qiymət daxil edin");
// }

// /* 0-50 Arasında Təsadüfi Ədəd
// 0 ilə 100 arasında Math.random() ilə təsadüfi ədəd yaradın və onun 0-50 arasında olub olmadığını yoxlayın.
//  */

// let randomNumber = Math.random() * 100;

// let getRandomNumber = Number(randomNumber.toFixed(0));

// if (getRandomNumber >= 0 && getRandomNumber <= 50) {
//     console.log(`${getRandomNumber} daxil etdiniz`);
// } else {
//     console.log(`${getRandomNumber} ədədi 0-50 aralığında deyil.`);
// }



// console.log("--------------- VERSION 2----------------");
// switch (true) {
//     case (getRandomNumber >= 0 && getRandomNumber <= 50): console.log(`${getRandomNumber} daxil etdiniz`); break;
//     default: console.log(`${getRandomNumber} ədədi 0-50 aralığında deyil.`);

// }

// /* Sadə Kalkulyator (switch-case)
// İki ədəd və operator (+, -, *, /) verilib. switch-case ilə əməliyyatı icra edin.
// let a = 5, b = 3, op = "*"; */

// let a = 6;
// let b = 0;
// let op = "/";

// let result = 0;
// switch (op) {

//     case "+": result = a + b; break;
//     case "-": result = a - b; break;
//     case "*": result = a * b; break;
//     case "/": result = b !== 0 ? a / b : "0-a bölmək olmaz"; break;
//     case "%": result = b !== 0 ? a % b : "0-a bölmək olmaz"; break;
//     default: result = "Incorrect operator";
// }
// console.log(result);



// console.log("------------VERSION 2---------------");

// let firstNumber = Number(prompt("Enter first number"));
// let secondNumber = Number(prompt("Enter second number"));
// let operation = prompt("Enter operation");

// let myResult = 0;
// switch (operation) {

//     case "+": myResult = Number(firstNumber) + Number(secondNumber); break;
//     case "-": myResult = firstNumber - secondNumber; break;
//     case "*": myResult = firstNumber * secondNumber; break;
//     case "/": myResult = secondNumber !== 0 ? firstNumber / secondNumber : "0-a bölmək olmaz"; break;
//     case "%": myResult = secondNumber !== 0 ? firstNumber % secondNumber : "0-a bölmək olmaz"; break;
//     default: myResult = "Incorrect operator";
// }
// alert(`${firstNumber} ${operation} ${secondNumber} = ${myResult}`);

// */