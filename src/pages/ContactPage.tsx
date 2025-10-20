import { motion } from 'motion/react';
import { Mail, Send, Sparkles, Users, Lightbulb, MessageSquare } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--pure-white)] pt-20">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12 bg-[var(--warm-gray-bg)]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="text-sm font-medium text-[var(--electric-iris)] mb-6 tracking-wide">
              Get in Touch
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--deep-navy)] mb-6">
              Let's build something intelligent together
            </h1>
            <p className="text-xl text-[var(--cool-gray-text)] leading-relaxed">
              Whether you're exploring AI opportunities, validating a concept, or have an idea to share—we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[var(--electric-iris)] to-[var(--soft-cyan)] rounded-2xl p-8 text-white"
            >
              <Sparkles className="mb-4" size={32} />
              <h3 className="text-2xl font-semibold mb-3">Start a Project</h3>
              <p className="text-white text-opacity-90 mb-4">
                Have an AI product idea? Need strategic thinking or rapid prototyping?
              </p>
              <p className="text-sm text-white text-opacity-75">
                Perfect for: Leaders, founders, product teams
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-[var(--soft-cyan)] to-[var(--electric-iris)] rounded-2xl p-8 text-white"
            >
              <Lightbulb className="mb-4" size={32} />
              <h3 className="text-2xl font-semibold mb-3">Share Your Innovation</h3>
              <p className="text-white text-opacity-90 mb-4">
                Built something cool? We showcase community projects and experiments.
              </p>
              <p className="text-sm text-white text-opacity-75">
                Perfect for: Innovators, makers, experimenters
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-[var(--warm-amber)] to-[var(--electric-iris)] rounded-2xl p-8 text-white"
            >
              <MessageSquare className="mb-4" size={32} />
              <h3 className="text-2xl font-semibold mb-3">Just Say Hi</h3>
              <p className="text-white text-opacity-90 mb-4">
                Questions, collaboration ideas, or just want to connect?
              </p>
              <p className="text-sm text-white text-opacity-75">
                Perfect for: Everyone
              </p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[var(--deep-navy)] mb-6">
                Send us a message
              </h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--deep-navy)] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--light-gray-border)] focus:outline-none focus:ring-2 focus:ring-[var(--electric-iris)] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--deep-navy)] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--light-gray-border)] focus:outline-none focus:ring-2 focus:ring-[var(--electric-iris)] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-[var(--deep-navy)] mb-2">
                    I'm interested in *
                  </label>
                  <select
                    id="type"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[var(--light-gray-border)] focus:outline-none focus:ring-2 focus:ring-[var(--electric-iris)] focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="project">Starting a project</option>
                    <option value="submission">Submitting my innovation</option>
                    <option value="collaboration">Collaboration opportunity</option>
                    <option value="speaking">Speaking/workshop</option>
                    <option value="press">Press/media inquiry</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--deep-navy)] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--light-gray-border)] focus:outline-none focus:ring-2 focus:ring-[var(--electric-iris)] focus:border-transparent resize-none"
                    placeholder="Tell us about your project, idea, or question..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="mt-1 w-4 h-4 rounded border-[var(--light-gray-border)] text-[var(--electric-iris)] focus:ring-[var(--electric-iris)]"
                  />
                  <label htmlFor="newsletter" className="text-sm text-[var(--cool-gray-text)]">
                    Subscribe to our newsletter for insights on AI innovation, design thinking, and opportunities to be featured in our showcase
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[var(--electric-iris)] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#4A3EDD] hover:shadow-[var(--shadow-iris)] transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-[var(--deep-navy)] mb-4">
                  Community Submissions
                </h3>
                <p className="text-[var(--cool-gray-text)] leading-relaxed mb-6">
                  We're building a platform for innovators. If you've created an AI experiment, proof of concept, or innovative project—we'd love to feature it.
                </p>
                <div className="bg-[var(--warm-gray-bg)] rounded-xl p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[var(--electric-iris)] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-[var(--electric-iris)] rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--deep-navy)] mb-1">Featured in Our Showcase</h4>
                      <p className="text-sm text-[var(--cool-gray-text)]">
                        Your project displayed alongside our work
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[var(--soft-cyan)] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-[var(--soft-cyan)] rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--deep-navy)] mb-1">Newsletter Mention</h4>
                      <p className="text-sm text-[var(--cool-gray-text)]">
                        Shared with our community of 500+ innovators
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[var(--warm-amber)] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-[var(--warm-amber)] rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--deep-navy)] mb-1">Community Feedback</h4>
                      <p className="text-sm text-[var(--cool-gray-text)]">
                        Connect with other innovators and get insights
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[var(--deep-navy)] mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:hello@innovable.ai"
                    className="flex items-center gap-3 text-[var(--cool-gray-text)] hover:text-[var(--electric-iris)] transition-colors"
                  >
                    <Mail size={20} />
                    <span>hello@innovable.ai</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[var(--deep-navy)] mb-4">
                  Response Time
                </h3>
                <p className="text-[var(--cool-gray-text)] leading-relaxed">
                  We typically respond within 24-48 hours. For urgent inquiries, please mention it in your message.
                </p>
              </div>

              <div className="bg-[var(--deep-navy)] rounded-2xl p-8 text-white">
                <Users className="mb-4 text-[var(--soft-cyan)]" size={32} />
                <h3 className="text-xl font-semibold mb-3">
                  Join Our Community
                </h3>
                <p className="text-white text-opacity-80 mb-6">
                  Get updates on AI innovation, design thinking, and opportunities to collaborate.
                </p>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-3 rounded-lg text-[var(--deep-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--soft-cyan)]"
                  />
                  <button className="bg-[var(--soft-cyan)] text-[var(--deep-navy)] px-6 py-3 rounded-lg font-medium hover:bg-[#00BFE5] transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12 bg-[var(--warm-gray-bg)]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-[var(--deep-navy)] mb-4">
              Common Questions
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: 'What types of projects do you work on?',
                a: 'We focus on AI product strategy, rapid prototyping, and human-centered design for intelligent systems. Healthcare, education, and mission-driven organizations are our sweet spot.'
              },
              {
                q: 'How long does a typical project take?',
                a: 'Most prototypes are completed in 4-8 weeks. Strategy engagements are 2-3 weeks. We can move faster for simpler scopes or slower for complex systems.'
              },
              {
                q: 'Do you only work with startups?',
                a: 'No! We work with founders, product teams in established companies, non-profits, and government organizations. Anyone building AI that matters.'
              },
              {
                q: 'What makes Innovable different?',
                a: '10+ years of human-centered design experience combined with AI-native thinking. We build working prototypes, not just slide decks. Design and code, strategy and speed.'
              },
              {
                q: 'How do I submit my innovation for featuring?',
                a: 'Use the form above and select "Submitting my innovation." Tell us about your project, what makes it interesting, and why you think it would resonate with our community.'
              },
              {
                q: 'Do you offer workshops or speaking?',
                a: 'Yes! We present on AI product strategy, human-centered AI design, and rapid prototyping. Select "Speaking/workshop" in the form above.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-[var(--deep-navy)] mb-3">
                  {faq.q}
                </h3>
                <p className="text-[var(--cool-gray-text)] leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

