import React from "react";

type Variant = "h2" | "p";
type AsMap = { [key in Variant]: "h2" | "p" };

interface TypographyProps {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
}

const Gallery: React.FC<TypographyProps> = ({ variant, children, className = "" }) => {
  const asMap: AsMap = {
    h2: "h2",
    p: "p",
  };
  const Component = asMap[variant];

  const variantStyles: { [key in Variant]: string } = {
    h2: "text-4xl font-bold text-gray-800",
    p: "text-gray-600 leading-relaxed",
  };

  return <Component className={`${variantStyles[variant]} ${className}`}>{children}</Component>;
};

export default Gallery;
