"use client";

import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import AwardCard, { type AwardCard as AwardCardType } from '../../globals/award-card/award-card';

interface AwardsCarouselProps {
  awards: AwardCardType[];
}

// Simplified paginated carousel for small screens
function AwardsPaginatedCarousel({ 
  awards, 
  cardsPerPage = 2 
}: { 
  awards: AwardCardType[]; 
  cardsPerPage?: number; 
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(awards.length / cardsPerPage);

  const getCurrentPageCards = () => {
    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return awards.slice(startIndex, endIndex);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const currentCards = getCurrentPageCards();

  return (
    <section 
      className="w-full"
      aria-label="Awards and Recognition Paginated Carousel"
    >
      <div className="w-full max-w-[900px] mx-auto px-4">
        {/* Awards Grid Container */}
        <div 
          className="relative p-8"
          role="region"
          aria-label="Awards carousel"
          aria-live="polite"
        >
          {/* Awards Grid */}
          <div className="w-full">
            <ul
              className={`grid gap-[22px] transition-opacity duration-300 ease-in-out ${
                cardsPerPage === 2 ? 'grid-cols-2' : 'grid-cols-1'
              }`}
              role="list"
              aria-label="Awards list"
            >
              {currentCards.map((card) => (
                <li
                  key={card.id}
                  className="w-full h-[297px] flex-shrink-0"
                >
                  <AwardCard card={card} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pagination Navigation Controls */}
        <nav 
          className="flex items-center justify-center gap-6 mt-8"
          aria-label="Awards pagination navigation"
        >
          {/* Previous Button */}
          <div
            className="p-[1px] rounded-[6px] transition-all duration-200 hover:opacity-80"
            style={{
              background: 'linear-gradient(225deg, rgba(255,255,255,0.1) 30%, rgba(39,36,36,0.1) 70%)'
            }}
          >
            <button
              onClick={prevPage}
              className="p-3 cursor-pointer rounded-[6px] w-full h-full"
              style={{
                background: 'linear-gradient(210deg, rgba(142, 132, 132, 0.30) 7.84%, rgba(20, 12, 12, 0.30) 63.62%), rgba(255, 255, 255, 0.10)'
              }}
              aria-label="Previous page of awards"
              type="button"
            >
              <ArrowLeft className="w-5 h-5 text-white" aria-hidden="true" />
            </button>
          </div>

          {/* Page Numbers */}
          <div 
            className="flex items-center mx-1"
            role="tablist"
            aria-label="Page indicators"
          >
            <span className="text-white font-neue-montreal text-[22px]">
              {String(currentPage + 1).padStart(2, '0')}/{String(totalPages).padStart(2, '0')}
            </span>
          </div>

          {/* Next Button */}
          <div
            className="p-[1px] rounded-[6px] transition-all duration-200 hover:opacity-80"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 30%, rgba(39,36,36,0.1) 70%)'
            }}
          >
            <button
              onClick={nextPage}
              className="p-3 cursor-pointer rounded-[6px] w-full h-full"
              style={{
                background: 'linear-gradient(150deg, rgba(142, 132, 132, 0.30) 7.84%, rgba(20, 12, 12, 0.30) 63.62%), rgba(255, 255, 255, 0.10)'
              }}
              aria-label="Next page of awards"
              type="button"
            >
              <ArrowRight className="w-5 h-5 text-white" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default function AwardsCarousel({ awards }: AwardsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1400);
  
  // Drag functionality states
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  // Responsive states
  const [isDesktop, setIsDesktop] = useState(true);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);
  const [isSingleColumn, setIsSingleColumn] = useState(false);
  const [isVerySmall, setIsVerySmall] = useState(false);

  // Breakpoints
  const BREAKPOINTS = {
    desktop: 1300,
    mobile: 920,
    singleColumn: 700,
    singleColumnSmall: 645,
    singleColumnSmall2: 570,
    verySmall: 560,
    desktopLarge: 1380,
    tabletSmall1: 990,
    tabletSmall2: 1075,
    tabletMedium: 1160,
  };

  // Client-side hydration fix
  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  // Responsive logic
  useEffect(() => {
    if (!isClient) return;

    const checkScreenSize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      
      const newIsDesktop = width >= BREAKPOINTS.desktop;
      const newIsTabletOrMobile = width < BREAKPOINTS.mobile;
      const newIsSingleColumn = width < BREAKPOINTS.singleColumn && width >= BREAKPOINTS.verySmall;
      const newIsVerySmall = width < BREAKPOINTS.verySmall;
      
      setIsDesktop(newIsDesktop);
      setIsTabletOrMobile(newIsTabletOrMobile);
      setIsSingleColumn(newIsSingleColumn);
      setIsVerySmall(newIsVerySmall);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [isClient]);

  // Duplicate awards for infinite loop effect
  // For very small screens, use less duplication to avoid positioning issues
  const duplicatedAwards = isVerySmall ? [...awards] : [...awards, ...awards, ...awards];
  const totalCards = awards.length;

  // If screen is below 920px but above 560px, use paginated carousel with 2 cards
  if (isTabletOrMobile && !isSingleColumn && !isVerySmall) {
    return <AwardsPaginatedCarousel awards={awards} cardsPerPage={2} />;
  }

  // Constants - Adjust card width for very small screens
  const cardWidth = isVerySmall ? (windowWidth < 410 ? 240 : windowWidth < 495 ? 280 : 320) : 360;
  const cardGap = 22;
  const cardsPerPage = isDesktop ? 3 : (isSingleColumn || isVerySmall) ? 1 : 2;
  const showPageNumbers = cardsPerPage <= 2;
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const currentPage = Math.floor((currentIndex % totalCards) / cardsPerPage);

  // Navigation handlers
  const nextSlide = () => {
    if (isTransitioning) return;
    if (totalPages === 0) return;

    setIsTransitioning(true);
    
    if (isVerySmall) {
      // Use testimonials pattern for very small screens
      const currentPage = Math.floor(currentIndex / cardsPerPage);
      const nextPage = (currentPage + 1) % totalPages;
      const nextIndex = nextPage * cardsPerPage;
      
      setCurrentIndex(nextIndex);
      // Reset transitioning after state update
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    } else {
      // Original logic for larger screens
      setShouldAnimate(true);

      setCurrentIndex((prev) => {
        const remainingCards = totalCards - prev;
        const cardsToAdvance = remainingCards >= cardsPerPage ? cardsPerPage : remainingCards;
        const newIndex = prev + cardsToAdvance;
        
        if (newIndex >= totalCards) {
          setTimeout(() => {
            setShouldAnimate(false);
            setCurrentIndex(0);
            setTimeout(() => {
              setShouldAnimate(true);
              setIsTransitioning(false);
            }, 50);
          }, 300);
          return newIndex;
        }
        setIsTransitioning(false);
        return newIndex;
      });
    }
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    if (totalPages === 0) return;

    setIsTransitioning(true);
    
    if (isVerySmall) {
      // Use testimonials pattern for very small screens
      const currentPage = Math.floor(currentIndex / cardsPerPage);
      const prevPage = (currentPage - 1 + totalPages) % totalPages;
      const prevIndex = prevPage * cardsPerPage;
      
      setCurrentIndex(prevIndex);
      // Reset transitioning after state update
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    } else {
      // Original logic for larger screens
      setShouldAnimate(true);

      setCurrentIndex((prev) => {
        const cardsToGoBack = prev >= cardsPerPage ? cardsPerPage : prev;
        const newIndex = prev - cardsToGoBack;
        
        if (newIndex <= 0 && prev > 0) {
          setIsTransitioning(false);
          return 0;
        } else if (prev === 0) {
          const lastPosition = totalCards % cardsPerPage === 0 
            ? totalCards - cardsPerPage 
            : totalCards - (totalCards % cardsPerPage);
          setTimeout(() => {
            setShouldAnimate(false);
            setCurrentIndex(lastPosition);
            setTimeout(() => {
              setShouldAnimate(true);
              setIsTransitioning(false);
            }, 50);
          }, 300);
          return totalCards;
        }
        setIsTransitioning(false);
        return newIndex;
      });
    }
  };

  const handleGoToSlide = (index: number) => {
    if (isTransitioning) return;
    setShouldAnimate(true);
    setCurrentIndex(index * cardsPerPage);
  };

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setDragOffset(0);
    setShouldAnimate(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.pageX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const currentX = e.pageX;
    const diff = currentX - startX;
    
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
    
    setIsDragging(false);
    setDragOffset(0);
    setShouldAnimate(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setDragOffset(0);
    setShouldAnimate(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].pageX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging || e.changedTouches.length === 0) return;
    
    const currentX = e.changedTouches[0].pageX;
    const diff = currentX - startX;
    
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
    
    setIsDragging(false);
    setDragOffset(0);
    setShouldAnimate(true);
  };

  // Get transform calculation
  const getTransform = () => {
    const containerWidth = isDesktop ? 1600 : (isSingleColumn || isVerySmall) ? 800 : 1200;
    const visibleWidth = cardsPerPage * cardWidth + (cardsPerPage - 1) * cardGap;
    let centerOffset = (containerWidth - visibleWidth) / 2;
    
    if (isClient) {
      if (isDesktop) {
        if (windowWidth >= BREAKPOINTS.desktopLarge) {
          centerOffset += -470;
        } else {
          centerOffset += -200;
        }
      } else if (isSingleColumn || isVerySmall) {
        if (windowWidth < BREAKPOINTS.verySmall) {
          // No offset for very small screens - align to start
          centerOffset = 0;
        } else if (windowWidth < BREAKPOINTS.singleColumnSmall2) {
          centerOffset += -180;
        } else if (windowWidth < BREAKPOINTS.singleColumnSmall) {
          centerOffset += -140;
        } else {
          centerOffset += -80;
        }
      } else {
        if (windowWidth < BREAKPOINTS.tabletSmall1) {
          centerOffset += -160;
        } else if (windowWidth < BREAKPOINTS.tabletSmall2) {
          centerOffset += -130;
        } else if (windowWidth < BREAKPOINTS.tabletMedium) {
          centerOffset += -100;
        } else {
          centerOffset += -50;
        }
      }
    } else {
      centerOffset += -120;
    }
    
    // For very small screens, use simpler calculation like testimonials
    if (isVerySmall) {
      return `translateX(${dragOffset}px)`; // Include drag offset for very small screens
    }
    
    const translateX = -(totalCards + currentIndex) * (cardWidth + cardGap) + centerOffset + dragOffset;
    return `translateX(${translateX}px)`;
  };

  return (
    <section 
      className="w-full"
      aria-label="Awards and Recognition Carousel"
    >
      <div className={`w-full mx-auto px-8 ${
        isDesktop 
          ? 'max-w-[1600px]' 
          : (isSingleColumn || isVerySmall)
            ? 'max-w-[800px]' 
            : 'max-w-[1200px]'
      }`}>
        {/* Awards Carousel Container */}
        <div 
          className="relative overflow-hidden p-8 max-[560px]:px-0"
          role="region"
          aria-label="Awards carousel"
          aria-live="polite"
        >
          {/* Left fade effect - Hidden for very small screens */}
          {!isVerySmall && (
            <div 
              className={`absolute left-0 top-0 bottom-0 z-10 pointer-events-none ${
                isDesktop 
                  ? 'w-[120px]' 
                  : isSingleColumn
                    ? 'w-[60px]' 
                    : 'w-[80px]'
              }`}
              style={{
                background: 'linear-gradient(to right, var(--background), rgba(20, 12, 12, 0.8), transparent)'
              }}
              aria-hidden="true"
            />
          )}
          
          {/* Right fade effect */}
          <div 
            className={`absolute right-0 top-0 bottom-0 z-10 pointer-events-none ${
              isDesktop 
                ? 'w-[120px]' 
                : (isSingleColumn || isVerySmall)
                  ? 'w-[60px]' 
                  : 'w-[80px]'
            }`}
            style={{
              background: 'linear-gradient(to left, var(--background), rgba(20, 12, 12, 0.8), transparent)'
            }}
            aria-hidden="true"
          />
          
          {/* Awards List Container */}
          <div className="w-full mx-auto overflow-hidden">
            <ul
              className={`flex items-center gap-[22px] ${shouldAnimate && !isDragging && !isVerySmall ? 'transition-transform duration-300 ease-in-out' : 'transition-none'} cursor-grab ${isDragging ? 'cursor-grabbing' : ''}`}
              style={{
                transform: getTransform(),
                // Add mask for partial next card visibility on very small screens
                ...(isVerySmall && Math.floor(currentIndex / cardsPerPage) < totalPages - 1 ? {
                  maskImage: 'linear-gradient(to right, white 75%, transparent)',
                  WebkitMaskImage: 'linear-gradient(to right, white 75%, transparent)'
                } : {})
              }}
              role="list"
              aria-label="Awards list"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {isVerySmall ? (
                // For very small screens, render current card + partial next card
                (() => {
                  const currentPage = Math.floor(currentIndex / cardsPerPage);
                  const startIndex = currentPage * cardsPerPage;
                  const endIndex = Math.min(startIndex + cardsPerPage + 1, totalCards); // +1 for partial next card
                  const visibleAwards = awards.slice(startIndex, endIndex);
                  
                  return visibleAwards.map((card, index) => (
                    <li
                      key={card.id}
                      className={`flex-shrink-0 ${
                        windowWidth < 410 
                          ? 'w-[240px] h-[380px]' 
                          : windowWidth < 495 
                            ? 'w-[280px] h-[350px]' 
                            : 'w-[320px] h-[320px]'
                      }`}
                    >
                      <AwardCard card={card} />
                    </li>
                  ));
                })()
              ) : (
                // For larger screens, use the original duplicated awards approach
                duplicatedAwards.map((card, index) => (
                  <li
                    key={`${card.id}-${index}`}
                    className="w-[360px] h-[297px] flex-shrink-0"
                  >
                    <AwardCard card={card} />
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>

        {/* Carousel Navigation Controls */}
        <nav 
          className="flex items-center justify-center gap-6 mt-0 max-[495px]:-mt-10 relative z-20"
          aria-label="Awards carousel navigation"
        >
          {/* Previous Button */}
          <div
            className="p-[1px] rounded-[6px] transition-all duration-200 hover:opacity-80 relative z-30"
            style={{
              background: 'linear-gradient(225deg, rgba(255,255,255,0.1) 30%, rgba(39,36,36,0.1) 70%)'
            }}
          >
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="p-3 cursor-pointer rounded-[6px] w-full h-full relative z-30 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(210deg, rgba(142, 132, 132, 0.30) 7.84%, rgba(20, 12, 12, 0.30) 63.62%), rgba(255, 255, 255, 0.10)'
              }}
              aria-label="Previous awards"
              type="button"
            >
              <ArrowLeft className="w-5 h-5 text-white" aria-hidden="true" />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div 
            className="flex items-center mx-1"
            role="tablist"
            aria-label="Carousel page indicators"
          >
            {showPageNumbers ? (
              // Show page numbers for layouts with 2 or fewer cards per page
              <span className="text-white font-neue-montreal text-[22px]">
                {String(currentPage + 1).padStart(2, '0')}/{String(totalPages).padStart(2, '0')}
              </span>
            ) : (
              // Show dots for desktop (3 cards per page)
              <div className="flex gap-0">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => handleGoToSlide(index)}
                    className={`w-6 h-6 rounded-full transition-all duration-200 flex items-center justify-center ${currentPage === index
                        ? 'bg-transparent'
                        : 'bg-transparent hover:bg-[rgba(255,255,255,0.1)]'
                      }`}
                    role="tab"
                    aria-selected={currentPage === index}
                    aria-label={`Go to page ${index + 1} of awards`}
                    type="button"
                  >
                    <span 
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        currentPage === index 
                          ? 'bg-[#FF6460]' 
                          : 'bg-[#4E4E4E]'
                      }`} 
                      aria-hidden="true" 
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Next Button */}
          <div
            className="p-[1px] rounded-[6px] transition-all duration-200 hover:opacity-80 relative z-30"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 30%, rgba(39,36,36,0.1) 70%)'
            }}
          >
            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="p-3 cursor-pointer rounded-[6px] w-full h-full relative z-30 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(150deg, rgba(142, 132, 132, 0.30) 7.84%, rgba(20, 12, 12, 0.30) 63.62%), rgba(255, 255, 255, 0.10)'
              }}
              aria-label="Next awards"
              type="button"
            >
              <ArrowRight className="w-5 h-5 text-white" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </div>
    </section>
  );
}