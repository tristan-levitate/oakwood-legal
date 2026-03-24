"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin, FaFacebook, FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import IconWithCircle from "../icon-with-circle/icon-with-circle";
import ContactFormMobile from "./form/contact-form-mobile";

export default function ContactUsMobile() {
  return (
    <section className="w-full max-w-full overflow-hidden px-4 sm:px-6 md:px-8" aria-labelledby="contact-section-title">
      {/* Section Header */}
      <header className="flex justify-start mb-8">
        <div className="flex justify-center items-center rounded-md px-[12px] py-[8px] bg-gradient-to-r from-[#C02B27] to-[#C02B27]" role="banner">
          <span className="uppercase text-[16px] font-normal leading-none text-brand-light-gray font-helvetica">
            Contact Us
          </span>
        </div>
      </header>

      {/* Main Heading */}
      <h1 id="contact-section-title" className="text-white w-full leading-none mb-8 text-[32px] sm:text-[28px] md:text-[32px] lg:text-[36px] text-left">
        YOUR CASE DESERVES THE BEST.
        <br />
        START TODAY.
      </h1>

      {/* Contact Form Section */}
      <section className="w-full mb-14" aria-labelledby="contact-form-heading">
        <h2 id="contact-form-heading" className="sr-only">Contact Form</h2>
        <ContactFormMobile />
      </section>

      {/* Decorative Image */}
      <figure className="flex justify-center mb-8">
        <Image
          src="/images/contact-us-mobile.png"
          alt="Professional legal consultation - Oakwood Legal Group team ready to help with your case"
          width={340}
          height={463}
          sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, 60vw"
          className="w-[280px] sm:w-[340px] md:w-[400px] lg:w-[460px] h-auto max-w-full"
          priority
        />
      </figure>

      {/* Contact Information Section */}
      <section className="text-center space-y-4 sm:space-y-5 md:space-y-6" aria-labelledby="contact-info-heading">
        <h2 id="contact-info-heading" className="sr-only">Contact Information</h2>
        {/* Contact Methods */}
        <address className="not-italic space-y-4 sm:space-y-5">
          {/* Email Contact */}
          <div className="flex items-center justify-center space-x-3 sm:space-x-4">
            <IconWithCircle size="extra-large" variant="red" aria-hidden="true">
              <IoMailSharp className="text-white text-[14px] sm:text-[16px]" />
            </IconWithCircle>
            <Link
              href="mailto:info@oakwoodlegal.com"
              className="text-white hover:text-gray-300 transition-colors duration-200 font-neue-montreal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]"
              aria-label="Send email to Oakwood Legal Group at info@oakwoodlegal.com"
            >
              info@oakwoodlegal.com
            </Link>
          </div>

          {/* Phone Contact */}
          <div className="flex items-center justify-center space-x-3 sm:space-x-4">
            <IconWithCircle size="extra-large" variant="red" aria-hidden="true">
              <FaPhone className="text-white text-[14px] sm:text-[16px]" />
            </IconWithCircle>
            <Link
              href="tel:+18664056837"
              className="text-white hover:text-gray-300 transition-colors duration-200 font-neue-montreal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]"
              aria-label="Call Oakwood Legal Group at (866) 405-6837"
            >
              (866) 405-6837
            </Link>
          </div>
        </address>

        {/* Social Media Links */}
        <nav className="flex items-center justify-center space-x-3 sm:space-x-4 md:space-x-5 pt-2" aria-label="Follow us on social media">
          <Link
            href="https://www.facebook.com/oakwoodlegalgroup/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-200"
            aria-label="Follow Oakwood Legal Group on Facebook (opens in new tab)"
          >
            <IconWithCircle size="extra-large" variant="dark-red" aria-hidden="true">
              <FaFacebook className="text-white text-[18px] sm:text-[20px]" />
            </IconWithCircle>
          </Link>

          <Link
            href="https://www.linkedin.com/company/oakwood-legal-group/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-200"
            aria-label="Follow Oakwood Legal Group on LinkedIn (opens in new tab)"
          >
            <IconWithCircle size="extra-large" variant="dark-red" aria-hidden="true">
              <FaLinkedin className="text-white text-[18px] sm:text-[20px]" />
            </IconWithCircle>
          </Link>

          <Link
            href="https://www.instagram.com/oakwoodlegalgroup/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-200"
            aria-label="Follow Oakwood Legal Group on Instagram (opens in new tab)"
          >
            <IconWithCircle size="extra-large" variant="dark-red" aria-hidden="true">
              <RiInstagramFill className="text-white text-[18px] sm:text-[20px]" />
            </IconWithCircle>
          </Link>
        </nav>
      </section>
    </section>
  );
}
