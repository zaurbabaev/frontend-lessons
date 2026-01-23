export default function UsersView({ data, loading }) {
  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-emerald-600"></div>
          <p className="text-sm text-gray-500">Yüklənir...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-5 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((u) => (
        <div
          key={u.id}
          className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 opacity-50"></div>

          {/* Content */}
          <div className="relative p-6">
            {/* Header with Avatar */}
            <div className="flex items-start gap-4">
              {/* Avatar with ring */}
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 opacity-75 blur transition-all duration-300 group-hover:opacity-100"></div>
                <img
                  src={u.image}
                  alt={`${u.firstName} ${u.lastName}`}
                  className="relative h-16 w-16 rounded-full border-4 border-white object-cover shadow-lg"
                />
                {/* Online status indicator */}
                <div className="absolute right-0 bottom-0 h-4 w-4 rounded-full border-2 border-white bg-emerald-500 shadow"></div>
              </div>

              {/* User Info */}
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-lg font-bold text-gray-800">
                  {u.firstName} {u.lastName}
                </h3>
                <p className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  İstifadəçi #{u.id}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="my-4 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

            {/* Details Grid */}
            <div className="space-y-2">
              {u.email && (
                <div className="flex items-center gap-2 text-sm">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="truncate text-gray-600">{u.email}</span>
                </div>
              )}

              {u.phone && (
                <div className="flex items-center gap-2 text-sm">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-600">{u.phone}</span>
                </div>
              )}

              {u.company?.name && (
                <div className="flex items-center gap-2 text-sm">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span className="truncate text-gray-600">
                    {u.company.name}
                  </span>
                </div>
              )}
            </div>

            {/* Action Button */}
            <button className="mt-4 w-full rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]">
              Profili gör
            </button>
          </div>

          {/* Decorative corner element */}
          <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-emerald-200 opacity-20 transition-transform duration-500 group-hover:scale-150"></div>
        </div>
      ))}
    </div>
  );
}
