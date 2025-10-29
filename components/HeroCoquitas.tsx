'use client';

import { CONTENT, GA4_EVENTS, LEAD_MODAL_TYPES } from '@/lib/constants';
import { trackEvent } from '@/lib/utils';
import { useEffect, useRef } from 'react';

export default function HeroCoquitas() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  const handleCTAClick = (type: string) => {
    // Trigger modal through global mechanism
    const modalRoot = document.getElementById('lead-modal-root');
    if (modalRoot) {
      modalRoot.setAttribute('data-modal-type', type);
    }
    trackEvent(GA4_EVENTS.START_LEAD, { origen: 'hero', tipo: type });
  };

  const handleHowItWorksClick = () => {
    // Scroll to how it works section
    const howItWorksElement = document.getElementById('how-it-works');
    if (howItWorksElement) {
      howItWorksElement.scrollIntoView({ behavior: 'smooth' });
    }
    trackEvent(GA4_EVENTS.START_LEAD, { origen: 'hero', tipo: 'how-it-works' });
  };

  const handleCalculatorClick = () => {
    // Scroll to calculator section
    const calculatorElement = document.getElementById('calculator');
    if (calculatorElement) {
      calculatorElement.scrollIntoView({ behavior: 'smooth' });
    }
    trackEvent(GA4_EVENTS.START_LEAD, { origen: 'hero', tipo: 'calculadora' });
  };

  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 section-padding overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-200/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary-200/20 to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content - Left Column */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Main Title */}
            <h1 className="text-balance mb-6 animate-fade-in">
              {CONTENT.hero.title}
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-700 mb-8 text-balance animate-slide-up">
              {CONTENT.hero.subtitle}
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8 animate-slide-up">
              <button
                onClick={handleHowItWorksClick}
                className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
                aria-label="Cómo funciona"
              >
                {CONTENT.hero.ctaPrimary}
              </button>
              
              <button
                onClick={handleCalculatorClick}
                className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto"
                aria-label="Calculadora Recaudadora"
              >
                {CONTENT.hero.ctaSecondary}
              </button>
            </div>
            
            {/* Note */}
            <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-3 text-yellow-800 animate-fade-in">
              <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">
                {CONTENT.hero.note}
              </span>
            </div>
          </div>

          {/* Video Content - Right Column */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm lg:max-w-md">
              <div className="hero-video-container">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="hero-video"
                  poster="/og-image.jpg"
                  preload="metadata"
                >
                  <source src="/video.mp4" type="video/mp4" />
                  Tu navegador no soporta videos HTML5.
                </video>
                {/* Video overlay for better visual appeal */}
                <div className="hero-video-overlay" />
              </div>
              
              {/* Video description */}
              <div className="mt-4 text-center lg:text-right">
                <p className="text-sm text-gray-600">
                  Descubrí cómo funciona &quot;Socios Coquitas&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

