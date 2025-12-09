/* Qiymətə Görə Nəticə (switch-case)
Qiymət verilir (0-100). Aşağıdakı qaydaya əsasən nəticəni switch-case ilə yazın:

- 90-100: Əla
- 75-89: Yaxşı
- 60-74: Orta
- 0-59: Zəif */


let grade = prompt("Qiyməti 0-100 arası daxil edin.");
switch (true) {
    case (grade >= 90 && grade <= 100): alert("Əla"); break;
    case (grade >= 75 && grade <= 89): alert("Yaxşı"); break;
    case (grade >= 60 && grade <= 74): alert("Orta"); break;
    case (grade >= 0 && grade <= 59): alert("Zəif"); break;
    default: alert("Düzgün qiymət daxil edin");
}