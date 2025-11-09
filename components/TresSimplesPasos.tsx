'use client';

import { useState } from 'react';
import CreateTeamModal from './CreateTeamModal';
import CampanaSociosModal from './CampanaSociosModal';
import CalculadoraModal from './CalculadoraModal';

const STEPS = [
  {
    number: 1,
    title: 'Tené tu web como la del Manchester City',
    description: 'La clave está en la foto, no importa que torneo jugués, posá como si fuese para la Champions',
    details: [
      'Creá tu equipo en +10',
      'Cargá todos los jugadores',
      'Cada uno pone su foto figura',
      'Ya tenés una página profesional',
    ],
    additionalInfo: 'A la página hay que darle vida, con estadísticas, resultados, cobertura de prensa... no te preocupes que Gol Popular, "el ESPN del fútbol amateur", te brindará toda la cobertura de prensa, y hasta te puede brindar un periodista virtual dedicado',
    cta: 'Armar web como la del City',
    ctaAction: 'createTeam',
  },
  {
    number: 2,
    title: 'Lanzá tu campaña de socios',
    subtitle: 'Conectá con amigos, familiares y seguidores',
    description: 'Que el monto no sea un impedimiento, desde lo que vale una coquita al mes, el apoyo en enorme, y los beneficios para los socios también',
    details: [
      'Cuota social desde una coquita',
      'Cada jugador se hace socio',
      'Invita familiares y amigos que también se asocian',
      'Grandes premios sin costo extra',
    ],
    additionalInfo: 'Los premios de los sorteos, prodes y beneficios los brinda +10 gracias a su extensa red de empresas que comparten nuestra pasión. Y si tenés algún sponsor, y querés brindarle mayor difusión para fortalecer el apoyo, podés sumar sus premios sólo para tus socios.',
    cta: 'Comenzar campaña de socios',
    ctaAction: 'campanaSocios',
  },
  {
    number: 3,
    title: 'Crecé, ganá y sé cada vez más como un club pro',
    description: 'El fútbol que se hace grande desde abajo, paso a paso, socio a socio',
    details: [
      'Recaudás todos los meses',
      'Conectás con tus seguidores',
      'Financiás tu pasión, y la de la comunidad futbolera',
      'Desbloqueás más niveles de profesionalismo con más socios',
    ],
    additionalInfo: 'Por ejemplo, con 11 socios desbloqueás el próximo nivel: preparador físico virtual para todo el equipo, convenio exclusivo de Yerba Mate Tribunera, y mucho más',
    cta: 'Calculadora Recaudadora',
    ctaAction: 'calculadora',
  },
];

