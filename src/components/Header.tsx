import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[var(--light-gray-border)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-[var(--deep-navy)] tracking-tight">
              Innovable.ai
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/work" 
              className="text-[var(--deep-navy)] hover:text-[var(--electric-iris)] transition-colors duration-150 font-medium"
            >
              Work
            </Link>
            <Link 
              to="/services" 
              className="text-[var(--deep-navy)] hover:text-[var(--electric-iris)] transition-colors duration-150 font-medium"
            >
              Services
            </Link>
            <Link 
              to="/blog" 
              className="text-[var(--deep-navy)] hover:text-[var(--electric-iris)] transition-colors duration-150 font-medium"
            >
              Insights
            </Link>
            <Link 
              to="/about" 
              className="text-[var(--deep-navy)] hover:text-[var(--electric-iris)] transition-colors duration-150 font-medium"
            >
              About
            </Link>
            <Link to="/contact">
              <button className="bg-[var(--electric-iris)] text-white px-6 py-3 rounded-lg hover:bg-[#4A3EDD] hover:shadow-[var(--shadow-iris)] transition-all duration-150 active:scale-[0.98] font-medium">
                Start a Project
              </button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-[var(--deep-navy)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-white z-40">
          <nav className="flex flex-col p-6 gap-6">
            <Link 
              to="/work" 
              className="text-[var(--deep-navy)] py-3 border-b border-[var(--light-gray-border)] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Work
            </Link>
            <Link 
              to="/services" 
              className="text-[var(--deep-navy)] py-3 border-b border-[var(--light-gray-border)] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/blog" 
              className="text-[var(--deep-navy)] py-3 border-b border-[var(--light-gray-border)] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Insights
            </Link>
            <Link 
              to="/about" 
              className="text-[var(--deep-navy)] py-3 border-b border-[var(--light-gray-border)] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <button className="bg-[var(--electric-iris)] text-white px-6 py-3 rounded-lg mt-4 font-medium w-full">
                Start a Project
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
