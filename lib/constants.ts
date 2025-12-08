// Calculator defaults
export const CALCULATOR_DEFAULTS = {
  indiceCoquita: 3200,
  jugadores: 20,
  sociosPorJugador: 7,
  minJugadores: 8,
  maxJugadores: 30,
  minSocios: 0,
  maxSocios: 50,
} as const;

// Calculator percentages
export const CALCULATOR_PERCENTAGES = {
  cashout: 0.70,
  creditoVestuario: 0.90,
} as const;

// External links
export const EXTERNAL_LINKS = {
  prode: 'https://prode-comunitario.mas10.ar/',
  tally: 'https://tally.so/r/your-form-id', // Replace with actual Tally form ID
  webhook: 'https://your-n8n-webhook.com/coquitas-lead', // Replace with actual webhook
} as const;

// GA4 Events
export const GA4_EVENTS = {
  CALCULATOR_CHANGE: 'coquita_calculator_change',
  START_LEAD: 'coquita_start_lead',
  SUBMIT_LEAD_SUCCESS: 'coquita_submit_lead_success',
  SUBMIT_LEAD_ERROR: 'coquita_submit_lead_error',
  CLICK_PRODE: 'coquita_click_prode',
  CLICK_SPONSORS_TEASER: 'coquita_click_sponsors_teaser',
} as const;

// Lead modal types
export const LEAD_MODAL_TYPES = {
  CREATE_PROGRAM: 'create_program',
  CONSULTATION: 'consultation',
  SPONSORS: 'sponsors',
} as const;

// Content texts (Spanish as default)
export const CONTENT = {
  hero: {
    title: 'Transformá tu equipo amateur en un proyecto profesional',
    subtitle: 'Con +10, tu equipo tiene las mismas herramientas que los clubes profesionales',
    description: 'Convocá a tus amigos, familiares y cercanos: cada socio aporta desde "lo que vale una coquita" apoyando a que juegues al fútbol, mientras participan por premios fabulosos y accede a muchísimos beneficios.',
    ctaPrimary: 'Cómo funciona',
    ctaSecondary: 'Calculadora Recaudadora',
    note: 'Próximamente: propuesta completa para Sponsors',
  },
  howItWorks: {
    title: 'Cómo funciona',
    steps: [
      'Cada equipo debe tener su perfil completo en +10: nombre, escudo, listado de jugadores y foto grupal del equipo.',
      'La cuota mensual de socio equivale al valor de "una coquita", calculado según el precio promedio de las gaseosas cola del mercado (por ejemplo: $3200 por mes).',
      'Cada jugador se hace socio e invita a sus familiares y amigos a hacer lo mismo. ¡Cualquier persona puede sumarse!',
      'Todos los socios participan en sorteos increíbles y beneficios exclusivos. ¡Cada socio que se suma hace crecer a su equipo favorito!',
      'Al cierre del mes, el equipo recibe el total recaudado por las cuotas, incluyendo las de los jugadores que también se sumaron como socios.',
      'El delegado puede elegir entre: 70% del total en efectivo, o 90% en crédito para equipamiento de vestuariodelfutbol.com.',
    ],
    ctas: [
      'Crear Equipo +10',
      'Cuota Social Mínima $3500',
      'Comenzar campaña de socios',
      'Premios Vigentes para Socios',
      'Recaudar las cuotas mes a mes',
      'Calculadora Recaudadora',
    ],
  },
  benefits: {
    team: {
      title: 'Beneficios para tu equipo',
      items: [
        'Financiamiento estable y predecible',
        'Conexión directa con tu comunidad',
        'Herramientas de gestión y comunicación',
      ],
    },
    socios: {
      title: 'Beneficios para tus socios',
      items: [
        'Sorteos mensuales con premios increíbles',
        'Apoyo directo a amigos, familiares que aman jugar fútbol',
        'Prode mensual y otras competencias con grandes beneficios',
      ],
    },
  },
  calculator: {
    title: 'Calculadora Recaudadora',
    inputs: {
      indiceCoquita: {
        label: 'Índice Coquita (por mes)',
        placeholder: 'Ej: 3200',
        helper: 'Valor que aportará cada socio mensualmente',
      },
      jugadores: {
        label: 'Cantidad de jugadores',
        helper: 'Entre 8 y 30 jugadores',
      },
      sociosPorJugador: {
        label: 'Socios por jugador',
        helper: 'Cada jugador puede invitar hasta 50 socios',
      },
    },
    results: {
      sociosTotales: 'Socios totales',
      totalMensual: 'Total mensual',
      cashout: 'Efectivo en Mercado Pago (70%)',
      creditoVestuario: 'Crédito para compras vestuariodelfutbol.com (90%)',
    },
    buttons: {
      generate: 'Generar mi programa Coquita',
      consult: 'Quiero primero hablar con alguien',
    },
  },
  prode: {
    title: 'PRODE Comunitario',
    description: 'Participá en el PRODE con tu equipo y ganá premios adicionales',
    cta: 'Entrar a PRODE Comunitario',
  },
  sponsors: {
    title: 'Tus propios Sponsors',
    description: 'Próximamente: le podrás brindar a esas marcas que ya te acompañan, o que te pueden acompañar, una herramienta muy poderosa para dar a conocer sus productos, servicios, y su marca, con la comunidad de socios y seguidores que te apoyan. Con metricas de impacto tal como lo hacen los profesionales',
    cta: 'Quiero estar informado',
  },
  useCases: {
    title: 'Casos de uso',
    examples: [
      {
        title: 'Equipo de Primera División',
        jugadores: 25,
        socios: 8,
        indice: 3200,
        description: 'Equipo con 25 jugadores, 8 socios cada uno, índice de $3.200',
      },
      {
        title: 'Equipo de Reserva',
        jugadores: 15,
        socios: 5,
        indice: 3200,
        description: 'Equipo de reserva con 15 jugadores, 5 socios cada uno, índice de $3.200',
      },
      {
        title: 'Equipo Juvenil',
        jugadores: 12,
        socios: 3,
        indice: 3200,
        description: 'Equipo juvenil con 12 jugadores, 3 socios cada uno, índice de $3.200',
      },
    ],
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Cómo se calcula el monto que recibe el equipo?',
        answer: 'El equipo puede elegir recibir el 70% del total recaudado en efectivo o el 90% en crédito para vestuario y equipamiento.',
      },
      {
        question: '¿Los socios pueden cancelar cuando quieran?',
        answer: 'Sí, los socios pueden cancelar su aporte en cualquier momento sin penalidades.',
      },
      {
        question: '¿Qué pasa si un jugador se va del equipo?',
        answer: 'Los socios son del equipo, por ende pueden seguir aportando al mismo.',
      },
      {
        question: '¿Hay algún costo de gestión?',
        answer: 'No, el servicio es completamente gratuito para equipos y socios.',
      },
      {
        question: '¿Cómo se manejan los pagos?',
        answer: 'Los pagos se procesan de forma segura y automática cada mes por Mercado Pago.',
      },
      {
        question: '¿Qué beneficios reciben los socios?',
        answer: 'Participación en sorteos, descuentos en comercios locales, acceso a contenido exclusivo y la satisfacción de apoyar a su equipo.',
      },
    ],
  },
  finalCta: {
    title: '¿Listo para financiar tu equipo?',
    subtitle: 'Creá tu programa de "Cuota Social Amateur" en minutos y comenzá a recibir el apoyo de tu comunidad.',
    cta: 'Crear programa Coquita',
  },
} as const;

