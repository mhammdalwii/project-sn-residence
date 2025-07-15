import React from "react";
import AboutContent from "../../molecules/AboutContent";
import aboutImage from "../../../assets/AboutImage.png";

const AboutSection: React.FC = () => {
  return (
    <section id="tentang" className="py-16 px-4 md:px-12 bg-white flex flex-col md:flex-row md:items-start gap-8">
      {/* Gambar */}
      <div className="w-full md:w-1/3">
        <img src={aboutImage} alt="SN Residence" className="w-full h-auto rounded-lg shadow-md mx-auto md:mx-0" />
      </div>

      {/* Teks */}
      <div className="w-full md:w-2/3">
        <AboutContent />
      </div>
    </section>
  );
};

export default AboutSection;
