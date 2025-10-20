import { motion } from 'motion/react';
import { Heart, Sparkles, Target, Zap, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Human-Centered',
      description: 'Technology should amplify human capability, not replace it. We design AI that works alongside people.'
    },
    {
      icon: Sparkles,
      title: 'Purpose-Driven',
      description: 'We choose projects that matter—health, education, accessibility. Innovation with intention.'
    },
    {
      icon: Target,
      title: 'Show, Don\'t Tell',
      description: 'Working prototypes over slide decks. Validated learning over assumptions. Ship, test, iterate.'
    },
    {
      icon: Zap,
      title: 'Fast & Thoughtful',
      description: 'Move quickly without breaking thinking. Rapid iteration meets strategic depth.'
    }
  ];

  const timeline = [
    {
      year: '2013',
      title: 'The Beginning',
      description: 'Started as Prequel Design, focusing on human-centered digital experiences for health and education sectors.'
    },
    {
      year: '2015-2023',
      title: 'Building Foundations',
      description: 'Over 10 years designing for complex systems—universities, healthcare providers, government. Learning what works at scale.'
    },
    {
      year: '2024',
      title: 'Evolution',
      description: 'Expanded to Innovable.ai, combining design expertise with AI capability. Same values, bigger canvas.'
    },
    {
      year: '2025',
      title: 'Platform Launch',
      description: 'Building community around AI innovation. Sharing experiments, insights, and learnings in public.'
    }
  ];

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
              About Innovable
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--deep-navy)] mb-6">
              Design-led AI innovation
            </h1>
            <p className="text-xl text-[var(--cool-gray-text)] leading-relaxed">
              We're a studio, platform, and community building intelligent systems that augment human capability. Born from 10+ years of human-centered design, evolved for the AI era.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--deep-navy)] mb-6">
                From Prequel to Innovable
              </h2>
              <div className="space-y-4 text-lg text-[var(--cool-gray-text)] leading-relaxed">
                <p>
                  Innovable started as <a href="https://prequeldesign.com" target="_blank" rel="noopener noreferrer" className="text-[var(--electric-iris)] hover:underline inline-flex items-center gap-1">
                    Prequel Design <ExternalLink size={16} />
                  </a> in 2013—a human-centered design studio working with health, education, and government organizations to craft digital experiences that actually work for people.
                </p>
                <p>
                  Over 10+ years, we learned how to design for complex systems, diverse users, and real-world constraints. We worked with the University of Melbourne, healthcare providers, and mission-driven organizations. Always asking: how does this serve the human on the other end?
                </p>
                <p>
                  As AI capabilities accelerated, we saw an opportunity (and responsibility) to bring that human-centered lens to intelligent systems. Not AI for AI's sake, but AI that amplifies human capability, accelerates insight, and enables better decisions.
                </p>
                <p>
                  Innovable is the evolution—same values, expanded vision. We're building a platform to share experiments, showcase innovation, and create community around AI that matters.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 md:px-12 bg-[var(--warm-gray-bg)]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--deep-navy)] mb-4">
              Our Values
            </h2>
            <p className="text-xl text-[var(--cool-gray-text)]">
              What guides our work and shapes our decisions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-[var(--shadow-1)]"
              >
                <div className="w-14 h-14 bg-[var(--electric-iris)] bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="text-[var(--electric-iris)]" size={28} />
                </div>
                <h3 className="text-2xl font-semibold text-[var(--deep-navy)] mb-3">
                  {value.title}
                </h3>
                <p className="text-[var(--cool-gray-text)] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--deep-navy)] mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-[var(--cool-gray-text)]">
              Evolution from design studio to AI innovation platform
            </p>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-8 items-start"
              >
                <div className="w-24 flex-shrink-0">
                  <div className="text-2xl font-bold text-[var(--electric-iris)]">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 pb-8 border-b border-[var(--light-gray-border)] last:border-0">
                  <h3 className="text-xl font-semibold text-[var(--deep-navy)] mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-[var(--cool-gray-text)] leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 px-6 md:px-12 bg-[var(--deep-navy)] text-white">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What we bring
            </h2>
            <p className="text-xl text-white text-opacity-80 max-w-3xl">
              10+ years of human-centered design meets AI-native thinking
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Design Expertise',
                skills: ['Human-centered design', 'UX research & strategy', 'Interface design', 'Design systems', 'Accessibility (WCAG 2.1)']
              },
              {
                title: 'AI Capability',
                skills: ['AI product strategy', 'Conversational design', 'ML integration', 'Prototyping & validation', 'Ethical AI frameworks']
              },
              {
                title: 'Domain Knowledge',
                skills: ['Healthcare & mental health', 'Education & universities', 'Government services', 'Complex systems', 'Inclusive design']
              }
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white bg-opacity-10 rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold mb-4">{area.title}</h3>
                <ul className="space-y-2">
                  {area.skills.map((skill, i) => (
                    <li key={i} className="flex items-start gap-2 text-white text-opacity-80">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--soft-cyan)] mt-2 flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prequel Design Reference */}
      <section className="py-24 px-6 md:px-12 bg-[var(--warm-gray-bg)]">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[var(--cool-gray-text)] mb-4">
              Looking for our traditional design services?
            </p>
            <a 
              href="https://prequeldesign.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--electric-iris)] text-lg font-medium hover:gap-3 transition-all"
            >
              <span>Visit Prequel Design</span>
              <ExternalLink size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--deep-navy)] mb-6">
              Let's build the future together
            </h2>
            <p className="text-xl text-[var(--cool-gray-text)] mb-8 leading-relaxed max-w-2xl mx-auto">
              Whether you're exploring AI opportunities, validating a concept, or building an intelligent system—we'd love to collaborate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="bg-[var(--electric-iris)] text-white px-10 py-5 rounded-lg text-lg font-medium hover:bg-[#4A3EDD] hover:shadow-[var(--shadow-iris)] transition-all duration-300">
                  Start a Conversation
                </button>
              </Link>
              
              <Link to="/work">
                <button className="border-2 border-[var(--electric-iris)] text-[var(--electric-iris)] px-10 py-5 rounded-lg text-lg hover:bg-[var(--electric-iris)] hover:text-white transition-all duration-300 font-medium">
                  View Our Work
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

