'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, Image, Video, Music, Zap, Shield } from 'lucide-react';
import FrameCard from './FrameCard';
import MintButton from './MintButton';
import IdeaInput from './IdeaInput';

export default function MintingInterface() {
  const [selectedType, setSelectedType] = useState<'text' | 'image' | 'video' | 'audio'>('text');
  const [content, setContent] = useState('');
  const [royaltyPercentage, setRoyaltyPercentage] = useState(5);
  const [licensingTerms, setLicensingTerms] = useState('attribution');

  const contentTypes = [
    { id: 'text', label: 'Text Ideas', icon: FileText, color: 'bg-primary' },
    { id: 'image', label: 'Visual Art', icon: Image, color: 'bg-accent' },
    { id: 'video', label: 'Video Content', icon: Video, color: 'bg-green-500' },
    { id: 'audio', label: 'Audio/Music', icon: Music, color: 'bg-purple-500' },
  ];

  const handleMint = async () => {
    // TODO: Implement ZK proof generation and minting logic
    console.log('Minting idea...', { content, royaltyPercentage, licensingTerms });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold gradient-text mb-4">Mint Your Ideas</h1>
        <p className="text-gray-400 text-lg">
          Transform your creative ideas into ZK-verified, remixable tokens on Base
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Content Input */}
        <div className="lg:col-span-2 space-y-6">
          {/* Content Type Selection */}
          <FrameCard>
            <h3 className="text-xl font-semibold text-white mb-4">Choose Content Type</h3>
            <div className="grid grid-cols-2 gap-4">
              {contentTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <motion.button
                    key={type.id}
                    onClick={() => setSelectedType(type.id as any)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedType === type.id
                        ? 'border-primary bg-primary/10'
                        : 'border-white/10 bg-surface/50 hover:border-white/20'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={`w-10 h-10 ${type.color} rounded-lg flex items-center justify-center mb-3 mx-auto`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-sm font-medium text-white">{type.label}</div>
                  </motion.button>
                );
              })}
            </div>
          </FrameCard>

          {/* Content Input */}
          <FrameCard>
            <h3 className="text-xl font-semibold text-white mb-4">Your Creative Content</h3>
            {selectedType === 'text' ? (
              <IdeaInput
                value={content}
                onChange={setContent}
                placeholder="Share your innovative idea, concept, or creative text here..."
                variant="textarea"
              />
            ) : (
              <div className="border-2 border-dashed border-white/20 rounded-lg p-12 text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400 mb-2">Drop your {selectedType} file here</p>
                <p className="text-sm text-gray-500">or click to browse</p>
              </div>
            )}
          </FrameCard>

          {/* Licensing & Royalties */}
          <FrameCard>
            <h3 className="text-xl font-semibold text-white mb-4">Licensing & Royalties</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Royalty Percentage
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={royaltyPercentage}
                    onChange={(e) => setRoyaltyPercentage(Number(e.target.value))}
                    className="flex-1 h-2 bg-surface rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-white font-medium w-12">{royaltyPercentage}%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Licensing Terms
                </label>
                <select
                  value={licensingTerms}
                  onChange={(e) => setLicensingTerms(e.target.value)}
                  className="w-full input-field"
                >
                  <option value="attribution">Attribution Required</option>
                  <option value="commercial">Commercial Use Allowed</option>
                  <option value="noncommercial">Non-Commercial Only</option>
                  <option value="custom">Custom Terms</option>
                </select>
              </div>
            </div>
          </FrameCard>
        </div>

        {/* Minting Panel */}
        <div className="space-y-6">
          {/* ZK Verification Status */}
          <FrameCard>
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-white">ZK Verification</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-gray-400">Device Verification</span>
                <span className="text-green-400 text-sm">Ready</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-gray-400">Timestamp Proof</span>
                <span className="text-green-400 text-sm">Ready</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-gray-400">Content Hash</span>
                <span className="text-yellow-400 text-sm">Generating...</span>
              </div>
            </div>
          </FrameCard>

          {/* Minting Details */}
          <FrameCard>
            <h3 className="text-lg font-semibold text-white mb-4">Minting Cost</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Base Fee</span>
                <span className="text-white">$0.75</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Gas Fee</span>
                <span className="text-white">$0.12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">ZK Proof</span>
                <span className="text-white">$0.05</span>
              </div>
              <hr className="border-white/10" />
              <div className="flex items-center justify-between font-semibold">
                <span className="text-white">Total</span>
                <span className="text-accent">$0.92</span>
              </div>
            </div>
          </FrameCard>

          {/* Mint Button */}
          <MintButton
            onClick={handleMint}
            disabled={!content.trim()}
            variant={content.trim() ? 'primary' : 'disabled'}
          >
            <Zap className="w-5 h-5 mr-2" />
            Mint as NFT
          </MintButton>

          {/* Recent Activity */}
          <FrameCard>
            <h3 className="text-lg font-semibold text-white mb-4">Recent Mints</h3>
            <div className="space-y-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center space-x-3 p-2 bg-surface/30 rounded-lg">
                  <div className="w-8 h-8 bg-primary/20 rounded border border-primary/30 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white font-medium">Idea #{item}</p>
                    <p className="text-xs text-gray-400">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </FrameCard>
        </div>
      </div>
    </div>
  );
}
