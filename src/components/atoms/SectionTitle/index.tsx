import React from "react";
import Divider from "../Divider";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="mb-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        {title}
        <Divider />
      </h2>
    </div>
  );
};

export default SectionTitle;
