"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { submitForm } from "@/app/actions/forms";
import { useGetClientInfo } from "@/utils/useGetClientInfo";
import { Tracking } from "@/components/Tracking";

const PHONE_DISPLAY = "888-804-7858";
const PHONE_HREF = "tel:+18888047858";

const CASE_TYPES = [
  "Sexual harassment",
  "Gender discrimination",
  "Wrongful termination",
  "Workplace discrimination",
  "Retaliation",
  "Forced resignation",
  "FMLA / leave violations",
  "Not sure, need guidance",
];

const CHIPS = [
  "Sexual harassment",
  "Gender discrimination",
  "Wrongful termination",
  "Workplace discrimination",
  "Retaliation",
  "Forced resignation",
  "FMLA / leave violations",
  "Not sure, need guidance",
];

export default function EmploymentLawLP() {
  const router = useRouter();
  const clientInfo = useGetClientInfo();

  const [activeChip, setActiveChip] = useState("Sexual harassment");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    case_type: "",
    description: "",
  });

  const selectCase = (value: string) => {
    setActiveChip(value);
    setForm((f) => ({ ...f, case_type: value }));
    const el = document.getElementById("form");
    const nav = document.querySelector(".nav") as HTMLElement | null;
    const offset = nav ? nav.offsetHeight : 0;
    if (el) window.scrollTo({ top: el.offsetTop - offset, behavior: "smooth" });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!form.name || !form.phone || !form.email || !form.case_type) {
      setErrorMsg("Please fill in your name, phone, email, and case type.");
      return;
    }

    setIsSubmitting(true);
    try {
      const { token } = await Tracking.getRecaptchaToken();

      // Map LP fields to the backend's IContactForm shape.
      const result = await submitForm(
        {
          fullName: form.name,
          email: form.email,
          phone: form.phone,
          legalArea: form.case_type,
          message: form.description || `Case type: ${form.case_type}`,
          newsletter: false,
        },
        "Oakwood Legal Group - Employment Law PPC LP",
        token,
        clientInfo
      );

      if (result.success) {
        if (typeof window !== "undefined") {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: "form_submission_success" });
        }
        router.push("/ca/employment-law/thank-you");
      } else {
        setErrorMsg(
          "Something went wrong submitting your request. Please call us at " +
            PHONE_DISPLAY +
            "."
        );
      }
    } catch (err) {
      console.error("LP form submission error:", err);
      setErrorMsg(
        "Something went wrong submitting your request. Please call us at " +
          PHONE_DISPLAY +
          "."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="lp-root">
      {/* Sticky Mobile Call Bar */}
      <a href={PHONE_HREF} className="sticky-call" aria-label="Call Oakwood Legal Group now">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.29 9.82a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
        <div className="sticky-call-text">
          <span className="sticky-call-label">Call now. Free consultation</span>
          <span className="sticky-call-number">{PHONE_DISPLAY}</span>
        </div>
      </a>

      {/* Nav — logo only (NOT a link to home), plus call CTA */}
      <nav className="nav" aria-label="Site header">
        <span className="nav-logo" aria-label="Oakwood Legal Group">
          <span className="nav-monogram" aria-hidden="true">OLG</span>
          <span className="nav-wordmark">
            <span className="nav-wordmark-top">OAKWOOD</span>
            <span className="nav-wordmark-bottom">LEGAL GROUP</span>
          </span>
        </span>
        <a href={PHONE_HREF} className="nav-cta">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.29 9.82a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
          </svg>
          <span className="nav-cta-text">{PHONE_DISPLAY}</span>
        </a>
      </nav>

      {/* Hero */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-inner">
          <div className="eyebrow">Free confidential consultation</div>
          <h1 id="hero-heading">
            Your employer may have <em>broken the law.</em>
          </h1>
          <p className="hero-sub">
            <strong>
              Sexual harassment. Gender discrimination. Wrongful termination.
              Retaliation.
            </strong>
            <br />
            If you&apos;ve been mistreated at work in Los Angeles or anywhere in
            Southern California, you have rights. Oakwood Legal Group has
            recovered millions for Southern California employees. No fee unless
            we win. Strict deadlines apply.
          </p>
          <div className="hero-cta-group">
            <a href={PHONE_HREF} className="btn-primary">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.29 9.82a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              Call {PHONE_DISPLAY}
            </a>
            <a href="#form" className="btn-secondary">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <polyline points="6 9 12 15 18 9" />
              </svg>
              Get a free case review
            </a>
          </div>
          <p className="hero-fine">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
            Confidential &nbsp;·&nbsp; No obligation &nbsp;·&nbsp; Deadlines
            apply. Act now
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar" role="list" aria-label="Firm credentials">
        <div className="trust-bar-inner">
          <div className="trust-item" role="listitem">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
            Millions Recovered
          </div>
          <div className="trust-item" role="listitem">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.5 2.5l7 7-10 10-7-7z" />
              <path d="M3 21l4.5-4.5" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
            Former DA Prosecutor
          </div>
          <div className="trust-item" role="listitem">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
            </svg>
            No Fee Unless We Win
          </div>
          <div className="trust-item" role="listitem">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            20+ Years Experience
          </div>
        </div>
      </div>

      {/* Attorney Callout */}
      <div className="attorney-bg">
        <div className="attorney-inner">
          <div className="section-label">Who you&apos;re working with</div>
          <div className="attorney-card">
            <img
  src="https://i.imgur.com/IIEExHu.jpeg"
  alt="Elan Zektser"
  className="attorney-avatar"
  style={{ objectFit: "cover", objectPosition: "60% top" }}
/>
            <div className="attorney-info">
              <div className="attorney-name">Elan Zektser</div>
              <div className="attorney-title">Founding Attorney</div>
              <p className="attorney-bio">
                Elan Zektser is a former head of the Sexual Assault District
                Attorney&apos;s Unit with over 170 jury trials to verdict. He
                brings firsthand prosecution experience to every employment case
                he takes, knows how employers and their attorneys think, and
                builds cases that win. When you call Oakwood, you work with Elan
                directly.
              </p>
              <div className="attorney-badges">
                <div className="attorney-badge">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                  Former Head, Sexual Assault DA&apos;s Unit
                </div>
                <div className="attorney-badge">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                  170 Jury Trials to Verdict
                </div>
                <div className="attorney-badge">Harvard-trained</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Bar */}
      <div className="results-bg">
        <div className="results-grid">
          <div>
            <div className="result-num">$4M</div>
            <div className="result-label">Single case result</div>
          </div>
          <div>
            <div className="result-num">$800K</div>
            <div className="result-label">Recent recovery</div>
          </div>
          <div>
            <div className="result-num">170</div>
            <div className="result-label">Jury trials to verdict</div>
          </div>
        </div>
      </div>

      {/* Pain Points */}
      <div className="section-full" style={{ background: "#0f0f0f" }}>
        <div className="section-full-inner">
          <div className="section-label">Does this sound familiar?</div>
          <h2 className="section-h2">You may have a case and not know it</h2>
          <div className="bracket-wrap">
            <p className="section-body">
              Employers count on employees not knowing their rights. If any of
              these situations apply to you, it&apos;s worth a free call to find
              out where you stand.
            </p>
          </div>
          <div className="pain-grid">
            <div className="pain-card featured">
              <div className="pain-card-tag">Priority case type</div>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
              <div className="pain-card-title">Sexual harassment</div>
              <div className="pain-card-body">
                Unwanted advances, hostile work environment, or retaliation for
                reporting harassment
              </div>
            </div>
            <div className="pain-card featured">
              <div className="pain-card-tag">Priority case type</div>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
              </svg>
              <div className="pain-card-title">Gender discrimination</div>
              <div className="pain-card-body">
                Treated unfairly, passed over, or paid less based on your gender
                or identity
              </div>
            </div>
            <div className="pain-card">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <line x1="17" y1="8" x2="23" y2="14" />
                <line x1="23" y1="8" x2="17" y2="14" />
              </svg>
              <div className="pain-card-title">Wrongful termination</div>
              <div className="pain-card-body">
                Fired after reporting misconduct, taking leave, or with no valid
                reason given
              </div>
            </div>
            <div className="pain-card">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <polyline points="1 4 1 10 7 10" />
                <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
              </svg>
              <div className="pain-card-title">Retaliation</div>
              <div className="pain-card-body">
                Demoted, sidelined, or pushed out after filing a complaint or
                taking FMLA
              </div>
            </div>
            <div className="pain-card">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
              <div className="pain-card-title">Workplace discrimination</div>
              <div className="pain-card-body">
                Treated differently due to race, age, disability, religion, or
                national origin
              </div>
            </div>
            <div className="pain-card">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18 8h1a4 4 0 010 8h-1" />
                <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
                <line x1="6" y1="1" x2="6" y2="4" />
                <line x1="10" y1="1" x2="10" y2="4" />
                <line x1="14" y1="1" x2="14" y2="4" />
              </svg>
              <div className="pain-card-title">Forced resignation</div>
              <div className="pain-card-body">
                Pushed out or made conditions so unbearable you had no choice but
                to quit
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Urgency */}
      <div className="urgency" role="alert">
        <div className="urgency-inner">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <p className="urgency-text">
            <strong>
              California law gives you as little as 300 days to file a workplace
              harassment or discrimination claim.
            </strong>{" "}
            Evidence fades and witnesses move on. The sooner you call, the
            stronger your case.
          </p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testi-bg">
        <div className="testi-bg-inner">
          <div className="section-label">Client results</div>
          <h2 className="section-h2">What our former clients say</h2>
          <div className="testi-grid">
            <div className="testi-card">
              <div className="stars" aria-label="5 stars">★★★★★</div>
              <p className="testi-quote">
                &quot;I was afraid to come forward. Elan made the process clear
                from day one and fought hard for me. I received a result I never
                thought was possible.&quot;
              </p>
              <div className="testi-author">
                <div className="testi-avatar" aria-hidden="true">AS</div>
                <div>
                  <div className="testi-name">A. Santos</div>
                  <div className="testi-case">Sexual harassment, Los Angeles</div>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="stars" aria-label="5 stars">★★★★★</div>
              <p className="testi-quote">
                &quot;I was let go the week after I reported my manager. I
                didn&apos;t think I had a case. Oakwood proved me wrong and
                recovered significant compensation on my behalf.&quot;
              </p>
              <div className="testi-author">
                <div className="testi-avatar" aria-hidden="true">MR</div>
                <div>
                  <div className="testi-name">M. Rodriguez</div>
                  <div className="testi-case">Wrongful termination, Long Beach</div>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="stars" aria-label="5 stars">★★★★★</div>
              <p className="testi-quote">
                &quot;I had no idea I had a case until I called. Elan walked me
                through everything and got me a settlement I never expected.
                I&apos;m so glad I made that call.&quot;
              </p>
              <div className="testi-author">
                <div className="testi-avatar" aria-hidden="true">TK</div>
                <div>
                  <div className="testi-name">T. Kim</div>
                  <div className="testi-case">Workplace discrimination, Pasadena</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Oakwood */}
      <div className="why-bg">
        <div className="why-bg-inner">
          <div className="section-label">Why Oakwood</div>
          <h2 className="section-h2">We don&apos;t file claims. We build cases.</h2>
          <div className="why-list">
            <div className="why-item">
              <div className="why-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <div className="why-title">DA prosecution background</div>
                <div className="why-body">
                  As former head of the Sexual Assault DA&apos;s Unit with 170
                  jury trials to verdict, Elan knows how workplace misconduct
                  cases are built, challenged, and won. Case results include a
                  $4M recovery, $800K, and $225K. That prosecution insight is
                  your advantage.
                </div>
              </div>
            </div>
            <div className="why-item">
              <div className="why-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                </svg>
              </div>
              <div>
                <div className="why-title">Strategic from day one</div>
                <div className="why-body">
                  We identify violations early, preserve critical evidence, and
                  build a narrative that maximizes your outcome, whether through
                  settlement or trial.
                </div>
              </div>
            </div>
            <div className="why-item">
              <div className="why-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.29 9.82a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <div className="why-title">Fast, direct response</div>
                <div className="why-body">
                  Our team responds quickly. No waiting weeks to hear back. When
                  you call, you get answers fast so you can make informed
                  decisions about your case.
                </div>
              </div>
            </div>
            <div className="why-item">
              <div className="why-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
              </div>
              <div>
                <div className="why-title">Zero cost until we win</div>
                <div className="why-body">
                  We work on contingency. You pay nothing out of pocket. We only
                  get paid if we recover money for you.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Chips */}
      <div className="chips-bg">
        <div className="chips-bg-inner">
          <div className="section-label">We handle</div>
          <h2 className="section-h2">Select your situation</h2>
          <p className="section-body">
            Tap your case type below. It will pre-fill the form so we can respond
            faster.
          </p>
          <div className="chips-wrap" role="group" aria-label="Case type selector">
            {CHIPS.map((label) => (
              <button
                key={label}
                type="button"
                className={`chip${activeChip === label ? " active" : ""}`}
                onClick={() => selectCase(label)}
              >
                {label === "Not sure, need guidance" ? "Not sure yet" : label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="form-bg" id="form">
        <div className="form-bg-inner">
          <div className="section-label">Get your free case review</div>
          <h2 className="section-h2">Tell us what happened</h2>
          <p className="section-body">
            An attorney will review your situation and follow up fast. Everything
            you share is completely confidential.
          </p>
          <form className="form-grid" id="contact-form" onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="f-name">Full name</label>
              <input
                type="text"
                id="f-name"
                name="name"
                placeholder="Jane Smith"
                autoComplete="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="f-phone">Phone number</label>
              <input
                type="tel"
                id="f-phone"
                name="phone"
                placeholder="(310) 555-0100"
                autoComplete="tel"
                inputMode="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
              />
            </div>
            <div className="field form-full">
              <label htmlFor="f-email">Email address</label>
              <input
                type="email"
                id="f-email"
                name="email"
                placeholder="jane@example.com"
                autoComplete="email"
                inputMode="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div className="field form-full">
              <label htmlFor="f-case">Type of case</label>
              <select
                id="f-case"
                name="case_type"
                value={form.case_type}
                onChange={(e) => {
                  setForm({ ...form, case_type: e.target.value });
                  setActiveChip(e.target.value);
                }}
                required
              >
                <option value="">Select your situation</option>
                {CASE_TYPES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="field form-full">
              <label htmlFor="f-desc">
                Briefly describe what happened{" "}
                <span style={{ color: "rgba(255,255,255,0.28)", fontWeight: 400 }}>
                  (optional)
                </span>
              </label>
              <textarea
                id="f-desc"
                name="description"
                placeholder="A few sentences is fine, e.g. I was let go the week after I reported my manager to HR..."
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
            </div>
            <div className="form-full">
              {errorMsg && <p className="form-error">{errorMsg}</p>}
              <button type="submit" className="btn-submit" disabled={isSubmitting}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                {isSubmitting ? "Sending..." : "Get my free case review"}
              </button>
              <p className="form-fine">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
                Confidential &nbsp;·&nbsp; No obligation
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bottom-cta">
        <div className="bottom-cta-inner">
          <h2>Prefer to speak with someone now?</h2>
          <p>Our team responds fast. Most initial calls take under 10 minutes.</p>
          <a href={PHONE_HREF} className="btn-white">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.29 9.82a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            Call {PHONE_DISPLAY} now
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer-inner">
          <p className="footer-copy">
            © 2026 Oakwood Legal Group &nbsp;·&nbsp; 8124 W 3rd St 2nd Floor, Los
            Angeles CA 90048
            <br />
            Attorney advertisement. Past results do not guarantee future
            outcomes. Results may vary based on your particular facts and legal
            circumstances.
          </p>
        </div>
      </footer>
    </div>
  );
}
