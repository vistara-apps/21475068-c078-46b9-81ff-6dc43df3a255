'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import MintingInterface from './components/MintingInterface';
import RoyaltyTracker from './components/RoyaltyTracker';
import Analytics from './components/Analytics';

export default function Home() {
  const [activeView, setActiveView] = useState<'dashboard' | 'mint' | 'royalties' | 'analytics'>('dashboard');

  const renderContent = () => {
    switch (activeView) {
      case 'mint':
        return <MintingInterface />;
      case 'royalties':
        return <RoyaltyTracker />;
      case 'analytics':
        return <Analytics />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="flex h-screen">
        <Sidebar activeView={activeView} onViewChange={setActiveView} />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          
          <main className="flex-1 overflow-auto p-6">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {renderContent()}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
