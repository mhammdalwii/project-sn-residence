import type { LucideIcon } from "lucide-react";
import type React from "react";

interface SpecItemProps {
  icon: LucideIcon;
  label: string;
}

const SpecItem: React.FC<SpecItemProps> = ({ icon: Icon, label }) => {
  return (
    <div className="flex items-center gap-3 text-gray-700">
      <Icon className="w-5 h-5 text-orange-500" />
      <span className="text-sm md:text-base">{label}</span>
    </div>
  );
};

export default SpecItem;
