#!/bin/bash

# Socios Coquitas Landing - Setup Script
# Este script configura el proyecto para desarrollo local

echo "🚀 Configurando Socios Coquitas Landing..."

# Verificar que Node.js esté instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instala Node.js 18+ desde https://nodejs.org"
    exit 1
fi

# Verificar versión de Node.js
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Se requiere Node.js 18 o superior. Versión actual: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detectado"

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Error al instalar dependencias"
    exit 1
fi

echo "✅ Dependencias instaladas correctamente"

# Crear archivo .env.local si no existe
if [ ! -f .env.local ]; then
    echo "📝 Creando archivo .env.local..."
    cat > .env.local << EOF
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Webhooks and Integrations
NEXT_PUBLIC_WEBHOOK_URL=https://your-n8n-webhook.com/coquitas-lead
NEXT_PUBLIC_TALLY_URL=https://tally.so/r/your-form-id

# Environment
NODE_ENV=development
EOF
    echo "✅ Archivo .env.local creado"
    echo "⚠️  Recuerda actualizar las variables de entorno en .env.local"
else
    echo "✅ Archivo .env.local ya existe"
fi

# Verificar que el proyecto compile
echo "🔨 Verificando compilación..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Error en la compilación. Revisa los errores arriba."
    exit 1
fi

echo "✅ Proyecto compila correctamente"

# Ejecutar linter
echo "🔍 Ejecutando linter..."
npm run lint

if [ $? -ne 0 ]; then
    echo "⚠️  Se encontraron errores de linting. Revisa los warnings arriba."
else
    echo "✅ Linting pasado correctamente"
fi

echo ""
echo "🎉 ¡Setup completado exitosamente!"
echo ""
echo "📋 Próximos pasos:"
echo "1. Actualiza las variables de entorno en .env.local"
echo "2. Ejecuta 'npm run dev' para iniciar el servidor de desarrollo"
echo "3. Abre http://localhost:3000 en tu navegador"
echo ""
echo "📚 Documentación:"
echo "- README.md - Documentación general"
echo "- DEPLOYMENT.md - Guía de deployment"
echo ""
echo "🚀 ¡Listo para desarrollar!"
