// REFACTORED: This file now uses the new modular page-config system
// Each page has its own dedicated configuration class for better maintainability
import { PageConfigManager } from './page-configs';

// Main function - returns all classes that vary by page
export function getHeroClasses(page?: string, titleRed?: string, backgroundImage?: string) {
  return PageConfigManager.getHeroClasses(page, titleRed, backgroundImage);
}

// Legacy functions for backward compatibility - all delegate to PageConfigManager
export function getHeroBackgroundStyle(page?: string, backgroundImage?: string) {
  return PageConfigManager.getHeroBackgroundStyle(page, backgroundImage);
}

export function getHeroSectionClasses(page?: string): string {
  return PageConfigManager.getHeroSectionClasses(page);
}

export function getHeroHeaderClasses(page?: string, titleRed?: string): string {
  return PageConfigManager.getHeroHeaderClasses(page, titleRed);
}

export function getHeroTitleClasses(page?: string): string {
  return PageConfigManager.getHeroTitleClasses(page);
}

export function getHeroTitleSpacerClasses(page?: string): string {
  return PageConfigManager.getHeroTitleSpacerClasses(page);
}

export function getHeroTitleRedClasses(page?: string): string {
  return PageConfigManager.getHeroTitleRedClasses(page);
}

export function getHeroTitleGridClasses(page?: string): string {
  return PageConfigManager.getHeroTitleGridClasses(page);
}

export function getHeroTitleSpacerVisibility(page?: string): string {
  return PageConfigManager.getHeroTitleSpacerVisibility(page);
}

export function getHeroMessageAsideClasses(page?: string): string {
  return PageConfigManager.getHeroMessageAsideClasses(page);
}

export function getHeroMessageClasses(page?: string, titleRed?: string): string {
  return PageConfigManager.getHeroMessageClasses(page, titleRed);
}

export function getHeroVerticalBorderClasses(page?: string): string {
  return PageConfigManager.getHeroVerticalBorderClasses(page);
}

export function getHeroVerticalBorderPosition(page?: string): string {
  return PageConfigManager.getHeroVerticalBorderPosition(page);
}

export function getHeroMessageTextClasses(page?: string): string {
  return PageConfigManager.getHeroMessageTextClasses(page);
}

export function getHeroMessageContentClasses(page?: string): string {
  return PageConfigManager.getHeroMessageContentClasses(page);
}

export function getHeroButtonsClasses(page?: string): string {
  return PageConfigManager.getHeroButtonsClasses(page);
}

export function getHeroButtonCallClasses(page?: string): string {
  return PageConfigManager.getHeroButtonCallClasses(page);
}

export function getHeroButtonScrollClasses(page?: string): string {
  return PageConfigManager.getHeroButtonScrollClasses(page);
}

export function getHeroSectionTitle(page?: string): string {
  return PageConfigManager.getHeroSectionTitle(page);
}

// Maintains compatibility with existing code
export function getHeroConfig(page?: string) {
  return PageConfigManager.getHeroPageConfig(page);
}

export function getHeroPageConfig(page?: string) {
  return PageConfigManager.getHeroPageConfig(page);
}