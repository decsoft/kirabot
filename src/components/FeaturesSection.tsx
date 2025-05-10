
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link, Bot, Users } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-16">
          {t('features.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-card-bg rounded-xl p-6 md:p-8 shadow-lg transform transition-transform hover:-translate-y-1">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/30 mb-6 mx-auto">
              <Link className="w-8 h-8 text-meta-accent" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-4">
              {t('features.meta.title')}
            </h3>
            <p className="text-white/90 text-center">
              {t('features.meta.description')}
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-card-bg rounded-xl p-6 md:p-8 shadow-lg transform transition-transform hover:-translate-y-1">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/30 mb-6 mx-auto">
              <Bot className="w-8 h-8 text-ai-accent" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-4">
              {t('features.ai.title')}
            </h3>
            <p className="text-white/90 text-center">
              {t('features.ai.description')}
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-card-bg rounded-xl p-6 md:p-8 shadow-lg transform transition-transform hover:-translate-y-1">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/30 mb-6 mx-auto">
              <Users className="w-8 h-8 text-team-accent" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-4">
              {t('features.team.title')}
            </h3>
            <p className="text-white/90 text-center">
              {t('features.team.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
