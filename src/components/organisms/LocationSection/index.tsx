import LocationGrid from "../../molecules/LocationGrid";

const LocationSection: React.FC = () => {
  return (
    <section id="lokasi" className="py-16 px-4 md:px-12 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Lokasi Strategis</h2>
      <div className="w-20 h-1 bg-orange-500 mx-auto my-4" />
      <LocationGrid />
    </section>
  );
};

export default LocationSection;
