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
  return <div className="min-h-screen bg-cyber-darkest text-white relative">
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
      
      {/* Embedded image section at the bottom of the page */}
      <div className="w-full py-12 flex justify-center items-center">
        <div className="max-w-2xl w-full glass-panel p-6 rounded-lg border border-neon-blue/30 hover:border-neon-blue/60 transition-all">
          <h3 className="text-2xl font-cyber text-neon-blue mb-4">UNCOVER INSIGHTS ABOUT YOU, Simply Provide Your Name To Begin</h3>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <a href="https://ideogram.ai/assets/image/lossless/response/ZafO3nzESTGrQyzOMI5DPg" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <img src="https://ideogram.ai/assets/image/lossless/response/ZafO3nzESTGrQyzOMI5DPg" alt="AI Generated Art" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm">Created with Ideogram AI - Click to view full image</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>;
};
export default Index;