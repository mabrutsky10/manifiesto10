'use client';

import { useState, useEffect } from 'react';

interface CreateTeamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STORE_LINKS = {
  appStore: 'https://apps.apple.com/ar/app/10/id1575209914',
  playStore: 'https://play.google.com/store/apps/details?id=com.mas10&pli=1',
  terms: 'https://mas10.ar/terminos-y-condiciones/',
};

const STEPS = [
  {
    number: 1,
    title: 'Descarga la app',
    description: 'Descarga +10 desde la App Store o Google Play Store',
  },
  {
    number: 2,
    title: 'Crea una cuenta y crea tu perfil de jugador',
    description: 'Regístrate en la app y completa tu perfil de jugador con tus datos',
  },
  {
    number: 3,
    title: 'Elegí el nombre de tu equipo y carga los datos',
    description: 'Crea tu equipo, elige un nombre y completa toda la información necesaria',
  },
  {
    number: 4,
    title: 'Invita al resto de los jugadores, que carguen su perfil',
    description: 'Comparte el equipo con tus compañeros para que se unan y completen sus perfiles',
  },
  {
    number: 5,
    title: 'Asegurate de seguir las indicaciones de fotos figura, así tu perfil se ve bien profesional',
    description: 'Sube fotos de calidad siguiendo las indicaciones para que tu perfil luzca profesional',
  },
];

export default function CreateTeamModal({ isOpen, onClose }: CreateTeamModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl z-10">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Crea tu equipo en +10
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Sigue estos pasos para crear tu equipo y comenzar a jugar
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Cerrar modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Download Links */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Descarga la app
              </h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={STORE_LINKS.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 2.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Descargar en</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  href={STORE_LINKS.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Descargar en</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Steps */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">
                Pasos para crear tu equipo
              </h4>
              <div className="space-y-6">
                {STEPS.map((step, index) => (
                  <div key={step.number} className="flex gap-4">
                    {/* Step Number Circle */}
                    <div className="flex-shrink-0">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-full text-white text-lg font-bold ${
                        step.number === 1 ? 'bg-red-600' : 'bg-primary-600'
                      }`}>
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Step Content */}
                    <div className="flex-1 pt-1">
                      <h5 className="font-semibold text-gray-900 mb-1">
                        {step.title}
                      </h5>
                      <p className="text-sm text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Terms Link */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                Al usar la app, aceptas nuestros{' '}
                <a
                  href={STORE_LINKS.terms}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 underline font-semibold"
                >
                  términos y condiciones
                </a>
              </p>
            </div>

            {/* Close Button */}
            <div className="mt-6">
              <button
                onClick={onClose}
                className="w-full btn-primary py-3"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

