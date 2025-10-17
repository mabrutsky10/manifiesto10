'use client';

import { useState } from 'react';
import { CONTENT, GA4_EVENTS, LEAD_MODAL_TYPES } from '@/lib/constants';
import { trackEvent } from '@/lib/utils';

export default function SponsorsTeaser() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSponsorsClick = () => {
    setIsModalOpen(true);
    trackEvent(GA4_EVENTS.CLICK_SPONSORS_TEASER, { origen: 'sponsors_section' });
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-500 text-yellow-900 px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Próximamente
          </div>
          
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {CONTENT.sponsors.title}
          </h2>
          
          {/* Description */}
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {CONTENT.sponsors.description}
          </p>
          
          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Visibilidad Premium</h3>
              <p className="text-gray-400 text-sm">Máxima exposición en todas las plataformas</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Analytics Detallados</h3>
              <p className="text-gray-400 text-sm">Métricas completas de impacto y alcance</p>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Conexión Directa</h3>
              <p className="text-gray-400 text-sm">Acceso directo a la comunidad deportiva</p>
            </div>
          </div>
          
          {/* CTA Button */}
          <button
            onClick={handleSponsorsClick}
            className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3 bg-primary-600 hover:bg-primary-700"
            aria-label="Quiero estar informado sobre Sponsors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {CONTENT.sponsors.cta}
          </button>
          
          {/* Additional info */}
          <div className="mt-6 text-sm text-gray-400">
            <p>Te notificaremos cuando esté disponible</p>
          </div>
        </div>
      </div>

      {/* Modal state management */}
      {isModalOpen && (
        <div id="lead-modal-root" data-modal-type={LEAD_MODAL_TYPES.SPONSORS} />
      )}
    </section>
  );
}

