"use client";

import { useEffect, useState } from "react";

import { GTMHead } from "@/components/GTM";
import { Tracking } from "@/components/Tracking";

import CookieBanner from "./components/cookie-banner";

import { logCookieConsent } from "@/app/actions/consent";

import {
    getCookieConsent,
    hasMarketingConsent,
    setCookieConsent,
    type ConsentAction,
    type CookiePreferences,
} from "@/utils/cookie-consent";

export default function CookieConsent() {

    const [preferences, setPreferences] = useState<CookiePreferences | null>(null);

    const [hasCheckedConsent, setHasCheckedConsent] = useState(false);

    useEffect(() => {

        setPreferences(getCookieConsent());

        setHasCheckedConsent(true);

    }, []);

    const handleConsentSave = (nextPreferences: CookiePreferences, action: ConsentAction) => {

        const savedPreferences = {
            necessary: true,
            measurement: Boolean(nextPreferences.measurement),
            marketing: Boolean(nextPreferences.marketing),
        };

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
