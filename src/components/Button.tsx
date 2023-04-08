import Link from "next/link";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  type?: "default" | "light";
  className?: string;
  href?: string;
};

function Button({ children, className, type = "default", href }: ButtonProps) {
  const defaultButtonClassName =
    " px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-400 transition-colors";
  const buttonLightClassName =
    " text-blue-600 bg-blue-100 rounded-lg text-sm font-bold hover:bg-blue-300 hover:text-blue-700 active:text-blue-100 active:bg-blue-500 transition-colors";
  const buttonClassName =
    type === "light" ? buttonLightClassName : defaultButtonClassName;
  return href ? (
    <Link href={href} className={className + buttonClassName}>
      {children}
    </Link>
  ) : (
    <button className={className + buttonClassName}>{children}</button>
  );
}

export default Button;
