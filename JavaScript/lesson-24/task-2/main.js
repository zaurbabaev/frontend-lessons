const search = document.getElementById("search");
const cards = document.getElementById("cards");

/* const baseUrl =
  "https://api.themoviedb.org/3/search/movie?query=spider&api_key=3fd2be6f0c70a2a598f084ddfb75487c"; */

const baseUrl = "https://api.themoviedb.org/3";
const key = "3fd2be6f0c70a2a598f084ddfb75487c";



search.addEventListener("keyup", (e) => {
  const searchValue = search.value.toLowerCase();

  if (e.key === "Enter") {
    searchMovie(searchValue);
  }
});


function searchMovie(param) {
  fetch(`${baseUrl}/search/movie?query=${param}&api_key=${key}`)
    .then(res => res.json())
    .then(data => {
      cards.innerHTML = "";

      data.results.forEach(card => {
        cards.innerHTML += `
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img
              src="https://image.tmdb.org/t/p/w500${card.poster_path}"
              alt="${card.title}"
              class="w-full h-64 object-cover"
            />
            <div class="p-5 flex justify-center">
              <a 
                href="https://image.tmdb.org/t/p/original${card.backdrop_path}" 
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
