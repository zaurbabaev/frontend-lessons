/* Ədədin Müsbət, Mənfi və ya Sıfır Olduğunu Yoxla
Verilmiş ədədin müsbət, mənfi və ya sıfır olduğunu müəyyən edin. */

let number = prompt("Ədədin Müsbət, Mənfi və ya Sıfır Olduğunu Yoxla");

if (number > 0) {
    alert("Daxil etdiyiniz ədəd müsbətdir");
}
else if (number < 0) {
    alert("Daxil etdiyiniz ədəd mənfidir")
} else {
    alert("Daxil etdiyiniz ədəd 0-dır");
}