import { BasePageConfig } from './base-config';
import { PageHeroConfig } from './types';

export class ArticleSlugConfig extends BasePageConfig {
  public getConfig(): PageHeroConfig {
    return {
      backgroundImage: {
        show: true,
        overlay: 'linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.70) 100%)'
      },
      
      verticalBorder: {
        height: {
          default: 190,
          breakpoints: {
            'max-[1200px]': 180,
            'max-[943px]': 160,
            'max-[768px]': 140,
            'max-[580px]': 120
          }
        },
        position: 'left-[-15px] top-[40px]',
        ariaLabel: 'Article page message background border',
        hideBreakpoint: 'max-[943px]:hidden'
      },
      
      messageWidth: {
        withRedTitle: 763,
        withoutRedTitle: 900
      },
      
      classes: {
        section: 'w-[1540px] max-[1600px]:w-[95%] max-[1290px]:w-[90%] mx-auto relative z-30 mt-12 max-[1290px]:mt-8 p-2 flex max-[1290px]:flex-col max-[1290px]:gap-8',
        
        header: 'absolute left-0 top-6 max-[1290px]:relative max-[1290px]:top-0 max-[1290px]:mt-8 w-[900px] max-[1290px]:w-full max-[1230px]:w-[76%] max-[1027px]:w-[69%] max-[580px]:w-[95%] z-40',
        
        title: 'text-white leading-none font-helvetica text-[52px] max-[1027px]:text-[43px] max-[623px]:text-[36px] max-[532px]:text-[32px] text-left mb-4 max-[580px]:mb-2 uppercase whitespace-pre-line',
        
        titleRed: 'leading-none font-helvetica text-[52px] max-[827px]:text-[43px] max-[580px]:text-[36px] bg-gradient-to-l from-[#C02B27] to-[#ca403b] bg-clip-text text-transparent ml-[-1em] max-[967px]:ml-0 uppercase',
        
        titleGrid: 'grid grid-cols-[max-content_1fr] items-start gap-0 max-[967px]:block',
        
        titleSpacerVisibility: 'max-[967px]:hidden',
        
        messageAside: 'absolute right-0 bottom-[20px] max-[1290px]:relative max-[1290px]:right-auto max-[1290px]:bottom-auto max-[1290px]:mt-[32px]',
        
        message: 'relative min-h-[250px] max-[1290px]:min-h-[200px] max-[580px]:min-h-[180px] max-[580px]:min-h-[220px] mr-0 w-[${width}px] max-[1290px]:w-full max-[580px]:overflow-hidden',
        
        messageContent: 'absolute inset-0 flex items-start justify-center px-4 max-[943px]:px-0 mt-20 max-[943px]:mt-[0px]',
        
        messageText: 'font-neue-montreal text-[21px] max-[827px]:text-[18px] max-[580px]:text-[16px] max-[532px]:text-[14px] leading-[1.1] text-[#C7C7C7] text-left pl-5 max-[943px]:pl-0',
        
        buttons: 'absolute bottom-8 left-8 max-[1290px]:absolute max-[1290px]:bottom-8 max-[1290px]:right-8 max-[1290px]:left-auto max-[560px]:left-8 max-[560px]:right-auto z-30'
      },
      
      sectionTitle: 'Article Hero Section'
    };
  }
}
