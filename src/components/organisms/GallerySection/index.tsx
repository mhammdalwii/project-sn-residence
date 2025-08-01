import type React from "react";
import GalletyList from "../../molecules/GalleryList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import galleryImage1 from "../../../assets/galleryImage1.png";
import galleryImage2 from "../../../assets/bg3.png";
import GalleryImage3 from "../../../assets/bgTerbaru.jpg";
import GalleryImage4 from "../../../assets/bg-4.jpg";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

interface GallerySectionProps {
  title: string;
  description: string;
  images: GalleryImage[];
}

const galleryData = {
  title: "Galeri",
  description: "anda bisa menghuni rumah satu satunya di Bantaeng dengan desain minimalis dan modern",
  images: [
    { id: 1, src: galleryImage1, alt: "Tampak depan perumahan" },
    { id: 2, src: galleryImage2, alt: "Gerbang utama perumahan" },
    { id: 3, src: GalleryImage3, alt: "Tampak interior rumah" },
    { id: 4, src: GalleryImage4, alt: "depan rumah" },
  ],
};

const GallerySection: React.FC<GallerySectionProps> = () => {
  return (
    <section id="gallery" className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
          {/* Kolom Teks (Kiri) */}
          <div className="md:w-1/3">
            <GalletyList title={galleryData.title} description={galleryData.description}></GalletyList>
          </div>

          {/* Kolom Slider (Kanan) */}
          <div className="md:w-2/3 w-full overflow-hidden">
            <Swiper
              modules={[Navigation, A11y]}
              spaceBetween={20}
              slidesPerView={1.2}
              navigation
              loop={true}
              breakpoints={{
                640: { slidesPerView: 1.5, spaceBetween: 20 },
                1024: { slidesPerView: 1.7, spaceBetween: 30 },
              }}
              className="mySwiper [--swiper-navigation-color:#ffffff] [--swiper-navigation-size:30px]"
            >
              {galleryData.images.map((image) => (
                <SwiperSlide key={image.id}>
                  <img src={image.src} alt={image.alt} className="w-full h-auto object-cover rounded-lg shadow-lg" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
