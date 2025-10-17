'use client';

import { CONTENT, CALCULATOR_PERCENTAGES } from '@/lib/constants';
import { calculateResults, formatCurrency, formatNumber } from '@/lib/utils';

export default function UseCasesGrid() {
  const useCases = CONTENT.useCases.examples.map(example => ({
    ...example,
    results: calculateResults(
      example.indice,
      example.jugadores,
      example.socios,
      CALCULATOR_PERCENTAGES.cashout,
      CALCULATOR_PERCENTAGES.creditoVestuario
    )
  }));

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-center mb-16 text-balance">
            {CONTENT.useCases.title}
          </h2>
          
          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {useCase.description}
                  </p>
                </div>
                
                {/* Parameters */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">
                      {useCase.jugadores}
                    </div>
                    <div className="text-xs text-gray-600">Jugadores</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {useCase.socios}
                    </div>
                    <div className="text-xs text-gray-600">Socios c/u</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {formatCurrency(useCase.indice)}
                    </div>
                    <div className="text-xs text-gray-600">Índice</div>
                  </div>
                </div>
                
                {/* Results */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Socios totales</span>
                    <span className="font-semibold text-gray-900">
                      {formatNumber(useCase.results.sociosTotales)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Total mensual</span>
                    <span className="font-semibold text-green-600">
                      {formatCurrency(useCase.results.totalMensual)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Efectivo (70%)</span>
                    <span className="font-semibold text-blue-600">
                      {formatCurrency(useCase.results.cashout)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600">Crédito vestuario (90%)</span>
                    <span className="font-semibold text-purple-600">
                      {formatCurrency(useCase.results.creditoVestuario)}
                    </span>
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="mt-6 w-full h-1 bg-gradient-to-r from-primary-200 to-primary-400 rounded-full" />
              </div>
            ))}
          </div>
          
          {/* Bottom note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">
                Estos son ejemplos. Personalizá tu programa según las necesidades de tu equipo.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

