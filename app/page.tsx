'use client';

import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import ImageComparison from '@/components/ImageComparison';

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
            <a href="#manifiesto" className="text-gray-600 hover:text-primary-600 transition-colors">
              Manifiesto
            </a>
            <a href="#dolores" className="text-gray-600 hover:text-primary-600 transition-colors">
              Dolores
            </a>
            <a href="#implementacion" className="text-gray-600 hover:text-primary-600 transition-colors">
              Implementación
            </a>
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
        {/* Hero */}
        <section className="border-b border-gray-200 bg-gradient-to-b from-primary-50 to-white">
          <div className="container-custom flex flex-col gap-10 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-1/2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
                Fútbol popular
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
                Manifiesto +10
              </h1>
              <p className="mt-4 max-w-md text-sm text-gray-700 md:text-base">
                Los tres derechos del fútbol que jugamos todos. Una declaración
                de identidad, conexión y sostenibilidad para los equipos y
                jugadores que escriben la historia desde el potrero.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#cta-final"
                  className="inline-flex items-center justify-center rounded-full bg-primary-600 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-primary-700 transition-colors"
                >
                  Quiero identidad para mi equipo
                </a>
                <a
                  href="#manifiesto"
                  className="inline-flex items-center justify-center text-xs font-semibold uppercase tracking-[0.16em] text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Conocer el manifiesto
                </a>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="rounded-2xl border border-primary-200 bg-primary-50 p-5 shadow-md">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-700">
                  El fútbol que jugamos todos merece su lugar
                </p>
                <p className="mt-3 text-sm text-gray-700">
                  En cada potrero, en cada barrio, se juega un fútbol que casi
                  nunca sale en la tele. El Manifiesto +10 nace para reconocer
                  a esos equipos, jugadores y comunidades, y darles un espacio
                  digno dentro del mapa del fútbol.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Manifiesto: tres derechos */}
        <section id="manifiesto" className="border-b border-gray-200 bg-white section-padding">
          <div className="container-custom">
            <h2 className="text-xl font-semibold text-gray-900 md:text-2xl lg:text-3xl">
              Los tres derechos del fútbol que jugamos todos
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-gray-700 md:text-base">
              El Manifiesto +10 resume el fútbol popular en tres derechos
              fundamentales. Son simples de entender y enormes de cumplir:
              identidad, conexión y sostenibilidad nacidas desde la comunidad.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {/* Derecho 1 */}
              <div className="rounded-2xl border border-primary-200 bg-primary-50 p-5 hover:bg-primary-100 hover:shadow-md transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-700">
                  Derecho 1
                </p>
                <h3 className="mt-2 text-sm font-semibold text-gray-900 md:text-base">
                  Derecho a tener identidad
                </h3>
                <p className="mt-2 text-xs text-gray-700 md:text-sm">
                  Cada equipo y cada jugador merecen tener su nombre, su escudo,
                  su historia y su lugar. El fútbol que se juega sin cámaras
                  también construye cultura y orgullo.
                </p>
              </div>

              {/* Derecho 2 */}
              <div className="rounded-2xl border border-primary-200 bg-primary-50 p-5 hover:bg-primary-100 hover:shadow-md transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-700">
                  Derecho 2
                </p>
                <h3 className="mt-2 text-sm font-semibold text-gray-900 md:text-base">
                  Derecho a conectarse y crecer
                </h3>
                <p className="mt-2 text-xs text-gray-700 md:text-sm">
                  Jugadores, equipos y comunidades tienen derecho a encontrarse,
                  competir, aprender y evolucionar. El fútbol es vínculo,
                  oportunidad y desarrollo.
                </p>
              </div>

              {/* Derecho 3 */}
              <div className="rounded-2xl border border-primary-200 bg-primary-50 p-5 hover:bg-primary-100 hover:shadow-md transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-700">
                  Derecho 3
                </p>
                <h3 className="mt-2 text-sm font-semibold text-gray-900 md:text-base">
                  Derecho a sostenerse desde la comunidad
                </h3>
                <p className="mt-2 text-xs text-gray-700 md:text-sm">
                  Los sueños del potrero también merecen apoyo real. La pasión
                  puede financiarse entre hinchas, familias y marcas cercanas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dolores */}
        <section id="dolores" className="border-b border-gray-200 bg-gray-50 section-padding">
          <div className="container-custom">
            <div className="inline-block bg-primary-100 px-4 py-2 rounded-lg mb-4">
              <h2 className="text-xl font-semibold text-gray-900 md:text-2xl lg:text-3xl">
                Los dolores del fútbol amateur
              </h2>
            </div>
            <p className="mt-3 max-w-2xl text-sm text-gray-700 md:text-base">
              Si estos derechos no se cumplen, es porque hay dolores profundos
              en el camino. +10 existe para escucharlos y construir soluciones.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {/* Identidad - dolores */}
              <div className="rounded-2xl border border-primary-200 bg-primary-50 p-5 hover:bg-primary-100 hover:shadow-md transition-all">
                <h3 className="text-sm font-semibold text-gray-900 md:text-base">
                  Identidad
                </h3>
                <ul className="mt-3 space-y-2 text-xs text-gray-700 md:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span>Equipos y jugadores sin presencia digital.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span>Historias que se pierden sin archivo ni estadísticas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span>Ligas que no comunican ni ordenan su información.</span>
                  </li>
                </ul>
              </div>

              {/* Conectarse y crecer - dolores */}
              <div className="rounded-2xl border border-primary-200 bg-primary-50 p-5 hover:bg-primary-100 hover:shadow-md transition-all">
                <h3 className="text-sm font-semibold text-gray-900 md:text-base">
                  Conectarse y crecer
                </h3>
                <ul className="mt-3 space-y-2 text-xs text-gray-700 md:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span>Jugadores sin equipo y equipos sin jugadores.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span>Pocas herramientas para gestionar ligas y entrenar.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span>Torneos y comunidades aisladas entre sí.</span>
                  </li>
                </ul>
              </div>

              {/* Sostenerse - dolores */}
              <div className="rounded-2xl border border-primary-200 bg-primary-50 p-5 hover:bg-primary-100 hover:shadow-md transition-all">
                <h3 className="text-sm font-semibold text-gray-900 md:text-base">
                  Sostenerse desde la comunidad
                </h3>
                <ul className="mt-3 space-y-2 text-xs text-gray-700 md:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span>Falta de recursos para gastos básicos del equipo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span>Hinchas que quieren ayudar pero no tienen cómo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span>Sponsors locales desconectados del barrio futbolero.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Implementación */}
        <section
          id="implementacion"
          className="border-b border-gray-200 bg-white section-padding"
        >
          <div className="container-custom">
            <h2 className="text-xl font-semibold text-gray-900 md:text-2xl lg:text-3xl">
              Implementación +10: MERECE - COMO
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-gray-700 md:text-base">
              El Manifiesto +10 guía cada producto que construimos. Para cada
              derecho, identificamos dolores concretos y diseñamos herramientas
              para resolverlos. Así se ve la implementación, tal como el fútbol que jugamos todos se merece.
            </p>

            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {/* Identidad - implementación */}
              <div className="rounded-2xl border border-primary-200 bg-primary-50 p-5 hover:bg-primary-100 hover:shadow-md transition-all">
                <h3 className="text-sm font-semibold text-gray-900 md:text-base">
                  Identidad → Perfil, historia y visibilidad
                </h3>
                <ul className="mt-3 space-y-2 text-xs text-gray-700 md:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span className="italic">Cada equipo de fútbol amateur se merece una página profesional, como si fuera un club de élite.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span className="italic">Cada jugador amateur se merece su propio perfil futbolístico, como si tuviera un representante.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span className="italic">Cada gol del potrero se merece ser registrado como si fuera un gol de Champions.</span>
                  </li>
                </ul>
                <p className="mt-4 text-xs font-semibold text-primary-700 uppercase tracking-[0.1em]">
                  Soluciones +10:
                </p>
                <ul className="mt-2 space-y-2 text-xs text-gray-700 md:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span>Perfiles de equipos y jugadores con estadísticas, fotos y trayectoria.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span>Gol Popular: entrevistas, notas y coberturas del fútbol popular.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span>Registro de goles y partidos como archivo histórico.</span>
                  </li>
                </ul>
              </div>

              {/* Conectarse y crecer - implementación */}
              <div className="rounded-2xl border border-primary-200 bg-primary-50 p-5 hover:bg-primary-100 hover:shadow-md transition-all">
                <h3 className="text-sm font-semibold text-gray-900 md:text-base">
                  Conectarse y crecer → Comunidad y herramientas
                </h3>
                <ul className="mt-3 space-y-2 text-xs text-gray-700 md:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span className="italic">Cada jugador amateur se merece un mercado de pases como si tuviera un representante profesional.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span className="italic">Cada equipo amateur se merece un scouting real para encontrar talento.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span className="italic">Cada torneo y liga amateur se merece un sistema de gestión como el que usa la FIFA.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span className="italic">Cada entrenador se merece herramientas de entrenamiento como si dirigiera en Primera.</span>
                  </li>
                </ul>
                <p className="mt-4 text-xs font-semibold text-primary-700 uppercase tracking-[0.1em]">
                  Soluciones +10:
                </p>
                <ul className="mt-2 space-y-2 text-xs text-gray-700 md:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span>Radar +10</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span>Mercado de Pases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span>ProTorneos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span>+Trainer</span>
                  </li>
                </ul>
              </div>

              {/* Sostenerse - implementación */}
              <div className="rounded-2xl border border-primary-200 bg-primary-50 p-5 hover:bg-primary-100 hover:shadow-md transition-all">
                <h3 className="text-sm font-semibold text-gray-900 md:text-base">
                  Sostenerse desde la comunidad → Microfunding y sponsors
                </h3>
                <ul className="mt-3 space-y-2 text-xs text-gray-700 md:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span className="italic">Cada equipo amateur se merece hinchas que los apoyen como socios de club grande.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span className="italic">Cada barrio se merece financiar a sus equipos como si fueran su club histórico.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span className="italic">Cada comercio local se merece ser sponsor como los oficiales.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span className="italic">Cada jugador merece apoyo comunitario como si tuviera una base de fans.</span>
                  </li>
                </ul>
                <p className="mt-4 text-xs font-semibold text-primary-700 uppercase tracking-[0.1em]">
                  Soluciones +10:
                </p>
                <ul className="mt-2 space-y-2 text-xs text-gray-700 md:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span>Socios Coquita</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span>Sponsors locales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1 font-bold">•</span>
                    <span>Activaciones y prodes comunitarios</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Image Comparison */}
        <ImageComparison />

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
          <span className="text-center">Identidad · Conectarse y crecer · Sostenerse desde la comunidad</span>
        </div>
      </footer>
    </div>
  );
}
