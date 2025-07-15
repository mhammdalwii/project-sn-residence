import React from "react";
import HeroSection from "../../components/organisms/HeroSection";
import Navbar from "../../components/organisms/Navbar";
import { Helmet } from "react-helmet";
import PartnershipSection from "../../components/organisms/PartnershipSection";
import AboutSection from "../../components/organisms/AboutSection";
import WhySNResidenceSection from "../../components/organisms/WhySNResidenceSection";
import SpecificationSection from "../../components/organisms/SpecificationSection";

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
      </main>
    </>
  );
};

export default Home;
