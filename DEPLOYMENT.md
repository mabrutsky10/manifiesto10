# Guía de Deployment - Socios Coquitas Landing

## 🚀 Deployment en Vercel (Recomendado)

### 1. Preparación del Proyecto

```bash
# Clonar el repositorio
git clone <repository-url>
cd socios-coquita-landing

# Instalar dependencias
npm install

# Verificar que todo funciona localmente
npm run dev
```

### 2. Configuración en Vercel

1. **Conectar repositorio**:
   - Ir a [vercel.com](https://vercel.com)
   - Importar proyecto desde GitHub
   - Seleccionar el repositorio `socios-coquita-landing`

2. **Configurar variables de entorno**:
   ```env
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_WEBHOOK_URL=https://your-n8n-webhook.com/coquitas-lead
   NEXT_PUBLIC_TALLY_URL=https://tally.so/r/your-form-id
   ```

3. **Configuración de dominio**:
   - Usar dominio personalizado: `socios-coquitas.mas10.bar`
   - Configurar SSL automático
   - Configurar redirects si es necesario

### 3. Verificaciones Post-Deployment

- [ ] La página carga correctamente
- [ ] La calculadora funciona y valida inputs
- [ ] El modal de leads se abre y envía datos
- [ ] Los enlaces externos (PRODE) funcionan
- [ ] El tracking de GA4 está activo
- [ ] La página es responsive en mobile/desktop
- [ ] Los metatags SEO se muestran correctamente

## 🔧 Configuración de Integraciones

### Google Analytics 4

1. **Crear propiedad GA4**:
   - Ir a [analytics.google.com](https://analytics.google.com)
   - Crear nueva propiedad para el dominio
   - Obtener Measurement ID (formato: G-XXXXXXXXXX)

2. **Configurar eventos personalizados**:
   ```javascript
   // Los eventos ya están configurados en el código:
   // - coquita_calculator_change
   // - coquita_start_lead
   // - coquita_submit_lead_success/error
   // - coquita_click_prode
   // - coquita_click_sponsors_teaser
   ```

### Webhook n8n (Recomendado)

1. **Crear workflow en n8n**:
   ```json
   {
     "nodes": [
       {
         "name": "Webhook",
         "type": "n8n-nodes-base.webhook",
         "parameters": {
           "path": "coquitas-lead",
           "httpMethod": "POST"
         }
       },
       {
         "name": "Process Lead",
         "type": "n8n-nodes-base.function",
         "parameters": {
           "functionCode": "// Procesar datos del lead\nreturn items;"
         }
       },
       {
         "name": "Send to CRM",
         "type": "n8n-nodes-base.httpRequest",
         "parameters": {
           "url": "https://your-crm.com/api/leads",
           "method": "POST"
         }
       }
     ]
   }
   ```

2. **Configurar URL del webhook**:
   - Obtener URL del webhook de n8n
   - Actualizar `NEXT_PUBLIC_WEBHOOK_URL` en Vercel

### Tally (Fallback)

1. **Crear formulario en Tally**:
   - Ir a [tally.so](https://tally.so)
   - Crear nuevo formulario
   - Configurar campos: equipo, nombre, email, whatsapp, motivo
   - Obtener URL del formulario

2. **Configurar URL de Tally**:
   - Actualizar `NEXT_PUBLIC_TALLY_URL` en Vercel

## 📊 Monitoreo y Analytics

### Métricas Importantes

1. **Conversión de Calculadora**:
   - Usuarios que completan el cálculo
   - Tiempo promedio en la calculadora
   - Valores más utilizados

2. **Captura de Leads**:
   - Tasa de conversión del modal
   - Fuente de los leads (hero, calculadora, cierre)
   - Tiempo hasta conversión

3. **Engagement**:
   - Tiempo en página
   - Scroll depth
   - Clicks en CTAs

### Configuración de Alertas

```javascript
// Ejemplo de configuración en GA4
// Crear alertas para:
// - Caída en conversiones > 50%
// - Error rate > 5%
// - Tiempo de carga > 3s
```

## 🔍 SEO y Performance

### Verificaciones SEO

1. **Google Search Console**:
   - Verificar propiedad del dominio
   - Enviar sitemap
   - Monitorear errores de indexación

2. **Lighthouse Score**:
   - Performance: ≥90
   - Best Practices: ≥90
   - SEO: ≥90
   - Accessibility: ≥95

3. **Metatags**:
   - Verificar en herramientas como [opengraph.xyz](https://opengraph.xyz)
   - Probar en redes sociales

### Optimizaciones de Performance

1. **Imágenes**:
   - Usar formato WebP
   - Implementar lazy loading
   - Optimizar tamaños

2. **Código**:
   - Minificar CSS/JS
   - Implementar code splitting
   - Usar CDN

## 🛠️ Mantenimiento

### Actualizaciones Regulares

1. **Dependencias**:
   ```bash
   npm update
   npm audit fix
   ```

2. **Contenido**:
   - Actualizar textos en `lib/constants.ts`
   - Modificar valores por defecto de calculadora
   - Añadir nuevos casos de uso

3. **Monitoreo**:
   - Revisar logs de errores
   - Verificar métricas de performance
   - Actualizar tracking si es necesario

### Backup y Versionado

1. **Código**:
   - Usar Git para versionado
   - Crear tags para releases
   - Mantener branch de producción

2. **Datos**:
   - Backup de leads en CRM
   - Exportar datos de GA4 regularmente
   - Documentar cambios importantes

## 🚨 Troubleshooting

### Problemas Comunes

1. **Modal no se abre**:
   - Verificar que el DOM esté listo
   - Revisar errores en consola
   - Verificar configuración de eventos

2. **Tracking no funciona**:
   - Verificar GA4 Measurement ID
   - Revisar configuración de dataLayer
   - Probar en modo incógnito

3. **Formulario no envía**:
   - Verificar URLs de webhook/Tally
   - Revisar CORS configuration
   - Verificar logs del servidor

### Logs y Debugging

```bash
# Ver logs de Vercel
vercel logs

# Debug local
npm run dev
# Abrir DevTools > Console
```

## 📞 Soporte

Para problemas técnicos:
1. Revisar logs de Vercel
2. Verificar configuración de variables de entorno
3. Contactar al equipo de desarrollo

---

**Última actualización**: $(date)
