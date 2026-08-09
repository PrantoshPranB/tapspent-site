import { DocPage, type DocSection } from "../../components/DocPage";
import { cardbox } from "../../products";

const sections: DocSection[] = [
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
    body: "Card images and the fields attached to them are stored only on your iPhone. We have no copy, no access, and no way to recover them for you.",
  },
  {
    heading: "Camera & Photo Library",
    body: "CardBox requests camera and photo library access only when you add a card. The photo is straightened and processed on your device and is never uploaded. You can revoke either permission at any time in iOS Settings → CardBox.",
  },
  {
    heading: "On-Device Recognition",
    body: "CardBox reads the details on a card using Apple's Vision framework, which runs entirely on your iPhone. The image and the text extracted from it are not sent to CardBox's servers, Apple's servers, or any third party.",
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
    body: "The backup feature writes your cards to a file through Apple's Files app. You choose the destination — including iCloud Drive, if you want your cards available across your devices. Anything you place in iCloud Drive is then governed by Apple's iCloud terms and privacy policy, not ours.",
  },
  {
    heading: "In-App Purchases",
    body: "CardBox Plus is an optional one-time purchase through the App Store. Apple processes the transaction. CardBox never sees or stores your payment details.",
  },
  {
    heading: "Changes to This Policy",
    body: "If this policy changes, we will update it in the app and on this website. Since CardBox collects no data, changes are likely to be minor.",
  },
];

export default function CardBoxPrivacy() {
  return (
    <DocPage
      product={cardbox}
      title="Privacy Policy"
      description="CardBox Privacy Policy. CardBox has no networking code, no accounts, and no analytics — your cards never leave your iPhone unless you send them."
      sections={sections}
      lastUpdated="August 2026"
    />
  );
}
