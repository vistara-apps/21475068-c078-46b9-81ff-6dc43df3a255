'use client';

import { motion } from 'framer-motion';
import StatsCard from './StatsCard';
import ChartCard from './ChartCard';
import IdeaCard from './IdeaCard';
import FloatingElements from './FloatingElements';

export default function Dashboard() {
  const statsData = [
    { label: 'Floating Wallet', value: '$7,765%', change: '+257%', subValue: '$2.4m' },
    { label: 'Ideas Minted', value: '13,600.2K', change: '+185%' },
    { label: 'Total Royalties', value: '41,355.01', change: '+0.01%', subValue: '$50.5 250%' },
  ];

  const chartData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 700 },
  ];

  return (
    <div className="relative">
      <FloatingElements />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2">
          <motion.div 
            className="card mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-4xl font-bold text-white mb-2">OriginMint</h2>
            <h3 className="text-2xl font-bold text-white mb-4">Food text were</h3>
            <p className="text-gray-400 mb-6">
              Cult to fangirlu captius velai et vur soctles.
            </p>
            <div className="flex items-center space-x-2 text-accent">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm font-medium">Royalties connection</span>
            </div>
          </motion.div>

          {/* Upload Card */}
          <motion.div 
            className="card bg-gradient-to-br from-primary/20 to-accent/10 border-primary/30"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">Upload Text</h3>
                <p className="text-gray-300">Upload txt your or text/a</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">13,600.2K</div>
                <div className="text-sm text-gray-400">$1.85% <span className="text-green-400">Execute Idea</span></div>
              </div>
            </div>
            <button className="btn-accent w-full">Mint Idea</button>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <StatsCard {...stat} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          className="lg:col-span-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <ChartCard
            title="ZK Blockchain Forest"
            subtitle="Cryptos +"
            value="226,797.3m"
            data={chartData}
            type="donut"
          />
        </motion.div>

        <motion.div
          className="lg:col-span-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <ChartCard
            title="ROCK Remix"
            subtitle="One Creations"
            value="33670"
            data={chartData}
            type="area"
          />
        </motion.div>

        <motion.div
          className="lg:col-span-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <ChartCard
            title="Floating Wallet"
            value="41,355.01"
            change="+0.01%"
            subValue="$50.5 250%"
            data={chartData}
            type="bar"
          />
        </motion.div>
      </div>
    </div>
  );
}
