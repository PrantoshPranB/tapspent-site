import type { ReactNode } from "react";
import { Link } from "react-router";
import { DocPage, type DocSection } from "../../components/DocPage";
import { cardbox, tapspent, paths } from "../../products";

const p = paths(cardbox);

function Sub({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-base font-semibold pt-2" style={{ color: cardbox.ink }}>
      {children}
    </h3>
  );
}

function Warn({ children }: { children: ReactNode }) {
  return (
    <div
      className="p-4 rounded-xl border text-sm"
      style={{ borderColor: `${cardbox.accent}33`, backgroundColor: `${cardbox.accent}0D` }}
    >
      {children}
    </div>
  );
}

function Q({ q, children }: { q: string; children: ReactNode }) {
  return (
    <div>
      <p className="font-semibold" style={{ color: cardbox.ink }}>
        {q}
      </p>
      <p className="mt-1">{children}</p>
    </div>
  );
}

const Mail = () => (
  <a
    href={`mailto:${cardbox.supportEmail}`}
    className="font-semibold underline"
    style={{ color: cardbox.accent }}
  >
    {cardbox.supportEmail}
  </a>
);

const gestures: [string, string][] = [
  ["Browse the deck", "Drag across the cards"],
  ["Bring a card forward", "Tap it"],
  ["Open a card", "Tap it again"],
  ["Reorder", "Hold a card and drag it"],
  ["Flip to the back", "Swipe across the open card"],
  ["See the saved details", "Long-press the open card"],
  ["Close", "Tap below the card"],
];

