
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const HowItWorksSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-card-bg/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-16">
          {t('how.title')}
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 relative">
            {/* Step 1 */}
            <div className="flex-1 relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 h-full">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-b from-gradient-top to-gradient-bottom text-white font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t('how.step1')}</h3>
              </div>
              
              {/* Connector line (only visible on desktop) */}
              <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-white/30"></div>
            </div>
            
            {/* Step 2 */}
            <div className="flex-1 relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 h-full">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-b from-gradient-top to-gradient-bottom text-white font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t('how.step2')}</h3>
              </div>
              
              {/* Connector line (only visible on desktop) */}
              <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-white/30"></div>
            </div>
            
            {/* Step 3 */}
            <div className="flex-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 h-full">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-b from-gradient-top to-gradient-bottom text-white font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t('how.step3')}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
