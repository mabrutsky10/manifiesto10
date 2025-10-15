'use client';

import { CONTENT } from '@/lib/constants';

export default function BenefitsTeam() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-center mb-16 text-balance">
            {CONTENT.benefits.team.title}
          </h2>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONTENT.benefits.team.items.map((benefit, index) => (
              <div
                key={index}
                className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl mb-4 group-hover:bg-primary-200 transition-colors duration-200">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 select-text">
                  {benefit}
                </h3>
                
                {/* Decorative element */}
                <div className="w-12 h-1 bg-primary-600 rounded-full mt-4" />
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-primary-600 text-white px-6 py-3 rounded-full">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Todo incluido sin costo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

