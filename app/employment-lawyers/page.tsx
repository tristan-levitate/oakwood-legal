import type { Metadata } from "next";
import Script from "next/script";
import EmploymentLawLP from "./EmploymentLawLP";
import { GTM_ID } from "@/components/GTM";
import "./lp.css";

// PPC landing page — fully self-contained, no Sanity, no shared header/footer.
// Lives at /ca/employment-law. Indexing disabled (paid-traffic page).
//
// GTM (GTM-WDRL3HS4) is loaded DIRECTLY on this page, for every visitor,
// independent of the sitewide cookie-consent gate. This is intentional and
// specific to the paid-media landing page: PPC attribution and the CallRail
// number swap (both loaded inside the GTM container) must fire for every ad
// click, including visitors who have not interacted with the cookie banner.
// Consent Mode still applies — the "default: denied" set in the root layout
// keeps Google cookies off until the visitor accepts, so this only enables
// cookieless pings before consent, not full tracking. The load is guarded so
// the container is not initialised twice if the consent component also loads it.
export const metadata: Metadata = {
  title:
    "Los Angeles Employment Attorney | Sexual Harassment & Wrongful Termination Lawyer | Oakwood Legal Group",
  description:
    "Oakwood Legal Group fights for employees in Los Angeles and Southern California. Sexual harassment, gender discrimination, wrongful termination, and retaliation cases. Former DA prosecutor. No fee unless we win. Free confidential consultation.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <>
      {/* Google Tag Manager — always on for this PPC landing page. */}
      <Script id="gtm-lp" strategy="afterInteractive">
        {`(function(w,d,s,l,i){
          if (w.google_tag_manager && w.google_tag_manager[i]) { return; }
          w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
          j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
      {/* Google Tag Manager (noscript) fallback */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      <EmploymentLawLP />
    </>
  );
}
