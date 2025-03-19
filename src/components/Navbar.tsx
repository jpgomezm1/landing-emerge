import React from 'react';
import { Menu } from 'lucide-react';

interface NavbarProps {
  onGetAudit: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onGetAudit }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0a0a1f]/80 backdrop-blur-md border-b border-[#9c5fff]/20 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          <a href="/" className="flex items-center">
              <img 
                src="https://storage.googleapis.com/cluvi/nuevo_irre-removebg-preview.png" 
                alt="irrelevant logo" 
                className="h-8 md:h-10"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={onGetAudit}
              className="bg-[#9c5fff] text-white px-6 py-2 rounded-full hover:bg-[#8445ff] transition-colors"
            >
              Get Your Free AI Audit
            </button>
          </div>

          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;