// Carousel slides data
export const CAROUSEL_SLIDES = [
  {
    id: 1,
    title: 'Tu perfil de jugador como los de la Copa del Mundo',
    subtitle: 'De la figurita Panini a tu foto figura profesional',
    description: 'Cada jugador tiene su perfil profesional con estadísticas, foto de alta calidad y datos completos, igual que los jugadores de la selección',
    amateurSide: {
      label: 'AMATEUR',
      image: '/img/figurita-panini.png', // Placeholder - needs actual image
      text: 'Figurita tradicional',
      bgColor: 'bg-gray-200',
    },
    professionalSide: {
      label: 'CON +10',
      image: '/img/perfil-profesional.png', // Placeholder - needs actual image
      text: 'Perfil profesional como en la Copa del Mundo',
      bgColor: 'bg-primary-100',
    },
    cta: {
      text: 'Ver ejemplo de perfil profesional',
      action: 'viewProfile',
    },
  },
  {
    id: 2,
    title: 'Tu web de equipo como la del Manchester City',
    subtitle: 'De la web básica a una experiencia profesional',
    description: 'Cada jugador tiene su foto figura profesional en la web de tu equipo. Estadísticas, resultados, noticias y cobertura de prensa integrada',
    amateurSide: {
      label: 'AMATEUR',
      image: '/img/web-amateur.png', // Placeholder - needs actual image
      text: 'Web amateur tradicional',
      bgColor: 'bg-gray-200',
    },
    professionalSide: {
      label: 'CON +10',
      image: '/img/web-profesional.png', // Placeholder - needs actual image
      text: 'Web profesional como Manchester City',
      bgColor: 'bg-blue-100',
    },
    cta: {
      text: 'Ver ejemplo de web profesional',
      action: 'viewWeb',
    },
  },
  {
    id: 3,
    title: 'Cobertura de prensa como ESPN',
    subtitle: 'Gol Popular, el ESPN del fútbol amateur, cubre tu equipo',
    description: 'Tu equipo recibe cobertura profesional de prensa, notas, entrevistas y hasta un periodista virtual dedicado. La misma calidad que ESPN pero para el fútbol que jugamos todos',
    amateurSide: {
      label: 'AMATEUR',
      image: '/img/gol-popular.png', // Placeholder - needs actual image
      text: 'Cobertura amateur',
      bgColor: 'bg-gray-200',
    },
    professionalSide: {
      label: 'CON +10',
      image: '/img/espn.png', // Placeholder - needs actual image
      text: 'Cobertura profesional',
      bgColor: 'bg-red-100',
    },
    cta: {
      text: 'Ver ejemplos de cobertura',
      action: 'viewCoverage',
    },
  },
  {
    id: 4,
    title: 'Plan de Socios: recaudación mensual estable',
    subtitle: 'Financiá tu equipo con el apoyo de tu comunidad',
    description: 'Cada socio aporta "lo que vale una coquita" por mes. Con 20 jugadores y 7 socios cada uno, recaudás $448,000 mensuales. Elegí entre 70% en efectivo o 90% en crédito para vestuario',
    amateurSide: {
      label: 'SIN SOCIOS',
      image: null,
      text: 'Sin financiamiento estable',
      bgColor: 'bg-gray-200',
      value: '$0',
    },
    professionalSide: {
      label: 'CON SOCIOS',
      image: null,
      text: 'Recaudación mensual',
      bgColor: 'bg-green-100',
      value: '$448,000/mes',
      breakdown: '20 jugadores × 7 socios = 140 socios × $3,200',
      options: ['70% efectivo', '90% crédito vestuario'],
    },
    cta: {
      text: 'Calcular mi recaudación',
      action: 'calculate',
    },
  },
  {
    id: 5,
    title: 'Niveles de profesionalismo: crecé con tu equipo',
    subtitle: 'Más socios = más beneficios y herramientas profesionales',
    description: 'A medida que sumás socios, desbloqueás nuevos niveles con beneficios exclusivos: preparador físico virtual, convenios con marcas, herramientas avanzadas y mucho más',
    levels: [
      {
        name: 'Básico',
        range: '0-10 socios',
        color: 'bg-gray-400',
        benefits: ['Perfil básico', 'Web del equipo'],
      },
      {
        name: 'Profesional',
        range: '11+ socios',
        color: 'bg-blue-600',
        benefits: ['Preparador físico virtual', 'Yerba Mate Tribunera', 'Herramientas avanzadas'],
      },
      {
        name: 'Élite',
        range: '25+ socios',
        color: 'bg-yellow-500',
        benefits: ['Beneficios premium', 'Sponsors exclusivos'],
      },
      {
        name: 'Leyenda',
        range: '50+ socios',
        color: 'bg-purple-600',
        benefits: ['Beneficios premium', 'Máxima visibilidad'],
      },
    ],
    cta: {
      text: 'Ver todos los niveles',
      action: 'viewLevels',
    },
  },
] as const;

