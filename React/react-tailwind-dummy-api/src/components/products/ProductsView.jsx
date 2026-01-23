export default function ProductsView({ data, loading }) {
  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-purple-600"></div>
          <p className="text-sm text-gray-500">Yüklənir...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((p) => (
        <div
          key={p.id}
          className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          {/* Image Container */}
          <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-6">
            <img
              src={p.thumbnail}
              alt={p.title}
              className="h-48 w-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Brand Badge */}
            {p.brand && (
              <span className="mb-2 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                {p.brand}
              </span>
            )}

            {/* Title */}
            <h3 className="mb-2 line-clamp-2 text-base font-bold text-gray-800 transition-colors group-hover:text-purple-600">
              {p.title}
            </h3>

            {/* Price & Rating Row */}
            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Qiymət</span>
                <span className="text-2xl font-bold text-purple-600">
                  ${p.price}
                </span>
              </div>

              {/* Add to cart button */}
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-purple-700 active:scale-95">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 h-16 w-16 translate-x-8 -translate-y-8 rounded-full bg-purple-200 opacity-20 transition-transform duration-500 group-hover:translate-x-6 group-hover:-translate-y-6"></div>
        </div>
      ))}
    </div>
  );
}
