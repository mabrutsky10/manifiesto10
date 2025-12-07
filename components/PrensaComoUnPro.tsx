'use client';

import { motion } from 'framer-motion';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { Tv, Radio, ArrowRight } from 'lucide-react';

export default function PrensaComoUnPro() {
  return (
    <section className="border-b border-gray-200 bg-gradient-to-br from-primary-50 to-white section-padding">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-semibold text-gray-900 md:text-2xl lg:text-3xl">
            <span className="text-gradient">Prensa como un PRO</span>
          </h2>
          <p className="mt-3 max-w-3xl mx-auto text-sm text-gray-700 md:text-base">
            Ahora tu equipo puede tener la misma presencia mediática que un club profesional. Gol Popular te ofrece entrevistas, coberturas, paneles, noticias y agentes virtuales especializados — igual que las grandes cadenas deportivas.
          </p>
        </motion.div>

        {/* Image Comparison Slider */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Labels */}
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-gray-200">
                <div className="flex items-center space-x-2">
                  <Tv className="text-primary-600" size={20} />
                  <span className="font-semibold text-gray-900 text-sm">Profesional (ESPN)</span>
                </div>
              </div>
            </div>
            
            <div className="absolute top-4 right-4 z-10">
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Radio className="text-white" size={20} />
                  <span className="font-semibold text-white text-sm">Amateur (+10 / Gol Popular)</span>
                </div>
              </div>
            </div>

            {/* Comparison Slider */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 w-full" style={{ aspectRatio: '16/9' }}>
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src="/prensaespn.png"
                    alt="Prensa profesional ESPN"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src="/prensagolpopular.png"
                    alt="Prensa amateur Gol Popular"
                  />
                }
                style={{
                  width: '100%',
                  height: '100%',
                }}
                position={50}
              />
            </div>

            {/* Instructions */}
            <motion.div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-xl px-6 py-3 shadow-lg border border-gray-200">
                <div className="flex items-center space-x-2 text-gray-600">
                  <ArrowRight className="text-primary-600" size={16} />
                  <span className="text-sm font-medium">Deslizá para comparar</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Comparison Details */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Professional Features */}
          <div className="rounded-2xl border border-primary-200 bg-primary-50 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                <Tv className="text-primary-600" size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Prensa Profesional (Ejemplo ESPN)</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span>Entrevistas post-partido en estudios profesionales</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span>Cobertura en vivo</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span>Panelistas expertos</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span>Cámaras dedicadas, reporters y conductores</span>
              </li>
            </ul>
          </div>

          {/* Amateur Features */}
          <div className="rounded-2xl border-2 border-primary-300 bg-white p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
                <Radio className="text-white" size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Prensa Amateur (Gol Popular)</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span>Entrevistas automáticas con agentes virtuales periodistas</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span>Gol Popular TV con paneles, análisis y programas</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span>Portal de noticias con resultados y coberturas</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span>Identidad mediática para cada equipo amateur</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
