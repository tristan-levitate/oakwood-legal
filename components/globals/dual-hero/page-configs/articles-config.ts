import { BasePageConfig } from './base-config';
import { PageHeroConfig } from './types';

export class ArticlesConfig extends BasePageConfig {
  public getConfig(): PageHeroConfig {
    return {
      backgroundImage: {
        show: true,
        overlay: 'linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.20) 100%)'
      },
      
      verticalBorder: {
        height: 202,
        position: 'left-[-15px] top-[40px]',
        ariaLabel: 'Articles message background border',
        hideBreakpoint: 'max-[660px]:hidden'
      },
      
      messageWidth: {
        withRedTitle: 763,
        withoutRedTitle: 900
      },
      
      classes: {
        section: 'w-[1540px] max-[1600px]:w-[95%] max-[1290px]:w-[90%] mx-auto relative z-30 mt-12 max-[1290px]:mt-8 p-2 flex max-[1290px]:flex-col max-[1290px]:gap-8',
        
        header: 'absolute left-0 top-6 max-[1290px]:relative max-[1290px]:top-0 max-[1290px]:mt-8 w-auto max-[1290px]:w-full',
        
        title: 'text-white leading-none font-helvetica text-[52px] max-[827px]:text-[43px] max-[580px]:text-[36px] text-left mb-4 max-[580px]:mb-2 uppercase whitespace-pre-line',
        
        titleRed: 'leading-none font-helvetica text-[52px] max-[827px]:text-[43px] max-[580px]:text-[36px] bg-gradient-to-l from-[#C02B27] to-[#ca403b] bg-clip-text text-transparent ml-[-1em] max-[580px]:ml-[-1.5em] max-[530px]:ml-0 uppercase',
        
        titleGrid: 'grid grid-cols-[max-content_1fr] items-start gap-0 max-[530px]:block',
        
        titleSpacerVisibility: 'max-[530px]:hidden',
        
        messageAside: 'absolute right-0 bottom-[20px] max-[1290px]:relative max-[1290px]:right-auto max-[1290px]:bottom-auto max-[1290px]:mt-[32px]',
        
        message: 'relative min-h-[250px] max-[1290px]:min-h-[200px] max-[580px]:min-h-[180px] max-[580px]:min-h-[220px] mr-0 w-[${width}px] max-[1290px]:w-full max-[580px]:overflow-hidden',
        
        messageContent: 'absolute inset-0 flex items-start justify-center px-4 mt-12 max-[580px]:px-0 max-[1290px]:mt-17 max-[1145px]:mt-15 max-[971px]:mt-13 max-[827px]:mt-15 max-[735px]:mt-13 max-[660px]:mt-[0px]',
        
        messageText: 'font-neue-montreal text-[21px] max-[827px]:text-[18px] max-[580px]:text-[16px] leading-[1.1] text-[#C7C7C7] text-left pl-5 max-[660px]:pl-0 pr-24 max-[1290px]:pr-8 max-[660px]:pr-0',
        
        buttons: 'absolute bottom-8 left-8 max-[1290px]:absolute max-[1290px]:bottom-8 max-[1290px]:right-8 max-[1290px]:left-auto max-[560px]:left-8 max-[560px]:right-auto z-30'
      },
      
      sectionTitle: 'Articles Hero Section'
    };
  }
}
