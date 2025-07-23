import type React from "react";
import sitePlan1 from "../../../assets/sitePlan1.jpg";
import sitePlan2 from "../../../assets/sitePlan3.jpg";
import Divider from "../../atoms/Divider";
const SitePlanSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-8" id="showcase">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-8">
          Site Plan
          <Divider />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Gambar SN1 */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-medium text-gray-700 mb-2">SN RESIDENCE 1</h3>
            <img src={sitePlan1} alt="SN1" className="w-full max-w-md h-auto rounded-xl shadow-md object-cover" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-medium text-gray-700 mb-2">SN RESIDENCE 3</h3>
            <img src={sitePlan2} alt="SN3" className="w-full max-w-md h-auto rounded-xl shadow-md object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SitePlanSection;
