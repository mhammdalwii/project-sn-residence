import React from "react";
import { Home, Car, Sofa, BedDouble, Bath } from "lucide-react";
import SpecItem from "../../atoms/SpecItem";

const specs = [
  { icon: Home, label: "Desain rumah minimalis" },
  { icon: Car, label: "Carport" },
  { icon: Sofa, label: "Ruang tamu dan keluarga" },
  { icon: BedDouble, label: "2 Kamar Tidur" },
  { icon: Bath, label: "1 Kamar Mandi" },
];

const SpecList: React.FC = () => {
  return (
    <div className="space-y-3">
      {specs.map((spec, index) => (
        <SpecItem key={index} icon={spec.icon} label={spec.label} />
      ))}
    </div>
  );
};

export default SpecList;
