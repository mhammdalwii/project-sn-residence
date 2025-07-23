import React from "react";
import SectionTitle from "../../atoms/SectionTitle";

const AboutContent: React.FC = () => {
  return (
    <div className="space-y-4 text-gray-700">
      <SectionTitle title="SN Residence"></SectionTitle>
      <p className="text-sm md:text-base leading-relaxed text-justify">
        SN Residence adalah perumahan subsidi yang dikembangkan oleh PT. Berkah Bintang Pratama di Kabupaten Bantaeng, Sulawesi Selatan. Dengan fokus pada hunian terjangkau dan layak huni untuk masyarakat berpenghasilan rendah, SN Residence
        menghadirkan rumah-rumah dengan desain menarik, kualitas bangunan terjaga, serta proses kepemilikan yang dibantu secara menyeluruh, termasuk pengurusan KPR. Mengusung visi menjadi developer perumahan subsidi paling unggul di
        Bantaeng, SN Residence juga berkomitmen pada efisiensi produksi, pemberdayaan tenaga kerja lokal, serta memberikan dampak sosial yang positif bagi lingkungan sekitar.
      </p>
    </div>
  );
};

export default AboutContent;
