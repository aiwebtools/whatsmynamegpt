
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Logo3DProps {
  className?: string;
  animate?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
}

const Logo3D: React.FC<Logo3DProps> = ({ 
  className, 
  animate = true, 
  size = 'md',
  href
}) => {
  const logoRef = useRef<HTMLDivElement>(null);

  // Tilt effect when mouse moves over the logo
  useEffect(() => {
    if (!animate || !logoRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const logo = logoRef.current;
      if (!logo) return;

      // Only apply the effect if the mouse is hovering over the logo
      const rect = logo.getBoundingClientRect();
      const isHovering = 
        e.clientX >= rect.left && 
        e.clientX <= rect.right && 
        e.clientY >= rect.top && 
        e.clientY <= rect.bottom;

      if (isHovering) {
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Reduce rotation intensity by 70%
        const rotateX = y / -30;
        const rotateY = x / 30;
        
        logo.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      } else {
        // Reset when not hovering
        logo.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      }
    };

    const handleMouseLeave = () => {
      if (logoRef.current) {
        logoRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    logoRef.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (logoRef.current) {
        logoRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [animate]);

  const sizeClasses = {
    'sm': 'text-lg',
    'md': 'text-2xl',
    'lg': 'text-3xl',
    'xl': 'text-4xl',
  };

  const logoContent = (
    <div 
      ref={logoRef}
      className={cn(
        'transition-transform duration-300 ease-out cursor-pointer', 
        sizeClasses[size],
        className
      )}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="flex flex-col items-center">
        <span className="font-cyber font-bold text-white relative">
          <span className="absolute -top-0.5 -left-0.5 text-neon-blue opacity-70 blur-[1px]">Name Insight Predictor</span>
          <span className="absolute -top-0.5 -left-0.5 text-neon-pink opacity-70 blur-[1px]">Name Insight Predictor</span>
          <span className="relative z-10">Name Insight Predictor</span>
        </span>
        <span className="text-xs mt-1 font-cyber text-white/70">
          Presented by <span className="text-neon-blue hover:text-neon-blue/80 transition-colors">AiWebTools.Ai</span>
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {logoContent}
      </a>
    );
  }

  return logoContent;
};

export default Logo3D;
