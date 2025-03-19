import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FileText, 
  Users, 
  Receipt, 
  Database, 
  Rocket, 
  BarChart as ChartBar, 
  ArrowRight 
} from 'lucide-react';

// Simplified use cases focusing on clear value
const useCases = [
  {
    icon: FileText,
    title: 'Lead Qualification',
    before: '4 hours/week',
    after: '5 minutes/week'
  },
  {
    icon: Receipt,
    title: 'Invoice Processing',
    before: '6 hours/week',
    after: '10 minutes/week'
  },
  {
    icon: ChartBar,
    title: 'Monthly Reporting',
    before: '8 hours/month',
    after: '15 minutes/month'
  },
  {
    icon: Database,
    title: 'CRM Enrichment',
    before: '5 hours/week',
    after: '8 minutes/week'
  },
  {
    icon: Users,
    title: 'Customer Onboarding',
    before: '2 days/customer',
    after: '15 minutes/customer'
  },
  {
    icon: Rocket,
    title: 'Campaign Tracking',
    before: '3 hours/week',
    after: '5 minutes/week'
  }
];

const UseCases: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section className="py-20 px-4 relative bg-[#0a0a1f]" id="use-cases">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Daily Operations</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            See how we turn time-consuming manual tasks into quick automated processes
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#131330] border border-[#9c5fff]/10 rounded-lg p-6 hover:border-[#9c5fff]/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-[#9c5fff]/10">
                  <useCase.icon className="w-5 h-5 text-[#9c5fff]" />
                </div>
                <h3 className="text-xl font-medium">{useCase.title}</h3>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex flex-col items-center bg-red-400/10 rounded-lg p-2 px-3 flex-1">
                  <p className="text-gray-400 text-xs">BEFORE</p>
                  <p className="text-red-400 font-medium">{useCase.before}</p>
                </div>
                
                <ArrowRight className="mx-2 text-[#9c5fff]" />
                
                <div className="flex flex-col items-center bg-green-400/10 rounded-lg p-2 px-3 flex-1">
                  <p className="text-gray-400 text-xs">AFTER</p>
                  <p className="text-green-400 font-medium">{useCase.after}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default UseCases;