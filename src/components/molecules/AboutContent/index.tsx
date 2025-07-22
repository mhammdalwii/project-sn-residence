import React from "react";
import SectionTitle from "../../atoms/SectionTitle";

const AboutContent: React.FC = () => {
  return (
    <div className="space-y-4 text-gray-700">
      <SectionTitle title="SN Residence"></SectionTitle>
      <p className="text-sm md:text-base leading-relaxed text-justify">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,.
      </p>
      <p className="text-sm md:text-base leading-relaxed text-justify">
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
        Lorem Ipsum.
      </p>
    </div>
  );
};

export default AboutContent;
