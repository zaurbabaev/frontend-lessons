export default function Navbar() {
  return (
    <div className="fixed top-0 z-50 flex w-full items-center justify-between bg-white px-6 py-4 shadow-md">
      {/* Logo */}
      <a href="#home" className="text-lg font-semibold tracking-wide">
        <b>BR</b> Architects
      </a>

      {/* Menu (hidden on small screens) */}
      <div className="hidden space-x-6 md:flex">
        <a href="#projects" className="transition hover:text-gray-600">
          Projects
        </a>
        <a href="#about" className="transition hover:text-gray-600">
          About
        </a>
        <a href="#contact" className="transition hover:text-gray-600">
          Contact
        </a>
      </div>
    </div>
  );
}
