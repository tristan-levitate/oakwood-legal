import React from 'react';
import { RiStarSFill } from "react-icons/ri";

interface HorizontalTestimonialProps {
  content: string;
  name: string;
  rating?: number;
}

export default function HorizontalTestimonial({ 
  content, 
  name, 
  rating = 5 
}: HorizontalTestimonialProps) {
  return (
    <div 
      className="w-full p-8 rounded-md transition-all duration-300 cursor-pointer"
      style={{
        background: 'linear-gradient(150deg, rgba(142, 132, 132, 0.10) 7.84%, rgba(20, 12, 12, 0.10) 63.62%), rgba(255, 255, 255, 0.05)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'linear-gradient(156deg, rgba(192, 43, 39, 0.20) 1.7%, rgba(192, 43, 39, 0.00) 54.74%), linear-gradient(150deg, rgba(142, 132, 132, 0.10) 7.84%, rgba(20, 12, 12, 0.10) 63.62%), rgba(255, 255, 255, 0.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'linear-gradient(150deg, rgba(142, 132, 132, 0.10) 7.84%, rgba(20, 12, 12, 0.10) 63.62%), rgba(255, 255, 255, 0.05)';
      }}
    >
      <div className="flex items-start gap-4">
        {/* Left Side - Stars and Content */}
        <div className="flex-1">
          {/* Rating Stars */}
          <div className="flex gap-1 mb-3">
            {Array.from({ length: 5 }, (_, i) => (
              <RiStarSFill
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? 'text-[#C02B27]' : 'text-gray-600'
                }`}
              />
            ))}
          </div>

          {/* Content */}
          <p className="text-[#C7C7C7] text-[18px] leading-[1.5] font-neue-montreal mb-[60px]">
            "{content}"
          </p>

          {/* Author Name */}
          <div className="flex items-center gap-4">
            <div className="w-[35px] h-[35px] rounded-full bg-black flex-shrink-0" />
            <div className="flex flex-col">
              <h4 className="text-white text-[16px] font-normal font-helvetica uppercase">
                {name}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
