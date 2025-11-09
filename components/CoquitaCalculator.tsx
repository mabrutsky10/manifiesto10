'use client';

import { useState, useEffect, useCallback } from 'react';
import { 
  CONTENT, 
  CALCULATOR_DEFAULTS, 
  CALCULATOR_PERCENTAGES, 
  GA4_EVENTS, 
  LEAD_MODAL_TYPES 
} from '@/lib/constants';
import { 
  calculateResults, 
  validateCalculatorInputs, 
  formatCurrency, 
  formatNumber, 
  trackEvent, 
  debounce 
} from '@/lib/utils';

export default function CoquitaCalculator() {
  const [indiceCoquita, setIndiceCoquita] = useState<number>(CALCULATOR_DEFAULTS.indiceCoquita);
  const [jugadores, setJugadores] = useState<number>(CALCULATOR_DEFAULTS.jugadores);
  const [sociosPorJugador, setSociosPorJugador] = useState<number>(CALCULATOR_DEFAULTS.sociosPorJugador);
  const [validation, setValidation] = useState<{ isValid: boolean; errors: string[] }>({ isValid: true, errors: [] });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  // Calculate results
  const results = calculateResults(
    indiceCoquita,
    jugadores,
    sociosPorJugador,
    CALCULATOR_PERCENTAGES.cashout,
    CALCULATOR_PERCENTAGES.creditoVestuario
  );

  // Validate inputs
  const validateInputs = useCallback(() => {
    const validationResult = validateCalculatorInputs(
      indiceCoquita,
      jugadores,
      sociosPorJugador,
      CALCULATOR_DEFAULTS.minJugadores,
      CALCULATOR_DEFAULTS.maxJugadores,
      CALCULATOR_DEFAULTS.minSocios,
      CALCULATOR_DEFAULTS.maxSocios
    );
    setValidation(validationResult);
  }, [indiceCoquita, jugadores, sociosPorJugador]);

  // Debounced validation
  const debouncedValidate = useCallback(
    debounce(validateInputs, 300),
    [validateInputs]
  );

  // Track calculator changes
  const trackCalculatorChange = useCallback(() => {
    trackEvent(GA4_EVENTS.CALCULATOR_CHANGE, {
      indiceCoquita: Math.round(indiceCoquita),
      jugadores: Math.round(jugadores),
      sociosPorJugador: Math.round(sociosPorJugador),
      sociosTotales: Math.round(results.sociosTotales),
      totalMensual: Math.round(results.totalMensual),
      cashout: Math.round(results.cashout),
      creditoVestuario: Math.round(results.creditoVestuario),
    });
  }, [indiceCoquita, jugadores, sociosPorJugador, results]);

  // Effect for validation and tracking
  useEffect(() => {
    debouncedValidate();
    trackCalculatorChange();
  }, [debouncedValidate, trackCalculatorChange]);

  // Handle input changes
  const handleIndiceChange = (value: string) => {
    const numValue = parseFloat(value) || 0;
    setIndiceCoquita(numValue);
  };

  const handleJugadoresChange = (value: number) => {
    setJugadores(value);
  };

  const handleSociosChange = (value: number) => {
    setSociosPorJugador(value);
  };

  // Handle CTA clicks
  const handleConsultClick = () => {
    setModalType(LEAD_MODAL_TYPES.CONSULTATION);
    setIsModalOpen(true);
    trackEvent(GA4_EVENTS.START_LEAD, { 
      origen: 'calculadora', 
      tipo: 'consulta',
      calculadora: {
        indiceCoquita: Math.round(indiceCoquita),
        jugadores: Math.round(jugadores),
        sociosPorJugador: Math.round(sociosPorJugador),
        totalMensual: Math.round(results.totalMensual),
      }
    });
  };

  return (
    <section id="calculator" className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-center mb-16 text-balance">
            {CONTENT.calculator.title}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="space-y-6">
              {/* Índice Coquita */}
              <div>
                <label htmlFor="indice-coquita" className="block text-sm font-semibold text-gray-700 mb-2">
                  {CONTENT.calculator.inputs.indiceCoquita.label}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    id="indice-coquita"
                    type="number"
                    min="0"
                    step="100"
                    value={indiceCoquita || ''}
                    onChange={(e) => handleIndiceChange(e.target.value)}
                    placeholder={CONTENT.calculator.inputs.indiceCoquita.placeholder}
                    className={`input-field pl-8 ${!validation.isValid && indiceCoquita <= 0 ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}`}
                    aria-describedby="indice-helper"
                  />
                </div>
                <p id="indice-helper" className="mt-1 text-sm text-gray-600">
                  {CONTENT.calculator.inputs.indiceCoquita.helper}
                </p>
              </div>

              {/* Jugadores */}
              <div>
                <label htmlFor="jugadores" className="block text-sm font-semibold text-gray-700 mb-2">
                  {CONTENT.calculator.inputs.jugadores.label}
                </label>
                <input
                  id="jugadores"
                  type="range"
                  min={CALCULATOR_DEFAULTS.minJugadores}
                  max={CALCULATOR_DEFAULTS.maxJugadores}
                  value={jugadores}
                  onChange={(e) => handleJugadoresChange(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  aria-describedby="jugadores-helper"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>{CALCULATOR_DEFAULTS.minJugadores}</span>
                  <span className="font-semibold text-primary-600">{jugadores}</span>
                  <span>{CALCULATOR_DEFAULTS.maxJugadores}</span>
                </div>
                <p id="jugadores-helper" className="mt-1 text-sm text-gray-600">
                  {CONTENT.calculator.inputs.jugadores.helper}
                </p>
              </div>

              {/* Socios por jugador */}
              <div>
                <label htmlFor="socios" className="block text-sm font-semibold text-gray-700 mb-2">
                  {CONTENT.calculator.inputs.sociosPorJugador.label}
                </label>
                <input
                  id="socios"
                  type="range"
                  min={CALCULATOR_DEFAULTS.minSocios}
                  max={CALCULATOR_DEFAULTS.maxSocios}
                  value={sociosPorJugador}
                  onChange={(e) => handleSociosChange(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  aria-describedby="socios-helper"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>{CALCULATOR_DEFAULTS.minSocios}</span>
                  <span className="font-semibold text-primary-600">{sociosPorJugador}</span>
                  <span>{CALCULATOR_DEFAULTS.maxSocios}</span>
                </div>
                <p id="socios-helper" className="mt-1 text-sm text-gray-600">
                  {CONTENT.calculator.inputs.sociosPorJugador.helper}
                </p>
              </div>

              {/* Validation errors */}
              {!validation.isValid && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex">
                    <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">Corrige los siguientes errores:</h3>
                      <ul className="mt-2 text-sm text-red-700 list-disc list-inside">
                        {validation.errors.map((error, index) => (
                          <li key={index}>{error}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Results */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Resultados</h3>
              
              {/* Results Cards */}
              <div className="space-y-4">
                {/* Socios totales - Primera fila */}
                <div className="card text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {formatNumber(results.sociosTotales)}
                  </div>
                  <div className="text-sm text-gray-600">
                    {CONTENT.calculator.results.sociosTotales}
                  </div>
                </div>
                
                {/* Montos - Segunda fila */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="card text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      {formatCurrency(results.cashout)}
                    </div>
                    <div className="text-sm text-gray-600">
                      {CONTENT.calculator.results.cashout}
                    </div>
                  </div>
                  
                  <div className="card text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-2">
                      {formatCurrency(results.creditoVestuario)}
                    </div>
                    <div className="text-sm text-gray-600">
                      {CONTENT.calculator.results.creditoVestuario}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4 pt-6">
                <button
                  onClick={handleConsultClick}
                  className="btn-primary w-full text-lg py-4 inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Hablar con un asesor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal state management */}
      {isModalOpen && (
        <div id="lead-modal-root" data-modal-type={modalType} />
      )}
    </section>
  );
}

