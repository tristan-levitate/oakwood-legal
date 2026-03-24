export const getBackgroundStyle = (page: string | undefined, backgroundImage?: string) => {
  if (page === 'squeeze-page') {
    return {
      height: '643px',
      flexShrink: 0,
      borderRadius: '20px',
      background: 'transparent',
      overflow: 'hidden'
    };
  }
  return {
    height: '522px',
    flexShrink: 0,
    borderRadius: '20px',
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.20) 100%), url(${backgroundImage}) lightgray 50% / cover no-repeat`
  };
};

export const getHeroSectionTitle = (page: string | undefined): string => {
  switch (page) {
    case 'squeeze-page':
      return 'Hero Section - Get Started';
    case 'about-us':
      return 'About Us Hero Section';
    case 'practice-areas':
      return 'Practice Areas Hero Section';
    case 'cases-in-the-news':
      return 'Cases in the News Hero Section';
    case 'articles':
      return 'Articles Hero Section';
    default:
      return 'Hero Section';
  }
};

export const getHeaderClasses = (page: string | undefined, titleRed?: string): string => {
  const baseClasses = 'absolute left-0';
  
  if (page === 'squeeze-page') {
    return `${baseClasses} bottom-20 w-[600px] z-40`;
  }
  
  const widthClass = !titleRed ? 'w-[900px]' : 'w-auto';
  return `${baseClasses} top-6 ${widthClass}`;
};

export const getMessageClasses = (page: string | undefined, titleRed?: string): string => {
  const baseClasses = 'relative min-h-[316px] mr-0';
  
  if (page === 'about-us') {
    const widthClass = titleRed ? 'w-[660px]' : 'w-[900px]';
    return `${baseClasses} ${widthClass}`;
  }
  
  const widthClass = titleRed ? 'w-[763px]' : 'w-[900px]';
  return `${baseClasses} ${widthClass}`;
};

export const getVerticalBorderConfig = (page: string | undefined) => {
  if (page === 'about-us') {
    return {
      height: 140,
      position: 'left-[-10px] top-[70px]',
      ariaLabel: 'About us message background border'
    };
  }
  
  return {
    height: 202,
    position: 'left-[-15px] top-[40px]',
    ariaLabel: 'Message background border'
  };
};

export const getMessageTextClasses = (page: string | undefined): string => {
  const baseClasses = 'font-neue-montreal text-[21px] leading-[1.1] text-[#C7C7C7] text-left pl-5';
  
  if (page === 'about-us') {
    return baseClasses;
  }
  
  return `${baseClasses} pr-24`;
};
