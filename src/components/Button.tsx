
import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 ease-apple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-black text-white hover:bg-gray-900 active:bg-gray-800 shadow-button",
    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300",
    outline:
      "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 active:bg-gray-100",
    ghost:
      "bg-transparent text-gray-700 hover:bg-gray-100 active:bg-gray-200",
    link: "bg-transparent text-gray-700 hover:text-black underline-offset-4 hover:underline p-0 h-auto",
  };

  const sizes = {
    sm: "text-xs px-3 py-2 rounded-lg",
    md: "text-sm px-4 py-2.5 rounded-lg",
    lg: "text-base px-5 py-3 rounded-xl",
  };

  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
