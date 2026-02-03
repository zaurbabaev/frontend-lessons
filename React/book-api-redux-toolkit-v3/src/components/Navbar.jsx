import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg border-b-4 border-purple-500">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-linear-to-br from-purple-600 to-pink-600 p-2 rounded-lg transform group-hover:scale-110 transition-transform">
              <span className="text-2xl">📚</span>
            </div>
            <span className="text-2xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              KitabXana
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                isActive("/") ?
                  "bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-md"
                : "text-gray-700 hover:bg-purple-50"
              }`}>
              📚 Kitablar
            </Link>
            <Link
              to="/create"
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                isActive("/create") ?
                  "bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-md"
                : "text-gray-700 hover:bg-purple-50"
              }`}>
              ➕ Əlavə Et
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
