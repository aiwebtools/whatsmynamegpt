
import React, { useState, useEffect } from 'react';
import Logo3D from './Logo3D';
import CyberButton from './CyberButton';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cyber-darkest/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Logo3D 
              size="md" 
              href="https://chatgpt.com/g/g-67d86208628c8191887a7dc6853a5a97-name-insight-predictor" 
            />
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <CyberButton 
              variant="default" 
              size="sm"
              href="https://chatgpt.com/g/g-67d86208628c8191887a7dc6853a5a97-name-insight-predictor"
            >
              Name Insight Predictor
            </CyberButton>
            <CyberButton 
              variant="pink" 
              size="sm"
              href="#faq"
            >
              FAQ
            </CyberButton>
            <CyberButton 
              variant="purple" 
              size="sm"
              href="#disclaimer"
            >
              Disclaimer
            </CyberButton>
            <CyberButton 
              variant="green" 
              size="sm"
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              glowing
            >
              More AI Tools
            </CyberButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-neon-pink" />
              ) : (
                <Menu className="h-6 w-6 text-neon-blue" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="https://chatgpt.com/g/g-67d86208628c8191887a7dc6853a5a97-name-insight-predictor"
              className="block px-3 py-2 rounded-md text-base font-medium text-neon-blue hover:bg-neon-blue/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Name Insight Predictor
            </a>
            <a
              href="#faq"
              className="block px-3 py-2 rounded-md text-base font-medium text-neon-pink hover:bg-neon-pink/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href="#disclaimer"
              className="block px-3 py-2 rounded-md text-base font-medium text-neon-purple hover:bg-neon-purple/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Disclaimer
            </a>
            <a
              href="https://www.aiwebtools.ai"
              className="block px-3 py-2 rounded-md text-base font-medium text-neon-green hover:bg-neon-green/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              More AI Tools
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
