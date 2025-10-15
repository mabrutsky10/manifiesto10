import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SEO_CONFIG } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: SEO_CONFIG.title,
  description: SEO_CONFIG.description,
  keywords: SEO_CONFIG.keywords,
  authors: [{ name: '+10' }],
  openGraph: {
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    type: 'website',
    locale: 'es_AR',
    siteName: 'Socios Coquitas',
    images: [
      {
        url: SEO_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SEO_CONFIG.title,
      },
    ],
  },
  twitter: {
    card: SEO_CONFIG.twitterCard,
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    images: [SEO_CONFIG.ogImage],
  },
  robots: {
    index: false, // Set to true when ready for production
    follow: true,
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
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
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: 'Socios Coquitas',
              description: SEO_CONFIG.description,
              brand: {
                '@type': 'Organization',
                name: '+10',
              },
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'ARS',
                availability: 'https://schema.org/InStock',
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

