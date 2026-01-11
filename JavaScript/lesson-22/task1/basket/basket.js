const localData = JSON.parse(localStorage.getItem("cartList"));

let cartList = [];
const pizzas = document.querySelector(".pizzas");

if (localData) {
    cartList = localData;
}

function rendered(list = data) {
    pizzas.innerHTML = ""
    list.forEach(item => {
        pizzas.innerHTML += `
         <div class="pizza">
             <img src="${item.img}" alt="${item.name}"
                 onerror="this.onerror=null; this.src='noImage.png';">
             <h3>${item.name}</h3>
           <div>
                <span>${item.price} AZN</span>
                <button onclick="addPizzaToBasket(${item.id})">
                    +
                </button>
            </div>
        </div>
    `
    })
}