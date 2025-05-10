
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhatsAppButton: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <a 
      href="https://wa.me/237676830000"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all"
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">{t('whatsapp.chat')}</span>
    </a>
  );
};

export default WhatsAppButton;
