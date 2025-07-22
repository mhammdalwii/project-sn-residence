// src/components/2-molecules/RequirementCard.tsx
import React from "react";
import Typography from "../../atoms/Typography";
import RequirementList from "./RequirementList";
import { type Item } from "../../atoms/Alur";

interface RequirementCardProps {
  title: string;
  subtitle: string;
  items: Item[];
  multiColumn?: boolean;
}

const RequirementCard: React.FC<RequirementCardProps> = ({ title, subtitle, items, multiColumn }) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      <Typography variant="p" className="text-xl !font-bold text-gray-800">
        {title}
      </Typography>
      <p className="text-sm text-gray-500 mb-4">{subtitle}</p>
      <RequirementList items={items} multiColumn={multiColumn} />
    </div>
  );
};

export default RequirementCard;
