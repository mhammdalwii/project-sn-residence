import type React from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoId }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative bg-black w-full max-w-4xl aspect-video rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-2 -right-2 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black text-2xl font-bold" aria-label="Tutup">
          &times;
        </button>
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="Video YouTube"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
