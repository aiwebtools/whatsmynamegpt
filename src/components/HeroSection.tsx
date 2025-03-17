
import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Brain, Globe, History, BookOpenText, Calculator } from 'lucide-react';
import Logo3D from './Logo3D';
import CyberButton from './CyberButton';

const HeroSection: React.FC = () => {
  const [name, setName] = useState('');
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  // Parallax effect for the hero background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      backgroundRef.current.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleInputFocus = () => {
    setIsActive(true);
  };

  const handleInputBlur = () => {
    setIsActive(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      window.location.href = `https://chatgpt.com/g/g-67d86208628c8191887a7dc6853a5a97-name-insight-predictor?q=${encodeURIComponent(name)}`;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-32 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-neon-blue/5 blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full bg-neon-pink/5 blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-neon-purple/5 blur-3xl animate-float" style={{ animationDelay: '-1.5s' }}></div>
      </div>
      
      {/* Grid background with overlay */}
      <div className="absolute inset-0 cyber-grid -z-20"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center animate-slide-up">
          <div className="mb-8">
            <Logo3D size="xl" />
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
            <span className="relative inline-block">
              <span className="absolute -top-0.5 -left-0.5 text-neon-pink blur-[1px]">Uncover Your Name's</span>
              <span className="absolute -top-0.5 -left-0.5 text-neon-blue blur-[1px]">Uncover Your Name's</span>
              <span className="relative z-10 text-white">Uncover Your Name's</span>
            </span>
            <br />
            <span className="neon-text-purple">Hidden Potential</span>
          </h1>
          
          <p className="text-white/80 text-lg md:text-xl max-w-3xl text-center mb-10">
            Dive deep into the ancient meanings, cultural significance, and personality traits 
            hidden within your name using our advanced AI analysis.
          </p>
          
          <form 
            className="w-full max-w-md mb-12" 
            onSubmit={handleSubmit}
            style={{ perspective: '1000px' }}
          >
            <div 
              className={`relative transition-all duration-300 transform ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                className={`w-full py-4 px-6 bg-cyber-dark border font-cyber rounded-md text-white placeholder-white/50 focus:outline-none transition-all duration-300 ${
                  isActive 
                    ? 'border-neon-blue shadow-neon' 
                    : 'border-white/20'
                }`}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-neon-blue hover:text-neon-pink p-2 rounded-md transition-colors"
                disabled={!name.trim()}
              >
                <ArrowRight className={`h-6 w-6 ${name.trim() ? 'animate-pulse-neon' : ''}`} />
              </button>
            </div>
          </form>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Brain className="h-8 w-8 text-neon-blue" />}
              title="Ancient Meanings"
              description="Discover mythological contexts from languages like Greek, Latin, Sanskrit, Hebrew, and Old Norse."
              color="blue"
            />
            <FeatureCard 
              icon={<Globe className="h-8 w-8 text-neon-pink" />}
              title="Cultural Lineage"
              description="Explore cultural traditions, folklore, and naming customs associated with your name."
              color="pink"
            />
            <FeatureCard 
              icon={<History className="h-8 w-8 text-neon-purple" />}
              title="Historical Popularity"
              description="Track your name's trends over centuries, linked to socio-political shifts."
              color="purple"
            />
            <FeatureCard 
              icon={<BookOpenText className="h-8 w-8 text-neon-green" />}
              title="Personality Traits"
              description="Identify behavioral tendencies based on sociological and psychological correlations."
              color="green"
            />
            <FeatureCard 
              icon={<Calculator className="h-8 w-8 text-neon-blue" />}
              title="Numerology"
              description="Assign numerical values to letters, unveiling personality traits and life path insights."
              color="blue"
            />
            <div className="glass-panel p-6 rounded-lg border-white/10 hover:border-neon-pink/30 transition-all flex flex-col items-center justify-center">
              <CyberButton 
                variant="pink" 
                size="lg" 
                glowing
                href="https://chatgpt.com/g/g-67d86208628c8191887a7dc6853a5a97-name-insight-predictor"
              >
                Try It Now
              </CyberButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'blue' | 'pink' | 'purple' | 'green';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color }) => {
  const borderClasses = {
    'blue': 'hover:border-neon-blue/30',
    'pink': 'hover:border-neon-pink/30',
    'purple': 'hover:border-neon-purple/30',
    'green': 'hover:border-neon-green/30',
  };

  const textClasses = {
    'blue': 'text-neon-blue',
    'pink': 'text-neon-pink',
    'purple': 'text-neon-purple',
    'green': 'text-neon-green',
  };

  return (
    <div className={`glass-panel p-6 rounded-lg border-white/10 ${borderClasses[color]} transition-all hover:transform hover:scale-105`}>
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">{icon}</div>
        <h3 className={`text-xl font-cyber font-semibold mb-2 ${textClasses[color]}`}>{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  );
};

export default HeroSection;
