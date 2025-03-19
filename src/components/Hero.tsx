import React, { useState } from 'react';
import { ArrowRight, Calendar, MapPin, FileText, Download, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onGetAudit: () => void;
  onGetPlaybook: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetAudit, onGetPlaybook }) => {
  const [showOptions, setShowOptions] = useState(false);
  
  const handleCTAClick = () => {
    setShowOptions(true);
  };
  
  return (
    <section className="pt-24 pb-16 relative overflow-hidden">
      {/* Particle background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#9c5fff]/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Event banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 right-0 bg-[#0a0a1f] border-b border-[#9c5fff]/20 py-2 z-10"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <div className="flex items-center gap-3 text-sm">
            <span className="bg-[#9c5fff] px-3 py-1 rounded-full text-white font-medium">
              eMerge Americas 2025
            </span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-[#9c5fff]" />
              <span>Booth #247</span>
            </div>
          </div>
        </div>
      </motion.div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="inline-block mb-6 py-1 px-3 bg-[#9c5fff]/10 border border-[#9c5fff]/30 rounded-full"
          >
            <span className="text-sm font-medium text-[#9c5fff]">
              AI-Powered Business Automation
            </span>
          </motion.div>
          
          {/* Main title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#9c5fff] to-purple-400 text-transparent bg-clip-text">
              Unfair Advantage
            </span>
            <br />
            For Your Business
          </h1>
          
          {/* Concise description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We build unfair advantages for businesses using AI automations.
            <br className="hidden md:block" />
            Help founders work smarter, not harder.
          </p>
          
          {/* Call to Action section */}
          {!showOptions ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="space-y-5"
            >
              <button
                onClick={handleCTAClick}
                className="bg-[#9c5fff] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#8445ff] transition-all duration-300 shadow-lg shadow-[#9c5fff]/20 flex items-center gap-2 mx-auto transform hover:scale-105"
              >
                Get Your Unfair Advantage
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="w-2 h-2 bg-[#9c5fff] rounded-full animate-pulse"></span>
                <p className="text-sm text-gray-300">
                  eMerge Exclusive: Free Assessment ($1,500 value)
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <button
                  onClick={onGetPlaybook} 
                  className="group flex items-center justify-center gap-2 bg-[#131330] border border-[#9c5fff]/30 text-white px-6 py-3 rounded-full hover:bg-[#1a1a40] transition-all duration-300 w-full md:w-auto transform hover:scale-105"
                >
                  <FileText className="w-5 h-5 text-[#9c5fff]" />
                  Get Free Automation Playbook
                </button>
                
                <button
                  onClick={onGetAudit}
                  className="group flex items-center justify-center gap-2 bg-[#9c5fff] text-white px-6 py-3 rounded-full hover:bg-[#8445ff] transition-all duration-300 w-full md:w-auto transform hover:scale-105"
                >
                  <Calendar className="w-5 h-5" />
                  AI-Scan: Your Free Diagnosis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <button
                onClick={() => setShowOptions(false)}
                className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
              >
                Back
              </button>
            </motion.div>
          )}
        </motion.div>
        
        {/* Simple Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { label: "Time Saved", value: "90%" },
            { label: "Processes Automated", value: "100+" },
            { label: "Client ROI", value: "320%" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-[#131330]/80 border border-[#9c5fff]/10 rounded-xl p-4 backdrop-blur-sm transform hover:translate-y-[-5px] transition-all duration-300"
            >
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-xs text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}

export default Hero;