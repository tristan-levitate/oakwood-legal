"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { RiStarSFill } from "react-icons/ri";
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface TestimonialCard {
  id: number;
  name: string;
  title: string;
  content: string;
  rating: number;
  profileImage: string;
}

interface TestimonialsCarouselProps {
  testimonials: TestimonialCard[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1600); // Default for SSR
  const [isClient, setIsClient] = useState(false);
  const [maxCardHeight, setMaxCardHeight] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const measurementContainerRef = useRef<HTMLDivElement>(null);

  // Responsive logic
  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setCurrentIndex(0); // Reset to first page on resize
      setMaxCardHeight(null); // Reset max height to recalculate
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]);

  // Calculate max card height based on content
  useEffect(() => {
    if (!isClient || !measurementContainerRef.current) return;

    // Measure all cards in the hidden container
    const cards = measurementContainerRef.current.querySelectorAll('.testimonial-card-measure');
    let maxHeight = 0;

    cards.forEach((card) => {
      const height = (card as HTMLElement).offsetHeight;
      if (height > maxHeight) {
        maxHeight = height;
      }
    });

    if (maxHeight > 0) {
      setMaxCardHeight(maxHeight);
    }
  }, [isClient, testimonials, windowWidth]);

  const cardWidth = windowWidth < 500 ? 313 : 340;
  const gap = 22;
  const totalCards = testimonials.length;
  
  // Responsive cards per page
  const cardsPerPage = windowWidth < 795 ? 1 : windowWidth < 1160 ? 2 : windowWidth < 1500 ? 3 : 4;
  const showPageNumbers = cardsPerPage <= 2;
  
  // Calculate max pages for navigation
  const maxPages = Math.ceil(totalCards / cardsPerPage);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent text selection
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(0); // No scroll needed since we render only visible cards
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    // Drag logic simplified - actual page change happens on mouse up
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (isDragging) {
      const x = e.pageX;
      const diff = x - startX;
      
      // If dragged significantly, change page
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          // Dragged right - go to previous page
          prevSlide();
        } else {
          // Dragged left - go to next page
          nextSlide();
        }
      }
    }
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setScrollLeft(0); // No scroll needed since we render only visible cards
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    // Touch logic simplified - actual page change happens on touch end
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isDragging && e.changedTouches.length > 0) {
      const x = e.changedTouches[0].pageX;
      const diff = x - startX;
      
      // If swiped significantly, change page
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          // Swiped right - go to previous page
          prevSlide();
        } else {
          // Swiped left - go to next page
          nextSlide();
        }
      }
    }
    setIsDragging(false);
  };

  // Reset all card backgrounds when currentIndex changes
  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.testimonial-card');
      cards.forEach((card) => {
        (card as HTMLElement).style.background = 'linear-gradient(150deg, rgba(142, 132, 132, 0.10) 7.84%, rgba(20, 12, 12, 0.10) 63.62%), rgba(255, 255, 255, 0.05)';
      });
    }
  }, [currentIndex]);

  const nextSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    
    setCurrentIndex((prev) => {
      // Calculate current page and move to next page
      const currentPage = Math.floor(prev / cardsPerPage);
      const nextPage = (currentPage + 1) % maxPages;
      const nextIndex = nextPage * cardsPerPage;
      
      setIsTransitioning(false);
      return nextIndex;
    });
  };

  const prevSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    
    setCurrentIndex((prev) => {
      // Calculate current page and move to previous page
      const currentPage = Math.floor(prev / cardsPerPage);
      const prevPage = (currentPage - 1 + maxPages) % maxPages;
      const prevIndex = prevPage * cardsPerPage;
      
      setIsTransitioning(false);
      return prevIndex;
    });
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Hidden container to measure all card heights */}
      <div
        ref={measurementContainerRef}
        className="absolute opacity-0 pointer-events-none invisible"
        style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}
      >
        {testimonials.map((testimonial) => (
          <div
            key={`measure-${testimonial.id}`}
            className={`testimonial-card-measure p-8 rounded-lg ${
              windowWidth < 500 ? 'w-[313px]' : 'w-[340px]'
            }`}
            style={{
              background: 'linear-gradient(150deg, rgba(142, 132, 132, 0.10) 7.84%, rgba(20, 12, 12, 0.10) 63.62%), rgba(255, 255, 255, 0.05)'
            }}
          >
            <div className="flex flex-col justify-between">
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }, (_, i) => (
                  <RiStarSFill
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? 'text-[#C02B27]' : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>

              {/* Content */}
              <div className="flex-1 mb-6">
                <p className="text-[#C7C7C7] text-[16px] leading-[1.6] font-neue-montreal">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                {/* Profile Image */}
                <div className="w-[43px] h-[43px] rounded-full overflow-hidden flex-shrink-0">
                  {testimonial.profileImage ? (
                    <Image
                      src={testimonial.profileImage}
                      alt={testimonial.name}
                      width={43}
                      height={43}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-black rounded-full" />
                  )}
                </div>
                
                {/* Name */}
                <h3 className="text-white text-[16px] ml-1 font-normal font-helvetica uppercase">
                  {testimonial.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div 
        ref={containerRef}
        className="relative cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onDragStart={(e) => e.preventDefault()}
      >        
        <div 
          className="flex gap-[22px] transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(0px)`, // No transform needed since we render only visible cards
            ...(Math.floor(currentIndex / cardsPerPage) < maxPages - 1 && windowWidth >= 590 ? {
              maskImage: windowWidth < 795 
                ? 'linear-gradient(to right, white 60%, transparent)' // Blur on 2nd card for 1 card
                : windowWidth < 1160 
                  ? 'linear-gradient(to right, white 75%, transparent)' // Blur on 3rd card for 2 cards
                  : windowWidth < 1500 
                    ? 'linear-gradient(to right, white 85%, transparent)' // Blur on 4th card for 3 cards
                    : 'linear-gradient(to right, white 90%, transparent)', // Blur on 5th card for 4 cards
              WebkitMaskImage: windowWidth < 795 
                ? 'linear-gradient(to right, white 60%, transparent)'
                : windowWidth < 1160 
                  ? 'linear-gradient(to right, white 75%, transparent)'
                  : windowWidth < 1500 
                    ? 'linear-gradient(to right, white 85%, transparent)'
                    : 'linear-gradient(to right, white 90%, transparent)'
            } : {})
          }}
        >
          {(() => {
            // Calculate which cards to show based on current page
            const currentPage = Math.floor(currentIndex / cardsPerPage);
            const startIndex = currentPage * cardsPerPage;
            const endIndex = Math.min(startIndex + cardsPerPage + 1, totalCards); // +1 for blur card
            const visibleTestimonials = testimonials.slice(startIndex, endIndex);
            
            return visibleTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card p-8 rounded-lg flex-shrink-0 select-text transition-all duration-300 group ${
                windowWidth < 500 ? 'w-[313px]' : 'w-[340px]'
              }`}
              style={{
                background: 'linear-gradient(150deg, rgba(142, 132, 132, 0.10) 7.84%, rgba(20, 12, 12, 0.10) 63.62%), rgba(255, 255, 255, 0.05)',
                ...(maxCardHeight !== null ? { height: `${maxCardHeight}px` } : { minHeight: '435px' })
              }}
              onMouseEnter={(e) => {
                if (!isDragging) {
                  e.currentTarget.style.background = 'linear-gradient(156deg, rgba(192, 43, 39, 0.20) 1.7%, rgba(192, 43, 39, 0.00) 54.74%), linear-gradient(150deg, rgba(142, 132, 132, 0.10) 7.84%, rgba(20, 12, 12, 0.10) 63.62%), rgba(255, 255, 255, 0.05)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(150deg, rgba(142, 132, 132, 0.10) 7.84%, rgba(20, 12, 12, 0.10) 63.62%), rgba(255, 255, 255, 0.05)';
              }}
            >
              <div className="h-full flex flex-col justify-between">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }, (_, i) => (
                    <RiStarSFill
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating ? 'text-[#C02B27]' : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="flex-1 mb-6">
                  <p className="text-[#C7C7C7] text-[16px] leading-[1.6] font-neue-montreal">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  {/* Profile Image */}
                  <div className="w-[43px] h-[43px] rounded-full overflow-hidden flex-shrink-0">
                    {testimonial.profileImage ? (
                      <Image
                        src={testimonial.profileImage}
                        alt={testimonial.name}
                        width={43}
                        height={43}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-black rounded-full" />
                    )}
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-white text-[16px] ml-1 font-normal font-helvetica uppercase">
                    {testimonial.name}
                  </h3>
                </div>
              </div>
            </div>
            ));
          })()}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-6 mt-8">
        {/* Previous Button */}
        <div
          className="p-[1px] rounded-[6px] transition-all duration-200 hover:opacity-80"
          style={{
            background: 'linear-gradient(225deg, rgba(255,255,255,0.1) 30%, rgba(39,36,36,0.1) 70%)'
          }}
        >
          <button
            onClick={prevSlide}
            className="p-3 cursor-pointer rounded-[6px] w-full h-full"
            style={{
              background: 'linear-gradient(210deg, rgba(142, 132, 132, 0.30) 7.84%, rgba(20, 12, 12, 0.30) 63.62%), rgba(255, 255, 255, 0.10)'
            }}
            aria-label="Previous testimonials"
            type="button"
          >
            <ArrowLeft className="w-5 h-5 text-white" aria-hidden="true" />
          </button>
        </div>

        {/* Page Indicators */}
        <div className="flex gap-0 mx-1" role="tablist" aria-label="Testimonials page indicators">
          {showPageNumbers ? (
            // Show page numbers for layouts with 2 or fewer cards per page
            <span className="text-white font-neue-montreal text-[22px]">
              {String(Math.floor(currentIndex / cardsPerPage) + 1).padStart(2, '0')}/{String(maxPages).padStart(2, '0')}
            </span>
          ) : (
            // Show dots for layouts with 3 or more cards per page
            Array.from({ length: maxPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * cardsPerPage)}
                className={`w-6 h-6 rounded-full transition-all duration-200 flex items-center justify-center ${
                  Math.floor(currentIndex / cardsPerPage) === index
                    ? 'bg-transparent'
                    : 'bg-transparent hover:bg-[rgba(255,255,255,0.1)]'
                }`}
                role="tab"
                aria-selected={Math.floor(currentIndex / cardsPerPage) === index}
                aria-label={`Go to testimonials page ${index + 1}`}
                type="button"
              >
                <span 
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    Math.floor(currentIndex / cardsPerPage) === index 
                      ? 'bg-[#FF6460]' 
                      : 'bg-[#4E4E4E]'
                  }`} 
                  aria-hidden="true" 
                />
              </button>
            ))
          )}
        </div>

        {/* Next Button */}
        <div
          className="p-[1px] rounded-[6px] transition-all duration-200 hover:opacity-80"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 30%, rgba(39,36,36,0.1) 70%)'
          }}
        >
          <button
            onClick={nextSlide}
            className="p-3 cursor-pointer rounded-[6px] w-full h-full"
            style={{
              background: 'linear-gradient(150deg, rgba(142, 132, 132, 0.30) 7.84%, rgba(20, 12, 12, 0.30) 63.62%), rgba(255, 255, 255, 0.10)'
            }}
            aria-label="Next testimonials"
            type="button"
          >
            <ArrowRight className="w-5 h-5 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
