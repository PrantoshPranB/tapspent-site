import { motion } from "motion/react";
import { Download, Shield } from "lucide-react";
import { Link } from "react-router";
import logo from "../../imports/TapSpent_Logo_Text-2.png";
import heroImage from "../../imports/App_SS_1-1.png";
import privacyImage from "../../imports/App_SS_2-1.png";
import doubleTapImage from "../../imports/App_SS_3-1.png";
import widgetsImage from "../../imports/App_SS_4-1.png";
import reportsImage from "../../imports/App_SS_5-1.png";
import appleWatchImage from "../../imports/App_SS_6.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F3ED] overflow-x-hidden">
      {/* Hero Section - Clarity for every day */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
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
              className="mb-8"
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: '1.15',
                color: '#3A3D35',
                letterSpacing: '-0.02em'
              }}
            >
              Track spending<br />effortlessly
            </h2>
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
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1542751675-5bd6665a0f2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzZXJlbmUlMjBtb3VudGFpbiUyMGxha2UlMjBmb3Jlc3QlMjBjYWxtJTIwYXRtb3NwaGVyaWN8ZW58MXx8fHwxNzc4NzkzNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Forest nature"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left side - Text and icons */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <img src={logo} alt="TapSpent" className="h-6 mb-8 opacity-60" />

              <h2
                className="mb-6"
                style={{
                  fontFamily: '"Instrument Serif", serif',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  lineHeight: '1.15',
                  color: '#3A3D35',
                  letterSpacing: '-0.02em'
                }}
              >
                Your data<br />stays private.
              </h2>

              <p
                className="mb-12 opacity-60 max-w-md"
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '1.0625rem',
                  lineHeight: '1.7',
                  color: '#3A3D35'
                }}
              >
                TapSpent is 100% private and local. Your data never leaves your device and is never shared.
              </p>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6B7C5E]/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#6B7C5E]" />
                  </div>
                  <div>
                    <div
                      className="mb-1"
                      style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: '0.9375rem',
                        color: '#3A3D35'
                      }}
                    >
                      100% Private
                    </div>
                    <p
                      className="opacity-50 text-sm"
                      style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        color: '#3A3D35'
                      }}
                    >
                      Never leaves your device
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6B7C5E]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#6B7C5E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div
                      className="mb-1"
                      style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: '0.9375rem',
                        color: '#3A3D35'
                      }}
                    >
                      On-Device Only
                    </div>
                    <p
                      className="opacity-50 text-sm"
                      style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        color: '#3A3D35'
                      }}
                    >
                      All processing is local
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6B7C5E]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#6B7C5E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  </div>
                  <div>
                    <div
                      className="mb-1"
                      style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: '0.9375rem',
                        color: '#3A3D35'
                      }}
                    >
                      No Tracking
                    </div>
                    <p
                      className="opacity-50 text-sm"
                      style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        color: '#3A3D35'
                      }}
                    >
                      We never see your data
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6B7C5E]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#6B7C5E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <div
                      className="mb-1"
                      style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: '0.9375rem',
                        color: '#3A3D35'
                      }}
                    >
                      Fully Encrypted
                    </div>
                    <p
                      className="opacity-50 text-sm"
                      style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        color: '#3A3D35'
                      }}
                    >
                      Secure local storage
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right side - iPhone mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="flex justify-center md:justify-end"
            >
              <img
                src={privacyImage}
                alt="Privacy first"
                className="w-full max-w-xs md:max-w-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Apple Watch & Siri */}
      <section className="relative py-32 px-6 bg-[#F5F3ED] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1621519997950-158b631341b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJlbmUlMjBtb3VudGFpbiUyMGxha2UlMjBmb3Jlc3QlMjBjYWxtJTIwYXRtb3NwaGVyaWN8ZW58MXx8fHwxNzc4NzkzNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Lake and mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F3ED] via-[#F5F3ED]/90 to-[#F5F3ED]" />
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
              className="mb-8"
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: '1.15',
                color: '#3A3D35',
                letterSpacing: '-0.02em'
              }}
            >
              Log expenses<br />with Siri or Apple Watch
            </h2>
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
              className="mb-8"
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: '1.15',
                color: '#3A3D35',
                letterSpacing: '-0.02em'
              }}
            >
              Clarity,<br />at a glance.
            </h2>
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
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1516040217640-43603638e8e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzZXJlbmUlMjBtb3VudGFpbiUyMGxha2UlMjBmb3Jlc3QlMjBjYWxtJTIwYXRtb3NwaGVyaWN8ZW58MXx8fHwxNzc4NzkzNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Mountain lake"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
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
              className="mb-8"
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: '1.15',
                color: '#3A3D35',
                letterSpacing: '-0.02em'
              }}
            >
              See your spending.<br />Find your clarity.
            </h2>
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
