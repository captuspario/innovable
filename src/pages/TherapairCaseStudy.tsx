import { motion } from 'motion/react';
import { ArrowUpRight, ExternalLink, Heart, Sparkles, Users, Target, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function TherapairCaseStudy() {
  return (
    <div className="min-h-screen bg-[var(--pure-white)] pt-20">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-[var(--electric-iris)] to-[var(--soft-cyan)] text-white">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/work" className="inline-flex items-center gap-2 text-white text-opacity-80 hover:text-opacity-100 mb-6 transition-opacity">
              <span>← Back to Work</span>
            </Link>
            
            <div className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Health Tech · AI Product Design
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Therapair
            </h1>
            
            <p className="text-2xl md:text-3xl mb-8 opacity-90 max-w-3xl leading-relaxed">
              Intelligent therapist matching for inclusive mental health
            </p>

            <a 
              href="https://therapair.com.au/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[var(--electric-iris)] px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all"
            >
              <span>Visit Therapair</span>
              <ExternalLink size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 md:px-12 -mt-16">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-[16/9] bg-white rounded-3xl overflow-hidden shadow-[var(--shadow-3)]"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200"
              alt="Therapair platform"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <h2 className="text-4xl font-bold text-[var(--deep-navy)] mb-6">
                The Challenge
              </h2>
              <p className="text-xl text-[var(--cool-gray-text)] leading-relaxed mb-6">
                Finding the right therapist is hard. For LGBTQ+, neurodivergent, and culturally diverse communities, it's even harder. Traditional therapist directories offer filters, but they can't understand nuance—the subtle match between a person's needs and a therapist's approach.
              </p>
              <p className="text-xl text-[var(--cool-gray-text)] leading-relaxed">
                Therapair needed an intelligent system that could consider identity, values, therapeutic approach, and personal circumstances to make meaningful, empathetic matches.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="text-sm text-[var(--cool-gray-text)] mb-2 font-medium">Role</div>
                <div className="text-[var(--deep-navy)] font-medium">Product Design & AI Strategy</div>
              </div>
              <div>
                <div className="text-sm text-[var(--cool-gray-text)] mb-2 font-medium">Timeline</div>
                <div className="text-[var(--deep-navy)] font-medium">8 weeks concept → prototype</div>
              </div>
              <div>
                <div className="text-sm text-[var(--cool-gray-text)] mb-2 font-medium">Partnership</div>
                <div className="text-[var(--deep-navy)] font-medium">Unison Health</div>
              </div>
              <div>
                <div className="text-sm text-[var(--cool-gray-text)] mb-2 font-medium">Technologies</div>
                <div className="text-[var(--deep-navy)] font-medium">AI Matching Algorithm, Conversational UI</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24 px-6 md:px-12 bg-[var(--warm-gray-bg)]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--deep-navy)] mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-[var(--cool-gray-text)] leading-relaxed max-w-3xl">
              We designed an AI-powered conversational experience that feels human, not algorithmic. Through guided questions, Therapair learns about identity, values, and therapeutic needs, then matches users with therapists who truly understand.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Heart,
                color: 'var(--electric-iris)',
                title: 'Human-Centered AI',
                description: 'Conversational interface that feels empathetic and understanding, not cold and clinical.'
              },
              {
                icon: Users,
                color: 'var(--soft-cyan)',
                title: 'Inclusive by Design',
                description: 'Built with LGBTQ+, neurodivergent, and culturally diverse communities from day one.'
              },
              {
                icon: Target,
                color: 'var(--warm-amber)',
                title: 'Smart Matching',
                description: 'AI considers identity, therapeutic approach, availability, and personal values for meaningful matches.'
              },
              {
                icon: Sparkles,
                color: 'var(--electric-iris)',
                title: 'Partnership Model',
                description: 'Collaboration with Unison Health ensures clinical validation and real-world testing.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-[var(--shadow-1)]"
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon style={{ color: item.color }} size={24} />
                </div>
                <h3 className="text-xl font-semibold text-[var(--deep-navy)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--cool-gray-text)] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--deep-navy)] mb-6">
              Key Features
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                title: 'Conversational Matching Flow',
                description: 'Natural language questions that progressively understand needs, identity, and preferences without feeling like a form.'
              },
              {
                title: 'Identity-Affirming Filters',
                description: 'Options for LGBTQ+ identities, neurodivergence, cultural background, and language preferences built into the core experience.'
              },
              {
                title: 'Therapeutic Approach Matching',
                description: 'AI considers CBT, ACT, trauma-informed, and other approaches to find therapists aligned with how users want to heal.'
              },
              {
                title: 'Real-Time Availability',
                description: 'Integration with therapist schedules to show availability and facilitate immediate booking.'
              },
              {
                title: 'Match Explanations',
                description: 'Transparent reasoning for why each therapist is recommended, building trust in the AI system.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 items-start"
              >
                <CheckCircle2 className="text-[var(--electric-iris)] mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-[var(--deep-navy)] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--cool-gray-text)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-24 px-6 md:px-12 bg-[var(--deep-navy)] text-white">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Impact & Results
            </h2>
            <p className="text-xl text-white text-opacity-80 leading-relaxed max-w-3xl">
              From concept to working prototype in 8 weeks, with validation from Unison Health and positive early user feedback.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: '8 weeks',
                label: 'Concept to prototype',
                icon: Zap
              },
              {
                metric: 'Partnership',
                label: 'with Unison Health',
                icon: Users
              },
              {
                metric: 'Inclusive',
                label: 'LGBTQ+, neurodivergent, culturally diverse',
                icon: Heart
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white bg-opacity-10 rounded-2xl p-8"
              >
                <stat.icon className="text-[var(--soft-cyan)] mb-4" size={32} />
                <div className="text-4xl font-bold mb-2">{stat.metric}</div>
                <div className="text-white text-opacity-70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learnings */}
      <section className="py-24 px-6 md:px-12 bg-[var(--warm-gray-bg)]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--deep-navy)] mb-6">
              Key Learnings
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Trust is Everything',
                description: 'In mental health, users need to understand why the AI is making recommendations. Transparency builds trust.'
              },
              {
                title: 'Inclusive from Day One',
                description: 'Designing for diverse communities isn\'t an add-on—it needs to be core to the product from the start.'
              },
              {
                title: 'Speed Matters',
                description: '8 weeks from concept to working prototype proved rapid AI prototyping is possible with the right approach.'
              },
              {
                title: 'Partnership Amplifies Impact',
                description: 'Collaboration with Unison Health brought clinical expertise and real-world validation to the project.'
              }
            ].map((learning, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-[var(--shadow-1)]"
              >
                <h3 className="text-xl font-semibold text-[var(--deep-navy)] mb-3">
                  {learning.title}
                </h3>
                <p className="text-[var(--cool-gray-text)] leading-relaxed">
                  {learning.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--deep-navy)] mb-8">
              Want to build something intelligent together?
            </h2>
            <p className="text-xl text-[var(--cool-gray-text)] mb-8 leading-relaxed max-w-2xl mx-auto">
              From concept to prototype in weeks. Let's turn your AI idea into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="bg-[var(--electric-iris)] text-white px-10 py-5 rounded-lg text-lg flex items-center justify-center gap-2 group hover:bg-[#4A3EDD] hover:shadow-[var(--shadow-iris)] transition-all duration-300 font-medium">
                  <span>Start a Project</span>
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={24} />
                </button>
              </Link>
              
              <Link to="/work">
                <button className="border-2 border-[var(--electric-iris)] text-[var(--electric-iris)] px-10 py-5 rounded-lg text-lg hover:bg-[var(--electric-iris)] hover:text-white transition-all duration-300 font-medium">
                  View More Projects
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

