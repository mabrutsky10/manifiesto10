'use client';

import { CONTENT } from '@/lib/constants';

export default function HowItWorksTeam() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-center mb-16 text-balance">
            {CONTENT.howItWorks.title}
          </h2>
          
          {/* Steps */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-4">
            {CONTENT.howItWorks.steps.map((step, index) => (
              <div
                key={index}
                className="relative flex-1 flex flex-col items-center text-center"
              >
                {/* Step number */}
                <div className="flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full text-xl font-bold mb-4 group-hover:scale-110 transition-transform duration-200">
                  {index + 1}
                </div>
                
                {/* Step content */}
                <div className="flex-1 relative z-10">
                  <p className="text-gray-700 leading-relaxed text-sm select-text">
                    {step}
                  </p>
                </div>
                
                {/* Connector line (hidden on last item) */}
                {index < CONTENT.howItWorks.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-transparent transform translate-x-4 pointer-events-none z-0" />
                )}
              </div>
            ))}
          </div>
          
          {/* Bottom decoration */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 text-primary-600 font-semibold">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Proceso simple y transparente</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

