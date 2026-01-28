import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-purple-500 via-pink-500 to-red-500 px-4">
      <div className="text-center">
        {/* Animated 404 */}
        <div className="mb-8">
          <h1 className="animate-bounce text-9xl font-bold text-white">404</h1>
          <div className="mt-4 animate-pulse text-6xl">🤔</div>
        </div>

        {/* Message */}
        <h2 className="mb-4 text-3xl font-bold text-white">Səhifə tapılmadı</h2>
        <p className="mx-auto mb-8 max-w-md text-lg text-white/90">
          Axtardığınız səhifə mövcud deyil və ya köçürülüb
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="rounded-lg bg-white px-6 py-3 font-semibold text-purple-600 shadow-lg transition-all hover:bg-gray-100"
          >
            ← Geri qayıt
          </button>
          <button
            onClick={() => navigate("/")}
            className="rounded-lg border-2 border-white bg-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-purple-700"
          >
            Ana səhifə
          </button>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 text-sm text-white/50">
          <p>Kömək lazımdır? Bizimlə əlaqə saxlayın</p>
        </div>
      </div>
    </div>
  );
}
