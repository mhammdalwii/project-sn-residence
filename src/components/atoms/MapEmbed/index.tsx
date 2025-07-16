import React from "react";

interface MapEmbedProps {
  title: string;
  src: string;
}

const MapEmbed: React.FC<MapEmbedProps> = ({ title, src }) => {
  return (
    <div className="w-full max-w-md">
      <h3 className="text-center font-semibold text-gray-700 mb-5">{title}</h3>
      <div className="rounded-lg overflow-hidden shadow-md">
        <iframe src={src} width="100%" height="250" allowFullScreen loading="lazy" className="w-full" />
      </div>
    </div>
  );
};

export default MapEmbed;