const sections: DocSection[] = [
  {
    heading: "Requirements",
    body: "CardBox runs on iPhone with iOS 18 or later, in portrait. There is no iPad or Mac version.",
  },
  {
    heading: "Getting Started",
    body: (
      <>
        <Sub>Adding a card</Sub>
        <p>
          Tap <strong className="font-semibold">+</strong>, then tap the Front or Back slot. The
          camera opens, with a card-shaped guide to frame against. To use a photo you already have,
          tap the gallery button to the left of the shutter.
        </p>
        <p>
          After the photo is taken, you drag the four corner handles onto the real corners of the card
          — a magnifier follows your finger so your thumb never hides the target. Tap{" "}
          <strong className="font-semibold">Use Photo</strong>, and you land on the adjustment screen,
          where Brightness, Saturation, and Denoise let you clean the image up. Tap{" "}
          <strong className="font-semibold">Add</strong> when it looks right.
        </p>
        <p>
          CardBox then reads the card and fills in what it finds. Give the card a name — that's the
          only required field — and save.
        </p>

        <Sub>Card types</Sub>
        <p>
          CardBox recognizes ten kinds of card and adjusts both the fields it expects and the
          thumbnail it draws: credit and debit cards, other payment cards, ID cards, driving licenses,
          PAN cards, Aadhaar cards, vehicle registration certificates, loyalty cards, membership
          cards, and transit passes.
        </p>
        <p>
          If it guesses wrong, tap the{" "}
          <strong className="font-semibold">Detected card type</strong> chip above the name field and
          pick the right one. The fields and thumbnail update to match.
        </p>

        <Sub>The sample cards</Sub>
        <p>
          A fresh install shows four placeholder cards so the deck isn't empty. They don't count
          toward your card limit, and they disappear the moment you add your first real card.
        </p>
      </>
    ),
  },
  {
    heading: "Everyday Use",
    body: (
      <>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th
                  className="text-left font-semibold py-2 pr-6 border-b"
                  style={{ color: cardbox.ink, borderColor: `${cardbox.ink}22` }}
                >
                  To do this
                </th>
                <th
                  className="text-left font-semibold py-2 border-b"
                  style={{ color: cardbox.ink, borderColor: `${cardbox.ink}22` }}
                >
                  Do that
                </th>
              </tr>
            </thead>
            <tbody>
              {gestures.map(([action, how]) => (
                <tr key={action}>
                  <td
                    className="py-2 pr-6 border-b align-top whitespace-nowrap"
                    style={{ borderColor: `${cardbox.ink}11` }}
                  >
                    {action}
                  </td>
                  <td className="py-2 border-b align-top" style={{ borderColor: `${cardbox.ink}11` }}>
                    {how}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          The hint line at the bottom of the screen always tells you what the current gesture set is.
        </p>

        <Sub>Editing a card's details</Sub>
        <p>
          Long-press an open card to bring up its details. Labels and values are both editable — tap
          one and type.
        </p>

        <Sub>Re-adjusting a card's photo</Sub>
        <p>
          In the details sheet, tap the <strong className="font-semibold">sliders</strong> button in
          the top-left. If the card has both faces, you'll be asked which side to edit. The original
          scan is kept, so adjustments never stack up or degrade — each edit re-renders from the
          untouched original.
        </p>
        <p>
          This button appears only on cards you scanned yourself. Sample cards and cards received from
          someone else have no original to re-edit.
        </p>

        <Sub>Deleting a card</Sub>
        <p>
          Tap the trash button while a card is out of the deck and confirm. Deletion is permanent —
          there is no cloud copy and no undo.
        </p>
      </>
    ),
  },
  {
    heading: "App Lock",
    body: (
      <>
        <p>
          Turn it on in <strong className="font-semibold">Settings → Require Face ID</strong>, or from
          the setup screen the app shows the first time you open it.
        </p>
        <p>
          When it's on, CardBox asks for Face ID before it opens, before a card is shared, and before
          a backup is imported. If Face ID fails or isn't available, it falls back to your device
          passcode — so a failed scan can never lock you out of your own cards.
        </p>
        <p>There is no separate CardBox PIN to forget. If your iPhone can unlock, CardBox can unlock.</p>
        <p>
          <strong className="font-semibold">If you remove your device passcode entirely,</strong> App
          Lock switches itself off rather than trapping you outside your cards.
        </p>
      </>
    ),
  },
  {
    heading: "Sharing a Card",
    body: (
      <>
        <p>
          Open a card and tap the share button. CardBox encrypts the card into a{" "}
          <code className="px-1.5 py-0.5 rounded bg-black/5 text-[0.9em]">.cardbox</code> file and
          shows you a <strong className="font-semibold">6-digit code</strong>.
        </p>
        <p>
          Send the file however you like — Messages, AirDrop, email. Then give the recipient the code{" "}
          <strong className="font-semibold">separately</strong>, not in the same message. When they
          tap the file, CardBox opens and asks for it.
        </p>
        <p>
          The code is what protects the card. Anyone holding both the file and the code can open it,
          so a code sent alongside the file protects nothing.
        </p>
        <p>
          Free wallets can share one card per calendar month. CardBox Plus removes the limit.
        </p>
      </>
    ),
  },
  {
    heading: "PDF Export",
    body: (
      <>
        <p>
          Open a card, tap share, and choose <strong className="font-semibold">Save as PDF</strong>{" "}
          under Export. You get an A4 page with both faces at one-and-a-half times life size, and a
          preview from which you can save to Files, AirDrop, or print.
        </p>
        <p>A PDF has no password on it. Once you send it, anyone who has it can read it.</p>
        <p>PDF export requires CardBox Plus.</p>
      </>
    ),
  },
  {
    heading: "Backup & Restore",
    body: (
      <>
        <p>
          <strong className="font-semibold">Settings → Back Up to Files</strong> writes your whole
          wallet to a single <code className="px-1.5 py-0.5 rounded bg-black/5 text-[0.9em]">.json</code>{" "}
          file. You pick where it goes, including iCloud Drive.
        </p>
        <p>
          <strong className="font-semibold">Settings → Import Backup</strong> reads one back.
          Importing <strong className="font-semibold">adds</strong> cards to your wallet — it never
          erases what's already there — so importing the same backup twice gives you duplicates.
        </p>
        <Warn>
          <strong className="font-semibold">⚠️ The backup file is not encrypted.</strong> It holds
          your card images and details in readable form. Keep it somewhere you'd be comfortable
          keeping the cards themselves, and don't email it around.
        </Warn>
        <p>
          If you're on the free plan and the backup holds more cards than your remaining slots,
          CardBox imports what fits and tells you how many it skipped.
        </p>
      </>
    ),
  },
  {
    heading: "CardBox Plus",
    body: (
      <>
        <p>
          A one-time purchase — no subscription. The price is shown on the CardBox Plus screen in the
          app, in your local currency.
        </p>
        <p>Plus unlocks three things:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>
            <strong className="font-semibold">Unlimited cards.</strong> Free wallets hold up to 5.
          </li>
          <li>
            <strong className="font-semibold">PDF export.</strong>
          </li>
          <li>
            <strong className="font-semibold">Unlimited card sharing.</strong> Free wallets share one
            card per calendar month.
          </li>
        </ol>
        <p>
          <strong className="font-semibold">Already bought it?</strong> On a new iPhone, or after
          reinstalling, open the CardBox Plus screen and tap{" "}
          <strong className="font-semibold">Restore Purchase</strong>. Purchases are tied to your
          Apple Account, so there's nothing to log into.
        </p>
        <p>
          <strong className="font-semibold">Refunds</strong> are handled by Apple, not by us — request
          one at{" "}
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
      </>
    ),
  },
  {
    heading: "Troubleshooting",
    body: (
      <div className="space-y-5">
        <Q q="The scan filled in the wrong details.">
          Recognition is a best guess from the text on the card. Every field is editable — long-press
          the open card and correct anything that's off. If the card type itself is wrong, fix that
          first with the type chip, since it determines which fields appear.
        </Q>
        <Q q="The scanned card looks too dark, washed out, or grainy.">
          Long-press the card, tap the sliders button, and adjust Brightness, Saturation, and Denoise.
          You're always editing from the original scan, so you can't make it progressively worse.
        </Q>
        <Q q="The corner handles started in the wrong place.">
          CardBox pre-positions them by detecting the card in the photo, and it doesn't always get it
          right. Drag each one where it belongs — the magnifier shows exactly what's under your
          finger.
        </Q>
        <Q q="The recipient can't open a card I shared.">
          Almost always the wrong 6-digit code. Each share generates a new one, so an older code won't
          work on a newer file. Share the card again and pass along the fresh code.
        </Q>
        <Q q="My import skipped some cards.">
          Free wallets hold 5 cards. CardBox imported what fit. Plus removes the limit and the rest
          will come in on a second import.
        </Q>
        <Q q="I lost my phone. Can you recover my cards?">
          No — and we want to be direct about that. Your cards exist only on your device. We have no
          copy and no way to get one. If you made a backup file, restore from it; if not, the cards
          are gone. This is the cost of an app that never uploads anything.
        </Q>
        <Q q="Face ID isn't being asked for.">
          Check <strong className="font-semibold">Settings → Require Face ID</strong> is on. If your
          iPhone has no passcode set, App Lock can't be offered at all, since there'd be no way back
          in.
        </Q>
        <Q q="How do I delete everything?">
          Delete the app. Cards live in CardBox's own storage and go with it. There's no account to
          close and nothing held anywhere else — but check whether you saved a backup file to Files or
          iCloud Drive, since that copy is separate and stays behind.
        </Q>
      </div>
    ),
  },
  {
    heading: "Privacy",
    body: (
      <p>
        CardBox collects nothing and transmits nothing. The full policy is at{" "}
        <Link to={p.privacy} className="underline" style={{ color: cardbox.accent }}>
          tapspent.in/cardbox/privacy
        </Link>
        .
      </p>
    ),
  },
  {
    heading: "Contact",
    body: (
      <>
        <p>
          <Mail />
        </p>
        <p>
          CardBox is made by the developer of{" "}
          <Link
            to={paths(tapspent).home}
            className="underline"
            style={{ color: cardbox.accent }}
          >
            TapSpent
          </Link>
          . They're separate apps that share no data — TapSpent tracks what you spend, CardBox holds
          the cards you spend it with.
        </p>
      </>
    ),
  },
];

export default function CardBoxSupport() {
  return (
    <DocPage
      product={cardbox}
      title="Support"
      description="Help with CardBox — adding cards, gestures, App Lock, sharing, PDF export, backups, and troubleshooting."
      intro={
        <>
          <p>
            Something not working, or not behaving the way you expected? Write to <Mail /> and
            describe what you were doing when it happened. We read every message.
          </p>
          <p>
            Because CardBox has no accounts and no servers, we cannot see your cards or your wallet —
            so the more detail you give us, the faster we can help.
          </p>
        </>
      }
      sections={sections}
      lastUpdated="9 August 2026"
    />
  );
}
