import type React from "react";

interface PlayButtonProps {
  onClick: () => void;
}

const PlayButton: React.FC<PlayButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-20 h-13 bg-red-600/90 rounded-md transition-transform duration-300 hover:scale-110 hover:bg-red-600"
      aria-label="Putar video"
    >
      <svg className="w-8 h-8 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
      </svg>
    </button>
  );
};

export default PlayButton;
