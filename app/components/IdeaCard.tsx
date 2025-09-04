'use client';

import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, TrendingUp } from 'lucide-react';

interface IdeaCardProps {
  title: string;
  description: string;
  author: string;
  likes: number;
  comments: number;
  remixes: number;
  timestamp: string;
}

export default function IdeaCard({
  title,
  description,
  author,
  likes,
  comments,
  remixes,
  timestamp
}: IdeaCardProps) {
  return (
    <motion.div
      className="card"
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full" />
          <div>
            <h4 className="font-medium text-white">{author}</h4>
            <p className="text-xs text-gray-500">{timestamp}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-white">
          <Share2 className="w-4 h-4" />
        </button>
      </div>

      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-3">{description}</p>

      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1 text-gray-400 hover:text-red-400 transition-colors">
            <Heart className="w-4 h-4" />
            <span className="text-sm">{likes}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-400 transition-colors">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm">{comments}</span>
          </button>
        </div>
        <div className="flex items-center space-x-1 text-accent">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium">{remixes}</span>
        </div>
      </div>
    </motion.div>
  );
}
