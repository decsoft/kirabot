
import { LanguageProvider } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import WhatsAppButton from '../components/WhatsAppButton';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import UseCasesSection from '../components/UseCasesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import FaqSection from '../components/FaqSection';
import CtaSection from '../components/CtaSection';

const Index = () => {
  return (
    <LanguageProvider translations={translations}>
      <div className="min-h-screen bg-gradient-to-b from-gradient-top to-gradient-bottom text-white">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <UseCasesSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
};

export default Index;
