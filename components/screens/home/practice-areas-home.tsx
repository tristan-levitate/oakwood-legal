"use client";

import React from 'react';
import Image from 'next/image';
import CardPracticeAreasHome from './card-practice-areas-home';

interface PracticeAreaCard {
    titleForSEO: string;
    descriptionForSEO: string;
    title: string;
    slug: string;
    description: string;
    date: string;
    imageUrl: string;
}

interface PracticeAreasHomeProps {
    practiceAreas: PracticeAreaCard[];
}

export default function PracticeAreasHome({ practiceAreas }: PracticeAreasHomeProps) {
    return (
        <>
            {/* Background Image - Full Width Outside Container */}
            <figure className="w-full flex items-center justify-center mt-22">
                <Image
                    src="/images/bg-practice-a-home.png"
                    alt="Practice areas section background decoration"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto object-contain max-w-none"
                />
            </figure>

            <section className="w-full max-w-[1600px] mx-auto px-8 max-[950px]:px-4 overflow-visible">
                <div className="flex flex-col gap-0 overflow-visible">
                 {/* Header Section - Desktop Layout (≥ 1190px) */}
                 <header className="hidden min-[1190px]:flex items-start w-full">
                     {/* Practice Areas Badge */}
                     <div className="flex justify-center items-center rounded-md px-[12px] py-[7px] bg-gradient-to-r from-[#C02B27] to-[#C02B27] mt-2">
                         <h3 className="uppercase text-[16px] font-normal leading-none text-white font-helvetica">
                             PRACTICE AREAS
                         </h3>
                     </div>

                     <div className="flex-1 flex justify-end">
                         <hgroup className="flex flex-col w-[905px] mr-[300px] max-[1455px]:mr-[200px] max-[1455px]:w-[800px] max-[1350px]:w-[600px] max-[1350px]:mr-[300px]">
                             {/* Section Title */}
                             <h2 className="text-white leading-none font-helvetica text-[52px] max-[1455px]:text-[44px] max-[1350px]:text-[38px] text-left uppercase">
                                 Fighting for Justice
                                 <span className="flex justify-end">
                                     <span className="leading-none bg-gradient-to-l from-[#C02B27] to-[#ca403b] bg-clip-text text-transparent">
                                         in Every Case
                                     </span>
                                 </span>
                             </h2>
                         </hgroup>
                     </div>
                 </header>

                 {/* Header Section - Small Desktop Layout (951px - 1189px) */}
                 <header className="hidden min-[951px]:max-[1190px]:flex flex-col items-start gap-4">
                     <div className="flex justify-center items-center rounded-md px-[12px] py-[7px] bg-gradient-to-r from-[#C02B27] to-[#C02B27]">
                         <span className="uppercase text-[16px] font-normal leading-none text-white font-helvetica">
                             PRACTICE AREAS
                         </span>
                     </div>
                     
                     {/* Main Title - Small Desktop */}
                     <h2 className="text-white text-[38px] max-[1100px]:text-[34px] ml-0 font-helvetica uppercase">
                         FIGHTING FOR JUSTICE
                         <span className="block">
                             <span className="leading-none bg-gradient-to-l text-white bg-clip-text">
                                 IN EVERY CASE
                             </span>
                         </span>
                     </h2>
                 </header>

                 {/* Header Section - Mobile Layout (< 951px) */}
                 <header className="max-[950px]:flex max-[950px]:flex-col max-[950px]:items-start max-[950px]:gap-4 max-[950px]:mb-0 hidden">
                     <div className="flex justify-center items-center rounded-md px-[12px] py-[5px] bg-gradient-to-r from-[#C02B27] to-[#C02B27]">
                         <span className="uppercase text-[16px] font-normal leading-none text-white font-helvetica">
                             PRACTICE AREAS
                         </span>
                     </div>
                     
                     {/* Main Title - Mobile */}
                     <h2 className="text-white text-[42px] max-[950px]:text-[31px] ml-0 font-helvetica uppercase">
                         FIGHTING FOR JUSTICE
                         <span className="block">
                             <span className="leading-none text-white">
                                 IN EVERY CASE
                             </span>
                         </span>
                     </h2>
                 </header>

                 {/* Main Content - Practice Areas Cards */}
                 <main className="mt-12 overflow-visible">
                     <CardPracticeAreasHome practiceAreas={practiceAreas} />
                 </main>
                </div>
            </section>
        </>
    );
}
