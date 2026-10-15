"use client";

import { useEffect, useState } from "react";

import { GTMHead } from "@/components/GTM";
import { Tracking } from "@/components/Tracking";

import CookieBanner from "./components/cookie-banner";

import { logCookieConsent } from "@/app/actions/consent";

import {
    applyGlobalPrivacyControl,
    hasLoggedGlobalPrivacyControl,
    hasMarketingConsent,
    isGlobalPrivacyControl,
    markGlobalPrivacyControlLogged,
    pushGoogleConsent,
    readStoredCookieConsent,
    setCookieConsent,
    type ConsentAction,
    type CookiePreferences,
} from "@/utils/cookie-consent";

export default function CookieConsent() {

    const [preferences, setPreferences] = useState<CookiePreferences | null>(null);

    const [hasCheckedConsent, setHasCheckedConsent] = useState(false);

    useEffect(() => {

        const stored = readStoredCookieConsent();
        const gpcEnabled = isGlobalPrivacyControl();
        const resolved = applyGlobalPrivacyControl(stored, gpcEnabled);

        if (gpcEnabled && stored?.marketing && !stored.explicitMarketing && resolved) {

            setCookieConsent(resolved);

            void logCookieConsent(
                resolved,
                "gpc",
                window.location.href
            );

        } else if (gpcEnabled && !stored && !hasLoggedGlobalPrivacyControl()) {

            markGlobalPrivacyControlLogged();

            void logCookieConsent(
                {
                    necessary: true,
                    measurement: false,
                    marketing: false,
                    explicitMarketing: false,
                },
                "gpc",
                window.location.href
            );

        }

        pushGoogleConsent(resolved);

        setPreferences(resolved);

        setHasCheckedConsent(true);

    }, []);

    const handleConsentSave = (nextPreferences: CookiePreferences, action: ConsentAction) => {

        const savedPreferences = {
            necessary: true,
            measurement: Boolean(nextPreferences.measurement),
            marketing: Boolean(nextPreferences.marketing),
            explicitMarketing: Boolean(nextPreferences.marketing),
        };

        pushGoogleConsent(savedPreferences);

        setCookieConsent(savedPreferences);

        setPreferences(savedPreferences);

        void logCookieConsent(
            savedPreferences,
            action,
            window.location.href
        );

    };

    if (!hasCheckedConsent) {

        return null;

    }

    return (

        <>

            {hasMarketingConsent(preferences) ? (

                <>

                    <GTMHead />

                    <Tracking.OpenAI />

                    {/* GA4 not running. NEXT_PUBLIC_GA4_ID is not set in production. The Google tag is loaded by the GTM container instead. */}
                    {/* {process.env.NEXT_PUBLIC_GA4_ID ? (

                        <Tracking.GA4 GA4_ID={process.env.NEXT_PUBLIC_GA4_ID} />

                    ) : null} */}

                    {/* Meta Pixel not running. NEXT_PUBLIC_META_PIXEL_ID is not set in production, and the GTM container has no Meta tag. */}
                    {/* {process.env.NEXT_PUBLIC_META_PIXEL_ID ? (

                        <Tracking.Meta META_PIXEL_ID={process.env.NEXT_PUBLIC_META_PIXEL_ID} />

                    ) : null} */}

                    {/* CallRail script not running. NEXT_PUBLIC_CALL_RAIL_SRC is not set in production. CallRail swap.js is loaded by the GTM container instead. */}
                    {/* {process.env.NEXT_PUBLIC_CALL_RAIL_SRC ? (

                        <Tracking.CallRail CALL_RAIL_SRC={process.env.NEXT_PUBLIC_CALL_RAIL_SRC} />

                    ) : null} */}

                    <Tracking.VercelInsights />

                    <Tracking.VercelAnalytics />

                </>

            ) : null}

            {!preferences ? (

                <CookieBanner onConsentSave={handleConsentSave} />

            ) : null}

        </>

    );

}
