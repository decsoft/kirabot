
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Add subscription logic here
    console.log('Subscribing email:', email);
    setEmail('');
    // Display success message or toast notification
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gradient-top to-gradient-bottom py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-white text-2xl font-bold mb-4">Decsoft Bot</div>
            <p className="text-white/80 mb-4">
              {t('footer.description')}
            </p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mb-12">
          <Separator className="mb-8 bg-white/20" />
          
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-white text-xl font-semibold mb-6">{t('footer.followUs')}</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-8 w-8" strokeWidth={1.5} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-8 w-8" strokeWidth={1.5} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-8 w-8" strokeWidth={1.5} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-8 w-8" strokeWidth={1.5} />
              </a>
              <a href="mailto:contact@decsoft.com" className="text-white hover:text-primary transition-colors" aria-label="Email">
                <Mail className="h-8 w-8" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer & Legal */}
        <Separator className="mb-8 bg-white/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="text-white/70 mb-4 md:mb-0">
            &copy; {currentYear} Decsoft Bot. {t('footer.copyright')}
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <a href="/privacy" className="text-white/70 hover:text-white transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="/terms" className="text-white/70 hover:text-white transition-colors">
              {t('footer.terms')}
            </a>
            <a href="/contact" className="text-white/70 hover:text-white transition-colors">
              {t('footer.contact')}
            </a>
            <a href="/sitemap" className="text-white/70 hover:text-white transition-colors">
              {t('footer.sitemap')}
            </a>
            <a href="/cookies" className="text-white/70 hover:text-white transition-colors">
              {t('footer.cookies')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
