import { DocPage, type DocSection } from "../../components/DocPage";
import { dewdrift } from "../../products";

const Mail = () => (
  <a
    href={`mailto:${dewdrift.supportEmail}`}
    className="font-semibold underline"
    style={{ color: dewdrift.accent }}
  >
    {dewdrift.supportEmail}
  </a>
);

const sections: DocSection[] = [
  {
    heading: "Write to us",
    body: (
      <>
        <p>
          <Mail /> — one person reads it, usually within a couple of days.
        </p>
        <p>
          If something has gone wrong, it helps enormously to know which iPhone you have, which
          version of iOS it is running, and what you were doing when it happened. The version of
          DewDrift is at the very bottom of the Settings screen.
        </p>
      </>
    ),
  },
  {
    heading: "I paid for Premium and it hasn't appeared",
    body: (
      <>
        <p>
          Open Settings inside the game and tap <em>Restore a purchase</em> on the Premium screen.
          That asks Apple what this Apple ID owns and turns everything back on.
        </p>
        <p>
          A purchase belongs to the Apple ID that made it, not to the phone — so a family member's
          purchase will not appear on your account unless Family Sharing is on.
        </p>
      </>
    ),
  },
  {
    heading: "The sound stops when I lock my phone",
    body: (
      <>
        <p>
          That is the one thing Premium adds beyond the windows, and it is off until you ask for it.
          Go to Settings → With the screen off, and turn on <em>Keep playing</em>.
        </p>
        <p>
          While it is on, the garden holds the sound to itself and the silent switch stops applying to
          it — which is why it is never turned on for you.
        </p>
      </>
    ),
  },
  {
    heading: "I can't race a friend",
    body: (
      <>
        <p>
          Racing another person needs Game Center. Check that you are signed in — iOS Settings → Game
          Center — on both phones, and that both are connected to the internet.
        </p>
        <p>
          To pick a friend by name, DewDrift needs permission to see your Game Center friends list,
          and iOS asks once. If you said no, you can change it in iOS Settings → DewDrift. Sending
          someone a link works without it.
        </p>
        <p>
          Game Center only shows people as friends when you are friends <em>with each other</em>, and
          only those who have played DewDrift as well.
        </p>
      </>
    ),
  },
  {
    heading: "A link to a race did nothing",
    body: "A race link only opens if the other person has DewDrift installed. If nothing happens, they need the app first — then the link will take them straight into the race.",
  },
  {
    heading: "Can I get rid of my record?",
    body: "Yes. Settings → Record → reset record clears races, wins, streaks and your fastest time. Deleting the app removes everything it has stored, including your name and the window you were looking through.",
  },
  {
    heading: "Refunds",
    body: (
      <>
        <p>
          Apple takes the payment, so Apple handles refunds. Go to{" "}
          <a
            href="https://reportaproblem.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline"
            style={{ color: dewdrift.accent }}
          >
            reportaproblem.apple.com
          </a>{" "}
          and sign in with the Apple ID that bought it.
        </p>
        <p>We have no way to issue a refund ourselves, though we are happy to help you ask.</p>
      </>
    ),
  },
  {
    heading: "Something else",
    body: (
      <p>
        Anything at all — a bug, an idea, a window you would like to look through — send it to{" "}
        <Mail />.
      </p>
    ),
  },
];

export default function DewDriftSupport() {
  return (
    <DocPage
      product={dewdrift}
      title="Support"
      description="Help with DewDrift — purchases, Game Center races, sound with the screen off, and how to reach us."
      intro={
        <p>
          Most things have a short answer. If yours isn't here, write to <Mail /> and we will sort it
          out.
        </p>
      }
      sections={sections}
      lastUpdated="13 September 2026"
    />
  );
}
