import Link from "next/link";
import SocialButtons from "./SocialButtons";
import Button from "./Button";
import Logo from "./Logo";
import NavLink from "./NavLink";
import {
  MobileMenuPanel,
  MobileMenuProvider,
  MobileMenuToggle,
} from "./MobileMenu";
import { NAV_LINKS } from "@/lib/constants";

export default function NavBar() {
  const links = NAV_LINKS.map((link) => <NavLink key={link.to} {...link} />);

  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-line">
      <MobileMenuProvider>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="no-underline">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {links}
          </nav>

          {/* Høyre side */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex">
              <SocialButtons />
            </div>
            <Button to="/about" size="nav" className="hidden md:inline-block">
              Hire me
            </Button>

            <MobileMenuToggle />
          </div>
        </div>

        {/* Mobile menu */}
        <MobileMenuPanel>
          <nav className="flex flex-col gap-5" aria-label="Mobile">
            {links}
          </nav>
          <div className="pt-2 border-t border-line flex items-center justify-between">
            <SocialButtons />
            <Button to="/about" size="nav">
              Hire me
            </Button>
          </div>
        </MobileMenuPanel>
      </MobileMenuProvider>
    </header>
  );
}
