import React from "react";

const FooterCopyright: React.FC = () => {
  return (
    <div className="bg-[#1A3139] text-white text-center py-4 px-6">
      <div className=" md:flex-row gap-2">
        <p className="text-white">
          &copy; 2025, <span className="font-semibold">SN Residence</span> - PT. Berkah Bintang Pratama
        </p>
        <p className="text-gray-300 mt-2">
          Developed by <span className="font-semibold text-white">HREV</span>
        </p>
      </div>
    </div>
  );
};

export default FooterCopyright;
