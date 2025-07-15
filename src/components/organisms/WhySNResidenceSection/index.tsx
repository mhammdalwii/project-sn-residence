import FeatureGrid from "../../molecules/FeatureGrid";
import React from "react";

const WhySNResidenceSection: React.FC = () => {
  return (
    <section id="keunggulan" className="py-16 px-4 md:px-12 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Mengapa Harus SN Residence?</h2>
      <div className="w-20 h-1 bg-orange-500 mx-auto my-4" />
      <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base">
        SN Residence tidak hanya menjamin kenyamanan anda beristirahat di dalam rumah saja. Kenyamanan lingkungan perumahan juga menjadi prioritas SN Residence Bantaeng untuk anda!
      </p>

      <FeatureGrid />
    </section>
  );
};

export default WhySNResidenceSection;
