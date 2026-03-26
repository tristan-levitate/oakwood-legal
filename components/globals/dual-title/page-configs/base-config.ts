import { PageDualTitleConfig, DualTitleClasses } from './types';

// Global standardized breakpoints - consistent experience across all pages
const GLOBAL_BREAKPOINTS = {
  layout: 1290,        // Break to 2 lines
  fontReduction1: 690, // 52px → 43px
  fontReduction2: 580, // 43px → 36px
  borderHide: 580,     // Remove VerticalBorder and message padding
  
  // Awards special cases
  awards: {
    redTitleAlign: 490, // Red title aligns to left
    extraFontSize: 385  // 36px → 32px
  }
} as const;

export abstract class BaseDualTitleConfig {
  public abstract getConfig(): PageDualTitleConfig;
  
  public getDualTitleClasses(): DualTitleClasses {
    const config = this.getConfig();
    
    return {
      // Static classes (same for all pages)
      container: 'flex items-start justify-between min-h-fit max-[1290px]:flex-col max-[1290px]:gap-8',
      section: 'w-full mx-auto relative z-30 mt-[107px] max-[1290px]:mt-10',
      aside: 'flex-1 ml-8 mt-[-10px] flex justify-end max-[1290px]:flex-none max-[1290px]:ml-0 max-[1290px]:mt-0 max-[1290px]:justify-end max-[1290px]:w-full',
      asideCaseResults: 'flex-1 mt-[55px] flex justify-end max-[1290px]:flex-none max-[1290px]:mt-0 max-[1290px]:justify-end max-[1290px]:w-full',
      messageCaseResults: 'font-neue-montreal text-[21px] max-[690px]:text-[18px] max-[580px]:text-[16px] leading-[1.1] text-[#C7C7C7] text-left pl-5 max-[580px]:pl-0',
      verticalBorderClasses: 'max-[580px]:hidden',
      
      // Page-specific classes from config
      divCaseResults: config.classes.divCaseResults,
      title: config.classes.title,
      titleSpacer: config.classes.titleSpacer,
      titleRed: config.classes.titleRed,
      titleGrid: config.classes.titleGrid,
      titleSpacerVisibility: config.classes.titleSpacerVisibility,
      message: config.classes.message,
      containerHeight: config.classes.containerHeight,
      
      // Vertical border height (returns config object)
      verticalBorderHeight: config.verticalBorder,
      
      // Config object
      config: config.config
    };
  }
  
  protected getGlobalBreakpoints() {
    return GLOBAL_BREAKPOINTS;
  }
}
