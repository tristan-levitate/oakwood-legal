import { PageHeroConfig, HeroClasses } from './types';

export abstract class BasePageConfig {
  public abstract getConfig(): PageHeroConfig;
  
  public getHeroClasses(titleRed?: string, backgroundImage?: string): HeroClasses {
    const config = this.getConfig();
    const width = titleRed ? config.messageWidth.withRedTitle : config.messageWidth.withoutRedTitle;
    
    // Background style calculation
    const backgroundStyle = this.calculateBackgroundStyle(config, backgroundImage);
    
    // Vertical border position calculation
    const verticalBorderPosition = this.calculateVerticalBorderPosition(config);
    
    // Vertical border height calculation
    const { height, heightClasses } = this.calculateVerticalBorderHeight(config);
    
    return {
      // Section classes
      section: config.specialRules?.isSqueezeLayout
        ? 'w-[1540px] max-[1600px]:w-[95%] max-[768px]:w-[90%] mx-auto relative z-30 mt-12 max-[500px]:mt-2 p-2 flex'
        : 'w-[1540px] max-[1600px]:w-[95%] max-[1290px]:w-[90%] mx-auto relative z-30 mt-12 max-[1290px]:mt-8 p-2 flex max-[1290px]:flex-col max-[1290px]:gap-8',
      
      // Background style
      backgroundStyle,
      
      // Page-specific classes from config
      header: config.classes.header,
      title: config.classes.title,
      titleRed: config.classes.titleRed,
      titleGrid: config.classes.titleGrid,
      titleSpacerVisibility: config.classes.titleSpacerVisibility,
      messageAside: config.classes.messageAside,
      message: config.classes.message.replace('${width}', width.toString()),
      messageContent: config.classes.messageContent,
      messageText: config.classes.messageText,
      buttons: config.classes.buttons,
      
      // VerticalBorder
      verticalBorderClasses: config.verticalBorder.hideBreakpoint,
      verticalBorderPosition,
      verticalBorderHeight: config.verticalBorder.height,
      verticalBorderHeightClasses: heightClasses,
      verticalBorderAriaLabel: config.verticalBorder.ariaLabel,
      
      // Static classes (same for all pages)
      titleSpacer: 'invisible font-helvetica text-[52px] max-[827px]:text-[43px] max-[580px]:text-[36px] leading-none uppercase',
      buttonCall: 'flex cursor-pointer justify-center items-center gap-[5px] px-4 py-2 rounded-[6px] text-white font-normal font-helvetica text-[14px] leading-none whitespace-nowrap',
      buttonScroll: 'p-[1px] rounded-[6px] transition-all duration-200 hover:opacity-80 w-[37px] h-[37px] flex-shrink-0',
      
      // Section title
      sectionTitle: config.sectionTitle
    };
  }
  
  private calculateBackgroundStyle(config: PageHeroConfig, backgroundImage?: string) {
    if (config.specialRules?.isSqueezeLayout) {
      return {
        height: config.specialRules.customHeight || '623px',
        flexShrink: 0,
        borderRadius: '20px',
        background: 'transparent',
        overflow: 'hidden'
      };
    }
    
    const baseStyle = {
      height: '522px',
      flexShrink: 0,
      borderRadius: '20px'
    };
    
    if (config.backgroundImage?.show && backgroundImage) {
      return {
        ...baseStyle,
        background: `${config.backgroundImage.overlay}, url(${backgroundImage}) lightgray 50% / cover no-repeat`
      };
    }
    
    return { ...baseStyle, background: 'transparent' };
  }
  
  private calculateVerticalBorderPosition(config: PageHeroConfig): string {
    const position = config.verticalBorder.position;
    
    // Special handling for about-us style positioning
    if (position.includes('top-1/2')) {
      const modifiedPosition = position.replace(/top-\[\d+px\]/, 'top-1/2 -translate-y-1/2');
      return `absolute ${modifiedPosition} max-[1290px]:left-[-10px] max-[1290px]:top-0 max-[1290px]:translate-y-1/2`;
    }
    
    const modifiedPosition = position.replace(/top-\[\d+px\]/, 'top-0');
    return `absolute ${modifiedPosition} max-[1290px]:left-[-10px] max-[1290px]:top-0`;
  }
  
  private calculateVerticalBorderHeight(config: PageHeroConfig): { height: number; heightClasses?: string } {
    const heightConfig = config.verticalBorder.height;
    
    // If height is just a number, return it directly
    if (typeof heightConfig === 'number') {
      return { height: heightConfig };
    }
    
    // If height is an object with breakpoints, generate CSS classes
    const { default: defaultHeight, breakpoints } = heightConfig;
    
    if (!breakpoints || Object.keys(breakpoints).length === 0) {
      return { height: defaultHeight };
    }
    
    // Generate CSS custom properties for each breakpoint
    const heightClasses = Object.entries(breakpoints)
      .map(([breakpoint, height]) => `${breakpoint}:[--vertical-border-height:${height}px]`)
      .join(' ');
    
    return {
      height: defaultHeight,
      heightClasses: `[--vertical-border-height:${defaultHeight}px] ${heightClasses}`
    };
  }
}
