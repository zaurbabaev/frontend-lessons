const bg = document.getElementById("background");
const pass = document.getElementById("password");

pass.addEventListener("input", e => {
    bg.style.filter = `blur(${20 - (pass.value.length * 2)}px)`;
})
