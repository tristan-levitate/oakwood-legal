"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import BlurEffect from '@/components/globals/blur-effect/blur-effect';
import DecorativeLine from '@/components/globals/decorative-line/decorative-line';
import { useLoading } from '@/components/globals/loading-context/loading-context';

// Type for practice area cards from Sanity
interface PracticeAreaCard {
    titleForSEO: string;
    descriptionForSEO: string;
    title: string;
    slug: string;
    description: string;
    date: string;
    imageUrl: string;
}

interface CardPracticeAreasHomeProps {
    practiceAreas: PracticeAreaCard[];
}

export default function CardPracticeAreasHome({ practiceAreas }: CardPracticeAreasHomeProps) {
    const router = useRouter();
    const { isAnyCardDisabled, disabledCardId, setCardDisabledWithTimeout } = useLoading();
    const [isLargeScreen, setIsLargeScreen] = useState(true);
    const [isMediumScreen, setIsMediumScreen] = useState(true);
    const [isSmallDesktop, setIsSmallDesktop] = useState(true);
    const [isExtraSmallDesktop, setIsExtraSmallDesktop] = useState(true);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleCardClick = (slug: string) => {
        // Prevent clicking if any card is already disabled
        if (isAnyCardDisabled) return;
        
        // Set disabled with automatic timeout
        setCardDisabledWithTimeout(slug, 1000);
        
        // Navigate to page
        router.push(`/${slug}`);
    };

    // Check screen size for decorative line width and navigation style
    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1455);
            setIsMediumScreen(window.innerWidth >= 1350);
            setIsSmallDesktop(window.innerWidth >= 1190);
            setIsExtraSmallDesktop(window.innerWidth >= 1040);
        };

        // Check on mount
        checkScreenSize();

        // Add resize listener
        window.addEventListener('resize', checkScreenSize);

        // Cleanup
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Show empty state if no practice areas
    if (!practiceAreas || practiceAreas.length === 0) {
        return (
            <div className="w-full relative overflow-visible">
                <div className="flex items-center justify-center h-[480px]">
                    <div className="text-white text-lg">No practice areas available</div>
                </div>
            </div>
        );
    }

    const currentArea = practiceAreas[currentIndex];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % practiceAreas.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + practiceAreas.length) % practiceAreas.length);
    };

    const getPrevTitle = () => {
        const prevIndex = (currentIndex - 1 + practiceAreas.length) % practiceAreas.length;
        return practiceAreas[prevIndex].title;
    };

    const getNextTitle = () => {
        const nextIndex = (currentIndex + 1) % practiceAreas.length;
        return practiceAreas[nextIndex].title;
    };

    return (
        <div className="w-full relative overflow-visible">
            {/* Desktop Layout (≥ 951px) */}
            <div className="hidden min-[950px]:flex gap-16 h-[480px] mb-4 overflow-visible">
                
                {/* Left Column - Card */}
                <div className={`${isSmallDesktop ? 'w-[652px]' : (isExtraSmallDesktop ? 'w-[500px]' : 'w-[420px]')} p-6 rounded-lg`} style={{
                    background: 'linear-gradient(150deg, rgba(142, 132, 132, 0.10) 7.84%, rgba(20, 12, 12, 0.10) 63.62%), rgba(255, 255, 255, 0.05)'
                }}>
                    <div className="w-full h-[340px] relative rounded-lg overflow-hidden mb-8">
                        <Image
                            src={currentArea.imageUrl || '/images/mock-practice.png'}
                            alt={`${currentArea.title} - Practice Area`}
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>

                    <h2 className="text-white text-center text-[38px] leading-none uppercase font-helvetica font-light">
                        {currentArea.title}
                    </h2>
                </div>

                {/* Right Column - Two Rows */}
                <div className="flex-1 flex flex-col justify-between overflow-visible">
                    <div className="flex flex-col gap-6 overflow-visible">
                         <Link
                             href="/practice-areas"
                             className="inline-block w-fit cursor-pointer self-end"
                         >
                             <div
                                 className="px-4 py-2 rounded-[6px] text-white text-[16px] font-normal font-neue-montreal leading-normal hover:opacity-80 transition-opacity duration-200"
                                 style={{
                                     background: 'linear-gradient(150deg, rgba(142, 132, 132, 0.25) 7.84%, rgba(20, 12, 12, 0.30) 63.62%), rgba(255, 255, 255, 0.20)'
                                 }}
                             >
                                 View All Practice Areas
                             </div>
                         </Link>

                         <BlurEffect variant="practice-areas-home" />

                         <div className="relative w-full mb-14 overflow-visible">
                             <div className="absolute right-[-15px] top-0 z-30 overflow-visible" style={{ transform: 'translateX(0)' }}>
                                 <DecorativeLine 
                                     mainLineWidth={isLargeScreen ? 937 : (isMediumScreen ? 700 : (isSmallDesktop ? 500 : (isExtraSmallDesktop ? 400 : 320)))}
                                     isRotated={false}
                                     ariaLabel="Practice areas decorative line"
                                 />
                             </div>
                         </div>

                        <div className="flex flex-col gap-6 mx-8">
                            <p className="text-[#C7C7C7] text-[18px] leading-[1.6] font-neue-montreal">
                                {currentArea.description}
                            </p>
                            <div className="flex justify-start mb-1">
                                <button
                                    onClick={() => handleCardClick(currentArea.slug)}
                                    className={`bg-transparent text-[#D9D9D9] text-[18px] py-1 px-3 rounded-[6px] border border-[#FF503C] transition-colors duration-200 font-neue-montreal flex items-center gap-2 ${
                                        isAnyCardDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-[rgba(255,80,60,0.1)]'
                                    }`}
                                    disabled={isAnyCardDisabled}
                                >
                                    READ MORE
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row - Navigation */}
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
                                aria-label="Previous practice area"
                                type="button"
                            >
                                <ArrowLeft className="w-5 h-5 text-white" aria-hidden="true" />
                            </button>
                        </div>

                        {/* Title Navigation with Conditional Blur Effect */}
                        <div className="w-full max-w-[660px] relative overflow-hidden min-w-0 flex-1">
                            {/* Blur effects - only show above 1350px */}
                            {isMediumScreen && (
                                <>
                                    <div
                                        className="absolute left-0 top-0 bottom-0 w-[80px] lg:w-[120px] z-20 pointer-events-none"
                                        style={{
                                            background: 'linear-gradient(to right, var(--background), rgba(20, 12, 12, 0.8), transparent)'
                                        }}
                                    />

                                    <div
                                        className="absolute right-0 top-0 bottom-0 w-[80px] lg:w-[120px] z-20 pointer-events-none"
                                        style={{
                                            background: 'linear-gradient(to left, var(--background), rgba(20, 12, 12, 0.8), transparent)'
                                        }}
                                    />
                                </>
                            )}

                            {/* Titles Container - Conditional Layout */}
                            <div className="relative h-full w-full flex items-center justify-center gap-4 lg:gap-10 min-w-0">
                                {isMediumScreen ? (
                                    <>
                                        {/* Full navigation with 3 titles - above 1350px */}
                                        <div className="text-[#776F6F] text-[16px] lg:text-[18px] opacity-50 uppercase whitespace-nowrap font-neue-montreal flex-shrink-0 overflow-hidden text-ellipsis">
                                            {getPrevTitle()}
                                        </div>

                                        <div className="text-[#D9D9D9] text-[18px] lg:text-[20px] uppercase whitespace-nowrap z-10 font-helvetica leading-normal flex-shrink-0 overflow-hidden text-ellipsis">
                                            {currentArea.title}
                                        </div>

                                        <div className="text-[#776F6F] text-[16px] lg:text-[18px] opacity-50 uppercase whitespace-nowrap font-neue-montreal flex-shrink-0 overflow-hidden text-ellipsis">
                                            {getNextTitle()}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {/* Single title only - below 1350px */}
                                        <div className="text-[#D9D9D9] text-[16px] uppercase whitespace-nowrap z-10 font-helvetica leading-normal flex-shrink-0 overflow-hidden text-ellipsis">
                                            {currentArea.title}
                                        </div>
                                    </>
                                )}
                            </div>
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
                                aria-label="Next practice area"
                                type="button"
                            >
                                <ArrowRight className="w-5 h-5 text-white" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout (≤ 950px) */}
            <div className="max-[950px]:block hidden">
                {/* Mobile Card */}
                <div className="w-full max-w-[500px] mx-auto p-6 max-[400px]:p-4 rounded-lg mb-6" style={{
                    background: 'linear-gradient(150deg, rgba(142, 132, 132, 0.10) 7.84%, rgba(20, 12, 12, 0.10) 63.62%), rgba(255, 255, 255, 0.05)'
                }}>
                    {/* Image */}
                    <div className="w-full h-[200px] relative rounded-lg overflow-hidden mb-8 mx-auto">
                        <Image
                            src={currentArea.imageUrl || '/images/mock-practice.png'}
                            alt={`${currentArea.title} - Practice Area`}
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>

                    {/* Title */}
                    <h2 className="text-white text-left text-[32px] max-[400px]:text-[28px] leading-none uppercase mb-8 font-helvetica font-light">
                        {currentArea.title}
                    </h2>

                    {/* Description and Button */}
                    <div className="flex flex-col gap-8">
                        <p className="text-[#C7C7C7] text-[16px] leading-[1.6] font-neue-montreal">
                            {currentArea.description}
                        </p>
                        <div className="flex justify-start">
                            <button
                                onClick={() => handleCardClick(currentArea.slug)}
                                className={`bg-transparent text-[#D9D9D9] text-[16px] py-1 px-3 rounded-[6px] border border-[#FF503C] transition-colors duration-200 font-neue-montreal flex items-center gap-2 ${
                                    isAnyCardDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-[rgba(255,80,60,0.1)]'
                                }`}
                                disabled={isAnyCardDisabled}
                            >
                                READ MORE
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation - Above 560px: Titles, Below 560px: Numbers */}
                <div className="flex items-center justify-center gap-6 mt-6">
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
                            aria-label="Previous practice area"
                            type="button"
                        >
                            <ArrowLeft className="w-5 h-5 text-white" aria-hidden="true" />
                        </button>
                    </div>

                    {/* Navigation Center - Conditional based on screen size */}
                    {/* Title Navigation for screens 561px-950px */}
                    <div className="hidden min-[561px]:max-[950px]:block w-full max-w-[350px] relative overflow-hidden min-w-0 flex-1">
                        {/* Conditional fade effects - only show above 1350px */}
                        {isMediumScreen && (
                            <>
                                <div
                                    className="absolute left-0 top-0 bottom-0 w-[00px] z-20 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(to right, var(--background), rgba(20, 12, 12, 0.1), transparent)'
                                    }}
                                />

                                <div
                                    className="absolute right-0 top-0 bottom-0 w-[60px] z-20 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(to left, var(--background), rgba(20, 12, 12, 0.8), transparent)'
                                    }}
                                />
                            </>
                        )}

                        {/* Titles Container - Conditional Layout */}
                        <div className="relative h-full w-full flex items-center justify-center gap-6 min-w-0">
                            <div className={`text-[#D9D9D9] ${isMediumScreen ? 'text-[16px]' : 'text-[14px]'} uppercase whitespace-nowrap z-10 font-helvetica leading-normal flex-shrink-0 overflow-hidden text-ellipsis`}>
                                {currentArea.title}
                            </div>
                        </div>
                    </div>

                    {/* Page Counter for screens ≤ 560px */}
                    <div className="max-[560px]:block hidden text-[#D9D9D9] text-[18px] font-neue-montreal">
                        {String(currentIndex + 1).padStart(2, '0')}/{String(practiceAreas.length).padStart(2, '0')}
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
                            aria-label="Next practice area"
                            type="button"
                        >
                            <ArrowRight className="w-5 h-5 text-white" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
