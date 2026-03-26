// REFACTORED: This file now uses the new modular page-config system
// Each page has its own dedicated configuration class for better maintainability
import { DualTitlePageConfigManager } from './page-configs';

// Main function - returns all classes that vary by page or have logic
export function getDualTitleClasses(page?: string) {
  return DualTitlePageConfigManager.getDualTitleClasses(page);
}

// Legacy functions for backward compatibility - all delegate to DualTitlePageConfigManager
export function getContainerClasses(page?: string): string {
  return DualTitlePageConfigManager.getContainerClasses(page);
}

export function getSectionClasses(page?: string): string {
  return DualTitlePageConfigManager.getSectionClasses(page);
}

export function getAsideClasses(page?: string): string {
  return DualTitlePageConfigManager.getAsideClasses(page);
}

export function getAsideCaseResultsClasses(page?: string): string {
  return DualTitlePageConfigManager.getAsideCaseResultsClasses(page);
}

export function getDivCaseResultsClasses(page?: string): string {
  return DualTitlePageConfigManager.getDivCaseResultsClasses(page);
}

export function getTitleClasses(page?: string): string {
  return DualTitlePageConfigManager.getTitleClasses(page);
}

export function getTitleSpacerClasses(page?: string): string {
  return DualTitlePageConfigManager.getTitleSpacerClasses(page);
}

export function getTitleRedClasses(page?: string): string {
  return DualTitlePageConfigManager.getTitleRedClasses(page);
}

export function getTitleGridClasses(page?: string): string {
  return DualTitlePageConfigManager.getTitleGridClasses(page);
}

export function getTitleSpacerVisibility(page?: string): string {
  return DualTitlePageConfigManager.getTitleSpacerVisibility(page);
}

export function getMessageClasses(page?: string): string {
  return DualTitlePageConfigManager.getMessageClasses(page);
}

export function getMessageCaseResultsClasses(page?: string): string {
  return DualTitlePageConfigManager.getMessageCaseResultsClasses(page);
}

export function getVerticalBorderClasses(page?: string): string {
  return DualTitlePageConfigManager.getVerticalBorderClasses(page);
}

export function getVerticalBorderHeight(page?: string) {
  return DualTitlePageConfigManager.getVerticalBorderHeight(page);
}

export function getContainerHeightClasses(page?: string): string {
  return DualTitlePageConfigManager.getContainerHeightClasses(page);
}

export function getDualTitleConfig(page?: string) {
  return DualTitlePageConfigManager.getDualTitleConfig(page);
}

// Utility function to get page configuration
export function getPageConfig(page?: string) {
  return DualTitlePageConfigManager.getPageConfig(page);
}

// Interface for compatibility (can be removed in the future)
interface DualTitleConfig {
  showBackgroundImage?: boolean;
  backgroundImagePath?: string;
  backgroundImagePosition?: string;
  backgroundImageSize?: string;
  responsiveBreakpoint?: number;
}