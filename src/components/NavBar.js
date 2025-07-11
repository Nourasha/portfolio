import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import HeaderContent from "./HeaderContent";
import SosialButtons from "./SosialButtons";

export default function NavBar() {
  const hamNav = useRef();

  // Toggle the nav bar open/close
  const showNavBar = () => {
    hamNav.current.classList.toggle("responsive_nav");
  };

  // Close the nav bar when a link is clicked
  const closeNavBar = () => {
    hamNav.current.classList.remove("responsive_nav");
  };

  return (
    <header className="bg-zinc-900 flex-row p-6 h-full w-auto overflow-hidden">
      <div className="bg-nav container flex justify-between mx-auto mb-6 rounded-full bg-slate-50 h-13 shadow-lg shadow-white">
        <nav ref={hamNav} className="flex items-center">
          <NavLink
            to="/"
            exact
            className={({ isActive }) =>
              isActive
                ? "no-underline inflex-flex items-center py-6 px-3 mx-4 text-green-500 hover:text-green-900 font-bold anton tracking-widest"
                : "no-underline inflex-flex items-center py-6 px-3 mx-4 text-red-400 hover:text-green-900 font-bold anton tracking-widest"
            }
            onClick={closeNavBar} // Close menu on link click
          >
            Biography
          </NavLink>
          <NavLink
            to="/post"
            className={({ isActive }) =>
              isActive
                ? "no-underline inline-flex items-center py-3 px-3 rounded text-green-500 font-bold hover:text-green-900"
                : "no-underline inline-flex items-center py-3 px-3 rounded text-red-400 font-bold hover:text-green-900"
            }
            onClick={closeNavBar} // Close menu on link click
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive
                ? "no-underline inline-flex items-center py-3 px-3 rounded text-green-500 font-bold hover:text-green-900"
                : "no-underline inline-flex items-center py-3 px-3 rounded text-red-400 font-bold hover:text-green-900"
            }
            onClick={closeNavBar} // Close menu on link click
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "no-underline inline-flex items-center py-3 px-3 rounded text-green-500 font-bold hover:text-green-900"
                : "no-underline inline-flex items-center py-3 px-3 rounded text-red-400 font-bold hover:text-green-900"
            }
            onClick={closeNavBar} // Close menu on link click
          >
            About Me
          </NavLink>
          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavBar}>
          <FaBars />
        </button>
        <SosialButtons />
      </div>
    </header>
  );
}