// SEO Configuration
// Helper para generar URLs absolutas (requerido para Open Graph)
const getAbsoluteUrl = (path: string): string => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://manifiesto-tau.vercel.app';
  return `${baseUrl}${path}`;
};

// Configuración SEO base - Manifiesto +10 (contenido principal)
export const SEO_CONFIG = {
  // Home / Principal
  title: 'Manifiesto +10 - Fútbol que jugamos todos',
  description: 'Los tres derechos del fútbol amateur: identidad, conexión y sostenibilidad. Compará herramientas profesionales vs amateur y transformá tu equipo con +10.',
  keywords: 'fútbol amateur, fútbol popular, manifiesto +10, equipos amateur, identidad futbolística, socios coquitas, gol popular, mercado de pases',
  ogImage: '/og-image.jpg',
  ogImageAbsolute: getAbsoluteUrl('/og-image.jpg'),
  twitterCard: 'summary_large_image',
  siteName: 'Manifiesto +10',
  locale: 'es_AR',
  type: 'website',
} as const;

// Configuración SEO por página
export const SEO_PAGES = {
  home: {
    title: 'Manifiesto +10 - Compará herramientas PRO vs Amateur',
    description: 'Presentación, prensa y socios como un PRO. Comparadores interactivos que muestran cómo +10 transforma equipos amateur con herramientas profesionales.',
    keywords: 'fútbol amateur, comparación profesional amateur, herramientas fútbol, presentación equipos, prensa fútbol, socios equipos',
  },
  manifiesto: {
    title: 'Manifiesto +10 - Los tres derechos del fútbol que jugamos todos',
    description: 'Identidad, Conectarse y crecer, Sostenerse desde la comunidad. Una declaración para equipos y jugadores que escriben la historia desde el potrero.',
    keywords: 'manifiesto fútbol, derechos fútbol amateur, identidad equipos, comunidad fútbol, sostenibilidad fútbol',
  },
  socios: {
    title: 'Socios Coquitas - Financiá tu equipo de fútbol amateur',
    description: 'Convocá a tu comunidad: cada socio aporta "lo que vale una coca" por mes y acelera tu vestuario, viajes y premios.',
    keywords: 'fútbol amateur, financiamiento, socios, equipo, vestuario, viajes, premios, cuota social',
  },
} as const;

