import React from "react";
import SpecList from "../../molecules/SpecList";
import specImage from "../../../assets/spec-image.png";
import Divider from "../../atoms/Divider";

const SpecificationSection: React.FC = () => {
  return (
    <section id="spesifikasi" className="py-16 px-4 md:px-12 bg-gray-50">
      <div className="flex flex-col md:flex-row items-start gap-5 max-w-6xl mx-auto">
        {/* Gambar */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img src={specImage} alt="Spesifikasi Rumah" className="w-full max-w-sm rounded-lg shadow-md md:mx-0" />
        </div>

        {/* Spesifikasi */}
        <div className="w-full md:w-1/2 space-y-6">
          {" "}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Spesifikasi
            <Divider />
          </h2>
          <SpecList />
          <div className="mt-6 text-sm md:text-base text-gray-700 bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
            <strong className="text-orange-600 block mb-1">KHUSUS PEMBELIAN UNIT TIPE 36/72:</strong>
            akan mendapatkan fasilitas tambahan yang tidak dimiliki unit yang sama di perumahan lainnya, yakni: <br />
            <strong>DAPUR</strong>, <strong>TANDON AIR</strong>, dan <strong>PEMASANGAN TV KABEL</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecificationSection;
