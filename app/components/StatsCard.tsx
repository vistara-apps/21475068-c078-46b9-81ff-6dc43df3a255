'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatsCardProps {
  label: string;
  value: string;
  change?: string;
  subValue?: string;
}

export default function StatsCard({ label, value, change, subValue }: StatsCardProps) {
  const isPositive = change?.startsWith('+');

  return (
    <motion.div 
      className="card"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-400">{label}</h3>
          {change && (
            <div className={`flex items-center space-x-1 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
              {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              <span className="text-xs font-medium">{change}</span>
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <div className="text-2xl font-bold text-white mb-1">{value}</div>
          {subValue && (
            <div className="text-sm text-gray-400">{subValue}</div>
          )}
        </div>

        {/* Gradient bottom border */}
        <div className="w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-50 mt-4"></div>
      </div>
    </motion.div>
  );
}
