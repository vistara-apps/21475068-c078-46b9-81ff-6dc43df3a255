'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface MintButtonProps {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'disabled';
  className?: string;
}

export default function MintButton({ 
  children, 
  onClick, 
  disabled = false, 
  variant = 'primary',
  className = '' 
}: MintButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'w-full flex items-center justify-center font-medium py-4 px-6 rounded-lg transition-all duration-200',
        {
          'btn-primary': variant === 'primary' && !disabled,
          'bg-gray-600 text-gray-400 cursor-not-allowed': variant === 'disabled' || disabled,
        },
        className
      )}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      animate={!disabled ? { boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' } : {}}
    >
      {children}
    </motion.button>
  );
}
