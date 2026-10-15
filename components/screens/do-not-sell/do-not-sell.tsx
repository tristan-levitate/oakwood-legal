"use client";

import { FormEvent, useEffect, useState } from "react";

import { logCookieConsent } from "@/app/actions/consent";
import { submitDataRequest } from "@/app/actions/data-request";
import styles from "@/styles/components/do-not-sell/do-not-sell.module.css";
import {
    getCookieConsent,
    setCookieConsent,
} from "@/utils/cookie-consent";

export default function DoNotSell() {

    const [optedOut, setOptedOut] = useState(false);
    const [isOptingOut, setIsOptingOut] = useState(false);
    const [requestType, setRequestType] = useState<"access" | "delete" | "correct">("access");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [requestSent, setRequestSent] = useState(false);
    const [requestError, setRequestError] = useState("");

    useEffect(() => {

        const saved = getCookieConsent();

        setOptedOut(saved ? saved.marketing === false : false);

    }, []);

    const handleOptOut = async () => {

        setIsOptingOut(true);

        const current = getCookieConsent();
        const savedPreferences = {
            necessary: true,
            measurement: Boolean(current?.measurement),
            marketing: false,
        };

        setCookieConsent(savedPreferences);

        await logCookieConsent(
            savedPreferences,
            "optOut",
            window.location.href
        );

        setOptedOut(true);
        setIsOptingOut(false);
        window.location.reload();

    };

    const handleRequest = async (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        setRequestError("");
        setIsSubmitting(true);

        const result = await submitDataRequest({
            fullName,
            email,
            requestType,
            message,
            pageUrl: window.location.href,
        });

        setIsSubmitting(false);

        if (!result.success) {

            setRequestError(result.error || "Something went wrong.");

            return;

        }

        setRequestSent(true);

    };

    return (

        <article className={styles.page}>

            <p className={styles.kicker}>
                Your privacy choices
            </p>

            <h1 className={styles.title}>
                Do Not Sell or Share My Personal Information
            </h1>

            <p className={styles.copy}>
                Oakwood Legal Group uses advertising tools, including Google Ads, Meta, and OpenAI ads measurement. Those tools can share identifiers such as a cookie or IP address with advertising partners. Under California law, that kind of sharing is covered by this opt-out.
            </p>

            <section className={styles.section}>

                <h2>
                    Opt out of sale or sharing
                </h2>

                <p className={styles.copy}>
                    This turns off marketing and advertising cookies on this browser. Necessary cookies stay on so the site and forms keep working. Measurement cookies stay as you last set them.
                </p>

                {optedOut ? (

                    <p className={styles.confirmation}>
                        Marketing and advertising cookies are off for this browser.
                    </p>

                ) : (

                    <button
                        type="button"
                        className={styles.button}
                        onClick={handleOptOut}
                        disabled={isOptingOut}
                    >

                        Do Not Sell or Share My Personal Information

                    </button>

                )}

            </section>

            <section className={styles.section}>

                <h2>
                    Request your data
                </h2>

                <p className={styles.copy}>
                    You can ask us to provide, correct, or delete the personal information we have about you. We respond within one month. You can also email
                    {" "}
                    <a className={styles.mail} href="mailto:info@oakwoodlegal.com">
                        info@oakwoodlegal.com
                    </a>
                    .
                </p>

                {requestSent ? (

                    <p className={styles.confirmation}>
                        We received your request and will respond within one month.
                    </p>

                ) : (

                    <form className={styles.form} onSubmit={handleRequest}>

                        <label className={styles.field}>

                            <span>
                                Full name
                            </span>

                            <input
                                type="text"
                                name="fullName"
                                value={fullName}
                                onChange={(event) => setFullName(event.target.value)}
                                required
                            />

                        </label>

                        <label className={styles.field}>

                            <span>
                                Email
                            </span>

                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />

                        </label>

                        <label className={styles.field}>

                            <span>
                                Request
                            </span>

                            <select
                                name="requestType"
                                value={requestType}
                                onChange={(event) => setRequestType(event.target.value as "access" | "delete" | "correct")}
                            >

                                <option value="access">
                                    Provide a copy of my information
                                </option>

                                <option value="delete">
                                    Delete my information
                                </option>

                                <option value="correct">
                                    Correct my information
                                </option>

                            </select>

                        </label>

                        <label className={styles.field}>

                            <span>
                                Details
                            </span>

                            <textarea
                                name="message"
                                value={message}
                                onChange={(event) => setMessage(event.target.value)}
                                required
                            />

                        </label>

                        {requestError ? (

                            <p className={styles.error}>
                                {requestError}
                            </p>

                        ) : null}

                        <button
                            type="submit"
                            className={styles.submit}
                            disabled={isSubmitting}
                        >

                            {isSubmitting ? "Sending..." : "Submit request"}

                        </button>

                    </form>

                )}

            </section>

        </article>

    );

}
