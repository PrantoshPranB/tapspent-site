import { motion } from "motion/react";
import { Link } from "react-router";
import { Mail, Github, ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet-async";
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
    <>
      <Helmet>
        <title>About TapSpent — Mindful Spending Companion</title>
        <meta
          name="description"
          content="Learn the story behind TapSpent and how we're changing the way people think about their spending."
        />
      </Helmet>
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
                  Indie Developer • Weekend Builder 🌱
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

      {/* Full Origin Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2
              className="mb-12"
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                lineHeight: '1.2',
                color: '#3A3D35',
                letterSpacing: '-0.02em'
              }}
            >
              The Real Origin Story
            </h2>

            <div
              className="prose prose-lg max-w-none"
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                color: '#3A3D35',
                lineHeight: '1.8'
              }}
            >
              <p className="text-lg opacity-80 mb-6">
                <strong>I'm not good with money.</strong> There, I said it.
              </p>

              <p className="opacity-70 mb-6">
                Most months, my savings are negligible. Some months, I have to borrow just to keep functioning. I know where the problem is - I'm a spendthrift. But knowing the problem and fixing it are two very different things.
              </p>

              <p className="opacity-70 mb-6">
                I've tried everything.
              </p>

              <p className="opacity-70 mb-6">
                <strong>First attempt: Paper notebooks.</strong> I'd write down every expense religiously. "₹80 - chai," "₹200 - auto." Felt productive. Lasted exactly 2 days before I lost the notebook. Started again. Lost it again. Gave up.
              </p>

              <p className="opacity-70 mb-6">
                <strong>Second attempt: Notes app on my phone.</strong> More convenient, right? Wrong. Opening Notes, typing the amount, adding what I bought... by day three, I'd have 47 untracked expenses and a guilt spiral about being "bad with money."
              </p>

              <p className="opacity-70 mb-6">
                <strong>Third attempt: Budget apps.</strong> Downloaded Mint. Deleted it in a week - too complicated. Tried Money Lover. Overwhelmed by categories, budgets, goals. Tried Wallet. Same thing. They all wanted to show me budgets and predictions and savings goals. But I didn't need a budget lecture. I just wanted to know: Where is my money actually going?
              </p>

              <p className="opacity-70 mb-6">
                Because here's the thing - I can't change my rent. I can't negotiate my groceries down to zero. Those are fixed. What I needed to understand was everything else. The ₹100 here, ₹300 there that somehow added up to me being broke by the 20th of every month.
              </p>

              <p className="opacity-70 mb-6">
                None of the apps helped. They were too busy trying to make me feel bad about not having an "emergency fund" when I was just trying to figure out why I couldn't afford groceries.
              </p>

              <p className="opacity-70 mb-6">
                <strong>Fourth attempt: Excel spreadsheet.</strong> I'm a bit technical, so I built a simple tracker in Excel. Income at the top, expenses below, running balance. Perfect! Except... it meant opening my laptop every time I spent money. Bought chai? Go home, open laptop, find the file, enter ₹20. Bought lunch? Same thing. Within two weeks, I had a backlog of expenses I "would enter later." I never did.
              </p>

              <p className="opacity-70 mb-6">
                <strong>Then I hit my breaking point.</strong> It was the middle of the month. I wanted to buy a book - nothing expensive, ₹400. But I genuinely didn't know if I could afford it. Not because I was broke, but because I had no idea how much money I actually had left after accounting for the rest of the month. I felt stupid. How does a grown adult not know if they can spend ₹400?
              </p>

              <p className="opacity-70 mb-6">
                That Friday evening, after work, I sat down and decided: I'm building the tool I actually need. Not a budget app. Not a financial planning tool. Just something that answers one question: How much do I have right now?
              </p>

              <p className="opacity-70 mb-6">
                I work a full-time job. Monday to Friday, I'm at my desk from 9 to 6. So I had only my weekends. That first Saturday morning, I opened my laptop and started building a simple web app.
              </p>

              <p className="opacity-70 mb-6">
                Really simple. It asked for:
              </p>

              <ul className="list-disc list-inside opacity-70 mb-6 space-y-2">
                <li>How much income do you have?</li>
                <li>How much did you spend?</li>
                <li>What did you spend it on?</li>
              </ul>

              <p className="opacity-70 mb-6">
                That's it. No categories (I'd add those later). No budgets. No red warnings. Just: here's your balance. I used it every day for a week. Actually used it. For the first time in years, I was tracking expenses consistently.
              </p>

              <p className="opacity-70 mb-6">
                And that's when I understood the real problem. It's not that people don't want to track expenses. It's that every app makes it too damn hard.
              </p>

              <p className="opacity-70 mb-6">
                Opening the app. Waiting for it to load. Finding the "add expense" button. Entering the amount. Selecting a category from 47 options. Adding a note. Choosing a payment method. Confirming. Waiting for it to save. For a ₹20 expense. No wonder I gave up every time.
              </p>

              <p className="opacity-70 mb-6">
                My web app just asked: How much? Where? Two fields. Done. 5 seconds. That's when TapSpent started.
              </p>

              <p className="opacity-70 mb-6">
                <strong>Every Saturday and Sunday for the next six months, I taught myself Swift.</strong> I'd never coded for iOS before. My weekdays were spent at work - TapSpent was purely a weekend project.
              </p>

              <p className="opacity-70 mb-6">
                Saturday mornings: YouTube tutorials on SwiftUI. Saturday afternoons: Building features, breaking things, rebuilding them. Sunday mornings: Designing screens because I couldn't stop thinking about how to make expense logging even faster. Sunday evenings: Testing, fixing bugs, starting the cycle again next weekend.
              </p>

              <p className="opacity-70 mb-6">
                Some weekends I barely made progress. Some weekends I'd code for 12 hours straight because I was in the zone. But it was always weekends - my personal time, my side project.
              </p>

              <p className="opacity-70 mb-6">
                I added widgets so you don't even need to open the app. I added back-tap shortcuts so you can log expenses with two taps on your phone. I designed those monthly reflection cards at 2 AM on a Saturday night because I couldn't sleep thinking about the typography.
              </p>

              <p className="opacity-70 mb-6">
                But I kept the core principle: <strong>Make it so easy that you'll actually do it.</strong>
              </p>

              <p className="opacity-70 mb-6">
                And then I realized something else while building it. Every time I opened those other budget apps, I felt bad. The red warnings. The "you're over budget" alerts. The graphs showing my "failures." I wasn't failing. I was just... living. Spending money on things I needed, and sometimes things I wanted. Being human.
              </p>

              <p className="opacity-70 mb-6">
                So I made TapSpent different. Instead of "YOU'VE OVERSPENT ₹2,000," it shows you "You had 1 calm, no-spend day this week." Instead of red warnings, sunset gradients. Instead of guilt, understanding.
              </p>

              <p className="opacity-70 mb-6">
                <strong>TapSpent doesn't judge you for being human. It just helps you see where your money goes, so you can make better decisions tomorrow.</strong>
              </p>

              <p className="opacity-70 mb-6">
                Because that's all I ever wanted. Not a lecture. Not shame. Just clarity.
              </p>

              <p className="opacity-70 mb-6">
                <strong>Six months of weekends.</strong> That's what it took. Learning Swift from scratch, designing every screen, building every feature. All while working my full-time job during the week.
              </p>

              <p className="opacity-70 mb-6">
                If you've tried to track expenses and given up, this is for you. If you've felt stupid for not knowing if you can afford something, this is for you. If you just want to understand your money without feeling terrible about yourself - this is for you.
              </p>

              <p className="text-lg opacity-80 mt-10 pt-6 border-t border-gray-200">
                Welcome to TapSpent. Built on weekends by someone who gets it, for everyone who's been there.
              </p>

              <p className="opacity-60 mt-4">
                — Prantosh Bhattacharyya<br />
                Full-time Senior Software Engineer. Weekend builder. Spendthrift. Still learning.
              </p>
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
    </>
  );
}
