const items = document.querySelectorAll(".panel");


items.forEach(panel => {
    panel.addEventListener("click", () => {

        items.forEach(pan => pan.classList.remove("active"));

        panel.classList.add("active");
    });
});


