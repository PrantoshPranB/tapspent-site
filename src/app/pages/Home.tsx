import { motion } from "motion/react";
import { Download, Shield } from "lucide-react";
import { Link } from "react-router";
import logo from "../../imports/TapSpent_Logo_Text-2.png";
import heroImage from "../../imports/App_SS_1-1.png";
import reflectionImage from "../../imports/ChatGPT_Image_May_15__2026_at_03_18_48_AM.png";
import privacyImage from "../../imports/App_SS_2-1.png";
import doubleTapImage from "../../imports/App_SS_3-1.png";
import widgetsImage from "../../imports/App_SS_4-1.png";
import reportsImage from "../../imports/App_SS_5-1.png";
import appleWatchImage from "../../imports/App_SS_6.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F3ED] overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#6B7C5E]/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="TapSpent" className="h-8 cursor-pointer" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm opacity-70 hover:opacity-100 transition-opacity"
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                color: '#3A3D35'
              }}
            >
              Features
            </a>
            <Link
              to="/about"
              className="text-sm opacity-70 hover:opacity-100 transition-opacity"
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                color: '#3A3D35'
              }}
            >
              About
            </Link>
            <Link
              to="/privacy"
              className="text-sm opacity-70 hover:opacity-100 transition-opacity"
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                color: '#3A3D35'
              }}
            >
              Privacy
            </Link>
          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2 bg-[#3A3D35] text-white rounded-full text-sm hover:shadow-lg transition-all duration-300"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          >
            Download
          </motion.button>
        </div>
      </header>

      {/* Hero Section - Clarity for every day */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <Link to="/">
            <img src={logo} alt="TapSpent" className="h-12 md:h-14 cursor-pointer" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-center mb-16 max-w-4xl"
        >
          <h1
            className="mb-6"
            style={{
              fontFamily: '"Instrument Serif", serif',
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              lineHeight: '1.1',
              color: '#3A3D35',
              letterSpacing: '-0.02em'
            }}
          >
            Mindful spending<br />made simple
          </h1>
          <p
            className="opacity-60"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
              lineHeight: '1.5',
              color: '#3A3D35'
            }}
          >
            Track expenses effortlessly, understand your habits,<br />
            and build better spending awareness.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4 }}
        >
          <motion.img
            src={heroImage}
            alt="TapSpent app interface"
            className="w-full max-w-md shadow-2xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 opacity-50 text-center"
          style={{
            fontFamily: '"Instrument Serif", serif',
            fontSize: '1.125rem',
            color: '#3A3D35',
            fontStyle: 'italic'
          }}
        >
          Clarity for every day.<br />Day and night.
        </motion.p>
      </section>

      {/* Expense Tracking - Guilt-Free */}
      <section className="relative py-32 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWtlJTIwbW91bnRhaW4lMjBzdW5yaXNlJTIwY2FsbSUyMHNlcmVuZXxlbnwxfHx8fDE3Nzg3OTM3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Lake sunrise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white/30" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex flex-col"
            >
              {/* Leaf Icon */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-6"
              >
                <svg className="w-8 h-8 text-[#6B7C5E]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1 }}
                className="mb-4"
                style={{
                  fontFamily: '"Instrument Serif", serif',
                  fontSize: 'clamp(1.875rem, 5vw, 3.5rem)',
                  lineHeight: '1.15',
                  color: '#3A3D35',
                  letterSpacing: '-0.02em'
                }}
              >
                Expense tracking<br />that doesn't make<br />you feel guilty.
              </motion.h2>

              {/* Decorative divider */}
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: '3rem' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-px bg-[#6B7C5E]/30 mb-6"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '1.125rem',
                  color: '#6B7C5E',
                  lineHeight: '1.6'
                }}
              >
                Mindful spending made simpler.
              </motion.p>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex justify-center"
            >
              <img
                src={reflectionImage}
                alt="Expense tracking reflection"
                className="w-full max-w-sm rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Track Spending Effortlessly */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1533168461629-51f6f8061c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzZXJlbmUlMjBtb3VudGFpbiUyMGxha2UlMjBmb3Jlc3QlMjBjYWxtJTIwYXRtb3NwaGVyaWN8ZW58MXx8fHwxNzc4NzkzNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F3ED] via-transparent to-[#F5F3ED]" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center text-center mb-16"
          >
            <img src={logo} alt="TapSpent" className="h-8 mb-8 opacity-60" />
            <h2
              className="mb-4"
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: '1.15',
                color: '#3A3D35',
                letterSpacing: '-0.02em'
              }}
            >
              Two taps to<br />log any expense
            </h2>
            <p
              className="opacity-60 max-w-2xl"
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '1.125rem',
                color: '#3A3D35',
                lineHeight: '1.6'
              }}
            >
              No complicated forms. No unnecessary steps. Just tap, type the amount, and you're done. Logging takes seconds, not minutes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="flex justify-center"
          >
            <img
              src={doubleTapImage}
              alt="Double tap to log"
              className="w-full max-w-sm"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-12 text-center opacity-50"
            style={{
              fontFamily: '"Instrument Serif", serif',
              fontSize: '1.125rem',
              color: '#3A3D35',
              fontStyle: 'italic'
            }}
          >
            Double tap to log
          </motion.p>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="relative py-32 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1542751675-5bd6665a0f2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzZXJlbmUlMjBtb3VudGFpbiUyMGxha2UlMjBmb3Jlc3QlMjBjYWxtJTIwYXRtb3NwaGVyaWN8ZW58MXx8fHwxNzc4NzkzNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Forest nature"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center text-center mb-16"
          >
            <img src={logo} alt="TapSpent" className="h-8 mb-8 opacity-60" />
            <h2
              className="mb-4"
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: '1.15',
                color: '#3A3D35',
                letterSpacing: '-0.02em'
              }}
            >
              Built for privacy,<br />not profit
            </h2>
            <p
              className="opacity-60 max-w-2xl"
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '1.125rem',
                color: '#3A3D35',
                lineHeight: '1.6'
              }}
            >
              Everything stays on your device. No cloud, no tracking, no data broker nonsense. Your financial life is yours alone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="flex justify-center"
          >
            <img
              src={privacyImage}
              alt="Privacy first"
              className="w-full max-w-sm"
            />
          </motion.div>
        </div>
      </section>

      {/* Apple Watch & Siri */}
      <section className="relative py-32 px-6 bg-[#F5F3ED] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1621519997950-158b631341b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJlbmUlMjBtb3VudGFpbiUyMGxha2UlMjBmb3Jlc3QlMjBjYWxtJTIwYXRtb3NwaGVyaWN8ZW58MXx8fHwxNzc4NzkzNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Lake and mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F3ED]/50 via-transparent to-[#F5F3ED]/50" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center text-center mb-16"
          >
            <img src={logo} alt="TapSpent" className="h-8 mb-8 opacity-60" />
            <h2
              className="mb-4"
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: '1.15',
                color: '#3A3D35',
                letterSpacing: '-0.02em'
              }}
            >
              Log on the go with<br />voice and wearables
            </h2>
            <p
              className="opacity-60 max-w-2xl"
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '1.125rem',
                color: '#3A3D35',
                lineHeight: '1.6'
              }}
            >
              "Hey Siri, log $15 for coffee" or tap your Apple Watch. Never let a transaction slip away just because you're busy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="flex justify-center"
          >
            <img
              src={appleWatchImage}
              alt="Apple Watch with TapSpent"
              className="w-full max-w-sm"
            />
          </motion.div>
        </div>
      </section>

      {/* Widgets - Clarity at a glance */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1692320152923-ce0ad6db27c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzZXJlbmUlMjBtb3VudGFpbiUyMGxha2UlMjBmb3Jlc3QlMjBjYWxtJTIwYXRtb3NwaGVyaWN8ZW58MXx8fHwxNzc4NzkzNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Forest lake"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F3ED] via-[#F5F3ED]/95 to-[#F5F3ED]" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center text-center mb-16"
          >
            <img src={logo} alt="TapSpent" className="h-8 mb-8 opacity-60" />
            <h2
              className="mb-4"
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: '1.15',
                color: '#3A3D35',
                letterSpacing: '-0.02em'
              }}
            >
              Check in without<br />opening the app
            </h2>
            <p
              className="opacity-60 max-w-2xl"
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '1.125rem',
                color: '#3A3D35',
                lineHeight: '1.6'
              }}
            >
              Lock screen widgets put your spending summary right where you look first. One glance and you know where you stand today.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="flex justify-center"
          >
            <img
              src={widgetsImage}
              alt="TapSpent widgets"
              className="w-full max-w-sm"
            />
          </motion.div>
        </div>
      </section>

      {/* Beautiful Reports */}
      <section className="relative py-32 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1516040217640-43603638e8e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzZXJlbmUlMjBtb3VudGFpbiUyMGxha2UlMjBjYWxtJTIwYXRtb3NwaGVyaWN8ZW58MXx8fHwxNzc4NzkzNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Mountain lake"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center text-center mb-16"
          >
            <img src={logo} alt="TapSpent" className="h-8 mb-8 opacity-60" />
            <h2
              className="mb-4"
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: '1.15',
                color: '#3A3D35',
                letterSpacing: '-0.02em'
              }}
            >
              Understand your<br />spending patterns
            </h2>
            <p
              className="opacity-60 max-w-2xl"
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '1.125rem',
                color: '#3A3D35',
                lineHeight: '1.6'
              }}
            >
              Beautiful charts and insights reveal where your money actually goes. Knowledge is the first step to change.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="flex justify-center"
          >
            <img
              src={reportsImage}
              alt="TapSpent reports"
              className="w-full max-w-sm"
            />
          </motion.div>
        </div>
      </section>

      {/* Privacy */}
      <section className="py-32 px-6 bg-[#F5F3ED]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#6B7C5E]/10 mb-8">
              <Shield className="w-8 h-8 text-[#6B7C5E]" />
            </div>
            <h2
              className="mb-6"
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                lineHeight: '1.2',
                color: '#3A3D35',
                letterSpacing: '-0.01em'
              }}
            >
              Your data stays<br />on your device
            </h2>
            <p
              className="opacity-60 max-w-xl mx-auto"
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '1.125rem',
                lineHeight: '1.7',
                color: '#3A3D35'
              }}
            >
              TapSpent is built with privacy at its core.<br />
              All your data is stored locally. No cloud. No tracking. No ads.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img src={logo} alt="TapSpent" className="h-10 mx-auto mb-8 opacity-60" />
            <h2
              className="mb-10"
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                lineHeight: '1.2',
                color: '#3A3D35',
                letterSpacing: '-0.01em'
              }}
            >
              Start tracking mindfully
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#3A3D35] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '1.0625rem'
              }}
            >
              <Download className="w-5 h-5" />
              Download on the App Store
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-[#F5F3ED] border-t border-[#6B7C5E]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Link to="/">
              <img src={logo} alt="TapSpent" className="h-8 cursor-pointer" />
            </Link>

            <div className="flex gap-8 flex-wrap justify-center">
              <Link
                to="/about"
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  color: '#3A3D35'
                }}
              >
                About
              </Link>
              <Link
                to="/privacy"
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  color: '#3A3D35'
                }}
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  color: '#3A3D35'
                }}
              >
                Terms of Use
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p
              className="text-xs opacity-30"
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                color: '#3A3D35'
              }}
            >
              Mindful spending. More clarity. Every day.
            </p>
          </div>
        </div>
      </footer>

      {/* Subtle grain texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />
    </div>
  );
}
