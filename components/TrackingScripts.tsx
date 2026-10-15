// next/script not running in this file. Nothing imports TrackingScripts, and the loaders below return nothing.
// import Script from "next/script";

/**
 * ▗▄▄▄  ▗▄▖▗▄▄▄▖    ▗▄▄▄▖▗▖  ▗▖▗▖  ▗▖
 * ▐▌  █▐▌ ▐▌ █      ▐▌   ▐▛▚▖▐▌▐▌  ▐▌
 * ▐▌  █▐▌ ▐▌ █      ▐▛▀▀▘▐▌ ▝▜▌▐▌  ▐▌
 * ▐▙▄▄▀▝▚▄▞▘ █      ▐▙▄▄▖▐▌  ▐▌ ▝▚▞▘
 *
 * == MAP OF ALL .ENV VARIABLES SO IT'S EASIER TO ADD THEM TO VERCEL ==
 *
 * NEXT_PUBLIC_GA4_ID - Google's GA4
 *
 * NEXT_PUBLIC_META_PIXEL_ID - Meta's Pixel
 * META_CONVERSIONS_API - Meta's conversion submission
 *
 * NEXT_PUBLIC_RECAPTCHA_SITE_KEY - ReCaptcha frontend key for emitting the client token
 * RECAPTCHA_SECRET_KEY - ReCaptcha backend key for transforming the client token into a score
 *
 * MONGODB_URI - MongoDB Atlas URI
 * SENDGRID_API_KEY - SendGrid API key (shared on Vercel)
 *
 * TWILIO_ACCOUNT_SID - Twilio Account Id (shared on Vercel)
 * TWILIO_AUTH_TOKEN - Twilio API Key (shared on Vercel)
 * TWILIO_MESSAGING_SERVICE_SID - Twilio Phone number that sends the message (shared on Vercel)
 *
 * NEXT_PUBLIC_CALL_RAIL_SRC - Call Rail's script URL
 */

interface CallRailProps {
  CALL_RAIL_SRC: string | undefined;
}

export function CallRail({ CALL_RAIL_SRC }: CallRailProps) {
  // CallRail script not running. This file is unused, and NEXT_PUBLIC_CALL_RAIL_SRC is not set in production. CallRail swap.js is loaded by the GTM container instead.
  void CALL_RAIL_SRC;

  return null;
}

interface GA4Props {
  GA4_ID: string | undefined;
}

export function GA4({ GA4_ID }: GA4Props) {
  // GA4 not running. This file is unused, and NEXT_PUBLIC_GA4_ID is not set in production. The Google tag is loaded by the GTM container instead.
  void GA4_ID;

  return null;
}

interface MetaPixelProps {
  META_PIXEL_ID: string | undefined;
}

export function Meta({ META_PIXEL_ID }: MetaPixelProps) {
  // Meta Pixel not running. This file is unused, and NEXT_PUBLIC_META_PIXEL_ID is not set in production. The GTM container has no Meta tag.
  void META_PIXEL_ID;

  return null;
}

export const TrackingScripts = {
  Meta,
  GA4,
  CallRail,
};

