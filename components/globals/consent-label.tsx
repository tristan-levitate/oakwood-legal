import Link from "next/link";

export default function ConsentLabel() {
  return (
    <>
      By checking this box, I electronically sign and agree that Oakwood Legal
      Group, LLP may call and text me at the telephone number provided about my
      inquiry and related legal services, including using an automatic telephone
      messaging system. Consent is optional and is not a condition of purchasing
      or retaining legal services. Message frequency varies. Message and data
      rates may apply. Reply STOP to opt out of texts or HELP for help. You may
      also withdraw consent by calling 888-804-7858. See our{" "}
      <Link
        href="/privacy-policy"
        className="underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </Link>
      .
    </>
  );
}
