
const liElements = document.querySelectorAll("ul li");
const body = document.body;

liElements.forEach(li => {
    li.addEventListener("click", () => {
        body.classList.remove("red", "green", "yellow");

        body.classList.add(li.className)
    })
})