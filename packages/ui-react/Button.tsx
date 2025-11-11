import React from "react";
import clsx from "clsx";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  className,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-medium rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-400",
    secondary: "bg-secondary-500 hover:bg-secondary-600 text-white focus:ring-secondary-400",
    ghost: "bg-transparent border border-neutral-300 text-neutral-700 hover:bg-neutral-100"
  };
  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-2.5"
  };

  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className, {
        "opacity-70 cursor-wait": loading
      })}
      disabled={loading}
      {...props}
    >
      {loading ? "..." : children}
    </button>
  );
};

export default Button;
