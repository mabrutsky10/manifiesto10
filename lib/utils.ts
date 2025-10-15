import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Format currency for display
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// Format number with thousands separator
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('es-AR').format(num);
}

// GA4 Tracking functions
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
  
  // Also push to dataLayer for GTM
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...parameters,
    });
  }
}

// Calculator validation
export function validateCalculatorInputs(
  indiceCoquita: number,
  jugadores: number,
  sociosPorJugador: number,
  minJugadores: number = 8,
  maxJugadores: number = 30,
  minSocios: number = 0,
  maxSocios: number = 50
): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (indiceCoquita <= 0) {
    errors.push('El índice Coquita debe ser mayor a 0');
  }
  
  if (jugadores < minJugadores || jugadores > maxJugadores) {
    errors.push(`La cantidad de jugadores debe estar entre ${minJugadores} y ${maxJugadores}`);
  }
  
  if (sociosPorJugador < minSocios || sociosPorJugador > maxSocios) {
    errors.push(`Los socios por jugador deben estar entre ${minSocios} y ${maxSocios}`);
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
}

// Calculate calculator results
export function calculateResults(
  indiceCoquita: number,
  jugadores: number,
  sociosPorJugador: number,
  cashoutPercentage: number = 0.70,
  creditoPercentage: number = 0.90
) {
  const sociosTotales = jugadores * sociosPorJugador;
  const totalMensual = indiceCoquita * sociosTotales;
  const cashout = totalMensual * cashoutPercentage;
  const creditoVestuario = totalMensual * creditoPercentage;
  
  return {
    sociosTotales,
    totalMensual,
    cashout,
    creditoVestuario,
  };
}

// Debounce function for input changes
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Generate WhatsApp message
export function generateWhatsAppMessage(
  equipo: string,
  nombre: string,
  totalMensual: number,
  sociosTotales: number
): string {
  const message = `¡Hola! Soy ${nombre} del equipo ${equipo}. 

Estoy interesado en crear un programa Socios Coquitas para mi equipo. Según la calculadora:

• Socios totales: ${formatNumber(sociosTotales)}
• Total mensual estimado: ${formatCurrency(totalMensual)}

¿Podrías ayudarme con más información?`;

  return encodeURIComponent(message);
}

