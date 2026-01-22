export default function Header({ onAdd }) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-4xl font-bold text-transparent">
          User Management
        </h1>
        <p className="mt-2 text-slate-600">
          Manage and organize your team members
        </p>
      </div>

      <button
        onClick={onAdd}
        className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
      >
        <span className="relative z-10 flex items-center gap-2 font-semibold">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add User
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </button>
    </div>
  );
}
