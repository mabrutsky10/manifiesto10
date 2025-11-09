'use client';

import { useState } from 'react';
import PremiosSociosModal from './PremiosSociosModal';
import RecaudacionEquipoModal from './RecaudacionEquipoModal';
import NivelesEquipoModal from './NivelesEquipoModal';

const BENEFICIOS = [
  {
    title: 'Socios',
    subtitle: 'Quienes pagan la cuota social amateur',
    color: 'green',
    items: [
      {
        text: 'Sorteos mensuales con premios increíbles, como camisetas originales de la selección. Cada mes acumulás más chances de ganar.',
        destacado: true,
      },
      {
        text: 'Competencias con premios: prode, trivia y mucho más, con premios de las marcas que apoyan la pasión del fútbol que jugamos todos.',
        destacado: false,
      },
      {
        text: 'Noticias, notificaciones en el celular y todas las novedades de tu equipo. La conexión es total, como si fuese con un club profesional.',
        destacado: false,
      },
    ],
  },
  {
    title: 'Equipo',
    subtitle: 'Vos y todos los que conforman tu equipo',
    color: 'blue',
    items: [
      {
        text: 'Recaudá todos los meses el porcentaje de la cuota y financiá tus competencias, indumentaria y todo lo que necesites para jugar.',
        destacado: true,
      },
      {
        text: 'Desbloqueá niveles hasta equiparar un club profesional. El segundo nivel es cuando llegás a 11 socios: activás el preparador físico virtual para mejorar el rendimiento de todo el plantel.',
        destacado: false,
      },
      {
        text: 'Patrocinadores y marcas que acompañan tu pasión, por ejemplo Yerba Mate Tribunera, blend uruguayo definido por futbolista, para la comunidad del fútbol. Adquirila a costo mayorista y distribuila a quienes te apoyan.',
        destacado: false,
      },
    ],
  },
  {
    title: 'Comunidad',
    subtitle: 'Todos los jugadores, equipos y comunidad del fútbol no profesional',
    color: 'purple',
    items: [
      {
        text: 'Radar +10, el mapa del fútbol no profesional: mercado de pases, partidos amistosos, predios, torneos y más. Lo construimos entre todos.',
        destacado: true,
      },
      {
        text: 'Mientras más socios, más crecemos todos: funcionalidades y herramientas. ProTorneos, App +10 para conectar y gestionar tu equipo.',
        destacado: false,
      },
      {
        text: 'Gol Popular, el ESPN del fútbol amateur, brindando cobertura en cada rincón donde se juegue un partido de fútbol.',
        destacado: false,
      },
    ],
  },
];

const INTRO_TEXT = 'Juntos revalorizamos el fútbol amateur, profesionalizamos su pasión y construimos una red de equipos sostenibles, con identidad propia, visibilidad real y beneficios concretos para todos...';

