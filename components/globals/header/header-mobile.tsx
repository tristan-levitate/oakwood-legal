"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin, FaFacebook, FaPhone, FaXmark } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import IconWithCircle from "../icon-with-circle/icon-with-circle";
import HamburgerMenuIcon from "./hamburger-menu-icon";
import { OakwoodLogo } from "../logo/OakwoodLogo";
import { ASSETS } from '@/utils/assets';

export default function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Lock/unlock body scroll when menu opens/closes
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Function to scroll to contact us section
  const scrollToContactUs = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const contactSection = document.getElementById('contact-us');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="w-full text-white relative z-[100]">
      <div className="w-full max-w-[1600px] mx-auto px-4 py-4 relative">
        <div className="flex items-center justify-between w-full">
          {/* Book A Consultation Button - Left side (hidden below 825px) */}
          <button
            onClick={scrollToContactUs}
            className="min-[825px]:block hidden px-4 py-2 rounded-md font-normal font-helvetica text-sm transition-all duration-200 hover:opacity-90 relative overflow-hidden"
            style={{
              background: 'linear-gradient(247deg, #7D110E -20.38%, #140C0C 105.72%)'
            }}
          >
            <div className="absolute inset-0 rounded-md p-[1px] bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.2)]">
              <div className="w-full h-full rounded-md" style={{
                background: 'linear-gradient(247deg, #7D110E -20.38%, #140C0C 105.72%)'
              }} />
            </div>
            <span className="relative z-10 whitespace-nowrap font-helvetica">Book A Consultation</span>
          </button>

          {/* Logo - Center aligned above 825px, left aligned below 825px */}
          <Link href="/" className="flex items-center min-[825px]:absolute min-[825px]:left-1/2 min-[825px]:transform min-[825px]:-translate-x-1/2">
            <OakwoodLogo
              width={200}
              height={60}
              className="h-auto w-[200px]"
            />
          </Link>

          {/* Hamburger Menu Button - Right side */}
          <button
            onClick={toggleMenu}
            className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-white/10 transition-colors duration-200 z-10"
          >
            {isMenuOpen ? (
              <FaXmark className="text-white text-xl" />
            ) : (
              <HamburgerMenuIcon width={24} height={24} />
            )}
          </button>
        </div>

        {/* Line Image - Below navigation */}
        <div className="w-full mt-4 relative flex justify-center">
          <Image
            src="/images/line-header.png"
            alt="Header line"
            width={0}
            height={0}
            sizes="245vw"
            className="w-auto h-auto"
            priority
          />
        </div>

        {/* Contact Info and Social Media */}
        <div className="w-full mt-4 relative flex flex-row items-center justify-between px-2">
          {/* Left Section - Contact Info */}
          <div className="flex flex-row items-center gap-4 min-[500px]:gap-6">
            {/* Email - Hidden below 500px */}
            <div className="hidden min-[500px]:flex items-center gap-2">
              <IconWithCircle>
                <IoMailSharp className="text-white text-[12px]" />
              </IconWithCircle>
              <Link
                href="mailto:info@oakwoodlegal.com"
                className="text-white hover:text-gray-300 transition-colors duration-200 text-[12px]"
              >
                info@oakwoodlegal.com
              </Link>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2">
              <IconWithCircle>
                <FaPhone className="text-white text-[12px] max-[500px]:text-[14px]" />
              </IconWithCircle>
              <Link
                href="tel:+18664056837"
                className="text-white hover:text-gray-300 transition-colors duration-200 text-[12px] max-[500px]:text-[16px]"
              >
                (866) 405-6837
              </Link>
            </div>
          </div>

          {/* Right Section - Social Media */}
          <div className="flex items-center gap-2">
            {/* Facebook */}
            <Link
              href="https://facebook.com/oakwoodlegal"
              target="_blank"
              className="hover:opacity-80 transition-opacity duration-200"
            >
              <IconWithCircle>
                <FaFacebook className="text-white text-[12px]" />
              </IconWithCircle>
            </Link>

            {/* LinkedIn - Hidden below 500px */}
            <Link
              href="https://linkedin.com/company/oakwoodlegal"
              target="_blank"
              className="hidden min-[500px]:block hover:opacity-80 transition-opacity duration-200"
            >
              <IconWithCircle>
                <FaLinkedin className="text-white text-[12px]" />
              </IconWithCircle>
            </Link>

            {/* Instagram */}
            <Link
              href="https://instagram.com/oakwoodlegal"
              target="_blank"
              className="hover:opacity-80 transition-opacity duration-200"
            >
              <IconWithCircle>
                <RiInstagramFill className="text-white text-[12px]" />
              </IconWithCircle>
            </Link>
          </div>
        </div>

        {/* Mobile Menu - Fullscreen */}
        <div className={`fixed inset-0 bg-[#140C0C]/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out z-[9999] overflow-y-auto ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col min-h-full">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <Image
                src={ASSETS.LOGO_WHITE}
                alt="Oakwood Legal Group"
                width={200}
                height={60}
                className="h-auto w-[200px]"
              />
              <button
                onClick={toggleMenu}
                className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-white/10 transition-colors duration-200"
              >
                <FaXmark className="text-white text-2xl" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-6 py-4 space-y-4 flex flex-col">
              <Link
                href="/"
                className={`block py-4 px-6 rounded-md transition-colors duration-200 text-lg font-normal font-helvetica text-left ${
                  pathname === "/" 
                    ? "bg-gradient-to-r from-[#7D110E] to-[#140C0C] text-white" 
                    : "text-white hover:bg-white/10"
                }`}
                onClick={toggleMenu}
              >
                Home
              </Link>

              <Link
                href="/about-us"
                className={`block py-4 px-6 rounded-md transition-colors duration-200 text-lg font-normal font-helvetica text-left ${
                  pathname === "/about-us" 
                    ? "bg-gradient-to-r from-[#7D110E] to-[#140C0C] text-white" 
                    : "text-white hover:bg-white/10"
                }`}
                onClick={toggleMenu}
              >
                About Us
              </Link>

              <Link
                href="/practice-areas"
                className={`block py-4 px-6 rounded-md transition-colors duration-200 text-lg font-normal font-helvetica text-left ${
                  pathname === "/practice-areas" 
                    ? "bg-gradient-to-r from-[#7D110E] to-[#140C0C] text-white" 
                    : "text-white hover:bg-white/10"
                }`}
                onClick={toggleMenu}
              >
                Practice Areas
              </Link>

              <Link
                href="/case-results"
                className={`block py-4 px-6 rounded-md transition-colors duration-200 text-lg font-normal font-helvetica text-left ${
                  pathname === "/case-results" 
                    ? "bg-gradient-to-r from-[#7D110E] to-[#140C0C] text-white" 
                    : "text-white hover:bg-white/10"
                }`}
                onClick={toggleMenu}
              >
                Case Results
              </Link>

              <Link
                href="/cases-in-the-news"
                className={`block py-4 px-6 rounded-md transition-colors duration-200 text-lg font-normal font-helvetica text-left ${
                  pathname === "/cases-in-the-news" 
                    ? "bg-gradient-to-r from-[#7D110E] to-[#140C0C] text-white" 
                    : "text-white hover:bg-white/10"
                }`}
                onClick={toggleMenu}
              >
                Cases In The News
              </Link>

              <Link
                href="/awards-recognitions"
                className={`block py-4 px-6 rounded-md transition-colors duration-200 text-lg font-normal font-helvetica text-left ${
                  pathname === "/awards-recognitions" 
                    ? "bg-gradient-to-r from-[#7D110E] to-[#140C0C] text-white" 
                    : "text-white hover:bg-white/10"
                }`}
                onClick={toggleMenu}
              >
                Awards
              </Link>

              <Link
                href="/articles"
                className={`block py-4 px-6 rounded-md transition-colors duration-200 text-lg font-normal font-helvetica text-left ${
                  pathname.includes("/articles") 
                    ? "bg-gradient-to-r from-[#7D110E] to-[#140C0C] text-white" 
                    : "text-white hover:bg-white/10"
                }`}
                onClick={toggleMenu}
              >
                Articles
              </Link>

              {/* CTA Button */}
              <button
                onClick={scrollToContactUs}
                className="w-full mt-4 px-6 py-2 rounded-md font-normal font-helvetica text-lg transition-all duration-200 hover:opacity-90 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(247deg, #7D110E -20.38%, #140C0C 105.72%)'
                }}
              >
                <div className="absolute inset-0 rounded-md p-[1px] bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.2)]">
                  <div className="w-full h-full rounded-md" style={{
                    background: 'linear-gradient(247deg, #7D110E -20.38%, #140C0C 105.72%)'
                  }} />
                </div>
                <span className="relative z-10 font-helvetica">Book A Consultation</span>
              </button>
            </nav>

            {/* Contact Info and Social Media */}
            <div className="px-6 py-8 border-t border-white/10 space-y-6">
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <IconWithCircle size="large">
                    <IoMailSharp className="text-white text-base" />
                  </IconWithCircle>
                  <Link
                    href="mailto:info@oakwoodlegal.com"
                    className="text-white hover:text-gray-300 transition-colors duration-200 text-base"
                  >
                    info@oakwoodlegal.com
                  </Link>
                </div>

                <div className="flex items-center gap-4">
                  <IconWithCircle size="large">
                    <FaPhone className="text-white text-base" />
                  </IconWithCircle>
                  <Link
                    href="tel:+18664056837"
                    className="text-white hover:text-gray-300 transition-colors duration-200 text-base"
                  >
                    (866) 405-6837
                  </Link>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-4 pt-4">
                <Link
                  href="https://www.facebook.com/oakwoodlegalgroup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity duration-200"
                >
                  <IconWithCircle size="large">
                    <FaFacebook className="text-white text-base" />
                  </IconWithCircle>
                </Link>

                <Link
                  href="https://www.linkedin.com/company/oakwood-legal-group/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity duration-200"
                >
                  <IconWithCircle size="large">
                    <FaLinkedin className="text-white text-base" />
                  </IconWithCircle>
                </Link>

                <Link
                  href="https://www.instagram.com/oakwoodlegalgroup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity duration-200"
                >
                  <IconWithCircle size="large">
                    <RiInstagramFill className="text-white text-base" />
                  </IconWithCircle>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
