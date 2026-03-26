"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import dynamic from 'next/dynamic';

const LogosCarousel = dynamic(() => import('@/components/globals/carousel-slider/carousel-slider'), {
  loading: () => <div className="h-[120px] animate-pulse bg-gray-200 rounded" />
});
import BlurEffect from '@/components/globals/blur-effect/blur-effect';
import VerticalBorder from '@/components/globals/vertical-border/vertical-border';
import DecorativeLine from '@/components/globals/decorative-line/decorative-line';
import { ResultProps } from '@/types/types';

interface HistoricWinsProps {
    results: ResultProps[];
}

export default function HistoricWins({ results }: HistoricWinsProps) {
    const router = useRouter();

    // Custom navigation function with scroll offset
    const handleNavigateToResults = () => {
        router.push('/case-results#title');
    };

    // Create AutoScroll plugin
    const autoScrollPlugin = React.useMemo(() => {
        return AutoScroll({
            speed: 0.8,
            direction: "forward",
            stopOnInteraction: false,
            stopOnMouseEnter: true,
            playOnInit: true,
        });
    }, []);

    // Embla carousel setup with auto-scroll
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            containScroll: false,
            dragFree: true,
        },
        [autoScrollPlugin]
    );

    // Force reinitialize when component mounts
    React.useEffect(() => {
        if (emblaApi) {
            emblaApi.reInit();
        }
    }, [emblaApi]);

    const [isDesktop, setIsDesktop] = useState(false);
    const [borderHeight, setBorderHeight] = useState(540);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            setIsDesktop(width >= 515);
            setIsMobile(width < 560);
            
            // Define border height based on screen width
            let newHeight;
            if (width >= 1250) {
                newHeight = 475;
            } else if (width >= 922) {
                newHeight = 540;
            } else if (width >= 815) {
                newHeight = 650;  // Large tablet
            } else if (width >= 560) {
                newHeight = 520;  // Small tablet - reduced
            } else if (width >= 410) {
                newHeight = 450;  // Medium mobile
            } else {
                newHeight = 520;  // Small mobile
            }
            
            setBorderHeight(newHeight);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Show empty state if no results
    if (!results || results.length === 0) {
        return (
            <section className="w-full mx-auto px-8 max-[815px]:px-4 mt-24">
                <div className="flex items-center justify-center h-[400px]">
                    <div className="text-white text-lg">No case results available</div>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full mx-auto px-8 max-[815px]:px-4 mt-24">

            <div className="flex flex-col gap-8">

                {/* Header Section - Desktop: Title left + Button right, Mobile: Stacked */}
                <header className="flex items-start justify-between mb-8 max-[815px]:mb-10 max-[560px]:-mb-10 max-[484px]:-mb-10 max-[1160px]:flex-col max-[1160px]:items-start max-[1160px]:gap-4">
                    
                    {/* Left Side - Title (Desktop and Mobile) */}
                    <div className="flex flex-col">
                        {/* White Title */}
                        <h2 className="text-white text-[42px] max-[922px]:text-[31px] font-helvetica uppercase leading-none">
                            HISTORIC WINS
                        </h2>
                        
                        {/* Red Title - Positioned using CSS Grid for precise alignment */}
                        <div className="grid grid-cols-[max-content_1fr] items-start gap-0 max-[815px]:block">
                            {/* Invisible spacer that matches white title width */}
                            <span className="invisible font-helvetica text-[42px] max-[922px]:text-[31px] leading-none uppercase max-[815px]:hidden">
                                HISTORIC WINS
                            </span>
                            
                            {/* Red Title - Starts a bit before where white title ends */}
                            <span className="leading-none font-helvetica text-[42px] max-[922px]:text-[31px] bg-gradient-to-l from-[#C02B27] to-[#ca403b] bg-clip-text text-transparent ml-[-1em] max-[815px]:ml-0 max-[449px]:bg-none max-[815px]:text-white uppercase">
                                LIFE-CHANGING OUTCOMES.
                            </span>
                        </div>
                    </div>

                    {/* Right Side - Results Button (Desktop only, Mobile goes to top) */}
                    <div className="flex flex-col max-w-[322px] h-full justify-between gap-16 max-[1160px]:gap-4 max-[1160px]:items-start items-end">
                        <button
                            onClick={handleNavigateToResults}
                            className="flex justify-center w-[90px] items-center rounded-md px-[12px] py-[5px] bg-gradient-to-r from-[#C02B27] to-[#C02B27] max-[1160px]:order-first max-[1160px]:mb-4 hover:opacity-90 transition-opacity duration-200 cursor-pointer"
                            aria-label="View case results"
                        >
                            <h3 className="uppercase text-[16px] font-normal leading-none text-white font-helvetica">
                                RESULTS
                            </h3>
                        </button>
                        <p className="text-[#C7C7C7] text-[18px] leading-[160%] max-[1160px]:text-left text-right">
                        <span className="font-medium">Attorney advertisement:</span> Past results are not a guarantee of future outcomes.
                        </p>
                    </div>
                </header>

                {/* Main Content - Two Columns */}
                <main className="flex gap-8 max-[815px]:gap-0 max-[815px]:flex-col">
                    {/* Featured Case Article */}
                    <article className="flex relative w-[810px] max-[815px]:w-full max-[1250px]:-mt-10 max-[560px]:mt-10" style={{ minHeight: isMobile ? `${borderHeight + 80}px` : 'auto' }}>
                        <BlurEffect variant="historic-wins" />
                        
                        {/* Desktop/Tablet: Absolute borders */}
                        {/* Left Vertical Border */}
                        <div 
                            className="absolute left-[-20px] top-0 flex items-start justify-center max-[560px]:hidden" 
                            style={{ 
                                height: `${borderHeight + 40}px`,
                                minHeight: `${borderHeight + 40}px`
                            }}
                        >
                            <VerticalBorder 
                                height={borderHeight}
                                isRotated={false}
                                ariaLabel="Historic wins decoration left"
                            />
                        </div>

                        {/* Right Vertical Border - Rotated 180deg */}
                        <div 
                            className="absolute right-[-20px] top-0 flex items-start justify-center max-[560px]:hidden" 
                            style={{ 
                                height: `${borderHeight + 40}px`,
                                minHeight: `${borderHeight + 40}px`
                            }}
                        >
                            <VerticalBorder 
                                height={borderHeight}
                                isRotated={true}
                                ariaLabel="Historic wins decoration right"
                            />
                        </div>

                        {/* Mobile: Container with borders around content */}
                        <div className="hidden max-[560px]:flex max-[560px]:relative max-[560px]:w-full">
                            {/* Left Border Mobile */}
                            <div className="absolute left-[-10px] top-0 flex items-start justify-center" style={{ height: '100%' }}>
                                <VerticalBorder 
                                    height={borderHeight}
                                    isRotated={false}
                                    ariaLabel="Historic wins decoration left mobile"
                                />
                            </div>
                            
                            {/* Right Border Mobile */}
                            <div className="absolute right-[-10px] top-0 flex items-start justify-center" style={{ height: '100%' }}>
                                <VerticalBorder 
                                    height={borderHeight}
                                    isRotated={true}
                                    ariaLabel="Historic wins decoration right mobile"
                                />
                            </div>

                            {/* Content Mobile */}
                            <div className="relative z-10 flex flex-col items-center justify-center text-center py-16 max-[560px]:pt-0 px-10 w-full" style={{ minHeight: `${borderHeight}px` }}>
                                {/* Logo */}
                                <figure className="mb-6">
                                    <Image
                                        src="/images/logos/olg-bg-red.svg"
                                        alt="Oakwood Legal Group achievement badge"
                                        width={60}
                                        height={60}
                                        className="w-auto h-auto"
                                    />
                                </figure>

                                {/* Settlement Value */}
                                <h3 className="text-white text-[38px] font-bold leading-none mb-10 font-helvetica" style={{ fontWeight: 200 }}>
                                    $852,000,000
                                </h3>

                                {/* Settlement Type */}
                                <h4 className="text-[#C7C7C7] text-[22px] font-normal font-helvetica mb-2 uppercase">
                                    GLOBAL SETTLEMENT
                                </h4>

                                {/* Case Description */}
                                <p className="text-[#C7C7C7] text-[16px] leading-[160%] text-center mb-4">
                                    Oakwood Legal Group, LLP helped secure an unprecedented and record-setting $852 Million Settlement for approximately 700 former USC students who sued USC and Dr. George Tyndall over alleged sexual abuse of students in the university student health center. This is the largest sexual abuse settlement against any university and the largest personal injury settlement against any college or university in American history.
                                </p>
                            </div>
                        </div>

                        {/* Desktop/Tablet: Featured Case Content */}
                        <div className="relative z-10 flex flex-col items-center justify-center text-center py-16 max-[1367px]:pt-0 max-[1279px]:py-6 max-[560px]:py-4 px-16 max-[815px]:px-10 max-[560px]:hidden">
                            {/* Logo */}
                            <figure className="mb-6">
                                <Image
                                    src="/images/logos/olg-bg-red.svg"
                                    alt="OLG Logo"
                                    width={60}
                                    height={60}
                                    className="w-auto h-auto"
                                />
                            </figure>

                            {/* Settlement Value */}
                            <h3 className="text-white text-[52px] max-[922px]:text-[38px] max-[815px]:text-[52px] font-light leading-none mb-10 font-helvetica">
                                $852,000,000
                            </h3>

                            {/* Settlement Type */}
                            <h4 className="text-[#C7C7C7] text-[22px] max-[815px]:text-[26px] font-normal font-helvetica mb-2 uppercase">
                                GLOBAL SETTLEMENT
                            </h4>

                            {/* Case Description */}
                            <p className="text-[#C7C7C7] text-[18px] -mx-4 max-[815px]:text-[20px] leading-[160%] text-center mb-4">
                                Oakwood Legal Group, LLP helped secure an unprecedented and record-setting $852 Million Settlement for approximately 700 former USC students who sued USC and Dr. George Tyndall over alleged sexual abuse of students in the university student health center. This is the largest sexual abuse settlement against any university and the largest personal injury settlement against any college or university in American history.
                            </p>
                        </div>
                    </article>

                    {/* Secondary Content - Two Sections */}
                    <aside className="flex-1 flex flex-col gap-8 max-w-[660px] max-[815px]:max-w-full max-[815px]:mt-40 max-[732px]:mt-25 max-[640px]:mt-20 max-[576px]:mt-10 max-[560px]:mt-0">
                        {/* News Carousel Section - First on mobile */}
                        <section className="max-[815px]:order-first">
                            <LogosCarousel variant="news" />
                        </section>

                        {/* Case Results Carousel Section - Second on mobile */}
                        <section className="h-[330px] max-[815px]:h-[400px] max-[815px]:order-last">
                            <div className="w-full overflow-hidden relative h-[330px] max-[815px]:h-[400px] flex items-center">
                                {/* Left fade effect */}
                                <div
                                    className="absolute left-0 top-0 bottom-0 w-[40px] z-10 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(to right, var(--background), rgba(20, 12, 12, 0.8), transparent)'
                                    }}
                                />

                                {/* Right fade effect */}
                                <div
                                    className="absolute right-0 top-0 bottom-0 w-[40px] z-10 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(to left, var(--background), rgba(20, 12, 12, 0.8), transparent)'
                                    }}
                                />

                                <div 
                                    data-carousel="true" 
                                    className="overflow-hidden max-[560px]:overflow-visible max-[815px]:mt-4 h-full w-full" 
                                    ref={emblaRef}
                                >
                                    <div data-carousel="true" className="flex items-center h-full">
                                        {/* Duplicate items for infinite scroll */}
                                        {[...results, ...results].map((result, index) => (
                                            <div
                                                key={`${result._id}-${index}`}
                                                data-carousel="true"
                                                className="flex-shrink-0 mx-4 flex flex-col items-start justify-start h-[330px] max-[815px]:h-[400px]"
                                            >
                                                <article 
                                                    className="w-[371px] max-[815px]:w-[300px] h-[330px] max-[815px]:h-[400px] p-6 rounded-lg"
                                                    style={{
                                                        background: 'linear-gradient(150deg, rgba(142, 132, 132, 0.10) 7.84%, rgba(20, 12, 12, 0.10) 63.62%), rgba(255, 255, 255, 0.05)'
                                                    }}
                                                >
                                                    <div className="h-full flex flex-col items-start text-left">
                                                        {/* Case Value */}
                                                        <h5 className="text-white text-[38px] mb-2 uppercase leading-normal font-helvetica font-light">
                                                            {result.verdict}
                                                        </h5>

                                                        {/* Decorative Line */}
                                                        <div className="mb-0 -mt-2 w-full flex justify-start">
                                                            <DecorativeLine 
                                                                mainLineWidth={106}
                                                                oneLine={true}
                                                                isRotated={false}
                                                                ariaLabel="Award line decoration"
                                                                className=""
                                                            />
                                                        </div>

                                                        {/* Case Description */}
                                                        <p className="text-[#C7C7C7] text-[16px] leading-[1.5] font-neue-montreal flex-1">
                                                            {result.resultDetails}
                                                        </p>
                                                    </div>
                                                </article>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </aside>
                </main>
            </div>
        </section>
    );
}
