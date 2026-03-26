"use client";

import React, { useEffect, useState } from 'react';
import HeroButtons from '@/components/globals/hero-buttons/hero-buttons';
import VectorIcon from '@/components/globals/vector-icon/vector-icon';
import Image from 'next/image';
import FeaturedIn from './featured-in';
import BlurEffect from '@/components/globals/blur-effect/blur-effect';
import DecorativeLine from '@/components/globals/decorative-line/decorative-line';
import VerticalBorder from '@/components/globals/vertical-border/vertical-border';
import { ASSETS } from '@/utils/assets';

export default function HomeHero() {
    const [isDesktop, setIsDesktop] = useState(false);
    const [showVideoControls, setShowVideoControls] = useState(true);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth >= 1024);
            setShowVideoControls(window.innerWidth >= 810);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <>
            <section className="w-full mx-auto px-4 mt-6 lg:px-8 lg:mt-10">
                <header className="flex flex-col gap-6 lg:gap-8">
                    <BlurEffect variant="home-hero" />

                    {/* Mobile Layout (≤ 560px) */}
                    <div className="block max-[560px]:block min-[561px]:hidden">
                        {/* Mobile Title Section */}
                        <hgroup className="mb-6">
                            <h1 className="text-white leading-none text-[42px] text-left uppercase mb-0 font-helvetica">
                                Justice<br />
                                at the<br />
                                <span className="flex justify-end items-center gap-2 w-full">
                                    <VectorIcon width={31} height={28} className='self-start mt-2' />
                                    <span className="leading-none bg-gradient-to-l from-[#C02B27] to-[#ca403b] bg-clip-text text-transparent text-end">
                                        Highest<br />Level
                                    </span>
                                </span>
                            </h1>
                        </hgroup>

                        {/* Mobile Image and Call Button Row */}
                        <div className="flex items-center justify-between -mt-14 relative z-10">
                            {/* Left - Image */}
                            <figure className="flex-shrink-0">
                                <Image
                                    src="/images/image-home.svg"
                                    alt="Oakwood Legal Group hero background illustration"
                                    width={0}
                                    height={0}
                                    className="w-auto h-auto"
                                />
                            </figure>

                            {/* Right - Call Button */}
                            <div className="flex items-center">
                                <a
                                    href="tel:+18888047858"
                                    className="bg-[#C02B27] text-white px-4 py-2 rounded-md text-[16px] font-neue-montreal font-normal leading-normal hover:opacity-90 transition-opacity duration-200"
                                    aria-label="Call Oakwood Legal Group at 888-804-7858"
                                >
                                    Call 888-804-7858
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Tablet Layout (561px - 1023px) */}
                    <div className="hidden min-[561px]:max-[1024px]:block">
                        {/* Tablet Title Section */}
                        <hgroup className="mb-6 w-[60%] max-[884px]:w-[65%] max-[670px]:w-[60%] mx-auto">
                            <h1 className="text-white leading-none text-[52px] max-[884px]:text-[42px] max-[670px]:text-[32px] text-left uppercase mb-0 font-helvetica">
                                Justice at the
                                <span className="flex justify-end items-center gap-2 w-full">
                                    <VectorIcon width={31} height={28} className='self-start mt-2' />
                                    <span className="leading-none bg-gradient-to-l from-[#C02B27] to-[#ca403b] bg-clip-text text-transparent text-end">
                                        Highest Level
                                    </span>
                                </span>
                            </h1>
                        </hgroup>

                        {/* Tablet Image and Call Button Row */}
                        <div className="flex items-center justify-between -mt-14 relative z-10">
                            {/* Left - Image */}
                            <figure className="flex-shrink-0">
                                <Image
                                    src="/images/image-home.svg"
                                    alt="Oakwood Legal Group hero background illustration"
                                    width={0}
                                    height={0}
                                    className="w-auto h-auto"
                                />
                            </figure>

                            {/* Right - Call Button */}
                            <div className="flex items-center">
                                <a
                                    href="tel:+18888047858"
                                    className="bg-[#C02B27] text-white px-4 py-2 rounded-md text-[16px] font-neue-montreal font-normal leading-normal hover:opacity-90 transition-opacity duration-200"
                                    aria-label="Call Oakwood Legal Group at 888-804-7858"
                                >
                                    Call 888-804-7858
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
            </section>

            {/* Mobile Video - Full Width Outside Container (≤ 560px) */}
            <div className="block max-[560px]:block min-[561px]:hidden -mt-8">
                <figure className="w-full flex items-center justify-center overflow-hidden min-h-[360px]">
                    <video
                        src={ASSETS.HERO_VIDEO}
                        width={800}
                        height={360}
                        autoPlay
                        muted
                        playsInline
                        loop
                        controls={showVideoControls}
                        poster={ASSETS.VIDEO_POSTER}
                        preload="metadata"
                        className="rounded-lg object-cover min-w-[800px] h-[360px] bg-gray-900"
                        style={{ backgroundColor: '#1a1a1a' }}
                        aria-label="Oakwood Legal Group promotional video"
                    />
                </figure>

                {/* Harvard Logo - Centered below video with overlap */}
                <figure className="flex justify-center -mt-26 relative z-20">
                    <Image
                        src="/images/harvard-logo-mobile.svg"
                        alt="Harvard Law School - Educational background"
                        width={80}
                        height={80}
                        className="w-auto h-auto"
                        priority
                    />
                </figure>

                {/* Mobile Description Text */}
                <section className="w-full max-w-[1600px] mx-auto px-4">
                    <div className="text-start mt-6">
                        <p className="text-[#C7C7C7] text-[20px] max-[1510px]:text-[18px] leading-relaxed break-words font-neue-montreal font-normal">
                            We fight for people whose lives have been turned upside down, protecting families, restoring dignity, and demanding justice.
                        </p>
                    </div>
                </section>
            </div>

            {/* Tablet Video - Full Width Outside Container (561px - 1023px) */}
            <div className="hidden min-[561px]:max-[1024px]:block -mt-8 mb-10">
                <figure className="w-full flex items-center justify-center overflow-hidden min-h-[360px]">
                    <video
                        src={ASSETS.HERO_VIDEO}
                        width={800}
                        height={360}
                        autoPlay
                        muted
                        playsInline
                        loop
                        controls={showVideoControls}
                        poster={ASSETS.VIDEO_POSTER}
                        preload="metadata"
                        className="rounded-lg object-cover min-w-[800px] h-[360px] bg-gray-900"
                        style={{ backgroundColor: '#1a1a1a' }}
                        aria-label="Oakwood Legal Group promotional video"
                    />
                </figure>

                {/* Harvard Logo - Centered below video with overlap */}
                <figure className="flex justify-center -mt-26 relative z-20">
                    <Image
                        src="/images/harvard-logo-mobile.svg"
                        alt="Harvard Law School - Educational background"
                        width={80}
                        height={80}
                        className="w-auto h-auto"
                        priority
                    />
                </figure>

                {/* Tablet Description Text */}
                <section className="w-full max-w-[1600px] mx-auto px-4">
                    <div className="text-start mt-6">
                        <p className="text-[#C7C7C7] text-[20px] max-[1510px]:text-[18px] leading-relaxed break-words font-neue-montreal font-normal w-[40%]">
                            We fight for people whose lives have been turned upside down, protecting families, restoring dignity, and demanding justice.
                        </p>
                    </div>
                </section>
            </div>

            <section className="w-full mx-auto px-4 mt-6 lg:px-8 lg:mt-2">
                <header className="flex flex-col gap-6 lg:gap-8">
                    {/* Desktop Layout (≥ 1295px) */}
                    <div className="hidden min-[1295px]:flex gap-12 max-[1330px]:gap-4">
                        {/* Left Column */}
                        <aside className="w-[312px] mt-8 relative">
                            <p className="text-[#C7C7C7] text-[22px] max-[1510px]:text-[18px] leading-relaxed mb-6 font-neue-montreal font-normal">
                                We fight for people whose lives have been turned upside down, protecting families, restoring dignity, and demanding justice.
                            </p>

                            <HeroButtons />

                            <figure className="mt-20 flex justify-center max-[1295px]:hidden">
                                <Image
                                    src="/images/mini-bg-home.svg"
                                    alt="Decorative background element"
                                    width={217}
                                    height={177}
                                    className="w-auto h-auto"
                                />
                            </figure>
                        </aside>

                        {/* Middle Column - Video */}
                        <main className="flex-1 flex ml-4">
                            <figure className="w-[800px] h-[450px] bg-gray-200 rounded-lg flex items-center justify-center relative min-h-[450px]">
                                <video
                                    src={ASSETS.HERO_VIDEO}
                                    width={800}
                                    height={450}
                                    autoPlay
                                    muted
                                    playsInline
                                    loop
                                    controls={showVideoControls}
                                    poster={ASSETS.VIDEO_POSTER}
                                    preload="metadata"
                                    className="rounded-lg w-full h-full object-cover bg-gray-900"
                                    style={{ backgroundColor: '#1a1a1a' }}
                                    aria-label="Oakwood Legal Group promotional video"
                                />
                                {/* Harvard Logo - Top Right Corner */}
                                <figure className="absolute top-[-10px] right-[-170px] z-50 max-[1380px]:right-[-120px]">
                                    <Image
                                        src="/images/harvard-logo.svg"
                                        alt="Harvard Law School - Educational background"
                                        width={80}
                                        height={80}
                                        className="w-auto h-auto"
                                        priority
                                    />
                                </figure>
                            </figure>
                        </main>

                        {/* Right Column */}
                        <aside className="flex-shrink-0 flex flex-col items-end h-[450px] max-[1436px]:hidden">
                            {/* Top Section - Rotated Logo */}
                            <figure className="flex-1 flex items-center justify-end mt-[-15px]">
                                <Image
                                    src="/images/logos/oakwood-legal-group-rotate.svg"
                                    alt="Oakwood Legal Group rotated logo"
                                    width={200}
                                    height={200}
                                    className="w-auto h-auto"
                                />
                            </figure>

                            {/* Bottom Section - Achievements */}
                            <section className="flex-1 flex items-end justify-end mt-5">
                                <div className="flex items-center gap-4 relative">
                                    <BlurEffect variant="home-hero-two" />
                                    <ul className="flex flex-col gap-6">
                                        {/* First Achievement */}
                                        <li className="flex items-center gap-4">
                                            <Image
                                                src="/images/logos/olg-bg-red.svg"
                                                alt="Oakwood Legal Group achievement badge"
                                                width={35}
                                                height={35}
                                                className=""
                                            />
                                            <h3 className="text-white text-[22px] max-[1510px]:text-[18px]">
                                                Led Two Of California's<br />Largest Litigations
                                            </h3>
                                        </li>

                                        {/* Second Achievement */}
                                        <li className="flex items-center gap-4">
                                            <Image
                                                src="/images/logos/olg-bg-red.svg"
                                                alt="Oakwood Legal Group achievement badge"
                                                width={35}
                                                height={35}
                                                className=""
                                            />
                                            <h3 className="text-white text-[22px] max-[1510px]:text-[18px]">
                                                Hundreds Of Millions<br />Recovered For Clients
                                            </h3>
                                        </li>
                                    </ul>

                                    {/* Vertical Border - Right side */}
                                    <div className="flex items-center ml-[-70px] mr-[-18px]">
                                        <VerticalBorder
                                            height={235}
                                            isRotated={true}
                                            ariaLabel="Home hero border decoration"
                                        />
                                    </div>
                                </div>
                            </section>
                        </aside>
                    </div>

                    {/* Medium Desktop Layout (1024px - 1294px) */}
                    <div className="hidden max-[1295px]:block max-[1024px]:hidden">
                        {/* Title */}
                        <hgroup className="w-[80%] mx-auto mb-8">
                            <h1 className="text-white leading-none text-[70px] max-[1200px]:text-[60px] text-left uppercase mb-0 font-helvetica">
                                Justice at the
                                <span className="flex justify-end items-center gap-4 w-full mt-2">
                                    <VectorIcon />
                                    <span className="leading-none ml-4 bg-gradient-to-l from-[#C02B27] to-[#ca403b] bg-clip-text text-transparent">
                                        Highest Level
                                    </span>
                                </span>
                            </h1>
                        </hgroup>

                        {/* Video */}
                        <main className="flex justify-start mb-8 gap-16 max-[1110px]:gap-8">
                            <figure className="mt-20 flex justify-start">
                                <Image
                                    src="/images/mini-bg-home.svg"
                                    alt="Decorative background element"
                                    width={217}
                                    height={177}
                                    className="w-auto h-auto"
                                />
                            </figure>

                            <figure className="w-[700px] max-[1200px]:w-[600px] h-[350px] max-[1200px]:h-[330px] bg-gray-200 rounded-lg flex items-center justify-center relative min-h-[350px] max-[1200px]:min-h-[330px]">
                                <video
                                    src={ASSETS.HERO_VIDEO}
                                    width={700}
                                    height={400}
                                    autoPlay
                                    muted
                                    playsInline
                                    loop
                                    controls={showVideoControls}
                                    poster={ASSETS.VIDEO_POSTER}
                                    preload="metadata"
                                    className="rounded-lg w-full h-full object-cover bg-gray-900"
                                    style={{ backgroundColor: '#1a1a1a' }}
                                    aria-label="Oakwood Legal Group promotional video"
                                />
                                {/* Harvard Logo - Top Right Corner */}
                                <figure className="absolute top-[-5px] right-[-90px] z-50 max-[1200px]:right-[-40px]">
                                    <Image
                                        src="/images/harvard-logo.svg"
                                        alt="Harvard Law School - Educational background"
                                        width={60}
                                        height={60}
                                        className="w-[150px] h-auto"
                                        priority
                                    />
                                </figure>
                            </figure>
                        </main>

                        {/* Text */}
                        <section className="mb-8">
                            <div className="max-w-[350px]">
                                <p className="text-[#C7C7C7] text-[20px] max-[1200px]:text-[18px] leading-relaxed font-neue-montreal font-normal">
                                    We fight for people whose lives have been turned upside down, protecting families, restoring dignity, and demanding justice.
                                </p>
                            </div>
                        </section>

                        {/* Buttons */}
                        <div>
                            <HeroButtons />
                        </div>

                        <aside className="flex-shrink-0 flex flex-col items-end h-[450px] -mt-[480px] mb-20">
                            {/* Top Section - Rotated Logo */}
                            <figure className="flex-1 flex items-center justify-end mt-[-15px]">
                                <Image
                                    src="/images/logos/oakwood-legal-group-rotate.svg"
                                    alt="Oakwood Legal Group rotated logo"
                                    width={200}
                                    height={200}
                                    className="w-auto h-auto"
                                />
                            </figure>

                            {/* Bottom Section - Achievements */}
                            <section className="flex-1 flex items-end justify-end mt-5">
                                <div className="flex items-center gap-4 relative">
                                    <BlurEffect variant="home-hero-two" />
                                    <ul className="flex flex-col gap-6">
                                        {/* First Achievement */}
                                        <li className="flex items-center gap-4">
                                            <Image
                                                src="/images/logos/olg-bg-red.svg"
                                                alt="Oakwood Legal Group achievement badge"
                                                width={35}
                                                height={35}
                                                className=""
                                            />
                                            <h3 className="text-white text-[14px]">
                                                Led Two Of California's<br />Largest Litigations
                                            </h3>
                                        </li>

                                        {/* Second Achievement */}
                                        <li className="flex items-center gap-4">
                                            <Image
                                                src="/images/logos/olg-bg-red.svg"
                                                alt="Oakwood Legal Group achievement badge"
                                                width={35}
                                                height={35}
                                                className=""
                                            />
                                            <h3 className="text-white text-[14px]">
                                                Hundreds Of Millions<br />Recovered For Clients
                                            </h3>
                                        </li>
                                    </ul>

                                    {/* Vertical Border - Right side */}
                                    <div className="flex items-center ml-[-70px] mr-[-18px]">
                                        <VerticalBorder
                                            height={205}
                                            isRotated={true}
                                            ariaLabel="Home hero border decoration"
                                        />
                                    </div>
                                </div>
                            </section>
                        </aside>
                    </div>

                    {/* Desktop Title Section (≥ 1295px) */}
                    <hgroup className="hidden min-[1295px]:block w-full pr-22">
                        <div className="w-[1123px] ml-[345px] max-[1540px]:ml-[270px] max-[1436px]:ml-[150px] max-[1330px]:ml-[80px] -mt-12 relative z-10">
                            {/* Main Title - Complete heading */}
                            <h1 className="text-white leading-none text-[90px] max-[1510px]:text-[80px] max-[1510px]:mt-10 text-left uppercase mb-0 font-helvetica">
                                Justice at the
                                <span className="flex justify-end items-center gap-4 w-full">
                                    <VectorIcon />
                                    <span className="leading-none ml-7 bg-gradient-to-l from-[#C02B27] to-[#ca403b] bg-clip-text text-transparent">
                                        Highest Level
                                    </span>
                                </span>
                            </h1>
                        </div>
                    </hgroup>

                    <FeaturedIn />
                </header>
            </section>

            {/* Decorative Line - Conditional positioning based on screen size */}
            <div className="max-[499px]:w-full max-[499px]:flex max-[499px]:justify-end max-[499px]:mb-8 max-[499px]:-mt-11 min-[500px]:w-full min-[500px]:max-w-[1600px] min-[500px]:mx-auto min-[500px]:px-4 min-[500px]:lg:px-8 min-[500px]:flex min-[500px]:justify-end min-[500px]:mb-8" role="separator" aria-hidden="true">
                <DecorativeLine
                    mainLineWidth={isDesktop ? 260 : 166}
                    isRotated={true}
                    ariaLabel="Featured in decorative line rotated"
                />
            </div>
        </>
    );
}
