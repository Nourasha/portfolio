import { NavLink } from "react-router";
import SocialButtons from "./SocialButtons";
import Logo from "./Logo";
import { EMAIL, NAV_LINKS } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy text-navy-muted">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Brand + blurb */}
        <div className="md:col-span-2">
          <div className="mb-4">
            <Logo light />
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
            {NAV_LINKS.map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end} className="no-underline text-navy-muted hover:text-white transition-colors">
                {label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <p className="font-display text-sm font-bold text-white mb-4">Contact</p>
          <div className="flex flex-col gap-3 text-sm">
            <a href={`mailto:${EMAIL}`} className="no-underline text-navy-muted hover:text-white transition-colors">
              {EMAIL}
            </a>
            <span>Rakkestad, Norway</span>
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
