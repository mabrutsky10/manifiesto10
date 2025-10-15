import { useState, useCallback, useEffect } from 'react';
import { 
  CALCULATOR_DEFAULTS, 
  CALCULATOR_PERCENTAGES, 
  GA4_EVENTS 
} from '@/lib/constants';
import { 
  calculateResults, 
  validateCalculatorInputs, 
  trackEvent, 
  debounce 
} from '@/lib/utils';

export function useCalculator() {
  const [indiceCoquita, setIndiceCoquita] = useState(CALCULATOR_DEFAULTS.indiceCoquita);
  const [jugadores, setJugadores] = useState(CALCULATOR_DEFAULTS.jugadores);
  const [sociosPorJugador, setSociosPorJugador] = useState(CALCULATOR_DEFAULTS.sociosPorJugador);
  const [validation, setValidation] = useState({ isValid: true, errors: [] });

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

  // Debounced validation and tracking
  const debouncedValidate = useCallback(
    debounce(() => {
      validateInputs();
      trackCalculatorChange();
    }, 300),
    [validateInputs, trackCalculatorChange]
  );

  // Effect for validation and tracking
  useEffect(() => {
    debouncedValidate();
  }, [debouncedValidate]);

  // Update functions
  const updateIndiceCoquita = useCallback((value: number) => {
    setIndiceCoquita(value);
  }, []);

  const updateJugadores = useCallback((value: number) => {
    setJugadores(value);
  }, []);

  const updateSociosPorJugador = useCallback((value: number) => {
    setSociosPorJugador(value);
  }, []);

  return {
    // State
    indiceCoquita,
    jugadores,
    sociosPorJugador,
    validation,
    results,
    
    // Actions
    updateIndiceCoquita,
    updateJugadores,
    updateSociosPorJugador,
  };
}
