'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, TrendingUp, BarChart3, Palette, MessageSquare, Bell, Users } from 'lucide-react';
import clsx from 'clsx';

interface SidebarProps {
  activeView: 'dashboard' | 'mint' | 'royalties' | 'analytics';
  onViewChange: (view: 'dashboard' | 'mint' | 'royalties' | 'analytics') => void;
}

export default function Sidebar({ activeView, onViewChange }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'mint', label: 'Mint Ideas', icon: Zap },
    { id: 'royalties', label: 'Royalties', icon: TrendingUp },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  const bottomItems = [
    { icon: MessageSquare, label: 'Messages' },
    { icon: Bell, label: 'Notifications' },
    { icon: Users, label: 'Community' },
    { icon: Palette, label: 'Customize' },
  ];

  return (
    <div className="w-20 bg-surface/50 backdrop-blur-xl border-r border-white/10 flex flex-col items-center py-6">
      {/* Logo */}
      <div className="mb-8">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
          <Shield className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 flex flex-col space-y-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => onViewChange(item.id as any)}
              className={clsx(
                'relative w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200',
                isActive
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-6 h-6" />
              {isActive && (
                <motion.div
                  className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-accent rounded-full"
                  layoutId="activeIndicator"
                />
              )}
            </motion.button>
          );
        })}
      </nav>

      {/* Bottom Navigation */}
      <div className="flex flex-col space-y-4">
        {bottomItems.map((item, index) => {
          const Icon = item.icon;
          
          return (
            <motion.button
              key={index}
              className="w-12 h-12 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-6 h-6" />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
