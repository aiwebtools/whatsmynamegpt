
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
    // Update page title and meta description dynamically
    document.title = "Name Insight Predictor - AI-Powered Name Analysis & Hidden Meaning Discovery";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover the hidden meanings, cultural significance, and personality traits in your name with our advanced AI tool. Get comprehensive analysis of etymology, numerology, and historical context.');
    }

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
      {!consentAccepted && <ConsentModal onAccept={handleConsentAccept} />}
      
      <Navbar />
      
      <main role="main">
        <HeroSection />
        <NameAnalysis />
        <HowItWorks />
        <TestimonialsSection />
        <FAQSection />
        <DisclaimerSection />
      </main>
      
      {/* Featured AI Art Section */}
      <section className="w-full py-12" aria-labelledby="ai-art-heading">
        <div className="flex justify-center items-center">
          <article className="max-w-2xl w-full glass-panel p-6 rounded-lg border border-neon-blue/30 hover:border-neon-blue/60 transition-all">
            <h2 id="ai-art-heading" className="text-2xl font-cyber text-neon-blue mb-4">
              Discover Your Hidden Potential — Enter Your Name to Begin Your Journey
            </h2>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <a 
                href="https://ideogram.ai/assets/image/lossless/response/ZafO3nzESTGrQyzOMI5DPg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full h-full"
                aria-label="View AI-generated art showcasing name analysis concept"
              >
                <img 
                  src="https://ideogram.ai/assets/image/lossless/response/ZafO3nzESTGrQyzOMI5DPg" 
                  alt="AI-generated artistic visualization of name analysis and hidden potential discovery" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white text-sm">Created with Ideogram AI - Click to view full image</p>
                </div>
              </a>
            </div>
          </article>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
