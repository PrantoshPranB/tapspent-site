import { motion } from "motion/react";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import logo from "../../imports/TapSpent_Logo_Text-2.png";

export default function TermsOfUse() {
  return (
    <>
      <Helmet>
        <title>Terms of Use — TapSpent</title>
        <meta
          name="description"
          content="TapSpent Terms of Use. Read our terms and conditions for using the platform."
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
            Terms of Use
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
              <h2 className="text-xl font-semibold mb-3">Acceptance of Terms</h2>
              <p className="opacity-70">
                By downloading, installing, or using TapSpent, you agree to these terms. If you do not agree, please do not use the app.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <h2 className="text-xl font-semibold mb-3">Use of the App</h2>
              <p className="opacity-70">
                TapSpent is a personal finance tracking tool intended for individual use. You are responsible for all data you enter into the app. The app is provided for informational purposes and is not a substitute for professional financial advice.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold mb-3">Scan with Apple Intelligence</h2>
              <p className="opacity-70">
                Scan with Apple Intelligence uses Apple's on-device Foundation Models and the Vision framework to extract details from bills, receipts, and bank statements. Results depend on the quality, language, and layout of the source document and are not guaranteed to be accurate. You are required to review and confirm the parsed amount, date, and category before each expense is saved. TapSpent is not responsible for incorrect expenses created from misread documents.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <h2 className="text-xl font-semibold mb-3">Data Responsibility</h2>
              <p className="opacity-70">
                Since all data is stored locally on your device, you are responsible for maintaining backups. Uninstalling the app or resetting your device without backing up will result in permanent data loss.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-xl font-semibold mb-3">Third-Party Services</h2>
              <p className="opacity-70">
                Exchange-rate conversion uses the public Frankfurter API (api.frankfurter.app). In-app purchases are handled by Apple's App Store. TapSpent has no control over the availability, accuracy, or terms of these services and is not responsible for their outages or changes.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <h2 className="text-xl font-semibold mb-3">Intellectual Property</h2>
              <p className="opacity-70">
                TapSpent and all its content, features, and functionality are owned by the developer. The app is protected by copyright and other intellectual property laws.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-xl font-semibold mb-3">Limitation of Liability</h2>
              <p className="opacity-70">
                TapSpent is provided "as is" without warranty of any kind. The developer shall not be liable for any damages arising from the use or inability to use the app, including but not limited to data loss, scanning errors, exchange-rate inaccuracies, or financial decisions made based on information in the app.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <h2 className="text-xl font-semibold mb-3">Changes to Terms</h2>
              <p className="opacity-70">
                We reserve the right to update these terms at any time. Continued use of the app after changes constitutes acceptance of the new terms.
              </p>
            </motion.section>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-16 pt-8 border-t border-gray-200"
            >
              <p className="text-sm opacity-50">
                Last updated: May 2026
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      </div>
    </>
  );
}
