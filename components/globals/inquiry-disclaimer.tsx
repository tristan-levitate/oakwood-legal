import Link from "next/link";

export default function InquiryDisclaimer({
  className = "",
}: {
  className?: string;
}) {
  return (
    <p
      className={`text-xs leading-snug text-white/70 font-helvetica ${className}`}
    >
      Submitting this form does not, by itself, create an attorney-client
      relationship. Please provide only a brief description of your matter and
      do not include highly sensitive information or confidential documents.
      Submitting an inquiry does not suspend or extend any legal deadline. See
      our{" "}
      <Link
        href="/privacy-policy"
        className="underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </Link>{" "}
      for information about how we handle your information.
    </p>
  );
}
