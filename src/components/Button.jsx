import { Link } from "react-router";

const SIZES = {
  sm: "px-4 py-2 text-xs",
  nav: "px-5 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3 text-sm",
};

const VARIANTS = {
  primary: "bg-gray-900 text-white hover:bg-gray-700",
  secondary: "border border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900",
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
  const classes = `no-underline inline-block font-medium rounded-full transition-colors duration-150 ${SIZES[size]} ${VARIANTS[variant]} ${className}`;

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
