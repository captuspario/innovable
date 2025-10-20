import { motion } from 'motion/react';
import { ArrowUpRight, Mail, Search, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'Building Trust in AI Systems: Lessons from Therapair',
      excerpt: 'How transparency and human-centered design create user trust in AI-powered mental health matching.',
      category: 'AI Design',
      date: '2025-10-15',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
      featured: true
    },
    {
      id: 2,
      title: 'Rapid AI Prototyping: From Concept to Working Demo in 8 Weeks',
      excerpt: 'Our framework for moving fast without breaking things—validated learning meets intelligent systems.',
      category: 'Process',
      date: '2025-10-08',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
      featured: false
    },
    {
      id: 3,
      title: 'Inclusive Design for AI: More Than Just Accessibility',
      excerpt: 'Building intelligent systems that work for diverse communities from day one, not as an afterthought.',
      category: 'Design Thinking',
      date: '2025-10-01',
      readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
      featured: false
    },
    {
      id: 4,
      title: 'Why AI Product Strategy Needs Design Thinking',
      excerpt: 'Technical capability means nothing without user needs. How to bridge the gap between AI and humans.',
      category: 'Strategy',
      date: '2025-09-24',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800',
      featured: false
    },
    {
      id: 5,
      title: 'The Future of Conversational AI: Beyond Chatbots',
      excerpt: 'Moving from transactional exchanges to meaningful conversations that feel genuinely helpful.',
      category: 'AI Design',
      date: '2025-09-17',
      readTime: '9 min',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
      featured: false
    },
    {
      id: 6,
      title: 'Show, Don\'t Tell: Why Working Prototypes Matter',
      excerpt: 'Slide decks don\'t ship. Why we build functional demos instead of just documentation.',
      category: 'Process',
      date: '2025-09-10',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      featured: false
    }
  ];

  const categories = ['All', 'AI Design', 'Process', 'Design Thinking', 'Strategy'];

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
              Blog & Insights
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--deep-navy)] mb-6">
              Thoughts on AI, design, and meaningful innovation
            </h1>
            <p className="text-xl text-[var(--cool-gray-text)] leading-relaxed mb-8">
              Learnings from building intelligent systems. Process, strategy, and human-centered thinking.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[var(--cool-gray-text)]" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-4 rounded-lg border border-[var(--light-gray-border)] focus:outline-none focus:ring-2 focus:ring-[var(--electric-iris)] focus:border-transparent bg-white"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 md:px-12 bg-white border-b border-[var(--light-gray-border)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex gap-4 flex-wrap">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0
                    ? 'bg-[var(--electric-iris)] text-white'
                    : 'bg-[var(--warm-gray-bg)] text-[var(--deep-navy)] hover:bg-[var(--electric-iris)] hover:bg-opacity-10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-[var(--deep-navy)]">Featured</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center bg-[var(--warm-gray-bg)] rounded-3xl p-8 md:p-12 cursor-pointer hover:shadow-[var(--shadow-2)] transition-shadow"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <ImageWithFallback
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="inline-block bg-[var(--electric-iris)] bg-opacity-10 text-[var(--electric-iris)] px-4 py-2 rounded-full text-sm font-medium mb-4">
                {posts[0].category}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[var(--deep-navy)] mb-4">
                {posts[0].title}
              </h3>
              <p className="text-lg text-[var(--cool-gray-text)] mb-6 leading-relaxed">
                {posts[0].excerpt}
              </p>
              <div className="flex items-center gap-6 text-[var(--cool-gray-text)] text-sm mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{new Date(posts[0].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{posts[0].readTime}</span>
                </div>
              </div>
              <button className="inline-flex items-center gap-2 text-[var(--electric-iris)] font-medium hover:gap-3 transition-all">
                <span>Read Article</span>
                <ArrowUpRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-24 px-6 md:px-12 bg-[var(--warm-gray-bg)]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[var(--deep-navy)]">Latest Articles</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-[var(--shadow-1)] hover:shadow-[var(--shadow-2)] hover:-translate-y-1 transition-all group cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block bg-[var(--warm-gray-bg)] text-[var(--deep-navy)] px-3 py-1 rounded-full text-xs font-medium mb-3">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--deep-navy)] mb-3 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[var(--cool-gray-text)] text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-[var(--cool-gray-text)] text-xs mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-2 text-[var(--electric-iris)] text-sm font-medium group-hover:gap-3 transition-all">
                    <span>Read More</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[var(--deep-navy)] text-white">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Mail className="mx-auto mb-6 text-[var(--soft-cyan)]" size={48} />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Subscribe to our newsletter
            </h2>
            <p className="text-xl text-white text-opacity-80 mb-8 leading-relaxed">
              Get insights on AI innovation, design thinking, and meaningful technology. Plus opportunities to be featured in our showcase. No spam, ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--soft-cyan)] text-[var(--deep-navy)]"
              />
              <button className="bg-[var(--soft-cyan)] text-[var(--deep-navy)] px-8 py-4 rounded-lg font-medium hover:bg-[#00BFE5] transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-white text-opacity-60 mt-6">
              Join 500+ innovators, founders, and product leaders. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--deep-navy)] mb-6">
              Have a story to share?
            </h2>
            <p className="text-xl text-[var(--cool-gray-text)] mb-8 leading-relaxed max-w-2xl mx-auto">
              We're always looking for guest contributors and community stories. Submit your AI project or insights.
            </p>
            <Link to="/contact">
              <button className="bg-[var(--electric-iris)] text-white px-10 py-5 rounded-lg text-lg flex items-center justify-center gap-2 group hover:bg-[#4A3EDD] hover:shadow-[var(--shadow-iris)] transition-all duration-300 font-medium mx-auto">
                <span>Get in Touch</span>
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={24} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

