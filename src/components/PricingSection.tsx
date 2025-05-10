
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Check } from 'lucide-react';

const PricingSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-16">
          {t('pricing.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg">
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {t('pricing.free.title')}
              </h3>
              <div className="flex items-end mb-6">
                <span className="text-3xl font-bold text-white">$0</span>
                <span className="text-white/70 ml-1">/mo</span>
              </div>
              <p className="text-white/80 mb-6">
                {t('pricing.free.description')}
              </p>
              <a
                href="https://app.decsoft.ai/register"
                className="block text-center bg-white/20 text-white py-2 rounded-md hover:bg-white/30 transition w-full"
              >
                {t('pricing.cta')}
              </a>
            </div>
            <div className="bg-white/5 p-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-team-accent mr-2" />
                  <span className="text-white/80 text-sm">WhatsApp API</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-team-accent mr-2" />
                  <span className="text-white/80 text-sm">50 Contacts</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-team-accent mr-2" />
                  <span className="text-white/80 text-sm">Basic Templates</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Standard Plan */}
          <div className="bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg relative transform md:-translate-y-4">
            <div className="absolute top-0 left-0 right-0 bg-meta-accent text-white text-center py-1 text-sm font-medium">
              Popular
            </div>
            <div className="p-6 pt-9">
              <h3 className="text-xl font-bold text-white mb-2">
                {t('pricing.standard.title')}
              </h3>
              <div className="flex items-end mb-6">
                <span className="text-3xl font-bold text-white">$29</span>
                <span className="text-white/70 ml-1">/mo</span>
              </div>
              <p className="text-white/80 mb-6">
                {t('pricing.standard.description')}
              </p>
              <a
                href="https://app.decsoft.ai/register"
                className="block text-center bg-meta-accent text-white py-2 rounded-md hover:bg-opacity-90 transition w-full"
              >
                {t('pricing.cta')}
              </a>
            </div>
            <div className="bg-white/5 p-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-team-accent mr-2" />
                  <span className="text-white/80 text-sm">Everything in Free</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-team-accent mr-2" />
                  <span className="text-white/80 text-sm">2,000 Contacts</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-team-accent mr-2" />
                  <span className="text-white/80 text-sm">AI Message Writer</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-team-accent mr-2" />
                  <span className="text-white/80 text-sm">Analytics Dashboard</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Pro Plan */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg">
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {t('pricing.pro.title')}
              </h3>
              <div className="flex items-end mb-6">
                <span className="text-3xl font-bold text-white">$99</span>
                <span className="text-white/70 ml-1">/mo</span>
              </div>
              <p className="text-white/80 mb-6">
                {t('pricing.pro.description')}
              </p>
              <a
                href="https://app.decsoft.ai/register"
                className="block text-center bg-white/20 text-white py-2 rounded-md hover:bg-white/30 transition w-full"
              >
                {t('pricing.cta')}
              </a>
            </div>
            <div className="bg-white/5 p-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-team-accent mr-2" />
                  <span className="text-white/80 text-sm">Everything in Standard</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-team-accent mr-2" />
                  <span className="text-white/80 text-sm">Unlimited Campaigns</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-team-accent mr-2" />
                  <span className="text-white/80 text-sm">Team Roles & Permissions</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-team-accent mr-2" />
                  <span className="text-white/80 text-sm">Priority Support</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-team-accent mr-2" />
                  <span className="text-white/80 text-sm">API Access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
