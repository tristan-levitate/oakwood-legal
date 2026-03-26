import React from 'react';
import Image from 'next/image';

export default function PrivacyPolicyHero() {
    return (
        <section className="w-full max-w-[1600px] mx-auto px-8 mt-14">
            {/* Section Badge */}
            <div className="flex justify-start mb-6">
                <div className="flex justify-center items-center rounded-md px-[12px] py-[5px] bg-gradient-to-r from-[#C02B27] to-[#C02B27]">
                    <h3 className="uppercase text-[16px] font-normal leading-none text-white font-helvetica">
                        Legal Information
                    </h3>
                </div>
            </div>

            <div className="flex items-start justify-between max-[1100px]:flex-col max-[1100px]:gap-6">
                {/* Main Title Section */}
                <header className="flex flex-col">
                    <hgroup>
                        {/* Combined Title */}
                        <h1 className="text-white leading-none font-helvetica text-[52px] max-[480px]:text-[42px] text-left mb-4">
                            Privacy
                            <span className="grid grid-cols-[max-content_1fr] items-start gap-0">
                                {/* Invisible spacer that matches white title width */}
                                <span className="invisible font-helvetica text-[52px] max-[480px]:text-[42px] leading-none">
                                    Privacy
                                </span>
                                {/* Red Title - Starts a bit before where white title ends */}
                                <span className="leading-none font-helvetica text-[52px] max-[480px]:text-[42px] bg-gradient-to-l from-[#C02B27] to-[#ca403b] bg-clip-text text-transparent ml-[-1em]">
                                    Policy
                                </span>
                            </span>
                        </h1>
                    </hgroup>
                </header>

                {/* Description Section */}
                <aside className="flex flex-col items-end max-[1100px]:items-start max-w-[500px]">
                    <p className="text-[#C7C7C7] text-[18px] leading-relaxed text-right max-[1100px]:text-left">
                        Your privacy is important to us. This policy explains how we collect, use, and protect your personal information when you visit our website.
                    </p>
                </aside>
            </div>
        </section>
    );
}
