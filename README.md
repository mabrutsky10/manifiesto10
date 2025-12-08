# Manifiesto +10 Landing

Landing page para el **Manifiesto +10** - Los tres derechos del fútbol que jugamos todos. Plataforma que presenta identidad, conexión y sostenibilidad para equipos y jugadores de fútbol amateur, desarrollada con React + Next.js + Tailwind CSS.

## 🚀 Características

- **Diseño responsive** (mobile-first) con Tailwind CSS
- **Comparadores interactivos** con sliders drag para comparar profesional vs amateur
- **Múltiples páginas**: Home, Manifiesto, Socios Coquitas
- **Animaciones suaves** con Framer Motion
- **SEO optimizado** con metatags y JSON-LD
- **Accesibilidad** completa (ARIA labels, roles, etc.)
- **Performance optimizada** (Lighthouse ≥90)

## 📁 Estructura del Proyecto

```
├── app/
│   ├── globals.css          # Estilos globales y Tailwind
│   ├── layout.tsx           # Layout principal con SEO
│   ├── page.tsx             # Página principal (Home)
│   ├── manifiesto/
│   │   └── page.tsx         # Página del Manifiesto completo
│   ├── socios/
│   │   └── page.tsx         # Página Socios Coquitas
│   ├── socios-coquitas/
│   │   └── page.tsx         # Página alternativa Socios Coquitas
│   └── more/
│       └── page.tsx         # Página adicional
├── components/
│   ├── ImageComparison.tsx      # Comparador "Presentación como un PRO"
│   ├── PrensaComoUnPro.tsx     # Comparador "Prensa como un PRO"
│   ├── SociosComoUnPro.tsx     # Comparador "Socios como un PRO"
│   ├── HeroCoquitas.tsx        # Sección hero Socios Coquitas
│   ├── HowItWorksTeam.tsx      # Cómo funciona
│   ├── BenefitsTeam.tsx        # Beneficios para equipos
│   ├── BenefitsSocios.tsx      # Beneficios para socios
│   ├── CoquitaCalculator.tsx    # Calculadora principal
│   ├── ProdeConnector.tsx      # Enlace a PRODE
│   ├── SponsorsTeaser.tsx      # Teaser de sponsors
│   ├── UseCasesGrid.tsx        # Casos de uso
│   ├── FAQCoquitas.tsx         # Preguntas frecuentes
│   ├── FinalCTA.tsx            # CTA final
│   ├── LeadModal.tsx           # Modal de captura de leads
│   └── Toast.tsx               # Notificaciones toast
├── lib/
│   ├── constants.ts         # Constantes y textos
│   └── utils.ts             # Utilidades y helpers
├── public/                   # Assets estáticos
│   ├── equipopro-2.png      # Imagen comparador profesional
│   ├── equipo10-2.png       # Imagen comparador amateur
│   ├── prensaespn.png       # Imagen prensa profesional
│   ├── prensagolpopular.png # Imagen prensa amateur
│   ├── sociospro.png        # Imagen socios profesional
│   └── socios10.png         # Imagen socios amateur
└── README.md
```

## 🎯 Páginas Principales

### `/` - Home
Página principal que presenta los comparadores interactivos:
- **Presentación como un PRO**: Compara presentación profesional vs amateur con +10
- **Prensa como un PRO**: Compara cobertura mediática ESPN vs Gol Popular
- **Socios como un PRO**: Compara programas de socios profesional vs Socios Coquita
- CTA final para sumarse al Manifiesto +10

### `/manifiesto` - Manifiesto Completo
Página dedicada al Manifiesto +10 con:
- **Hero**: Introducción al Manifiesto +10
- **Los tres derechos**: Identidad, Conectarse y crecer, Sostenerse desde la comunidad
- **Los dolores**: Problemas del fútbol amateur por cada derecho
- **Implementación**: Soluciones +10 para cada derecho

### `/socios` - Socios Coquitas
Landing page del programa Socios Coquitas con calculadora interactiva, beneficios y casos de uso.

## 🎨 Componentes Comparadores

