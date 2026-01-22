export default function Sidebar() {
  const menu = [
    { name: "Users", icon: "👥" },
    { name: "Roles", icon: "🔐" },
    { name: "Settings", icon: "⚙️" },
    { name: "Logout", icon: "🚪" },
  ];

  return (
    <aside className="flex w-72 flex-col bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-6 text-white shadow-2xl">
      <div className="mb-10">
        <h2 className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-3xl font-bold text-transparent">
          Admin Panel
        </h2>
        <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
      </div>

      <ul className="flex-1 space-y-2">
        {menu.map((item, index) => (
          <li
            key={item.name}
            className="group cursor-pointer rounded-xl px-4 py-3 transition-all duration-300 hover:translate-x-1 hover:bg-white/10 hover:shadow-lg"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </span>
              <span className="font-medium">{item.name}</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-auto border-t border-slate-700 pt-6">
        <p className="text-center text-sm text-slate-400">© 2026 Company</p>
        <div className="mt-2 flex justify-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
          <span className="text-xs text-slate-400">Online</span>
        </div>
      </div>
    </aside>
  );
}
