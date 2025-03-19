import React from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingUp, BarChart } from 'lucide-react';

const SocialProof: React.FC = () => {
  // Métricas clave con impacto visual inmediato
  const metrics = [
    {
      icon: Clock,
      value: "85%",
      label: "Time Saved"
    },
    {
      icon: TrendingUp,
      value: "10x",
      label: "Efficiency Increase"
    },
    {
      icon: BarChart,
      value: "3-6",
      label: "Month ROI"
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#080818]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Real Results</h2>
          <p className="text-gray-300">Our process automation delivers measurable impact</p>
        </motion.div>

        {/* Key Metrics - Simple and impactful */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-6 mb-12"
        >
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="bg-[#131330] border border-[#9c5fff]/20 rounded-lg p-6 mb-2">
                <metric.icon className="w-8 h-8 text-[#9c5fff] mx-auto mb-4" />
                <h3 className="text-4xl font-bold bg-gradient-to-r from-[#9c5fff] to-purple-400 text-transparent bg-clip-text">
                  {metric.value}
                </h3>
              </div>
              <p className="font-medium text-gray-300">{metric.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Before/After Comparison - Visual and immediate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#131330] border border-[#9c5fff]/20 rounded-xl p-8 mb-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <p className="text-sm text-gray-400 mb-1">BEFORE AUTOMATION</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-red-400">8</span>
                <span className="text-xl text-gray-400">hours</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">Monthly reporting</p>
            </div>
            
            <div className="w-24 h-px md:w-px md:h-24 bg-gradient-to-r md:bg-gradient-to-b from-transparent via-[#9c5fff]/40 to-transparent my-4 md:my-0"></div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400 mb-1">AFTER AUTOMATION</p>
              <div className="flex items-baseline gap-2 justify-center md:justify-end">
                <span className="text-4xl font-bold text-green-400">15</span>
                <span className="text-xl text-gray-400">minutes</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">Same process</p>
            </div>
          </div>
        </motion.div>
        
        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-xl font-medium mb-4">
            Visit us at Booth SS72 during eMerge Americas
          </p>
          <p className="text-gray-400">
            March 27-28, 2025 • Miami Beach Convention Center
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default SocialProof;