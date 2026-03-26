import Script from "next/script";

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
  if (!CALL_RAIL_SRC) return null;
  
  return (
    <Script type="text/javascript" src={CALL_RAIL_SRC} />
  );
}

interface GA4Props {
  GA4_ID: string | undefined;
}

export function GA4({ GA4_ID }: GA4Props) {
  if (!GA4_ID) return null;
  
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
      />
      <Script id="ga4-analytics">
        {` 
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA4_ID}');
            `}
      </Script>
    </>
  );
}

interface MetaPixelProps {
  META_PIXEL_ID: string | undefined;
}

export function Meta({ META_PIXEL_ID }: MetaPixelProps) {
  if (!META_PIXEL_ID) return null;
  
  return (
    <>
      <Script id="Meta-Pixel">
        {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');`}
      </Script>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}

export const TrackingScripts = {
  Meta,
  GA4,
  CallRail,
};

