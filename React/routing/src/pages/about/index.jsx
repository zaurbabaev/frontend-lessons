export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
      {/* Hero bölməsi */}
      <div className="text-center space-y-4 py-8">
        <h1 className="font-bold text-5xl bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Haqqımızda
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Müasir texnologiyalar ilə gələcəyi inşa edirik
        </p>
      </div>

      {/* Əsas məzmun */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Sol tərəf - Şəkil və ya illustrasiya */}
        <div className="relative group">
          <div className="aspect-square bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl overflow-hidden shadow-2xl">
            <div className="w-full h-full flex items-center justify-center text-white">
              <svg className="w-32 h-32 opacity-50 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
          {/* Dekorativ elementlər */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-500 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
        </div>

        {/* Sağ tərəf - Mətn */}
        <div className="space-y-6 flex flex-col justify-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">Bizim Missiyamız</h2>
            <p className="text-gray-600 leading-relaxed">
              Biz React və Tailwind CSS kimi müasir texnologiyalardan istifadə edərək 
              istifadəçilər üçün sürətli, responsiv və gözəl veb tətbiqlər yaradırıq.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Komandamız innovativ həllər və ən yaxşı təcrübələrlə layihələrinizi 
              həyata keçirməyə hazırdır.
            </p>
          </div>

          {/* Statistika */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-gray-600">Layihə</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600">100+</div>
              <div className="text-sm text-gray-600">Müştəri</div>
            </div>
            <div className="text-center p-4 bg-pink-50 rounded-lg">
              <div className="text-3xl font-bold text-pink-600">5+</div>
              <div className="text-sm text-gray-600">İl təcrübə</div>
            </div>
          </div>
        </div>
      </div>

      {/* Dəyərlərimiz */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Dəyərlərimiz</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Dəyər 1 */}
          <div className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Sürət</h3>
            <p className="text-gray-600">Yüksək performans və sürətli çatdırılma bizim prioritetimizdir.</p>
          </div>

          {/* Dəyər 2 */}
          <div className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-linear-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Keyfiyyət</h3>
            <p className="text-gray-600">Hər detalda mükəmməlliyə çalışırıq və ən yaxşı nəticələr veririk.</p>
          </div>

          {/* Dəyər 3 */}
          <div className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-linear-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Komanda</h3>
            <p className="text-gray-600">Peşəkar və əməkdaşlığa açıq komandamızla hər işdə uğur qazanırıq.</p>
          </div>
        </div>
      </div>

      {/* CTA bölməsi */}
      <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
        <h2 className="text-3xl font-bold mb-4">Bizimlə əlaqə saxlayın</h2>
        <p className="text-lg mb-6 opacity-90">
          Layihənizi müzakirə etmək və sizə necə kömək edə biləcəyimizi öyrənmək üçün bizimlə əlaqə saxlayın.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
          Əlaqə saxla
        </button>
      </div>
    </div>
  );
}