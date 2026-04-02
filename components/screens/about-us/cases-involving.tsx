import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogosCarousel from '@/components/globals/carousel-slider/carousel-slider';
import BlurEffect from '@/components/globals/blur-effect/blur-effect';

export default function CasesInvolving() {
    return (
        <>
            <BlurEffect variant="cases-involving" />
            
            {/* Desktop/Tablet Layout (≥846px) */}
            <section className="flex max-w-[1600px] mx-auto px-8 mt-12 gap-8 max-[846px]:hidden">
                {/* Left Side - Featured Content */}
                <aside
                    className="w-[563px] max-[1080px]:w-[450px] max-[896px]:w-[400px] h-[730px] p-6 pb-8 flex-shrink-0"
                    style={{ borderRadius: '6px', background: 'linear-gradient(156deg, rgba(192, 43, 39, 0.20) 1.7%, rgba(192, 43, 39, 0.00) 54.74%), linear-gradient(150deg, rgba(142, 132, 132, 0.10) 7.84%, rgba(20, 12, 12, 0.10) 63.62%), rgba(255, 255, 255, 0.05)' }}
                >
                    <div className="flex flex-col gap-8 h-full">
                        {/* Featured Image */}
                        <figure>
                            <Image
                                src="/images/mock-cases-envolving.svg"
                                alt="Legal cases illustration showing Oakwood Legal Group expertise"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto"
                            />
                        </figure>

                        {/* Featured Title */}
                        <header className="flex items-center justify-center flex-1">
                            <h2 className="text-white text-[28px] font-light uppercase text-center font-helvetica">
                                California's Premier Personal Injury & Employment Law Firm
                            </h2>
                        </header>
                    </div>
                </aside>

                {/* Right Side - Main Content */}
                <main className="flex-1 min-w-0 mt-14 max-[1080px]:mt-4">
                    <article className="flex flex-col gap-8">
                        {/* Introduction */}
                        <p className="text-[#C7C7C7] text-[18px] max-w-[655px] self-center font-neue-montreal" style={{ lineHeight: '160%' }}>
                            Our attorneys have set records across California with groundbreaking litigation and historic settlements. With Harvard-trained leadership and decades of combined experience, we've recovered hundreds of millions for injured clients statewide.
                        </p>

                        {/* Call-to-Action */}
                        <nav className="flex justify-start self-center max-w-[655px] w-full">
                            <Link
                                href="#contact-us"
                                className="bg-transparent cursor-pointer text-white font-normal font-neue-montreal text-[18px] py-1 px-3 rounded-[6px] border border-[#FF503C] hover:bg-[rgba(255,80,60,0.1)] transition-colors duration-200"
                                aria-label="Book a free consultation with our attorneys"
                            >
                                BOOK A FREE CONSULTATION
                            </Link>
                        </nav>

                        {/* Cases Section */}
                        <section className="self-center max-w-[655px] w-full">
                            <h3 className="text-[#C7C7C7] text-[18px] mb-4 font-neue-montreal">We handle serious cases involving:</h3>
                            
                            <div className="mt-4">
                                <LogosCarousel variant="cases" />
                            </div>
                        </section>

                        {/* Closing Statement */}
                        <p className="text-[#C7C7C7] text-[18px] max-w-[650px] self-center font-neue-montreal">
                            When you choose Oakwood, you choose a firm that knows how to win — and how to take care of you.
                        </p>
                    
                        {/* News/Media Section */}
                        <section className="mt-4">
                            <h3 className="sr-only">Featured in Media</h3>
                            <LogosCarousel variant="news" />
                        </section>
                    
                    </article>
                </main>
            </section>

            {/* Mobile Layout (<846px) - 3 Rows */}
            <section className="max-w-[1600px] mx-auto px-8 mt-12 hidden max-[846px]:block">
                {/* Row 1: Card with Image Left + Text Right / Image Top + Text Bottom */}
                <div 
                    className="flex gap-6 p-6 mb-8 rounded-[6px] max-[545px]:flex-col max-[545px]:gap-4 max-[545px]:text-center"
                    style={{ background: 'linear-gradient(156deg, rgba(192, 43, 39, 0.20) 1.7%, rgba(192, 43, 39, 0.00) 54.74%), linear-gradient(150deg, rgba(142, 132, 132, 0.10) 7.84%, rgba(20, 12, 12, 0.10) 63.62%), rgba(255, 255, 255, 0.05)' }}
                >
                    {/* Image */}
                    <figure className="flex-shrink-0 w-[200px] max-[545px]:w-full max-[545px]:flex max-[545px]:justify-center">
                        <Image
                            src="/images/mock-cases-envolving.svg"
                            alt="Cases Involving illustration"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto max-[545px]:w-auto max-[545px]:max-w-[200px]"
                        />
                    </figure>
                    
                    {/* Text */}
                    <div className="flex items-center flex-1 max-[545px]:justify-center">
                        <h2 className="text-white text-[28px] max-[754px]:text-[20px] max-[545px]:text-[32px] max-[425px]:text-[24px] font-light uppercase font-helvetica">
                            California's Premier Personal Injury & Employment Law Firm
                        </h2>
                    </div>
                </div>

                {/* Row 2: Two Columns / Two Rows */}
                <div className="flex gap-8 mb-8 max-[590px]:flex-col max-[590px]:gap-6">
                    {/* First Column/Row: Introduction + Button */}
                    <div className="w-1/2 max-[590px]:w-full flex flex-col gap-6 justify-between max-[590px]:justify-start">
                        <p className="text-[#C7C7C7] text-[18px] max-[754px]:text-[14px] max-[590px]:text-[18px] font-neue-montreal" style={{ lineHeight: '160%' }}>
                            Our attorneys have set records across California with groundbreaking litigation and historic settlements. With Harvard-trained leadership and decades of combined experience, we've recovered hundreds of millions for injured clients statewide.
                        </p>
                        
                        <nav className="flex justify-start max-[590px]:justify-end">
                            <Link
                                href="#contact-us"
                                className="bg-transparent cursor-pointer text-white font-normal font-neue-montreal text-[18px] max-[754px]:text-[14px] py-1 px-3 rounded-[6px] border border-[#FF503C] hover:bg-[rgba(255,80,60,0.1)] transition-colors duration-200"
                                aria-label="Book a free consultation with our attorneys"
                            >
                                BOOK A FREE CONSULTATION
                            </Link>
                        </nav>
                    </div>

                    {/* Second Column/Row: Cases + Carousel + Closing */}
                    <div className="w-1/2 max-[590px]:w-full flex flex-col gap-6">
                        {/* Cases Section */}
                        <section>
                            <h3 className="text-[#C7C7C7] text-[18px] max-[754px]:text-[14px] max-[590px]:text-[18px] mb-4 font-neue-montreal">We handle serious cases involving:</h3>
                            
                            <div className="mt-4">
                                <LogosCarousel variant="cases" />
                            </div>
                        </section>

                        {/* Closing Statement */}
                        <p className="text-[#C7C7C7] text-[18px] max-[754px]:text-[14px] max-[590px]:text-[18px] font-neue-montreal">
                            When you choose Oakwood, you choose a firm that knows how to win — and how to take care of you.
                        </p>
                    </div>
                </div>

                {/* Row 3: News Carousel */}
                <section>
                    <LogosCarousel variant="news" />
                </section>
            </section>
        </>
    );
}
