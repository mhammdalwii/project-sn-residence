import React from "react";
import Divider from "../Divider";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="mb-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 ">{title}</h2>
      <Divider />
    </div>
  );
};

export default SectionTitle;
