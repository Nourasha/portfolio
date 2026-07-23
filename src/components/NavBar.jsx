import { useState } from "react";
import { NavLink } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import SocialButtons from "./SocialButtons";
import Button from "./Button";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const activeClass =
    "no-underline text-sm font-medium text-gray-900 border-b border-gray-900 pb-0.5";
  const inactiveClass =
    "no-underline text-sm font-normal text-gray-500 hover:text-gray-900 transition-colors duration-150";

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="font-serif text-xl text-gray-900 tracking-tight no-underline">
          Nour.dev
        </NavLink>

        {/* Desktop nav */}
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
          <Button to="/about" size="nav" className="hidden md:inline-block">
            Hire me
          </Button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-700 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
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
            <Button to="/about" size="nav" onClick={closeMenu}>
              Hire me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}