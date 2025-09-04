'use client';

import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Users, Clock } from 'lucide-react';
import FrameCard from './FrameCard';
import StatsCard from './StatsCard';

export default function RoyaltyTracker() {
  const royaltyStats = [
    { label: 'Total Earned', value: '$2,847.32', change: '+12.5%', subValue: 'This month' },
    { label: 'Active Remixes', value: '147', change: '+23%', subValue: '8 new today' },
    { label: 'Revenue Share', value: '5.2%', change: '+0.3%', subValue: 'Average rate' },
    { label: 'Total Ideas', value: '89', change: '+8%', subValue: '12 earning' },
  ];

  const recentTransactions = [
    {
      id: 1,
      title: 'AI Art Concept #23',
      remix: 'Digital Painting Remix',
      amount: '$45.20',
      time: '2h ago',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Story Framework',
      remix: 'Screenplay Adaptation',
      amount: '$128.50',
      time: '5h ago',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Music Loop Idea',
      remix: 'Full Track Production',
      amount: '$89.75',
      time: '1d ago',
      status: 'pending'
    },
    {
      id: 4,
      title: 'Product Design Concept',
      remix: '3D Model Creation',
      amount: '$67.30',
      time: '2d ago',
      status: 'completed'
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold gradient-text mb-4">Royalty Tracker</h1>
        <p className="text-gray-400 text-lg">
          Monitor your earnings from remixed content and derivative works
        </p>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {royaltyStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + index * 0.1 }}
          >
            <StatsCard {...stat} />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Royalty Payments */}
        <div className="lg:col-span-2">
          <FrameCard>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-white">Recent Royalty Payments</h3>
              <button className="text-primary hover:text-accent transition-colors text-sm font-medium">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <motion.div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 bg-surface/30 rounded-lg border border-white/10"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/30">
                      <DollarSign className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{transaction.title}</h4>
                      <p className="text-sm text-gray-400">{transaction.remix}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-semibold text-accent">{transaction.amount}</div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-3 h-3 text-gray-500" />
                      <span className="text-xs text-gray-500">{transaction.time}</span>
                      <div
                        className={`w-2 h-2 rounded-full ${
                          transaction.status === 'completed' ? 'bg-green-400' : 'bg-yellow-400'
                        }`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </FrameCard>
        </div>

        {/* Top Performing Ideas */}
        <div className="space-y-6">
          <FrameCard>
            <div className="flex items-center space-x-3 mb-4">
              <TrendingUp className="w-6 h-6 text-accent" />
              <h3 className="text-lg font-semibold text-white">Top Performers</h3>
            </div>

            <div className="space-y-4">
              {[
                { title: 'AI Art Framework', earnings: '$524.80', remixes: 23 },
                { title: 'Story Structure Guide', earnings: '$389.45', remixes: 18 },
                { title: 'Music Theory Concept', earnings: '$267.30', remixes: 12 },
                { title: 'Design Pattern Ideas', earnings: '$195.22', remixes: 9 },
              ].map((idea, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-surface/20 rounded-lg">
                  <div>
                    <p className="font-medium text-white text-sm">{idea.title}</p>
                    <p className="text-xs text-gray-400">{idea.remixes} remixes</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-accent text-sm">{idea.earnings}</p>
                  </div>
                </div>
              ))}
            </div>
          </FrameCard>

          <FrameCard>
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-white">Active Remixers</h3>
            </div>

            <div className="space-y-3">
              {[
                { name: 'alex.eth', contributions: 8, earnings: '$234.50' },
                { name: 'creator_jane', contributions: 6, earnings: '$189.75' },
                { name: 'art_master', contributions: 4, earnings: '$156.20' },
              ].map((remixer, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-surface/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full" />
                    <div>
                      <p className="font-medium text-white text-sm">{remixer.name}</p>
                      <p className="text-xs text-gray-400">{remixer.contributions} contributions</p>
                    </div>
                  </div>
                  <div className="text-xs text-accent">{remixer.earnings}</div>
                </div>
              ))}
            </div>
          </FrameCard>
        </div>
      </div>
    </div>
  );
}