export default function BeneficiosGolazos() {
  const [isPremiosSociosModalOpen, setIsPremiosSociosModalOpen] = useState(false);
  const [isRecaudacionEquipoModalOpen, setIsRecaudacionEquipoModalOpen] = useState(false);
  const [isNivelesEquipoModalOpen, setIsNivelesEquipoModalOpen] = useState(false);

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return {
          bg: 'bg-green-50',
          badge: 'bg-green-600',
          border: 'bg-green-600',
        };
      case 'blue':
        return {
          bg: 'bg-blue-50',
          badge: 'bg-blue-600',
          border: 'bg-blue-600',
        };
      case 'purple':
        return {
          bg: 'bg-purple-50',
          badge: 'bg-purple-600',
          border: 'bg-purple-600',
        };
      default:
        return {
          bg: 'bg-gray-50',
          badge: 'bg-gray-600',
          border: 'bg-gray-600',
        };
    }
  };

  return (
    <section id="beneficios-golazos" className="section-padding bg-gradient-to-br from-gray-50 via-white to-primary-50">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              3 Enormes Beneficios
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto text-balance leading-relaxed">
              {INTRO_TEXT}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {BENEFICIOS.map((beneficio, index) => {
              const colors = getColorClasses(beneficio.color);
              return (
                <div
                  key={index}
                  className={`relative flex flex-col rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group ${colors.bg}`}
                >
                  {/* Title Badge - Centered */}
                  <div className="h-24 flex flex-col items-center justify-center relative">
                    <div className={`flex items-center justify-center px-6 py-2 rounded-full text-white text-xl font-bold shadow-lg ${colors.badge} group-hover:scale-110 transition-transform duration-200 mb-2`}>
                      {beneficio.title}
                    </div>
                    {beneficio.subtitle && (
                      <p className="text-xs text-gray-600 text-center px-4">
                        {beneficio.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 lg:p-8">
                    {/* Benefits List */}
                    <ul className="space-y-4">
                      {beneficio.items.map((item, itemIndex) => (
                        <li key={itemIndex} className={`flex flex-col gap-3 ${item.destacado ? 'bg-white rounded-lg p-4 border-2 border-gray-200 shadow-sm' : ''}`}>
                          <div className="flex items-start gap-3">
                            <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${colors.badge.replace('bg-', 'text-')}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className={`text-gray-700 leading-relaxed ${item.destacado ? 'font-semibold text-base' : 'text-sm'}`}>
                              {item.text}
                            </span>
                          </div>
                          {item.destacado && (
                            <button
                              onClick={() => {
                                if (index === 0) {
                                  setIsPremiosSociosModalOpen(true);
                                } else if (index === 1) {
                                  setIsRecaudacionEquipoModalOpen(true);
                                } else if (index === 2) {
                                  window.open('https://radar.mas10.ar/', '_blank', 'noopener,noreferrer');
                                }
                              }}
                              className={`w-full ${colors.badge} text-white px-4 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity duration-200 mt-2`}
                            >
                              {index === 0 ? 'Ver cronograma de premios' : index === 1 ? 'Ver ejemplo de recaudación' : 'Ir al Radar +10'}
                            </button>
                          )}
                          {/* CTA para niveles (Equipo, item 2) */}
                          {index === 1 && itemIndex === 1 && (
                            <button
                              onClick={() => setIsNivelesEquipoModalOpen(true)}
                              className="w-full border-2 border-blue-600 text-blue-600 bg-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors duration-200 mt-2 text-center"
                            >
                              Ver niveles de profesionalismo
                            </button>
                          )}
                          {/* Ejemplos de beneficios destacados (Equipo, item 3) */}
                          {index === 1 && itemIndex === 2 && (
                            <div className="mt-4">
                              <p className="text-sm font-semibold text-gray-700 mb-3 text-center">
                                Marcas con beneficios destacados:
                              </p>
                              <div className="grid grid-cols-2 gap-3">
                                <a
                                  href="https://tribunera.com.ar/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all duration-200 group"
                                  title="Ver Yerba Mate Tribunera"
                                >
                                  <div className="w-12 h-12 mb-2 flex items-center justify-center">
                                    <img 
                                      src="/img/tribu.png" 
                                      alt="Yerba Mate Tribunera" 
                                      className="w-full h-full object-cover rounded-full"
                                      onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        const parent = target.parentElement!;
                                        if (!parent.querySelector('.fallback')) {
                                          parent.innerHTML = '<div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center fallback"><span class="text-white font-bold text-xs">TM</span></div>';
                                        }
                                      }}
                                    />
                                  </div>
                                  <span className="text-xs text-gray-700 group-hover:text-blue-600 font-medium text-center leading-tight">
                                    Yerba Mate Tribunera
                                  </span>
                                </a>
                                <a
                                  href="https://www.atfacampusvirtual.com/ES/index.html"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all duration-200 group"
                                  title="Ver CVA - Carrera de Entrenador de fútbol"
                                >
                                  <div className="w-12 h-12 mb-2 flex items-center justify-center">
                                    <img 
                                      src="/img/cva.png" 
                                      alt="CVA - Carrera de Entrenador de fútbol" 
                                      className="w-full h-full object-cover rounded-full"
                                      onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        const parent = target.parentElement!;
                                        if (!parent.querySelector('.fallback')) {
                                          parent.innerHTML = '<div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center fallback"><span class="text-white font-bold text-xs">CVA</span></div>';
                                        }
                                      }}
                                    />
                                  </div>
                                  <span className="text-xs text-gray-700 group-hover:text-blue-600 font-medium text-center leading-tight">
                                    CVA. Carrera de Entrenador de fútbol
                                  </span>
                                </a>
                              </div>
                            </div>
                          )}
                          {/* CTA secundario para competencias (Socios, item 2) */}
                          {index === 0 && itemIndex === 1 && (
                            <a
                              href="https://prode-comunitario.mas10.ar/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full border-2 border-green-600 text-green-600 bg-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-green-50 transition-colors duration-200 mt-2 text-center"
                            >
                              Ver próxima competencia
                            </a>
                          )}
                          {/* Ejemplos de cobertura de prensa (Socios, item 3) */}
                          {index === 0 && itemIndex === 2 && (
                            <div className="mt-4">
                              <p className="text-sm font-semibold text-gray-700 mb-3 text-center">
                                Ejemplos de cobertura de prensa:
                              </p>
                              <div className="grid grid-cols-2 gap-3">
                                <a
                                  href="https://golpopular.com/2025/08/05/entrevista-gol-popular-union-y-justicia-el-camino-al-campeonato-en-la-35-de-level/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-green-600 hover:bg-green-50 transition-all duration-200 group"
                                  title="Ver cobertura de Unión y Justicia en Gol Popular"
                                >
                                  <div className="w-12 h-12 mb-2 flex items-center justify-center">
                                    <img 
                                      src="/img/uj.png" 
                                      alt="Unión y Justicia" 
                                      className="w-full h-full object-cover rounded-full"
                                      onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        const parent = target.parentElement!;
                                        if (!parent.querySelector('.fallback')) {
                                          parent.innerHTML = '<div class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center fallback"><span class="text-white font-bold text-xs">UJ</span></div>';
                                        }
                                      }}
                                    />
                                  </div>
                                  <span className="text-xs text-gray-700 group-hover:text-green-600 font-medium text-center leading-tight">
                                    Unión y Justicia
                                  </span>
                                </a>
                                <a
                                  href="https://golpopular.com/2024/10/04/fecha-8-del-clausura-de-cruz-del-sur-flamengo-jr-y-santa-suerte-marcan-la-pelea-por-el-titulo-2/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-green-600 hover:bg-green-50 transition-all duration-200 group"
                                  title="Ver cobertura de Flamengo Jr en Gol Popular"
                                >
                                  <div className="w-12 h-12 mb-2 flex items-center justify-center">
                                    <img 
                                      src="/img/fr.png" 
                                      alt="Flamengo Jr" 
                                      className="w-full h-full object-cover rounded-full"
                                      onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        const parent = target.parentElement!;
                                        if (!parent.querySelector('.fallback')) {
                                          parent.innerHTML = '<div class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center fallback"><span class="text-white font-bold text-xs">FJ</span></div>';
                                        }
                                      }}
                                    />
                                  </div>
                                  <span className="text-xs text-gray-700 group-hover:text-green-600 font-medium text-center leading-tight">
                                    Flamengo Jr
                                  </span>
                                </a>
                              </div>
                            </div>
                          )}
                          {/* Crecer entre todos (Comunidad, item 3) */}
                          {index === 2 && itemIndex === 2 && (
                            <div className="mt-4">
                              <p className="text-sm font-semibold text-gray-700 mb-3 text-center">
                                Crecer entre todos:
                              </p>
                              <div className="flex flex-col gap-3">
                                <a
                                  href="https://protorneos.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-purple-600 hover:bg-purple-50 transition-all duration-200 group"
                                  title="Ver ProTorneos"
                                >
                                  <div className="h-12 flex-shrink-0 flex items-center justify-center">
                                    <img 
                                      src="/img/pt-logo.png" 
                                      alt="ProTorneos" 
                                      className="h-full w-auto object-contain"
                                      onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        const parent = target.parentElement!;
                                        if (!parent.querySelector('.fallback')) {
                                          parent.innerHTML = '<div class="h-12 bg-purple-600 rounded flex items-center justify-center px-3 fallback"><span class="text-white font-bold text-xs">PT</span></div>';
                                        }
                                      }}
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <span className="text-sm text-gray-700 group-hover:text-purple-600 font-semibold block leading-tight">
                                      ProTorneos
                                    </span>
                                    <span className="text-xs text-gray-600 leading-tight mt-1 block">
                                      Invitá a tu torneo u organizá tu propio torneo
                                    </span>
                                  </div>
                                </a>
                                <a
                                  href="https://mas10.ar/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-purple-600 hover:bg-purple-50 transition-all duration-200 group"
                                  title="Ver App +10"
                                >
                                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                                    <img 
                                      src="/img/m10-logo.png" 
                                      alt="+10 App" 
                                      className="w-full h-full object-cover rounded-full"
                                      onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        const parent = target.parentElement!;
                                        if (!parent.querySelector('.fallback')) {
                                          parent.innerHTML = '<div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center fallback"><span class="text-white font-bold text-xs">+10</span></div>';
                                        }
                                      }}
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <span className="text-sm text-gray-700 group-hover:text-purple-600 font-semibold block leading-tight">
                                      +10
                                    </span>
                                    <span className="text-xs text-gray-600 leading-tight mt-1 block">
                                      Tu app con todo el fútbol que jugamos todos
                                    </span>
                                  </div>
                                </a>
                              </div>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Decorative Bottom Border */}
                  <div className={`h-1 ${colors.border}`} />
                </div>
              );
            })}
          </div>

          {/* Bottom Decoration */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 text-primary-600 font-semibold">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Beneficios reales para todos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <PremiosSociosModal 
        isOpen={isPremiosSociosModalOpen} 
        onClose={() => setIsPremiosSociosModalOpen(false)} 
      />

      <RecaudacionEquipoModal 
        isOpen={isRecaudacionEquipoModalOpen} 
        onClose={() => setIsRecaudacionEquipoModalOpen(false)} 
      />

      <NivelesEquipoModal 
        isOpen={isNivelesEquipoModalOpen} 
        onClose={() => setIsNivelesEquipoModalOpen(false)} 
      />
    </section>
  );
}

