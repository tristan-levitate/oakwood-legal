import { BasePageConfig } from './base-config';
import { PageHeroConfig } from './types';

export class AboutUsConfig extends BasePageConfig {
  public getConfig(): PageHeroConfig {
    return {
      backgroundImage: {
        show: true,
        overlay: 'linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.20) 100%)'
      },
      
      verticalBorder: {
        height: 140,
        position: 'left-[-10px] top-1/2 max-[1290px]:top-0 max-[1290px]:-mt-22 max-[699px]:-mt-25 -translate-y-1/2',
        ariaLabel: 'About us message background border',
        hideBreakpoint: 'max-[660px]:hidden'
      },
      
      messageWidth: {
        withRedTitle: 660,
        withoutRedTitle: 900
      },
      
      classes: {
        section: 'w-[1540px] max-[1600px]:w-[95%] max-[1290px]:w-[90%] mx-auto relative z-30 mt-12 max-[1290px]:mt-8 p-2 flex max-[1290px]:flex-col max-[1290px]:gap-8',
        
        header: 'absolute left-0 top-6 max-[1290px]:relative max-[1290px]:top-0 max-[1290px]:mt-8 w-auto max-[1290px]:w-full max-[700px]:w-[65%] max-[615px]:w-[70%] max-[497px]:w-[85%] max-[425px]:w-[100%]',
        
        title: 'text-white leading-none font-helvetica text-[52px] max-[827px]:text-[43px] max-[580px]:text-[36px] text-left mb-4 max-[580px]:mb-2 uppercase whitespace-pre-line',
        
        titleRed: 'leading-none font-helvetica text-[52px] max-[827px]:text-[43px] max-[580px]:text-[36px] bg-gradient-to-l from-[#C02B27] to-[#ca403b] bg-clip-text text-transparent ml-[-1em] max-[967px]:ml-0 uppercase',
        
        titleGrid: 'grid grid-cols-[max-content_1fr] items-start gap-0 max-[967px]:block',
        
        titleSpacerVisibility: 'max-[967px]:hidden',
        
        messageAside: 'absolute right-0 bottom-[20px] max-[1290px]:relative max-[1290px]:right-auto max-[1290px]:bottom-auto max-[1290px]:mt-[32px]',
        
        message: 'relative min-h-[250px] max-[1290px]:min-h-[200px] max-[580px]:min-h-[180px] max-[580px]:min-h-[220px] mr-0 w-[${width}px] max-[1290px]:w-full max-[580px]:overflow-hidden',
        
        messageContent: 'absolute inset-0 flex items-start justify-center px-4 max-[660px]:px-0 max-[1290px]:mb-4 mt-18 max-[1290px]:mt-14 max-[999px]:mt-11 max-[827px]:mt-13 max-[699px]:mt-10 max-[660px]:mt-[0px]',
        
        messageText: 'font-neue-montreal text-[21px] max-[827px]:text-[18px] max-[580px]:text-[16px] leading-[1.1] text-[#C7C7C7] text-left pl-5 max-[660px]:pl-0',
        
        buttons: 'absolute bottom-8 left-8 max-[1290px]:absolute max-[1290px]:bottom-8 max-[1290px]:right-8 max-[1290px]:left-auto max-[560px]:left-8 max-[560px]:right-auto z-30'
      },
      
      sectionTitle: 'About Us Hero Section'
    };
  }
}
