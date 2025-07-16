import React from "react";
import MapEmbed from "../../atoms/MapEmbed";

const LocationGrid: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
      <MapEmbed
        title="Kantor"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.1850191799635!2d119.91341560000001!3d-5.5395582999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbeb3fdf9699b25%3A0x92812bdc3b954b8a!2sSN%20Residence!5e0!3m2!1sen!2sid!4v1752665099750!5m2!1sen!2sid"
      />
      <MapEmbed
        title="SN 1"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.1850191799635!2d119.91341560000001!3d-5.5395582999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbeb3fdf9699b25%3A0x92812bdc3b954b8a!2sSN%20Residence!5e0!3m2!1sen!2sid!4v1752665099750!5m2!1sen!2sid"
      />
      <MapEmbed
        title="SN 3"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1985.6051297981896!2d119.9414202!3d-5.5358022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbeb3007c8a2c39%3A0xf2797e9ece29f29d!2sSn%20Residence%203!5e0!3m2!1sen!2sid!4v1752676092810!5m2!1sen!2sid"
      />
    </div>
  );
};

export default LocationGrid;
