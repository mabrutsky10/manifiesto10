'use client';

import { CONTENT, EXTERNAL_LINKS, GA4_EVENTS } from '@/lib/constants';
import { trackEvent } from '@/lib/utils';

export default function ProdeConnector() {
  const handleProdeClick = () => {
    trackEvent(GA4_EVENTS.CLICK_PRODE, { origen: 'prode_section' });
    window.open(EXTERNAL_LINKS.prode, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Beneficio Destacado Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-500 text-yellow-900 px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Beneficio Destacado
          </div>
          
          {/* Content */}
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12 shadow-lg">
            {/* Icon */}
            <div className="flex items-center justify-center w-20 h-20 bg-primary-600 rounded-full mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {CONTENT.prode.title}
            </h2>
            
            {/* Description */}
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              {CONTENT.prode.description}
            </p>
            
            {/* CTA Button */}
            <button
              onClick={handleProdeClick}
              className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3 hover:scale-105 transform transition-all duration-200 shadow-lg"
              aria-label="Entrar a PRODE Comunitario"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {CONTENT.prode.cta}
            </button>
            
            {/* Additional info */}
            <div className="mt-8 text-sm text-gray-600">
              <p>Se abre en una nueva ventana</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

