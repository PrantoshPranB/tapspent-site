import { motion } from "motion/react";
import { Link } from "react-router";
import logo from "../../imports/TapSpent_Logo_Text-2.png";

export default function PrivacyPolicy() {
  return (
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
            Privacy Policy
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
              <h2 className="text-xl font-semibold mb-3">Data Collection</h2>
              <p className="opacity-70">
                TapSpent does not collect, transmit, or share any personal data. All expense and income records you create are stored exclusively on your device using Apple's SwiftData framework.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <h2 className="text-xl font-semibold mb-3">Local Storage Only</h2>
              <p className="opacity-70">
                Your financial data never leaves your device. There are no analytics, tracking, advertising, or behavioral profiling embedded in TapSpent. We believe your spending habits are your business alone.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold mb-3">Camera & Photo Library</h2>
              <p className="opacity-70">
                TapSpent requests camera and photo library access only when you choose to scan a bill, receipt, or bank statement. The captured image or selected photo is processed on your device and is never uploaded anywhere. You can revoke either permission at any time in iOS Settings → TapSpent.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <h2 className="text-xl font-semibold mb-3">Apple Intelligence & On-Device Recognition</h2>
              <p className="opacity-70">
                Scan with Apple Intelligence uses Apple's on-device Foundation Models and the Vision framework to read amounts, dates, and merchants from your documents. All recognition happens locally on your iPhone — the image, the extracted text, and the parsed result are not sent to TapSpent's servers, Apple's servers, or any third party.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-xl font-semibold mb-3">Currency Exchange Rates</h2>
              <p className="opacity-70">
                If you change the display currency, TapSpent fetches public exchange rates from api.frankfurter.app (a free, anonymous rates API run by the European Central Bank). This request contains no personal data and no information about your expenses — only a request for the latest rates. Rates are then cached on your device.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <h2 className="text-xl font-semibold mb-3">Notifications</h2>
              <p className="opacity-70">
                TapSpent can schedule local notifications for salary credit reminders and monthly reflection prompts. These are scheduled entirely on your device by iOS; no push servers or remote services are involved. You can disable notifications at any time in iOS Settings → TapSpent → Notifications.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-xl font-semibold mb-3">Backup & Export</h2>
              <p className="opacity-70">
                When you use the backup feature, a CSV file is generated locally on your device. You control where this file is saved or shared. TapSpent does not upload backups to any server.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <h2 className="text-xl font-semibold mb-3">No Account Required</h2>
              <p className="opacity-70">
                TapSpent works entirely offline (apart from the optional exchange-rate refresh) and does not require you to create an account, sign in, or provide any personal information.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-xl font-semibold mb-3">In-App Purchases</h2>
              <p className="opacity-70">
                TapSpent offers an optional Pro upgrade through the App Store. All purchase transactions are processed securely by Apple. TapSpent does not collect or store any payment information.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <h2 className="text-xl font-semibold mb-3">Changes to This Policy</h2>
              <p className="opacity-70">
                If we make changes to this privacy policy, we will update it within the app and on our website. Since we do not collect any personal data, changes are likely to be minor.
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
  );
}
