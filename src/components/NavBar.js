import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import SocialButtons from "./SocialButtons";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const activeClass =
    "no-underline text-sm font-medium text-gray-900 border-b border-gray-900 pb-0.5";
  const inactiveClass =
    "no-underline text-sm font-normal text-gray-400 hover:text-gray-900 transition-colors duration-150";

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="font-serif text-xl text-gray-900 tracking-tight no-underline">
          Nour.dev
        </NavLink>

        {/* Desktop nav — kun synlig på md+ */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" end className={({ isActive }) => isActive ? activeClass : inactiveClass}>
            Biography
          </NavLink>
          <NavLink to="/project" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
            Projects
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
            About me
          </NavLink>
        </nav>

        {/* Høyre side */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex">
            <SocialButtons />
          </div>
          <NavLink
            to="/about"
            className="hidden md:inline-block no-underline bg-gray-900 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-gray-700 transition-colors duration-150"
          >
            Hire me
          </NavLink>

          {/* Hamburger — kun synlig på mobil */}
          <button
            className="md:hidden text-gray-700 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobil-meny — rendres kun når åpen */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-5 px-6 py-6 bg-white border-t border-gray-100">
          <NavLink to="/" end className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={closeMenu}>
            Biography
          </NavLink>
          <NavLink to="/project" className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={closeMenu}>
            Projects
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={closeMenu}>
            About me
          </NavLink>
          <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
            <SocialButtons />
            <NavLink
              to="/about"
              className="no-underline bg-gray-900 text-white text-sm font-medium px-5 py-2 rounded-full"
              onClick={closeMenu}
            >
              Hire me
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}