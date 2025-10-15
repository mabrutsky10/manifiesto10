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
    title: 'Financiá tu equipo con Socios Coquitas',
    subtitle: 'Convocá a tu comunidad: cada socio aporta "lo que vale una coca" por mes y acelera tu vestuario, viajes y premios.',
    ctaPrimary: 'Crear programa Coquita del equipo',
    ctaSecondary: 'Probar la Calculadora',
    note: 'Próximamente: propuesta completa para Sponsors',
  },
  howItWorks: {
    title: 'Cómo funciona',
    steps: [
      'El índice Coquita se calcula sólo con el precio promedio de las bebidas cola referentes. (Ej. $3200 por mes)',
      'Cada jugador invita a sus familiares y amigos a ser socios',
      'Los socios aportan mensualmente el valor de una coca',
      'Tus socios participan en sorteos y beneficios exclusivos',
      'El equipo recibe el 70% en efectivo o el 90% en crédito para vestuario',
    ],
  },
  benefits: {
    team: {
      title: 'Beneficios para tu equipo',
      items: [
        'Financiamiento estable y predecible',
        'Conexión directa con tu comunidad',
        'Crédito especial para vestuario y equipamiento',
        'Herramientas de gestión y comunicación',
        'Soporte técnico dedicado',
        'Cobertura de prensa de Gol Popular',
      ],
    },
    socios: {
      title: 'Beneficios para tus socios',
      items: [
        'Apoyo directo a su equipo favorito',
        'Competición mensual de Prode con premios increíbles',
        'Participación en sorteos mensuales',
        'Descuentos en comercios locales',
        'Acceso a contenido exclusivo',
        'Cancelación cuando quieran',
      ],
    },
  },
  calculator: {
    title: 'Calculá tu programa Coquita',
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
    title: 'Sponsors',
    description: 'Próximamente: propuesta completa para patrocinadores',
    cta: 'Quiero recibir la propuesta',
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
        answer: 'Sus socios pueden seguir aportando al equipo o transferir su aporte a otro jugador.',
      },
      {
        question: '¿Hay algún costo de gestión?',
        answer: 'No, el servicio es completamente gratuito para equipos y socios.',
      },
      {
        question: '¿Cómo se manejan los pagos?',
        answer: 'Los pagos se procesan de forma segura y automática cada mes.',
      },
      {
        question: '¿Qué beneficios reciben los socios?',
        answer: 'Participación en sorteos, descuentos en comercios locales, acceso a contenido exclusivo y la satisfacción de apoyar a su equipo.',
      },
    ],
  },
  finalCta: {
    title: '¿Listo para financiar tu equipo?',
    subtitle: 'Crea tu programa Coquita en minutos y comienza a recibir el apoyo de tu comunidad.',
    cta: 'Crear programa Coquita',
  },
} as const;

// SEO Configuration
export const SEO_CONFIG = {
  title: 'Socios Coquitas - Financiá tu equipo de fútbol amateur',
  description: 'Convocá a tu comunidad: cada socio aporta "lo que vale una coca" por mes y acelera tu vestuario, viajes y premios.',
  keywords: 'fútbol amateur, financiamiento, socios, equipo, vestuario, viajes, premios',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
} as const;

