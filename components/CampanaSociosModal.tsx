'use client';

import { useEffect } from 'react';

interface CampanaSociosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CampanaSociosModal({ isOpen, onClose }: CampanaSociosModalProps) {
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
                  Comenzar campaña de socios
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Cómo funciona la campaña de socios para tu equipo
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
                  La <strong className="text-primary-700">campaña de socios</strong> comienza cuando los jugadores del equipo se hacen socios. El <strong className="text-primary-700">70% de la cuota</strong> se recauda para el equipo.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white font-bold text-lg">
                      1
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Los jugadores se hacen socios primero
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      El primer paso es que los mismos jugadores del equipo se hagan socios. Esto es fundamental para comenzar la campaña y demostrar el compromiso del equipo.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg">
                      2
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      70% de la cuota para el equipo
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      El <strong className="text-primary-700">70% de cada cuota</strong> se recauda directamente para el equipo, proporcionando un financiamiento estable y predecible.
                    </p>
                  </div>
                </div>

                {/* Step 3 - Nivel 11 socios */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg">
                      3
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Al llegar a 11 socios: ¡Sube de nivel!
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Cuando tu equipo alcanza los <strong className="text-primary-700">11 socios</strong>, se desbloquean beneficios exclusivos:
                    </p>
                    <ul className="space-y-2 text-gray-700 ml-4">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>Preparador físico virtual</strong> para mejorar el rendimiento del equipo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>Beneficios de sponsors</strong> como yerba mate tribunera y otros productos exclusivos</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg">
                      4
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Participan de premios como todos los socios
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Los jugadores que se hacen socios participan de todos los sorteos y premios igual que cualquier otro socio, además de apoyar directamente a su equipo.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg">
                      5
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Sumá familiares y amigos
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Lo más importante es <strong className="text-primary-700">sumar a familiares y amigos como socios</strong>. Su pequeño aporte tiene un <strong className="text-primary-700">gran impacto</strong> en el financiamiento del equipo.
                    </p>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg">
                      6
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Links de invitación
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Se generan <strong className="text-primary-700">links de invitación personalizados</strong> para sumarse con toda la información del equipo. Compartí estos links con tu red para que se unan fácilmente.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    ¡Cada socio cuenta!
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Cada persona que se suma como socio, por pequeño que sea su aporte, contribuye significativamente al crecimiento y desarrollo de tu equipo.
                  </p>
                </div>
              </div>
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

