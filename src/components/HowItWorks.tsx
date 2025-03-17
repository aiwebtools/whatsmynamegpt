
import React, { useRef, useEffect } from 'react';
import { Search, Brain, FileText, Sparkles } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const steps = containerRef.current?.querySelectorAll('.step-item');
    if (steps) {
      steps.forEach((step) => {
        observer.observe(step);
      });
    }

    return () => {
      if (steps) {
        steps.forEach((step) => {
          observer.unobserve(step);
        });
      }
    };
  }, []);

  return (
    <section className="py-24 relative overflow-hidden" id="how-it-works">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-neon-purple/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-neon-blue/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-neon-blue text-xs font-semibold bg-neon-blue/10 mb-3">
            THE PROCESS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">How </span>
            <span className="neon-text-pink">Name Insight Predictor</span>
            <span className="text-white"> Works</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/70 text-lg">
            Our sophisticated AI combines multiple analytical methodologies to deliver 
            comprehensive insights about your name in just seconds.
          </p>
        </div>
        
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="step-item opacity-0 transition-all duration-500 delay-100">
            <StepCard 
              number="01"
              icon={<Search className="h-10 w-10" />}
              title="Input Your Name"
              description="Enter your full name or the name you're curious about to begin the analysis process."
              color="blue"
            />
          </div>
          
          <div className="step-item opacity-0 transition-all duration-500 delay-200">
            <StepCard 
              number="02"
              icon={<Brain className="h-10 w-10" />}
              title="AI Analysis"
              description="Our advanced algorithms process your name across 12 distinct analytical dimensions."
              color="pink"
            />
          </div>
          
          <div className="step-item opacity-0 transition-all duration-500 delay-300">
            <StepCard 
              number="03"
              icon={<FileText className="h-10 w-10" />}
              title="Compilation"
              description="The system synthesizes findings into a cohesive report with personalized insights."
              color="purple"
            />
          </div>
          
          <div className="step-item opacity-0 transition-all duration-500 delay-400">
            <StepCard 
              number="04"
              icon={<Sparkles className="h-10 w-10" />}
              title="Receive Insights"
              description="Review your detailed analysis revealing the hidden meanings and potential of your name."
              color="green"
            />
          </div>
        </div>
        
        {/* Center line connecting steps (visible only on desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-blue via-neon-pink to-neon-purple opacity-30 z-0 transform -translate-y-1/2" style={{ marginTop: '30px' }}></div>
      </div>
    </section>
  );
};

interface StepCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'blue' | 'pink' | 'purple' | 'green';
}

const StepCard: React.FC<StepCardProps> = ({ number, icon, title, description, color }) => {
  const colorClasses = {
    blue: 'from-neon-blue/20 to-transparent border-neon-blue/30 text-neon-blue',
    pink: 'from-neon-pink/20 to-transparent border-neon-pink/30 text-neon-pink',
    purple: 'from-neon-purple/20 to-transparent border-neon-purple/30 text-neon-purple',
    green: 'from-neon-green/20 to-transparent border-neon-green/30 text-neon-green',
  };

  return (
    <div className="glass-panel rounded-lg p-6 transition-all duration-300 hover:transform hover:scale-105 h-full">
      <div className="relative">
        <div className={`absolute -top-4 -left-4 w-12 h-12 flex items-center justify-center rounded-full bg-cyber-dark border ${color === 'blue' ? 'border-neon-blue' : color === 'pink' ? 'border-neon-pink' : color === 'purple' ? 'border-neon-purple' : 'border-neon-green'}`}>
          <span className={`font-cyber font-bold ${colorClasses[color]}`}>{number}</span>
        </div>
        
        <div className={`w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-b ${colorClasses[color]}`}>
          <div className={`text-${color === 'blue' ? 'neon-blue' : color === 'pink' ? 'neon-pink' : color === 'purple' ? 'neon-purple' : 'neon-green'}`}>
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-cyber text-center mb-4 text-white">{title}</h3>
        <p className="text-white/70 text-center">{description}</p>
      </div>
    </div>
  );
};

export default HowItWorks;
