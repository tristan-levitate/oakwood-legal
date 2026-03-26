import { BaseDualTitleConfig } from './base-config';
import { PageDualTitleConfig } from './types';

export class CaseResultsConfig extends BaseDualTitleConfig {
  public getConfig(): PageDualTitleConfig {
    return {
      backgroundImage: {
        show: true,
        path: '/images/logos/olg-bg-red.svg',
        position: 'top-0 right-8',
        size: 'w-auto h-auto'
      },
      
      verticalBorder: { 
        desktop: 200, 
        mobile: 200 
      },
      
      classes: {
        container: 'flex items-start justify-between min-h-fit max-[1290px]:flex-col max-[1290px]:gap-8',
        section: 'w-full mx-auto relative z-30 mt-[107px] max-[1290px]:mt-10',
        aside: 'flex-1 ml-8 mt-[-10px] flex justify-end max-[1290px]:flex-none max-[1290px]:ml-0 max-[1290px]:mt-0 max-[1290px]:justify-end max-[1290px]:w-full',
        asideCaseResults: 'flex-1 mt-[55px] flex justify-end max-[1290px]:flex-none max-[1290px]:mt-0 max-[1290px]:justify-end max-[1290px]:w-full',
        
        divCaseResults: 'relative w-[760px] mr-9 max-[1290px]:mr-0 max-[560px]:w-full max-[560px]:overflow-hidden xl:mb-[60px]',
        
        title: 'text-white leading-none font-helvetica text-[52px] max-[690px]:text-[43px] max-[580px]:text-[36px] text-left mb-4 max-[580px]:mb-0',
        
        titleSpacer: 'invisible font-helvetica text-[52px] max-[690px]:text-[43px] max-[580px]:text-[36px] leading-none',
        
        titleRed: 'leading-none font-helvetica text-[52px] max-[690px]:text-[43px] max-[580px]:text-[36px] bg-gradient-to-l from-[#C02B27] to-[#ca403b] bg-clip-text text-transparent ml-[-1em] max-[580px]:ml-[-1.5em]',
        
        titleGrid: 'grid grid-cols-[max-content_1fr] items-start gap-0',
        
        titleSpacerVisibility: '',
        
        message: 'font-neue-montreal text-[21px] max-[690px]:text-[18px] max-[580px]:text-[16px] leading-[1.7] text-[#C7C7C7] text-left pl-10 max-[580px]:pl-0',
        
        messageCaseResults: 'font-neue-montreal text-[21px] max-[690px]:text-[18px] max-[580px]:text-[16px] leading-[1.1] text-[#C7C7C7] text-left pl-5 max-[580px]:pl-0',
        
        verticalBorderClasses: 'max-[580px]:hidden',
        
        containerHeight: 'min-h-[240px] max-[580px]:min-h-[180px]'
      },
      
      config: {
        showBackgroundImage: true,
        backgroundImagePath: '/images/logos/olg-bg-red.svg',
        backgroundImagePosition: 'top-0 right-8',
        backgroundImageSize: 'w-auto h-auto',
        responsiveBreakpoint: 1290
      }
    };
  }
}
