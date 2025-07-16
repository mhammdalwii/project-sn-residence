import React from "react";
import { MapPin, Mail } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import logo from "../../../assets/LogoEmboss.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#fef6ed] text-gray-800 py-12 px-6 md:px-16  mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Logo */}
        <img src={logo} alt="SN Residence Bantaeng" className="h-14 w-auto object-contain" />

        {/* Kontak */}
        <div>
          <h2 className="text-lg font-bold mb-4">Kontak Kami</h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <MapPin size={18} className="mt-1 text-orange-500" />
              <div>
                <span className="font-semibold">Lokasi Perumahan</span>
                <br />
                Jl. Poros permandian Bissappu, kel. Bonto salluang, Kab. Bantaeng
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={18} className="mt-1 text-orange-500" />
              <div>
                <span className="font-semibold">Lokasi Kantor</span>
                <br />
                Jl. Pahlawan cabodo (samping alfamidi), Bantaeng
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-orange-500" />
              <span>snresidence88@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Media Sosial */}
        <div>
          <h2 className="text-lg font-bold mb-4">Media Sosial</h2>
          <div className="flex flex-col gap-3 text-sm">
            <a href="https://instagram.com/sn_residence" target="_blank" className="flex items-center gap-2 hover:underline">
              <FaInstagram size={18} className="text-[#E1306C]" />
              @sn_residence
            </a>
            <a href="https://facebook.com/sn_residence" target="_blank" className="flex items-center gap-2 hover:underline">
              <FaFacebook size={18} className="text-[#4267B2]" />
              @sn_residence
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
