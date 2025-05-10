
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  // Define testimonials data
  const testimonials = [
    {
      quote: 'testimonials.quote1',
      name: 'Alex Watson',
      role: 'E-commerce Manager',
      initials: 'A',
      bgClass: 'from-blue-400 to-purple-500'
    },
    {
      quote: 'testimonials.quote2',
      name: 'Sarah Miller',
      role: 'Marketing Director',
      initials: 'S',
      bgClass: 'from-pink-400 to-red-500'
    },
    {
      quote: 'testimonials.quote3',
      name: 'Michael Johnson',
      role: 'Customer Support Lead',
      initials: 'M',
      bgClass: 'from-green-400 to-teal-500'
    },
    {
      quote: 'testimonials.quote4',
      name: 'Emma Davis',
      role: 'Digital Agency Owner',
      initials: 'E',
      bgClass: 'from-yellow-400 to-orange-500'
    },
    {
      quote: 'testimonials.quote5',
      name: 'Daniel Brown',
      role: 'Marketing Specialist',
      initials: 'D',
      bgClass: 'from-indigo-400 to-blue-500'
    },
    {
      quote: 'testimonials.quote6',
      name: 'Olivia Martinez',
      role: 'Sales Director',
      initials: 'O',
      bgClass: 'from-amber-400 to-yellow-500'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-card-bg/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-16">
          {t('testimonials.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg">
              <div className="text-yellow-300 text-3xl mb-4">★★★★★</div>
              <p className="text-white text-lg md:text-xl mb-6 font-medium">"{t(testimonial.quote)}"</p>
              <div className="flex items-center">
                <div className={`w-10 h-10 bg-gradient-to-br ${testimonial.bgClass} rounded-full mr-3 flex items-center justify-center text-white font-bold`}>
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-white font-medium">{testimonial.name}</div>
                  <div className="text-white/80 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
