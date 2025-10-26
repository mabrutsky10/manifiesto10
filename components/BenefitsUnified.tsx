'use client';

import { CONTENT, EXTERNAL_LINKS, GA4_EVENTS } from '@/lib/constants';
import { trackEvent } from '@/lib/utils';

export default function BenefitsUnified() {
  const handleProdeClick = () => {
    trackEvent(GA4_EVENTS.CLICK_PRODE, { origen: 'beneficios_unificados' });
    window.open(EXTERNAL_LINKS.prode, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Main Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Beneficios para todos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada parte del programa "Socios Coquitas" tiene sus ventajas únicas
            </p>
          </div>

          {/* Benefits Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Team Benefits */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {CONTENT.benefits.team.title}
                </h3>
                <div className="w-16 h-1 bg-primary-600 rounded-full mx-auto" />
              </div>

              <div className="space-y-6">
                {CONTENT.benefits.team.items.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-200">
                      <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Socios Benefits */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-l-green-500">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {CONTENT.benefits.socios.title}
                </h3>
                <div className="w-16 h-1 bg-green-500 rounded-full mx-auto" />
              </div>

              <div className="space-y-6">
                {CONTENT.benefits.socios.items.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors duration-200">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PRODE Comunitario CTA */}
          <div className="text-center mb-12">
            <div 
              className="inline-flex items-center gap-3 bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-colors duration-200 cursor-pointer shadow-lg"
              onClick={handleProdeClick}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="font-semibold text-lg">Prode Comunitario vigente</span>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Pagos seguros</h3>
              <p className="text-gray-600 text-sm">Procesamiento seguro y automático</p>
              
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
              <h3 className="font-semibold text-gray-900 mb-2">Cancelación libre</h3>
              <p className="text-gray-600 text-sm">Cancelá cuando quieras, sin penalidades</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Soporte dedicado</h3>
              <p className="text-gray-600 text-sm">Atención personalizada cuando la necesites</p>
              
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
