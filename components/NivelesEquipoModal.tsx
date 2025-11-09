'use client';

import { useEffect } from 'react';

interface NivelesEquipoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NivelesEquipoModal({ isOpen, onClose }: NivelesEquipoModalProps) {
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
                  Niveles de Profesionalismo
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Desbloqueá beneficios exclusivos con más socios
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
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
              <p className="text-gray-800 leading-relaxed text-lg">
                A medida que tu equipo suma más socios, desbloqueás <strong className="text-blue-700">niveles de profesionalismo</strong> con beneficios exclusivos que te ayudan a crecer y mejorar.
              </p>
            </div>

            {/* Nivel 2 - Desbloqueado */}
            <div className="mb-6">
              <div className="bg-blue-600 text-white rounded-lg p-4 mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                  <h4 className="text-xl font-bold">
                    Nivel 2: 11 Socios
                  </h4>
                </div>
                <p className="text-blue-100 text-sm">
                  Primer nivel desbloqueable
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white border-2 border-blue-600 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Preparador Físico Virtual
                  </h5>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Activás el preparador físico virtual para mejorar el rendimiento de <strong>todo el plantel</strong>. Planes de entrenamiento personalizados, seguimiento de condición física y recomendaciones profesionales para optimizar el rendimiento de cada jugador.
                  </p>
                </div>

                <div className="bg-white border-2 border-blue-600 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Convenio Exclusivo Yerba Mate Tribunera
                  </h5>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Acceso a <strong>Yerba Mate Tribunera</strong>, blend uruguayo definido por futbolista, para la comunidad del fútbol. Adquirila a <strong>costo mayorista</strong> y distribuila a quienes te apoyan, generando ingresos adicionales mientras fortaleces la conexión con tu comunidad.
                  </p>
                </div>
              </div>
            </div>

            {/* Próximos Niveles */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Próximos Niveles
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Estamos trabajando en nuevos niveles con beneficios increíbles. A medida que tu equipo crezca, más herramientas y recursos profesionales estarán disponibles para ayudarte a alcanzar tus objetivos.
              </p>
            </div>

            {/* Info adicional */}
            <div className="bg-blue-50 rounded-xl p-4 mb-6">
              <p className="text-sm text-gray-700">
                <strong>¿Cómo desbloqueo el Nivel 2?</strong> Necesitás tener al menos <strong>11 socios activos</strong> (incluyendo los jugadores que son socios). Una vez alcanzado este número, los beneficios se activan automáticamente.
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

