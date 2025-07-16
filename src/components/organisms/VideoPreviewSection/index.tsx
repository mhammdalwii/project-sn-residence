import GalleryList from "../../molecules/GalleryList";
import VideoModal from "../../molecules/Video/VideoModal";
import VideoPreview from "../../molecules/Video/VideoPreview";

import previewImage from "../../../assets/preview.png";
import { useState } from "react";

const previewData = {
  title: "Preview",
  description: "Rumah dengan spesifikasi subsidi ini bisa didapatkan dengan kpr subsidi. KPR Bersubsidi adalah Kredit pemilikan rumah yang mendapat bantuan kemudahan perolehan rumah bagi pemerintah berupa dana murah jangka panjang.",
  imageUrl: previewImage,
  videoId: "_bcq8k-pWwI?si=8aU8UtqVX3FZzKa8", // Ganti dengan ID video YouTube
};

const VideoPreviewSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Kolom Kiri - Video Preview */}
            <div className="w-full md:w-1/2">
              <VideoPreview imageUrl={previewData.imageUrl} onPlayClick={handlePlayClick} />
            </div>

            {/* Kolom Kanan - Teks  */}
            <div className="w-full md:w-1/2">
              <GalleryList title={previewData.title} description={previewData.description} />
            </div>
          </div>
        </div>
      </section>

      {/* Modal Video (hanya render jika state-nya true) */}
      <VideoModal isOpen={isModalOpen} onClose={handleCloseModal} videoId={previewData.videoId} />
    </>
  );
};

export default VideoPreviewSection;
