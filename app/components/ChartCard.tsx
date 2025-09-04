'use client';

import { motion } from 'framer-motion';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface ChartCardProps {
  title: string;
  subtitle?: string;
  value: string;
  change?: string;
  subValue?: string;
  data: any[];
  type: 'line' | 'area' | 'bar' | 'donut';
}

export default function ChartCard({ title, subtitle, value, change, subValue, data, type }: ChartCardProps) {
  const colors = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'];

  const renderChart = () => {
    switch (type) {
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={120}>
            <LineChart data={data}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#6366f1" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        );
      
      case 'area':
        return (
          <ResponsiveContainer width="100%" height={120}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke="#6366f1"
                strokeWidth={2}
                fill="url(#areaGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        );
      
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={120}>
            <BarChart data={data}>
              <Bar dataKey="value" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      
      case 'donut':
        return (
          <div className="flex items-center justify-center">
            <ResponsiveContainer width={120} height={120}>
              <PieChart>
                <Pie
                  data={data.map((item, index) => ({ ...item, fill: colors[index % colors.length] }))}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={50}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <motion.div 
      className="card h-full"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="text-xl font-bold text-white mb-2">{value}</div>
          {(change || subValue) && (
            <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
              {change && <span>{change}</span>}
              {subValue && <span>{subValue}</span>}
            </div>
          )}
          
          <div className="flex-1 flex items-end">
            {renderChart()}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
