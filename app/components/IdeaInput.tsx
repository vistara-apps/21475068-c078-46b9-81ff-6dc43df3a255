'use client';

import { motion } from 'framer-motion';

interface IdeaInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  variant?: 'text' | 'textarea';
}

export default function IdeaInput({ value, onChange, placeholder, variant = 'text' }: IdeaInputProps) {
  const commonClasses = 'w-full input-field transition-all duration-200 focus:shadow-focus';

  if (variant === 'textarea') {
    return (
      <motion.textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`${commonClasses} h-32 resize-none`}
        rows={6}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      />
    );
  }

  return (
    <motion.input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={commonClasses}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    />
  );
}
