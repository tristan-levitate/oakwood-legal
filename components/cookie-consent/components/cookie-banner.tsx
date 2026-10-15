"use client";

import { useState } from "react";

import CookieOverlay from "./cookie-overlay";

import styles from "@/styles/components/cookie-consent/cookie-banner.module.css";

import type { ConsentAction, CookiePreferences } from "@/utils/cookie-consent";

interface CookieBannerProps {
    onConsentSave: (preferences: CookiePreferences, action: ConsentAction) => void;
}

export default function CookieBanner({ onConsentSave }: CookieBannerProps) {

    const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

    const handleAcceptAll = () => {

        onConsentSave({
            necessary: true,
            measurement: true,
            marketing: true,
            explicitMarketing: true,
        }, "acceptAll");

    };

    return (

        <>

            <div className={styles.cookieBanner}>

                <div className={styles.cookieBannerContainer}>

                    <p>
                        We use cookies to ensure you get the best experience on our website. By clicking "Accept all", you agree to the use of cookies.
                    </p>

                    <div className={styles.cookieOverlayButtons}>

                        <button
                            type="button"
                            className={styles.btnAccept}
                            onClick={handleAcceptAll}
                        >

                            Accept all

                        </button>

                        <button
                            type="button"
                            className={styles.btnManage}
                            onClick={() => setIsPreferencesOpen(true)}
                        >

                            Manage preferences

                        </button>

                    </div>

                </div>

            </div>

            <CookieOverlay
                isOpen={isPreferencesOpen}
                onClose={() => setIsPreferencesOpen(false)}
                onConsentSave={onConsentSave}
            />

        </>

    );

}
