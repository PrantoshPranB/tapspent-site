import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { cardbox, tapspent, paths } from "../../products";
import heroCards from "../../../imports/cardbox/hero-cards.png";
import deckShot from "../../../imports/cardbox/deck.png";
import flipShot from "../../../imports/cardbox/flip.png";
import addCardShot from "../../../imports/cardbox/add-card.png";
import deckDarkShot from "../../../imports/cardbox/deck-dark.png";
import flipDarkShot from "../../../imports/cardbox/flip-dark.png";
import settingsDarkShot from "../../../imports/cardbox/settings-dark.png";

const p = paths(cardbox);
const ink = cardbox.ink;
const accent = cardbox.accent;
const sans = cardbox.bodyFont;

const rise = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7 },
};

/** Screenshot in a phone-shaped frame. */
function Shot({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full rounded-[2.25rem] border border-black/5 shadow-[0_24px_60px_-24px_rgba(20,22,31,0.35)] ${className}`}
    />
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p
      className="text-xs uppercase mb-4"
      style={{ fontFamily: sans, color: accent, letterSpacing: "0.14em", fontWeight: 600 }}
    >
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2
      className="mb-5"
      style={{
        ...cardbox.heading,
        fontSize: "clamp(1.9rem, 4vw, 2.9rem)",
        lineHeight: "1.1",
        color: ink,
      }}
    >
      {children}
    </h2>
  );
}

function Body({ children }: { children: ReactNode }) {
  return (
    <p
      className="text-base md:text-lg opacity-65"
      style={{ fontFamily: sans, color: ink, lineHeight: "1.7" }}
    >
      {children}
    </p>
  );
}

/** Alternating image + copy row. */
function Feature({
  eyebrow,
  title,
  children,
  src,
  alt,
  flip = false,
  background,
}: {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  src: string;
  alt: string;
  flip?: boolean;
  background?: string;
}) {
  return (
    <section className="py-24 md:py-32 px-6" style={background ? { background } : undefined}>
      <div
        className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-14 md:gap-20 items-center ${
          flip ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div {...rise}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <SectionHeading>{title}</SectionHeading>
          <Body>{children}</Body>
        </motion.div>

        <motion.div {...rise} transition={{ duration: 0.7, delay: 0.1 }} className="mx-auto max-w-[300px] md:max-w-[340px]">
          <Shot src={src} alt={alt} />
        </motion.div>
      </div>
    </section>
  );
}

const cardTypes = [
  "Credit & debit",
  "Payment card",
  "ID card",
  "Driving license",
  "PAN card",
  "Aadhaar",
  "Vehicle RC",
  "Loyalty card",
  "Membership",
  "Transit pass",
];

export default function CardBoxHome() {
  return (
    <>
      <Helmet>
        <title>CardBox — All your cards. One secure place.</title>
        <meta
          name="description"
          content="Scan the cards in your wallet and carry them on your iPhone. CardBox reads each card on-device, keeps everything offline, and never touches the network."
        />
      </Helmet>

      <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: cardbox.surface }}>
        <SiteHeader
          product={cardbox}
          navLinks={[
            { label: "TapSpent", to: paths(tapspent).home },
            { label: "Privacy", to: p.privacy },
            { label: "Support", to: p.support },
          ]}
        />

        {/* Hero */}
        <section className="relative px-6 pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
          {/* soft colour wash */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(60% 45% at 20% 10%, rgba(79,91,245,0.14), transparent 70%), radial-gradient(50% 40% at 85% 20%, rgba(168,85,247,0.12), transparent 70%)",
            }}
          />

          <div className="relative max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1
                style={{
                  fontFamily: sans,
                  fontSize: "clamp(3.2rem, 11vw, 6.5rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.045em",
                  lineHeight: "1",
                  color: ink,
                }}
              >
                Card<span style={{ color: accent }}>Box</span>
              </h1>

              <p
                className="mt-6"
                style={{
                  fontFamily: sans,
                  fontSize: "clamp(1.5rem, 4.5vw, 2.4rem)",
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                  lineHeight: "1.2",
                  color: ink,
                }}
              >
                All your cards.
                <br />
                One secure place.
              </p>

              <div
                className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
                style={{ fontFamily: sans, color: accent, fontWeight: 600 }}
              >
                {["Store", "Share", "Print", "Access anywhere"].map((word, i) => (
                  <span key={word} className="flex items-center gap-3">
                    {i > 0 && <span className="opacity-40">•</span>}
                    {word}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Hero art — the image is on black, so it sits on a deliberate dark stage */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="mt-14 md:mt-20 mx-auto max-w-4xl rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-black shadow-[0_40px_120px_-40px_rgba(79,91,245,0.6)]"
            >
              <img src={heroCards} alt="A stack of cards held in CardBox" className="w-full block" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 text-center text-sm opacity-55"
              style={{ fontFamily: sans, color: ink }}
            >
              Works offline · iPhone · iOS 18 and later
            </motion.p>
          </div>
        </section>

        {/* Scan */}
        <Feature
          eyebrow="Add a card"
          title={<>Point, shoot, and it reads the rest.</>}
          src={addCardShot}
          alt="The Add Card screen, with slots for the front and back of a card"
          background="#FFFFFF"
        >
          Photograph the front and the back. CardBox finds the card in the shot and you drag the four
          corners into place, with a magnifier so your thumb never hides the target. Straighten it,
          adjust brightness, saturation and denoise, and it reads the details off the card itself.
          Give it a name — the only field you have to fill in — and save.
        </Feature>

        {/* Deck */}
        <Feature
          eyebrow="Your wallet"
          title={<>A deck that behaves like a wallet.</>}
          src={deckShot}
          alt="CardBox showing four cards fanned out in a deck"
          flip
        >
          Your cards sit in a fan you can drag through with your thumb. Tap one and it lifts to the
          front while the rest slide back behind it. Nothing is buried in a list, and everything stays
          exactly where you left it.
        </Feature>

        {/* Flip */}
        <Feature
          eyebrow="Both sides"
          title={<>The back of the card, one swipe away.</>}
          src={flipShot}
          alt="A loyalty card flipped to show its details"
          background="#FFFFFF"
        >
          Swipe to turn a card over — the membership number, the barcode, the small print on the
          reverse. Long-press to pull up the fields CardBox read when you scanned it, ready to copy
          when a form asks for them.
        </Feature>

        {/* Card types */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div {...rise}>
              <Eyebrow>Ten kinds of card</Eyebrow>
              <SectionHeading>Whatever is in your wallet, it fits.</SectionHeading>
              <div className="max-w-2xl mx-auto">
                <Body>
                  Each type brings its own fields and its own thumbnail, so a driving licence does not
                  pretend to be a credit card.
                </Body>
              </div>
            </motion.div>

            <motion.div
              {...rise}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-12 flex flex-wrap justify-center gap-3"
            >
              {cardTypes.map((type) => (
                <span
                  key={type}
                  className="px-5 py-2.5 rounded-full bg-white border text-sm"
                  style={{
                    fontFamily: sans,
                    color: ink,
                    borderColor: `${accent}22`,
                    fontWeight: 500,
                  }}
                >
                  {type}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Dark mode */}
        <section className="py-24 md:py-32 px-6 bg-[#0B0C11]">
          <div className="max-w-6xl mx-auto">
            <motion.div {...rise} className="max-w-2xl">
              <p
                className="text-xs uppercase mb-4"
                style={{
                  fontFamily: sans,
                  color: "#8E97FF",
                  letterSpacing: "0.14em",
                  fontWeight: 600,
                }}
              >
                After dark
              </p>
              <h2
                className="mb-5"
                style={{
                  fontFamily: sans,
                  fontSize: "clamp(1.9rem, 4vw, 2.9rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.035em",
                  lineHeight: "1.1",
                  color: "#FFFFFF",
                }}
              >
                Just as good at midnight.
              </h2>
              <p
                className="text-base md:text-lg"
                style={{ fontFamily: sans, color: "rgba(255,255,255,0.6)", lineHeight: "1.7" }}
              >
                A full dark theme, a carousel you can run horizontally or vertically, and a small
                haptic tap whenever you pull a card out, flip it, save it, or throw it away.
              </p>
            </motion.div>

            <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-4xl mx-auto">
              {[
                { src: deckDarkShot, alt: "The card deck in dark mode" },
                { src: flipDarkShot, alt: "A transit card open in dark mode" },
                { src: settingsDarkShot, alt: "CardBox settings in dark mode" },
              ].map((shot, i) => (
                <motion.div
                  key={shot.alt}
                  {...rise}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  className={i === 2 ? "col-span-2 md:col-span-1 max-w-[300px] mx-auto w-full" : ""}
                >
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    className="w-full rounded-[1.75rem] border border-white/10"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy */}
        <section className="py-24 md:py-32 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div {...rise}>
              <Eyebrow>Privacy</Eyebrow>
              <SectionHeading>There is no server. There is no network.</SectionHeading>
              <Body>
                CardBox contains no networking code at all — no analytics, no third-party SDKs, no
                cloud sync, no account to create. Scanning and text recognition run on your iPhone
                using Apple's Vision framework, and the results stay there.
              </Body>
            </motion.div>

            <motion.div
              {...rise}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left"
            >
              {[
                {
                  title: "App Lock",
                  body: "Require Face ID before CardBox opens, before a card is shared, and before a backup is imported.",
                },
                {
                  title: "Encrypted sharing",
                  body: "Send a card to someone and it travels AES-GCM encrypted behind a 6-digit passcode only the two of you know.",
                },
                {
                  title: "PDF export",
                  body: "Turn a card into a document when you need a paper copy or an attachment.",
                },
                {
                  title: "Back up to Files",
                  body: "Write your whole wallet to a file and keep it wherever you trust — the backup is unencrypted, so treat it like the cards themselves.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl border"
                  style={{ borderColor: `${accent}22`, backgroundColor: cardbox.surface }}
                >
                  <h3
                    className="mb-2 text-base"
                    style={{ fontFamily: sans, color: ink, fontWeight: 700 }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm opacity-65"
                    style={{ fontFamily: sans, color: ink, lineHeight: "1.6" }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.p
              {...rise}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 text-sm opacity-55"
              style={{ fontFamily: sans, color: ink }}
            >
              Your cards leave your phone only when you decide to send them.{" "}
              <Link to={p.privacy} className="underline" style={{ color: accent }}>
                Read the privacy policy
              </Link>
              .
            </motion.p>
          </div>
        </section>

        {/* Plus */}
        <section className="py-24 md:py-32 px-6">
          <motion.div
            {...rise}
            className="max-w-3xl mx-auto rounded-[2rem] p-10 md:p-14 text-center"
            style={{
              background: "linear-gradient(135deg, #4F5BF5 0%, #7C4DF5 60%, #A855F7 100%)",
            }}
          >
            <p
              className="text-xs uppercase mb-4"
              style={{
                fontFamily: sans,
                color: "rgba(255,255,255,0.75)",
                letterSpacing: "0.14em",
                fontWeight: 600,
              }}
            >
              CardBox Plus
            </p>
            <h2
              className="mb-4"
              style={{
                fontFamily: sans,
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                fontWeight: 800,
                letterSpacing: "-0.035em",
                lineHeight: "1.15",
                color: "#FFFFFF",
              }}
            >
              One payment. Then it is yours.
            </h2>
            <p
              className="max-w-xl mx-auto"
              style={{ fontFamily: sans, color: "rgba(255,255,255,0.8)", lineHeight: "1.7" }}
            >
              CardBox is free for your first five cards. Plus is a single purchase — not a
              subscription — that lifts the card limit, unlocks PDF export, and removes the
              one-share-a-month cap. The price is shown in the app, in your local currency.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Unlimited cards", "PDF export", "Unlimited sharing"].map((perk) => (
                <span
                  key={perk}
                  className="px-4 py-2 rounded-full text-sm bg-white/15 border border-white/20"
                  style={{ fontFamily: sans, color: "#FFFFFF", fontWeight: 500 }}
                >
                  {perk}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Closing */}
        <section className="pb-28 px-6 text-center">
          <motion.div {...rise} className="max-w-2xl mx-auto">
            <SectionHeading>Now on the App Store.</SectionHeading>
            <Body>
              CardBox is out. Download it for iPhone, and if you have a card type you would like it
              to handle,{" "}
              <a
                href={`mailto:${cardbox.supportEmail}`}
                className="underline font-semibold"
                style={{ color: accent }}
              >
                get in touch
              </a>
              .
            </Body>
            <motion.a
              href={cardbox.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block mt-8 px-8 py-3 text-white rounded-full hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: ink, fontFamily: sans, fontWeight: 600 }}
            >
              Download now
            </motion.a>
            <p className="mt-10 text-sm opacity-50" style={{ fontFamily: sans, color: ink }}>
              From the same desk as{" "}
              <Link to={paths(tapspent).home} className="underline" style={{ color: accent }}>
                TapSpent
              </Link>
              . Separate apps, separate data — neither one needs the other.
            </p>
          </motion.div>
        </section>

        <SiteFooter
          product={cardbox}
          links={[
            { label: "Privacy Policy", to: p.privacy },
            { label: "Terms of Use", to: p.terms },
            { label: "Support", to: p.support },
            { label: "TapSpent", to: paths(tapspent).home },
          ]}
        />
      </div>
    </>
  );
}
