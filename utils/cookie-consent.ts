export const cookieConsentName = "cookieConsent";

export const cookieConsentMaxAgeSeconds = 60 * 60 * 24 * 182;

export type CookiePreferences = {
    necessary: boolean;
    measurement: boolean;
    marketing: boolean;
    explicitMarketing: boolean;
};

export type ConsentAction = "acceptAll" | "rejectAll" | "savePreferences" | "optOut" | "gpc";

declare global {
    interface Navigator {
        globalPrivacyControl?: boolean;
    }

    interface Window {
        __gpcHeader?: boolean;
    }
}

export const defaultCookiePreferences: CookiePreferences = {
    necessary: true,
    measurement: false,
    marketing: false,
    explicitMarketing: false,
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
            explicitMarketing: preferences.explicitMarketing === true,
        };

    } catch {

        return null;

    }

}

export function readStoredCookieConsent(): CookiePreferences | null {

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

export function isGlobalPrivacyControl() {

    if (typeof navigator !== "undefined" && navigator.globalPrivacyControl === true) {

        return true;

    }

    return typeof window !== "undefined" && window.__gpcHeader === true;

}

export function applyGlobalPrivacyControl(
    preferences: CookiePreferences | null,
    gpcEnabled = isGlobalPrivacyControl()
) {

    if (!preferences || !gpcEnabled || preferences.explicitMarketing) {

        return preferences;

    }

    return {
        ...preferences,
        marketing: false,
        explicitMarketing: false,
    };

}

export function getCookieConsent() {

    return applyGlobalPrivacyControl(readStoredCookieConsent());

}

export function setCookieConsent(preferences: CookiePreferences) {

    if (typeof document === "undefined") {

        return;

    }

    const value = encodeURIComponent(JSON.stringify({
        necessary: true,
        measurement: Boolean(preferences.measurement),
        marketing: Boolean(preferences.marketing),
        explicitMarketing: Boolean(preferences.explicitMarketing),
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

const gpcHonoredCookieName = "gpcHonored";

export function hasLoggedGlobalPrivacyControl() {

    if (typeof document === "undefined") {

        return false;

    }

    return document.cookie
        .split("; ")
        .some((entry) => entry.startsWith(`${gpcHonoredCookieName}=`));

}

export function markGlobalPrivacyControlLogged() {

    if (typeof document === "undefined") {

        return;

    }

    document.cookie = [
        `${gpcHonoredCookieName}=1`,
        `Max-Age=${cookieConsentMaxAgeSeconds}`,
        "Path=/",
        "SameSite=Lax",
    ].join("; ");

}

export function pushGoogleConsent(preferences: CookiePreferences | null) {

    if (typeof window === "undefined") {

        return;

    }

    window.dataLayer = window.dataLayer || [];

    if (typeof window.gtag !== "function") {

        window.gtag = function gtag() {

            window.dataLayer.push(arguments);

        };

    }

    const marketingGranted = Boolean(preferences?.marketing);
    const measurementGranted = Boolean(preferences?.measurement);

    window.gtag("consent", "update", {
        ad_storage: marketingGranted ? "granted" : "denied",
        ad_user_data: marketingGranted ? "granted" : "denied",
        ad_personalization: marketingGranted ? "granted" : "denied",
        analytics_storage: measurementGranted ? "granted" : "denied",
        functionality_storage: "denied",
        personalization_storage: "denied",
        security_storage: "granted",
    });

}

export function googleConsentDefaultScript(gpcHeader: boolean) {

    const headerSignal = gpcHeader ? "true" : "false";

    return `
window.__gpcHeader = ${headerSignal};
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag("set", "ads_data_redaction", true);
gtag("set", "url_passthrough", true);
gtag("consent", "default", {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
  functionality_storage: "denied",
  personalization_storage: "denied",
  security_storage: "granted",
  wait_for_update: 500
});
try {
  var gpc = window.__gpcHeader === true || navigator.globalPrivacyControl === true;
  var entry = document.cookie.split("; ").find(function (item) {
    return item.indexOf("${cookieConsentName}=") === 0;
  });
  if (entry) {
    var prefs = JSON.parse(decodeURIComponent(entry.slice("${cookieConsentName}=".length)));
    var marketing = prefs.marketing === true && (!gpc || prefs.explicitMarketing === true);
    var measurement = prefs.measurement === true;
    gtag("consent", "update", {
      ad_storage: marketing ? "granted" : "denied",
      ad_user_data: marketing ? "granted" : "denied",
      ad_personalization: marketing ? "granted" : "denied",
      analytics_storage: measurement ? "granted" : "denied",
      functionality_storage: "denied",
      personalization_storage: "denied",
      security_storage: "granted"
    });
  }
} catch (error) {}
`;

}
