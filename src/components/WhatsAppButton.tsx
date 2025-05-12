
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhatsAppButton: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <a 
      href="https://wa.me/237691450000"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-whatsapp text-white px-5 py-3 rounded-full shadow-xl hover:bg-opacity-90 transition-all hover:scale-105"
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2.5} />
      <span className="font-medium">{t('whatsapp.chat')}</span>
    </a>
  );
};

export default WhatsAppButton;
