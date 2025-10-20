import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Zap, Users, Heart, Lightbulb, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--pure-white)]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6 md:px-12 pt-20">
        <div className="max-w-[1440px] w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Main Headline */}
            <div className="relative max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-sm font-medium text-[var(--electric-iris)] mb-6 tracking-wide"
              >
                AI Innovation Studio
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-7xl leading-tight tracking-tight font-bold text-[var(--deep-navy)] mb-8"
              >
                Where intelligent systems meet human imagination
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-[var(--cool-gray-text)] max-w-3xl leading-relaxed mb-12"
              >
                We help leaders, founders, and product teams prototype AI products that matter—combining human-centered design with creative AI capability.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/work">
                  <button className="bg-[var(--electric-iris)] text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 group hover:bg-[#4A3EDD] hover:shadow-[var(--shadow-iris)] transition-all duration-300 active:scale-[0.98]">
                    <span className="font-medium">Explore Our Work</span>
                    <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                  </button>
                </Link>
                
                <Link to="/contact">
                  <button className="border-2 border-[var(--electric-iris)] text-[var(--electric-iris)] px-8 py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[var(--electric-iris)] hover:text-white transition-all duration-300 font-medium">
                    <Sparkles size={18} />
                    <span>Start a Project</span>
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16 flex flex-wrap gap-8 text-sm text-[var(--cool-gray-text)]"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[var(--electric-iris)] rounded-full" />
                <span>10+ years design experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[var(--soft-cyan)] rounded-full" />
                <span>Healthcare & Education focus</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[var(--warm-amber)] rounded-full" />
                <span>Global reach</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[var(--warm-gray-bg)]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-3xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--deep-navy)] mb-6">
              Creative intelligence for meaningful innovation
            </h2>
            <p className="text-xl text-[var(--cool-gray-text)] leading-relaxed">
              We're a platform for creating community, sharing ideas, and prototyping intelligent systems.
            </p>
          </motion.div>

          {/* Value Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-[var(--shadow-1)] hover:shadow-[var(--shadow-2)] transition-shadow"
            >
              <div className="w-12 h-12 bg-[var(--electric-iris)] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-[var(--electric-iris)]" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-[var(--deep-navy)] mb-4">Platform & Community</h3>
              <p className="text-[var(--cool-gray-text)] leading-relaxed">
                Share ideas, learn from experiments, and connect with innovators building human-centered AI.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-[var(--shadow-1)] hover:shadow-[var(--shadow-2)] transition-shadow"
            >
              <div className="w-12 h-12 bg-[var(--soft-cyan)] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="text-[var(--soft-cyan)]" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-[var(--deep-navy)] mb-4">Innovation Showcase</h3>
              <p className="text-[var(--cool-gray-text)] leading-relaxed">
                Explore working experiments and use cases—demonstrations of what's possible when creativity meets intelligence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-[var(--shadow-1)] hover:shadow-[var(--shadow-2)] transition-shadow"
            >
              <div className="w-12 h-12 bg-[var(--warm-amber)] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-[var(--warm-amber)]" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-[var(--deep-navy)] mb-4">Consultancy & Prototyping</h3>
              <p className="text-[var(--cool-gray-text)] leading-relaxed">
                From concept to working prototype in weeks. Strategic thinking meets rapid AI product development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work - Therapair */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-[var(--deep-navy)] mb-4 font-bold">
              Featured Work
            </h2>
            <p className="text-xl text-[var(--cool-gray-text)]">
              Real projects solving real problems
            </p>
          </motion.div>

          {/* Therapair Featured Card */}
          <Link to="/work/therapair">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-[var(--electric-iris)] to-[var(--soft-cyan)] rounded-3xl p-8 md:p-12 text-white cursor-pointer hover:shadow-[var(--shadow-3)] transition-shadow"
            >
              <div>
                <div className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  Health Tech · AI Product Design
                </div>
                <h3 className="text-3xl md:text-4xl mb-4 font-bold">
                  Therapair
                </h3>
                <p className="text-xl mb-6 opacity-90 leading-relaxed">
                  Intelligent therapist matching for inclusive mental health
                </p>
                <p className="mb-8 opacity-80 leading-relaxed">
                  AI-powered conversational matching that considers identity, values, and therapeutic needs—making mental healthcare accessible for LGBTQ+, neurodivergent, and culturally diverse communities.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg text-sm">
                    AI Matching Algorithm
                  </div>
                  <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg text-sm">
                    Inclusive Design
                  </div>
                  <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg text-sm">
                    Partnership with Unison Health
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 bg-white text-[var(--electric-iris)] px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
                  <span>View Case Study</span>
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] bg-white bg-opacity-10 rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800"
                    alt="Therapair mental health matching platform"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* More Projects */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Link to="/work">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-[var(--shadow-1)] hover:shadow-[var(--shadow-2)] transition-all group cursor-pointer"
              >
                <div className="aspect-[16/10] bg-[var(--warm-gray-bg)] relative overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800"
                    alt="University of Melbourne navigation project"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="text-sm text-[var(--electric-iris)] font-medium mb-3">
                    Education · Information Architecture
                  </div>
                  <h3 className="text-2xl font-semibold text-[var(--deep-navy)] mb-3">
                    University of Melbourne
                  </h3>
                  <p className="text-[var(--cool-gray-text)] mb-4 leading-relaxed">
                    Simplifying one of Australia's largest university websites through co-design and strategic IA restructure.
                  </p>
                  <div className="flex items-center gap-2 text-[var(--electric-iris)] font-medium">
                    <span>View Case Study</span>
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.div>
            </Link>

            <Link to="/contact">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-[var(--shadow-1)] hover:shadow-[var(--shadow-2)] transition-all group cursor-pointer"
              >
                <div className="aspect-[16/10] bg-[var(--warm-gray-bg)] relative overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <Lightbulb className="text-[var(--cool-gray-text)] mx-auto mb-4" size={48} />
                    <p className="text-[var(--cool-gray-text)]">More projects coming soon</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-sm text-[var(--warm-amber)] font-medium mb-3">
                    AI · Automation
                  </div>
                  <h3 className="text-2xl font-semibold text-[var(--deep-navy)] mb-3">
                    Future Concepts
                  </h3>
                  <p className="text-[var(--cool-gray-text)] mb-4 leading-relaxed">
                    We're always exploring new ideas. Want to share yours or be featured?
                  </p>
                  <div className="flex items-center gap-2 text-[var(--electric-iris)] font-medium">
                    <span>Submit Your Idea</span>
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[var(--deep-navy)] text-white">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-6xl mb-8 leading-tight font-bold">
              Human-centered, purpose-driven
            </h2>
            <p className="text-xl md:text-2xl text-white text-opacity-80 max-w-3xl leading-relaxed">
              Not replacing humans. Amplifying capability. Building AI that works alongside people, enhancing creativity, accelerating insight, and enabling better decisions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                num: "01",
                title: "Show, Don't Tell",
                desc: "Every claim backed by working code. Every hypothesis tested with real users. No vapor, just validated prototypes."
              },
              {
                num: "02",
                title: "Speed + Substance",
                desc: "Move fast without breaking thinking. Rapid iteration meets strategic depth. Ship in weeks, not quarters."
              },
              {
                num: "03",
                title: "Design + AI Native",
                desc: "Fluent in both languages. Where pixel-perfect UI meets intelligent systems. Craft meets capability."
              },
              {
                num: "04",
                title: "Open by Default",
                desc: "Share learnings. Publish experiments. Build in public. Rising tide lifts all boats."
              }
            ].map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-5xl text-[var(--electric-iris)] mb-4 opacity-40 font-bold">{principle.num}</div>
                <h3 className="text-2xl mb-4 font-semibold">{principle.title}</h3>
                <p className="text-white text-opacity-70 leading-relaxed">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[var(--warm-gray-bg)]">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heart className="text-[var(--electric-iris)] mx-auto mb-6" size={48} />
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--deep-navy)] mb-6">
              Join our community
            </h2>
            <p className="text-xl text-[var(--cool-gray-text)] mb-8 leading-relaxed">
              Get insights on AI innovation, design thinking, and meaningful technology. Plus opportunities to be featured in our showcase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg border border-[var(--light-gray-border)] focus:outline-none focus:ring-2 focus:ring-[var(--electric-iris)] focus:border-transparent"
              />
              <button className="bg-[var(--electric-iris)] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#4A3EDD] transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-[var(--cool-gray-text)] mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-7xl text-[var(--deep-navy)] mb-8 leading-tight font-bold">
              Let's build something<br />
              <span className="text-[var(--electric-iris)]">intelligent together</span>
            </h2>
            
            <p className="text-xl text-[var(--cool-gray-text)] mb-12 max-w-2xl mx-auto leading-relaxed">
              Whether you're validating an AI idea or building a production system—let's start the conversation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="bg-[var(--electric-iris)] text-white px-10 py-5 rounded-lg text-lg flex items-center justify-center gap-2 group hover:bg-[#4A3EDD] hover:shadow-[var(--shadow-iris)] transition-all duration-300 font-medium">
                  <span>Start a Project</span>
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={24} />
                </button>
              </Link>
              
              <a href="mailto:hello@innovable.ai">
                <button className="border-2 border-[var(--electric-iris)] text-[var(--electric-iris)] px-10 py-5 rounded-lg text-lg hover:bg-[var(--electric-iris)] hover:text-white transition-all duration-300 font-medium flex items-center justify-center gap-2">
                  <Mail size={20} />
                  <span>hello@innovable.ai</span>
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