export default function TresSimplesPasos() {
  const [isCreateTeamModalOpen, setIsCreateTeamModalOpen] = useState(false);
  const [isCampanaSociosModalOpen, setIsCampanaSociosModalOpen] = useState(false);
  const [isCalculadoraModalOpen, setIsCalculadoraModalOpen] = useState(false);

  const handleCTAClick = (action: string) => {
    switch (action) {
      case 'createTeam':
        setIsCreateTeamModalOpen(true);
        break;
      case 'campanaSocios':
        setIsCampanaSociosModalOpen(true);
        break;
      case 'calculadora':
        setIsCalculadoraModalOpen(true);
        break;
      default:
        break;
    }
  };

  return (
    <section id="tres-simples-pasos" className="section-padding bg-gradient-to-br from-gray-50 via-white to-primary-50">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              3 Simples Pasos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              Todo lo que necesitás para transformar tu equipo en un proyecto profesional
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {STEPS.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group ${
                  step.number === 1 ? 'bg-green-50' : step.number === 2 ? 'bg-blue-50' : 'bg-purple-50'
                }`}
              >
                {/* Step Number Badge - Centered */}
                <div className="h-32 flex items-center justify-center relative">
                  <div className={`flex items-center justify-center w-16 h-16 rounded-full text-white text-3xl font-bold shadow-lg ${
                    step.number === 1 ? 'bg-green-600' : step.number === 2 ? 'bg-blue-600' : 'bg-purple-600'
                  } group-hover:scale-110 transition-transform duration-200`}>
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 lg:p-8">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                    {step.title}
                  </h3>

                  {/* Subtitle if exists */}
                  {step.subtitle && (
                    <p className="text-primary-600 font-semibold mb-4">
                      {step.subtitle}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-3 mb-6">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Additional Info */}
                  {step.additionalInfo && (
                    <div className="bg-gray-50 border-l-4 border-primary-600 p-4 rounded-r-lg mb-6">
                      <p className="text-sm text-gray-700 leading-relaxed italic">
                        {step.additionalInfo}
                      </p>
                    </div>
                  )}

                  {/* Example Links - Only for step 1 */}
                  {step.number === 1 && (
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-gray-700 mb-3 text-center">
                        Ejemplos de webs profesionales:
                      </p>
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        {/* Manchester City */}
                        <a
                          href="https://www.mancity.com/players/mens"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-primary-600 hover:bg-primary-50 transition-all duration-200 group"
                          title="Ver web del Manchester City"
                        >
                          <div className="w-12 h-12 mb-2 flex items-center justify-center">
                            <img 
                              src="/img/mc.png" 
                              alt="Manchester City" 
                              className="w-full h-full object-cover rounded-full"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement!;
                                if (!parent.querySelector('.fallback')) {
                                  parent.innerHTML = '<div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center fallback"><span class="text-white font-bold text-xs">MC</span></div>';
                                }
                              }}
                            />
                          </div>
                          <span className="text-xs text-gray-700 group-hover:text-primary-600 font-medium text-center leading-tight">
                            Manchester City
                          </span>
                        </a>

                        {/* Notthingman Miedo */}
                        <a
                          href="https://radar.mas10.ar/profile/team/notthinghammiedo1/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-primary-600 hover:bg-primary-50 transition-all duration-200 group"
                          title="Ver web de Notthingman Miedo"
                        >
                          <div className="w-12 h-12 mb-2 flex items-center justify-center">
                            <img 
                              src="/img/nm.png" 
                              alt="Notthingman Miedo" 
                              className="w-full h-full object-cover rounded-full"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement!;
                                if (!parent.querySelector('.fallback')) {
                                  parent.innerHTML = '<div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center fallback"><span class="text-white font-bold text-xs">NM</span></div>';
                                }
                              }}
                            />
                          </div>
                          <span className="text-xs text-gray-700 group-hover:text-primary-600 font-medium text-center leading-tight">
                            Notthingman Miedo
                          </span>
                        </a>

                        {/* Junta Peligrosa */}
                        <a
                          href="https://radar.mas10.ar/profile/team/juntapeligrosa1/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-primary-600 hover:bg-primary-50 transition-all duration-200 group"
                          title="Ver web de Junta Peligrosa"
                        >
                          <div className="w-12 h-12 mb-2 flex items-center justify-center">
                            <img 
                              src="/img/jp.png" 
                              alt="Junta Peligrosa" 
                              className="w-full h-full object-cover rounded-full"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement!;
                                if (!parent.querySelector('.fallback')) {
                                  parent.innerHTML = '<div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center fallback"><span class="text-white font-bold text-xs">JP</span></div>';
                                }
                              }}
                            />
                          </div>
                          <span className="text-xs text-gray-700 group-hover:text-primary-600 font-medium text-center leading-tight">
                            Junta Peligrosa
                          </span>
                        </a>
                      </div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <button
                    onClick={() => handleCTAClick(step.ctaAction)}
                    className="w-full bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary-600 hover:text-white transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md"
                  >
                    {step.cta}
                  </button>
                </div>

                {/* Decorative Bottom Border */}
                <div className={`h-1 ${
                  step.number === 1 ? 'bg-green-600' : step.number === 2 ? 'bg-blue-600' : 'bg-purple-600'
                }`} />
              </div>
            ))}
          </div>

          {/* Bottom Decoration */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 text-primary-600 font-semibold">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Simple, rápido y efectivo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <CreateTeamModal 
        isOpen={isCreateTeamModalOpen} 
        onClose={() => setIsCreateTeamModalOpen(false)} 
      />

      <CampanaSociosModal 
        isOpen={isCampanaSociosModalOpen} 
        onClose={() => setIsCampanaSociosModalOpen(false)} 
      />

      <CalculadoraModal 
        isOpen={isCalculadoraModalOpen} 
        onClose={() => setIsCalculadoraModalOpen(false)} 
      />
    </section>
  );
}

