'use client';

import { useState } from 'react';
import { Shield, Users, TrendingUp } from 'lucide-react';
import CreateTeamModal from './CreateTeamModal';
import CampanaSociosModal from './CampanaSociosModal';
import CalculadoraModal from './CalculadoraModal';

const STEPS = [
  {
    number: 1,
    title: 'Creá tu equipo en +10',
    description: 'Registrá tu equipo, cargá los jugadores y cada uno pone su foto figura profesional',
    icon: Shield,
    color: 'green',
    cta: 'Crear equipo',
    ctaAction: 'createTeam',
  },
  {
    number: 2,
    title: 'Lanzá tu campaña de socios',
    description: 'Cada jugador se hace socio e invita a familiares y amigos. Desde lo que vale una coquita al mes',
    icon: Users,
    color: 'blue',
    cta: 'Comenzar campaña',
    ctaAction: 'campanaSocios',
  },
  {
    number: 3,
    title: 'Recaudá y crecé',
    description: 'Recaudás todos los meses y desbloqueás niveles de profesionalismo con más socios',
    icon: TrendingUp,
    color: 'purple',
    cta: 'Calcular recaudación',
    ctaAction: 'calculadora',
  },
];

export default function PasosSimplificados() {
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

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return {
          bg: 'bg-green-50',
          iconBg: 'bg-green-600',
          border: 'border-green-600',
          text: 'text-green-600',
          hover: 'hover:bg-green-600',
        };
      case 'blue':
        return {
          bg: 'bg-blue-50',
          iconBg: 'bg-blue-600',
          border: 'border-blue-600',
          text: 'text-blue-600',
          hover: 'hover:bg-blue-600',
        };
      case 'purple':
        return {
          bg: 'bg-purple-50',
          iconBg: 'bg-purple-600',
          border: 'border-purple-600',
          text: 'text-purple-600',
          hover: 'hover:bg-purple-600',
        };
      default:
        return {
          bg: 'bg-gray-50',
          iconBg: 'bg-gray-600',
          border: 'border-gray-600',
          text: 'text-gray-600',
          hover: 'hover:bg-gray-600',
        };
    }
  };

  return (
    <section id="pasos-simples" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              3 Pasos Simples
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              Todo lo que necesitás para transformar tu equipo en un proyecto profesional
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step) => {
              const colors = getColorClasses(step.color);
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col rounded-2xl shadow-lg border-2 ${colors.border} overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group ${colors.bg}`}
                >
                  {/* Step Number Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 ${colors.iconBg} rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8 flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className={`w-20 h-20 ${colors.iconBg} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-8 flex-1">
                      {step.description}
                    </p>

                    {/* CTA Button */}
                    <button
                      onClick={() => handleCTAClick(step.ctaAction)}
                      className={`w-full border-2 ${colors.border} ${colors.text} bg-white px-6 py-4 rounded-lg font-semibold text-lg ${colors.hover} hover:text-white transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md`}
                    >
                      {step.cta}
                    </button>
                  </div>

                  {/* Decorative Bottom Border */}
                  <div className={`h-2 ${colors.iconBg}`} />
                </div>
              );
            })}
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




