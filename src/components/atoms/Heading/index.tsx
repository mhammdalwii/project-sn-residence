import React from "react";

interface HeadingProps {
  title: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, className }) => {
  return <h1 className={`text-2xl md:text-4xl font-bold text-white ${className}`}>{title}</h1>;
};

export default Heading;
