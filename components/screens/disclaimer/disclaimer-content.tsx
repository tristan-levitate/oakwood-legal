import React from "react";
import Link from "next/link";

const linkClass = "text-[#FF6460] underline";

export default function DisclaimerContent() {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <article className="prose prose-lg prose-invert max-w-none">
          <header className="mb-12 text-center">
            <h1 className="text-white font-helvetica text-[42px] max-[480px]:text-[32px] leading-tight mb-4">
              LEGAL DISCLAIMER
            </h1>
          </header>

          <div className="space-y-8 text-[#C7C7C7] leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-white font-helvetica text-2xl mb-4">
                Attorney Advertising
              </h2>
              <p>
                This website contains attorney advertising. Oakwood Legal Group,
                LLP is responsible for its content.
              </p>
              <p>
                <strong className="text-white">Responsible attorneys:</strong>{" "}
                Michael D. Terani, Esq. and Raymond J. Zolekhian, Esq.
                <br />
                <strong className="text-white">Office:</strong> 8124 W. 3rd St.,
                2nd Floor, Los Angeles, CA 90048
                <br />
                <strong className="text-white">Telephone:</strong>{" "}
                <a href="tel:+18888047858" className={linkClass}>
                  888-804-7858
                </a>
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-white font-helvetica text-2xl mb-4">
                General Information; Not Legal Advice
              </h2>
              <p>
                The information on this website is provided for general
                educational purposes and does not constitute legal advice. You
                should consult an attorney licensed in the appropriate
                jurisdiction about your particular circumstances before acting
                or refraining from acting based on this information.
              </p>
              <p>
                Laws and legal requirements change, and their application
                depends on the facts of each matter. Website information may not
                reflect the most current legal developments. We do not warrant
                that all information on this website is complete, accurate or
                current.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-white font-helvetica text-2xl mb-4">
                Prior Results Do Not Guarantee Future Outcomes
              </h2>
              <p>
                Any results described on this website depend on the facts and
                law applicable to the particular case. Results will differ based
                on the circumstances of each matter. Prior results do not
                guarantee a similar outcome, and nothing on this website
                constitutes a guarantee, warranty or prediction regarding the
                outcome of any legal matter.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-white font-helvetica text-2xl mb-4">
                No Attorney-Client Relationship
              </h2>
              <p>
                Viewing this website, requesting information or submitting an
                inquiry does not, by itself, create an attorney-client
                relationship. Representation requires our agreement to undertake
                your matter, ordinarily documented in a written engagement
                agreement.
              </p>
              <p>
                Please provide only the information reasonably necessary for us
                to evaluate your initial inquiry. Do not send detailed
                confidential documents or highly sensitive information until we
                explain the appropriate method for doing so.
              </p>
              <p>
                Applicable confidentiality and other professional duties may
                protect information received from a prospective client even when
                representation does not result. Nothing in this disclaimer
                eliminates those duties.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-white font-helvetica text-2xl mb-4">
                Deadlines
              </h2>
              <p>
                Strict deadlines, including statutes of limitations and
                government claim deadlines, may apply to your matter. Contacting
                us or submitting a form does not suspend or extend any deadline.
                Unless we have agreed to represent you concerning the matter,
                you remain responsible for obtaining legal assistance and
                protecting your rights before any deadline expires.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-white font-helvetica text-2xl mb-4">
                Jurisdiction
              </h2>
              <p>
                Michael D. Terani and Raymond J. Zolekhian are licensed to
                practice law in California. Legal services are offered only
                where permitted by applicable law and professional rules. This
                website is not intended to solicit representation that would
                constitute the unauthorized practice of law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-white font-helvetica text-2xl mb-4">
                Spanish-Language Assistance
              </h2>
              <div className="bg-[rgba(192,43,39,0.1)] border-l-4 border-[#C02B27] p-6 rounded-r-lg space-y-4">
                <p>
                  <strong className="text-white">English:</strong>{" "}
                  Spanish-language assistance is provided by non-attorney staff
                  members of Oakwood Legal Group, LLP. These staff members are
                  not attorneys, are not licensed to practice law in California,
                  and do not provide legal advice. Legal advice is provided by
                  licensed attorneys.
                </p>
                <p>
                  <strong className="text-white">Español:</strong> La asistencia
                  en español es proporcionada por miembros del personal de
                  Oakwood Legal Group, LLP que no son abogados. Estas personas no
                  tienen licencia para ejercer la abogacía en California y no
                  brindan asesoramiento legal. El asesoramiento legal es
                  proporcionado por abogados con licencia para ejercer.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-white font-helvetica text-2xl mb-4">
                Privacy
              </h2>
              <p>
                For information about how we collect, use and protect personal
                information, please see our{" "}
                <Link href="/privacy-policy" className={linkClass}>
                  Privacy Policy
                </Link>.
              </p>
            </section>
          </div>
        </article>
      </div>
    </section>
  );
}
