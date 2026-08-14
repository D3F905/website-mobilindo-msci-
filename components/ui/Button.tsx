import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type LinkOwnProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonOwnProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonProps = LinkOwnProps | ButtonOwnProps;

const BASE_STYLES =
  "inline-flex items-center justify-center gap-2 rounded-sm font-semibold uppercase tracking-wider transition-all duration-200 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none";

const VARIANT_STYLES: Record<Variant, string> = {
  primary: "bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-700",
  secondary: "bg-white text-ink-950 border border-neutral-200 hover:border-ink-950/30 hover:bg-neutral-50",
  ghost: "bg-transparent text-white border border-white/30 hover:border-white/60 hover:bg-white/5",
};

const SIZE_STYLES: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: ButtonProps) {
  const classes = [BASE_STYLES, VARIANT_STYLES[variant], SIZE_STYLES[size], className]
    .filter(Boolean)
    .join(" ");

  if (rest.href) {
    const { href, children, ...anchorProps } = rest as Omit<
      LinkOwnProps,
      "variant" | "size" | "className"
    >;
    const isExternal = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  const { children, type = "button", ...buttonProps } = rest as Omit<
    ButtonOwnProps,
    "variant" | "size" | "className"
  >;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
