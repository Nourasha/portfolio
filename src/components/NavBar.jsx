import { useState } from "react";
import { NavLink } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import SocialButtons from "./SocialButtons";
import Button from "./Button";
import Logo from "./Logo";
import { NAV_LINKS } from "../lib/constants";

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
        <NavLink to="/" className="no-underline">
          <Logo />
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {NAV_LINKS.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              {label}
            </NavLink>
          ))}
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
          <nav className="flex flex-col gap-5" aria-label="Mobile">
            {NAV_LINKS.map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end} className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={closeMenu}>
                {label}
              </NavLink>
            ))}
          </nav>
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
