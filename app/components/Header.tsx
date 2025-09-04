'use client';

import { motion } from 'framer-motion';
import { Search, Bell, Settings } from 'lucide-react';
import { ConnectWallet } from '@coinbase/onchainkit/wallet';

export default function Header() {
  return (
    <header className="bg-surface/30 backdrop-blur-xl border-b border-white/10 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-bold gradient-text">OriginMint</h1>
          <nav className="hidden md:flex space-x-6">
            <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Portfolio
            </button>
            <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Discover
            </button>
            <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Develop
            </button>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-surface/60 rounded-lg pl-10 pr-4 py-2 text-sm border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>

          {/* Notifications */}
          <motion.button
            className="w-10 h-10 bg-surface/60 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors border border-white/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bell className="w-5 h-5" />
          </motion.button>

          {/* Settings */}
          <motion.button
            className="w-10 h-10 bg-surface/60 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors border border-white/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Settings className="w-5 h-5" />
          </motion.button>

          {/* Connect Wallet */}
          <ConnectWallet />
        </div>
      </div>
    </header>
  );
}
