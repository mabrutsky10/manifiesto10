# Especificaciones de Imágenes para ImageComparison

## Ancho del Contenedor

El componente `ImageComparison` ahora usa el mismo ancho que las secciones superiores:
- **Contenedor máximo**: `max-w-7xl` = **1280px** (Tailwind)
- **Padding del contenedor**: 
  - Mobile: `px-4` = 16px cada lado
  - Tablet (sm): `px-6` = 24px cada lado  
  - Desktop (lg): `px-8` = 32px cada lado

**Ancho disponible real:**
- Mobile: ~1248px
- Tablet: ~1232px
- Desktop: ~1216px

## Relación de Aspecto Recomendada

**Relación de aspecto: 16:9** (estándar web)

Esta relación es ideal porque:
- Es el estándar más común para contenido web
- Se adapta bien a diferentes tamaños de pantalla
- Mantiene buena legibilidad en desktop y mobile
- Es compatible con la mayoría de dispositivos

## Resoluciones Recomendadas

### Opción 1: Resolución Estándar (Recomendada)
**1920 x 1080px (16:9)**
- ✅ Excelente calidad para web
- ✅ Tamaño de archivo razonable
- ✅ Se adapta perfectamente al contenedor
- ✅ Compatible con pantallas Retina (2x)

### Opción 2: Resolución Optimizada para el Contenedor
**1280 x 720px (16:9)**
- ✅ Tamaño exacto del contenedor máximo
- ✅ Archivo más pequeño, carga más rápida
- ✅ Suficiente para la mayoría de pantallas
- ⚠️ Puede verse pixelada en pantallas Retina

### Opción 3: Resolución Retina/High-DPI (Máxima Calidad)
**2560 x 1440px (16:9)**
- ✅ Calidad perfecta en pantallas Retina (2x)
- ✅ Futuro-proof para pantallas de alta densidad
- ⚠️ Archivo más grande, carga más lenta
- ⚠️ Puede ser excesivo para la mayoría de casos

## Relación de Aspecto Alternativa

Si prefieres una relación más cuadrada (mejor para mostrar equipos completos):

**16:10 (1.6:1)**
- Resolución recomendada: **1920 x 1200px**
- Ventaja: Muestra más altura, ideal para grupos de personas
- Desventaja: Menos estándar que 16:9

## Formato de Archivo

- **Formato**: PNG (para transparencias) o JPG/WebP (para menor tamaño)
- **Compresión**: Optimizar imágenes antes de subir
- **Calidad**: 85-90% para JPG, calidad máxima para PNG

## Herramientas Recomendadas

1. **Para redimensionar**: ImageMagick, Photoshop, GIMP, o herramientas online
2. **Para optimizar**: 
   - TinyPNG / TinyJPG
   - ImageOptim (Mac)
   - Squoosh (web)

## Comando para Redimensionar (ImageMagick)

```bash
# Redimensionar a 1920x1080 manteniendo relación de aspecto
convert input.png -resize 1920x1080^ -gravity center -extent 1920x1080 output.png

# O con crop centrado
convert input.png -resize 1920x1080 -gravity center -crop 1920x1080+0+0 output.png
```

## Resumen de Recomendación Final

**Resolución ideal: 1920 x 1080px (16:9)**
- Formato: PNG (si necesitas transparencia) o WebP (para mejor compresión)
- Optimizar antes de subir
- Ambas imágenes deben tener exactamente las mismas dimensiones


