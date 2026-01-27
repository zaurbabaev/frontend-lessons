import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-16 animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          {/* Dekorativ fon elementləri */}
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

          <div className="relative z-10 space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                React & Tailwind
              </span>
              <br />
              <span className="text-gray-800">ilə gələcək</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Müasir, sürətli və responsiv veb tətbiqlər yaradın. Ən yaxşı
              texnologiyalarla mükəmməl istifadəçi təcrübəsi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link
                to="/products"
                className="group px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <span>Məhsullara bax</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>

              <Link
                to="/about"
                className="px-8 py-4 bg-white text-gray-800 rounded-xl font-semibold border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transition-all duration-300">
                Daha çox öyrən
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Xüsusiyyətlər bölməsi */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Niyə bizi seçməlisiniz?
          </h2>
          <p className="text-xl text-gray-600">
            Sizə təklif etdiyimiz üstünlüklər
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Xüsusiyyət 1 */}
          <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Yüksək Sürət
            </h3>
            <p className="text-gray-600 leading-relaxed">
              React və Tailwind CSS ilə optimallaşdırılmış, ildırım sürətli
              performans.
            </p>
          </div>

          {/* Xüsusiyyət 2 */}
          <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Tam Responsiv
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Bütün cihazlarda mükəmməl görünür - mobil, planşet və desktopda.
            </p>
          </div>

          {/* Xüsusiyyət 3 */}
          <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-linear-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Modern Dizayn
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Müasir UI/UX prinsipləri ilə yaradılmış cəlbedici interfeys.
            </p>
          </div>
        </div>
      </section>

      {/* Statistika bölməsi */}
      <section className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 text-center text-white">
          <div className="space-y-2">
            <div className="text-5xl font-bold">500+</div>
            <div className="text-lg opacity-90">Məhsul</div>
          </div>
          <div className="space-y-2">
            <div className="text-5xl font-bold">1000+</div>
            <div className="text-lg opacity-90">İstifadəçi</div>
          </div>
          <div className="space-y-2">
            <div className="text-5xl font-bold">50+</div>
            <div className="text-lg opacity-90">Şəhər</div>
          </div>
          <div className="space-y-2">
            <div className="text-5xl font-bold">99%</div>
            <div className="text-lg opacity-90">Məmnuniyyət</div>
          </div>
        </div>
      </section>

      {/* Son çağırış (CTA) */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6 pb-12">
        <h2 className="text-4xl font-bold text-gray-800">Hazırsınız?</h2>
        <p className="text-xl text-gray-600">
          Gəlin birgə möhtəşəm bir şey yaradaq
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-10 py-5 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <span>İndi başla</span>
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </section>
    </div>
  );
}
