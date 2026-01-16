const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <a href="#home" className="text-lg font-semibold tracking-wide">
        <b>BR</b> Architects
      </a>

      {/* Menu (hidden on small screens) */}
      <div className="hidden md:flex space-x-6">
        <a href="#projects" className="hover:text-gray-600 transition">
          Projects
        </a>
        <a href="#about" className="hover:text-gray-600 transition">
          About
        </a>
        <a href="#contact" className="hover:text-gray-600 transition">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
