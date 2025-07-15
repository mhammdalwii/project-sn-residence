import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="mb-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 ">{title}</h2>
      <div className="w-16 h-1 bg-orange-500 mt-2" />
    </div>
  );
};

export default SectionTitle;
