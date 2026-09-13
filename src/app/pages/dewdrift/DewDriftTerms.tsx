import { DocPage, type DocSection } from "../../components/DocPage";
import { dewdrift } from "../../products";

const Bold = ({ children }: { children: React.ReactNode }) => (
  <strong className="font-semibold">{children}</strong>
);

const sections: DocSection[] = [
  {
    heading: "What DewDrift Is",
    body: (
      <>
        <p>
          DewDrift is a game for iPhone. Two drops run down a photograph of a wet window and one of
          them is yours. You can race alone, race someone through Game Center, or sit at the window
          and watch the weather.
        </p>
        <p>
          <Bold>It is a game and nothing more.</Bold> It is not a weather service, it forecasts
          nothing, and the rain you see has no relationship to the rain outside your own window.
        </p>
      </>
    ),
  },
  {
    heading: "Your Licence",
    body: "We grant you a personal, non-exclusive, non-transferable licence to use DewDrift on Apple devices you own or control, in line with the App Store Terms of Service. You may not resell, redistribute, reverse-engineer, or attempt to extract the source of the app.",
  },
  {
    heading: "DewDrift Premium",
    body: (
      <>
        <p>
          Premium is a <Bold>one-time purchase</Bold>, not a subscription. Nothing renews and nothing
          is charged again. It unlocks every window in the game and lets the garden keep playing
          while your phone is locked.
        </p>
        <p>
          Racing, racing a friend, and sitting at the window are free, and remain free. Premium adds
          places to do them; it does not gate them.
        </p>
        <p>
          Apple takes the payment and Apple handles refunds. If you want your money back, ask Apple —
          we have no ability to issue a refund ourselves. Restoring a purchase on a new device is
          built into the app.
        </p>
      </>
    ),
  },
  {
    heading: "Racing Other People",
    body: "Multiplayer runs on Apple's Game Center and depends on it. If Game Center is unavailable, if you are signed out, or if the connection between two phones drops, a race may not start or may not finish. Your Game Center account, and anything you do with it, is governed by Apple's terms.",
  },
  {
    heading: "Behave Reasonably",
    body: (
      <>
        <p>
          The name you put on your drop is shown to anyone you race. Do not put anything in it you
          would not want a stranger to read — no abuse, no impersonation, nothing unlawful. We may
          not see it, but the person you are racing will.
        </p>
        <p>
          Do not attempt to modify the app, interfere with another player's race, or automate play in
          order to affect a result.
        </p>
      </>
    ),
  },
  {
    heading: "Your Record",
    body: "Races run, wins, streaks and your fastest time live on your device only. They can be reset from Settings, they are lost if you delete the app, and we cannot restore them for you.",
  },
  {
    heading: "No Warranty",
    body: "DewDrift is provided as it is. We do our best to make it work well, but we do not promise it will be uninterrupted, error-free, or compatible with every device or future version of iOS. To the extent the law allows, we exclude all warranties and are not liable for any loss arising from your use of the app.",
  },
  {
    heading: "Ending These Terms",
    body: "You may stop using DewDrift at any time by deleting it, which removes its stored settings and record from your device along with it. These terms end when you do. Anything you have already bought remains yours on the Apple ID that bought it.",
  },
  {
    heading: "Governing Law",
    body: "These terms are governed by the laws of India, and the courts of India have exclusive jurisdiction over any dispute arising from them.",
  },
  {
    heading: "Changes to These Terms",
    body: "If these terms change, we will post the updated version on this page with a new date. Continuing to use DewDrift after that means you accept the change.",
  },
  {
    heading: "Contact",
    body: (
      <p>
        Questions about these terms? Write to{" "}
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

export default function DewDriftTerms() {
  return (
    <DocPage
      product={dewdrift}
      title="Terms of Use"
      description="DewDrift Terms of Use. A game for iPhone, with one optional non-renewing purchase and multiplayer that runs on Apple's Game Center."
      intro={
        <p>
          These terms govern your use of the DewDrift iPhone app. By installing or using DewDrift, you
          agree to them. If you don't, please don't use the app.
        </p>
      }
      sections={sections}
      lastUpdated="13 September 2026"
    />
  );
}
