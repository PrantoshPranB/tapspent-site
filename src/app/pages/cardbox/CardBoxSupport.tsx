import { Link } from "react-router";
import { DocPage, type DocSection } from "../../components/DocPage";
import { cardbox, paths } from "../../products";

const p = paths(cardbox);

const sections: DocSection[] = [
  {
    heading: "We're here to help",
    body: "Have a question, found a bug, or want CardBox to handle a card type it doesn't recognise yet? Tell us — we'd like to hear it.",
  },
  {
    heading: "Email Us",
    body: (
      <>
        Send your questions or feedback to{" "}
        <a
          href={`mailto:${cardbox.supportEmail}`}
          className="font-semibold underline hover:opacity-100"
          style={{ color: cardbox.accent }}
        >
          {cardbox.supportEmail}
        </a>
        . We typically respond within 1–2 business days.
      </>
    ),
  },
  {
    heading: "Never Send Us a Card",
    body: (
      <>
        CardBox keeps your cards on your device and we have no way to see them — which also means we
        cannot look at yours to diagnose a problem. When you write in, describe what happened and
        which card type was involved, but please never attach a photo of a real card, an exported
        PDF, or a backup file. Our{" "}
        <Link
          to={p.privacy}
          className="underline hover:opacity-100"
          style={{ color: cardbox.accent }}
        >
          Privacy Policy
        </Link>{" "}
        explains why there is nothing on our end to look at.
      </>
    ),
  },
  {
    heading: "Lost Cards",
    body: "Because nothing is stored on a server, we cannot restore cards lost to a deleted app or a reset device. If you have a backup file saved through Files, import it from Settings → Import Backup.",
  },
];

export default function CardBoxSupport() {
  return (
    <DocPage
      product={cardbox}
      title="Support"
      description="Need help with CardBox? Get in touch with our support team."
      sections={sections}
      lastUpdated="August 2026"
    />
  );
}
