import { HeroClasses } from './types';
import { AboutUsConfig } from './about-us-config';
import { ArticleSlugConfig } from './article-slug-config';
import { PracticeAreasConfig } from './practice-areas-config';
import { PracticeAreaSlugConfig } from './practice-area-slug-config';
import { ArticlesConfig } from './articles-config';
import { CasesInTheNewsConfig } from './cases-in-the-news-config';
import { SqueezePageConfig } from './squeeze-page-config';

export class PageConfigManager {
  private static getConfigInstance(page?: string) {
    switch (page) {
      case 'about-us':
        return new AboutUsConfig();
      case 'article-slug':
        return new ArticleSlugConfig();
      case 'practice-areas':
        return new PracticeAreasConfig();
      case 'practice-area-slug':
        return new PracticeAreaSlugConfig();
      case 'articles':
        return new ArticlesConfig();
      case 'cases-in-the-news':
        return new CasesInTheNewsConfig();
      case 'squeeze-page':
        return new SqueezePageConfig();
      default:
        // Default to practice-areas if no page specified
        return new PracticeAreasConfig();
    }
  }
  
  public static getHeroClasses(page?: string, titleRed?: string, backgroundImage?: string): HeroClasses {
    const configInstance = this.getConfigInstance(page);
    return configInstance.getHeroClasses(titleRed, backgroundImage);
  }
  
  // Legacy compatibility methods - these will delegate to the new system
  public static getHeroBackgroundStyle(page?: string, backgroundImage?: string) {
    return this.getHeroClasses(page, undefined, backgroundImage).backgroundStyle;
  }
  
  public static getHeroSectionClasses(page?: string): string {
    return this.getHeroClasses(page).section;
  }
  
  public static getHeroHeaderClasses(page?: string, titleRed?: string): string {
    return this.getHeroClasses(page, titleRed).header;
  }
  
  public static getHeroTitleClasses(page?: string): string {
    return this.getHeroClasses(page).title;
  }
  
  public static getHeroTitleSpacerClasses(page?: string): string {
    return this.getHeroClasses(page).titleSpacer;
  }
  
  public static getHeroTitleRedClasses(page?: string): string {
    return this.getHeroClasses(page).titleRed;
  }
  
  public static getHeroTitleGridClasses(page?: string): string {
    return this.getHeroClasses(page).titleGrid;
  }
  
  public static getHeroTitleSpacerVisibility(page?: string): string {
    return this.getHeroClasses(page).titleSpacerVisibility;
  }
  
  public static getHeroMessageAsideClasses(page?: string): string {
    return this.getHeroClasses(page).messageAside;
  }
  
  public static getHeroMessageClasses(page?: string, titleRed?: string): string {
    return this.getHeroClasses(page, titleRed).message;
  }
  
  public static getHeroVerticalBorderClasses(page?: string): string {
    return this.getHeroClasses(page).verticalBorderClasses;
  }
  
  public static getHeroVerticalBorderPosition(page?: string): string {
    return this.getHeroClasses(page).verticalBorderPosition;
  }
  
  public static getHeroMessageTextClasses(page?: string): string {
    return this.getHeroClasses(page).messageText;
  }
  
  public static getHeroMessageContentClasses(page?: string): string {
    return this.getHeroClasses(page).messageContent;
  }
  
  public static getHeroButtonsClasses(page?: string): string {
    return this.getHeroClasses(page).buttons;
  }
  
  public static getHeroButtonCallClasses(page?: string): string {
    return this.getHeroClasses(page).buttonCall;
  }
  
  public static getHeroButtonScrollClasses(page?: string): string {
    return this.getHeroClasses(page).buttonScroll;
  }
  
  public static getHeroSectionTitle(page?: string): string {
    return this.getHeroClasses(page).sectionTitle;
  }
  
  public static getHeroPageConfig(page?: string) {
    const configInstance = this.getConfigInstance(page);
    const config = configInstance.getConfig(); // Now public method
    const heroClasses = configInstance.getHeroClasses();
    
    return {
      isSqueezeLayout: page === 'squeeze-page',
      hasBackground: page !== 'squeeze-page',
      verticalBorder: {
        height: heroClasses.verticalBorderHeight,
        ariaLabel: heroClasses.verticalBorderAriaLabel
      },
      // Legacy compatibility
      verticalBorderHeight: heroClasses.verticalBorderHeight,
      verticalBorderAriaLabel: heroClasses.verticalBorderAriaLabel,
      verticalBorderHeightClasses: heroClasses.verticalBorderHeightClasses
    };
  }
}
