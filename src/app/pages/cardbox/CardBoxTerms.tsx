import { DocPage, type DocSection } from "../../components/DocPage";
import { cardbox } from "../../products";

const Bold = ({ children }: { children: React.ReactNode }) => (
  <strong className="font-semibold">{children}</strong>
);

const sections: DocSection[] = [
  {
    heading: "What CardBox Is",
    body: (
      <>
        <p>
          CardBox is a personal organizer for images of the cards you already carry. It stores
          pictures of your cards and the details you or the app enters alongside them, on your own
          device.
        </p>
        <p>
          <Bold>CardBox is not a payment app.</Bold> It cannot make payments, cannot verify that a
          card is valid, and cannot be used in place of a physical card anywhere that requires one. An
          image of a card is a picture, not the card.
        </p>
        <p>
          <Bold>
            CardBox is not affiliated with any bank, card network, government body, or card issuer.
          </Bold>{" "}
          Names and logos belonging to those organizations may appear on cards you scan; they remain
          the property of their owners, and their presence in the app implies no endorsement or
          relationship.
        </p>
      </>
    ),
  },
  {
    heading: "Your Licence",
    body: "We grant you a personal, non-exclusive, non-transferable licence to use CardBox on Apple devices you own or control, in line with the App Store Terms of Service. You may not resell, redistribute, reverse-engineer, or attempt to extract the source of the app.",
  },
  {
    heading: "Your Responsibilities",
    body: (
      <>
        <p>You are responsible for what you put into CardBox and what you do with it.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <Bold>Only store cards you're entitled to store.</Bold> Do not use CardBox to hold cards,
            identity documents, or credentials belonging to other people without their permission.
          </li>
          <li>
            <Bold>Follow the law that applies to you.</Bold> Some identity documents — including
            government-issued IDs — are subject to specific rules about how they may be copied,
            stored, and shared in your country. Those rules are yours to follow.
          </li>
          <li>
            <Bold>Guard your device.</Bold> Your cards are only as protected as your iPhone. We
            strongly recommend a device passcode and turning on App Lock in CardBox.
          </li>
          <li>
            <Bold>Share carefully.</Bold> When you share a card, you decide who receives it and who
            gets the 6-digit code. Anyone holding both can read the card. When you export a PDF or
            write a backup file, that file is unencrypted and readable by anyone who has it.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "Your Data Is Yours, and It's Only Yours",
    body: (
      <>
        <p>
          CardBox stores everything on your device. We have no servers, no copy of your cards, and no
          ability to access, recover, or restore them.
        </p>
        <p>This means:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            If you lose your device, delete the app, or your device fails, <Bold>your cards are gone</Bold>{" "}
            unless you made your own backup file.
          </li>
          <li>We cannot retrieve them for you, no matter the circumstances.</li>
          <li>Keeping backups is entirely your responsibility.</li>
        </ul>
        <p>
          Please read that section twice before relying on CardBox as your only record of anything
          important.
        </p>
      </>
    ),
  },
  {
    heading: "CardBox Plus",
    body: (
      <>
        <p>
          CardBox Plus is an optional one-time in-app purchase that unlocks unlimited cards, PDF
          export, and unlimited card sharing. It is not a subscription and does not renew.
        </p>
        <p>
          Purchases are processed by Apple and tied to your Apple Account; you can restore them on
          another device from the CardBox Plus screen.{" "}
          <Bold>All refunds are handled by Apple under the App Store Terms of Service</Bold> — we
          cannot issue, approve, or decline them. Request a refund at{" "}
          <a
            href="https://reportaproblem.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: cardbox.accent }}
          >
            reportaproblem.apple.com
          </a>
          .
        </p>
        <p>
          Features included in Plus may change as the app develops, but we won't remove a feature you
          have already paid for.
        </p>
      </>
    ),
  },
  {
    heading: "Availability and Changes",
    body: "We may update, change, or discontinue CardBox or any of its features. Because the app runs entirely on your device, an app you have already installed will keep working as it is — but we don't promise future updates, compatibility with future versions of iOS, or continued availability on the App Store.",
  },
  {
    heading: "No Warranty",
    body: (
      <>
        <p>
          CardBox is provided "as is" and "as available", without warranty of any kind, express or
          implied, including any implied warranties of merchantability, fitness for a particular
          purpose, accuracy, or non-infringement.
        </p>
        <p>
          In particular, we make no promise that card recognition is accurate. CardBox reads cards
          automatically and <Bold>will sometimes get details wrong</Bold>. Check anything that matters
          before you rely on it.
        </p>
      </>
    ),
  },
  {
    heading: "Limitation of Liability",
    body: (
      <>
        <p>
          To the fullest extent permitted by law, we are not liable for any indirect, incidental,
          special, or consequential damages, or for any loss of data, loss of cards, loss of profits,
          or unauthorized access to your device or your files, arising from your use of CardBox.
        </p>
        <p>
          Where liability cannot be excluded by law, it is limited to the amount you paid for the app
          in the twelve months before the claim.
        </p>
      </>
    ),
  },
  {
    heading: "Termination",
    body: "You may stop using CardBox at any time by deleting it, which removes the app's stored cards from your device along with it. These terms end when you do.",
  },
  {
    heading: "Governing Law",
    body: "These terms are governed by the laws of India, and the courts of India have exclusive jurisdiction over any dispute arising from them.",
  },
  {
    heading: "Changes to These Terms",
    body: "If these terms change, we will post the updated version on this page with a new date. Continuing to use CardBox after that means you accept the change.",
  },
  {
    heading: "Contact",
    body: (
      <p>
        Questions about these terms? Write to{" "}
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

export default function CardBoxTerms() {
  return (
    <DocPage
      product={cardbox}
      title="Terms of Use"
      description="CardBox Terms of Use. CardBox is a personal organizer for images of the cards you carry — not a payment app, and not affiliated with any bank or card issuer."
      intro={
        <p>
          These terms govern your use of the CardBox iPhone app. By installing or using CardBox, you
          agree to them. If you don't, please don't use the app.
        </p>
      }
      sections={sections}
      lastUpdated="9 August 2026"
    />
  );
}
