"use client";

import { useEffect } from "react";
import "../lp.css";

const PHONE_DISPLAY = "888-804-7858";
const PHONE_HREF = "tel:+18888047858";

const STEPS = [
  {
    title: "We review your details",
    body: "An attorney personally reviews what you shared, usually within a few hours.",
  },
  {
    title: "We call you",
    body: "Expect a call from our team within one business day to talk through your situation.",
  },
  {
    title: "We discuss your options",
    body: "Your consultation is free, confidential, and comes with no obligation.",
  },
];

export default function ThankYouPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "form_submission_success" });
    }
  }, []);

  return (
    <div
      className="lp-root"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
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

      <section
        className="hero"
        aria-labelledby="ty-heading"
        style={{
          flex: "1 0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="hero-glow" aria-hidden="true" />
        <div
          className="hero-inner"
          style={{
            textAlign: "center",
            paddingTop: 32,
            paddingBottom: 32,
            width: "100%",
          }}
        >
          <div
            style={{
              margin: "0 auto 20px",
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: "#16a34a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 id="ty-heading">Thank you. Your request is in.</h1>
          <p className="hero-sub" style={{ margin: "0 auto 36px" }}>
            An attorney from Oakwood Legal Group will review your situation and
            call you within one business day. Everything you shared is completely
            confidential.
          </p>

          <ol
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 auto 36px",
              maxWidth: 920,
              display: "grid",
              gap: 16,
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              textAlign: "left",
            }}
          >
            {STEPS.map((step, i) => (
              <li
                key={step.title}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 8,
                  padding: "20px 22px",
                }}
              >
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: "#b91c1c",
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 12,
                  }}
                  aria-hidden="true"
                >
                  {i + 1}
                </div>
                <h2
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#fff",
                    margin: "0 0 6px",
                  }}
                >
                  {step.title}
                </h2>
                <p
                  style={{
                    fontSize: 13.5,
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.72)",
                    margin: 0,
                  }}
                >
                  {step.body}
                </p>
              </li>
            ))}
          </ol>

          <div className="hero-cta-group" style={{ justifyContent: "center" }}>
            <a href={PHONE_HREF} className="btn-primary">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.29 9.82a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              Prefer to talk now? Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <footer style={{ flexShrink: 0 }}>
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