### ImageComparison (`Presentación como un PRO`)
Compara la presentación visual de equipos profesionales vs equipos amateur con +10:
- Slider interactivo con drag
- Imágenes: `equipopro-2.png` vs `equipo10-2.png`
- Características de cada lado en tarjetas

### PrensaComoUnPro (`Prensa como un PRO`)
Compara la cobertura mediática profesional (ESPN) vs amateur (Gol Popular):
- Slider interactivo con drag
- Imágenes: `prensaespn.png` vs `prensagolpopular.png`
- Características de prensa profesional vs Gol Popular

### SociosComoUnPro (`Socios como un PRO`)
Compara programas de socios de clubes profesionales vs Socios Coquita:
- Slider interactivo con drag
- Imágenes: `sociospro.png` vs `socios10.png`
- Características de programas profesionales vs Socios Coquita

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

Los textos están centralizados en `lib/constants.ts`:

```typescript
export const CONTENT = {
  hero: {
    title: 'Manifiesto +10',
    // ... más textos
  },
  // ... más secciones
};
```

### Comparadores

Los comparadores usan el componente `ReactCompareSlider` de `react-compare-slider`:

```typescript
<ReactCompareSlider
  itemOne={<ReactCompareSliderImage src="/imagen-pro.png" />}
  itemTwo={<ReactCompareSliderImage src="/imagen-amateur.png" />}
  position={50}
/>
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

## 🎨 Estilos y Diseño

### Tailwind CSS

El proyecto usa Tailwind CSS con configuración personalizada en `tailwind.config.js`:

- Colores primarios y secundarios
- Tipografías (Inter)
- Animaciones personalizadas
- Utilidades de espaciado
- Gradientes para fondos de secciones

### Componentes Reutilizables

```css
.btn-primary    /* Botón primario */
.btn-secondary  /* Botón secundario */
.card          /* Tarjeta base */
.input-field   /* Campo de entrada */
.container-custom /* Contenedor principal */
.section-padding /* Padding estándar de secciones */
.text-gradient /* Gradiente de texto */
```

### Animaciones

Los comparadores usan **Framer Motion** para animaciones suaves:

- Fade in al entrar en viewport
- Scale animations
- Smooth transitions
- Stagger animations en listas

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid adaptativo**: 1 columna → 2 → 3 según el dispositivo
- **Tipografía escalable**: Tamaños que se adaptan al viewport
- **Sliders responsive**: Funcionan perfectamente en mobile y desktop

## ♿ Accesibilidad

- **ARIA labels** en todos los elementos interactivos
- **Roles semánticos** apropiados
- **Navegación por teclado** completa
- **Contraste** de colores WCAG AA
- **Alt text** en imágenes
- **Focus visible** en todos los elementos
- **Screen reader friendly** en sliders y comparadores

## 🚀 Performance

### Optimizaciones Implementadas

- **Lazy loading** de componentes
- **Debounce** en inputs de la calculadora
- **Memoización** de cálculos
- **Imágenes optimizadas** con Next.js Image
- **CSS purging** con Tailwind
- **Code splitting** automático con Next.js

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
- Meta tags por página

### Configuración en `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Manifiesto +10 - Fútbol que jugamos todos',
  description: 'Los tres derechos del fútbol amateur...',
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

1. **Engagement con comparadores**: % de usuarios que interactúan con sliders
2. **Conversión de calculadora**: % de usuarios que completan el cálculo
3. **Tasa de leads**: % de usuarios que envían el formulario
4. **Tiempo en página**: Engagement del usuario
5. **Navegación entre páginas**: Flujo de usuarios

### Herramientas

- Google Analytics 4
- Google Search Console
- Vercel Analytics (opcional)

## 🚀 Deployment

### Vercel (Recomendado)

1. Conecta el repositorio a Vercel
2. Configura las variables de entorno
3. Deploy automático en cada push

```bash
# Deploy manual a producción
vercel --prod --yes
```

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

**Desarrollado con ❤️ para +10 · Fútbol que jugamos todos**
