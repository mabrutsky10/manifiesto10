'use client';

import { useState } from 'react';
import { CONTENT } from '@/lib/constants';
import CreateTeamModal from './CreateTeamModal';
import CuotaSocialModal from './CuotaSocialModal';
import CampanaSociosModal from './CampanaSociosModal';
import PremiosModal from './PremiosModal';
import RecaudarCuotasModal from './RecaudarCuotasModal';
import CalculadoraModal from './CalculadoraModal';

export default function HowItWorksTeam() {
  const [isCreateTeamModalOpen, setIsCreateTeamModalOpen] = useState(false);
  const [isCuotaSocialModalOpen, setIsCuotaSocialModalOpen] = useState(false);
  const [isCampanaSociosModalOpen, setIsCampanaSociosModalOpen] = useState(false);
  const [isPremiosModalOpen, setIsPremiosModalOpen] = useState(false);
  const [isRecaudarCuotasModalOpen, setIsRecaudarCuotasModalOpen] = useState(false);
  const [isCalculadoraModalOpen, setIsCalculadoraModalOpen] = useState(false);
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
        setIsCreateTeamModalOpen(true);
        break;
      case 1: // Cuota Social Mínima $3500
        setIsCuotaSocialModalOpen(true);
        break;
      case 2: // Comenzar campaña de socios
        setIsCampanaSociosModalOpen(true);
        break;
      case 3: // Premios Vigentes para Socios
        setIsPremiosModalOpen(true);
        break;
      case 4: // Recaudar las cuotas mes a mes
        setIsRecaudarCuotasModalOpen(true);
        break;
      case 5: // Calculadora Recaudadora
        setIsCalculadoraModalOpen(true);
        break;
      default:
        break;
    }
  };

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-center mb-16 text-balance">
            {CONTENT.howItWorks.title}
          </h2>
          
          {/* Steps */}
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-4">
            {CONTENT.howItWorks.steps.map((step, index) => (
              <div
                key={index}
                className="relative flex-1 flex flex-col items-center text-center"
              >
                {/* Step number */}
                <div className={`flex items-center justify-center w-12 h-12 text-white rounded-full text-xl font-bold mb-4 group-hover:scale-110 transition-transform duration-200 ${
                  index === 0 ? 'bg-red-600' : 'bg-primary-600'
                }`}>
                  {index + 1}
                </div>
                
                {/* Step content */}
                <div className="flex-1 relative z-10 mb-6">
                  <p className="text-gray-700 leading-relaxed text-sm select-text">
                    {step}
                  </p>
                </div>

                {/* CTA Button - Fixed at bottom */}
                <div className="w-full flex justify-center">
                  <button
                    onClick={() => handleCTAClick(CONTENT.howItWorks.ctas[index], index)}
                    className="w-full max-w-xs bg-white border-2 border-primary-600 text-primary-600 px-4 py-3 rounded-lg font-semibold text-sm hover:bg-primary-600 hover:text-white transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md"
                  >
                    {CONTENT.howItWorks.ctas[index]}
                  </button>
                </div>
                
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

      {/* Create Team Modal */}
      <CreateTeamModal 
        isOpen={isCreateTeamModalOpen} 
        onClose={() => setIsCreateTeamModalOpen(false)} 
      />

      {/* Cuota Social Modal */}
      <CuotaSocialModal 
        isOpen={isCuotaSocialModalOpen} 
        onClose={() => setIsCuotaSocialModalOpen(false)} 
      />

      {/* Campaña Socios Modal */}
      <CampanaSociosModal 
        isOpen={isCampanaSociosModalOpen} 
        onClose={() => setIsCampanaSociosModalOpen(false)} 
      />

      {/* Premios Modal */}
      <PremiosModal 
        isOpen={isPremiosModalOpen} 
        onClose={() => setIsPremiosModalOpen(false)} 
      />

      {/* Recaudar Cuotas Modal */}
      <RecaudarCuotasModal 
        isOpen={isRecaudarCuotasModalOpen} 
        onClose={() => setIsRecaudarCuotasModalOpen(false)} 
      />

      {/* Calculadora Modal */}
      <CalculadoraModal 
        isOpen={isCalculadoraModalOpen} 
        onClose={() => setIsCalculadoraModalOpen(false)} 
      />
    </section>
  );
}

