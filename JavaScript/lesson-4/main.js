const prompt = require("prompt-sync")();
const username = prompt("Who is there?");

if (username === null) {
    console.log("Cancelled");
} else if (username !== "Admin") {
    console.log("I don't know you");
} else {
    const password = prompt("Password?");
    if (password === null) {
        console.log("Cancelled");
    } else if (password !== "TheMaster") {
        console.log("Wrong password!");
    } else {
        console.log("Wellcome!");
    }
}