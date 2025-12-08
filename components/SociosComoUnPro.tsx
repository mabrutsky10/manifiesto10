'use client';

import { motion } from 'framer-motion';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { CreditCard, Heart, ArrowRight } from 'lucide-react';

export default function SociosComoUnPro() {
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
            <span className="text-gradient">Socios como un PRO</span>
          </h2>
          <p className="mt-3 max-w-3xl mx-auto text-sm text-gray-700 md:text-base">
            Convertí a tus hinchas y amigos en socios del club, con beneficios reales y una identidad profesional. Socios Coquita te da el mismo modelo que usan los grandes clubes, pero adaptado al fútbol amateur.
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
                  <CreditCard className="text-primary-600" size={20} />
                  <span className="font-semibold text-gray-900 text-sm">Profesional (Club grande)</span>
                </div>
              </div>
            </div>
            
            <div className="absolute top-4 right-4 z-10">
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Heart className="text-white" size={20} />
                  <span className="font-semibold text-white text-sm">Amateur (+10 / Socios Coquita)</span>
                </div>
              </div>
            </div>

            {/* Comparison Slider */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 w-full" style={{ aspectRatio: '16/9' }}>
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src="/sociospro.png"
                    alt="Programa de socios profesional"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src="/socios10.png"
                    alt="Socios Coquita club amateur"
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
                <CreditCard className="text-primary-600" size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Programa de Socios Profesional</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span>Abonos anuales y cuotas mensuales</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span>Descuentos en merchandising oficial</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span>Prioridad para entradas y butacas</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span>Experiencias exclusivas para hinchas</span>
              </li>
            </ul>
          </div>

          {/* Amateur Features */}
          <div className="rounded-2xl border-2 border-primary-300 bg-white p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">Socios Coquita (+10)</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span>Cualquier hincha o familiar puede asociarse en segundos desde su celular</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span>Planes mensuales accesibles para apoyar al equipo amateur</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span>Beneficios concretos: sorteos, experiencias de cancha, contenido exclusivo</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span>Cada socio se convierte en parte del proyecto deportivo y comunitario del club</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
