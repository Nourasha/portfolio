"use client";

import { createContext, useContext, useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const MobileMenuContext = createContext(null);

/**
 * Holds the open/closed state for the mobile menu. Only the toggle and the panel
 * shell are client-rendered — everything passed as children stays on the server.
 */
export function MobileMenuProvider({ children }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [renderedPathname, setRenderedPathname] = useState(pathname);

  // Reset on navigation by adjusting state during render rather than in an
  // effect: https://react.dev/learn/you-might-not-need-an-effect
  if (pathname !== renderedPathname) {
    setRenderedPathname(pathname);
    setOpen(false);
  }

  return (
    <MobileMenuContext.Provider value={{ open, setOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
}

export function MobileMenuToggle() {
  const { open, setOpen } = useContext(MobileMenuContext);

  return (
    <button
      className="md:hidden text-ink p-1"
      onClick={() => setOpen(!open)}
      aria-label="Toggle menu"
      aria-expanded={open}
    >
      {open ? <FaTimes size={18} /> : <FaBars size={18} />}
    </button>
  );
}

export function MobileMenuPanel({ children }) {
  const { open, setOpen } = useContext(MobileMenuContext);

  if (!open) return null;

  return (
    // Closing on click covers taps that do not change the route (e.g. "Hire me"
    // while already on /about); the provider handles the ones that do.
    <div
      className="md:hidden flex flex-col gap-5 px-6 py-6 bg-white border-t border-line"
      onClick={() => setOpen(false)}
    >
      {children}
    </div>
  );
}
