import Script from "next/script";

// Single source of truth for the Oakwood Legal Group GTM container.
// Installed once in the root layout so it loads on EVERY page (main site
// + landing pages). This is what carries PPC attribution across page
// navigations — e.g. a visitor who lands on /ca/employment-law and then
// clicks through to /practice-areas keeps the same dataLayer + cookies.
export const GTM_ID = "GTM-WDRL3HS4";

// Place in <head>, as high as possible.
export function GTMHead() {
  return (
    <Script id="gtm-head" strategy="beforeInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
    </Script>
  );
}

// Place immediately after the opening <body> tag (fallback for no-JS).
export function GTMNoScript() {
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
}
