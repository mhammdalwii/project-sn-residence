import React from "react";

interface InstallmentCardProps {
  title: string;
  duration: string;
  price: string;
}

const InstallmentCard: React.FC<InstallmentCardProps> = ({ title, duration, price }) => {
  return (
    <div className="bg-gradient-to-r from-[#BF670B] to-[#FF9E39] text-white p-6 rounded-xl shadow-md w-full max-w-xs">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm mb-2">{duration}</p>
      <hr className="border-white/40 my-2" />
      <p className="text-xl font-bold">{price}</p>
    </div>
  );
};

export default InstallmentCard;
