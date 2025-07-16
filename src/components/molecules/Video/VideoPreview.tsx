import type React from "react";
import PlayButton from "../../atoms/PlayButton";

interface VideoPreviewProps {
  imageUrl: string;
  onPlayClick: () => void;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ imageUrl, onPlayClick }) => {
  return (
    <div className="relative w-full aspect-video cursor-pointer group">
      <img src={imageUrl} alt="Preview Perumahan" className="w-full h-full object-cover rounded-xl shadow-lg" />
      <div className="absolute inset-0 bg-black/20 rounded-xl group-hover:bg-black/30 transition-colors"></div>
      <PlayButton onClick={onPlayClick} />
    </div>
  );
};

export default VideoPreview;
