'use client';

import { CONTENT, EXTERNAL_LINKS, GA4_EVENTS } from '@/lib/constants';
import { trackEvent } from '@/lib/utils';

export default function BenefitsSocios() {
  const handleProdeClick = () => {
    trackEvent(GA4_EVENTS.CLICK_PRODE, { origen: 'beneficios_socios' });
    window.open(EXTERNAL_LINKS.prode, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-center mb-16 text-balance">
            {CONTENT.benefits.socios.title}
          </h2>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONTENT.benefits.socios.items.map((benefit, index) => (
              <div
                key={index}
                className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary-500"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-xl mb-4 group-hover:bg-green-200 transition-colors duration-200">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 select-text">
                  {benefit}
                </h3>
                
                {/* Decorative element */}
                <div className="w-12 h-1 bg-green-500 rounded-full mt-4" />
              </div>
            ))}
          </div>
          
          {/* PRODE Comunitario CTA */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-colors duration-200 cursor-pointer" onClick={handleProdeClick}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="font-semibold">Prode Comunitario vigente</span>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 select-text">Pagos seguros</h3>
              <p className="text-gray-600 text-sm select-text">Procesamiento seguro y automático</p>
              
              {/* Mercado Pago Logo */}
              <div className="mt-3 flex justify-center">
                <img 
                  src="/logomp.jpeg" 
                  alt="Mercado Pago" 
                  className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 select-text">Cancelación libre</h3>
              <p className="text-gray-600 text-sm select-text">Cancelá cuando quieras, sin penalidades</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 select-text">Soporte dedicado</h3>
              <p className="text-gray-600 text-sm select-text">Atención personalizada cuando la necesites</p>
              
              {/* WhatsApp Logo */}
              <div className="mt-3 flex justify-center">
                <img 
                  src="/wa.jpeg" 
                  alt="WhatsApp" 
                  className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

