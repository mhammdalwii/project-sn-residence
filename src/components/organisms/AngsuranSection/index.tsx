import AngusranMenGrid from "../../molecules/AngsuranMenGrid";

const AngsuranSection: React.FC = () => {
  return (
    <section id="angsuran" className="py-16 px-4 md:px-12 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Pilihan Angsuran SN Residence</h2>
      <div className="w-20 h-1 bg-orange-500 mx-auto my-4" />
      <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base">Kami menyediakan beberapa pilihan angsuran yang berlaku pada setiap unit untuk memudahkan anda dalam memiliki hunian berkelas.</p>
      <AngusranMenGrid />
    </section>
  );
};
export default AngsuranSection;
