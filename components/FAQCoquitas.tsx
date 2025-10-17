'use client';

import { useState } from 'react';
import { CONTENT } from '@/lib/constants';

export default function FAQCoquitas() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-center mb-16 text-balance">
            {CONTENT.faq.title}
          </h2>
          
          {/* FAQ Items */}
          <div className="space-y-4">
            {CONTENT.faq.items.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4 select-text">
                      {item.question}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                
                {/* Answer */}
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed select-text">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <div className="bg-primary-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 select-text">
                ¿Tienes más preguntas?
              </h3>
              <p className="text-gray-600 mb-6 select-text">
                Nuestro equipo está aquí para ayudarte con cualquier duda que tengas.
              </p>
              <button
                onClick={() => {
                  const message = encodeURIComponent('Quiero que me asesoren sobre los socios coquita');
                  const whatsappUrl = `https://wa.me/5493512392367?text=${message}`;
                  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                }}
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Hablar con un asesor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

