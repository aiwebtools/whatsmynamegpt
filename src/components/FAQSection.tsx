
import React, { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How accurate are the name analyses?",
    answer: "Name Insight Predictor uses advanced algorithms to analyze historical data, linguistic patterns, and cultural significance of names. While our analyses are based on extensive research and data patterns, individual experiences may vary. The insights provided should be viewed as informative perspectives rather than absolute predictions."
  },
  {
    question: "Can I analyze any name from any culture?",
    answer: "Yes! Our system is designed to analyze names from diverse cultural backgrounds, including Western, Eastern, African, Middle Eastern, and indigenous naming traditions. The depth of analysis may vary based on the historical documentation and linguistic research available for specific cultural contexts."
  },
  {
    question: "How is my data handled when I use this tool?",
    answer: "We prioritize your privacy. The names you analyze are processed within the AI system to generate insights, but we do not store your queries for purposes beyond improving our service. No personal information is shared with third parties. Please review our Privacy Policy for more detailed information."
  },
  {
    question: "What makes Name Insight Predictor different from other name analysis tools?",
    answer: "Our tool uniquely combines 12 different analytical dimensions, creating a comprehensive view of your name's significance. Unlike simpler tools that focus solely on etymology or numerology, we integrate historical context, linguistic evolution, cultural significance, personality correlations, and more for a holistic analysis."
  },
  {
    question: "How often is the database updated?",
    answer: "Our knowledge base is regularly updated to incorporate the latest research in linguistics, onomastics (the study of names), cultural studies, and historical documentation. This ensures that analyses remain current with evolving understanding of names and their significance."
  },
  {
    question: "Can I use this for baby naming?",
    answer: "Absolutely! Many users utilize Name Insight Predictor when considering names for their children. The tool provides rich context about potential names, helping parents understand the historical significance, cultural associations, and possible personality traits that might be linked to different naming options."
  },
  {
    question: "Are the personality predictions based on scientific research?",
    answer: "Our personality insights draw from sociological studies, psychological research, and pattern recognition across large datasets. While there is ongoing academic debate about the extent to which names influence personality, our predictions highlight correlations observed in research without claiming definitive causation."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative overflow-hidden" id="faq">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-neon-pink/5 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-neon-blue/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-neon-pink text-xs font-semibold bg-neon-pink/10 mb-3">
            QUESTIONS & ANSWERS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="neon-text-pink">Frequently Asked</span> <span className="text-white">Questions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/70 text-lg">
            Get answers to common questions about Name Insight Predictor and how it works.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 glass-panel rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-white font-cyber text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <MinusCircle className="h-6 w-6 text-neon-pink flex-shrink-0" />
                ) : (
                  <PlusCircle className="h-6 w-6 text-neon-blue flex-shrink-0" />
                )}
              </button>
              
              <div 
                id={`faq-answer-${index}`}
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
                aria-hidden={openIndex !== index}
              >
                <p className="text-white/70">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
