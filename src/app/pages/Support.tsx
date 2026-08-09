import { Link } from "react-router";
import { DocPage, type DocSection } from "../components/DocPage";
import { tapspent, paths } from "../products";

const p = paths(tapspent);

const sections: DocSection[] = [
  {
    heading: "We're here to help",
    body: "Have a question, found a bug, or want to share feedback about TapSpent? We'd love to hear from you. Reach out and we'll get back to you as soon as we can.",
  },
  {
    heading: "Email Us",
    body: (
      <>
        Send your questions or feedback to{" "}
        <a
          href={`mailto:${tapspent.supportEmail}`}
          className="font-semibold underline hover:opacity-100"
          style={{ color: tapspent.accent }}
        >
          {tapspent.supportEmail}
        </a>
        . We typically respond within 1–2 business days.
      </>
    ),
  },
  {
    heading: "Privacy First",
    body: (
      <>
        TapSpent stores all your data on your device — we have no access to your expenses or income
        records. Because of this, please include any relevant details when you contact us so we can
        help effectively. To learn more, read our{" "}
        <Link
          to={p.privacy}
          className="underline hover:opacity-100"
          style={{ color: tapspent.accent }}
        >
          Privacy Policy
        </Link>
        .
      </>
    ),
  },
];

export default function Support() {
  return (
    <DocPage
      product={tapspent}
      title="Support"
      description="Need help with TapSpent? Get in touch with our support team."
      sections={sections}
      lastUpdated="July 2026"
    />
  );
}
