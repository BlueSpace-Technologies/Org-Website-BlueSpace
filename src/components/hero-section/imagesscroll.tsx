// components/ImageSlider.tsx
"use client"
import React, { useRef, useEffect } from 'react';

const ImageSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = (e.clientX / window.innerWidth - 0.9) * 100;
      slider.scrollLeft = (slider.scrollLeft + deltaX) % slider.scrollWidth;
    };
    slider.addEventListener('mousemove', handleMouseMove);
    return () => {
      slider.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={sliderRef} className="flex overflow-hidden w-full bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="flex-none p-4 w-96 h-auto">
        <img src="https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-6-571/list/06571inlist.jpg" alt="Big Image" className="w-full h-auto" />
      </div>
      <div className="flex-none p-4 w-48 h-auto">
        <img src="https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-6-571/list/06571inlist.jpg" alt="Small Image" className="w-full h-auto" />
      </div>
      <div className="flex-none p-4 w-96 h-auto">
        <img src="https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-6-571/list/06571inlist.jpg" alt="Big Image" className="w-full h-auto" />
      </div>
      <div className="flex-none p-4 w-48 h-auto">
        <img src="https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-6-571/list/06571inlist.jpg" alt="Small Image" className="w-full h-auto" />
      </div>
      <div className="flex-none p-4 w-96 h-auto">
        <img src="https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-6-571/list/06571inlist.jpg" alt="Big Image" className="w-full h-auto" />
      </div>
      <div className="flex-none p-4 w-48 h-auto">
        <img src="https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-6-571/list/06571inlist.jpg" alt="Small Image" className="w-full h-auto" />
      </div>
      <div className="flex-none p-4 w-96 h-auto">
        <img src="https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-6-571/list/06571inlist.jpg" alt="Big Image" className="w-full h-auto" />
      </div>
      <div className="flex-none p-4 w-48 h-auto">
        <img src="https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-6-571/list/06571inlist.jpg" alt="Small Image" className="w-full h-auto" />
      </div>
      <div className="flex-none p-4 w-96 h-auto">
        <img src="https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-6-571/list/06571inlist.jpg" alt="Big Image" className="w-full h-auto" />
      </div>
      <div className="flex-none p-4 w-48 h-auto">
        <img src="https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-6-571/list/06571inlist.jpg" alt="Small Image" className="w-full h-auto" />
      </div>


    </div>
  );
};

export default ImageSlider;
