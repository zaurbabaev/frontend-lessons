const table = document.querySelector("table");
console.log(table);

const cells = document.querySelectorAll("td");
console.log(cells.length);

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        console.log("Xanaya klik olundu");

        cells.forEach(c => c.classList.remove("selected"));

        cell.classList.add("selected");
    })
})

