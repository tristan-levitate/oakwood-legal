import React from 'react';

interface OurTeamHeroProps {
  titleWhite: string;
  titleRed: string;
}

export default function OurTeamHero({ titleWhite, titleRed }: OurTeamHeroProps) {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-8 mt-14">
      {/* Section Badge */}
      <div className="flex justify-end max-[480px]:justify-start mb-6">
        <div className="flex justify-center items-center rounded-md px-[12px] py-[5px] bg-gradient-to-r from-[#C02B27] to-[#C02B27]">
          <h3 className="uppercase text-[16px] max-[480px]:text-[14px] font-normal leading-none text-white font-helvetica">
            GET TO KNOW US
          </h3>
        </div>
      </div>

      <div className="flex items-start justify-between max-[1100px]:flex-col max-[1100px]:gap-6">
        {/* Main Title Section */}
        <header className="flex flex-col">
          <hgroup>
            {/* Combined Title */}
            <h2 className="text-white leading-none font-helvetica text-[52px] max-[480px]:text-[42px] text-left mb-4">
              {titleWhite}
              <span className="grid grid-cols-[max-content_1fr] items-start gap-0">
                {/* Invisible spacer that matches white title width */}
                <span className="invisible font-helvetica text-[52px] max-[480px]:text-[42px] leading-none">
                  {titleWhite}
                </span>
                {/* Red Title - Starts a bit before where white title ends */}
                <span className="leading-none font-helvetica text-[52px] max-[480px]:text-[42px] bg-gradient-to-l from-[#C02B27] to-[#ca403b] bg-clip-text text-transparent ml-[-1em]">
                  {titleRed}
                </span>
              </span>
            </h2>
          </hgroup>
        </header>

        {/* Team Introduction Section */}
        <aside className="flex flex-col items-end max-[1100px]:items-start">

          {/* Team Description */}
          <div className="max-w-[620px] max-[1100px]:max-w-[650px]">
            <p className="text-[#C7C7C7] text-[18px] max-[480px]:text-[16px] text-right max-[1100px]:text-left font-neue-montreal" style={{ lineHeight: '160%' }}>
              Our strength comes from the depth of our team. Led by experienced trial attorneys and supported by a dedicated network of counsel, Oakwood Legal Group brings unmatched knowledge, passion, and tenacity to every case.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
