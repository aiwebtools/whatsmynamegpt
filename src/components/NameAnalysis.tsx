
import React, { useRef, useEffect } from 'react';
import { FileText, Languages, Globe, History, Calculator, Volume2, Brain, Users, Map, Star, BookOpen, Sparkles } from 'lucide-react';
import CyberButton from './CyberButton';

const NameAnalysis: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const cards = containerRef.current.querySelectorAll('.analysis-card');
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // Calculate how far the container is from being fully in view
      const scrollProgress = 1 - (containerTop / windowHeight);
      
      // Apply different transform to each card
      cards.forEach((card, index) => {
        const offset = (index * 0.1) * scrollProgress * 100;
        (card as HTMLElement).style.transform = `translateY(${-offset}px)`;
        (card as HTMLElement).style.opacity = Math.min(1, scrollProgress * 2 - index * 0.2).toString();
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full cyber-grid"></div>
        <div className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-neon-blue/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-neon-pink/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-neon-purple text-xs font-semibold bg-neon-purple/10 mb-3">
            COMPREHENSIVE ANALYSIS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="neon-text-blue">Unlock The Secrets</span> <span className="text-white">Of Your Name</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/70 text-lg">
            Name Insight Predictor explores 12 detailed dimensions of your name, revealing connections 
            you never knew existed and insights that will transform your self-understanding.
          </p>
        </div>
        
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnalysisCard 
            icon={<FileText className="h-6 w-6" />}
            title="Ancient Meanings"
            description="Examines historical and mythological contexts from languages like Greek, Latin, Sanskrit, Hebrew, and Old Norse."
            color="blue"
          />
          <AnalysisCard 
            icon={<Languages className="h-6 w-6" />}
            title="Linguistic Roots"
            description="Traces phonetic evolution, spelling variations, and ancestral linguistic influences."
            color="pink"
          />
          <AnalysisCard 
            icon={<Globe className="h-6 w-6" />}
            title="Cultural Lineage"
            description="Highlights cultural traditions, folklore, and naming customs associated with your name."
            color="purple"
          />
          <AnalysisCard 
            icon={<History className="h-6 w-6" />}
            title="Historical Popularity"
            description="Tracks your name's trends over centuries, linking them to socio-political shifts."
            color="green"
          />
          <AnalysisCard 
            icon={<Calculator className="h-6 w-6" />}
            title="Numerology"
            description="Assigns numerical values to letters, unveiling personality traits and life path insights."
            color="blue"
          />
          <AnalysisCard 
            icon={<Volume2 className="h-6 w-6" />}
            title="Phonetic Influence"
            description="Analyzes sound harmony, emotional resonance, and subconscious perceptions of your name."
            color="pink"
          />
          <AnalysisCard 
            icon={<Brain className="h-6 w-6" />}
            title="Personality Traits"
            description="Identifies behavioral tendencies based on sociological and psychological correlations."
            color="purple"
          />
          <AnalysisCard 
            icon={<Users className="h-6 w-6" />}
            title="Notable Figures"
            description="Provides examples of influential individuals throughout history who have shared your name."
            color="green"
          />
          <AnalysisCard 
            icon={<Map className="h-6 w-6" />}
            title="Global Usage & Variations"
            description="Explores international adaptations, nicknames, and regional significance of your name."
            color="blue"
          />
          <AnalysisCard 
            icon={<Star className="h-6 w-6" />}
            title="Astrological Connections"
            description="Aligns your name's numerology with zodiac and planetary influences for deeper insight."
            color="pink"
          />
          <AnalysisCard 
            icon={<BookOpen className="h-6 w-6" />}
            title="Symbolic Associations"
            description="Examines metaphorical and literary representations of your name throughout history."
            color="purple"
          />
          <AnalysisCard 
            icon={<Sparkles className="h-6 w-6" />}
            title="Etymological Evolution"
            description="Details the historical transformation of your name across different periods and cultures."
            color="green"
          />
        </div>
        
        <div className="text-center">
          <CyberButton 
            variant="pink" 
            size="lg" 
            glowing
            href="https://chatgpt.com/g/g-67d86208628c8191887a7dc6853a5a97-name-insight-predictor"
          >
            Analyze Your Name Now
          </CyberButton>
        </div>
      </div>
    </section>
  );
};

interface AnalysisCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'blue' | 'pink' | 'purple' | 'green';
}

const AnalysisCard: React.FC<AnalysisCardProps> = ({ icon, title, description, color }) => {
  const colorClasses = {
    blue: 'text-neon-blue border-neon-blue/30 bg-neon-blue/5',
    pink: 'text-neon-pink border-neon-pink/30 bg-neon-pink/5',
    purple: 'text-neon-purple border-neon-purple/30 bg-neon-purple/5',
    green: 'text-neon-green border-neon-green/30 bg-neon-green/5',
  };

  return (
    <div className={`analysis-card p-6 rounded-lg border ${colorClasses[color]} transition-all duration-300 hover:transform hover:scale-105`}>
      <div className="flex items-start">
        <div className={`mr-4 p-3 rounded-lg bg-cyber-dark border ${colorClasses[color]}`}>
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-cyber mb-2 text-white">{title}</h3>
          <p className="text-white/70 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NameAnalysis;
