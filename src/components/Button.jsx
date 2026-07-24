import { Link } from "react-router";

const SIZES = {
  sm: "px-4 py-2 text-xs",
  nav: "px-5 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-base",
};

const VARIANTS = {
  primary: "bg-accent text-white shadow-md shadow-accent/25 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/30",
  secondary: "border-2 border-line text-ink hover:border-accent hover:text-accent",
};

export default function Button({
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const classes = `no-underline inline-block font-semibold rounded-full transition-all duration-150 ${SIZES[size]} ${VARIANTS[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
