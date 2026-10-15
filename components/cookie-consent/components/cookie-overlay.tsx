"use client";

import { useEffect, useRef, useState } from "react";

import styles from "@/styles/components/cookie-consent/cookie-preferences.module.css";

import { defaultCookiePreferences, type ConsentAction, type CookiePreferences } from "@/utils/cookie-consent";

interface CookieOverlayProps {
    isOpen: boolean;
    onClose: () => void;
    onConsentSave: (preferences: CookiePreferences, action: ConsentAction) => void;
}

export default function CookieOverlay({ isOpen, onClose, onConsentSave }: CookieOverlayProps) {

    const dialogRef = useRef<HTMLDialogElement>(null);

    const [preferences, setPreferences] = useState<CookiePreferences>(defaultCookiePreferences);

    useEffect(() => {

        const dialog = dialogRef.current;

        if (!dialog) {

            return;

        }

        if (isOpen && !dialog.open) {

            setPreferences(defaultCookiePreferences);

            dialog.showModal();

            return;

        }

        if (!isOpen && dialog.open) {

            dialog.close();

        }

    }, [isOpen]);

    const handleToggle = (name: "measurement" | "marketing") => {

        setPreferences((currentPreferences) => ({
            ...currentPreferences,
            [name]: !currentPreferences[name],
        }));

    };

    const handleSavePreferences = () => {

        onConsentSave(preferences, "savePreferences");

        onClose();

    };

    const handleRejectAll = () => {

        onConsentSave({
            necessary: true,
            measurement: false,
            marketing: false,
            explicitMarketing: false,
        }, "rejectAll");

        onClose();

    };

    return (

        <dialog
            ref={dialogRef}
            className={styles.cookiePreferences}
            aria-labelledby="cookiePreferencesTitle"
            onClose={onClose}
        >

            <div className={styles.cookiePreferencesContainer}>

                <div className={styles.cookiePreferencesHeader}>

                    <h2 id="cookiePreferencesTitle">
                        Cookie Preferences
                    </h2>

                    <button
                        type="button"
                        className={styles.cookiePreferencesClose}
                        onClick={onClose}
                        aria-label="Close cookie preferences"
                    >

                        <svg viewBox="0 0 24 24" aria-hidden="true">

                            <path
                                d="M6 6l12 12M18 6L6 18"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.75"
                                strokeLinecap="round"
                            />

                        </svg>

                    </button>

                </div>

                <div className={styles.cookieItemContent}>

                    <div className={styles.cookieItem} data-name="necessary">

                        <h3 id="cookieNecessaryLabel">
                            Necessary
                        </h3>

                        <p>
                            These cookies are essential in order to use the website and use its features.
                        </p>

                        <div className={styles.cookieItemToggle}>

                            <input
                                type="checkbox"
                                name="necessary"
                                id="necessary"
                                aria-labelledby="cookieNecessaryLabel"
                                checked
                                disabled
                                readOnly
                            />

                        </div>

                    </div>

                    <div className={styles.cookieItem} data-name="measurement">

                        <h3 id="cookieMeasurementLabel">
                            Measurement
                        </h3>

                        <p>
                            These cookies are used to measure the performance of the website and help us improve it.
                        </p>

                        <div className={styles.cookieItemToggle}>

                            <input
                                type="checkbox"
                                name="measurement"
                                id="measurement"
                                aria-labelledby="cookieMeasurementLabel"
                                checked={preferences.measurement}
                                onChange={() => handleToggle("measurement")}
                            />

                        </div>

                    </div>

                    <div className={styles.cookieItem} data-name="marketing">

                        <h3 id="cookieMarketingLabel">
                            Marketing
                        </h3>

                        <p>
                            These cookies are used to track your activity on the website and to personalize the content and ads you see.
                        </p>

                        <div className={styles.cookieItemToggle}>

                            <input
                                type="checkbox"
                                name="marketing"
                                id="marketing"
                                aria-labelledby="cookieMarketingLabel"
                                checked={preferences.marketing}
                                onChange={() => handleToggle("marketing")}
                            />

                        </div>

                    </div>

                </div>

                <div className={styles.cookieItemFooter}>

                    <div className={styles.buttons}>

                        <button
                            type="button"
                            className={styles.save}
                            onClick={handleSavePreferences}
                        >

                            Save preferences

                        </button>

                        <button
                            type="button"
                            className={styles.reject}
                            onClick={handleRejectAll}
                        >

                            Reject all

                        </button>

                    </div>

                </div>

            </div>

        </dialog>

    );

}
