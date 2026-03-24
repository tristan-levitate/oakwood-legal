import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import VectorIcon from '../vector-icon/vector-icon';
import { 
  getHeroButtonCallClasses, 
  getHeroButtonScrollClasses 
} from '@/components/globals/dual-hero/dual-hero-config';

interface HeroButtonsProps {
  page?: string;
}

export default function HeroButtons({ page }: HeroButtonsProps) {
  const callButtonClasses = getHeroButtonCallClasses(page);
  const scrollButtonClasses = getHeroButtonScrollClasses(page);

  return (
    <div className="flex max-[500px]:flex-col gap-4 max-[500px]:gap-3">
      {/* Call Button */}
      <Link
        href="tel:+18664056837"
        className={`${callButtonClasses} w-[162px] h-[32px]`}
        style={{
          background: '#C02B27'
        }}
      >
        Call (866) 405-6837
      </Link>

      {/* Squeeze Page: Book A Consultation Button (below 1080px) or Scroll Button (above 1080px) */}
      {page === 'squeeze-page' ? (
        <>
          {/* Book A Consultation Button - Only visible below 1080px */}
            <button
              onClick={() => {
                const squeezeForm = document.getElementById('squeeze-form');
                if (squeezeForm) {
                  squeezeForm.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="max-[1079px]:flex min-[1080px]:hidden cursor-pointer rounded-[6px] px-2 py-2 items-center justify-center text-white font-normal font-helvetica text-[14px] leading-none whitespace-nowrap w-[162px] h-[32px]"
              style={{
                background: 'linear-gradient(150deg, rgba(142, 132, 132, 0.10) 7.84%, rgba(20, 12, 12, 0.10) 63.62%), rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(142, 132, 132, 0.4)'
              }}
              aria-label="Book a consultation"
              type="button"
            >
              Book A Consultation
            </button>

          {/* Scroll to Contact Button - Only visible above 1080px */}
          <div
            className={`max-[1079px]:hidden min-[1080px]:flex ${scrollButtonClasses}`}
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 30%, rgba(39,36,36,0.1) 70%)'
            }}
          >
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact-us');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="p-3 cursor-pointer rounded-[6px] w-[35px] h-[35px] flex items-center justify-center"
              style={{
                background: 'linear-gradient(150deg, rgba(142, 132, 132, 0.10) 7.84%, rgba(20, 12, 12, 0.10) 63.62%), rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(142, 132, 132, 0.4)'
              }}
              aria-label="Scroll to contact form"
              type="button"
            >
              <VectorIcon
                width={11}
                height={12}
                fill="#FFF"
                stroke="none"
              />
            </button>
          </div>
        </>
      ) : (
        /* Default Scroll Button for other pages */
        <div
          className={scrollButtonClasses}
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 30%, rgba(39,36,36,0.1) 70%)'
          }}
        >
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact-us');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="p-3 cursor-pointer rounded-[6px] w-[35px] h-[35px] flex items-center justify-center"
            style={{
              background: 'linear-gradient(150deg, rgba(142, 132, 132, 0.10) 7.84%, rgba(20, 12, 12, 0.10) 63.62%), rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(142, 132, 132, 0.4)'
            }}
            aria-label="Scroll to contact form"
            type="button"
          >
            <VectorIcon
              width={11}
              height={12}
              fill="#FFF"
              stroke="none"
            />
          </button>
        </div>
      )}
    </div>
  );
}
