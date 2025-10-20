import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: boolean;
  gradient?: boolean;
}

export function BentoCard({ children, className = '', hoverScale = true, gradient = false }: BentoCardProps) {
  const baseClasses = `
    relative overflow-hidden rounded-3xl p-8 
    ${gradient 
      ? 'bg-gradient-to-br from-[var(--burnt-sienna)] to-[var(--deep-forest)]' 
      : 'bg-white border border-[var(--soft-border)]'
    }
  `;

  return (
    <motion.div
      className={`${baseClasses} ${className}`}
      whileHover={hoverScale ? { scale: 1.02, y: -5 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
