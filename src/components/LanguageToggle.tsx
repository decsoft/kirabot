
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '@/lib/utils';

interface LanguageToggleProps {
  className?: string;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ className }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={cn("flex items-center", className)}>
      <button 
        className={cn(
          "px-2 py-1 text-sm font-medium transition-colors", 
          language === 'en' 
            ? "text-white bg-primary/80 rounded-l-md" 
            : "text-white/70 hover:text-white rounded-l-md"
        )}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
      <div className="text-white/50 px-1">|</div>
      <button 
        className={cn(
          "px-2 py-1 text-sm font-medium transition-colors", 
          language === 'fr' 
            ? "text-white bg-primary/80 rounded-r-md" 
            : "text-white/70 hover:text-white rounded-r-md"
        )}
        onClick={() => setLanguage('fr')}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageToggle;
