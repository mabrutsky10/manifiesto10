'use client';

import { CONTENT } from '@/lib/constants';

export default function HowItWorksTeam() {
  const handleCTAClick = (ctaText: string, stepIndex: number) => {
    // Track the CTA click
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_cta_how_it_works', {
        cta_text: ctaText,
        step_number: stepIndex + 1,
      });
    }
    
    // Handle specific CTAs
    switch (stepIndex) {
      case 0: // Crear Equipo +10
        window.open('https://plus10.com.ar', '_blank', 'noopener,noreferrer');
        break;
      case 1: // Cuota Social Mínima $3500
        // Scroll to calculator
        const calculatorElement = document.getElementById('calculator');
        if (calculatorElement) {
          calculatorElement.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 2: // Al asociarse te apoyan y siguen todas tus novedades
        // Open lead modal for team creation
        const event = new CustomEvent('openLeadModal', { 
          detail: { type: 'CREATE_PROGRAM' } 
        });
        window.dispatchEvent(event);
        break;
      case 3: // Ver premios vigentes
        window.open('https://prode.com.ar', '_blank', 'noopener,noreferrer');
        break;
      case 4: // Recaudar las cuotas mes a mes
        // Open lead modal for collection info
        const event2 = new CustomEvent('openLeadModal', { 
          detail: { type: 'CREATE_PROGRAM' } 
        });
        window.dispatchEvent(event2);
        break;
      case 5: // Calculadora Recaudadora
        // Scroll to calculator
        const calculatorElement2 = document.getElementById('calculator');
        if (calculatorElement2) {
          calculatorElement2.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      default:
        break;
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-center mb-16 text-balance">
            {CONTENT.howItWorks.title}
          </h2>
          
          {/* Steps */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-4">
            {CONTENT.howItWorks.steps.map((step, index) => (
              <div
                key={index}
                className="relative flex-1 flex flex-col items-center text-center"
              >
                {/* Step number */}
                <div className="flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full text-xl font-bold mb-4 group-hover:scale-110 transition-transform duration-200">
                  {index + 1}
                </div>
                
                {/* Step content */}
                <div className="flex-1 relative z-10 mb-6">
                  <p className="text-gray-700 leading-relaxed text-sm select-text">
                    {step}
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleCTAClick(CONTENT.howItWorks.ctas[index], index)}
                  className="w-full max-w-xs bg-white border-2 border-primary-600 text-primary-600 px-4 py-3 rounded-lg font-semibold text-sm hover:bg-primary-600 hover:text-white transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md"
                >
                  {CONTENT.howItWorks.ctas[index]}
                </button>
                
                {/* Connector line (hidden on last item) */}
                {index < CONTENT.howItWorks.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-transparent transform translate-x-4 pointer-events-none z-0" />
                )}
              </div>
            ))}
          </div>
          
          {/* Bottom decoration */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 text-primary-600 font-semibold">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Proceso simple y transparente</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

