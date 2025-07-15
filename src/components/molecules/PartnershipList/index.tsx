import PartnerLogo from "../../atoms/PartnerLogo";
import React from "react";

import bni from "../../../assets/logoBNI.png";
import bri from "../../../assets/logoBRI.png";
import mandiri from "../../../assets/logoMandiri.png";
import btn from "../../../assets/logoBTN.png";
import bsi from "../../../assets/logoBSI.png";

const logos = [
  {
    src: bni,
    alt: "BNI Logo",
  },
  {
    src: bri,
    alt: "BRI Logo",
  },
  {
    src: mandiri,
    alt: "Mandiri Logo",
  },
  {
    src: btn,
    alt: "BTN Logo",
  },
  {
    src: bsi,
    alt: "BSI Logo",
  },
];

const PartnershipList: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center">
      {logos.map((logo, idx) => (
        <PartnerLogo key={idx} src={logo.src} alt={logo.alt} />
      ))}
    </div>
  );
};

export default PartnershipList;
