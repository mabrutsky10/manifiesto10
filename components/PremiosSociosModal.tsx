'use client';

import { useEffect } from 'react';

interface PremiosSociosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CRONOGRAMA_PREMIOS = [
  {
    mes: 'Diciembre 2025',
    premio: 'Camiseta de la Selección Nacional Argentina',
    destacado: true,
  },
  {
    mes: 'Enero 2026',
    premio: 'Camiseta del Inter Miami',
    destacado: true,
  },
  {
    mes: 'Febrero 2026',
    premio: 'Próximamente',
    destacado: false,
  },
  {
    mes: 'Marzo 2026',
    premio: 'Próximamente',
    destacado: false,
  },
];

export default function PremiosSociosModal({ isOpen, onClose }: PremiosSociosModalProps) {
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
                  Cronograma de Premios
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Sorteos mensuales exclusivos para socios
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
            {/* Intro */}
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
              <p className="text-gray-800 leading-relaxed text-lg">
                Cada mes realizamos sorteos increíbles exclusivos para socios. <strong className="text-green-700">Cada mes acumulás más chances de ganar</strong> premios fabulosos.
              </p>
            </div>

            {/* Cronograma */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Próximos sorteos:
              </h4>
              {CRONOGRAMA_PREMIOS.map((item, index) => (
                <div
                  key={index}
                  className={`border-2 rounded-lg p-4 ${
                    item.destacado
                      ? 'border-green-600 bg-green-50'
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className={`font-semibold mb-1 ${
                        item.destacado ? 'text-green-700' : 'text-gray-600'
                      }`}>
                        {item.mes}
                      </p>
                      <p className={`text-base ${
                        item.destacado ? 'text-gray-800 font-semibold' : 'text-gray-600 italic'
                      }`}>
                        {item.premio}
                      </p>
                    </div>
                    {item.destacado && (
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Info adicional */}
            <div className="mt-6 bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-700">
                <strong>¿Cómo participo?</strong> Al ser socio, automáticamente estás participando en todos los sorteos mensuales. Cuantos más meses seas socio, más chances acumulás.
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

