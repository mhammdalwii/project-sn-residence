// src/components/3-organisms/RequirementsSection.tsx

import React from "react";

import RequirementCard from "../../molecules/AlurPembelian/RequirementCard";
import { type Item } from "../../atoms/Alur";
import Typography from "../../atoms/Typography";
import Divider from "../../atoms/Divider";

const pemesanan: Item[] = [
  {
    text: "Memilih unit rumah yang tersedia.",
  },
  {
    text: "Menyetujui harga dan syarat pembelian",
  },
  {
    text: "Membayar tanda jadi (booking fee)",
  },
];

const pengumpulan: Item[] = [
  {
    text: "KTP Suami & Istri (Jika menikah).",
  },
  {
    text: "Kartu Keluarga (KK).",
  },
];

const pengecekan: Item[] = [
  {
    text: "Mengecek histori kredit konsumen melalui Sistem Layanan Informasi Keuangan (SLIK OJK).",
  },
  {
    text: "Memastikan tidak ada kredit macet atau tunggakan cicilan lainnya.",
  },
];

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

const RequirementsSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 mb-3">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Typography variant="h2">Alur Konsumen</Typography>
          <div className="mx-auto mt-2">
            <Divider />
          </div>
        </div>
        {/* ======================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <RequirementCard title="Pemesanan Unit & Pembuatan Surat Pemesanan Rumah (SPR)" subtitle="Dilakukan oleh Konsumen" items={pemesanan} />
          <RequirementCard title="Pengumpulan Berkas Awal Konsumen" subtitle="Dilakukan oleh Konsumen" items={pengumpulan} />
          <RequirementCard title="Pengecekan BI Checking oleh Pihak Bank" subtitle="Dilakukan oleh Bank" items={pengecekan} />
          <RequirementCard title="Evaluasi & Penilaian Kelayakan Kredit" subtitle="Dilakukan oleh Bank" items={evaluasi} />
          <RequirementCard title="Pencairan Dana KPR" subtitle="Dilakukan oleh Konsumen" items={persiapan} />
          <RequirementCard title="Keputusan Persetujuan KPR" subtitle="Dilakukan oleh Bank" items={keputusan} />
          <RequirementCard title="Kelengkapan Berkas Administrasi" subtitle="Dilakukan oleh Konsumen" items={adminRequirements} multiColumn={true} />
          <RequirementCard title="Pengajuan KPR ke Bank" subtitle="Dilakukan oleh Konsumen" items={kprRequirements} />
          <RequirementCard title="Persiapan Akad Kredit" subtitle="Dilakukan oleh Bank" items={pencairan} />
          <RequirementCard title="Monitoring & Serah Terima Unit" subtitle=" Dilakukan oleh Konsumen" items={monitoring} />
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
