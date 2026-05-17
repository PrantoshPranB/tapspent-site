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
                TapSpent does not collect, transmit, or share any personal data. All expense and
                income records you create are stored exclusively on your device using Apple's
                SwiftData framework.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <h2 className="text-xl font-semibold mb-3">Local Storage Only</h2>
              <p className="opacity-70">
                Your financial data never leaves your device. There are no analytics, tracking,
                or third-party services embedded in TapSpent. We believe your spending habits are
                your business alone.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold mb-3">Backup & Export</h2>
              <p className="opacity-70">
                When you use the backup feature, a CSV file is generated locally on your device.
                You control where this file is saved or shared. TapSpent does not upload backups
                to any server.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <h2 className="text-xl font-semibold mb-3">No Account Required</h2>
              <p className="opacity-70">
                TapSpent works entirely offline and does not require you to create an account,
                sign in, or provide any personal information.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-xl font-semibold mb-3">In-App Purchases</h2>
              <p className="opacity-70">
                TapSpent offers an optional Pro upgrade as a one-time in-app purchase. All
                purchase transactions are processed securely by Apple through the App Store.
                TapSpent does not collect or store any payment information.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <h2 className="text-xl font-semibold mb-3">Changes to This Policy</h2>
              <p className="opacity-70">
                If we make changes to this privacy policy, we will update it within the app.
                Since we do not collect any data, changes are unlikely.
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
