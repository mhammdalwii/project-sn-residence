import React from "react";
import HeroSection from "../../components/organisms/HeroSection";
import Navbar from "../../components/organisms/Navbar";
import { Helmet } from "react-helmet";
import PartnershipSection from "../../components/organisms/PartnershipSection";
import AboutSection from "../../components/organisms/AboutSection";
import WhySNResidenceSection from "../../components/organisms/WhySNResidenceSection";
import SpecificationSection from "../../components/organisms/SpecificationSection";
import GallerySection from "../../components/organisms/GallerySection";
import VideoPreviewSection from "../../components/organisms/VideoPreviewSection";
import LocationSection from "../../components/organisms/LocationSection";

import BookingSection from "../../components/organisms/BookingSection";
import Footer from "../../components/organisms/FooterKontakSection";
import FooterCopyright from "../../components/organisms/FooterCopyright";
import WhatsAppButton from "../../components/atoms/WhatsAppButton";
import SitePlanSection from "../../components/organisms/SitePlanSection";
import RequirementsSection from "../../components/organisms/AlurPembelianSection";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SN Residence Bantaeng</title>
        <meta name="description" content="Properti Berkelas Untuk Semua Kelas - Booking Sekarang di SN Residence Bantaeng" />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <PartnershipSection />
        <AboutSection />
        <WhySNResidenceSection />
        <SpecificationSection />
        <SitePlanSection />
        <GallerySection title={""} description={""} images={[]} />
        <VideoPreviewSection />
        <LocationSection />
        <RequirementsSection />
        <BookingSection />
        <Footer />
        <FooterCopyright />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Home;
