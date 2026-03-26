import { DualTitleClasses } from './types';
import { ArticlesConfig } from './articles-config';
import { CasesInTheNewsConfig } from './cases-in-the-news-config';
import { AwardsRecognitionsConfig } from './awards-recognitions-config';
import { CaseResultsConfig } from './case-results-config';

export class DualTitlePageConfigManager {
  private static getConfigInstance(page?: string) {
    switch (page) {
      case 'articles':
        return new ArticlesConfig();
      case 'cases-in-the-news':
        return new CasesInTheNewsConfig();
      case 'awards-recognitions':
        return new AwardsRecognitionsConfig();
      case 'case-results':
        return new CaseResultsConfig();
      default:
        // Default to articles if no page specified
        return new ArticlesConfig();
    }
  }
  
  public static getDualTitleClasses(page?: string): DualTitleClasses {
    const configInstance = this.getConfigInstance(page);
    return configInstance.getDualTitleClasses();
  }
  
  // Legacy compatibility methods - these will delegate to the new system
  public static getContainerClasses(page?: string): string {
    return this.getDualTitleClasses(page).container;
  }
  
  public static getSectionClasses(page?: string): string {
    return this.getDualTitleClasses(page).section;
  }
  
  public static getAsideClasses(page?: string): string {
    return this.getDualTitleClasses(page).aside;
  }
  
  public static getAsideCaseResultsClasses(page?: string): string {
    return this.getDualTitleClasses(page).asideCaseResults;
  }
  
  public static getDivCaseResultsClasses(page?: string): string {
    return this.getDualTitleClasses(page).divCaseResults;
  }
  
  public static getTitleClasses(page?: string): string {
    return this.getDualTitleClasses(page).title;
  }
  
  public static getTitleSpacerClasses(page?: string): string {
    return this.getDualTitleClasses(page).titleSpacer;
  }
  
  public static getTitleRedClasses(page?: string): string {
    return this.getDualTitleClasses(page).titleRed;
  }
  
  public static getTitleGridClasses(page?: string): string {
    return this.getDualTitleClasses(page).titleGrid;
  }
  
  public static getTitleSpacerVisibility(page?: string): string {
    return this.getDualTitleClasses(page).titleSpacerVisibility;
  }
  
  public static getMessageClasses(page?: string): string {
    return this.getDualTitleClasses(page).message;
  }
  
  public static getMessageCaseResultsClasses(page?: string): string {
    return this.getDualTitleClasses(page).messageCaseResults;
  }
  
  public static getVerticalBorderClasses(page?: string): string {
    return this.getDualTitleClasses(page).verticalBorderClasses;
  }
  
  public static getVerticalBorderHeight(page?: string) {
    return this.getDualTitleClasses(page).verticalBorderHeight;
  }
  
  public static getContainerHeightClasses(page?: string): string {
    return this.getDualTitleClasses(page).containerHeight;
  }
  
  public static getDualTitleConfig(page?: string) {
    return this.getDualTitleClasses(page).config;
  }
  
  public static getPageConfig(page?: string) {
    const configInstance = this.getConfigInstance(page);
    return configInstance.getConfig();
  }
}
