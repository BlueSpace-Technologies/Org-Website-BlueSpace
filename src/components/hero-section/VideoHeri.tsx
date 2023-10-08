import React from "react";

const VideoHeri = () => {
  return (
    <section>
      <div className="h-[100%] w-[100%] aspect-[16/9] mt-12 relative sm:aspect-[16/9]">
        <div className="absolute inset-0 flex items-center justify-center">
          <video
            poster="https://cdn.sanity.io/images/r115idoc/production/3b4132739409b27731583066a5ea88091a7b4935-1700x954.png?q=90&auto=format"
            className="transform scale-80 hover:scale-100 transition-transform duration-500 ease-in-out"
            autoPlay
            loop
            muted
          >
            <source src="hero.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoHeri;
