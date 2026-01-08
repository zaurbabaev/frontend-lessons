// const table = document.querySelector("table");
// console.log(table); 

// const cells = document.querySelectorAll("td");
// console.log(cells.length);

const boxs = document.querySelectorAll("td:not(.given-number)");
const nums = document.querySelectorAll(".number-control");
const candidateInput = document.querySelector("#candidate-switch");

let selectedItem;

boxs.forEach(box => {
    box.addEventListener("click", () => {

        boxs.forEach(b => b.classList.remove("selected"));

        box.classList.add("selected");

        selectedItem = box;
    })
})

nums.forEach(num => {
    num.addEventListener("click", () => {

        if (!selectedItem) return;

        let val = num.innerText;

        if (!candidateInput.checked) {
            selectedItem.lastElementChild.innerText = val;
        }
        else {
            let candidates = selectedItem.firstElementChild.textContent.split("");
            if (candidates.includes(val)) {
                candidates = candidates.filter(n => n !== val);
            } else {
                candidates.push(val);
            }
            selectedItem.firstElementChild.textContent = candidates.sort().join("");

        }
    })
})

