const items = document.querySelectorAll("#mode li");
const body = document.body;


items.forEach(li => {
    li.addEventListener("click", () => {
        body.classList.remove("red", "green", "yellow");
        body.classList.add(li.className);
    });
});


