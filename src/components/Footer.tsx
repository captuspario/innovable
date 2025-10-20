import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--deep-navy)] text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand Column */}
          <div>
            <h3 className="mb-4">Innovable.ai</h3>
            <p className="text-white/70 mb-6">
              Where intelligent systems meet human imagination
            </p>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:hello@innovable.ai"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Platform Column */}
          <div>
            <h4 className="mb-4 text-white/90">Platform</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/work" className="text-white/70 hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/70 hover:text-white transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors">
                  Submit Your Idea
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="mb-4 text-white/90">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-white/70 hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-white transition-colors">
                  AI Strategy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-white transition-colors">
                  Rapid Prototyping
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="mb-4 text-white/90">Connect</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors">
                  Get in Touch
                </Link>
              </li>
              <li>
                <a href="mailto:hello@innovable.ai" className="text-white/70 hover:text-white transition-colors">
                  hello@innovable.ai
                </a>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-center md:text-left">
            © 2025 Innovable.ai. Where intelligence meets imagination.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
