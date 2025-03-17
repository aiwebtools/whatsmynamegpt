
import React from 'react';
import Logo3D from './Logo3D';
import CyberButton from './CyberButton';
import { Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-16 pb-6 overflow-hidden">
      {/* Background grid with overlay */}
      <div className="absolute inset-0 cyber-grid -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 px-4">
            <Logo3D size="lg" href="https://chatgpt.com/g/g-67d86208628c8191887a7dc6853a5a97-name-insight-predictor" />
            <h5 className="text-lg mt-2 mb-4 text-white/80 italic">
              "Insert Your Name & Uncover Who You Are With Ai Precision"
            </h5>
            <div className="mt-6 space-y-2">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-neon-blue mr-2" />
                <a href="tel:+14758008096" className="text-white hover:text-neon-blue transition-colors">
                  (475) 800-8096
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-neon-pink mr-2" />
                <a href="mailto:Contact@ai-webtools.com" className="text-white hover:text-neon-pink transition-colors">
                  Contact@ai-webtools.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-6/12 px-4">
            <div className="flex flex-wrap items-top">
              <div className="w-full md:w-6/12 px-4 ml-auto mt-8 md:mt-0">
                <span className="block uppercase text-sm font-cyber font-semibold mb-4 text-neon-purple">
                  Navigation
                </span>
                <ul className="list-unstyled space-y-2">
                  <li>
                    <a 
                      href="https://chatgpt.com/g/g-67d86208628c8191887a7dc6853a5a97-name-insight-predictor"
                      className="text-white/70 hover:text-neon-blue transition-colors font-semibold block"
                    >
                      Name Insight Predictor
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#faq" 
                      className="text-white/70 hover:text-neon-pink transition-colors font-semibold block"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#disclaimer" 
                      className="text-white/70 hover:text-neon-purple transition-colors font-semibold block"
                    >
                      Disclaimer
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.aiwebtools.ai" 
                      className="text-white/70 hover:text-neon-green transition-colors font-semibold block"
                    >
                      More AI Tools
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="w-full md:w-6/12 px-4 mt-8 md:mt-0">
                <span className="block uppercase text-sm font-cyber font-semibold mb-4 text-neon-blue">
                  Legal
                </span>
                <ul className="list-unstyled space-y-2">
                  <li>
                    <a 
                      href="https://openai.com/policies/privacy-policy/"
                      className="text-white/70 hover:text-neon-blue transition-colors font-semibold block"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://aiwebtools.ai/terms-of-services"
                      className="text-white/70 hover:text-neon-pink transition-colors font-semibold block"
                    >
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="my-6 border-white/10" />
        
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-white/60 py-1">
              <a 
                href="https://www.aiwebtools.ai" 
                className="hover:text-neon-blue transition-colors"
              >
                © 2025 AI WEB TOOLS LLC All rights reserved.
              </a>
            </div>
          </div>
        </div>
        
        {/* More AI Tools corner button */}
        <div className="fixed bottom-4 right-4 z-10">
          <a 
            href="https://www.aiwebtools.ai"
            className="flex items-center justify-center px-4 py-2 rounded-full bg-cyber-dark border border-neon-green text-neon-green hover:bg-neon-green/10 transition-all shadow-neon-green"
          >
            More AI Tools
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
