import React from "react";
import HeroSection from "../../components/organisms/HeroSection";
import Navbar from "../../components/organisms/Navbar";
import { Helmet } from "react-helmet";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SN Residence Bantaeng</title>
        <meta name="description" content="Properti Berkelas Untuk Semua Kelas - Booking Sekarang di SN Residence Bantaeng" />
      </Helmet>
      <Navbar />
      <HeroSection />
    </>
  );
};

export default Home;
