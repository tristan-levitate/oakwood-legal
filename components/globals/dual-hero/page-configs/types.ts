export interface PageHeroConfig {
  // Background configuration
  backgroundImage?: {
    show: boolean;
    overlay: string;
  };
  
  // Vertical border configuration
  verticalBorder: {
    height: number | { default: number; breakpoints?: { [key: string]: number } };
    position: string;
    ariaLabel: string;
    hideBreakpoint: string; // e.g., 'max-[660px]:hidden'
  };
  
  // Message width configuration
  messageWidth: {
    withRedTitle: number;
    withoutRedTitle: number;
  };
  
  // Special layout rules
  specialRules?: {
    isSqueezeLayout?: boolean;
    hasCustomHeight?: boolean;
    customHeight?: string;
  };
  
  // CSS Classes for different elements
  classes: {
    section: string;
    header: string;
    title: string;
    titleRed: string;
    titleGrid: string;
    titleSpacerVisibility: string;
    messageAside: string;
    message: string;
    messageContent: string;
    messageText: string;
    buttons: string;
  };
  
  // Section metadata
  sectionTitle: string;
}

export interface HeroClasses {
  section: string;
  backgroundStyle: any;
  header: string;
  title: string;
  titleRed: string;
  titleGrid: string;
  titleSpacerVisibility: string;
  messageAside: string;
  message: string;
  messageContent: string;
  messageText: string;
  verticalBorderClasses: string;
  verticalBorderPosition: string;
  verticalBorderHeight: number | { default: number; breakpoints?: { [key: string]: number } };
  verticalBorderHeightClasses?: string; // CSS classes for responsive heights
  verticalBorderAriaLabel: string;
  buttons: string;
  titleSpacer: string;
  buttonCall: string;
  buttonScroll: string;
  sectionTitle: string;
}
