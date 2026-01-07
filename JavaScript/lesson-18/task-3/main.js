/* const items = document.querySelectorAll(".faq");


items.forEach(faq => {
    faq.addEventListener("click", () => {

        items.forEach(pan => pan.classList.remove("active"));
        faq.classList.toggle("active");
    });
});
 */

const toggles = document.querySelectorAll(".faq-toggle");


toggles.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".faq").forEach(faq => {
            faq.classList.remove("active");
        });

        btn.parentElement.classList.toggle("active");
        // btn.closest(".faq").classList.toggle("active");

    });
});

/* toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active")
    });
}) */



