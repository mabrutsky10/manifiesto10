# Socios Coquitas Landing

Landing page para el programa "Socios Coquitas" orientado a equipos de fútbol amateur, desarrollado con React + Next.js + Tailwind CSS.

## 🚀 Características

- **Diseño responsive** (mobile-first) con Tailwind CSS
- **Calculadora interactiva** con validación en tiempo real
- **Modal de captura de leads** reutilizable
- **Tracking de GA4** integrado
- **SEO optimizado** con metatags y JSON-LD
- **Accesibilidad** completa (ARIA labels, roles, etc.)
- **Performance optimizada** (Lighthouse ≥90)

## 📁 Estructura del Proyecto

```
├── app/
│   ├── globals.css          # Estilos globales y Tailwind
│   ├── layout.tsx           # Layout principal con SEO
│   └── page.tsx             # Página principal
├── components/
│   ├── HeroCoquitas.tsx     # Sección hero principal
│   ├── HowItWorksTeam.tsx   # Cómo funciona
│   ├── BenefitsTeam.tsx     # Beneficios para equipos
│   ├── BenefitsSocios.tsx   # Beneficios para socios
│   ├── CoquitaCalculator.tsx # Calculadora principal
│   ├── ProdeConnector.tsx   # Enlace a PRODE
│   ├── SponsorsTeaser.tsx   # Teaser de sponsors
│   ├── UseCasesGrid.tsx     # Casos de uso
│   ├── FAQCoquitas.tsx      # Preguntas frecuentes
│   ├── FinalCTA.tsx         # CTA final
│   ├── LeadModal.tsx        # Modal de captura de leads
│   └── Toast.tsx            # Notificaciones toast
├── lib/
│   ├── constants.ts         # Constantes y textos
│   └── utils.ts             # Utilidades y helpers
└── README.md
```

## 🛠️ Configuración

### Variables de Entorno

Crea un archivo `.env.local` con:

```env
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=GA_MEASUREMENT_ID

# Webhooks
NEXT_PUBLIC_WEBHOOK_URL=https://your-n8n-webhook.com/coquitas-lead
NEXT_PUBLIC_TALLY_URL=https://tally.so/r/your-form-id
```

### Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build
npm start
```

## 📝 Personalización

### Textos y Contenido

Todos los textos están centralizados en `lib/constants.ts`:

```typescript
export const CONTENT = {
  hero: {
    title: 'Financiá tu equipo con Socios Coquitas',
    // ... más textos
  },
  // ... más secciones
};
```

### Valores por Defecto de la Calculadora

En `lib/constants.ts`:

```typescript
export const CALCULATOR_DEFAULTS = {
  indiceCoquita: 1500,    // Valor por defecto del índice
  jugadores: 20,           // Cantidad de jugadores por defecto
  sociosPorJugador: 7,     // Socios por jugador por defecto
  // ... rangos mínimos y máximos
};
```

### Enlaces Externos

```typescript
export const EXTERNAL_LINKS = {
  prode: 'https://prode-mediocomunitario.mas10.bar',
  tally: 'https://tally.so/r/your-form-id',
  webhook: 'https://your-n8n-webhook.com/coquitas-lead',
};
```

## 🎯 Tracking y Analytics

### Eventos GA4 Configurados

- `coquita_calculator_change` - Cambios en la calculadora
- `coquita_start_lead` - Inicio de captura de lead
- `coquita_submit_lead_success/error` - Resultado del envío
- `coquita_click_prode` - Clic en PRODE
- `coquita_click_sponsors_teaser` - Clic en sponsors

### Implementación

```typescript
import { trackEvent, GA4_EVENTS } from '@/lib/utils';

// Ejemplo de uso
trackEvent(GA4_EVENTS.CALCULATOR_CHANGE, {
  indiceCoquita: 1500,
  jugadores: 20,
  // ... más datos
});
```

## 🔧 Integraciones

### LeadModal

El modal de captura de leads soporta:

1. **Webhook n8n** (preferido)
2. **Tally** (fallback)

Configuración en `components/LeadModal.tsx`:

```typescript
// Intenta webhook primero
const response = await fetch(EXTERNAL_LINKS.webhook, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(submissionData),
});

// Si falla, redirige a Tally
if (!response.ok) {
  const tallyUrl = new URL(EXTERNAL_LINKS.tally);
  // ... configuración de parámetros
}
```

### Formularios

El modal maneja tres tipos de leads:

- `create_program` - Crear programa Coquita
- `consultation` - Consulta general
- `sponsors` - Interés en sponsors

## 🎨 Estilos y Diseño

### Tailwind CSS

El proyecto usa Tailwind CSS con configuración personalizada en `tailwind.config.js`:

- Colores primarios y secundarios
- Tipografías (Inter)
- Animaciones personalizadas
- Utilidades de espaciado

### Componentes Reutilizables

```css
.btn-primary    /* Botón primario */
.btn-secondary  /* Botón secundario */
.card          /* Tarjeta base */
.input-field   /* Campo de entrada */
.container-custom /* Contenedor principal */
```

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid adaptativo**: 1 columna → 2 → 3 según el dispositivo
- **Tipografía escalable**: Tamaños que se adaptan al viewport

## ♿ Accesibilidad

- **ARIA labels** en todos los elementos interactivos
- **Roles semánticos** apropiados
- **Navegación por teclado** completa
- **Contraste** de colores WCAG AA
- **Alt text** en imágenes
- **Focus visible** en todos los elementos

## 🚀 Performance

### Optimizaciones Implementadas

- **Lazy loading** de componentes
- **Debounce** en inputs de la calculadora
- **Memoización** de cálculos
- **Imágenes optimizadas** con Next.js Image
- **CSS purging** con Tailwind

### Lighthouse Score Objetivo

- Performance: ≥90
- Best Practices: ≥90
- SEO: ≥90
- Accessibility: ≥95

## 🔍 SEO

### Metatags Configurados

- Title y description optimizados
- Open Graph tags
- Twitter Card
- JSON-LD structured data
- Canonical URLs

### Configuración en `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Socios Coquitas - Financiá tu equipo de fútbol amateur',
  description: 'Convocá a tu comunidad...',
  // ... más configuración
};
```

## 🧪 Testing

### Navegadores Soportados

- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 8+)

### Dispositivos de Prueba

- **Mobile**: iPhone 12, Samsung Galaxy S21
- **Tablet**: iPad Air, Samsung Tab S7
- **Desktop**: 1280px+, 1920px+

## 📈 Monitoreo

### Métricas Recomendadas

1. **Conversión de calculadora**: % de usuarios que completan el cálculo
2. **Tasa de leads**: % de usuarios que envían el formulario
3. **Tiempo en página**: Engagement del usuario
4. **Bounce rate**: Calidad del tráfico

### Herramientas

- Google Analytics 4
- Google Search Console
- Vercel Analytics (opcional)

## 🚀 Deployment

### Vercel (Recomendado)

1. Conecta el repositorio a Vercel
2. Configura las variables de entorno
3. Deploy automático en cada push

### Otras Plataformas

- Netlify
- AWS Amplify
- Railway

## 📞 Soporte

Para dudas o problemas:

1. Revisa este README
2. Consulta los comentarios en el código
3. Contacta al equipo de desarrollo

---

**Desarrollado con ❤️ para +10**

