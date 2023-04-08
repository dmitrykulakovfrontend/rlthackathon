import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  type?: "default" | "light";
  className?: string;
};

function Button({ children, className, type = "default" }: ButtonProps) {
  const defaultButtonClassName =
    " px-4 py-2 text-white bg-blue-600 rounded-lg ";
  const buttonLightClassName =
    " text-blue-600 bg-blue-100 rounded-lg text-sm font-bold ";
  const buttonClassName =
    type === "light" ? buttonLightClassName : defaultButtonClassName;
  return <button className={className + buttonClassName}>{children}</button>;
}

export default Button;
