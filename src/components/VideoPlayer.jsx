import React from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineSkipNext, MdOutlineSkipPrevious } from "react-icons/md";

const VideoPlayer = ({
  videoSrc,
  onClose,
  onNext,
  onPrev,
  totalVideos,
  currentIndex,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative w-full max-w-4xl p-4 bg-white rounded-lg">
        <button
          className="absolute -top-3 -right-3 z-10 p-1 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          onClick={onClose}
        >
          <IoMdClose className="size-6 text-rose-500 rounded-full" />
        </button>

        <div className="relative rounded-lg overflow-hidden">
          <video src={videoSrc} controls className="w-full h-full" />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
            <button
              onClick={onPrev}
              disabled={currentIndex === 1}
              className="hover:bg-white/10 p-1 rounded-full transition-colors disabled:opacity-50"
            >
              <MdOutlineSkipPrevious className="size-6 text-white" />
            </button>
            <span className="text-white font-medium">
              {currentIndex} / {totalVideos}
            </span>
            <button
              onClick={onNext}
              disabled={currentIndex === totalVideos}
              className="hover:bg-white/10 p-1 rounded-full transition-colors disabled:opacity-50"
            >
              <MdOutlineSkipNext className="size-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
