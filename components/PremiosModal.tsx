'use client';

import { useEffect } from 'react';

interface PremiosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PremiosModal({ isOpen, onClose }: PremiosModalProps) {
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
                  Premios Vigentes para Socios
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Descubrí todos los premios y sorteos disponibles
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
            {/* Main Explanation */}
            <div className="mb-8">
              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg mb-6">
                <p className="text-gray-800 leading-relaxed text-lg">
                  Como socio, tenés acceso a <strong className="text-primary-700">muchísimos premios y sorteos</strong> que se actualizan constantemente.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold">
                      1
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Sorteo mensual
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      El <strong>último día del mes</strong> se realiza un sorteo con <strong>muchísimos premios importantes</strong> exclusivos para socios.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold">
                      2
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      PRODE mensual
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Se juega un <strong>PRODE mensual</strong> también por premios. Participá y ganá increíbles recompensas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold">
                      3
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Premios de patrocinadores
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Todo el tiempo</strong> se van incorporando juegos y premios de los <strong>patrocinadores del fútbol que jugamos todos</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                ¿Por qué ser socio?
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Acceso a sorteos mensuales con premios importantes</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Participación en PRODE mensual con grandes premios</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Premios constantes de patrocinadores del fútbol</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Apoyo directo a tu equipo favorito</span>
                </li>
              </ul>
            </div>

            {/* CTA Button - Disabled for now */}
            <div className="mt-6">
              <button
                disabled
                className="w-full btn-primary py-3 opacity-50 cursor-not-allowed"
                aria-label="Ver catálogo de premios actual (próximamente)"
              >
                Ver catálogo de premios actual
              </button>
              <p className="text-xs text-gray-500 text-center mt-2">
                Próximamente disponible
              </p>
            </div>

            {/* Close Button */}
            <div className="mt-4">
              <button
                onClick={onClose}
                className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

