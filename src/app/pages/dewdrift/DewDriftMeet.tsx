import { motion } from "motion/react";
import { Link, useSearchParams } from "react-router";
import { Helmet } from "react-helmet-async";
import { dewdrift, paths } from "../../products";
import { ProductWordmark } from "../../components/ProductWordmark";

const p = paths(dewdrift);
const ink = dewdrift.ink;
const sans = dewdrift.bodyFont;

/**
 * Where a race invitation lands when the app is not installed.
 *
 * An invitation is a Universal Link: https://www.tapspent.in/dewdrift/meet?g=<code>.
 * On an iPhone with DewDrift, iOS opens the game and this page is never seen. Without
 * it — on a laptop, on Android, or before the invited person has installed anything —
 * the browser comes here instead, which is the whole reason the links are https and
 * not the app's own dewdriftb:// scheme. That scheme fails silently, and a link that
 * does nothing at all is worse than no link.
 */
export default function DewDriftMeet() {
  const [params] = useSearchParams();
  const code = params.get("g");

  return (
    <>
      <Helmet>
        <title>A race on a wet window — DewDrift</title>
        <meta name="description" content="Somebody has asked you to race them down a rainy window." />
        {/* An invitation is one person's, not the web's. */}
        <meta name="robots" content="noindex" />
      </Helmet>

      <div
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center"
        style={{ backgroundColor: dewdrift.surface }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <Link to={p.home} className="inline-block mb-12">
            <ProductWordmark product={dewdrift} />
          </Link>

          <h1
            style={{
              ...dewdrift.heading,
              fontSize: "clamp(2.2rem, 6vw, 3.4rem)",
              lineHeight: "1.1",
              color: ink,
            }}
          >
            Somebody wants to race you
            <br />
            down a wet window.
          </h1>

          <p
            className="mt-8 text-base md:text-lg opacity-65"
            style={{ fontFamily: sans, color: ink, lineHeight: "1.7" }}
          >
            You need DewDrift on your iPhone to take them up on it. Install it, then open this link
            again and it will drop you straight into the race.
          </p>

          {code && (
            <p className="mt-6 text-sm opacity-45" style={{ fontFamily: sans, color: ink }}>
              Race code <span className="font-semibold tracking-wider">{code}</span>
            </p>
          )}

          <p className="mt-10 text-sm opacity-45" style={{ fontFamily: sans, color: ink }}>
            DewDrift is coming to the App Store shortly.
          </p>

          <div className="mt-12 flex items-center justify-center gap-8">
            <Link
              to={p.home}
              className="text-sm opacity-70 hover:opacity-100 transition-opacity underline"
              style={{ fontFamily: sans, color: ink }}
            >
              What is DewDrift?
            </Link>
            <Link
              to={p.support}
              className="text-sm opacity-70 hover:opacity-100 transition-opacity underline"
              style={{ fontFamily: sans, color: ink }}
            >
              Support
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}
