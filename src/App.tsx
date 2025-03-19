import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Download, MessageCircle, MapIcon as WhatsappIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import UseCases from './components/UseCases';
import LeadMagnets from './components/LeadMagnets';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';
import AuditForm from './components/AuditForm';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState<'playbook' | 'assessment'>('assessment');

  const openForm = (type: 'playbook' | 'assessment') => {
    setFormType(type);
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a1f] text-[#e4e4e4]">
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <WhatsappIcon className="w-6 h-6 text-white" />
      </motion.a>

      <Navbar onGetAudit={() => openForm('assessment')} />
      
      <main>
        <Hero onGetAudit={() => openForm('assessment')} />
        <ValueProps />
        <UseCases />
        <LeadMagnets 
          onGetPlaybook={() => openForm('playbook')}
          onGetAudit={() => openForm('assessment')}
        />
        <SocialProof />
      </main>

      <Footer />

      {/* Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#0a0a1f] border border-[#9c5fff]/20 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <AuditForm 
                onClose={() => setIsFormOpen(false)}
                formType={formType} 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;