// src/components/1-atoms/ListItem.tsx
import React from "react";

export type Item = {
  text: string;
  subItems?: Item[];
};

const Alur: React.FC<{ item: Item }> = ({ item }) => {
  return (
    <li className="break-inside-avoid">
      <span className="flex items-start">
        <span className="mr-2 mt-1 text-orange-500">•</span>
        <span>
          {item.text}
          {/* Logika rekursif untuk sub-list */}
          {item.subItems && (
            <ul className="pl-5 mt-1 space-y-1">
              {item.subItems.map((subItem, index) => (
                // Panggil diri sendiri untuk render sub-item
                <Alur key={index} item={subItem} />
              ))}
            </ul>
          )}
        </span>
      </span>
    </li>
  );
};

export default Alur;
