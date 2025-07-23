import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className, href }) => {
  const classes = `bg-[#F48512] hover:bg-orange-500 text-white font-bold py-2 px-4 rounded shadow ${className || ""}`;
  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
