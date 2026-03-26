export const getHrefForPage = (page: string | undefined, slug: string): string => {
  switch (page) {
    case 'cases-in-the-news':
      return `/cases-in-the-news/${slug}`;
    case 'practice-areas':
      return `/${slug}`;
    case 'articles':
    default:
      return `/articles/${slug}`;
  }
};

export const getSectionTitle = (page: string | undefined): string => {
  switch (page) {
    case 'cases-in-the-news':
      return 'Cases in the News';
    case 'practice-areas':
      return 'Practice Areas';
    case 'articles':
    default:
      return 'Articles';
  }
};

export const getCtaText = (page: string | undefined): string => {
  switch (page) {
    case 'practice-areas':
      return 'LEARN MORE';
    case 'cases-in-the-news':
    case 'articles':
    default:
      return 'READ MORE';
  }
};

export const getAriaLabel = (page: string | undefined, title: string): string => {
  const action = page === 'practice-areas' ? 'Learn more about' : 'Read more about';
  return `${action} ${title}`;
};
