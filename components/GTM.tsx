import Script from "next/script";

// Single source of truth for the Oakwood Legal Group GTM container.
// Loaded from the cookie consent component for every visitor who has not
// opted out (rejected marketing or sent GPC, see cookie-consent.tsx),
// on every page (main site + landing pages). This is what carries PPC
// attribution across page navigations — e.g. a visitor who lands on
// /ca/employment-law and then clicks through to /practice-areas keeps
// the same dataLayer + cookies.
export const GTM_ID = "GTM-WDRL3HS4";

// Injected unless the visitor opted out. afterInteractive is required because
// this script is mounted from a client component, not the root layout head.
export function GTMHead() {
  return (
    <Script id="gtm-head" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
    </Script>
  );
}

// GTM noscript iframe not running. It is not mounted anywhere, because that iframe would load GTM before marketing consent.
export function GTMNoScript() {
  return null;

  /*
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
  */
}
