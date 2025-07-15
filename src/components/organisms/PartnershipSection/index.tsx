import PartnershipList from "../../molecules/PartnershipList";
import React from "react";

const PartnershipSection: React.FC = () => {
  return (
    <section id="partnership" className="py-16 px-4 md:px-12 bg-gray-50 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Partnership</h2>
      <PartnershipList />
    </section>
  );
};

export default PartnershipSection;
