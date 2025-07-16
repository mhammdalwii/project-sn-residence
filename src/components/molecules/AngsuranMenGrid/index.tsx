import InstallmentCard from "../../atoms/InstallmentCard";

const data = [
  { title: "Angsuran 10 Tahun", duration: "120x", price: "Rp 1.577.000 /Bln" },
  { title: "Angsuran 15 Tahun", duration: "180x", price: "Rp 1.176.000 /Bln" },
  { title: "Angsuran 20 Tahun", duration: "240x", price: "Rp 982.000 /Bln" },
  { title: "Cash", duration: "—", price: "Rp 156.000.000" },
];

const AngusranMenGrid: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-8">
      {data.map((item, index) => (
        <InstallmentCard key={index} {...item} />
      ))}
    </div>
  );
};

export default AngusranMenGrid;
