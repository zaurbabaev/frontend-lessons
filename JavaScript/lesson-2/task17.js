/* Rəqəmlərin cəmini göstərən proqram yazın.
İstifadəçidən dörd rəqəmli ədəd daxil etməsini xahiş edən və
sonra daxil edilmiş ədədlərin rəqəmlərinin cəmini konsola çıxaran proqram yazın. */

let number = prompt("Zəhmət olmasa 4 rəqəmli bir ədəd daxil edin");

let sum = 0;
for (let index = 0; index < 4; index++) {
    sum += Number(number[index])
}

console.log(sum);








