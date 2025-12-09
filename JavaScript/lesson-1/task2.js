const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Adın nədir? ", (ans) => {
    console.log(ans);
    readline.close();
});
