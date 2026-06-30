import type { Metadata } from "next";
import EmploymentLawLP from "./EmploymentLawLP";
import "./lp.css";

// PPC landing page — fully self-contained, no Sanity, no shared header/footer.
// Lives at /ca/employment-law. Indexing disabled (paid-traffic page).
// NOTE: GTM (GTM-WDRL3HS4) is installed site-wide in app/layout.tsx, so it is
// intentionally NOT duplicated here. This keeps the dataLayer continuous when a
// PPC visitor clicks from this LP through to the main firm site, while avoiding
// loading the container twice on this page.
export const metadata: Metadata = {
  title:
    "Los Angeles Employment Attorney | Sexual Harassment & Wrongful Termination Lawyer | Oakwood Legal Group",
  description:
    "Oakwood Legal Group fights for employees in Los Angeles and Southern California. Sexual harassment, gender discrimination, wrongful termination, and retaliation cases. Former DA prosecutor. No fee unless we win. Free confidential consultation.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <EmploymentLawLP />;
}
