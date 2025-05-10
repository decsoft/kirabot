
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const UseCasesSection: React.FC = () => {
  const { t } = useLanguage();

  const useCases = [
    { icon: '🛍️', key: 'usecases.ecommerce' },
    { icon: '🏥', key: 'usecases.healthcare' },
    { icon: '🏫', key: 'usecases.education' },
    { icon: '🎤', key: 'usecases.events' },
    { icon: '🏘️', key: 'usecases.realestate' },
    { icon: '🏛️', key: 'usecases.government' },
    { icon: '📦', key: 'usecases.logistics' },
    { icon: '💡', key: 'usecases.utilities' },
    { icon: '👨‍💻', key: 'usecases.agencies' }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-16">
          {t('usecases.title')}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className="bg-card-bg rounded-xl p-6 transition-transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{useCase.icon}</div>
              <p className="text-white">{t(useCase.key)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
