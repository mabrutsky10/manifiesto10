'use client';

import { useEffect } from 'react';

interface CalculadoraModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalculadoraModal({ isOpen, onClose }: CalculadoraModalProps) {
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

  const handleGoToCalculator = () => {
    onClose();
    // Small delay to ensure modal closes before scrolling
    setTimeout(() => {
      const calculatorElement = document.getElementById('calculator');
      if (calculatorElement) {
        calculatorElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

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
                  Calculadora Recaudadora
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Aprendé cómo calcular lo que podés recaudar
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
                  La <strong className="text-primary-700">Calculadora Recaudadora</strong> te permite estimar cuánto dinero podés recaudar mensualmente con tu programa de "Cuota Social Amateur".
                </p>
              </div>

              {/* How it works */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold">
                      1
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Índice Coquita
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Ingresá el valor mensual que aportará cada socio (equivalente al valor de una coquita). Por ejemplo: $3.200 por mes.
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
                      Cantidad de jugadores
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Definí cuántos jugadores tiene tu equipo (entre 8 y 30 jugadores).
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
                      Socios por jugador
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Establecé cuántos socios invitará cada jugador (cada jugador puede invitar hasta 50 socios).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold">
                      4
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Resultados automáticos
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      La calculadora te mostrará automáticamente: socios totales, total mensual recaudado, y las opciones de retiro (70% en efectivo o 90% en crédito para vestuario).
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
                ¿Por qué usar la calculadora?
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Planificá tu financiamiento con anticipación</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Visualizá diferentes escenarios según la cantidad de socios</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Compará las opciones de retiro (efectivo vs crédito)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Tomá decisiones informadas para tu equipo</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <button
                onClick={handleGoToCalculator}
                className="w-full btn-primary py-3"
              >
                Ir a la Calculadora Recaudadora
              </button>
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

