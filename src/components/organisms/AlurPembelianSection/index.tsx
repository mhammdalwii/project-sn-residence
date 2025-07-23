import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

// PERBAIKAN: Sesuaikan path impor dengan struktur Atomic Design kita
import RequirementCard from "../../molecules/AlurPembelian/RequirementCard";
import { type Item } from "../../atoms/Alur";
import Typography from "../../atoms/Typography";
import Divider from "../../atoms/Divider";

// --- Definisi data untuk setiap kartu (Ini sudah benar) ---
const pemesanan: Item[] = [{ text: "Memilih unit rumah yang tersedia." }, { text: "Menyetujui harga dan syarat pembelian" }, { text: "Membayar tanda jadi (booking fee)" }];
const pengumpulan: Item[] = [{ text: "KTP Suami & Istri (Jika menikah)." }, { text: "Kartu Keluarga (KK)." }];
const pengecekan: Item[] = [{ text: "Mengecek histori kredit konsumen melalui Sistem Layanan Informasi Keuangan (SLIK OJK)." }, { text: "Memastikan tidak ada kredit macet atau tunggakan cicilan lainnya." }];
const adminRequirements: Item[] = [
  { text: "KTP Suami & Istri (jika menikah)" },
  { text: "Kartu Keluarga (KK)" },
  { text: "Surat keterangan menikah/Surat Keterangan Belum menikah" },
  { text: "NPWP & SPT Tahunan (jika ada)" },
  { text: "Rekening Koran 3 bulan terakhir" },
  { text: "Sk pertama/keterangan bekerja S/I", subItems: [{ text: "SK Terakhir S/I" }] },
  { text: "Slip Gaji 3 bulan terakhir / Surat Keterangan Penghasilan", subItems: [{ text: "Legalitas usah YBS S/I" }, { text: "Legalitas Usaha (P2BT)" }, { text: "Laporan keuangan" }] },
  { text: "Sertifikat", subItems: [{ text: "IMB" }, { text: "PBB" }, { text: "Pricelist/Brosur" }] },
  { text: "Formulir Permohonan", subItems: [{ text: "Permohonan KPR" }, { text: "ID Rumah" }, { text: "SLF" }] },
  { text: "Surat Keterangan Belum Punya Rumah dari kelurahan.", subItems: [{ text: "SPR" }] },
  { text: "Fotokopi Buku Nikah / Akta Cerai (jika ada)" },
  { text: "Pas Foto Suami & Istri (3x4, 2 lembar)" },
];
const kprRequirements: Item[] = [{ text: "Memproses permohonan KPR subsidi" }, { text: "Melakukan wawancara dengan konsumen terkait penghasilan & kemampuan bayar" }, { text: "Memeriksa dokumen legalitas tanah dan rumah dari developer" }];

const evaluasi: Item[] = [
  {
    text: "Melakukan appraisal atau penilaian harga rumah.",
  },

  {
    text: "Mengecek kembali kemampuan finansial konsumen.",
  },

  {
    text: "Menilai kelayakan rumah sesuai program subsidi pemerintah.",
  },
];

const keputusan: Item[] = [
  {
    text: "Mengeluarkan keputusan: Disetujui atau Ditolak.",
  },

  {
    text: "Jika disetujui, bank menerbitkan Surat Perjanjian Kredit (SPK).",
  },

  {
    text: "Jika ditolak, bank akan memberi alasan & solusi (misalnya, melengkapi dokumen tambahan)",
  },
];

const persiapan: Item[] = [
  {
    text: "Menyiapkan dana tambahan seperti uang muka (DP), biaya notaris, dan administrasi bank.",
  },

  {
    text: "Menghadiri proses akad di bank atau notaris.",
  },
];

const pencairan: Item[] = [
  {
    text: "Mencairkan dana KPR ke rekening developer setelah akad kredit selesai.",
  },
];

const monitoring: Item[] = [
  {
    text: "Mengecek kondisi rumah sebelum serah terima.",
  },

  {
    text: "Menandatangani Berita Acara Serah Terima (BAST).",
  },
];
// ... (tambahkan konstanta data lainnya jika ada: evaluasi, keputusan, dll.)

// 2. PERBAIKAN: Gabungkan semua data kartu ke dalam satu array
const cardData = [
  { id: 1, title: "Pemesanan Unit & Pembuatan SPR", subtitle: "Dilakukan oleh Konsumen", items: pemesanan },
  { id: 2, title: "Pengumpulan Berkas Awal", subtitle: "Dilakukan oleh Konsumen", items: pengumpulan },
  { id: 3, title: "Pengecekan BI Checking", subtitle: "Dilakukan oleh Bank", items: pengecekan },
  { id: 4, title: "Kelengkapan Berkas Administrasi", subtitle: "Dilakukan oleh Konsumen", items: adminRequirements, multiColumn: true },
  { id: 5, title: "Pengajuan KPR ke Bank", subtitle: "Dilakukan oleh Konsumen", items: kprRequirements },
  { id: 6, title: "Evaluasi & Penilaian Kelayakan Kredit", subtitle: "Dilakukan oleh Bank", items: evaluasi },
  { id: 7, title: "Keputusan Persetujuan KPR", subtitle: "Dilakukan oleh Bank", items: keputusan },
  { id: 8, title: "Persiapan Akad Kredit", subtitle: "Dilakukan oleh Konsumen", items: persiapan },
  { id: 9, title: "Pencairan Dana KPR", subtitle: "Dilakukan oleh Bank", items: pencairan },
  { id: 10, title: "Monitoring & Serah Terima Unit", subtitle: "Dilakukan oleh Konsumen", items: monitoring },
];

const RequirementsSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Typography variant="h2">Alur Konsumen</Typography>
          <div className="mx-auto mt-2">
            <Divider />
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 1.5, centeredSlides: true },
            1280: { slidesPerView: 2, centeredSlides: false },
          }}
          className="pb-12 mySwiper [--swiper-navigation-color:#F48512] [--swiper-navigation-size:30px]"
        >
          {/* 3. PERBAIKAN: Loop melalui 'cardData' yang sudah digabung */}
          {cardData.map((card) => (
            <SwiperSlide key={card.id} className="h-auto pb-2">
              <div className="h-full">
                {/* Gunakan spread operator untuk passing props */}
                <RequirementCard {...card} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RequirementsSection;
