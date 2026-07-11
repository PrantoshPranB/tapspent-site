import { motion } from "motion/react";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import logo from "../../imports/TapSpent_Logo_Text-2.png";

export default function Support() {
  return (
    <>
      <Helmet>
        <title>Support — TapSpent</title>
        <meta
          name="description"
          content="Need help with TapSpent? Get in touch with our support team."
        />
      </Helmet>
      <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="TapSpent" className="h-8" />
          </Link>
          <Link to="/" className="text-sm text-gray-600 hover:text-gray-900">
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="mb-12"
            style={{
              fontFamily: '"Instrument Serif", serif',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              lineHeight: '1.2',
              color: '#3A3D35',
              letterSpacing: '-0.02em'
            }}
          >
            Support
          </h1>

          <div
            className="space-y-8"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              color: '#3A3D35',
              lineHeight: '1.7'
            }}
          >
            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-xl font-semibold mb-3">We're here to help</h2>
              <p className="opacity-70">
                Have a question, found a bug, or want to share feedback about TapSpent? We'd love to hear from you. Reach out and we'll get back to you as soon as we can.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <h2 className="text-xl font-semibold mb-3">Email Us</h2>
              <p className="opacity-70">
                Send your questions or feedback to{" "}
                <a
                  href="mailto:support@tapspent.in"
                  className="font-semibold underline hover:opacity-100"
                  style={{ color: '#6B7C5E' }}
                >
                  support@tapspent.in
                </a>
                . We typically respond within 1–2 business days.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold mb-3">Privacy First</h2>
              <p className="opacity-70">
                TapSpent stores all your data on your device — we have no access to your expenses or income records. Because of this, please include any relevant details when you contact us so we can help effectively. To learn more, read our{" "}
                <Link to="/privacy" className="underline hover:opacity-100" style={{ color: '#6B7C5E' }}>
                  Privacy Policy
                </Link>
                .
              </p>
            </motion.section>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-16 pt-8 border-t border-gray-200"
            >
              <p className="text-sm opacity-50">
                Last updated: July 2026
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      </div>
    </>
  );
}
