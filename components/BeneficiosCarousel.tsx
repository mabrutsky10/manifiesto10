'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { CAROUSEL_SLIDES, GA4_EVENTS } from '@/lib/constants';
import { trackEvent } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Users, Globe, Newspaper, DollarSign, TrendingUp } from 'lucide-react';
import NivelesEquipoModal from './NivelesEquipoModal';
import CalculadoraModal from './CalculadoraModal';

export default function BeneficiosCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    duration: 20,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isNivelesModalOpen, setIsNivelesModalOpen] = useState(false);
  const [isCalculadoraModalOpen, setIsCalculadoraModalOpen] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const handleCTAClick = (action: string) => {
    trackEvent(GA4_EVENTS.START_LEAD, { origen: 'carousel', tipo: action });
    
    switch (action) {
      case 'viewProfile':
        window.open('https://radar.mas10.ar/', '_blank', 'noopener,noreferrer');
        break;
      case 'viewWeb':
        window.open('https://radar.mas10.ar/profile/team/notthinghammiedo1/', '_blank', 'noopener,noreferrer');
        break;
      case 'viewCoverage':
        window.open('https://golpopular.com/', '_blank', 'noopener,noreferrer');
        break;
      case 'calculate':
        setIsCalculadoraModalOpen(true);
        break;
      case 'viewLevels':
        setIsNivelesModalOpen(true);
        break;
      default:
        break;
    }
  };

  const getSlideIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Users className="w-8 h-8" />;
      case 2:
        return <Globe className="w-8 h-8" />;
      case 3:
        return <Newspaper className="w-8 h-8" />;
      case 4:
        return <DollarSign className="w-8 h-8" />;
      case 5:
        return <TrendingUp className="w-8 h-8" />;
      default:
        return null;
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-primary-50">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Beneficios que transforman tu equipo
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto text-balance">
              Compará cómo tu equipo amateur se convierte en profesional con +10
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {CAROUSEL_SLIDES.map((slide) => (
                  <div
                    key={slide.id}
                    className="flex-[0_0_100%] min-w-0 px-4"
                  >
                    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-12 min-h-[500px] md:min-h-[600px] flex flex-col">
                      {/* Slide Header */}
                      <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                          {getSlideIcon(slide.id)}
                        </div>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                          {slide.title}
                        </h3>
                        <p className="text-lg md:text-xl text-primary-600 font-semibold mb-4">
                          {slide.subtitle}
                        </p>
                        <p className="text-gray-700 max-w-3xl mx-auto">
                          {slide.description}
                        </p>
                      </div>

                      {/* Slide Content */}
                      <div className="flex-1">
                        {slide.id === 5 ? (
                          // Slide 5: Niveles de profesionalismo
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {slide.levels?.map((level, index) => (
                              <div
                                key={index}
                                className={`${level.color} rounded-xl p-6 text-white transform transition-all duration-300 hover:scale-105`}
                              >
                                <div className="text-center">
                                  <h4 className="text-xl font-bold mb-2">{level.name}</h4>
                                  <p className="text-sm opacity-90 mb-4">{level.range}</p>
                                  <ul className="space-y-2 text-sm">
                                    {level.benefits.map((benefit, i) => (
                                      <li key={i} className="flex items-start gap-2">
                                        <span className="text-white">✓</span>
                                        <span>{benefit}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : slide.id === 4 ? (
                          // Slide 4: Plan de Socios
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* SIN SOCIOS */}
                            <div className={`${slide.amateurSide.bgColor} rounded-xl p-8 flex flex-col items-center justify-center min-h-[300px]`}>
                              <div className="text-center">
                                <span className="inline-block px-4 py-2 bg-gray-400 text-white rounded-full text-sm font-semibold mb-4">
                                  {slide.amateurSide.label}
                                </span>
                                <div className="text-6xl font-bold text-gray-600 mb-4">
                                  {slide.amateurSide.value}
                                </div>
                                <p className="text-gray-700 font-medium">
                                  {slide.amateurSide.text}
                                </p>
                              </div>
                            </div>

                            {/* CON SOCIOS */}
                            <div className={`${slide.professionalSide.bgColor} rounded-xl p-8 flex flex-col items-center justify-center min-h-[300px]`}>
                              <div className="text-center">
                                <span className="inline-block px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold mb-4">
                                  {slide.professionalSide.label}
                                </span>
                                <div className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
                                  {slide.professionalSide.value}
                                </div>
                                <p className="text-sm text-gray-700 mb-4 font-medium">
                                  {slide.professionalSide.breakdown}
                                </p>
                                <div className="flex flex-col gap-2">
                                  {slide.professionalSide.options?.map((option, i) => (
                                    <span key={i} className="text-sm bg-white px-3 py-1 rounded-full text-green-800 font-semibold">
                                      {option}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          // Slides 1-3: Comparación amateur vs profesional
                          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Lado Amateur */}
                            <div className={`${slide.amateurSide.bgColor} rounded-xl p-6 md:p-8 flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden`}>
                              <div className="absolute top-4 left-4">
                                <span className="inline-block px-4 py-2 bg-gray-600 text-white rounded-full text-xs font-bold uppercase">
                                  {slide.amateurSide.label}
                                </span>
                              </div>
                              {slide.amateurSide.image ? (
                                <div className="w-full h-48 flex items-center justify-center mb-4">
                                  <img
                                    src={slide.amateurSide.image}
                                    alt={slide.amateurSide.text}
                                    className="max-w-full max-h-full object-contain"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement;
                                      target.style.display = 'none';
                                    }}
                                  />
                                </div>
                              ) : (
                                <div className="w-full h-48 flex items-center justify-center mb-4">
                                  <div className="text-6xl text-gray-400">📄</div>
                                </div>
                              )}
                              <p className="text-center text-gray-700 font-semibold">
                                {slide.amateurSide.text}
                              </p>
                            </div>

                            {/* Línea divisoria */}
                            <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-primary-600">
                                <span className="text-primary-600 font-bold text-xl">VS</span>
                              </div>
                            </div>

                            {/* Lado Profesional */}
                            <div className={`${slide.professionalSide.bgColor} rounded-xl p-6 md:p-8 flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden`}>
                              <div className="absolute top-4 right-4">
                                <span className="inline-block px-4 py-2 bg-primary-600 text-white rounded-full text-xs font-bold uppercase">
                                  {slide.professionalSide.label}
                                </span>
                              </div>
                              {slide.professionalSide.image ? (
                                <div className="w-full h-48 flex items-center justify-center mb-4">
                                  <img
                                    src={slide.professionalSide.image}
                                    alt={slide.professionalSide.text}
                                    className="max-w-full max-h-full object-contain"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement;
                                      target.style.display = 'none';
                                    }}
                                  />
                                </div>
                              ) : (
                                <div className="w-full h-48 flex items-center justify-center mb-4">
                                  <div className="text-6xl text-primary-400">⭐</div>
                                </div>
                              )}
                              <p className="text-center text-gray-700 font-semibold">
                                {slide.professionalSide.text}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* CTA Button */}
                      <div className="mt-8 text-center">
                        <button
                          onClick={() => handleCTAClick(slide.cta.action)}
                          className="btn-primary px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                        >
                          {slide.cta.text}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Slide siguiente"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {CAROUSEL_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === selectedIndex
                    ? 'bg-primary-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      <NivelesEquipoModal
        isOpen={isNivelesModalOpen}
        onClose={() => setIsNivelesModalOpen(false)}
      />
      <CalculadoraModal
        isOpen={isCalculadoraModalOpen}
        onClose={() => setIsCalculadoraModalOpen(false)}
      />
    </section>
  );
}

