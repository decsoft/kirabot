
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-card-bg/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-16">
          {t('testimonials.title')}
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg">
            <div className="text-yellow-300 text-3xl mb-4">★★★★★</div>
            <p className="text-white text-lg md:text-xl mb-6 font-medium">"{t('testimonials.quote1')}"</p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mr-3 flex items-center justify-center text-white font-bold">A</div>
              <div>
                <div className="text-white font-medium">Alex Watson</div>
                <div className="text-white/80 text-sm">E-commerce Manager</div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg">
            <div className="text-yellow-300 text-3xl mb-4">★★★★★</div>
            <p className="text-white text-lg md:text-xl mb-6 font-medium">"{t('testimonials.quote2')}"</p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-red-500 rounded-full mr-3 flex items-center justify-center text-white font-bold">S</div>
              <div>
                <div className="text-white font-medium">Sarah Miller</div>
                <div className="text-white/80 text-sm">Marketing Director</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
