import React, { useState } from 'react';
import { X, Check, Calendar, Download, ArrowRight, FileText } from 'lucide-react';

interface AuditFormProps {
  onClose: () => void;
  formType?: 'playbook' | 'assessment'; // Nuevo prop para determinar el tipo de formulario
}

const AuditForm: React.FC<AuditFormProps> = ({ onClose, formType = 'assessment' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    companyName: '',
    industry: '',
    email: '',
    whatsapp: '',
    processes: '',
    visitBooth: false
  });

  const [formStep, setFormStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Mock API call
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  // Common industries for dropdown
  const industries = [
    "Software & Technology",
    "E-commerce & Retail",
    "Financial Services",
    "Healthcare",
    "Education",
    "Manufacturing",
    "Marketing & Advertising",
    "Real Estate",
    "Other"
  ];

  // Common processes for suggestions
  const commonProcesses = [
    "Data Entry & Validation",
    "Report Generation",
    "Customer Onboarding",
    "Lead Qualification",
    "Invoice Processing",
    "CRM Data Management"
  ];

  // Determine form title and badge text based on form type
  const formTitle = formType === 'playbook' 
    ? 'Process Automation Playbook' 
    : 'Free Process Assessment';
  
  const badgeText = formType === 'playbook'
    ? 'Free Download'
    : 'eMerge Americas Exclusive';

  return (
    <div className="p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#9c5fff]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#9c5fff]/5 rounded-full blur-3xl"></div>
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-[#9c5fff]/20 text-[#9c5fff] text-xs px-2 py-1 rounded-full">
              {badgeText}
            </span>
          </div>
          <h2 className="text-2xl font-bold">
            {formSubmitted ? 
              (formType === 'playbook' ? 'Download Ready!' : 'Reservation Complete!') : 
              formTitle}
          </h2>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {formSubmitted ? (
        // Success message
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-500" />
          </div>
          
          {formType === 'playbook' ? (
            // Playbook success message
            <>
              <h3 className="text-xl font-bold mb-2">Your download is ready!</h3>
              <p className="text-gray-300 mb-6">
                Thanks for your interest in our Process Automation Playbook. Click the button below to download.
              </p>
              
              <div className="bg-[#131330] border border-[#9c5fff]/20 rounded-lg p-4 mb-6 inline-block mx-auto">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-5 h-5 text-[#9c5fff]" />
                  <p className="font-medium">Process Automation Playbook</p>
                </div>
                <p className="text-sm text-gray-300">PDF • 4.2 MB</p>
              </div>
              
              <button
                onClick={onClose}
                className="bg-[#9c5fff] text-white px-6 py-3 rounded-full hover:bg-[#8445ff] transition-colors flex items-center justify-center gap-2 mx-auto"
              >
                <Download className="w-5 h-5" />
                Download Now
              </button>
            </>
          ) : (
            // Assessment success message
            <>
              <h3 className="text-xl font-bold mb-2">Thanks for reserving your spot!</h3>
              <p className="text-gray-300 mb-6">
                We've received your information and your Process Assessment reservation is confirmed. 
                {formData.visitBooth ? 
                  " We look forward to meeting you at Booth #247 during eMerge Americas." : 
                  " A member of our team will contact you shortly to schedule your assessment."}
              </p>
              
              <div className="bg-[#131330] border border-[#9c5fff]/20 rounded-lg p-4 mb-6 inline-block mx-auto">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-[#9c5fff]" />
                  <p className="font-medium">eMerge Americas 2025</p>
                </div>
                <p className="text-sm text-gray-300">April 21-22 • Booth #247</p>
              </div>
              
              <button
                onClick={onClose}
                className="bg-[#9c5fff] text-white px-6 py-3 rounded-full hover:bg-[#8445ff] transition-colors"
              >
                Close
              </button>
            </>
          )}
        </div>
      ) : (
        // Form steps
        <form onSubmit={handleSubmit} className="relative z-10">
          {formStep === 1 ? (
            // Step 1: Basic Information
            <div className="space-y-6">
              {formType === 'playbook' ? (
                <p className="text-gray-300 mb-6">
                  Fill in your details to get our comprehensive guide to automating your most time-consuming business processes.
                </p>
              ) : (
                <p className="text-gray-300 mb-6">
                  Reserve your free Process Automation Assessment ($1,500 value).
                </p>
              )}
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name*</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    className="w-full bg-[#131330] border border-[#9c5fff]/20 rounded-lg px-4 py-2 focus:outline-none focus:border-[#9c5fff]"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Job Title*</label>
                  <input
                    type="text"
                    name="jobTitle"
                    required
                    className="w-full bg-[#131330] border border-[#9c5fff]/20 rounded-lg px-4 py-2 focus:outline-none focus:border-[#9c5fff]"
                    value={formData.jobTitle}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name*</label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    className="w-full bg-[#131330] border border-[#9c5fff]/20 rounded-lg px-4 py-2 focus:outline-none focus:border-[#9c5fff]"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Industry*</label>
                  <select
                    name="industry"
                    required
                    className="w-full bg-[#131330] border border-[#9c5fff]/20 rounded-lg px-4 py-2 focus:outline-none focus:border-[#9c5fff]"
                    value={formData.industry}
                    onChange={handleChange}
                  >
                    <option value="">Select your industry</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email*</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-[#131330] border border-[#9c5fff]/20 rounded-lg px-4 py-2 focus:outline-none focus:border-[#9c5fff]"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {formType === 'assessment' && (
                  <div>
                    <label className="block text-sm font-medium mb-2">WhatsApp / Phone Number*</label>
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      className="w-full bg-[#131330] border border-[#9c5fff]/20 rounded-lg px-4 py-2 focus:outline-none focus:border-[#9c5fff]"
                      value={formData.whatsapp}
                      onChange={handleChange}
                    />
                  </div>
                )}
              </div>

              <div className="mt-6">
                {formType === 'playbook' ? (
                  <button
                    type="submit"
                    className="w-full bg-[#9c5fff] text-white px-6 py-3 rounded-full hover:bg-[#8445ff] transition-colors flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Download Process Automation Playbook
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setFormStep(2)}
                    className="w-full bg-[#9c5fff] text-white px-6 py-3 rounded-full hover:bg-[#8445ff] transition-colors"
                  >
                    Continue
                  </button>
                )}
              </div>
            </div>
          ) : (
            // Step 2: Process Information (only for Assessment form)
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Which processes would you like to automate?*
                </label>
                
                <div className="mb-3">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {commonProcesses.map((process) => (
                      <button
                        key={process}
                        type="button"
                        className="text-xs bg-[#131330] text-gray-300 border border-[#9c5fff]/10 px-3 py-1 rounded-full hover:border-[#9c5fff]/30 transition-colors"
                        onClick={() => {
                          const currentProcesses = formData.processes;
                          const newProcesses = currentProcesses 
                            ? `${currentProcesses}, ${process}` 
                            : process;
                          setFormData({ ...formData, processes: newProcesses });
                        }}
                      >
                        + {process}
                      </button>
                    ))}
                  </div>
                </div>
                
                <textarea
                  name="processes"
                  required
                  rows={4}
                  placeholder="Describe the manual processes you're looking to automate..."
                  className="w-full bg-[#131330] border border-[#9c5fff]/20 rounded-lg px-4 py-2 focus:outline-none focus:border-[#9c5fff]"
                  value={formData.processes}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="bg-[#131330] border border-[#9c5fff]/10 rounded-lg p-4">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="visitBooth"
                    className="mt-1"
                    checked={formData.visitBooth}
                    onChange={handleCheckboxChange}
                  />
                  <span className="text-sm text-gray-300">
                    I plan to visit Booth #247 at eMerge Americas for an in-person consultation
                  </span>
                </label>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setFormStep(1)}
                  className="flex-1 bg-transparent border border-[#9c5fff]/30 text-[#9c5fff] px-6 py-3 rounded-full hover:bg-[#9c5fff]/5 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#9c5fff] text-white px-6 py-3 rounded-full hover:bg-[#8445ff] transition-colors"
                >
                  Reserve My Free Assessment
                </button>
              </div>
              
              <p className="text-xs text-center text-gray-400 mt-2">
                Limited spots available for in-person consultations
              </p>
            </div>
          )}
        </form>
      )}
    </div>
  );
}

export default AuditForm;