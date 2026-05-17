import { motion } from "motion/react";
import { Link } from "react-router";
import { Mail, Github, ExternalLink } from "lucide-react";
import logo from "../../imports/TapSpent_Logo_Text-2.png";
import profilePhoto from "../../imports/MyPhoto.jpg";

const storyCards = [
  {
    icon: "🌱",
    title: "From one spendthrift\nto another",
    body: "I built TapSpent because I was tired of the end-of-month panic — staring at my bank balance wondering where it all went. Bills I forgot about. Subscriptions I never cancelled. Small spends that added up to big regrets."
  },
  {
    icon: "📚",
    title: "I tried everything",
    body: "Notebooks, spreadsheets, budgeting apps — you name it. The fancy apps wanted my bank login. The simple ones made logging feel like filling out a tax form. I'd keep up for a week, then quietly give up."
  },
  {
    icon: "⚡",
    title: "So I built this",
    body: "TapSpent does one thing really well: it gets out of your way. Tap, type the amount, pick a category, done. Two seconds. No sign-ups, no cloud sync, no data leaving your phone. Your finances stay yours."
  },
  {
    icon: "🌳",
    title: "Small habit,\nbig difference",
    body: "You don't need a budgeting degree. You just need to notice where your money goes. Log as you spend. That's it. Over time, the picture becomes clear — and so do your choices."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="TapSpent" className="h-8" />
          </Link>
          <Link to="/" className="text-sm text-gray-600 hover:text-gray-900">
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-[#F5F3ED]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1
              className="mb-4"
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: '1.2',
                color: '#3A3D35',
                letterSpacing: '-0.02em'
              }}
            >
              Made with intention,
              <br />
              built for you.
            </h1>
            <p
              className="opacity-60 max-w-2xl mx-auto"
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '1.125rem',
                color: '#3A3D35'
              }}
            >
              The story behind TapSpent and why mindful spending matters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Developer Card */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-[#6B7C5E]/10 shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex-shrink-0"
              >
                <img
                  src={profilePhoto}
                  alt="Prantosh Bhattacharyya"
                  className="w-48 h-48 rounded-2xl object-cover shadow-lg opacity-70"
                />
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex-1"
              >
                <p
                  className="text-sm opacity-60 mb-2"
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    color: '#3A3D35'
                  }}
                >
                  Independently built by
                </p>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{
                    fontFamily: '"Instrument Serif", serif',
                    color: '#3A3D35'
                  }}
                >
                  Prantosh Bhattacharyya
                </h2>
                <p
                  className="text-lg opacity-60 mb-6"
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    color: '#3A3D35'
                  }}
                >
                  Indie Developer 🌱
                </p>

                <p
                  className="opacity-70 mb-8 leading-relaxed"
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '1.0625rem',
                    color: '#3A3D35',
                    lineHeight: '1.7'
                  }}
                >
                  I'm a developer passionate about building simple, thoughtful tools that respect your privacy. TapSpent is my attempt to create the expense tracker I always wanted — one that helps you understand your money without getting in the way.
                </p>

                {/* Contact Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    href="mailto:support@tapspent.in"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#3A3D35] text-white rounded-full hover:shadow-lg transition-all duration-300"
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: '1rem'
                    }}
                  >
                    <Mail className="w-5 h-5" />
                    Get in Touch
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#3A3D35] text-[#3A3D35] rounded-full hover:bg-[#3A3D35] hover:text-white transition-all duration-300"
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: '1rem'
                    }}
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Cards */}
      <section className="py-20 px-6 bg-[#F5F3ED]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                lineHeight: '1.2',
                color: '#3A3D35',
                letterSpacing: '-0.02em'
              }}
            >
              Why I Built TapSpent
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {storyCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className="text-4xl mb-4"
                  style={{
                    fontFamily: '"Instrument Serif", serif',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {card.icon}
                </div>
                <h3
                  className="text-xl font-semibold mb-4 whitespace-pre-line"
                  style={{
                    fontFamily: '"Instrument Serif", serif',
                    color: '#3A3D35',
                    lineHeight: '1.3'
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="opacity-70 leading-relaxed"
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    color: '#3A3D35',
                    lineHeight: '1.7'
                  }}
                >
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="mb-6"
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                lineHeight: '1.2',
                color: '#3A3D35',
                letterSpacing: '-0.02em'
              }}
            >
              Ready to track mindfully?
            </h2>
            <p
              className="opacity-60 mb-10"
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '1.125rem',
                color: '#3A3D35',
                lineHeight: '1.7'
              }}
            >
              Download TapSpent and start your journey toward financial clarity.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#3A3D35] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '1.0625rem'
              }}
            >
              <ExternalLink className="w-5 h-5" />
              Download on App Store
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#F5F3ED] border-t border-[#6B7C5E]/10">
        <div className="max-w-6xl mx-auto text-center">
          <p
            className="text-sm opacity-50"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              color: '#3A3D35'
            }}
          >
            Built with intention. Designed for clarity. Made for you.
          </p>
        </div>
      </footer>
    </div>
  );
}
