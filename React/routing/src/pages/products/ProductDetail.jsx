import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Spinner from "../../components/Spinner";
import axiosInstance from "../../services/axiosInstance";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await axiosInstance.get(`/products/${id}`);
        console.log("Product data:", result.data); // Debug üçün
        setProduct(result.data);
      } catch (err) {
        console.error("Error:", err); // Debug üçün
        setError(
          err.response?.data?.message ||
            err.message ||
            "Məhsul yüklənərkən xəta baş verdi",
        );
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  if (loading) return <Spinner />;

  if (error) {
    return (
      <div className="max-w-4xl mx-auto mt-8">
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 shadow-lg">
          <div className="flex items-start gap-4">
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
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-red-800 mb-2">
                Xəta baş verdi
              </h3>
              <p className="text-red-700 mb-4">{error}</p>
              <div className="flex gap-3">
                <button
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  Yenidən cəhd et
                </button>
                <Link
                  to="/products"
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                  Məhsullara qayıt
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Geri düyməsi */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span className="font-medium">Geri</span>
      </button>

      {/* Əsas məzmun */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Sol tərəf - Şəkil */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-8">
          {product.images ?
            <img
              src={product.images}
              alt={product.title}
              className="w-full h-96 object-contain"
            />
          : <div className="w-full h-96 bg-gray-100 flex items-center justify-center">
              <svg
                className="w-24 h-24 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          }
        </div>

        {/* Sağ tərəf - Məlumatlar */}
        <div className="space-y-6">
          {/* Kateqoriya */}
          {product.category && (
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              {product.category}
            </span>
          )}

          {/* Başlıq */}
          <h1 className="text-4xl font-bold text-gray-900">
            {product.title || "Məhsul"}
          </h1>

          {/* Qiymət */}
          <div className="flex items-baseline gap-4 py-4 border-y border-gray-200">
            <span className="text-5xl font-bold text-blue-600">
              ${product.price || "0"}
            </span>
          </div>

          {/* Təsvir */}
          {product.description && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Təsvir
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>
          )}

          {/* Miqdar seçici */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Miqdar
            </label>
            <div className="flex items-center gap-4">
              <div className="flex items-center border-2 border-gray-300 rounded-lg">
                <button
                  onClick={() => handleQuantityChange("decrease")}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                  disabled={quantity <= 1}>
                  −
                </button>
                <span className="px-6 py-2 font-semibold text-lg">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange("increase")}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors">
                  +
                </button>
              </div>
              <span className="text-gray-600">
                Cəmi:{" "}
                <span className="font-bold text-blue-600">
                  ${((product.price || 0) * quantity).toFixed(2)}
                </span>
              </span>
            </div>
          </div>

          {/* Əməliyyat düymələri */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span>Səbətə at</span>
            </button>
          </div>

          {/* Əlavə məlumatlar */}
          <div className="bg-gray-50 rounded-xl p-6 space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">Pulsuz çatdırılma</span>
            </div>
            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="text-gray-700">30 gün zəmanət</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
