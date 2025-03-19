import React from 'react';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

interface HeroProps {
  onGetAudit: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetAudit }) => {
  return (
    <section className="pt-24 pb-16 px-4 relative overflow-hidden">
      <ParticleBackground />
      
      {/* Event banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 right-0 bg-[#0a0a1f] border-b border-[#9c5fff]/20 py-2"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <div className="flex items-center gap-3 text-sm">
            <span className="bg-[#9c5fff] px-3 py-1 rounded-full text-white font-medium">
              eMerge Americas 2025
            </span>
            <span>•</span>
            <span>Booth #247</span>
          </div>
        </div>
      </motion.div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left column - Main content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
              <span className="bg-gradient-to-r from-[#9c5fff] to-purple-400 text-transparent bg-clip-text">
                Hours to Minutes
              </span>
              <br />
              Manual Tasks to Automation
            </h1>
            
            {/* Super concise description */}
            <p className="text-xl text-gray-300 mb-8">
              We transform your time-consuming manual processes into efficient automated workflows.
            </p>

            {/* Clear CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onGetAudit}
                className="group flex items-center justify-center gap-2 bg-[#9c5fff] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#8445ff] transition-all duration-300"
              >
                Get Your Free Process Assessment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Exclusive offer badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 bg-[#131330]/70 border border-[#9c5fff]/20 rounded-full py-2 px-4 inline-flex items-center"
            >
              <span className="w-2 h-2 bg-[#9c5fff] rounded-full animate-pulse mr-2"></span>
              <span className="text-sm">eMerge Exclusive: Free Assessment ($1,500 value)</span>
            </motion.div>
          </motion.div>

          {/* Right column - Visual demonstration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden md:block"
          >
            {/* Simple decoration */}
            <div className="absolute -z-10 inset-0 bg-gradient-radial from-[#9c5fff]/20 to-transparent rounded-full blur-2xl"></div>
            
            {/* Before/After Example - Single, clear example */}
            <div className="bg-[#131330] border border-[#9c5fff]/30 rounded-xl p-6 shadow-lg">
              <div className="mb-6 flex justify-between items-center">
                <h3 className="text-xl font-medium">Impact Comparison</h3>
                <span className="bg-[#9c5fff]/20 text-[#9c5fff] text-xs px-3 py-1 rounded-full">
                  Real Results
                </span>
              </div>
              
              {/* Just two examples with minimal text */}
              <div className="space-y-6">
                {/* First comparison */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span>Data Processing</span>
                    <span className="text-sm text-[#9c5fff] font-medium">90x faster</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#0a0a1f] rounded-lg p-3 flex flex-col items-center">
                      <span className="text-red-400 text-3xl font-bold">3h</span>
                      <span className="text-xs text-gray-400">Manual</span>
                    </div>
                    <div className="bg-[#0a0a1f] rounded-lg p-3 flex flex-col items-center">
                      <span className="text-green-400 text-3xl font-bold">2m</span>
                      <span className="text-xs text-gray-400">Automated</span>
                    </div>
                  </div>
                </div>
                
                {/* Second comparison */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span>Report Generation</span>
                    <span className="text-sm text-[#9c5fff] font-medium">480x faster</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#0a0a1f] rounded-lg p-3 flex flex-col items-center">
                      <span className="text-red-400 text-3xl font-bold">4h</span>
                      <span className="text-xs text-gray-400">Manual</span>
                    </div>
                    <div className="bg-[#0a0a1f] rounded-lg p-3 flex flex-col items-center">
                      <span className="text-green-400 text-3xl font-bold">30s</span>
                      <span className="text-xs text-gray-400">Automated</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;