let baseUrl = "https://dummyjson.com";

function getAllData(path) {
    return fetch(`${baseUrl}/${path}`)
        .then(res => res.json())
        .then(data => data[path])
}

getAllData("products");
getAllData("users");
getAllData("carts");

const btns = document.querySelectorAll("#btns button");
const contents = document.querySelectorAll("#contents>div");


btns.forEach((btn, btnIndex) => {
    btn.addEventListener("click", () => {
        getAllData(btn.id).then(data => {
            console.log(data)
            console.log(contents[btnIndex].firstElementChild);
            data.forEach(elem => {
                if (btnIndex === 0) {
                    contents[btnIndex].firstElementChild.innerHTML += `
                <div
              class="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden flex flex-col">
              <!-- Image + Discount -->
              <div
                class="bg-gray-50 h-52 relative flex items-center justify-center">
                <span
                  class="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
                  -10.48%
                </span>

                <img
                  src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
                  alt="product"
                  class="h-40 object-contain" />
              </div>

              <!-- Content -->
              <div class="p-5 flex flex-col flex-1">
                <!-- Title -->
                <h3 class="font-semibold text-lg text-gray-800 mb-1">
                  Essence Mascara Lash Princess
                </h3>

                <!-- Category + Brand -->
                <div class="text-sm text-gray-500 mb-2">
                  <span class="capitalize">beauty</span> •
                  <span class="font-medium">Essence</span>
                </div>

                <!-- Description -->
                <p class="text-sm text-gray-600 line-clamp-3 mb-4">
                  The Essence Mascara Lash Princess is a popular mascara known
                  for its volumizing and lengthening effects.
                </p>

                <!-- Tags -->
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    class="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-600">
                    beauty
                  </span>
                  <span
                    class="text-xs px-2 py-1 rounded-full bg-pink-100 text-pink-600">
                    mascara
                  </span>
                </div>

                <!-- Rating -->
                <div class="flex items-center gap-2 mb-4">
                  <span class="text-yellow-500 text-sm">⭐ 2.56</span>
                  <span class="text-xs text-gray-500">(reviews)</span>
                </div>

                <!-- Footer -->
                <div class="mt-auto flex justify-between items-center">
                  <div>
                    <div class="flex items-center gap-2">
                      <p class="text-lg font-bold text-blue-600">$9.99</p>
                      <span
                        class="text-xs text-red-600 font-semibold bg-red-100 px-2 py-0.5 rounded">
                        -10.48%
                      </span>
                    </div>

                    <p class="text-xs text-gray-400 line-through">$11.15</p>
                    <p class="text-xs text-green-600">In Stock • 99 left</p>
                  </div>

                  <button
                    class="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                    View
                  </button>
                </div>
              </div>
            </div>
            `
                }
                else if (btnIndex === 1) {
                    contents[btnIndex].firstElementChild.innerHTML += `
                    <div class="bg-white rounded-2xl shadow p-6">
              <!-- User header -->
              <div class="flex items-center gap-4 mb-6">
                <img
                  src="https://dummyjson.com/icon/emilys/128"
                  alt="user"
                  class="w-20 h-20 rounded-full border" />
                <div>
                  <h3 class="text-xl font-semibold text-gray-800">
                    Emily Johnson
                  </h3>
                  <p class="text-sm text-gray-500">
                    Sales Manager • Engineering
                  </p>
                  <span
                    class="inline-block mt-1 px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-700">
                    Admin
                  </span>
                </div>
              </div>

              <!-- User info grid -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <!-- Personal -->
                <div>
                  <h4 class="font-semibold text-gray-700 mb-2">
                    Personal Info
                  </h4>
                  <ul class="space-y-1 text-gray-600">
                    <li><b>Email:</b> emily.johnson@x.dummyjson.com</li>
                    <li><b>Phone:</b> +81 965-431-3024</li>
                    <li><b>Gender:</b> Female</li>
                    <li><b>Age:</b> 29</li>
                    <li><b>Birth Date:</b> 1996-05-30</li>
                    <li><b>Blood Group:</b> O-</li>
                  </ul>
                </div>

                <!-- Address -->
                <div>
                  <h4 class="font-semibold text-gray-700 mb-2">Address</h4>
                  <p class="text-gray-600">
                    626 Main Street, Phoenix <br />
                    Mississippi, MS 29112 <br />
                    United States
                  </p>
                </div>

                <!-- Company -->
                <div>
                  <h4 class="font-semibold text-gray-700 mb-2">Company</h4>
                  <ul class="space-y-1 text-gray-600">
                    <li><b>Name:</b> Dooley, Kozey and Cronin</li>
                    <li><b>Department:</b> Engineering</li>
                    <li><b>Title:</b> Sales Manager</li>
                    <li><b>University:</b> University of Wisconsin–Madison</li>
                  </ul>
                </div>

                <!-- Bank -->
                <div>
                  <h4 class="font-semibold text-gray-700 mb-2">Bank</h4>
                  <ul class="space-y-1 text-gray-600">
                    <li><b>Card:</b> Diners Club</li>
                    <li><b>Expire:</b> 05/28</li>
                    <li><b>Currency:</b> GBP</li>
                    <li><b>IBAN:</b> GB74MH2UZLR9TRPHYNU8F8</li>
                  </ul>
                </div>
              </div>
            </div>

            `
                }
                else {
                    contents[btnIndex].firstElementChild.innerHTML += `
                    <div class="bg-white rounded-2xl shadow p-6 space-y-6">
              <!-- Cart header -->
              <div class="flex justify-between items-center">
                <h3 class="text-xl font-semibold text-gray-800">Cart #1</h3>
                <span class="text-sm text-gray-500"> User ID: 33 </span>
              </div>

              <!-- Products -->
              <div class="space-y-4">
                <!-- Product item -->
                <div class="flex gap-4 border rounded-xl p-4">
                  <img
                    src="https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png"
                    class="w-20 h-20 object-contain" />
                  <div class="flex-1">
                    <h4 class="font-semibold text-gray-800">Charger SXT RWD</h4>
                    <p class="text-sm text-gray-500">
                      Quantity: 3 • Price: $32999.99
                    </p>
                    <p class="text-sm text-green-600">Discounted: $85743.87</p>
                  </div>
                  <span class="text-sm text-red-600 font-semibold">
                    -13.39%
                  </span>
                </div>

                <!-- (digər məhsullar JS ilə buraya map ediləcək) -->
              </div>

              <!-- Summary -->
              <div
                class="border-t pt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p class="text-gray-500">Total Products</p>
                  <p class="font-semibold">4</p>
                </div>
                <div>
                  <p class="text-gray-500">Total Quantity</p>
                  <p class="font-semibold">15</p>
                </div>
                <div>
                  <p class="text-gray-500">Total</p>
                  <p class="font-semibold">$103,774.85</p>
                </div>
                <div>
                  <p class="text-gray-500">Discounted</p>
                  <p class="font-semibold text-green-600">$89,686.65</p>
                </div>
              </div>
            </div>
                    `

                }
            })


            contents.forEach(item => item.classList.add("hidden"));
            contents[btnIndex].classList.remove("hidden");

        })

    });
})