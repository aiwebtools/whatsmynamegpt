
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jessica M.",
    location: "New York, NY",
    text: "I was skeptical at first, but Name Insight Predictor gave me such accurate insights about my personality traits. The historical background of my name was fascinating too!",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Michael T.",
    location: "Austin, TX",
    text: "As someone interested in etymology, I was blown away by the depth of the analysis. The connections between my name's meaning and my career path were surprisingly accurate.",
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Sarah K.",
    location: "Toronto, Canada",
    text: "I used this tool to analyze names for my baby, and it's been incredibly helpful in understanding the cultural significance behind different options. Absolutely recommended!",
    avatar: "/placeholder.svg",
  },
  {
    id: 4,
    name: "David L.",
    location: "London, UK",
    text: "The numerological aspect of the analysis revealed patterns I've never considered before. It's given me a new perspective on how my name might have influenced my life path.",
    avatar: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Priya S.",
    location: "Mumbai, India",
    text: "I appreciated how the tool honored the cultural context of my traditional Indian name. The insights about notable figures throughout history who shared my name was fascinating.",
    avatar: "/placeholder.svg",
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-neon-green text-xs font-semibold bg-neon-green/10 mb-3">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">What People Are </span>
            <span className="neon-text-green">Saying</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/70 text-lg">
            Discover how Name Insight Predictor has helped people gain valuable insights into their names and identities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Navigation buttons */}
            <button 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full bg-cyber-dark border border-neon-blue text-neon-blue hover:bg-neon-blue/10 transition-colors md:-translate-x-12"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full bg-cyber-dark border border-neon-pink text-neon-pink hover:bg-neon-pink/10 transition-colors md:translate-x-12"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Testimonial cards */}
            <div className="overflow-hidden py-10">
              <div 
                className="transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="flex">
                  {testimonials.map((testimonial) => (
                    <div 
                      key={testimonial.id} 
                      className="min-w-full"
                    >
                      <div className="glass-panel rounded-lg p-8 mx-4">
                        <Quote className="h-10 w-10 text-neon-purple mb-4 opacity-50" />
                        <p className="text-white/90 text-lg mb-6 italic">"{testimonial.text}"</p>
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-cyber-dark border border-neon-blue/50 flex items-center justify-center overflow-hidden mr-4">
                            <span className="text-neon-blue font-bold">{testimonial.name.charAt(0)}</span>
                          </div>
                          <div>
                            <h4 className="font-cyber text-white font-semibold">{testimonial.name}</h4>
                            <p className="text-white/60 text-sm">{testimonial.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dots navigation */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-neon-purple scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
