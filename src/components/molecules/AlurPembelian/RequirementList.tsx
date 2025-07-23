// src/components/2-molecules/RequirementList.tsx
import React from "react";
import ListItem, { type Item } from "../../atoms/Alur";

interface RequirementListProps {
  items: Item[];
  multiColumn?: boolean;
}

const RequirementList: React.FC<RequirementListProps> = ({ items, multiColumn = false }) => {
  return (
    <ul className={`space-y-2 ${multiColumn ? "md:columns-3 md:gap-x-8" : ""}`}>
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default RequirementList;
