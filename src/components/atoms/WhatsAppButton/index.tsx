import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "6282190652805";
  const message = "Halo, saya ingin konsultasi tentang SN Residence 🙌";
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300" aria-label="Konsultasi via WhatsApp">
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppButton;
