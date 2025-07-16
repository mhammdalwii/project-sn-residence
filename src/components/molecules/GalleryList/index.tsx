import type React from "react";
import Gallery from "../../atoms/Gallery";
import Divider from "../../atoms/Divider";

interface GalleryListProps {
  title: string;
  description: string;
}

const GalletyList: React.FC<GalleryListProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <Gallery variant="h2">{title}</Gallery>
      <Divider />
      <Gallery variant="p" className="mt-6 text-center md:text-left">
        {description}
      </Gallery>
    </div>
  );
};

export default GalletyList;
