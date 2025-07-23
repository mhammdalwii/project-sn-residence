import React from "react";

// Mendefinisikan varian yang diizinkan
type Variant = "h2" | "p";

// Mapping varian ke tag HTML yang sebenarnya
type AsMap = { [key in Variant]: "h2" | "p" };

interface TypographyProps {
  variant: Variant;
  children: React.ReactNode;
  className?: string; // Prop untuk menambahkan style kustom dari Tailwind
}

const Typography: React.FC<TypographyProps> = ({ variant, children, className = "" }) => {
  const asMap: AsMap = {
    h2: "h2",
    p: "p",
  };
  const Component = asMap[variant];

  // Mendefinisikan style dasar untuk setiap varian
  const variantStyles: { [key in Variant]: string } = {
    h2: "text-3xl font-bold text-gray-800",
    p: "text-gray-600 leading-relaxed",
  };

  return <Component className={`${variantStyles[variant]} ${className}`}>{children}</Component>;
};

export default Typography;
