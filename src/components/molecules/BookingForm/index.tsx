import { useState } from "react";
import InputField from "../../atoms/BookingInput";

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nama: "",
    whatsapp: "",
    pesan: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { nama, whatsapp, pesan } = formData;
    const message = `Hallo, saya ${nama} ingin booking unit di SN Residence.%0ANomor WA: ${whatsapp}%0APesan: ${pesan}`;
    const whatsappUrl = `https://wa.me/6282292731183?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto">
      <InputField label="Nama Lengkap" name="nama" value={formData.nama} onChange={handleChange} required />
      <InputField label="Nomor WhatsApp" name="whatsapp" type="tel" value={formData.whatsapp} onChange={handleChange} required />
      <InputField label="Pesan" name="pesan" value={formData.pesan} onChange={handleChange} textarea />

      <button type="submit" onClick={handleSubmit} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg mt-2">
        Kirim via WhatsApp
      </button>
    </form>
  );
};

export default BookingForm;
