import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { dewdrift, paths } from "../../products";
import raceShot from "../../../imports/dewdrift/race.png";
import windowShot from "../../../imports/dewdrift/window.png";

const p = paths(dewdrift);
const ink = dewdrift.ink;
const accent = dewdrift.accent;
const sans = dewdrift.bodyFont;

const rise = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7 },
};

function Shot({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full rounded-[2.25rem] border border-black/5 shadow-[0_24px_60px_-24px_rgba(38,48,42,0.45)]"
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
        ...dewdrift.heading,
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

/** Image and copy side by side, the image first on wide screens unless flipped. */
function Feature({
  eyebrow,
  title,
  children,
  src,
  alt,
  flip = false,
}: {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  src: string;
  alt: string;
  flip?: boolean;
}) {
  return (
    <motion.div
      {...rise}
      className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-5xl mx-auto"
    >
      <div className={`${flip ? "md:order-2" : ""} max-w-[300px] mx-auto w-full`}>
        <Shot src={src} alt={alt} />
      </div>
      <div className={flip ? "md:order-1" : ""}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <SectionHeading>{title}</SectionHeading>
        <Body>{children}</Body>
      </div>
    </motion.div>
  );
}

export default function DewDriftHome() {
  return (
    <>
      <Helmet>
        <title>DewDrift — A window, some weather, and a race down the glass</title>
        <meta
          name="description"
          content="Two drops race down a rainy window. Pick a side, or sit and watch the weather. An iPhone game about waiting, from TapSpent."
        />
      </Helmet>

      <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: dewdrift.surface }}>
        <SiteHeader
          product={dewdrift}
          navLinks={[
            { label: "Privacy", to: p.privacy },
            { label: "Support", to: p.support },
            { label: "TapSpent", to: "/" },
          ]}
        />

        {/* Hero */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center max-w-3xl"
          >
            <h1
              style={{
                ...dewdrift.heading,
                fontSize: "clamp(3rem, 9vw, 6rem)",
                lineHeight: "1.05",
                color: ink,
              }}
            >
              Rain on the glass,
              <br />
              and nowhere to be.
            </h1>

            <p
              className="mt-8 text-lg md:text-xl opacity-65 max-w-xl mx-auto"
              style={{ fontFamily: sans, color: ink, lineHeight: "1.7" }}
            >
              Two drops start at the top of a wet window. One of them is yours. Which arrives first
              is decided by the glass — by dust, by a smear, by where the water already ran.
            </p>

            <p
              className="mt-6 text-sm opacity-45"
              style={{ fontFamily: sans, color: ink }}
            >
              Coming to iPhone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="mt-16 w-full max-w-[300px]"
          >
            <Shot src={raceShot} alt="Two drops racing down a rainy window in DewDrift" />
          </motion.div>
        </section>

        {/* Features */}
        <section className="px-6 py-24 space-y-28 bg-white">
          <Feature
            eyebrow="The race"
            title="Pick a drop. Then let it go."
            src={windowShot}
            alt="A race under way on the garden window"
          >
            A race lasts as long as it lasts. You choose a side and a length, and after that the only
            thing you can do is watch — or wipe the glass ahead of your drop with a finger, which is
            the one piece of cheating the game allows.
          </Feature>

          <Feature
            eyebrow="Race a friend"
            title="The same weather, two phones."
            src={raceShot}
            alt="Racing a friend through Game Center"
            flip
          >
            Challenge someone through Game Center and you both watch the same window under the same
            rain, each with a drop of your own. Nothing about it is ever behind a price.
          </Feature>

          <motion.div {...rise} className="max-w-2xl mx-auto text-center">
            <Eyebrow>Sit at the window</Eyebrow>
            <SectionHeading>No race. No clock. Just weather.</SectionHeading>
            <Body>
              Put the game down and leave the window open — rain on the pane, a road somewhere behind
              it, birds while it is light. Nothing counts anything. Nothing asks you for a turn.
            </Body>
          </motion.div>

          <motion.div {...rise} className="max-w-2xl mx-auto text-center">
            <Eyebrow>DewDrift Premium</Eyebrow>
            <SectionHeading>One price, once.</SectionHeading>
            <Body>
              Every window in the game, and the ability to lock your phone and leave the garden
              playing in your pocket. Racing, racing a friend, and sitting at the window are free and
              stay free — Premium adds places to do them, and one thing the game cannot do without it.
            </Body>
          </motion.div>
        </section>

        <SiteFooter
          product={dewdrift}
          links={[
            { label: "Privacy Policy", to: p.privacy },
            { label: "Terms of Use", to: p.terms },
            { label: "Support", to: p.support },
            { label: "TapSpent", to: "/" },
          ]}
        />
      </div>
    </>
  );
}
