import { useState } from "react";
import { NavLink } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import SocialButtons from "./SocialButtons";
import Button from "./Button";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const activeClass =
    "no-underline text-sm font-semibold text-accent";
  const inactiveClass =
    "no-underline text-sm font-medium text-muted hover:text-ink transition-colors duration-150";

  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-line">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 no-underline">
          <span className="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center font-display font-extrabold text-sm">
            N
          </span>
          <span className="font-display text-lg font-extrabold text-ink tracking-tight">
            Nour.dev
          </span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" end className={({ isActive }) => isActive ? activeClass : inactiveClass}>
            Home
          </NavLink>
          <NavLink to="/project" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
            Projects
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
            About
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
            className="md:hidden text-ink p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-5 px-6 py-6 bg-white border-t border-line">
          <NavLink to="/" end className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/project" className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={closeMenu}>
            Projects
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={closeMenu}>
            About
          </NavLink>
          <div className="pt-2 border-t border-line flex items-center justify-between">
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
