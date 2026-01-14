const search = document.getElementById("search");
const cards = document.getElementById("cards");

const baseUrl =
  "https://pixabay.com/api/?key=24090419-925e057925ba4cc124682bb5f&q=";



search.addEventListener("keyup", (e) => {
  const searchValue = search.value.toLowerCase();

  if (e.key === "Enter") {
    render(searchValue);
  }
});

render("baku")

function render(param) {
  fetch(`${baseUrl}${param}`)
    .then(res => res.json())
    .then(data => {
      cards.innerHTML = "";

      data.hits.forEach(card => {
        cards.innerHTML += `
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img
              src="${card.webformatURL}"
              alt="image"
              class="w-full h-64 object-cover"
            />
            <div class="p-5 flex justify-center">
              <a 
                href="${card.largeImageURL}" 
                download 
                target="_blank"
                class="w-10 h-10 rounded-full border hover:bg-gray-100 flex items-center justify-center"
              >
                ⬇
              </a>
            </div>
          </div>
        `;
      });
    })
}
