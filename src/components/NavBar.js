import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import SosialButtons from "./SosialButtons";

export default function NavBar() {
  const hamNav = useRef();

  const showNavBar = () => {
    hamNav.current.classList.toggle("nav-open");
  };

  const closeNavBar = () => {
    hamNav.current.classList.remove("nav-open");
  };

  const activeClass =
    "no-underline text-sm font-medium text-gray-900 border-b border-gray-900 pb-0.5";
  const inactiveClass =
    "no-underline text-sm font-normal text-gray-400 hover:text-gray-900 transition-colors duration-150";

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="font-serif text-xl text-gray-900 tracking-tight no-underline">
          nourdev.io
        </NavLink>

        {/* Desktop nav */}
        <nav ref={hamNav} className="hidden md:flex items-center gap-8">
          <NavLink to="/" end className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={closeNavBar}>
            Biography
          </NavLink>
          <NavLink to="/project" className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={closeNavBar}>
            Projects
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={closeNavBar}>
            About me
          </NavLink>
          <button className="nav-btn-close md:hidden" onClick={showNavBar}>
            <FaTimes size={16} />
          </button>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <SosialButtons />
          <NavLink
            to="/about"
            className="no-underline bg-gray-900 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-gray-700 transition-colors duration-150"
          >
            Hire me
          </NavLink>
          {/* Mobile hamburger */}
          <button className="md:hidden text-gray-700" onClick={showNavBar}>
            <FaBars size={18} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div ref={hamNav} className="nav-mobile md:hidden hidden flex-col gap-4 px-8 pb-6 bg-white border-t border-gray-100">
        <NavLink to="/" end className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={closeNavBar}>Biography</NavLink>
        <NavLink to="/project" className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={closeNavBar}>Projects</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={closeNavBar}>About me</NavLink>
      </div>
    </header>
  );
}