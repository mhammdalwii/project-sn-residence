import React from "react";

interface PartnerLogoProps {
  src: string;
  alt: string;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ src, alt }) => {
  return (
    <div className="p-4 flex items-center justify-center">
      <img src={src} alt={alt} className="h-12 md:h-16 object-contain" />
    </div>
  );
};

export default PartnerLogo;
