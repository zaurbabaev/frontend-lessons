let users = "Zaur, Vusal, Kenan, Yusif ";
let user = "";

for (let i = 0; i < users.length; i++) {
    if (users[i] !== ",") {
        user += users[i].trim();
    }
    else {
        console.log(user);
        user = ""
    }
}

console.log(user);
console.log();

console.log(users.trim().replace(/,\s*/g, "\n"));

