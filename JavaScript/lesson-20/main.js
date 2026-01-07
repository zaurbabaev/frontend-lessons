const codes = document.querySelectorAll(".code");


document.querySelectorAll(".code").forEach(input => {
    input.maxLength = 1;
})

codes.forEach((input, index) => {
    input.addEventListener("input", () => {
        if (input.value && codes[index + 1]) {
            codes[index + 1].focus();
        }
    })

    input.addEventListener("keyup", (e) => {
        if (e.key === "Backspace" && !input.value && codes[index - 1]) {
            codes[index - 1].focus();
        }
    })
})