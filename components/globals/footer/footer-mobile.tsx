"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import NewsletterForm from "./form/newsletter-form";
import DecorativeLine from "../decorative-line/decorative-line";
import VectorIcon from "../vector-icon/vector-icon";

const handleNavigation = (href: string, router: any) => {
  // Simple navigation without scroll behavior
  router.push(href);
};

export default function FooterMobile() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <footer className="w-full bg-[#140C0C] text-white max-[759px]:block min-[760px]:hidden" role="contentinfo">
      {/* Top Decorative Line - Full Width */}
      <div className="w-full flex justify-start pt-8 pb-2" role="separator" aria-hidden="true">
        <DecorativeLine
          mainLineWidth={166}
          isRotated={false}
          ariaLabel="Footer top decorative line"
        />
      </div>

      <div className="w-full px-4 pb-8">

        {/* Main Navigation and Legal Links */}
        <div className="grid grid-cols-2 gap-4 mb-8 px-6">
          {/* Left Column - Primary Navigation */}
          <section aria-labelledby="primary-nav-heading">
            <h2 id="primary-nav-heading" className="sr-only">Primary Site Navigation</h2>
            <nav aria-label="Main website navigation">
              <ul className="space-y-3 mb-6" role="list">
                <li>
                  <button
                    onClick={() => handleNavigation("/", router)}
                    className="text-white text-base font-normal hover:text-gray-300 transition-colors duration-200 text-left"
                    aria-current={pathname === "/" ? "page" : undefined}
                    type="button"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/about-us", router)}
                    className="text-white text-base font-normal hover:text-gray-300 transition-colors duration-200 text-left"
                    aria-current={pathname === "/about-us" ? "page" : undefined}
                    type="button"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/practice-areas", router)}
                    className="text-white text-base font-normal hover:text-gray-300 transition-colors duration-200 text-left"
                    aria-current={pathname === "/practice-areas" ? "page" : undefined}
                    type="button"
                  >
                    Practice Areas
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/case-results", router)}
                    className="text-white text-base font-normal hover:text-gray-300 transition-colors duration-200 text-left"
                    aria-current={pathname === "/case-results" ? "page" : undefined}
                    type="button"
                  >
                    Case Results
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/cases-in-the-news", router)}
                    className="text-white text-base font-normal hover:text-gray-300 transition-colors duration-200 text-left"
                    aria-current={pathname === "/cases-in-the-news" ? "page" : undefined}
                    type="button"
                  >
                    Cases In The News
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/awards-recognitions", router)}
                    className="text-white text-base font-normal hover:text-gray-300 transition-colors duration-200 text-left"
                    aria-current={pathname === "/awards-recognitions" ? "page" : undefined}
                    type="button"
                  >
                    Awards
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/articles", router)}
                    className="text-white text-base font-normal hover:text-gray-300 transition-colors duration-200 text-left"
                    aria-current={pathname.includes("/articles") ? "page" : undefined}
                    type="button"
                  >
                    Articles
                  </button>
                </li>
              </ul>
            </nav>
          </section>

          {/* Right Column - Legal Information */}
          <section className="justify-self-end" aria-labelledby="legal-links-heading">
            <h2 id="legal-links-heading" className="text-white text-base font-normal font-neue-montreal mb-4">Important Links</h2>
            <nav aria-label="Legal information and policies">
              <ul className="space-y-3" role="list">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-[#C7C7C7] text-base hover:text-white transition-colors duration-200"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/disclaimer"
                    className="text-[#C7C7C7] text-base hover:text-white transition-colors duration-200"
                  >
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </nav>
          </section>
        </div>

        {/* Office Location and Contact Information */}
        <section className="mb-12 px-6" aria-labelledby="office-info-heading">
          <h2 id="office-info-heading" className="text-white text-base font-normal font-neue-montreal mb-4">Our Office</h2>
          <address className="not-italic mb-4">
            <Link
              href="https://maps.google.com/?q=8124+W+3rd+St+2nd+Floor,+Los+Angeles+CA+90048,+United+States"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C7C7C7] text-base leading-relaxed block hover:text-white transition-colors duration-200"
              aria-label="View Oakwood Legal Group office at 8124 W 3rd St 2nd Floor, Los Angeles CA 90048 on Google Maps (opens in new tab)"
            >
              <span itemProp="streetAddress">8124 W 3rd St 2nd Floor</span>, <span itemProp="addressLocality">Los Angeles</span><br />
              <span itemProp="addressRegion">CA</span> <span itemProp="postalCode">90048</span>, <span itemProp="addressCountry">United States</span>
            </Link>
          </address>
          <div className="space-y-2">
            <Link
              href="https://maps.google.com/?q=8124+W+3rd+St+2nd+Floor,+Los+Angeles+CA+90048,+United+States"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
              aria-label="Get driving directions to Oakwood Legal Group office (opens in new tab)"
            >
              <span className="text-white text-base font-normal font-neue-montreal">Get Directions</span>
              <div className="ml-1" aria-hidden="true">
                <VectorIcon
                  width={11}
                  height={12}
                  fill="#FF6460"
                  stroke="none"
                />
              </div>
            </Link>
            <p className="text-[#C7C7C7] text-base" role="note">
              <span className="sr-only">Office hours: </span>Available 24/7
            </p>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <aside className="mb-2" aria-labelledby="newsletter-heading">
          <h2 id="newsletter-heading" className="sr-only">Newsletter Subscription</h2>
          <NewsletterForm />
        </aside>
      </div>

      {/* Bottom Decorative Line - Full Width */}
      <div className="w-full flex justify-end pb-3" role="separator" aria-hidden="true">
        <DecorativeLine
          mainLineWidth={166}
          isRotated={true}
          ariaLabel="Footer bottom decorative line"
        />
      </div>

      <div className="w-full px-8 pb-8">
        {/* Footer Bottom - Copyright and Credits */}
        <section className="text-center space-y-4" aria-labelledby="footer-info-heading">
          <h2 id="footer-info-heading" className="sr-only">Copyright and Website Information</h2>
          
          {/* Copyright Information */}
          <div className="text-[#8E8484] text-sm">
            <p>
              <span>Copyright </span>
              <time dateTime={new Date().getFullYear().toString()}>
                {new Date().getFullYear()}
              </time>
              <span> Oakwood Legal Group. <br /> All Rights Reserved.</span>
            </p>
          </div>

          {/* Website Credits */}
          <div className="text-sm">
            <span className="text-[#8E8484] font-neue-montreal">Powered by </span>
            <Link
              href="https://thecaselygroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="Visit The Casely Group website (opens in new tab)"
            >
              The Casely Group
            </Link>
          </div>
        </section>
      </div>
    </footer>
  );
}
