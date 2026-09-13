import { DocPage, type DocSection } from "../../components/DocPage";
import { dewdrift } from "../../products";

const sections: DocSection[] = [
  {
    heading: "What We Collect",
    body: "Nothing. DewDrift has no servers, no accounts of its own, and no analytics. We do not receive your name, your email address, your device identifiers, your location, or any record of how you play. There is no data for us to sell, share, lose, or hand over, because none of it ever reaches us.",
  },
  {
    heading: "What Stays On Your iPhone",
    body: "The name you put on your drop, the window you last looked through, the weather and race length you chose, your record — races run, races won, your fastest time, your streak — and the last few friends you raced. All of it is stored in DewDrift's own app storage on your device. Deleting the app deletes all of it, and we have no copy.",
  },
  {
    heading: "Game Center",
    body: (
      <>
        <p>
          Racing another person is handled entirely by Apple's Game Center. When you race someone,
          Game Center tells the app your player name and theirs so the two drops can be labelled, and
          carries the race between the two phones. That exchange is between your device, their
          device, and Apple — it does not pass through any server of ours.
        </p>
        <p>
          If you ask to race a friend, DewDrift asks Apple for your Game Center friends list, and iOS
          asks your permission first. You can refuse, and refuse later in iOS Settings, and
          everything else in the game carries on working. We never receive that list.
        </p>
        <p>
          What Apple does with your Game Center account is governed by Apple's privacy policy, not
          this one.
        </p>
      </>
    ),
  },
  {
    heading: "Invite Links",
    body: "When you send someone a link to race you, that link contains a short code for the match and nothing else. It carries no name, no identifier, and nothing about your device. It travels by whatever you send it with — Messages, email, anything else — and we are not involved in its delivery.",
  },
  {
    heading: "In-App Purchase",
    body: "DewDrift Premium is an optional one-time purchase through the App Store. Apple processes the payment and tells the app only whether the purchase is yours. DewDrift never sees or stores your payment details.",
  },
  {
    heading: "Sound With The Screen Off",
    body: "Premium lets the garden keep playing while your phone is locked. That is audio played on your device by your device. Nothing is recorded, and the microphone is never used — DewDrift does not request microphone access at all.",
  },
  {
    heading: "No Tracking, No Advertising",
    body: "DewDrift contains no advertising, no third-party analytics, no crash reporting service, and no tracking of any kind. It does not ask for permission to track you, because there is nothing it would do with it.",
  },
  {
    heading: "Children",
    body: "DewDrift is suitable for all ages and collects no information from anyone, regardless of age. A Game Center account is Apple's to manage, including any limits a parent has placed on it.",
  },
  {
    heading: "Changes to This Policy",
    body: "If this policy changes, we will post the updated version on this page with a new date. Since DewDrift collects nothing, changes are likely to be minor.",
  },
  {
    heading: "Contact",
    body: (
      <p>
        Questions about privacy? Write to{" "}
        <a
          href={`mailto:${dewdrift.supportEmail}`}
          className="font-semibold underline"
          style={{ color: dewdrift.accent }}
        >
          {dewdrift.supportEmail}
        </a>
        .
      </p>
    ),
  },
];

export default function DewDriftPrivacy() {
  return (
    <DocPage
      product={dewdrift}
      title="Privacy Policy"
      description="DewDrift Privacy Policy. No servers, no accounts, no analytics — multiplayer runs on Apple's Game Center and nothing about you reaches us."
      intro={
        <p>
          DewDrift is a game about watching rain run down a window. This policy explains what happens
          to your information, and it is short for a simple reason: DewDrift does not collect
          anything.
        </p>
      }
      sections={sections}
      lastUpdated="13 September 2026"
    />
  );
}
