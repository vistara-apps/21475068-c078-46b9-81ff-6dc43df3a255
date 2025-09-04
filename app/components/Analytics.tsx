'use client';

import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Eye, Heart } from 'lucide-react';
import FrameCard from './FrameCard';
import ChartCard from './ChartCard';
import StatsCard from './StatsCard';

export default function Analytics() {
  const analyticsData = [
    { label: 'Total Views', value: '24,891', change: '+18.2%', subValue: 'Last 30 days' },
    { label: 'Engagement Rate', value: '12.8%', change: '+2.4%', subValue: 'Above average' },
    { label: 'Remix Rate', value: '7.3%', change: '+5.1%', subValue: 'Ideas remixed' },
    { label: 'Avg. Revenue/Idea', value: '$32.15', change: '+12%', subValue: 'Per original' },
  ];

  const chartData = [
    { name: 'Jan', views: 4000, remixes: 240, revenue: 400 },
    { name: 'Feb', views: 3000, remixes: 139, revenue: 300 },
    { name: 'Mar', views: 6000, remixes: 980, revenue: 600 },
    { name: 'Apr', views: 8000, remixes: 390, revenue: 800 },
    { name: 'May', views: 5000, remixes: 480, revenue: 500 },
    { name: 'Jun', views: 7000, remixes: 380, revenue: 700 },
  ];

  const topIdeas = [
    {
      id: 1,
      title: 'Sustainable Design Framework',
      views: 5420,
      likes: 892,
      remixes: 34,
      revenue: '$245.80',
      category: 'Design'
    },
    {
      id: 2,
      title: 'AI Writing Assistant Concept',
      views: 4180,
      likes: 756,
      remixes: 28,
      revenue: '$189.45',
      category: 'Technology'
    },
    {
      id: 3,
      title: 'Music Visualization Algorithm',
      views: 3890,
      likes: 643,
      remixes: 22,
      revenue: '$156.30',
      category: 'Audio'
    },
    {
      id: 4,
      title: 'Interactive Story Structure',
      views: 3240,
      likes: 578,
      remixes: 19,
      revenue: '$134.75',
      category: 'Literature'
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold gradient-text mb-4">Analytics Dashboard</h1>
        <p className="text-gray-400 text-lg">
          Deep insights into your content performance and remix ecosystem
        </p>
      </motion.div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {analyticsData.map((stat, index) => (
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

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <ChartCard
            title="Content Views"
            subtitle="Monthly Performance"
            value="24,891"
            change="+18.2%"
            data={chartData.map(d => ({ name: d.name, value: d.views }))}
            type="area"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <ChartCard
            title="Remix Activity"
            subtitle="Ideas being remixed"
            value="2,391"
            change="+32.1%"
            data={chartData.map(d => ({ name: d.name, value: d.remixes }))}
            type="bar"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <ChartCard
            title="Revenue Trend"
            subtitle="Earnings over time"
            value="$1,847"
            change="+28.5%"
            data={chartData.map(d => ({ name: d.name, value: d.revenue }))}
            type="line"
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Top Performing Ideas */}
        <div className="lg:col-span-2">
          <FrameCard>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <BarChart3 className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold text-white">Top Performing Ideas</h3>
              </div>
              <button className="text-primary hover:text-accent transition-colors text-sm font-medium">
                View Details
              </button>
            </div>

            <div className="space-y-4">
              {topIdeas.map((idea, index) => (
                <motion.div
                  key={idea.id}
                  className="flex items-center justify-between p-4 bg-surface/30 rounded-lg border border-white/10"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col items-center">
                      <div className="text-2xl font-bold text-primary">#{index + 1}</div>
                      <div className="text-xs text-gray-500">{idea.category}</div>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{idea.title}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mt-1">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{idea.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{idea.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="w-4 h-4" />
                          <span>{idea.remixes} remixes</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-semibold text-accent">{idea.revenue}</div>
                    <div className="text-xs text-gray-400">Total earned</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </FrameCard>
        </div>

        {/* Performance Insights */}
        <div className="space-y-6">
          <FrameCard>
            <h3 className="text-lg font-semibold text-white mb-4">Performance Insights</h3>
            
            <div className="space-y-4">
              <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-medium text-green-400">Best Day</span>
                </div>
                <p className="text-xs text-gray-300">Tuesday generates 23% more views</p>
              </div>

              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm font-medium text-blue-400">Popular Category</span>
                </div>
                <p className="text-xs text-gray-300">Design ideas have highest remix rate</p>
              </div>

              <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-sm font-medium text-purple-400">Trend Alert</span>
                </div>
                <p className="text-xs text-gray-300">AI-related content trending up 45%</p>
              </div>
            </div>
          </FrameCard>

          <FrameCard>
            <h3 className="text-lg font-semibold text-white mb-4">Audience Demographics</h3>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Creators (18-24)</span>
                  <span className="text-white">34%</span>
                </div>
                <div className="w-full bg-surface rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '34%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Professionals (25-34)</span>
                  <span className="text-white">42%</span>
                </div>
                <div className="w-full bg-surface rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: '42%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Enthusiasts (35+)</span>
                  <span className="text-white">24%</span>
                </div>
                <div className="w-full bg-surface rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '24%' }}></div>
                </div>
              </div>
            </div>
          </FrameCard>
        </div>
      </div>
    </div>
  );
}
