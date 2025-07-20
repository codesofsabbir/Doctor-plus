"use client";
import React, { useState, Fragment } from "react";
import { CiFaceSmile, CiPlay1 } from "react-icons/ci";
function VideoPopup() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <>
      <CiPlay1
        className="text-5xl text-white cursor-pointer"
        onClick={() => setIsVideoOpen(true)}
      />

      {isVideoOpen && (
        <div className="fixed inset-0  bg-[#000000cb] flex items-center justify-center z-[2000]">
          <div className="relative w-[90%] max-w-4xl">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-5 -right-5 bg-white text-black rounded-full p-2 text-xl z-10 h-10 w-10 cursor-pointer"
            >
              ✕
            </button>
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                className="rounded-xl w-full h-[400px]"
                src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default VideoPopup;
