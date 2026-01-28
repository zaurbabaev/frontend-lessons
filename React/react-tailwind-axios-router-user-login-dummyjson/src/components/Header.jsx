// src/components/Header.jsx
import { useNavigate } from "react-router-dom";

export default function Header({ user }) {
  const navigate = useNavigate();

  const logout = () => navigate("/login");

  return (
    <header className="bg-linear-to-r from-indigo-600 to-purple-600 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">📦</span>
            <h3 className="text-xl font-bold text-white">Dummy App</h3>
          </div>

          {/* User Section */}
          {user && (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={user.image}
                  alt={user.firstName}
                  className="h-10 w-10 rounded-full border-2 border-white shadow-md"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/40";
                  }}
                />
                <span className="hidden font-medium text-white sm:block">
                  {user.firstName}
                </span>
              </div>
              <button
                onClick={logout}
                className="rounded-lg bg-white px-4 py-2 font-semibold text-indigo-600 shadow-md transition-colors hover:bg-gray-100"
              >
                Çıxış
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
