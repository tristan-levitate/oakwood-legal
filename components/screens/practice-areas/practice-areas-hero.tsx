import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import VectorIcon from '@/components/globals/vector-icon/vector-icon';

interface PracticeAreasHeroProps {
    titleWhite: string;
    titleRed: string;
    message: string;
}

export default function PracticeAreasHero({ titleWhite, titleRed, message }: PracticeAreasHeroProps) {
    return (
        <div 
            className="max-w-[1600px] mx-auto relative z-30 mt-12 p-2 flex"
            style={{
                width: '1540px',
                height: '522px',
                flexShrink: 0,
                borderRadius: '20px',
                background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.20) 100%), url(/images/bg-practice-areas.svg) lightgray 50% / cover no-repeat'
            }}
        >
            {/* Background Image */}
            <div className="absolute top-8 right-8 z-10">
                <Image
                    src="/images/logos/olg-bg-red.svg"
                    alt="Oakwood Legal Group logo background element"
                    width={200}
                    height={200}
                    className="w-auto h-auto"
                />
            </div>

            <div className="w-full max-w-[1600px] mx-auto px-8 relative z-20">
                <div className="flex items-start justify-between min-h-fit h-full">
                    {/* Left Side - Titles */}
                    <div className="flex flex-col self-start mt-6">
                        {/* White Title - Top Left */}
                        <h1 className="text-white leading-none font-helvetica text-[52px] text-left mb-4">
                            {titleWhite}
                        </h1>

                        {/* Red Title - Positioned using CSS Grid for precise alignment */}
                        <div className="grid grid-cols-[max-content_1fr] items-start gap-0">
                            {/* Invisible spacer that matches white title width */}
                            <span className="invisible font-helvetica text-[52px] leading-none">
                                {titleWhite}
                            </span>

                            {/* Red Title - Starts a bit before where white title ends */}
                            <span className="leading-none font-helvetica text-[52px] bg-gradient-to-l from-[#C02B27] to-[#ca403b] bg-clip-text text-transparent ml-[-1em]">
                                {titleRed}
                            </span>
                        </div>
                    </div>

                    {/* Right Side - Message */}
                    <div className="flex justify-end self-end mb-[-20px]">
                        <div className="relative w-[763px] min-h-[316px] mr-0">
                            <Image
                                src="/images/rectangle-title-2.png"
                                alt="Practice areas title background decoration"
                                width={694}
                                height={218}
                                className="absolute left-[-15px] top-[40px] w-[95px] h-[240px]"
                            />

                            {/* Message Content - Positioned from center of SVG */}
                            <div className="absolute inset-0 flex items-center justify-center px-4">
                                <p className="font-neue-montreal text-[21px] leading-[1.1] text-[#C7C7C7] text-left pl-5">
                                    {message}
                                </p>
                            </div>
                        </div>

                     </div>
                </div>

                {/* Bottom Left Buttons */}
                <div className="absolute bottom-8 left-8 flex gap-4 z-30">
                    {/* Call Button */}
                    <Link
                        href="tel:+18664056837"
                        className="flex cursor-pointer justify-center items-center gap-[5px] px-4 py-0 rounded-[6px] text-white font-normal font-helvetica"
                        style={{
                            background: '#C02B27'
                        }}
                    >
                        Call (866) 405-6837
                    </Link>

                    {/* Arrow Button - Same design as awards carousel next button */}
                    <div
                        className="p-[1px] rounded-[6px] transition-all duration-200 hover:opacity-80 w-[37px] h-[37px]"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 30%, rgba(39,36,36,0.1) 70%)'
                        }}
                    >
                        <button
                            className="p-3 cursor-pointer rounded-[6px] w-[35px] h-[35px] flex items-center justify-center"
                            style={{
                                background: 'linear-gradient(150deg, rgba(142, 132, 132, 0.10) 7.84%, rgba(20, 12, 12, 0.10) 63.62%), rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(142, 132, 132, 0.4)'
                            }}
                        >
                            <VectorIcon
                                width={11}
                                height={12}
                                fill="#FFF"
                                stroke="none"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
