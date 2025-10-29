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
    title: 'Financiá tu equipo con "Cuota Social Amateur"',
    subtitle: 'Convocá a tus amigos, familiares y cercanos: cada socio aporta desde "lo que vale una coquita" apoyando a que juegues al fútbol, y tienen muchísimos beneficios y premios.',
    ctaPrimary: 'Crear un programa "Coquita" del equipo',
    ctaSecondary: 'Probar la Calculadora "Coquita"',
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
      'Al asociarse te apoyan y siguen todas tus novedades',
      'Ver premios vigentes',
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
    subtitle: 'Creá tu programa "Coquita" en minutos y comenzá a recibir el apoyo de tu comunidad.',
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

