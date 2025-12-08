import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SEO_CONFIG, SEO_PAGES } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] });

// Helper para obtener la URL base
const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://manifiesto-tau.vercel.app';
};

const baseUrl = getBaseUrl();

// Metadata para la página Home (por defecto) - Comparadores PRO vs AMATEUR
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SEO_PAGES.home.title, // Usar metadata específica de home (comparadores)
    template: '%s | Manifiesto +10',
  },
  description: SEO_PAGES.home.description, // Descripción enfocada en comparadores
  keywords: SEO_PAGES.home.keywords,
  authors: [{ name: '+10', url: baseUrl }],
  creator: '+10',
  publisher: '+10',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: SEO_CONFIG.type,
    locale: SEO_CONFIG.locale,
    url: baseUrl,
    siteName: SEO_CONFIG.siteName,
    title: SEO_PAGES.home.title, // Título enfocado en comparadores PRO vs AMATEUR
    description: SEO_PAGES.home.description,
    images: [
      {
        url: SEO_CONFIG.ogImageAbsolute,
        width: 1200,
        height: 630,
        alt: SEO_PAGES.home.title,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: SEO_CONFIG.twitterCard,
    title: SEO_PAGES.home.title,
    description: SEO_PAGES.home.description,
    images: [SEO_CONFIG.ogImageAbsolute],
    creator: '@mas10ar', // Actualizar con el handle real de Twitter
  },
  robots: {
    index: false, // Set to true when ready for production
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
  alternates: {
    canonical: baseUrl,
  },
  category: 'Deportes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        
        {/* JSON-LD Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: '+10',
              url: baseUrl,
              logo: `${baseUrl}/img/m10-logo.png`,
              description: SEO_CONFIG.description,
              sameAs: [
                // Agregar redes sociales cuando estén disponibles
                // 'https://twitter.com/mas10ar',
                // 'https://facebook.com/mas10ar',
                // 'https://instagram.com/mas10ar',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                areaServed: 'AR',
                availableLanguage: 'Spanish',
              },
            }),
          }}
        />
        {/* JSON-LD Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: SEO_CONFIG.siteName,
              url: baseUrl,
              description: SEO_CONFIG.description,
              publisher: {
                '@type': 'Organization',
                name: '+10',
              },
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: `${baseUrl}/search?q={search_term_string}`,
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

