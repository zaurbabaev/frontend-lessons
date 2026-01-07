const btn = document.querySelector("#mode");

/* btn.addEventListener("click", () => {
    const body = document.body;
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        btn.textContent = "Dark Mode";
    }
    else {
        body.classList.add("dark");
        btn.textContent = "Light Mode";
    }
}) */

const body = document.body;

btn.addEventListener("click", () => {
    body.classList.toggle("dark");

    btn.textContent = body.classList.contains("dark")
        ?
        "Light Mode" : "Dark Mode";
})
