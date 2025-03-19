import React from 'react';
import { Download, ArrowRight, FileText, CheckCircle2, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

interface LeadMagnetsProps {
  onGetAudit: () => void;
  onGetPlaybook: () => void;
}

const LeadMagnets: React.FC<LeadMagnetsProps> = ({ onGetAudit, onGetPlaybook }) => {
  return (
    <section className="py-20 px-4 bg-[#0a0a1f]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Start Your Automation Journey
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose the resource that best fits your needs
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Free eBook */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#131330] border border-[#9c5fff]/20 rounded-xl p-8 flex flex-col h-full relative"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#9c5fff]/10 p-3 rounded-lg">
                <FileText className="w-6 h-6 text-[#9c5fff]" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Process Automation Playbook
              </h3>
            </div>
            
            <p className="text-gray-300 mb-6">
              Our comprehensive guide to identifying and automating your most time-consuming business processes.
            </p>
            
            <div className="bg-[#0a0a1f] rounded-lg p-4 mb-6">
              <ul className="space-y-3">
                {[
                  'Top 10 processes to automate first',
                  'Implementation framework',
                  'ROI calculation templates'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-auto">
              <button
                onClick={onGetPlaybook}
                className="flex items-center justify-center gap-2 w-full bg-white/10 text-white px-6 py-3 rounded-full hover:bg-white/15 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download Free Playbook
              </button>
            </div>
          </motion.div>

          {/* AI-Scan Diagnosis */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-[#141435] to-[#1a1a40] border border-[#9c5fff]/30 rounded-xl p-8 flex flex-col h-full relative overflow-hidden"
          >
            {/* Badge */}
            <div className="absolute top-3 right-3 z-10">
              <span className="bg-[#9c5fff]/20 text-[#9c5fff] text-xs font-medium px-3 py-1 rounded-full">
                AI-Powered
              </span>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-[#9c5fff]/5 rounded-full blur-3xl"></div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#9c5fff]/10 p-3 rounded-lg">
                <Cpu className="w-6 h-6 text-[#9c5fff]" />
              </div>
              <h3 className="text-xl font-bold text-white">
                AI-Scan: Your Free Diagnosis
              </h3>
            </div>
            
            <p className="text-gray-300 mb-6">
              Get a personalized AI diagnosis of your manual processes and receive a custom automation roadmap to boost efficiency.
            </p>
            
            <div className="bg-[#0a0a1f]/50 rounded-lg p-4 mb-6">
              <ul className="space-y-3">
                {[
                  'AI analysis of your specific pain points',
                  'Personalized automation prescription',
                  'Implementation strategy ($1,500 value)'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-auto">
              <button
                onClick={onGetAudit}
                className="w-full bg-[#9c5fff] text-white px-6 py-3 rounded-full hover:bg-[#8445ff] transition-colors flex items-center justify-center gap-2"
              >
                Get Your AI Diagnosis
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <p className="text-center text-sm text-gray-400 mt-3">
                5-minute process • Instant AI insights
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default LeadMagnets;