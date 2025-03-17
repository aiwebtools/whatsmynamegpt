import React from 'react';
import { cn } from '@/lib/utils';

interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'pink' | 'purple' | 'green';
  size?: 'sm' | 'md' | 'lg';
  glowing?: boolean;
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const CyberButton = React.forwardRef<HTMLButtonElement, CyberButtonProps>(
  ({ variant = 'default', size = 'md', glowing = false, children, className, href, ...props }, ref) => {
    const buttonClasses = cn(
      'relative overflow-hidden font-cyber tracking-wider uppercase transition-all duration-300 focus:outline-none',
      {
        // Variants
        'bg-cyber-dark text-neon-blue border border-neon-blue hover:bg-neon-blue/10': variant === 'default',
        'bg-cyber-dark text-neon-pink border border-neon-pink hover:bg-neon-pink/10': variant === 'pink',
        'bg-cyber-dark text-neon-purple border border-neon-purple hover:bg-neon-purple/10': variant === 'purple',
        'bg-cyber-dark text-neon-green border border-neon-green hover:bg-neon-green/10': variant === 'green',

        // Sizes
        'text-xs px-3 py-1': size === 'sm',
        'text-sm px-4 py-2': size === 'md',
        'text-base px-6 py-3': size === 'lg',

        // Glowing effect
        'shadow-neon animate-pulse-neon': variant === 'default' && glowing,
        'shadow-neon-pink': variant === 'pink' && glowing,
        'shadow-neon-purple': variant === 'purple' && glowing,
        'shadow-neon-green': variant === 'green' && glowing,
      },
      className
    );

    // If href is provided, render as an anchor
    if (href) {
      return (
        <a 
          href={href} 
          className={buttonClasses}
        >
          {children}
        </a>
      );
    }

    // Otherwise render as a button
    return (
      <button 
        ref={ref} 
        className={buttonClasses} 
        {...props}
      >
        {children}
      </button>
    );
  }
);

CyberButton.displayName = 'CyberButton';

export default CyberButton;
