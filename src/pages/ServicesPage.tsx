import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Zap, Target, Lightbulb, Users, Boxes, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ServicesPage() {
  const services = [
    {
      icon: Lightbulb,
      title: 'AI Product Strategy',
      tagline: 'From idea to validated concept',
      description: 'Translate business goals into intelligent product experiences. Strategic thinking that connects AI capability with user needs.',
      includes: [
        'Opportunity mapping & feasibility assessment',
        'User research & needs validation',
        'Technical architecture planning',
        'Competitive landscape analysis'
      ],
      timeline: '2-3 weeks',
      bestFor: 'Leaders exploring AI opportunities',
      color: 'var(--electric-iris)'
    },
    {
      icon: Zap,
      title: 'Rapid Prototyping',
      tagline: 'Working demos in weeks, not months',
      description: 'Test your hypothesis with real users. Build functional prototypes that prove concept and inform next steps.',
      includes: [
        'Working AI prototype development',
        'User testing & feedback integration',
        'Technical proof of concept',
        'Iteration based on real data'
      ],
      timeline: '4-8 weeks',
      bestFor: 'Founders validating AI products',
      color: 'var(--soft-cyan)'
    },
    {
      icon: Target,
      title: 'Product Design & UX',
      tagline: 'Human-centered AI experiences',
      description: 'Craft intelligent systems that feel intuitive, not algorithmic. Design that builds trust and drives adoption.',
      includes: [
        'User research & journey mapping',
        'Interface design & prototyping',
        'Design systems & component libraries',
        'Accessibility & inclusive design'
      ],
      timeline: '6-12 weeks',
      bestFor: 'Product teams building AI features',
      color: 'var(--warm-amber)'
    },
    {
      icon: Users,
      title: 'Community & Platform',
      tagline: 'Share ideas, showcase innovation',
      description: 'Leverage our platform to share your AI experiments, connect with innovators, and get featured in our newsletter.',
      includes: [
        'Project showcase opportunities',
        'Newsletter feature & promotion',
        'Community feedback & insights',
        'Cross-pollination with other innovators'
      ],
      timeline: 'Ongoing',
      bestFor: 'Innovators building in public',
      color: 'var(--electric-iris)'
    }
  ];

  const workingStyle = [
    {
      icon: MessageSquare,
      title: 'Collaborative',
      description: 'We embed with your team, not operate in isolation. Regular check-ins, transparent progress, continuous feedback.'
    },
    {
      icon: Zap,
      title: 'Fast',
      description: 'Rapid iteration cycles. Ship working prototypes in weeks. Learn from real users, not assumptions.'
    },
    {
      icon: Sparkles,
      title: 'Strategic',
      description: 'Beautiful design meets business thinking. Every decision connected to user needs and organizational goals.'
    },
    {
      icon: Boxes,
      title: 'Hands-On',
      description: 'We build, not just advise. Working code, tested designs, validated concepts—not slide decks.'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--pure-white)] pt-20">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="text-sm font-medium text-[var(--electric-iris)] mb-6 tracking-wide">
              Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--deep-navy)] mb-6">
              From concept to intelligent reality
            </h1>
            <p className="text-xl text-[var(--cool-gray-text)] leading-relaxed">
              Strategic thinking meets rapid prototyping. We help leaders and product teams build AI products that matter—combining human-centered design with creative AI capability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 md:px-12 bg-[var(--warm-gray-bg)]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--deep-navy)] mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-[var(--cool-gray-text)]">
              Flexible engagements tailored to your stage and needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-[var(--shadow-1)] hover:shadow-[var(--shadow-2)] transition-shadow"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <service.icon style={{ color: service.color }} size={28} />
                </div>
                
                <h3 className="text-2xl font-bold text-[var(--deep-navy)] mb-2">
                  {service.title}
                </h3>
                
                <p className="text-[var(--cool-gray-text)] font-medium mb-4">
                  {service.tagline}
                </p>
                
                <p className="text-[var(--cool-gray-text)] leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mb-6">
                  <div className="text-sm font-semibold text-[var(--deep-navy)] mb-3">
                    What's included:
                  </div>
                  <ul className="space-y-2">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[var(--cool-gray-text)]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--electric-iris)] mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-[var(--light-gray-border)]">
                  <div>
                    <div className="text-xs text-[var(--cool-gray-text)] mb-1">Timeline</div>
                    <div className="font-semibold text-[var(--deep-navy)]">{service.timeline}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-[var(--cool-gray-text)] mb-1">Best for</div>
                    <div className="font-semibold text-[var(--deep-navy)] text-sm">{service.bestFor}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--deep-navy)] mb-6">
              How We Work
            </h2>
            <p className="text-xl text-[var(--cool-gray-text)] max-w-3xl">
              Our approach combines strategic thinking with maker mentality. We're designers and builders who understand both business context and technical reality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workingStyle.map((style, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--warm-gray-bg)] rounded-xl p-6"
              >
                <style.icon className="text-[var(--electric-iris)] mb-4" size={32} />
                <h3 className="text-lg font-semibold text-[var(--deep-navy)] mb-2">
                  {style.title}
                </h3>
                <p className="text-[var(--cool-gray-text)] text-sm leading-relaxed">
                  {style.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 md:px-12 bg-[var(--warm-gray-bg)]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--deep-navy)] mb-4">
              Typical Process
            </h2>
            <p className="text-xl text-[var(--cool-gray-text)]">
              Flexible framework adapted to your needs
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                week: 'Week 1',
                title: 'Discovery & Strategy',
                description: 'Deep dive into your goals, users, and constraints. Map opportunities and define success metrics.'
              },
              {
                week: 'Week 2-3',
                title: 'Design & Prototype',
                description: 'Rapid iteration on concepts. Test hypotheses with low-fidelity prototypes and user feedback.'
              },
              {
                week: 'Week 4-6',
                title: 'Build & Validate',
                description: 'Working AI prototype. Test with real users, gather data, iterate based on insights.'
              },
              {
                week: 'Week 7-8',
                title: 'Refine & Handoff',
                description: 'Polish experience, document learnings, prepare for next phase. Code, designs, and strategic recommendations.'
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 flex gap-6 items-start"
              >
                <div className="w-20 flex-shrink-0">
                  <div className="text-sm font-semibold text-[var(--electric-iris)]">
                    {phase.week}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[var(--deep-navy)] mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-[var(--cool-gray-text)] leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-[var(--electric-iris)] bg-opacity-10 rounded-xl p-6 text-center"
          >
            <p className="text-[var(--deep-navy)] font-medium">
              <Sparkles className="inline-block mr-2 text-[var(--electric-iris)]" size={20} />
              Every project is different. This timeline adapts to your specific needs and scope.
            </p>
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
              Ready to start building?
            </h2>
            <p className="text-xl text-[var(--cool-gray-text)] mb-8 leading-relaxed max-w-2xl mx-auto">
              Whether you have a clear vision or just a spark of an idea, let's explore what's possible.
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

