
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-top py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="text-white text-xl font-bold mb-2">Decsoft Bot</div>
            <div className="text-white/70">{t('footer.copyright')}</div>
          </div>
          
          <div className="flex items-center">
            <LanguageToggle className="mx-4" />
            
            <div className="flex space-x-4 ml-4">
              <a href="#" className="text-white/70 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center md:justify-between items-center">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-6 md:mb-0">
            <a href="#" className="text-white/70 hover:text-white">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-white/70 hover:text-white">
              {t('footer.terms')}
            </a>
            <a href="#" className="text-white/70 hover:text-white">
              {t('footer.contact')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
