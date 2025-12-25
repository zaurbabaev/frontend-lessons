/** Task - 1
Adınız, cinsiniz və doğum tarixiniz olan user obyekti
yaradın(name, gender, birthday).
Konsola doğum tarixini çıxarın. */

/* const user = {
    name: "Zaur",
    gender: "male",
    birthday: "01-03-1987"
};

console.log(user.birthday); */

/** Task-2
Bu obyektə yaş (age) əlavə edin və doğum tarixini silin.
Alınmış obyekti konsola çıxarın. */

/* user.age = 38;
delete user.birthday;

console.log(user); */

/** Task-3
Obyektə metodlar əlavə edin.
    setAge — istifadəçi yaşını dəyişdirən metoddur.
    getYearsBeforeRetirement — pensiyaya qədər istifadəçinin
qalan illərinin sayını qaytaran metoddur.
Bu metodları çağırın. */

/* const user = {
    name: "Zaur",
    gender: "male",
    age: 38,

    setAge(newAge) {
        this.age = newAge;
    },

    getYearsBeforeRetirement() {
        return 65 - this.age;
    }
};



user.setAge(39);
let year = user.getYearsBeforeRetirement();

console.log(year);

console.log(user); */


/** Task-4
Müştəri Kredit kartı ilə işləmək üçün obyekt yaradın.
Müştərinin hesabı haqqında əsas məlumatları və onunla işləmə
metodlarını əhatə edən client obyekti yaradın. */


/**  
 * #### =>client obyekti yaradın.
 *  Kredit kartı müştərisi üçün aşağıdakı xüsusiyyətlərə malik obyekt yaradın:
  - Tam adı müştərinin (fullName).
  - Kredit limiti (creditLimit).
  - Cari balans (balans).
  - Minimum ödənişin faizi (precentOfMinPayment). */

const client = {
    fullName: "Babayev Zaur",
    creditLimit: 1000,
    balans: -500,
    precentOfMinPayment: 10,
    getBalance() {
        if (this.balans >= 0) {
            return `Balansınız ${this.balans}`;
        }
        else {
            return `Borcunuz ${this.balans * (-1)}`;
        }
    },
    getMinPaymant() {

    }

}

/** Cari balans əldə etmək üçün getBalance metodu əlavə edin.
 *     getBalance metodu, balans mənfi olarsa, müştərinin balansı və ya onun borcu haqqında bir mesaj qaytarır.
    Metodun çağırılma nümunəsi:
    console.log(client.getBalance()).
    Mesaj nümunələri:
    «Balansınız 3000»,
    «Borcunuz 2000».
*/


/* let balance = client.getBalance();

console.log(balance); */


/** Minimum ödəniş məbləği üçün getMinPaymant metodunu əlavə edin.
getMinPaymant metodu borc məbləği və minimum ödəniş faizinə əsasən formalaşan minimum ödəniş məbləği haqqında mesaj qaytarır. Əgər borc yoxdursa, metod müvafiq mesajı qaytarır. Metodun çağırılma nümunəsi: 
console.log(client.getMinPaymant()).
Mesaj nümunələri:
«Minimum ödənişiniz 240»,
«Sizin borcunuz yoxdur». */



/** Task - 5
Kalkulyator obyekti yaradın.
Əsas riyazi hesablamaları yerinə yetirən və nəticəni yaddaşda saxlaya bilən kalkulyator obyekti yaradın.
- Obyekt yaradın və toplama, çıxma, vurma,bölmə üçün metodlar əlavə edin.
Metodlar parametr kimi 2 ədəd götürür və bu ədədlər üzərində müvafiq əməliyyatın nəticəsini qaytarır.
Yaddaşla işləmək imkanı əlavə edin. 
- Obyektə dəyəri saxlamaq üçün özəllik əlavə edin. Onunla işləmək üçün metodlar yaradın:
dəyərin yaddaşda saxlanması, yaddaşın təmizlənməsi, yaddaşdan dəyərin oxunması. */


/* const calculator = {
    memory: 0,

    toplama(a, b) {
        return a + b;
    },

    çıxma(a, b) {
        return a - b;
    },

    vurma(a, b) {
        return a * b;
    },

    bolme(a, b) {
        return a / b;
    },

    saveToMemory(value) {
        return this.memory = value;
    },

    clearMemory() {
        return this.memory = 0;
    },

    readMemory() {
        return this.memory;
    }
};

let toplama = calculator.toplama(12, 3);
calculator.saveToMemory(toplama);
let result = calculator.readMemory();
console.log(result);

calculator.clearMemory();

console.log(calculator); */

/** Task-6
Verilmiş stringdə ən çox təkrarlanan elementi qaytaran `mostFrequent()` funksiyasını yazın.
Məsələn, `mostFrequent("1, 3, 2, 3, 4, 3, 5, 3")` çağırıldıqda `3` qaytarmalıdır. */

let str = "1, 3, 2, 3, 4, 3, 5, 3";

const frequent = {

}

let strArr = str.split(",");

strArr.forEach(element => {
    // if(!frequent)
})
console.log(strArr);

















