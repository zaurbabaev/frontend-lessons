import { NavLink } from "react-router-dom";
import { useState } from "react";

const navClass = ({ isActive }) =>
  `relative px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-600 hover:text-white ${
    isActive ?
      "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
    : "text-gray-300"
  }`;

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo və brend */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">
              React Demo
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <NavLink to={"/"} className={navClass}>
              Home
            </NavLink>
            <NavLink to={"/products"} className={navClass}>
              Products
            </NavLink>
            <NavLink to={"/posts"} className={navClass}>
              Posts
            </NavLink>
            <NavLink to={"/about"} className={navClass}>
              About
            </NavLink>
          </div>

          {/* Sağ tərəf - axtarış və profil */}
          <div className="hidden md:flex items-center gap-3">
            <button className="p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-all duration-300">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/30">
              Daxil ol
            </button>
          </div>

          {/* Mobile menyu düyməsi */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-all duration-300">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {isMobileMenuOpen ?
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              : <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              }
            </svg>
          </button>
        </nav>

        {/* Mobile menyu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-gray-700 animate-fade-in">
            <NavLink
              to={"/"}
              className={navClass}
              onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink
              to={"/products"}
              className={navClass}
              onClick={() => setIsMobileMenuOpen(false)}>
              Products
            </NavLink>
            <NavLink
              to={"/posts"}
              className={navClass}
              onClick={() => setIsMobileMenuOpen(false)}>
              Posts
            </NavLink>
            <NavLink
              to={"/about"}
              className={navClass}
              onClick={() => setIsMobileMenuOpen(false)}>
              About
            </NavLink>
            <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
              Daxil ol
            </button>
          </div>
        )}
      </div>

      <div className="h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </header>
  );
}

export default Navbar;
