import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`bg-[#F48512] hover:bg-orange-500 text-white font-bold py-2 px-4 rounded shadow ${className}`}>
      {children}
    </button>
  );
};

export default Button;
