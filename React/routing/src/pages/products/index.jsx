import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import ProductCard from "../../components/ProductCard";
import axiosInstance from "../../services/axiosInstance";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await axiosInstance.get("/products");
        const productsArray =
          Array.isArray(result.data.products) ? result.data.products : [];
        setProducts(productsArray);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            err.message ||
            "Məhsullar yüklənərkən xəta baş verdi",
        );
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Kateqoriyalar (məhsullardan dinamik olaraq)
  const categories = [
    "all",
    ...new Set(products.map((p) => p.category).filter(Boolean)),
  ];

  // Filtrlənmiş və sıralanmış məhsullar
  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.title
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return (a.price || 0) - (b.price || 0);
      if (sortBy === "price-high") return (b.price || 0) - (a.price || 0);
      if (sortBy === "name")
        return (a.title || "").localeCompare(b.title || "");
      return 0;
    });

  if (loading) return <Spinner />;

  if (error) {
    return (
      <div className="max-w-4xl mx-auto mt-8 animate-fade-in">
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <svg
                className="w-8 h-8 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-red-800 mb-2">
                Xəta baş verdi
              </h3>
              <p className="text-red-700 mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300">
                Yenidən cəhd et
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Başlıq */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Məhsullar
        </h1>
        <p className="text-gray-600 text-lg">
          {products.length} məhsul mövcuddur
        </p>
      </div>

      {/* Filtr və Axtarış */}
      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
        {/* Axtarış */}
        <div className="relative">
          <input
            type="text"
            placeholder="Məhsullarda axtar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 pl-14 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 outline-none transition-all duration-300"
          />
          <svg
            className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Filtr və Sort */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Kateqoriya filtri */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kateqoriya
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 outline-none transition-all duration-300">
              <option value="all">Hamısı</option>
              {categories
                .filter((c) => c !== "all")
                .map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
            </select>
          </div>

          {/* Sıralama */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sırala
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 outline-none transition-all duration-300">
              <option value="default">Standart</option>
              <option value="price-low">Qiymət: Aşağıdan yuxarı</option>
              <option value="price-high">Qiymət: Yuxarıdan aşağı</option>
              <option value="name">Ad: A-Z</option>
            </select>
          </div>
        </div>

        {/* Aktiv filtr göstəricisi */}
        {(searchTerm || selectedCategory !== "all" || sortBy !== "default") && (
          <div className="flex flex-wrap gap-2 pt-2">
            {searchTerm && (
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                Axtarış: {searchTerm}
                <button
                  onClick={() => setSearchTerm("")}
                  className="hover:text-blue-900">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </span>
            )}
            {selectedCategory !== "all" && (
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                Kateqoriya: {selectedCategory}
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="hover:text-purple-900">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </span>
            )}
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSortBy("default");
              }}
              className="px-3 py-1 text-gray-600 hover:text-gray-800 text-sm font-medium">
              Hamısını təmizlə
            </button>
          </div>
        )}

        {/* Nəticə sayı */}
        {(searchTerm || selectedCategory !== "all") && (
          <p className="text-sm text-gray-500">
            {filteredProducts.length} nəticə tapıldı
          </p>
        )}
      </div>

      {/* Məhsullar grid */}
      {filteredProducts.length === 0 ?
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Məhsul tapılmadı
          </h3>
          <p className="text-gray-600 mb-6">
            {searchTerm || selectedCategory !== "all" ?
              "Axtarış kriteriyalarınıza uyğun məhsul yoxdur"
            : "Hələ heç bir məhsul əlavə edilməyib"}
          </p>
          {(searchTerm || selectedCategory !== "all") && (
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Filtri təmizlə
            </button>
          )}
        </div>
      : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      }
    </div>
  );
}

export default Products;
