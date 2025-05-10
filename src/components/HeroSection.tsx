
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-10 pb-20 md:pt-20 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://app.decsoft.ai/register"
              className="bg-whatsapp text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition shadow-lg"
            >
              {t('hero.cta.trial')}
            </a>
            <button className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition flex items-center justify-center gap-2">
              <Play className="h-5 w-5" />
              {t('hero.cta.demo')}
            </button>
          </div>
          
          {/* Mockup Image */}
          <div className="mt-16 md:mt-20 relative">
            <div className="bg-white/10 rounded-xl p-2 md:p-4 backdrop-blur-sm shadow-2xl">
              <div className="relative overflow-hidden rounded-lg shadow-inner min-h-[240px] md:min-h-[360px]">
                <div className="bg-card-bg rounded-lg h-full w-full object-cover animate-float flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xl md:text-2xl font-bold mb-2">Decsoft Bot Dashboard</div>
                    <div className="text-sm md:text-base opacity-80">AI Powered WhatsApp & Telegram Marketing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
