import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "text";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  external?: boolean;
}

const base =
  "inline-flex items-center justify-center font-medium tracking-[0.12em] uppercase text-[0.7rem] transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage/40 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-charcoal text-alabaster hover:bg-ink",
  outline:
    "border border-charcoal/20 text-charcoal hover:border-charcoal/50 hover:bg-charcoal/[0.03]",
  text: "text-charcoal underline underline-offset-[6px] decoration-charcoal/20 hover:decoration-charcoal/50 px-0 tracking-[0.08em]",
};

const sizes: Record<Size, string> = {
  sm: "px-6 py-2.5",
  md: "px-8 py-3.5",
  lg: "px-10 py-4",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled,
  external,
}: ButtonProps) {
  const sizeClass = variant === "text" ? "" : sizes[size];
  const classes = `${base} ${variants[variant]} ${sizeClass} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
