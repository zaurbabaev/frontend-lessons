const bg = document.querySelector(".bg");

const loadingText = document.querySelector(".loading-text");

let load = 0;

let int = setInterval(() => {
    load++;

    if (load > 99) {
        clearInterval(int);
    }

    loadingText.textContent = `${load}%`;

    loadingText.style.opacity = 1 - load / 100;

    let blurValue = 30-(load / 100) * 30;

    bg.style.filter = `blur(${blurValue}px)`;

}, 30);