import React from 'react';
import { Clock, DollarSign, Zap, TrendingUp, CheckCircle, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const ValueProps: React.FC = () => {
  // Expanded list of benefits with more specific value propositions
  const benefits = [
    {
      icon: Clock,
      title: "Transform Hours into Seconds",
      description: "Our clients consistently turn 5+ hour manual tasks into processes that run in seconds or minutes.",
      stat: "85%",
      statLabel: "Average Time Reduction"
    },
    {
      icon: DollarSign,
      title: "Reduce Operational Costs",
      description: "Eliminate costly manual errors and free up your team to focus on high-value revenue-generating activities.",
      stat: "30%",
      statLabel: "Typical Cost Savings"
    },
    {
      icon: TrendingUp,
      title: "Scale Without Adding Headcount",
      description: "Handle 10x more volume with your existing team by automating repetitive manual processes.",
      stat: "10x",
      statLabel: "Capacity Increase"
    }
  ];

  // Additional benefits for the bottom row
  const additionalBenefits = [
    {
      icon: Zap,
      title: "Fast Implementation",
      description: "Our solutions integrate with your existing processes in days, not months."
    },
    {
      icon: CheckCircle,
      title: "No Complex Software",
      description: "We adapt to your current tools and workflows—no new complicated systems to learn."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Join 30+ companies that have successfully automated their manual operations."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 relative" id="learn-more">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1f] via-[#0a0a1f] to-[#0a0a1f] -z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9c5fff]/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Companies Choose Our{' '}
            <span className="bg-gradient-to-r from-[#9c5fff] to-purple-400 text-transparent bg-clip-text">
              AI-Powered Automation
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We transform time-consuming manual processes into efficient automated workflows that save time, reduce costs, and eliminate human error.
          </p>
        </motion.div>
        
        {/* Main Benefits - 3 column grid with stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 md:gap-8 mb-10"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#0a0a1f]/80 backdrop-blur-sm border border-[#9c5fff]/20 rounded-xl p-6 md:p-8 hover:border-[#9c5fff]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#9c5fff]/5 relative overflow-hidden group"
            >
              {/* Background decoration */}
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#9c5fff]/5 rounded-full blur-xl group-hover:bg-[#9c5fff]/10 transition-all duration-500"></div>
              
              {/* Icon with gradient background */}
              <div className="bg-gradient-to-br from-[#9c5fff]/10 to-[#9c5fff]/5 rounded-lg p-3 inline-block mb-4">
                <benefit.icon className="w-8 h-8 text-[#9c5fff]" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">{benefit.title}</h3>
              <p className="text-gray-300 mb-6">{benefit.description}</p>
              
              {/* Stat highlight */}
              <div className="mt-auto">
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold bg-gradient-to-r from-[#9c5fff] to-purple-400 text-transparent bg-clip-text">
                    {benefit.stat}
                  </span>
                  <span className="text-sm text-gray-400 mb-1">{benefit.statLabel}</span>
                </div>
                <div className="w-full h-1 bg-[#1a1a30] rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#9c5fff] to-purple-400 rounded-full" style={{ width: benefit.stat }}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Additional Benefits - Smaller cards in a row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {additionalBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#0a0a1f]/50 backdrop-blur-sm border border-[#9c5fff]/10 rounded-lg p-5 hover:border-[#9c5fff]/30 transition-all duration-300 flex items-start gap-4"
            >
              <div className="bg-[#9c5fff]/10 rounded-lg p-2 flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-[#9c5fff]" />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1 text-white">{benefit.title}</h4>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Banner for eMerge Americas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-[#131330] to-[#1a1a40] border border-[#9c5fff]/20 rounded-xl p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-block bg-[#9c5fff]/20 rounded-full px-4 py-1 mb-3">
                <span className="text-[#9c5fff] text-sm font-medium flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#9c5fff] animate-pulse"></span>
                  eMerge Americas 2025 Special
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Get a Free Process Automation Assessment</h3>
              <p className="text-gray-300">Visit our booth #247 for a complimentary evaluation of your manual processes</p>
            </div>
            <a 
              href="#contact"
              className="flex-shrink-0 bg-[#9c5fff] text-white px-6 py-3 rounded-full font-medium hover:bg-[#8445ff] transition-colors flex items-center gap-2"
            >
              Reserve Your Spot
              <TrendingUp className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ValueProps;