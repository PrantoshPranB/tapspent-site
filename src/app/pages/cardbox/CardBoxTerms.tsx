import { DocPage, type DocSection } from "../../components/DocPage";
import { cardbox } from "../../products";

const sections: DocSection[] = [
  {
    heading: "Acceptance of Terms",
    body: "By downloading, installing, or using CardBox, you agree to these terms. If you do not agree, please do not use the app.",
  },
  {
    heading: "Use of the App",
    body: "CardBox is a personal tool for keeping copies of the cards in your own wallet. You are responsible for the cards you choose to store and for having the right to store them. Do not use CardBox to hold cards or identity documents belonging to someone else without their permission.",
  },
  {
    heading: "Copies Are Not Originals",
    body: "A photograph of an identity document, driving licence, or payment card stored in CardBox is a copy for your own reference. It is not a legally valid substitute for the original, and no bank, government body, transit operator, or merchant is obliged to accept it. Continue to carry the originals wherever they are required.",
  },
  {
    heading: "Recognition Accuracy",
    body: "CardBox uses Apple's on-device Vision framework to read details from a card. Results depend on the lighting, focus, layout, and language of the card, and are not guaranteed to be accurate. Review the fields CardBox extracts before you rely on them.",
  },
  {
    heading: "Data Responsibility",
    body: "Your cards are stored only on your device. You are responsible for keeping backups. Deleting the app or resetting your device without a backup will permanently destroy your cards, and we cannot recover them.",
  },
  {
    heading: "Sharing and Passcodes",
    body: "Shared cards are encrypted with a 6-digit passcode that you choose and communicate yourself. You are responsible for who receives a shared card and how you deliver the passcode. Once a card has left your device, we have no way to recall it.",
  },
  {
    heading: "Exported Documents",
    body: "PDFs exported from CardBox are unencrypted by design so they can be opened and printed anywhere. You are responsible for storing and sending them safely.",
  },
  {
    heading: "In-App Purchases",
    body: "CardBox Plus is a one-time purchase, not a subscription. Purchases are handled by Apple's App Store and are subject to Apple's terms, including its refund policy.",
  },
  {
    heading: "Intellectual Property",
    body: "CardBox and all of its content, features, and functionality are owned by the developer and protected by copyright and other intellectual property laws.",
  },
  {
    heading: "Limitation of Liability",
    body: 'CardBox is provided "as is" without warranty of any kind. The developer shall not be liable for any damages arising from the use or inability to use the app, including but not limited to data loss, misread card details, or the disclosure of a card you chose to share or export.',
  },
  {
    heading: "Changes to Terms",
    body: "We reserve the right to update these terms at any time. Continued use of the app after changes constitutes acceptance of the new terms.",
  },
];

export default function CardBoxTerms() {
  return (
    <DocPage
      product={cardbox}
      title="Terms of Use"
      description="CardBox Terms of Use. Read the terms and conditions for using the app."
      sections={sections}
      lastUpdated="August 2026"
    />
  );
}
