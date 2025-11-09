'use client';

import { useEffect, useState } from 'react';
import CalculadoraModal from './CalculadoraModal';

interface RecaudacionEquipoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RecaudacionEquipoModal({ isOpen, onClose }: RecaudacionEquipoModalProps) {
  const [isCalculadoraModalOpen, setIsCalculadoraModalOpen] = useState(false);

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

  const handleCalculadoraClick = () => {
    onClose();
    setTimeout(() => {
      setIsCalculadoraModalOpen(true);
    }, 100);
  };

  const handleScrollToCalculator = () => {
    onClose();
    setTimeout(() => {
      const calculatorElement = document.getElementById('calculator');
      if (calculatorElement) {
        calculatorElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!isOpen) return null;

  // Cálculo del ejemplo
  const jugadores = 15;
  const sociosPorJugador = 10;
  const cuotaMensual = 3500;
  const sociosTotales = jugadores + (jugadores * sociosPorJugador); // 15 jugadores (socios) + 150 socios = 165
  const recaudacionMensual = sociosTotales * cuotaMensual; // 165 * 3500 = 577,500

  return (
    <>
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
                    Ejemplo de Recaudación
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Cómo funciona la recaudación mensual
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
              {/* Ejemplo destacado */}
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                  <strong className="text-blue-700">Ejemplo práctico:</strong> Si tu equipo tiene <strong>15 jugadores</strong>, cada uno se hace socio y trae <strong>10 socios</strong> cada uno, con una cuota de <strong>$3.500 mensual</strong> (lo que vale una coquita).
                </p>
              </div>

              {/* Cálculo */}
              <div className="bg-white border-2 border-blue-600 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Cálculo mensual:
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Jugadores:</span>
                    <span className="font-semibold text-gray-900">{jugadores}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Socios por jugador:</span>
                    <span className="font-semibold text-gray-900">{sociosPorJugador}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Cuota mensual:</span>
                    <span className="font-semibold text-gray-900">${cuotaMensual.toLocaleString()}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Socios totales:</span>
                      <span className="font-bold text-blue-600">{sociosTotales}</span>
                    </div>
                  </div>
                  <div className="border-t-2 border-blue-600 pt-3 mt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">Recaudación mensual:</span>
                      <span className="text-2xl font-bold text-blue-600">${recaudacionMensual.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reinversión */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  ¿Qué podés hacer con esta recaudación?
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Reinvertir e incrementar distribuyendo <strong>Yerba Mate Tribunera</strong> a quienes te apoyan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Financiar competencias y torneos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Comprar indumentaria y equipamiento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mejorar instalaciones y recursos del equipo</span>
                  </li>
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <button
                  onClick={handleScrollToCalculator}
                  className="w-full btn-primary py-3 text-lg"
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

      <CalculadoraModal 
        isOpen={isCalculadoraModalOpen} 
        onClose={() => setIsCalculadoraModalOpen(false)} 
      />
    </>
  );
}

