import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function WorkPage() {
  const projects = [
    {
      id: 'therapair',
      title: 'Therapair',
      category: 'Health Tech · AI Product Design',
      tagline: 'Intelligent therapist matching for inclusive mental health',
      description: 'AI-powered conversational matching that considers identity, values, and therapeutic needs—making mental healthcare accessible for LGBTQ+, neurodivergent, and culturally diverse communities.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
      tags: ['AI Matching', 'Inclusive Design', 'Partnership with Unison Health'],
      gradient: 'from-[var(--electric-iris)] to-[var(--soft-cyan)]',
      featured: true
    },
    {
      id: 'unimelb',
      title: 'University of Melbourne',
      category: 'Education · Information Architecture',
      tagline: 'Simplifying navigation for thousands of users',
      description: 'Co-design workshops and strategic IA restructure for one of Australia\'s largest university websites, improving findability and user journeys.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
      tags: ['Co-design', 'IA Strategy', 'User Testing'],
      gradient: 'from-[var(--soft-cyan)] to-[var(--electric-iris)]',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--pure-white)] pt-20">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12 bg-[var(--warm-gray-bg)]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="text-sm font-medium text-[var(--electric-iris)] mb-6 tracking-wide">
              Our Work
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--deep-navy)] mb-6">
              Ideas, concepts, and proof of concepts
            </h1>
            <p className="text-xl text-[var(--cool-gray-text)] leading-relaxed">
              Real projects solving real problems. From health tech to education, we build intelligent systems that augment human capability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Project - Therapair */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-[var(--deep-navy)]">Featured Case Study</h2>
          </motion.div>

          <Link to="/work/therapair">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-[var(--electric-iris)] to-[var(--soft-cyan)] rounded-3xl p-8 md:p-12 text-white cursor-pointer hover:shadow-[var(--shadow-3)] transition-all"
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
                  <span>View Full Case Study</span>
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
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-24 px-6 md:px-12 bg-[var(--warm-gray-bg)]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[var(--deep-navy)] mb-4">All Projects</h2>
            <p className="text-[var(--cool-gray-text)]">Exploring the intersection of design and intelligent systems</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(1).map((project, index) => (
              <Link to={`/work/${project.id}`} key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-[var(--shadow-1)] hover:shadow-[var(--shadow-2)] hover:-translate-y-1 transition-all group cursor-pointer"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <div className="text-sm text-[var(--electric-iris)] font-medium mb-3">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-semibold text-[var(--deep-navy)] mb-3">
                      {project.title}
                    </h3>
                    <p className="text-[var(--cool-gray-text)] mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-[var(--warm-gray-bg)] text-[var(--deep-navy)] px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-[var(--electric-iris)] font-medium">
                      <span>View Case Study</span>
                      <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}

            {/* Submit Your Idea Card */}
            <Link to="/contact">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-[var(--warm-amber)] to-[var(--electric-iris)] rounded-2xl overflow-hidden shadow-[var(--shadow-1)] hover:shadow-[var(--shadow-2)] hover:-translate-y-1 transition-all group cursor-pointer"
              >
                <div className="aspect-[16/10] flex items-center justify-center p-12">
                  <div className="text-center text-white">
                    <Sparkles className="mx-auto mb-4" size={64} />
                    <h3 className="text-3xl font-bold mb-4">
                      Have an idea?
                    </h3>
                    <p className="text-lg opacity-90">
                      Submit your project or concept to be featured
                    </p>
                  </div>
                </div>
                <div className="p-8 bg-white">
                  <div className="text-sm text-[var(--warm-amber)] font-medium mb-3">
                    Community Submissions
                  </div>
                  <h3 className="text-2xl font-semibold text-[var(--deep-navy)] mb-3">
                    Share Your Innovation
                  </h3>
                  <p className="text-[var(--cool-gray-text)] mb-4 leading-relaxed">
                    We're building a platform for the community. Share your AI projects, proof of concepts, or ideas.
                  </p>
                  <div className="flex items-center gap-2 text-[var(--electric-iris)] font-medium">
                    <span>Submit Your Idea</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
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
              Want to build something together?
            </h2>
            <p className="text-xl text-[var(--cool-gray-text)] mb-8 leading-relaxed max-w-2xl mx-auto">
              From concept to prototype in weeks. Let's turn your AI idea into reality.
            </p>
            <Link to="/contact">
              <button className="bg-[var(--electric-iris)] text-white px-10 py-5 rounded-lg text-lg flex items-center justify-center gap-2 group hover:bg-[#4A3EDD] hover:shadow-[var(--shadow-iris)] transition-all duration-300 font-medium mx-auto">
                <span>Start a Project</span>
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={24} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

