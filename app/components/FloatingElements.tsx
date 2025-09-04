'use client';

import { motion } from 'framer-motion';

export default function FloatingElements() {
  const elements = [
    { id: 1, size: 'w-8 h-8', color: 'bg-primary/20', x: '10%', y: '20%', delay: 0 },
    { id: 2, size: 'w-6 h-6', color: 'bg-accent/20', x: '80%', y: '30%', delay: 1 },
    { id: 3, size: 'w-10 h-10', color: 'bg-primary/10', x: '70%', y: '70%', delay: 2 },
    { id: 4, size: 'w-4 h-4', color: 'bg-accent/30', x: '20%', y: '80%', delay: 3 },
    { id: 5, size: 'w-12 h-12', color: 'bg-primary/5', x: '90%', y: '10%', delay: 4 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${element.size} ${element.color} rounded-full blur-sm`}
          style={{
            left: element.x,
            top: element.y,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            delay: element.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
