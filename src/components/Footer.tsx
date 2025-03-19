import React from 'react';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/30 border-t border-[#9c5fff]/20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#9c5fff] to-purple-400 text-transparent bg-clip-text">
              irrelevant
            </span>
            <p className="mt-2 text-gray-400">
              AI Automation for Founders by Founders
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="space-y-2">
              <a href="/privacy" className="block text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="block text-gray-400 hover:text-white transition-colors">
                Terms of Use
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">eMerge Americas 2025</h4>
            <p className="text-gray-400">
              Visit us at Booth #42<br />
              Miami Beach Convention Center
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; 2025 irrelevant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;