
import React, { useState, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import CyberButton from './CyberButton';

interface ConsentModalProps {
  onAccept: () => void;
}

const ConsentModal: React.FC<ConsentModalProps> = ({ onAccept }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [hasAccepted, setHasAccepted] = useState(false);

  useEffect(() => {
    // Check if user has previously accepted
    const hasUserAccepted = localStorage.getItem('nip-consent-accepted');
    if (hasUserAccepted === 'true') {
      setHasAccepted(true);
      setIsOpen(false);
      onAccept();
    }
    
    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onAccept]);

  const handleAccept = () => {
    setHasAccepted(true);
    localStorage.setItem('nip-consent-accepted', 'true');
    setIsOpen(false);
    onAccept();
  };

  if (!isOpen || hasAccepted) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="glass-panel max-w-md w-full rounded-lg p-6 border border-neon-pink/30 animate-fade-in">
        <div className="mb-4 flex items-center">
          <AlertTriangle className="h-6 w-6 text-neon-pink mr-2" />
          <h2 className="text-xl font-cyber text-white">User Agreement</h2>
        </div>
        
        <p className="text-white/80 mb-6">
          By using Name Insight Predictor, you acknowledge that:
        </p>
        
        <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
          <li>This tool is for entertainment and informational purposes only</li>
          <li>Analyses should not be the sole basis for important decisions</li>
          <li>Results are based on algorithms and may not reflect reality</li>
          <li>Your use is subject to our Privacy Policy and Terms of Service</li>
        </ul>
        
        <div className="flex justify-end">
          <CyberButton
            variant="pink"
            onClick={handleAccept}
            glowing
          >
            I Agree
          </CyberButton>
        </div>
      </div>
    </div>
  );
};

export default ConsentModal;
