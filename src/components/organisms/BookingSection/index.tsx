import { useState } from "react";
import InputField from "../../atoms/BookingInput";

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nama: "",
    whatsapp: "",
    pesan: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const validate = () => {
    const { nama, whatsapp } = formData;

    if (!nama.trim() || !whatsapp.trim()) {
      setError("Nama dan Nomor WhatsApp wajib diisi.");
      return false;
    }

    const waOnlyNumbers = whatsapp.replace(/\D/g, "");
    if (waOnlyNumbers.length < 10) {
      setError("Nomor WhatsApp tidak valid. Harus minimal 10 digit angka.");
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const { nama, whatsapp, pesan } = formData;
    const message = `Hallo, saya ${nama} ingin booking unit di SN Residence.%0ANomor WA: ${whatsapp}%0APesan: ${pesan}`;
    const whatsappUrl = `https://wa.me/6282292731183?text=${message}`;

    setSuccess("Berhasil! Mengarahkan ke WhatsApp...");
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto">
      <InputField label="Nama Lengkap" name="nama" value={formData.nama} onChange={handleChange} required />
      <InputField label="Nomor WhatsApp" name="whatsapp" type="tel" value={formData.whatsapp} onChange={handleChange} required />
      <InputField label="Pesan" name="pesan" value={formData.pesan} onChange={handleChange} textarea />

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

      <button type="submit" onClick={handleSubmit} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg mt-2">
        Kirim via WhatsApp
      </button>
    </form>
  );
};

export default BookingForm;
