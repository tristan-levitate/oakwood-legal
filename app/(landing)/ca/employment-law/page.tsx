import type { Metadata } from "next";
import Script from "next/script";
import EmploymentLawLP from "./EmploymentLawLP";
import "./lp.css";

// PPC landing page — fully self-contained, no Sanity, no shared header/footer.
// Lives at /ca/employment-law. Indexing disabled (paid-traffic page).
export const metadata: Metadata = {
  title:
    "Los Angeles Employment Attorney | Sexual Harassment & Wrongful Termination Lawyer | Oakwood Legal Group",
  description:
    "Oakwood Legal Group fights for employees in Los Angeles and Southern California. Sexual harassment, gender discrimination, wrongful termination, and retaliation cases. Former DA prosecutor. No fee unless we win. Free confidential consultation.",
  robots: { index: false, follow: false },
};

const GTM_ID = "GTM-WDRL3HS4";

export default function Page() {
  return (
    <>
      {/* Google Tag Manager */}
      <Script id="gtm-lp" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
      {/* End Google Tag Manager */}

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      {/* End Google Tag Manager (noscript) */}

      <EmploymentLawLP />
    </>
  );
}
