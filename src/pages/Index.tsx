
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import NameAnalysis from '@/components/NameAnalysis';
import HowItWorks from '@/components/HowItWorks';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import DisclaimerSection from '@/components/DisclaimerSection';
import Footer from '@/components/Footer';
import ConsentModal from '@/components/ConsentModal';
import { Link } from 'lucide-react';

const Index = () => {
  const [consentAccepted, setConsentAccepted] = useState(false);

  useEffect(() => {
    // Update page title
    document.title = "Name Insight Predictor - Uncover Your Name's Hidden Potential";
    
    // Check if consent has been given previously
    const storedConsent = localStorage.getItem('nip-consent-accepted');
    if (storedConsent === 'true') {
      setConsentAccepted(true);
    }
  }, []);

  const handleConsentAccept = () => {
    setConsentAccepted(true);
  };

  return (
    <div className="min-h-screen bg-cyber-darkest text-white relative">
      {/* Fixed image badge that links out */}
      <a 
        href="https://ideogram.ai/assets/image/lossless/response/ZafO3nzESTGrQyzOMI5DPg"
        target="_blank"
        rel="noopener noreferrer" 
        className="fixed bottom-24 left-4 z-40 hidden md:block"
      >
        <div className="relative glass-panel p-2 rounded-lg border border-neon-blue/30 hover:border-neon-blue/60 transition-all hover:scale-105">
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-cyber-dark rounded-full flex items-center justify-center border border-neon-pink">
            <Link className="h-3 w-3 text-neon-pink" />
          </div>
          <img 
            src="https://ideogram.ai/assets/image/lossless/response/ZafO3nzESTGrQyzOMI5DPg" 
            alt="AI Generated Art" 
            className="w-16 h-16 object-cover rounded-md"
          />
        </div>
      </a>
      
      {/* Mobile link - shown as button with image */}
      <a 
        href="https://ideogram.ai/assets/image/lossless/response/ZafO3nzESTGrQyzOMI5DPg"
        target="_blank"
        rel="noopener noreferrer" 
        className="fixed bottom-20 right-4 z-40 md:hidden"
      >
        <div className="flex items-center space-x-1 glass-panel p-1 rounded-full border border-neon-blue/30">
          <img 
            src="https://ideogram.ai/assets/image/lossless/response/ZafO3nzESTGrQyzOMI5DPg" 
            alt="AI Art" 
            className="w-6 h-6 rounded-full object-cover"
          />
          <Link className="h-3 w-3 text-neon-blue mr-1" />
        </div>
      </a>
      
      {!consentAccepted && <ConsentModal onAccept={handleConsentAccept} />}
      
      <Navbar />
      
      <main>
        <HeroSection />
        <NameAnalysis />
        <HowItWorks />
        <TestimonialsSection />
        <FAQSection />
        <DisclaimerSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
