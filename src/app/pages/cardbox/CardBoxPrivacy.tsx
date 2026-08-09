import { DocPage, type DocSection } from "../../components/DocPage";
import { cardbox } from "../../products";

const sections: DocSection[] = [
  {
    heading: "What We Collect",
    body: "Nothing. CardBox has no servers, no accounts, and no analytics. We do not receive your cards, your card numbers, your photos, your name, your email address, your device identifiers, or any record of how you use the app. There is no data for us to sell, share, lose, or hand over, because none of it ever reaches us.",
  },
  {
    heading: "No Network Connection",
    body: "CardBox contains no networking code. It makes no requests to any server — ours or anyone else's. There is no analytics, no crash reporting, no advertising, no third-party SDK, and no cloud sync. Nothing about you or your cards is transmitted anywhere.",
  },
  {
    heading: "No Account Required",
    body: "There is no sign-up, no sign-in, and no profile. CardBox never asks for your name, email address, or phone number, and there is nowhere for us to store them even if it did.",
  },
  {
    heading: "Where Your Cards Live",
    body: "Card images and the fields attached to them are stored only on your iPhone, inside CardBox's own app storage, protected by your device's encryption. We have no copy, no access, and no way to recover them for you. If you delete CardBox, your cards are deleted with it.",
  },
  {
    heading: "Camera & Photo Library",
    body: (
      <>
        <p>
          CardBox requests camera access only when you scan a card. You can revoke it at any time in
          iOS Settings → CardBox.
        </p>
        <p>
          When you add a card from your photo library instead, CardBox uses Apple's system photo
          picker. The picker runs outside the app and hands CardBox only the single image you select —
          CardBox never has access to the rest of your library and never asks for permission to it.
          Either way, the photo is straightened and processed on your device and is never uploaded.
        </p>
      </>
    ),
  },
  {
    heading: "On-Device Recognition",
    body: "CardBox reads the details on a card using Apple's Vision framework, which runs entirely on your iPhone. The image and the text extracted from it are not sent to CardBox's servers, Apple's servers, or any third party.",
  },
  {
    heading: "App Lock",
    body: "You can require Face ID, Touch ID, or your device passcode before CardBox opens, before a card is shared, and before a backup is imported. This is handled by iOS. CardBox is told only whether authentication succeeded — your face, fingerprint, and passcode never leave the Secure Enclave and are never visible to the app.",
  },
  {
    heading: "Sharing a Card",
    body: "When you choose to share a card, CardBox encrypts it with AES-GCM behind a 6-digit passcode that you set and pass to the recipient separately. The encrypted file travels by whatever method you pick — Messages, AirDrop, email — and CardBox is not involved in its delivery. Anyone who has both the file and the passcode can open it, so share the passcode carefully.",
  },
  {
    heading: "PDF Export",
    body: "Exporting a card produces a PDF on your device. A PDF is an ordinary document with no encryption: once you save or send it, its contents are readable by anyone who has it. You choose where it goes.",
  },
  {
    heading: "Backup to Files",
    body: (
      <>
        <p>
          The backup feature writes your cards to a file through Apple's Files app.{" "}
          <strong className="font-semibold">This backup file is not encrypted</strong> — it contains
          your card images and details in readable form, so treat it like the cards themselves and
          keep it somewhere you trust.
        </p>
        <p>
          You choose the destination — including iCloud Drive, if you want your cards available across
          your devices. Anything you place in iCloud Drive is then governed by Apple's iCloud terms and
          privacy policy, not ours.
        </p>
      </>
    ),
  },
  {
    heading: "In-App Purchases",
    body: "CardBox Plus is an optional one-time purchase through the App Store. Apple processes the transaction. CardBox never sees or stores your payment details.",
  },
  {
    heading: "Children",
    body: "CardBox is not directed at children and collects no information from anyone, regardless of age.",
  },
  {
    heading: "Changes to This Policy",
    body: "If this policy changes, we will update it in the app and on this website. Since CardBox collects no data, changes are likely to be minor.",
  },
  {
    heading: "Contact",
    body: (
      <p>
        Questions about privacy? Write to{" "}
        <a
          href={`mailto:${cardbox.supportEmail}`}
          className="font-semibold underline"
          style={{ color: cardbox.accent }}
        >
          {cardbox.supportEmail}
        </a>
        .
      </p>
    ),
  },
];

export default function CardBoxPrivacy() {
  return (
    <DocPage
      product={cardbox}
      title="Privacy Policy"
      description="CardBox Privacy Policy. CardBox has no servers, no accounts, and no analytics — your cards never leave your iPhone unless you send them."
      intro={
        <p>
          CardBox is a wallet for the cards you carry. This policy explains what happens to them, and
          it is short for a simple reason: CardBox does not collect anything.
        </p>
      }
      sections={sections}
      lastUpdated="9 August 2026"
    />
  );
}
