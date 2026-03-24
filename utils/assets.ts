/**
 * Asset Configuration for Oakwood Legal Group
 * Centralizes asset URLs for S3 storage
 */

// S3 bucket URL
const S3_URL = "https://cg-oakwood-legal-group.s3.us-east-1.amazonaws.com";

/**
 * Get asset URL from S3
 * @param assetPath - Path to the asset (e.g., "/video.webm")
 * @returns S3 URL
 */
export function getAssetUrl(assetPath: string): string {
  // Remove leading slash if present
  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  return `${S3_URL}/${cleanPath}`;
}

// Pre-defined asset URLs for commonly used files
export const ASSETS = {
  // Videos - Updated to optimized WebM format
  HERO_VIDEO: getAssetUrl("hero-oak.webm"),
  
  // Images  
  VIDEO_POSTER: getAssetUrl("poster-video-home.webp"),
  LOGO_WHITE: getAssetUrl("logo-white.png"),
  OAKWOOD_LOGO: getAssetUrl("oakwoodlogo.png"),
} as const;

export default {
  getAssetUrl,
  ASSETS,
};
