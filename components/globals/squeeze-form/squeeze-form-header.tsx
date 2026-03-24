import React from 'react';

export default function SqueezeFormHeader() {
  return (
    <div className="w-[95%] flex flex-col items-start gap-[22px] px-6 py-8 mt-4 rounded-[4px] bg-[rgba(0,0,0,0.30)] mb-[32px]">
      
      {/* First Line - Call Button */}
      <div className="flex justify-start">
        <a 
          href="tel:+18664056837"
          className="bg-transparent cursor-pointer text-[#D9D9D9] font-normal font-helvetica text-[16px] py-1 px-3 rounded-[6px] border border-[#FF503C] hover:bg-[rgba(255,80,60,0.1)] transition-colors duration-200"
          aria-label="Call Oakwood Legal Group at (866) 405-6837"
        >
          CALL NOW (866) 405-6837
        </a>
      </div>

      {/* Second Line - Main Title */}
      <h3 className="text-white text-[28px] font-light font-helvetica leading-tight uppercase">
        Get Your Free Case <br /> Review Today
      </h3>

      {/* Third Line - Description */}
      <p className="text-[#C7C7C7] text-[18px] font-neue-montreal leading-relaxed">
        Our team will fight for your rights, recover the compensation you deserve, and stand with you every step of the way.
      </p>
    </div>
  );
}
