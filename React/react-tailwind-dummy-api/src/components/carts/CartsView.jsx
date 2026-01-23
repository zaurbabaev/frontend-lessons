export default function CartsView({ data, loading }) {
  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"></div>
          <p className="text-sm text-gray-500">Yüklənir...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-5 p-4">
      {data.map((c) => (
        <div
          key={c.id}
          className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:border-gray-200 hover:shadow-xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-md">
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
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Səbət #{c.id}
                </h3>
                <p className="text-xs text-gray-500">İstifadəçi #{c.userId}</p>
              </div>
            </div>
            <div className="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-blue-600 shadow-sm">
              {c.products.length} məhsul
            </div>
          </div>

          {/* Products */}
          <div className="divide-y divide-gray-100 px-6 py-3">
            {c.products.map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-between py-3 transition-colors hover:bg-gray-50"
              >
                <div className="flex flex-1 items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                  <span className="text-sm font-medium text-gray-700">
                    {p.title}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                    ×{p.quantity}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50 px-6 py-4">
            <span className="text-sm font-medium text-gray-600">
              Cəmi məbləğ
            </span>
            <span className="text-2xl font-bold text-gray-800">
              ${c.total.toFixed(2)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
