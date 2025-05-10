
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CtaSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-10">
            {t('finalcta.title')}
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://app.decsoft.ai/register"
              className="bg-whatsapp text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition"
            >
              {t('finalcta.trial')}
            </a>
            <a
              href="mailto:contact@decsoft.ai"
              className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition"
            >
              {t('finalcta.demo')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
