
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from './ui/accordion';

interface FaqItem {
  questionKey: string;
  answerKey: string;
}

const FaqSection: React.FC = () => {
  const { t } = useLanguage();

  const faqs: FaqItem[] = [
    { questionKey: 'faq.q1', answerKey: 'faq.a1' },
    { questionKey: 'faq.q2', answerKey: 'faq.a2' },
    { questionKey: 'faq.q3', answerKey: 'faq.a3' },
    { questionKey: 'faq.q4', answerKey: 'faq.a4' },
    { questionKey: 'faq.q5', answerKey: 'faq.a5' },
    { questionKey: 'faq.q6', answerKey: 'faq.a6' },
    { questionKey: 'faq.q7', answerKey: 'faq.a7' },
    { questionKey: 'faq.q8', answerKey: 'faq.a8' },
  ];

  return (
    <section className="py-16 md:py-24 bg-card-bg/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-16">
          {t('faq.title')}
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`} 
                className="bg-white/30 backdrop-blur-sm rounded-xl mb-4 overflow-hidden border-none shadow-md"
              >
                <AccordionTrigger className="px-5 py-4 text-left hover:no-underline">
                  <h3 className="text-lg font-semibold text-white">{t(faq.questionKey)}</h3>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4 text-white bg-black/10">
                  {t(faq.answerKey)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
