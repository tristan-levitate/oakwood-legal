import React from "react";
import Link from "next/link";

const linkClass = "text-[#FF6460] underline";

export default function PrivacyPolicyContent() {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <article className="prose prose-lg prose-invert max-w-none">
          <header className="mb-12 text-center">
            <h1 className="text-white font-helvetica text-[42px] max-[480px]:text-[32px] leading-tight mb-4">
              PRIVACY POLICY
            </h1>
            <p className="text-white font-helvetica text-lg mb-2">
              Oakwood Legal Group, LLP
            </p>
            <time className="text-[#C7C7C7] text-lg" dateTime="2026-10-19">
              Effective Date: October 19, 2026
            </time>
          </header>

          <div className="space-y-8 text-[#C7C7C7] leading-relaxed">
            <section className="space-y-4">
              <p>
                Oakwood Legal Group, LLP (“the Firm,” “we,” “us,” or “our”)
                respects your privacy. This Privacy Policy explains how we
                collect, use, disclose and retain personal information, and how
                you can exercise applicable privacy rights.
              </p>
              <p>
                This Policy applies to our website,{" "}
                <a
                  href="https://www.oakwoodlegal.com/"
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.oakwoodlegal.com
                </a>{" "}
                (the “Website”), consultation inquiries, newsletter
                subscriptions, and related communications and intake activities
                conducted online or offline.
              </p>
              <p>
                Information we receive in connection with prospective or
                existing attorney-client relationships is also subject to
                applicable professional duties, confidentiality requirements and
                engagement agreements. Nothing in this Policy authorizes a use
                or disclosure prohibited by those obligations or waives
                attorney-client privilege.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-white font-helvetica text-2xl mb-4">
                1. Personal Information We Collect
              </h2>
              <p>
                Depending on your interactions with us, we collect the following
                categories of personal information:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="py-3 pr-4 text-white font-helvetica font-normal align-bottom">
                        Category
                      </th>
                      <th className="py-3 text-white font-helvetica font-normal align-bottom">
                        Examples
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10 align-top">
                      <td className="py-3 pr-4">
                        Identifiers and contact information
                      </td>
                      <td className="py-3">
                        Name, email address, telephone number, mailing address,
                        IP address and online identifiers
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 align-top">
                      <td className="py-3 pr-4">
                        Inquiry and communication information
                      </td>
                      <td className="py-3">
                        The legal area of your inquiry, information you submit
                        about your matter, correspondence, and the content of
                        communications with us
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 align-top">
                      <td className="py-3 pr-4">Internet and device activity</td>
                      <td className="py-3">
                        Browser and device information, pages viewed, links
                        clicked, referring pages, timestamps and interactions
                        with our Website
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 align-top">
                      <td className="py-3 pr-4">Approximate location</td>
                      <td className="py-3">
                        General location derived from an IP address; this does
                        not mean precise GPS location
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 align-top">
                      <td className="py-3 pr-4">Preferences</td>
                      <td className="py-3">
                        Newsletter subscriptions, communication preferences,
                        cookie choices and privacy requests
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="py-3 pr-4">
                        Sensitive personal information
                      </td>
                      <td className="py-3">
                        Information you choose to provide about your legal
                        matter that may concern health, racial or ethnic origin,
                        religious beliefs, sex life, sexual orientation or other
                        sensitive matters
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                These categories describe information collected during the
                preceding 12 months, to the extent applicable to your
                interactions with us. We do not collect every category from
                every person.
              </p>
              <p>
                Please do not submit Social Security numbers, financial account
                credentials, medical records or detailed confidential documents
                through our general Website forms. If additional information is
                needed, we will explain how to provide it.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-white font-helvetica text-2xl mb-4">
                2. Sources of Personal Information
              </h2>
              <p>We collect personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Directly from you when you complete a form, subscribe, contact
                  us or communicate with our intake team.
                </li>
                <li>
                  Automatically from your browser or device through cookies,
                  similar technologies and server logs.
                </li>
                <li>From people acting on your behalf.</li>
                <li>
                  From referral sources, advertising platforms and intake
                  service providers when they transmit an inquiry you have
                  requested or authorized.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-white font-helvetica text-2xl mb-4">
                3. How We Use Personal Information
              </h2>
              <p>We use personal information as reasonably necessary to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to inquiries and communicate with you.</li>
                <li>Evaluate whether we can assist with a legal matter.</li>
                <li>
                  Conduct conflict checks and maintain appropriate records of
                  inquiries.
                </li>
                <li>
                  Provide legal services when an attorney-client relationship is
                  established.
                </li>
                <li>
                  Send newsletters or other marketing communications when you
                  have subscribed or provided any legally required consent.
                </li>
                <li>Operate, maintain, secure and improve our Website and systems.</li>
                <li>Understand Website usage.</li>
                <li>
                  Measure advertising performance and conduct advertising
                  activities consistent with your choices and applicable law.
                </li>
                <li>
                  Prevent fraud, investigate misuse and protect information
                  security.
                </li>
                <li>Process privacy requests and maintain compliance records.</li>
                <li>
                  Comply with legal, regulatory and professional obligations,
                  preserve evidence, and establish, exercise or defend legal
                  claims.
                </li>
              </ul>
              <p>
                We do not use sensitive personal information to infer
                characteristics about you for advertising. We use and disclose
                it only for purposes permitted by applicable law, such as
                evaluating or providing requested legal services, protecting
                security and complying with legal obligations.
              </p>
              <p>
                We do not use automated technology to make decisions producing
                legal or similarly significant effects on you without meaningful
                human review.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-white font-helvetica text-2xl mb-4">
                4. Cookies, Analytics and Advertising Technologies
              </h2>
              <p>
                Our Website uses cookies and similar technologies in the
                following categories:
              </p>
              <p>
                <strong className="text-white">
                  Strictly necessary technologies.
                </strong>{" "}
                These support Website operation, security and the storage of
                privacy preferences. They remain active when necessary for those
                purposes.
              </p>
              <p>
                <strong className="text-white">Analytics technologies.</strong>{" "}
                These help us understand how visitors use the Website, including
                which pages are visited and how the Website performs.
              </p>
              <p>
                <strong className="text-white">Advertising technologies.</strong>{" "}
                These help measure advertising performance and may allow
                advertising providers to recognize a browser or device across
                websites.
              </p>
              <p>
                Nonessential analytics and advertising technologies remain
                disabled until you affirmatively accept the relevant category
                through our cookie controls. Rejecting them does not prevent you
                from using our consultation forms or contacting us.
              </p>
              <p>
                You may withdraw or change your choices at any time through{" "}
                <strong className="text-white">“Cookie Settings”</strong> in the
                Website footer. Browser settings may also allow you to block or
                delete cookies.
              </p>

              <h3 className="text-white font-helvetica text-xl pt-2">
                Global Privacy Control
              </h3>
              <p>
                We recognize supported opt-out preference signals, including{" "}
                <strong className="text-white">Global Privacy Control (GPC)</strong>, as requests to opt out of the sale or sharing of personal
                information for the browser or device sending the signal. When
                we can associate the signal with an identified consumer, we
                apply it as required by applicable law.
              </p>
              <p>
                A GPC signal takes priority over a conflicting cookie preference
                unless you subsequently provide legally valid consent to change
                that choice.
              </p>
              <p>We do not respond to other browser “Do Not Track” signals.</p>
              <p>
                If you permit advertising technologies, third parties may
                collect information about your online activities over time and
                across different websites.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-white font-helvetica text-2xl mb-4">
                5. Disclosure, Sale and Sharing of Personal Information
              </h2>
              <p>
                We do not sell personal information for money. Certain
                disclosures through advertising technologies may nevertheless
                constitute a “sale” or “sharing” under California law, including
                sharing for cross-context behavioral advertising.
              </p>
              <p>
                The following describes our disclosure practices during the
                preceding 12 months, where applicable:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="py-3 pr-4 text-white font-helvetica font-normal align-bottom">
                        Personal information category
                      </th>
                      <th className="py-3 pr-4 text-white font-helvetica font-normal align-bottom">
                        Recipients for business purposes
                      </th>
                      <th className="py-3 text-white font-helvetica font-normal align-bottom">
                        Sale or sharing through advertising technologies
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10 align-top">
                      <td className="py-3 pr-4">
                        Identifiers and contact information
                      </td>
                      <td className="py-3 pr-4">
                        Hosting, communications, intake, information technology,
                        security and other operational service providers
                      </td>
                      <td className="py-3">
                        Online identifiers and IP addresses may be disclosed to
                        advertising networks and social media advertising
                        platforms when permitted by your choices
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 align-top">
                      <td className="py-3 pr-4">
                        Inquiry and communication information
                      </td>
                      <td className="py-3 pr-4">
                        Intake, communications, document storage and other
                        service providers assisting with your inquiry or legal
                        services
                      </td>
                      <td className="py-3">
                        We do not sell or share the contents of your legal
                        inquiry for cross-context behavioral advertising
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 align-top">
                      <td className="py-3 pr-4">Internet and device activity</td>
                      <td className="py-3 pr-4">
                        Hosting, analytics, security and information technology
                        providers
                      </td>
                      <td className="py-3">
                        May be disclosed to advertising networks and social
                        media advertising platforms when permitted by your
                        choices
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 align-top">
                      <td className="py-3 pr-4">Approximate location</td>
                      <td className="py-3 pr-4">
                        Hosting, analytics and security providers
                      </td>
                      <td className="py-3">
                        General location associated with online activity may be
                        disclosed to advertising partners when permitted by your
                        choices
                      </td>
                    </tr>
                    <tr className="border-b border-white/10 align-top">
                      <td className="py-3 pr-4">Preferences</td>
                      <td className="py-3 pr-4">
                        Providers that administer subscriptions, communications
                        and privacy choices
                      </td>
                      <td className="py-3">
                        Not sold or shared for cross-context behavioral
                        advertising
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="py-3 pr-4">
                        Sensitive personal information
                      </td>
                      <td className="py-3 pr-4">
                        Service providers and other recipients when necessary to
                        evaluate or provide requested legal services or comply
                        with applicable obligations
                      </td>
                      <td className="py-3">
                        Not sold or shared for cross-context behavioral
                        advertising
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Service providers and contractors may process information on our
                behalf under agreements restricting their use and disclosure as
                required by applicable law. A provider’s classification depends
                on its actual role and contractual obligations.
              </p>
              <p>We may also disclose information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  To co-counsel, referral counsel, experts or other participants
                  in a legal matter when authorized or otherwise permitted by
                  applicable law and professional obligations.
                </li>
                <li>
                  When required by applicable law, a valid court order or other
                  enforceable legal process.
                </li>
                <li>
                  When reasonably necessary to protect rights, safety or
                  security, subject to applicable confidentiality and
                  professional obligations.
                </li>
                <li>
                  In connection with a lawful reorganization, merger or transfer
                  of a law practice or assets, subject to applicable privacy,
                  confidentiality, notice and consent requirements.
                </li>
              </ul>
              <p>
                We do not knowingly sell or share personal information of
                consumers under age 16.
              </p>
              <p>
                We do not disclose personal information to third parties for
                their own direct marketing except as described above concerning
                advertising technologies. We do not share mobile telephone
                numbers or text-message consent with third parties or affiliates
                for their own marketing.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-white font-helvetica text-2xl mb-4">
                6. Retention
              </h2>
              <p>
                We retain personal information only for as long as reasonably
                necessary for the purposes described in this Policy, unless a
                longer period is required or permitted by law.
              </p>
              <p>We determine retention periods using the following criteria:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-white">
                    Consultation and intake information:
                  </strong>{" "}
                  The time needed to evaluate and respond to an inquiry, document
                  its disposition, maintain appropriate conflict records, address
                  potential claims and satisfy legal or professional obligations.
                </li>
                <li>
                  <strong className="text-white">Client information:</strong> The
                  duration of the representation and the applicable
                  file-retention period, considering our engagement agreement and
                  legal and professional obligations.
                </li>
                <li>
                  <strong className="text-white">
                    Newsletter and marketing information:
                  </strong>{" "}
                  The duration of your subscription or permitted marketing
                  relationship. We may retain limited suppression records after
                  an opt-out to ensure we respect your choice.
                </li>
                <li>
                  <strong className="text-white">
                    Website, cookie and analytics information:
                  </strong>{" "}
                  The period reasonably needed for security, Website operation,
                  analytics or permitted advertising, considering the
                  technology’s configured lifespan, our account retention
                  settings and your choices.
                </li>
                <li>
                  <strong className="text-white">
                    Privacy requests and consent records:
                  </strong>{" "}
                  The period needed to document and demonstrate compliance with
                  applicable requirements.
                </li>
              </ul>
              <p>
                We may retain information longer when necessary for a litigation
                hold, legal proceeding, regulatory requirement or other
                applicable legal exception. When information is no longer
                needed, we delete, deidentify or otherwise dispose of it
                appropriately.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-white font-helvetica text-2xl mb-4">
                7. California Privacy Rights
              </h2>
              <p>
                Subject to the scope of applicable law and relevant exceptions,
                California residents may have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-white">Know and access:</strong>{" "}
                  Request the categories and specific pieces of personal
                  information we maintain, the categories of sources, the
                  purposes for collection, sale or sharing, and the categories of
                  recipients.
                </li>
                <li>
                  <strong className="text-white">Delete:</strong> Request
                  deletion of personal information, subject to applicable
                  exceptions.
                </li>
                <li>
                  <strong className="text-white">Correct:</strong> Request
                  correction of inaccurate personal information.
                </li>
                <li>
                  <strong className="text-white">Opt out of sale or sharing:</strong>{" "}
                  Direct us not to sell or share personal information, including
                  for cross-context behavioral advertising.
                </li>
                <li>
                  <strong className="text-white">
                    Limit certain uses of sensitive personal information:
                  </strong>{" "}
                  This right applies when sensitive personal information is used
                  or disclosed for purposes beyond those permitted by law. We do
                  not use or disclose it for those additional purposes.
                </li>
                <li>
                  <strong className="text-white">Receive equal treatment:</strong>{" "}
                  Exercise applicable privacy rights without unlawful
                  discrimination or retaliation.
                </li>
              </ul>
              <p>
                Some information may be exempt from a request, including when
                necessary to preserve privilege, comply with legal obligations or
                protect other legally recognized interests. Professional
                confidentiality does not create a blanket exemption for all
                information we maintain.
              </p>

              <h3 className="text-white font-helvetica text-xl pt-2">
                How to Submit a Request
              </h3>
              <p>
                You may submit access, deletion or correction requests by:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Calling{" "}
                  <a href="tel:+18888047858" className={linkClass}>
                    888-804-7858
                  </a>.
                </li>
                <li>
                  Emailing{" "}
                  <a href="mailto:info@oakwoodlegal.com" className={linkClass}>
                    info@oakwoodlegal.com
                  </a>, with “Privacy Request” in the subject line.
                </li>
              </ul>
              <p>
                To opt out of sale or sharing, use{" "}
                <Link href="/do-not-sell" className={linkClass}>
                  “Do Not Sell or Share My Personal Information”
                </Link>{" "}
                in the Website footer, enable GPC, or contact us using the
                methods above. You may also manage Website technologies through{" "}
                <strong className="text-white">“Cookie Settings.”</strong>
              </p>

              <h3 className="text-white font-helvetica text-xl pt-2">
                Verification and Authorized Agents
              </h3>
              <p>
                For access, deletion and correction requests, we may verify your
                identity by matching information you provide with information we
                already maintain. We request only information reasonably
                necessary for verification and use it only for permitted
                verification, security and compliance purposes.
              </p>
              <p>
                We do not require identity verification for a sale or sharing
                opt-out. We may request limited information needed to identify
                the information or activity to which your request applies.
              </p>
              <p>
                You may use an authorized agent. We may require evidence of the
                agent’s authority and, when permitted by law, direct confirmation
                of your identity or authorization. Different requirements may
                apply to an agent acting under a valid power of attorney.
              </p>

              <h3 className="text-white font-helvetica text-xl pt-2">
                Response Times
              </h3>
              <p>
                We acknowledge access, deletion and correction requests within{" "}
                <strong className="text-white">10 business days</strong> and
                generally respond within{" "}
                <strong className="text-white">45 calendar days</strong> of
                receipt. When legally permitted and reasonably necessary, we may
                extend the response period by an additional 45 calendar days and
                explain the reason.
              </p>
              <p>
                We process sale and sharing opt-outs as soon as feasibly
                possible and no later than{" "}
                <strong className="text-white">15 business days</strong>, or
                sooner when required by law.
              </p>
              <p>
                If we deny all or part of a request, we explain the applicable
                basis unless prohibited by law. Requests are generally free of
                charge, subject to legally permitted exceptions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-white font-helvetica text-2xl mb-4">
                8. Residents of Other States
              </h2>
              <p>
                Residents of other states may have privacy rights under laws
                applicable to their information and our activities. These may
                include rights to access, correct or delete information, obtain a
                portable copy, or opt out of certain advertising or processing
                activities.
              </p>
              <p>
                Contact{" "}
                <a href="mailto:info@oakwoodlegal.com" className={linkClass}>
                  info@oakwoodlegal.com
                </a>{" "}
                to exercise applicable rights. If applicable law provides a right
                to appeal a denied request, you may submit an appeal to that
                address with “Privacy Appeal” in the subject line.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-white font-helvetica text-2xl mb-4">
                9. Email, Calls and Text Messages
              </h2>
              <p>
                Submitting a consultation form does not, by itself, provide
                consent to marketing calls or texts. We may contact you
                concerning your requested consultation or legal services as
                permitted by applicable law.
              </p>
              <p>
                When legally required, marketing calls or texts using automated
                technology or an artificial or prerecorded voice require separate
                consent. Any such consent is optional and is not a condition of
                purchasing or retaining legal services.
              </p>
              <p>
                For text messages, message frequency varies and message and data
                rates may apply. Reply{" "}
                <strong className="text-white">STOP</strong> to opt out or{" "}
                <strong className="text-white">HELP</strong> for help. You may
                also contact us at{" "}
                <a href="tel:+18888047858" className={linkClass}>
                  888-804-7858
                </a>{" "}
                or{" "}
                <a href="mailto:info@oakwoodlegal.com" className={linkClass}>
                  info@oakwoodlegal.com
                </a>.
              </p>
              <p>
                Marketing emails include an unsubscribe method. Unsubscribing
                from marketing does not prevent communications reasonably
                necessary to respond to an inquiry, provide requested services or
                meet legal obligations.
              </p>
              <p>
                We do not share mobile telephone numbers or text-message consent
                with third parties or affiliates for their own marketing.
                Providers assisting us with communications may process this
                information solely for permitted service purposes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-white font-helvetica text-2xl mb-4">
                10. Prospective Clients and Attorney-Client Relationships
              </h2>
              <p>
                Using the Website, submitting a form or requesting a consultation
                does not by itself establish an attorney-client relationship.
                Representation requires our agreement to undertake your matter,
                ordinarily documented in a written engagement agreement.
              </p>
              <p>
                Nevertheless, applicable confidentiality and other professional
                duties may protect information received from a prospective client
                even when representation does not result. Nothing in this Policy
                eliminates those duties.
              </p>
              <p>
                Please provide only the information reasonably necessary for us
                to assess your initial inquiry. Do not submit detailed
                confidential documents or highly sensitive information until we
                explain the appropriate method for doing so.
              </p>
              <p>
                Contacting us does not suspend or extend any filing deadline or
                statute of limitations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-white font-helvetica text-2xl mb-4">
                11. Security
              </h2>
              <p>
                We maintain reasonable administrative, technical and physical
                safeguards designed to protect personal information, including
                encrypted transmission of Website form submissions.
              </p>
              <p>
                No method of transmission or storage is completely secure. We
                cannot guarantee absolute security.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-white font-helvetica text-2xl mb-4">
                12. Children’s Privacy
              </h2>
              <p>
                Our Website is intended for adults seeking information about
                legal services and is not directed to children under age 16.
              </p>
              <p>
                We may receive information about minors from parents, guardians
                or other authorized representatives in connection with legal
                inquiries or services. We handle that information consistently
                with applicable law and professional obligations.
              </p>
              <p>
                If you believe a child has submitted information directly through
                the Website without appropriate authorization, contact us. We
                will review the circumstances and take appropriate action,
                including deletion when required.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-white font-helvetica text-2xl mb-4">
                13. Third-Party Websites
              </h2>
              <p>
                Our Website may link to websites or services operated by others.
                Their information practices are governed by their own policies.
                We encourage you to review those policies before providing
                information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-white font-helvetica text-2xl mb-4">
                14. Changes to This Policy
              </h2>
              <p>
                We review this Policy at least annually and update it as
                necessary to reflect our practices and applicable requirements.
                The effective date above identifies the latest revision.
              </p>
              <p>
                We will post material changes on the Website and provide
                additional notice or obtain consent when required by law. Changes
                do not authorize uses of previously collected information that
                require additional consent unless that consent is obtained.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-white font-helvetica text-2xl mb-4">
                15. Contact Us
              </h2>
              <p>
                <strong className="text-white">Oakwood Legal Group, LLP</strong>
                <br />
                8124 W. 3rd St., 2nd Floor
                <br />
                Los Angeles, CA 90048
              </p>
              <p>
                <strong className="text-white">Toll-free:</strong>{" "}
                <a href="tel:+18888047858" className={linkClass}>
                  888-804-7858
                </a>
                <br />
                <strong className="text-white">Email:</strong>{" "}
                <a href="mailto:info@oakwoodlegal.com" className={linkClass}>
                  info@oakwoodlegal.com
                </a>
                <br />
                <strong className="text-white">Website:</strong>{" "}
                <a
                  href="https://www.oakwoodlegal.com/"
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.oakwoodlegal.com
                </a>
              </p>
            </section>
          </div>
        </article>
      </div>
    </section>
  );
}
