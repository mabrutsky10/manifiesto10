'use client';

import { useState } from 'react';
import { CONTENT, GA4_EVENTS, LEAD_MODAL_TYPES } from '@/lib/constants';
import { trackEvent } from '@/lib/utils';

export default function FinalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCTAClick = () => {
    setIsModalOpen(true);
    trackEvent(GA4_EVENTS.START_LEAD, { origen: 'final_cta', tipo: 'create_program' });
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-primary-800/20 rounded-3xl" />
          
          <div className="relative z-10">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              {CONTENT.finalCta.title}
            </h2>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-primary-100 mb-12 text-balance max-w-3xl mx-auto">
              {CONTENT.finalCta.subtitle}
            </p>
            
            {/* CTA Button */}
            <button
              onClick={handleCTAClick}
              className="btn-primary text-xl px-12 py-6 bg-white text-primary-600 hover:bg-gray-50 hover:scale-105 transform transition-all duration-200 shadow-2xl"
              aria-label="Crear programa Coquita"
            >
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {CONTENT.finalCta.cta}
              </div>
            </button>
            
            {/* Trust indicators */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-2">Configuración rápida</h3>
                <p className="text-primary-100 text-sm">En menos de 10 minutos</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-2">100% seguro</h3>
                <p className="text-primary-100 text-sm">Pagos protegidos y encriptados</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-2">Sin compromiso</h3>
                <p className="text-primary-100 text-sm">Cancelá cuando quieras</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal state management */}
      {isModalOpen && (
        <div id="lead-modal-root" data-modal-type={LEAD_MODAL_TYPES.CREATE_PROGRAM} />
      )}
    </section>
  );
}

