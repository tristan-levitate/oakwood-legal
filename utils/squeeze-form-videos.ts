/**
 * Video Configuration for Squeeze Form
 * Maps slugs to video URLs for different practice areas
 */

export interface SqueezeFormVideos {
  topVideo: string;
  bottomVideo: string;
}

/**
 * Video configuration map for squeeze forms
 * Maps slug to video URLs (top and bottom videos)
 */
export const SQUEEZE_FORM_VIDEOS: Record<string, SqueezeFormVideos> = {
  "california-personal-injury-lawyers": {
    topVideo: `https://cg-oakwood-legal-group.s3.us-east-1.amazonaws.com/Personal-Injury-1.mp4`,
    bottomVideo: `https://cg-oakwood-legal-group.s3.us-east-1.amazonaws.com/Premises-Liability-1.mp4`,
  },
  "premises-liability-attorneys": {
    topVideo: `https://cg-oakwood-legal-group.s3.us-east-1.amazonaws.com/Premises-Liability-1.mp4`,
    bottomVideo: `https://cg-oakwood-legal-group.s3.us-east-1.amazonaws.com/premises-lability-2.mp4`,
  },
  "motor-vehicle-accident-attorneys": {
    topVideo: `https://cg-oakwood-legal-group.s3.us-east-1.amazonaws.com/motor-vehicle-accident-1.mp4`,
    bottomVideo: `https://cg-oakwood-legal-group.s3.us-east-1.amazonaws.com/Motor-Vehicle-Accident-2.mp4`,
  },
} as const;

/**
 * Get video URLs for a given slug
 * @param slug - The page slug
 * @returns Video URLs object or default videos if slug not found
 */
export function getSqueezeFormVideos(slug: string): SqueezeFormVideos {
  return (
    SQUEEZE_FORM_VIDEOS[slug] || {
      // Default videos (fallback to current premises liability videos)
      topVideo: `https://cg-oakwood-legal-group.s3.us-east-1.amazonaws.com/Premises-Liability-1.mp4`,
      bottomVideo: `https://cg-oakwood-legal-group.s3.us-east-1.amazonaws.com/premises-lability-2.mp4`,
    }
  );
}
