import React from "react";
import { MoonStar, Leaf, GraduationCap, Dumbbell, ShieldCheck, MapPin, Waves } from "lucide-react";

import FeatureItem from "../../atoms/FeatureItem";

const features = [
  { icon: MoonStar, label: "Masjid" },
  { icon: Leaf, label: "Ruang Terbuka Hijau" },
  { icon: GraduationCap, label: "PAUD" },
  { icon: Dumbbell, label: "Tempat Olahraga" },
  { icon: ShieldCheck, label: "Security 24 Jam" },
  { icon: MapPin, label: "Lokasi Strategis" },
  { icon: Waves, label: "Bebas Banjir" },
];

const FeatureGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 max-w-4xl mx-auto text-center">
      {features.map((item, idx) => (
        <FeatureItem key={idx} icon={item.icon} label={item.label} />
      ))}
    </div>
  );
};

export default FeatureGrid;
