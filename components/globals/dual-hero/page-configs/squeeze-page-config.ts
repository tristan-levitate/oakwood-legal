import { BasePageConfig } from './base-config';
import { PageHeroConfig } from './types';

export class SqueezePageConfig extends BasePageConfig {
  public getConfig(): PageHeroConfig {
    return {
      verticalBorder: {
        height: 0,
        position: '',
        ariaLabel: '',
        hideBreakpoint: 'hidden'
      },
      
      messageWidth: {
        withRedTitle: 900,
        withoutRedTitle: 900
      },
      
      specialRules: {
        isSqueezeLayout: true,
        hasCustomHeight: true,
        customHeight: '643px'
      },
      
      classes: {
        section: 'w-[1540px] max-[1600px]:w-[95%] max-[768px]:w-[90%] mx-auto relative z-30 mt-12 max-[500px]:mt-4 p-2 flex max-[500px]:mt-4 max-[500px]:p-1',
        
        header: 'absolute left-0 z-40 bottom-[70px] max-[768px]:bottom-[54px] max-[500px]:bottom-[54px] w-[1000px] max-[1500px]:w-[60%] max-[1155px]:w-[50%] max-[1080px]:w-[90%] max-[950px]:w-[100%]',
        
        title: 'text-white leading-none text-[52px] max-[1500px]:text-[43px] max-[1230px]:text-[32px] max-[526px]:text-[24px] text-left uppercase whitespace-pre-line',
        
        titleRed: 'leading-none font-helvetica text-[52px] max-[1500px]:text-[43px] max-[1230px]:text-[32px] max-[526px]:text-[24px] bg-gradient-to-l from-[#C02B27] to-[#ca403b] bg-clip-text text-transparent uppercase',
        
        titleGrid: 'grid grid-cols-[max-content_1fr] items-start gap-0 max-[530px]:block',
        
        titleSpacerVisibility: 'max-[530px]:hidden',
        
        messageAside: 'hidden',
        
        message: 'hidden',
        
        messageContent: '',
        
        messageText: '',
        
        buttons: 'absolute ml-2 bottom-8 left-8 max-[768px]:absolute max-[768px]:bottom-8 max-[560px]:left-8 max-[560px]:right-auto max-[500px]:bottom-4 max-[500px]:left-4 z-50'
      },
      
      sectionTitle: 'Hero Section - Get Started'
    };
  }
}
