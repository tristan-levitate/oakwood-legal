"use client";

/*
pnpm i embla-carousel-auto-scroll
pnpm i embla-carousel-react */

import { useMemo, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image, { type StaticImageData } from "next/image";

import news1 from "@/public/images/carousel/news/news-1.svg";
import news2 from "@/public/images/carousel/news/news-2.svg";
import news3 from "@/public/images/carousel/news/news-3.svg";
import news4 from "@/public/images/carousel/news/news-4.svg";
import news5 from "@/public/images/carousel/news/news-5.svg";
import news6 from "@/public/images/carousel/news/news-6.svg";
import news7 from "@/public/images/carousel/news/news-7.svg";
import news8 from "@/public/images/carousel/news/news-8.svg";
import news9 from "@/public/images/carousel/news/news-9.svg";
import news10 from "@/public/images/carousel/news/news-10.svg";
import news11 from "@/public/images/carousel/news/news-11.svg";
import news12 from "@/public/images/carousel/news/news-12.svg";
import news13 from "@/public/images/carousel/news/news-13.svg";
import news14 from "@/public/images/carousel/news/news-14.svg";

import award1 from "@/public/images/carousel/awards/logo-awards-1.svg";
import award2 from "@/public/images/carousel/awards/logo-awards-2.svg";
import award3 from "@/public/images/carousel/awards/logo-awards-3.svg";
import award4 from "@/public/images/carousel/awards/logo-awards-4.svg";
import award5 from "@/public/images/carousel/awards/logo-awards-5.svg";
import award6 from "@/public/images/carousel/awards/logo-awards-6.svg";
import award7 from "@/public/images/carousel/awards/logo-awards-7.svg";
import award8 from "@/public/images/carousel/awards/logo-awards-8.svg";
import award9 from "@/public/images/carousel/awards/logo-awards-9.svg";
import award10 from "@/public/images/carousel/awards/logo-awards-10.svg";
import award11 from "@/public/images/carousel/awards/logo-awards-11.svg";
import award12 from "@/public/images/carousel/awards/logo-awards-12.svg";

type CarouselItem =
  | { type: "badge"; src: StaticImageData; alt: string }
  | { type: "text"; title: string; content: string }
  | { type: "image"; src: StaticImageData; alt: string };

interface LogosCarouselProps {
  variant: "awards" | "text" | "news" | "cases";
  direction?: "forward" | "backward";
}

// Function to get custom image sizes for specific logos
const getImageSize = (alt: string) => {
  // Logos that need to be larger: news-2, news-6, news-9, news-12, news-13
  const largeLogos = [
    "news logo 2",
    "news logo 6", 
    "news logo 9",
    "news logo 12",
    "news logo 13"
  ];
  
  if (largeLogos.includes(alt)) {
    return { 
      width: 180, 
      height: 150, 
      containerWidth: 180 // Container width to match image width
    };
  }
  
  return { 
    width: 84, 
    height: 88, 
    containerWidth: 100 // Default container width
  };
};

export default function LogosCarousel({ variant, direction = "backward" }: LogosCarouselProps) {
  // Create AutoScroll plugin with direction using useMemo to recreate when direction changes
  const autoScrollPlugin = useMemo(() => {
    return AutoScroll({
      speed: variant === "cases" ? 1.0 : 0.6,
      direction: direction === "forward" ? "forward" : "backward",
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      playOnInit: true,
    });
  }, [variant, direction]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: false,
      dragFree: true,
    },
    [autoScrollPlugin]
  );

  // Force reinitialize when direction changes
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi, direction]);

  /*common news logos for the slider */
  const carouselNewsImages: CarouselItem[] = [
    { type: "image", src: news1, alt: "news logo 1" },
    { type: "image", src: news2, alt: "news logo 2" },
    { type: "image", src: news3, alt: "news logo 3" },
    { type: "image", src: news4, alt: "news logo 4" },
    { type: "image", src: news5, alt: "news logo 5" },
    { type: "image", src: news6, alt: "news logo 6" },
    { type: "image", src: news7, alt: "news logo 7" },
    { type: "image", src: news8, alt: "news logo 8" },
    { type: "image", src: news9, alt: "news logo 9" },
    { type: "image", src: news10, alt: "news logo 10" },
    { type: "image", src: news11, alt: "news logo 11" },
    { type: "image", src: news12, alt: "news logo 12" },
    { type: "image", src: news13, alt: "news logo 13" },
    { type: "image", src: news14, alt: "news logo 14" },
    { type: "image", src: news1, alt: "news logo 1" },
    { type: "image", src: news2, alt: "news logo 2" },
    { type: "image", src: news3, alt: "news logo 3" },
    { type: "image", src: news4, alt: "news logo 4" },
    { type: "image", src: news5, alt: "news logo 5" },
    { type: "image", src: news6, alt: "news logo 6" },
    { type: "image", src: news7, alt: "news logo 7" },
    { type: "image", src: news8, alt: "news logo 8" },
    { type: "image", src: news9, alt: "news logo 9" },
    { type: "image", src: news10, alt: "news logo 10" },
    { type: "image", src: news11, alt: "news logo 11" },
    { type: "image", src: news12, alt: "news logo 12" },
    { type: "image", src: news13, alt: "news logo 13" },
    { type: "image", src: news14, alt: "news logo 14" },
  ];

  /*awards logos for the slider */
  const carouselAwardsImages: CarouselItem[] = [
    { type: "image", src: award1, alt: "award 1" },
    { type: "image", src: award2, alt: "award 2" },
    { type: "image", src: award3, alt: "award 3" },
    { type: "image", src: award4, alt: "award 4" },
    { type: "image", src: award5, alt: "award 5" },
    { type: "image", src: award6, alt: "award 6" },
    { type: "image", src: award7, alt: "award 7" },
    { type: "image", src: award8, alt: "award 8" },
    { type: "image", src: award9, alt: "award 9" },
    { type: "image", src: award10, alt: "award 10" },
    { type: "image", src: award11, alt: "award 11" },
    { type: "image", src: award12, alt: "award 12" },
    { type: "image", src: award1, alt: "award 1" },
    { type: "image", src: award2, alt: "award 2" },
    { type: "image", src: award3, alt: "award 3" },
    { type: "image", src: award4, alt: "award 4" },
    { type: "image", src: award5, alt: "award 5" },
    { type: "image", src: award6, alt: "award 6" },
    { type: "image", src: award7, alt: "award 7" },
    { type: "image", src: award8, alt: "award 8" },
    { type: "image", src: award9, alt: "award 9" },
    { type: "image", src: award10, alt: "award 10" },
    { type: "image", src: award11, alt: "award 11" },
    { type: "image", src: award12, alt: "award 12" },
  ];

  const carouselItemsText: CarouselItem[] = [
    {
      type: "text",
      title: "this is the title",
      content: "this is the content",
    },
    {
      type: "text",
      title: "this is the title",
      content: "this is the content",
    },
  ];

  const carouselCasesItems: CarouselItem[] = [
    {
      type: "text",
      title: "",
      content: "Car, truck, and \nmotorcycle accidents",
    },
    {
      type: "text",
      title: "",
      content: "Slip, trip, and \nfall injuries",
    },
    {
      type: "text",
      title: "",
      content: "Wrongful \ndeath claims",
    },
    {
      type: "text",
      title: "",
      content: "Sexual abuse \nand assault",
    },
    {
      type: "text",
      title: "",
      content: "Complex personal \ninjury litigation",
    },
    // Duplicate for continuous scroll - same as awards/news
    {
      type: "text",
      title: "",
      content: "Car, truck, and \nmotorcycle accidents",
    },
    {
      type: "text",
      title: "",
      content: "Slip, trip, and \nfall injuries",
    },
    {
      type: "text",
      title: "",
      content: "Wrongful \ndeath claims",
    },
    {
      type: "text",
      title: "",
      content: "Sexual abuse \nand assault",
    },
    {
      type: "text",
      title: "",
      content: "Complex personal \ninjury litigation",
    },
  ];

  const carouselItems =
    variant === "awards"
      ? carouselAwardsImages
      : variant === "news"
      ? carouselNewsImages
      : variant === "cases"
      ? carouselCasesItems
      : carouselItemsText;

  return (
    <div 
      data-carousel="true" 
      className="w-full overflow-hidden relative max-[560px]:w-full max-[560px]:ml-0 h-[120px] flex items-center"
    >
      {/* Left fade effect */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-[110px] lg:w-[200px] z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, var(--background), rgba(20, 12, 12, 0.8), transparent)'
        }}
      />
      
      {/* Right fade effect */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-[110px] lg:w-[200px] z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to left, var(--background), rgba(20, 12, 12, 0.8), transparent)'
        }}
      />
      <div 
        data-carousel="true" 
        className="overflow-hidden max-[560px]:overflow-visible h-full w-full" 
        ref={emblaRef}
      >
        <div data-carousel="true" className="flex items-center h-full">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              data-carousel="true"
              className={`flex-shrink-0 ${variant === "cases" ? "mx-4" : "mx-8"} flex flex-col items-center justify-center text-center h-[120px]`}
            >
              {item.type === "image" && (
                <div 
                  data-carousel="true" 
                  className="h-[120px] relative"
                  style={{ width: `${getImageSize(item.alt).containerWidth}px` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={getImageSize(item.alt).width}
                      height={getImageSize(item.alt).height}
                      style={{
                        objectFit: "contain",
                        objectPosition: "center",
                        maxWidth: `${getImageSize(item.alt).width}px`,
                        maxHeight: `${getImageSize(item.alt).height}px`,
                        width: "auto",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>
              )}
              {item.type === "text" && variant === "cases" && (
                <div 
                  data-carousel="true"
                  className="w-auto h-[130px] max-[754px]:h-[80px] p-8 max-[754px]:p-4 flex flex-col items-start justify-start gap-8 max-[754px]:gap-4"
                  style={{
                    borderRadius: '6px',
                    background: 'linear-gradient(150deg, rgba(142, 132, 132, 0.10) 7.84%, rgba(20, 12, 12, 0.10) 63.62%), rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <p className="text-white text-[22px] max-[754px]:text-[16px] text-left leading-[1.4] uppercase whitespace-pre-line font-helvetica font-light">
                    {item.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}