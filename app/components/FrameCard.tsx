'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FrameCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default';
}

export default function FrameCard({ children, className = '', variant = 'default' }: FrameCardProps) {
  return (
    <motion.div
      className={`card ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
