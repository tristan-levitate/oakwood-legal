"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin, FaFacebook, FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import IconWithCircle from "../icon-with-circle/icon-with-circle";
import ContactForm from "./form/contact-form";
import ContactBlurBackground from "./contact-blur-background/contact-blur-background";
import ContactUsMobile from "./contact-us-mobile";
import DecorativeLine from "../decorative-line/decorative-line";

export default function ContactUsSection() {
  const pathname = usePathname();
  const isStudioPage = pathname.includes("studio");

  if (isStudioPage) return null;

  return (
    <section id="contact-us" className="w-full text-white relative mt-[80px]">
      {/* Background Blur - Behind everything */}
      <div className="absolute z-0 pointer-events-none left-2/9 top-0 transform -translate-x-1/2">
        <div className="relative w-full max-w-[1600px]">
          <div className="absolute left-1/7 top-[-100px]">
            <ContactBlurBackground className="opacity-60 transform -translate-x-1/2" />
          </div>
        </div>
      </div>

      <div className="w-full mx-auto px-4 sm:px-8 py-8 relative z-10">
        {/* Mobile Layout (below 560px) */}
        <div className="block min-[560px]:hidden max-w-full overflow-hidden">
          <ContactUsMobile />
        </div>

        {/* Tablet and Desktop Layout (560px and above) */}
        <div className="hidden min-[560px]:block">
          {/* Main Content Layout */}
          <main className="flex flex-col min-[560px]:flex-col min-[768px]:flex-col min-[1024px]:flex-col min-[1450px]:flex-row items-center gap-4 min-[768px]:gap-6 min-[1024px]:gap-8 min-[1450px]:gap-8 min-[1560px]:gap-12 mb-[60px] min-[768px]:mb-[80px] min-[1450px]:mb-[100px]">

            {/* Left Column - Contact Information */}
            <section className="w-full min-[750px]:w-full min-[768px]:w-full min-[1024px]:w-full min-[1450px]:w-[560px] flex-shrink-0 min-[750px]:text-left min-[768px]:text-left min-[1024px]:text-left min-[1450px]:text-left hidden min-[1450px]:block">
              {/* Section Header */}
              <header className="flex min-[560px]:justify-start min-[768px]:justify-start min-[1024px]:justify-start min-[1450px]:justify-start mb-6 min-[768px]:mb-8">
                <div className="flex justify-center items-center rounded-md px-[12px] py-[8px] bg-gradient-to-r from-[#C02B27] to-[#C02B27]">
                  <span className="uppercase text-[14px] min-[768px]:text-[16px] font-normal leading-none text-brand-light-gray font-helvetica">
                    Contact Us
                  </span>
                </div>
              </header>

              {/* Contact Content */}
              <div className="">
                {/* Main Call-to-Action Heading */}
                <hgroup className="mb-6 min-[768px]:mb-8 min-[1024px]:mb-10">
                  <h2 className="text-white leading-none mb-2 font-helvetica text-[28px] min-[600px]:text-[32px] min-[768px]:text-[36px] min-[1024px]:text-[42px] min-[1200px]:text-[52px]">
                    YOUR CASE DESERVES THE BEST.
                    <span className="flex min-[560px]:justify-start min-[768px]:justify-start min-[1024px]:justify-start min-[1200px]:justify-end">
                      <span className="inline-block leading-none bg-gradient-to-l from-[#C02B27] to-[#ca403b] bg-clip-text text-transparent">
                        START TODAY.
                      </span>
                    </span>
                  </h2>
                </hgroup>

                {/* Description */}
                <p className="font-neue-montreal text-[16px] min-[768px]:text-[17px] min-[1024px]:text-[18px] leading-[1.7] text-[#C7C7C7] max-w-[500px] min-[560px]:mx-0 min-[768px]:mx-0 min-[1024px]:mx-0 min-[1200px]:mx-0">
                  Don't wait. Every day matters after an injury. Let our Harvard-trained attorneys and record-breaking litigators fight for you.
                </p>

                {/* Decorative Line */}
                <div className="mt-[40px] min-[768px]:mt-[60px] min-[1024px]:mt-[80px] min-[1200px]:mt-[100px] flex min-[560px]:justify-start min-[768px]:justify-start min-[1024px]:justify-start min-[1200px]:justify-start min-[1200px]:ml-[-15px]">
                  <DecorativeLine
                    mainLineWidth={353}
                    isRotated={false}
                    ariaLabel="Contact us decorative line"
                  />
                </div>

                {/* Contact Information - Hidden for 750px-1449px, shown only for 1450px+ */}
                <div className="hidden min-[1450px]:block">
                  <address className="mt-4 min-[768px]:mt-6 not-italic">
                    <h3 className="sr-only">Contact Information</h3>
                    <ul className="space-y-3 min-[768px]:space-y-4 min-[1450px]:block min-[1450px]:space-y-4">
                      {/* Email */}
                      <li className="flex items-center space-x-4">
                        <IconWithCircle>
                          <IoMailSharp className="text-white text-[14px]" />
                        </IconWithCircle>
                        <Link
                          href="mailto:info@oakwoodlegal.com"
                          className="text-white hover:text-gray-300 transition-colors duration-200 font-neue-montreal text-[16px] min-[768px]:text-[17px] min-[1024px]:text-lg"
                        >
                          info@oakwoodlegal.com
                        </Link>
                      </li>

                      {/* Phone */}
                      <li className="flex items-center space-x-4">
                        <IconWithCircle>
                          <FaPhone className="text-white text-[14px]" />
                        </IconWithCircle>
                        <Link
                          href="tel:+18888047858"
                          className="text-white hover:text-gray-300 transition-colors duration-200 font-neue-montreal text-[16px] min-[768px]:text-[17px] min-[1024px]:text-lg"
                        >
                          888-804-7858
                        </Link>
                      </li>
                    </ul>
                  </address>

                  {/* Social Media Links */}
                      <nav className="mt-4 min-[768px]:mt-6 min-[1450px]:block" aria-label="Social media links">
                        <h3 className="sr-only">Follow Us</h3>
                        <ul className="flex items-center space-x-4 min-[768px]:space-x-6 min-[1450px]:justify-start">
                      {/* Facebook */}
                      <li>
                        <Link
                          href="https://www.facebook.com/oakwoodlegalgroup/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-80 transition-opacity duration-200"
                          aria-label="Follow us on Facebook"
                        >
                          <IconWithCircle size="large" variant="dark-red">
                            <FaFacebook className="text-white text-[16px] min-[768px]:text-[18px]" />
                          </IconWithCircle>
                        </Link>
                      </li>

                      {/* LinkedIn */}
                      <li>
                        <Link
                          href="https://www.linkedin.com/company/oakwood-legal-group/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-80 transition-opacity duration-200"
                          aria-label="Follow us on LinkedIn"
                        >
                          <IconWithCircle size="large" variant="dark-red">
                            <FaLinkedin className="text-white text-[16px] min-[768px]:text-[18px]" />
                          </IconWithCircle>
                        </Link>
                      </li>

                      {/* Instagram */}
                      <li>
                        <Link
                          href="https://www.instagram.com/oakwoodlegalgroup/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-80 transition-opacity duration-200"
                          aria-label="Follow us on Instagram"
                        >
                          <IconWithCircle size="large" variant="dark-red">
                            <RiInstagramFill className="text-white text-[16px] min-[768px]:text-[18px]" />
                          </IconWithCircle>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </section>

            {/* Custom Layout for 560px-749px */}
            <div className="min-[560px]:block min-[750px]:hidden w-full min-[560px]:order-2 mt-6">
              {/* Title Section */}
              <div className="mb-6">
                <header className="flex justify-start mb-6">
                  <div className="flex justify-center items-center rounded-md px-[12px] py-[8px] bg-gradient-to-r from-[#C02B27] to-[#C02B27]">
                    <span className="uppercase text-[14px] font-normal leading-none text-brand-light-gray font-helvetica">
                      Contact Us
                    </span>
                  </div>
                </header>

                <hgroup className="mb-6">
                  <h2 className="text-white leading-none mb-2 font-helvetica text-[28px] min-[600px]:text-[32px]">
                    YOUR CASE DESERVES THE BEST.
                    <span className="flex justify-start">
                      <span className="inline-block leading-none bg-gradient-to-l from-[#C02B27] to-[#ca403b] bg-clip-text text-transparent">
                        START TODAY.
                      </span>
                    </span>
                  </h2>
                </hgroup>

                {/* Description */}
                <p className="font-neue-montreal text-[16px] leading-[1.7] text-[#C7C7C7] max-w-[500px] mb-6">
                  Don't wait. Every day matters after an injury. Let our Harvard-trained attorneys and record-breaking litigators fight for you.
                </p>

                {/* Decorative Line */}
                <div className="flex justify-start mb-8">
                  <DecorativeLine
                    mainLineWidth={353}
                    isRotated={false}
                    ariaLabel="Contact us decorative line"
                  />
                </div>
              </div>

              {/* Form Section */}
              <div className="mb-8">
                <div className="flex justify-start w-full">
                  <div className="w-full">
                    <ContactForm />
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="flex justify-center mb-8">
                <figure>
                  <Image
                    src="/images/contact-us-mobile.png"
                    alt="Oakwood Legal Group Contact"
                    width={340}
                    height={463}
                    sizes="(max-width: 640px) 280px, 320px"
                    className="w-[280px] min-[600px]:w-[320px] h-auto"
                    priority
                  />
                </figure>
              </div>

              {/* Contact Information */}
              <div>
                <address className="not-italic">
                  <h3 className="sr-only">Contact Information</h3>
                  <ul className="space-y-3 flex flex-col items-center">
                    {/* Email */}
                    <li className="flex items-center space-x-4">
                      <IconWithCircle>
                        <IoMailSharp className="text-white text-[14px]" />
                      </IconWithCircle>
                      <Link
                        href="mailto:info@oakwoodlegal.com"
                        className="text-white hover:text-gray-300 transition-colors duration-200 font-neue-montreal text-[16px]"
                      >
                        info@oakwoodlegal.com
                      </Link>
                    </li>

                    {/* Phone */}
                    <li className="flex items-center space-x-4">
                      <IconWithCircle>
                        <FaPhone className="text-white text-[14px]" />
                      </IconWithCircle>
                      <Link
                        href="tel:+18888047858"
                        className="text-white hover:text-gray-300 transition-colors duration-200 font-neue-montreal text-[16px]"
                      >
                        888-804-7858
                      </Link>
                    </li>
                  </ul>
                </address>

                {/* Social Media Links */}
                <nav className="mt-4 flex justify-center" aria-label="Social media links">
                  <h3 className="sr-only">Follow Us</h3>
                  <ul className="flex items-center space-x-4 justify-start">
                    {/* Facebook */}
                    <li>
                      <Link
                        href="https://www.facebook.com/oakwoodlegalgroup/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity duration-200"
                        aria-label="Follow us on Facebook"
                      >
                        <IconWithCircle size="large" variant="dark-red">
                          <FaFacebook className="text-white text-[16px]" />
                        </IconWithCircle>
                      </Link>
                    </li>

                    {/* LinkedIn */}
                    <li>
                      <Link
                        href="https://www.linkedin.com/company/oakwood-legal-group/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity duration-200"
                        aria-label="Follow us on LinkedIn"
                      >
                        <IconWithCircle size="large" variant="dark-red">
                          <FaLinkedin className="text-white text-[16px]" />
                        </IconWithCircle>
                      </Link>
                    </li>

                    {/* Instagram */}
                    <li>
                      <Link
                        href="https://www.instagram.com/oakwoodlegalgroup/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity duration-200"
                        aria-label="Follow us on Instagram"
                      >
                        <IconWithCircle size="large" variant="dark-red">
                          <RiInstagramFill className="text-white text-[16px]" />
                        </IconWithCircle>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Form Section for other breakpoints */}
            <div className="w-full min-[750px]:order-2 min-[1024px]:order-2 min-[1450px]:order-3 mt-6 min-[768px]:mt-8 min-[1450px]:mt-0">
                {/* Title Section for 750px-1449px */}
                <div className="hidden min-[750px]:block min-[1450px]:hidden mb-8">
                  <header className="flex justify-start mb-6">
                    <div className="flex justify-center items-center rounded-md px-[12px] py-[8px] bg-gradient-to-r from-[#C02B27] to-[#C02B27]">
                      <span className="uppercase text-[14px] min-[768px]:text-[16px] font-normal leading-none text-brand-light-gray font-helvetica">
                        Contact Us
                      </span>
                    </div>
                  </header>

                  <hgroup className="mb-6 min-[768px]:mb-8">
                    <h2 className="text-white leading-none mb-2 font-helvetica text-[28px] min-[600px]:text-[32px] min-[768px]:text-[36px] min-[1024px]:text-[42px]">
                      YOUR CASE DESERVES THE BEST.
                      <span className="flex justify-start">
                        <span className="inline-block leading-none bg-gradient-to-l from-[#C02B27] to-[#ca403b] bg-clip-text text-transparent">
                          START TODAY.
                        </span>
                      </span>
                    </h2>
                  </hgroup>

                  {/* Description */}
                  <p className="font-neue-montreal text-[16px] min-[768px]:text-[17px] min-[1024px]:text-[18px] leading-[1.7] text-[#C7C7C7] max-w-[500px] mb-6 min-[768px]:mb-8">
                    Don't wait. Every day matters after an injury. Let our Harvard-trained attorneys and record-breaking litigators fight for you.
                  </p>

                  {/* Decorative Line */}
                  <div className="flex justify-start mb-8">
                    <DecorativeLine
                      mainLineWidth={353}
                      isRotated={false}
                      ariaLabel="Contact us decorative line"
                    />
                  </div>
                </div>

                {/* Image + Contact Info + Form layout (750px - 1449px) */}
                <div className="hidden min-[750px]:flex min-[1450px]:hidden items-start gap-6 min-[1024px]:gap-8">
                  {/* Left side - Image + Contact Info */}
                  <div className="flex-shrink-0 min-[1110px]:w-[500px] min-[1250px]:w-[600px] min-[1360px]:w-[650px] min-[1110px]:flex min-[1110px]:flex-col min-[1110px]:items-center">
                    {/* Image */}
                    <figure className="mb-6">
                      <Image
                        src="/images/contact-us-mobile.png"
                        alt="Oakwood Legal Group Contact"
                        width={340}
                        height={463}
                        sizes="(max-width: 1024px) 280px, 320px"
                        className="w-[280px] min-[1024px]:w-[320px] h-auto"
                        priority
                      />
                    </figure>

                    {/* Contact Information below image */}
                    <div className="min-[1110px]:flex min-[1110px]:flex-col min-[1110px]:items-center">
                      <address className="not-italic">
                        <h3 className="sr-only">Contact Information</h3>
                        <ul className="space-y-3 flex flex-col items-start min-[1110px]:items-center">
                          {/* Email */}
                          <li className="flex items-center space-x-4">
                            <IconWithCircle>
                              <IoMailSharp className="text-white text-[14px]" />
                            </IconWithCircle>
                            <Link
                              href="mailto:info@oakwoodlegal.com"
                              className="text-white hover:text-gray-300 transition-colors duration-200 font-neue-montreal text-[16px] min-[768px]:text-[17px] min-[1024px]:text-lg"
                            >
                              info@oakwoodlegal.com
                            </Link>
                          </li>

                          {/* Phone */}
                          <li className="flex items-center space-x-4">
                            <IconWithCircle>
                              <FaPhone className="text-white text-[14px]" />
                            </IconWithCircle>
                            <Link
                              href="tel:+18888047858"
                              className="text-white hover:text-gray-300 transition-colors duration-200 font-neue-montreal text-[16px] min-[768px]:text-[17px] min-[1024px]:text-lg"
                            >
                              888-804-7858
                            </Link>
                          </li>
                        </ul>
                      </address>

                      {/* Social Media Links */}
                      <nav className="mt-4 flex justify-start min-[1110px]:justify-center" aria-label="Social media links">
                        <h3 className="sr-only">Follow Us</h3>
                        <ul className="flex items-center space-x-4 min-[768px]:space-x-6 justify-start min-[1110px]:justify-center">
                          {/* Facebook */}
                          <li>
                            <Link
                              href="https://www.facebook.com/oakwoodlegalgroup/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:opacity-80 transition-opacity duration-200"
                              aria-label="Follow us on Facebook"
                            >
                              <IconWithCircle size="large" variant="dark-red">
                                <FaFacebook className="text-white text-[16px] min-[768px]:text-[18px]" />
                              </IconWithCircle>
                            </Link>
                          </li>

                          {/* LinkedIn */}
                          <li>
                            <Link
                              href="https://www.linkedin.com/company/oakwood-legal-group/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:opacity-80 transition-opacity duration-200"
                              aria-label="Follow us on LinkedIn"
                            >
                              <IconWithCircle size="large" variant="dark-red">
                                <FaLinkedin className="text-white text-[16px] min-[768px]:text-[18px]" />
                              </IconWithCircle>
                            </Link>
                          </li>

                          {/* Instagram */}
                          <li>
                            <Link
                              href="https://www.instagram.com/oakwoodlegalgroup/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:opacity-80 transition-opacity duration-200"
                              aria-label="Follow us on Instagram"
                            >
                              <IconWithCircle size="large" variant="dark-red">
                                <RiInstagramFill className="text-white text-[16px] min-[768px]:text-[18px]" />
                              </IconWithCircle>
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  
                  {/* Form on right */}
                  <div className="flex-1 flex justify-start">
                    <div className="w-full">
                      <ContactForm />
                    </div>
                  </div>
                </div>

              {/* Desktop layout (1450px+) - Hidden here, handled by original structure */}
              <div className="hidden min-[1450px]:flex justify-start">
                <div className="w-[505px] max-[1490px]:w-[450px] flex-shrink-0 min-[1560px]:max-[1600px]:ml-[-0em]">
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* Center Column - Hero Image (Desktop only 1450px+) */}
            <figure className="hidden min-[1450px]:flex justify-center items-center min-[1450px]:order-2 min-[1450px]:ml-[-10px] min-[1450px]:mt-[90px] flex-shrink-0 min-[1450px]:w-[320px] min-[1560px]:w-[400px] min-[1560px]:max-[1600px]:ml-[-6em]">
              {/* Image for screens 1450px-1559px */}
              <Image
                src="/images/contact-us-mobile.png"
                alt="Oakwood Legal Group Contact"
                width={340}
                height={463}
                sizes="(max-width: 1559px) 320px, 400px"
                className="w-[320px] h-auto min-[1560px]:hidden"
                priority
              />
              {/* Image for screens 1560px+ */}
              <Image
                src="/images/olg-contact-us.png"
                alt="Oakwood Legal Group Contact"
                width={423}
                height={480}
                sizes="400px"
                className="w-[400px] h-auto hidden min-[1560px]:block"
                priority
              />
            </figure>

          </main>
        </div>
      </div>
    </section>
  );
}
