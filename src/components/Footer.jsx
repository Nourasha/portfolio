import { NavLink } from "react-router";
import SocialButtons from "./SocialButtons";

export default function Footer() {
  return (
    <footer className="bg-navy text-navy-muted">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Brand + blurb */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center font-display font-extrabold text-sm">
              N
            </span>
            <span className="font-display text-lg font-extrabold text-white tracking-tight">
              Nour.dev
            </span>
          </div>
          <p className="text-sm leading-relaxed max-w-sm mb-6">
            Full-stack developer and cybersecurity master's student based in Norway, building clean, fast, and secure web applications.
          </p>
          <SocialButtons variant="dark" />
        </div>

        {/* Quick links */}
        <div>
          <p className="font-display text-sm font-bold text-white mb-4">Quick links</p>
          <nav className="flex flex-col gap-3 text-sm">
            <NavLink to="/" className="no-underline text-navy-muted hover:text-white transition-colors">Home</NavLink>
            <NavLink to="/project" className="no-underline text-navy-muted hover:text-white transition-colors">Projects</NavLink>
            <NavLink to="/about" className="no-underline text-navy-muted hover:text-white transition-colors">About</NavLink>
          </nav>
        </div>

        {/* Contact */}
        <div>
          <p className="font-display text-sm font-bold text-white mb-4">Contact</p>
          <div className="flex flex-col gap-3 text-sm">
            <a href="mailto:nour.abshawish@outlook.com" className="no-underline text-navy-muted hover:text-white transition-colors">
              nour.abshawish@outlook.com
            </a>
            <span>Oslo, Norway</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 text-xs text-navy-muted">
          © {new Date().getFullYear()} Nour Aboushawish. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
