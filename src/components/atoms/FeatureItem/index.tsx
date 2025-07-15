import React from "react";
import type { LucideIcon } from "lucide-react";

interface FeatureItemProps {
  icon: LucideIcon;
  label: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon: Icon, label }) => {
  return (
    <div className="flex flex-col items-center text-center text-sm text-gray-700 gap-2">
      <Icon className="w-8 h-8 text-orange-500" />
      <span>{label}</span>
    </div>
  );
};

export default FeatureItem;
