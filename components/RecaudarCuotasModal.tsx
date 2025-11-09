'use client';

import { useEffect } from 'react';

interface RecaudarCuotasModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RecaudarCuotasModal({ isOpen, onClose }: RecaudarCuotasModalProps) {
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
                  Recaudar las cuotas mes a mes
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Cómo retirar el dinero de los aportes de tus socios
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
                  <strong className="text-primary-700">Todos los meses</strong> retirás el dinero de los aportes de <strong>todos los socios</strong>, incluyendo los jugadores que son socios.
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
                      Retiro mensual
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Al cierre de cada mes, recibís el total recaudado por las cuotas de todos los socios, incluyendo las de los jugadores que también se sumaron como socios.
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
                      Usa el dinero como necesites
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Así pagás la cuota para jugar torneo, o comprás indumentaria, o lo que necesites para jugar más y más apoyando la pasión.
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
                      Opciones de retiro
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      El delegado puede elegir entre: <strong>70% del total en efectivo</strong> (Mercado Pago), o <strong>90% en crédito</strong> para equipamiento de vestuariodelfutbol.com.
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
                Ventajas del sistema
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Financiamiento estable y predecible mes a mes</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Flexibilidad para usar el dinero según las necesidades del equipo</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Incluye los aportes de los jugadores que también son socios</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Proceso simple y transparente</span>
                </li>
              </ul>
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

