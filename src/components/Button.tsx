import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  type?: "default" | "light";
  className?: string;
};

function Button({ children, className, type = "default" }: ButtonProps) {
  const defaultButtonClassName = "px-4 py-2 text-white bg-blue-600 rounded-lg ";
  const buttonLightClassName =
    "px-2 py-1 text-blue-600 bg-blue-100 rounded-lg text-sm font-bold ";
  const buttonClassName =
    type === "light"
      ? `${defaultButtonClassName} ${buttonLightClassName}`
      : defaultButtonClassName;
  return <button className={buttonClassName + className}>{children}</button>;
}

export default Button;
