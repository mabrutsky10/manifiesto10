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
  const [indiceCoquita, setIndiceCoquita] = useState(CALCULATOR_DEFAULTS.indiceCoquita);
  const [jugadores, setJugadores] = useState(CALCULATOR_DEFAULTS.jugadores);
  const [sociosPorJugador, setSociosPorJugador] = useState(CALCULATOR_DEFAULTS.sociosPorJugador);
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
  const handleGenerateClick = () => {
    setModalType(LEAD_MODAL_TYPES.CREATE_PROGRAM);
    setIsModalOpen(true);
    trackEvent(GA4_EVENTS.START_LEAD, { 
      origen: 'calculadora', 
      tipo: 'generar_programa',
      calculadora: {
        indiceCoquita: Math.round(indiceCoquita),
        jugadores: Math.round(jugadores),
        sociosPorJugador: Math.round(sociosPorJugador),
        totalMensual: Math.round(results.totalMensual),
      }
    });
  };

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
                  onClick={handleGenerateClick}
                  disabled={!validation.isValid}
                  className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {CONTENT.calculator.buttons.generate}
                </button>
                
                <button
                  onClick={handleConsultClick}
                  className="btn-secondary w-full text-lg py-4"
                >
                  {CONTENT.calculator.buttons.consult}
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

