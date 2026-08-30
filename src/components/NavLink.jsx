"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ACTIVE = "no-underline text-sm font-semibold text-accent";
const INACTIVE =
  "no-underline text-sm font-medium text-muted hover:text-ink transition-colors duration-150";

export default function NavLink({ to, label, end }) {
  const pathname = usePathname();
  const isActive = end ? pathname === to : pathname.startsWith(to);

  return (
    <Link href={to} className={isActive ? ACTIVE : INACTIVE}>
      {label}
    </Link>
  );
}
