import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-8 animate-fade-in">
        {/* 404 Rəqəmi */}
        <div className="relative">
          <h1 className="text-9xl md:text-[12rem] font-bold bg-linear-to-r from-red-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
            404
          </h1>
          {/* Dekorativ elementlər */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        </div>

        {/* Mesaj */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Səhifə tapılmadı
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Axtardığınız səhifə mövcud deyil və ya köçürülüb. 
            Zəhmət olmasa aşağıdakı linklərdən istifadə edin.
          </p>
        </div>

        {/* İllustrasiya (isteğe bağlı) */}
        <div className="flex justify-center py-6">
          <div className="relative">
            <svg className="w-48 h-48 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {/* Animasiyalı göz yaşları */}
            <div className="absolute bottom-8 left-8 w-2 h-8 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-8 right-8 w-2 h-8 bg-blue-400 rounded-full animate-bounce animation-delay-200"></div>
          </div>
        </div>

        {/* Düymələr */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link
            to="/"
            className="group px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Ana səhifəyə qayıt</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-8 py-4 bg-white text-gray-800 rounded-xl font-semibold border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transition-all duration-300"
          >
            Geri qayıt
          </button>
        </div>

        {/* Əlavə linklər */}
        <div className="pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">Və ya bu səhifələrə baxın:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/products" className="text-blue-600 hover:text-blue-700 hover:underline font-medium">
              Məhsullar
            </Link>
            <span className="text-gray-400">•</span>
            <Link to="/posts" className="text-blue-600 hover:text-blue-700 hover:underline font-medium">
              Postlar
            </Link>
            <span className="text-gray-400">•</span>
            <Link to="/about" className="text-blue-600 hover:text-blue-700 hover:underline font-medium">
              Haqqımızda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}