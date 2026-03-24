export interface PageDualTitleConfig {
  // Background image configuration
  backgroundImage?: {
    show: boolean;
    path: string;
    position: string;
    size: string;
  };
  
  // Vertical border configuration
  verticalBorder: {
    desktop: number;
    mobile: number;
  };
  
  // Special layout rules
  specialRules?: {
    redTitleLeftAlign?: boolean;
    extraFontReduction?: boolean;
  };
  
  // CSS Classes for different elements
  classes: {
    container: string;
    section: string;
    aside: string;
    asideCaseResults: string;
    divCaseResults: string;
    title: string;
    titleSpacer: string;
    titleRed: string;
    titleGrid: string;
    titleSpacerVisibility: string;
    message: string;
    messageCaseResults: string;
    verticalBorderClasses: string;
    containerHeight: string;
  };
  
  // Config object for compatibility
  config: {
    showBackgroundImage: boolean;
    backgroundImagePath?: string;
    backgroundImagePosition?: string;
    backgroundImageSize?: string;
    responsiveBreakpoint: number;
  };
}

export interface DualTitleClasses {
  container: string;
  section: string;
  aside: string;
  asideCaseResults: string;
  divCaseResults: string;
  title: string;
  titleSpacer: string;
  titleRed: string;
  titleGrid: string;
  titleSpacerVisibility: string;
  message: string;
  messageCaseResults: string;
  verticalBorderClasses: string;
  verticalBorderHeight: { desktop: number; mobile: number };
  containerHeight: string;
  config: {
    showBackgroundImage: boolean;
    backgroundImagePath?: string;
    backgroundImagePosition?: string;
    backgroundImageSize?: string;
    responsiveBreakpoint: number;
  };
}
