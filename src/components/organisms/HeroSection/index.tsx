import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import HeroContent from "../../molecules/HeroContent";
import bg1 from "../../../assets/bg1.png";
import bg2 from "../../../assets/bgTerbaru.jpg";

const HeroSection: React.FC = () => {
  const images = [bg1, bg2];

  return (
    <section className="relative w-full h-screen overflow-hidden" id="home">
      {/* HeroContent overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-8">
        <div className="absolute inset-0 z-[-1]" />
        <HeroContent />
      </div>

      {/* Background Slider */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000 }}
        loop
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        className="h-full w-full z-0"
      >
        {images.map((bg, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-screen bg-center bg-cover" style={{ backgroundImage: `url(${bg})` }} />
          </SwiperSlide>
        ))}

        {/* Custom Arrows */}
        <div className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white text-3xl cursor-pointer">‹</div>
        <div className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white text-3xl cursor-pointer">›</div>
      </Swiper>
    </section>
  );
};

export default HeroSection;
