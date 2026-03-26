import React from "react";
import styles from "./squeeze-footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function SqueezeFooter() {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.footerDescription}>
          The content on the Oakwood Legal Group website is for general informational
          purposes only and does not constitute legal advice. No attorney-client
          relationship is established by using this site or its contact forms.
          The attorney listings are advertisements, not endorsed by any state
          agency or bar association, and no attorney claims specialization in
          any field. Each legal matter is unique, and past results do not
          guarantee future outcomes. Users should assess whether an attorney
          meets their needs and may be responsible for certain costs aside from
          contingency fees. By using this site, you agree to our Terms and
          Conditions and acknowledge that it is protected by reCAPTCHA under the
          Google Privacy Policy and Terms of Service. The information provided
          is general and should not be taken as legal advice for any specific
          situation. Viewing this information does not create an attorney-client
          relationship, and choosing legal representation should not be based
          solely on advertisements. Each case should be evaluated on its own
          merits, and prior results should not set expectations for future
          cases. Oakwood Legal Group is committed to advocating for those affected by
          civil rights violations, personal injuries, and other injustices and
          encourage direct contact for tailored legal advice.
        </p>
        <div className={styles.footerBottom}>
          <Image 
            src="/images/olg-logo.svg" 
            alt="Oakwood Legal Group" 
            width={200} 
            height={60}
            className={styles.logo}
          />
          <div className={styles.footerBottomContent}>
            <p>Oakwood Legal Group © {new Date().getFullYear()}. All Rights Reserved.</p>
            <Link href="https://thecaselygroup.com/" target="_blank">
              Powered by <span>The Casely Group</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
