export const cookieConsentName = "cookieConsent";

export const cookieConsentMaxAgeSeconds = 60 * 60 * 24 * 182;

export type CookiePreferences = {
    necessary: boolean;
    measurement: boolean;
    marketing: boolean;
};

export type ConsentAction = "acceptAll" | "rejectAll" | "savePreferences" | "optOut";

export const defaultCookiePreferences: CookiePreferences = {
    necessary: true,
    measurement: false,
    marketing: false,
};

export function parseCookieConsent(rawValue: string | undefined | null): CookiePreferences | null {

    if (!rawValue) {

        return null;

    }

    try {

        const preferences = JSON.parse(decodeURIComponent(rawValue));

        if (
            typeof preferences !== "object"
            || preferences === null
            || typeof preferences.necessary !== "boolean"
            || typeof preferences.measurement !== "boolean"
            || typeof preferences.marketing !== "boolean"
        ) {

            return null;

        }

        return {
            necessary: true,
            measurement: preferences.measurement,
            marketing: preferences.marketing,
        };

    } catch {

        return null;

    }

}

export function getCookieConsent(): CookiePreferences | null {

    if (typeof document === "undefined") {

        return null;

    }

    const cookieEntry = document.cookie
        .split("; ")
        .find((entry) => entry.startsWith(`${cookieConsentName}=`));

    if (!cookieEntry) {

        return null;

    }

    return parseCookieConsent(cookieEntry.slice(cookieConsentName.length + 1));

}

export function setCookieConsent(preferences: CookiePreferences) {

    if (typeof document === "undefined") {

        return;

    }

    const value = encodeURIComponent(JSON.stringify({
        necessary: true,
        measurement: Boolean(preferences.measurement),
        marketing: Boolean(preferences.marketing),
    }));

    document.cookie = [
        `${cookieConsentName}=${value}`,
        `Max-Age=${cookieConsentMaxAgeSeconds}`,
        "Path=/",
        "SameSite=Lax",
    ].join("; ");

}

export function hasMarketingConsent(preferences: CookiePreferences | null) {

    return Boolean(preferences?.marketing);

}
