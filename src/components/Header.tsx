
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-transparent py-4 w-full">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-white flex items-center">
            <img 
              src="/lovable-uploads/6943f8a9-16f4-4ca6-8d54-83f886b3eae5.png" 
              alt="KiraBot Logo" 
              className="h-8 md:h-10" 
            />
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="https://app.decsoft.ai/login"
            className="text-white/80 hover:text-white transition"
          >
            {t('login')}
          </a>
          <a
            href="https://app.decsoft.ai/register"
            className="bg-whatsapp text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition"
          >
            {t('signup')}
          </a>
          <LanguageToggle className="ml-4" />
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-50 bg-gradient-to-b from-gradient-top to-gradient-bottom transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/6943f8a9-16f4-4ca6-8d54-83f886b3eae5.png" 
                alt="KiraBot Logo" 
                className="h-8" 
              />
            </div>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <nav className="flex flex-col space-y-6 items-center">
            <a
              href="https://app.decsoft.ai/login"
              className="text-white/80 hover:text-white text-lg transition w-full text-center py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('login')}
            </a>
            <a
              href="https://app.decsoft.ai/register"
              className="bg-whatsapp text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('signup')}
            </a>
            <LanguageToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
