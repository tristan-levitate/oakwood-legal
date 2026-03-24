"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ActiveTabIndicator } from "../shared-components/shared-components";
import NewsletterForm from "./form/newsletter-form";
import DecorativeLine from "../decorative-line/decorative-line";
import VectorIcon from "../vector-icon/vector-icon";
import FooterMobile from "./footer-mobile";
import { OakwoodLogo } from "../logo/OakwoodLogo";

const handleNavigation = (href: string, router: any) => {
  // Simple navigation without scroll behavior
  router.push(href);
};

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const isStudioPage = pathname.includes("studio");

  if (isStudioPage) return null;

  return (
    <>
      {/* Mobile Footer */}
      <FooterMobile />

      {/* Tablet and Desktop Footer */}
      <footer className="hidden min-[760px]:block w-full bg-[#140C0C] text-white" role="contentinfo">
        <div className="w-full max-w-[1600px] mx-auto px-4 min-[760px]:px-6 min-[900px]:px-8 py-6 min-[900px]:py-8">
          {/* Header Section - Logo and Navigation */}
          <div className="flex flex-col items-start w-full mb-6 min-[900px]:mb-8">
            {/* Site Logo */}
            <div className="flex items-center mb-6">
              <Link href="/" className="flex items-center" aria-label="Oakwood Legal Group - Home">
                <OakwoodLogo
                  width={280}
                  height={84}
                  className="w-[280px] min-[900px]:w-[350px] h-auto"
                />
              </Link>
            </div>

            {/* Footer Navigation */}
            <div className="w-full">
              <nav className="flex flex-wrap items-center gap-3 min-[900px]:gap-[20px] mb-4" aria-label="Footer navigation">
                {/* Home */}
                <div className="relative">
                  {pathname === "/" && <ActiveTabIndicator />}
                  <button
                    onClick={() => handleNavigation("/", router)}
                    className={`relative z-10 transition-colors duration-200 font-normal text-sm min-[900px]:text-base capitalize flex items-center cursor-pointer ${pathname === "/"
                      ? "text-white px-2 min-[900px]:px-4 py-2 min-[900px]:pl-8 rounded-md gap-[5px]"
                      : "text-white hover:text-gray-300"
                      }`}
                    aria-current={pathname === "/" ? "page" : undefined}
                    type="button"
                  >
                    Home
                  </button>
                </div>

                {/* About Us */}
                <div className="relative">
                  {pathname === "/about-us" && <ActiveTabIndicator />}
                  <button
                    onClick={() => handleNavigation("/about-us", router)}
                    className={`relative z-10 transition-colors duration-200 font-normal text-sm min-[900px]:text-base capitalize flex items-center cursor-pointer ${pathname === "/about-us"
                      ? "text-white px-2 min-[900px]:px-4 py-2 min-[900px]:pl-8 rounded-md gap-[5px]"
                      : "text-white hover:text-gray-300"
                      }`}
                    aria-current={pathname === "/about-us" ? "page" : undefined}
                    type="button"
                  >
                    About Us
                  </button>
                </div>

                {/* Practice Areas */}
                <div className="relative">
                  {pathname === "/practice-areas" && <ActiveTabIndicator />}
                  <button
                    onClick={() => handleNavigation("/practice-areas", router)}
                    className={`relative z-10 transition-colors duration-200 font-normal text-sm min-[900px]:text-base capitalize flex items-center cursor-pointer ${pathname === "/practice-areas"
                      ? "text-white px-2 min-[900px]:px-4 py-2 min-[900px]:pl-8 rounded-md gap-[5px]"
                      : "text-white hover:text-gray-300"
                      }`}
                    aria-current={pathname === "/practice-areas" ? "page" : undefined}
                    type="button"
                  >
                    Practice Areas
                  </button>
                </div>

                {/* Case Results */}
                <div className="relative">
                  {pathname === "/case-results" && <ActiveTabIndicator />}
                  <button
                    onClick={() => handleNavigation("/case-results", router)}
                    className={`relative z-10 transition-colors duration-200 font-normal text-sm min-[900px]:text-base capitalize flex items-center cursor-pointer ${pathname === "/case-results"
                      ? "text-white px-2 min-[900px]:px-4 py-2 min-[900px]:pl-8 rounded-md gap-[5px]"
                      : "text-white hover:text-gray-300"
                      }`}
                    aria-current={pathname === "/case-results" ? "page" : undefined}
                    type="button"
                  >
                    Case Results
                  </button>
                </div>

                {/* Cases In The News */}
                <div className="relative">
                  {pathname === "/cases-in-the-news" && <ActiveTabIndicator />}
                  <button
                    onClick={() => handleNavigation("/cases-in-the-news", router)}
                    className={`relative z-10 transition-colors duration-200 font-normal text-sm min-[900px]:text-base capitalize flex items-center cursor-pointer ${pathname === "/cases-in-the-news"
                      ? "text-white px-2 min-[900px]:px-4 py-2 min-[900px]:pl-8 rounded-md gap-[5px]"
                      : "text-white hover:text-gray-300"
                      }`}
                    aria-current={pathname === "/cases-in-the-news" ? "page" : undefined}
                    type="button"
                  >
                    Cases In The News
                  </button>
                </div>

                {/* Awards */}
                <div className="relative">
                  {pathname === "/awards-recognitions" && <ActiveTabIndicator />}
                  <button
                    onClick={() => handleNavigation("/awards-recognitions", router)}
                    className={`relative z-10 transition-colors duration-200 font-normal text-sm min-[900px]:text-base capitalize flex items-center cursor-pointer ${pathname === "/awards-recognitions"
                      ? "text-white px-2 min-[900px]:px-4 py-2 min-[900px]:pl-8 rounded-md gap-[5px]"
                      : "text-white hover:text-gray-300"
                      }`}
                    aria-current={pathname === "/awards-recognitions" ? "page" : undefined}
                    type="button"
                  >
                    Awards
                  </button>
                </div>

                {/* Articles */}
                <div className="relative">
                  {pathname.includes("/articles") && <ActiveTabIndicator />}
                  <button
                    onClick={() => handleNavigation("/articles", router)}
                    className={`relative z-10 transition-colors duration-200 font-normal text-sm min-[900px]:text-base capitalize flex items-center cursor-pointer ${pathname.includes("/articles")
                      ? "text-white px-2 min-[900px]:px-4 py-2 min-[900px]:pl-8 rounded-md gap-[5px]"
                      : "text-white hover:text-gray-300"
                      }`}
                    aria-current={pathname.includes("/articles") ? "page" : undefined}
                    type="button"
                  >
                    Articles
                  </button>
                </div>
              </nav>
            </div>
          </div>

          {/* Decorative Line - Right */}
          <div className="flex justify-end mt-[-20px] min-[900px]:mt-[-40px]" role="separator" aria-hidden="true">
            <DecorativeLine
              mainLineWidth={400}
              isRotated={true}
              ariaLabel="Footer right decorative line"
              className="min-[900px]:w-[686px]"
            />
          </div>

          {/* Main Content Section - Office Info, Links, and Newsletter */}
          <div className="flex flex-col min-[760px]:flex-row items-start min-[760px]:justify-between w-full mt-6 min-[900px]:mt-8 mb-8 min-[900px]:mb-10 gap-6 min-[760px]:gap-8">
            {/* Contact and Legal Information */}
            <div className="flex flex-col min-[760px]:flex-row gap-6 min-[760px]:gap-8 min-[900px]:gap-25 w-full min-[760px]:w-auto">
              {/* Office Information */}
              <section className="flex-shrink-0">
                <h2 className="text-white text-base font-normal font-neue-montreal mb-4 min-[900px]:mb-6">Our Office</h2>
                <address className="not-italic">
                  <Link
                    href="https://maps.google.com/?q=8124+W+3rd+St+2nd+Floor,+Los+Angeles+CA+90048,+United+States"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C7C7C7] text-base min-[900px]:text-lg leading-relaxed mb-4 min-[900px]:mb-6 block hover:text-white transition-colors duration-200"
                  >
                    8124 W 3rd St 2nd Floor, Los Angeles<br />
                    CA 90048, United States
                  </Link>
                </address>
                <div>
                  <Link
                    href="https://maps.google.com/?q=8124+W+3rd+St+2nd+Floor,+Los+Angeles+CA+90048,+United+States"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 mb-2 hover:opacity-80 transition-opacity duration-200"
                    aria-label="Get directions to Oakwood Legal Group office"
                  >
                    <span className="text-white text-base min-[900px]:text-lg font-normal font-neue-montreal">Get Directions</span>
                    <div className="ml-1" aria-hidden="true">
                      <VectorIcon
                        width={11}
                        height={12}
                        fill="#FF6460"
                        stroke="none"
                      />
                    </div>
                  </Link>
                  <p className="text-[#C7C7C7] text-base min-[900px]:text-lg font-neue-montreal">Available 24/7</p>
                </div>
              </section>

              {/* Legal Links */}
              <section className="flex-shrink-0">
                <h2 className="text-white text-base font-normal font-neue-montreal mb-4 min-[900px]:mb-6">Important Links</h2>
                <nav aria-label="Legal information links">
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/privacy-policy"
                        className="text-[#C7C7C7] text-base min-[900px]:text-lg hover:text-white transition-colors duration-200"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/disclaimer"
                        className="text-[#C7C7C7] text-base min-[900px]:text-lg hover:text-white transition-colors duration-200"
                      >
                        Disclaimer
                      </Link>
                    </li>
                  </ul>
                </nav>
              </section>
            </div>

            {/* Newsletter Subscription */}
            <aside className="w-full min-[760px]:w-auto min-[760px]:flex-shrink-0">
              <NewsletterForm />
            </aside>
          </div>

          {/* Decorative Line - Left */}
          <div className="w-full mt-6 min-[900px]:mt-8 flex justify-start" role="separator" aria-hidden="true">
            <DecorativeLine
              mainLineWidth={800}
              isRotated={false}
              ariaLabel="Footer left decorative line"
              className="min-[900px]:w-[1210px]"
            />
          </div>

          {/* Footer Bottom - Copyright and Credits */}
          <div className="mt-2 flex flex-col min-[760px]:flex-row items-start min-[760px]:items-center min-[760px]:justify-between w-full gap-3 min-[760px]:gap-0">
            {/* Copyright Information */}
            <div className="text-[#8E8484] text-sm">
              <p>
                <span className="font-neue-montreal">Copyright </span>
                <time dateTime={new Date().getFullYear().toString()}>
                  {new Date().getFullYear()}
                </time>
                <span className="font-neue-montreal"> Oakwood Legal Group | All Rights Reserved</span>
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
                aria-label="Visit The Casely Group website"
              >
                The Casely Group
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
