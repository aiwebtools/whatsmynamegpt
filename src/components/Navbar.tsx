
import React, { useState, useEffect, useCallback } from 'react';
import Logo3D from './Logo3D';
import CyberButton from './CyberButton';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'bg-cyber-darkest/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 sm:h-16 items-center">
          <div className="flex-shrink-0 min-w-0">
            <Logo3D 
              size="sm" 
              href="https://chatgpt.com/g/g-67d86208628c8191887a7dc6853a5a97-name-insight-predictor" 
            />
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
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
              className="text-foreground/70 hover:text-foreground p-2 active:scale-95 transition-transform"
              onClick={toggleMenu}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
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

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 top-14 bg-cyber-darkest/98 backdrop-blur-lg transition-all duration-200 ${
          mobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 49 }}
      >
        <div className="px-4 pt-4 pb-6 space-y-2 max-h-[calc(100vh-3.5rem)] overflow-y-auto">
          <a
            href="https://chatgpt.com/g/g-67d86208628c8191887a7dc6853a5a97-name-insight-predictor"
            className="block px-4 py-3 rounded-lg text-base font-medium text-neon-blue hover:bg-neon-blue/10 active:bg-neon-blue/20 transition-colors"
            onClick={closeMenu}
          >
            Name Insight Predictor
          </a>
          <a
            href="#faq"
            className="block px-4 py-3 rounded-lg text-base font-medium text-neon-pink hover:bg-neon-pink/10 active:bg-neon-pink/20 transition-colors"
            onClick={closeMenu}
          >
            FAQ
          </a>
          <a
            href="#disclaimer"
            className="block px-4 py-3 rounded-lg text-base font-medium text-neon-purple hover:bg-neon-purple/10 active:bg-neon-purple/20 transition-colors"
            onClick={closeMenu}
          >
            Disclaimer
          </a>
          <a
            href="https://aiwebtools.lovable.app/?via=aiwebtools"
            className="block px-4 py-3 rounded-lg text-base font-medium text-neon-green hover:bg-neon-green/10 active:bg-neon-green/20 transition-colors border border-neon-green/30"
            onClick={closeMenu}
          >
            More AI Tools
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
