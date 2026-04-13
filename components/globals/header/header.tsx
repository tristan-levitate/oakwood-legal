"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin, FaFacebook, FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import IconWithCircle from "../icon-with-circle/icon-with-circle";
import { ActiveTabIndicator } from "../shared-components/shared-components";
import HeaderBackground from "./header-background/header-background";
import HeaderMobile from "./header-mobile";
import Submenu from "./submenu";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { OakwoodLogo } from "../logo/OakwoodLogo";
import type { PracticeAreaMenuItem } from "@/types/types";

interface HeaderProps {
  practiceAreaMenuItems: PracticeAreaMenuItem[];
}

export default function Header({ practiceAreaMenuItems }: HeaderProps) {
  const pathname = usePathname();
  const isStudioPage = pathname.includes("studio");
  const isMobile = useMediaQuery("(max-width: 1360px)");

  if (isStudioPage) return null;

  // Return mobile header for screens smaller than 1360px
  if (isMobile) {
    return <HeaderMobile practiceAreaMenuItems={practiceAreaMenuItems} />;
  }

  // Define which tabs are on the right side
  const rightSideTabs = ["/cases-in-the-news", "/awards-recognitions", "/articles"];
  const isRightSideTab = rightSideTabs.includes(pathname);
  
  // Dynamic margin for logo based on active tab
  const logoMargin = isRightSideTab ? "ml-[186px]" : "ml-[90px]";

  // Function to scroll to contact us section
  const scrollToContactUs = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-us');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="w-full bg-[#140C0C] text-white relative overflow-visible" role="banner">
      {/* Background SVG - Below everything */}
      <div className="absolute inset-0 z-0 flex items-start justify-center" aria-hidden="true">
        <HeaderBackground />
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-8 py-4 relative z-50 overflow-visible">
        {/* Main Navigation Bar */}
        <div className="relative z-30 flex items-center justify-between w-full">
          {/* Primary Navigation - Left */}
          <nav className="hidden lg:inline-flex items-center gap-[20px]" aria-label="Primary navigation">
            {/* Home */}
            <div className="relative">
              {pathname === "/" && <ActiveTabIndicator />}
              <Link
                href="/"
                className={`relative z-10 transition-colors duration-200 font-normal text-base capitalize flex items-center justify-center ${pathname === "/"
                  ? "text-white px-4 py-2 pl-8 rounded-md gap-[5px]"
                  : "text-white hover:text-gray-300"
                  }`}
                aria-current={pathname === "/" ? "page" : undefined}
              >
                Home
              </Link>
            </div>

            {/* About Us */}
            <div className="relative">
              {pathname === "/about-us" && <ActiveTabIndicator />}
              <Link
                href="/about-us"
                className={`relative z-10 transition-colors duration-200 font-normal text-base capitalize flex items-center justify-center ${pathname === "/about-us"
                  ? "text-white px-4 py-2 pl-8 rounded-md gap-[5px]"
                  : "text-white hover:text-gray-300"
                  }`}
                aria-current={pathname === "/about-us" ? "page" : undefined}
              >
                About Us
              </Link>
            </div>

            <Submenu items={practiceAreaMenuItems} pathname={pathname} />

            {/* Case Results */}
            <div className="relative">
              {pathname === "/case-results" && <ActiveTabIndicator />}
              <Link
                href="/case-results"
                className={`relative z-10 transition-colors duration-200 font-normal text-base capitalize flex items-center justify-center ${pathname === "/case-results"
                  ? "text-white px-4 py-2 pl-8 rounded-md gap-[5px]"
                  : "text-white hover:text-gray-300"
                  }`}
                aria-current={pathname === "/case-results" ? "page" : undefined}
              >
                Case Results
              </Link>
            </div>
          </nav>

          {/* Site Logo */}
          <div className={`flex items-center ${logoMargin}`}>
            <Link href="/" className="flex items-center cursor-pointer" aria-label="Oakwood Legal Group - Home">
              <OakwoodLogo
                width={230}
                height={69}
                className="w-[230px] h-auto"
              />
            </Link>
          </div>

          {/* Secondary Navigation and CTA - Right */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="inline-flex items-center gap-[20px]" aria-label="Secondary navigation">
              {/* Cases In The News */}
              <div className="relative">
                {pathname === "/cases-in-the-news" && <ActiveTabIndicator />}
                <Link
                  href="/cases-in-the-news"
                  className={`relative z-10 transition-colors duration-200 font-normal text-base capitalize flex items-center justify-center ${pathname === "/cases-in-the-news"
                    ? "text-white px-4 py-2 pl-8 rounded-md gap-[5px]"
                    : "text-white hover:text-gray-300"
                    }`}
                  aria-current={pathname === "/cases-in-the-news" ? "page" : undefined}
                >
                  Cases In The News
                </Link>
              </div>

              {/* Awards */}
              <div className="relative">
                {pathname === "/awards-recognitions" && <ActiveTabIndicator />}
                <Link
                  href="/awards-recognitions"
                  className={`relative z-10 transition-colors duration-200 font-normal text-base capitalize flex items-center justify-center ${pathname === "/awards-recognitions"
                    ? "text-white px-4 py-2 pl-8 rounded-md gap-[5px]"
                    : "text-white hover:text-gray-300"
                    }`}
                  aria-current={pathname === "/awards-recognitions" ? "page" : undefined}
                >
                  Awards
                </Link>
              </div>

              {/* Articles */}
              <div className="relative">
                {pathname.includes("/articles") && <ActiveTabIndicator />}
                <Link
                  href="/articles"
                  className={`relative z-10 transition-colors duration-200 font-normal text-base capitalize flex items-center justify-center ${pathname.includes("/articles")
                    ? "text-white px-4 py-2 pl-8 rounded-md gap-[5px]"
                    : "text-white hover:text-gray-300"
                    }`}
                  aria-current={pathname.includes("/articles") ? "page" : undefined}
                >
                  Articles
                </Link>
              </div>
            </nav>

            {/* Call-to-Action Button */}
            <div>
              <button
                onClick={scrollToContactUs}
                className="relative cursor-pointer flex justify-center items-center gap-[5px] px-4 py-2 rounded-[6px] font-normal font-helvetica transition-all duration-200 hover:opacity-90 overflow-hidden"
                style={{
                  background: 'linear-gradient(247deg, #7D110E -20.38%, #140C0C 105.72%)'
                }}
                type="button"
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-[6px] p-[1px] bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.2)]" aria-hidden="true">
                  <div className="w-full h-full rounded-[6px]" style={{
                    background: 'linear-gradient(247deg, #7D110E -20.38%, #140C0C 105.72%)'
                  }} />
                </div>
                <span className="relative z-10">Book A Consultation</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Open mobile menu"
              type="button"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Decorative Line Separator */}
        <div className="w-full mt-4 relative z-10 flex justify-center" role="separator" aria-hidden="true">
          <Image
            src="/images/line-header.png"
            alt="Decorative header line separator"
            width={1600}
            height={20}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1600px"
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Contact Information and Social Media */}
        <div className="w-full mt-4 relative z-10 flex items-center justify-between">
          {/* Contact Information */}
          <address className="inline-flex items-center gap-[30px] not-italic">
            {/* Email Contact */}
            <div className="inline-flex items-center gap-[10px]">
              <IconWithCircle>
                <IoMailSharp className="text-white text-[14px]" aria-hidden="true" />
              </IconWithCircle>
              <Link
                href="mailto:info@oakwoodlegal.com"
                className="text-white hover:text-gray-300 transition-colors duration-200 text-[14px]"
              >
                info@oakwoodlegal.com
              </Link>
            </div>

            {/* Phone Contact */}
            <div className="inline-flex items-center gap-[10px]">
              <IconWithCircle>
                <FaPhone className="text-white text-[14px]" aria-hidden="true" />
              </IconWithCircle>
              <Link
                href="tel:+18888047858"
                className="text-white hover:text-gray-300 transition-colors duration-200 text-[14px]"
              >
                888-804-7858
              </Link>
            </div>
          </address>

          {/* Social Media Navigation */}
          <nav className="inline-flex items-center gap-[11px]" aria-label="Social media links">
            {/* Facebook */}
            <Link
              href="https://www.facebook.com/oakwoodlegalgroup/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-200"
              aria-label="Follow Oakwood Legal Group on Facebook"
            >
              <IconWithCircle>
                <FaFacebook className="text-white text-[14px]" aria-hidden="true" />
              </IconWithCircle>
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/company/oakwood-legal-group/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-200"
              aria-label="Follow Oakwood Legal Group on LinkedIn"
            >
              <IconWithCircle>
                <FaLinkedin className="text-white text-[14px]" aria-hidden="true" />
              </IconWithCircle>
            </Link>

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/oakwoodlegalgroup/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-200"
              aria-label="Follow Oakwood Legal Group on Instagram"
            >
              <IconWithCircle>
                <RiInstagramFill className="text-white text-[14px]" aria-hidden="true" />
              </IconWithCircle>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
