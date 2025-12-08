'use client';

import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import ImageComparison from '@/components/ImageComparison';
import PrensaComoUnPro from '@/components/PrensaComoUnPro';
import SociosComoUnPro from '@/components/SociosComoUnPro';

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="border-b border-gray-200 bg-white/95 backdrop-blur sticky top-0 z-50 shadow-sm">
        <div className="container-custom flex items-center justify-between py-3 md:py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 font-bold text-white text-sm">
                +10
              </div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-700">
                Manifiesto
              </span>
            </Link>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <Link href="/manifiesto" className="text-gray-600 hover:text-primary-600 transition-colors">
              Manifiesto
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/socios"
              className="hidden md:flex items-center gap-1 text-xs text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Socios Coquitas
            </Link>
            <a
              href="#cta-final"
              className="hidden rounded-full border border-primary-600 bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 hover:bg-primary-100 transition-colors md:inline-block"
            >
              Sumate a +10
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Image Comparison */}
        <ImageComparison />

        {/* Prensa como un PRO */}
        <PrensaComoUnPro />

        {/* Socios como un PRO */}
        <SociosComoUnPro />

        {/* Cierre / CTA */}
        <section
          id="cta-final"
          className="bg-primary-600 py-12 md:py-16 border-t border-primary-700"
        >
          <div className="container-custom text-center">
            <h2 className="text-xl font-semibold text-white md:text-2xl lg:text-3xl">
              Sumarse al Manifiesto +10 es tomar partido por el fútbol popular
            </h2>
            <p className="mt-3 max-w-3xl mx-auto text-sm text-primary-50 md:text-base">
              Si sos jugador, equipo, liga, marca o simplemente alguien que ama
              este juego, este manifiesto también es tuyo. +10 nace del potrero
              y vuelve al potrero: identidad, conexión y comunidad al servicio
              del fútbol que jugamos todos.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/socios"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-600 hover:bg-gray-50 transition-colors"
              >
                Quiero que mi equipo tenga identidad en +10
              </Link>
              <Link
                href="/socios"
                className="inline-flex items-center justify-center text-xs font-semibold uppercase tracking-[0.16em] text-primary-100 hover:text-white transition-colors"
              >
                Ver Socios Coquitas
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4 py-4 text-[11px] text-gray-600">
          <span>© {currentYear} +10 · Fútbol que jugamos todos</span>
          <div className="flex items-center gap-4 text-center">
            <Link href="/manifiesto" className="hover:text-primary-600 transition-colors">
              Manifiesto
            </Link>
            <span>·</span>
            <span>Identidad · Conectarse y crecer · Sostenerse desde la comunidad</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
