import type { Metadata } from 'next';
import { SEO_CONFIG, SEO_PAGES } from '@/lib/constants';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://manifiesto-tau.vercel.app';

export const metadata: Metadata = {
  title: SEO_PAGES.socios.title,
  description: SEO_PAGES.socios.description,
  keywords: SEO_PAGES.socios.keywords,
  openGraph: {
    title: SEO_PAGES.socios.title,
    description: SEO_PAGES.socios.description,
    url: `${baseUrl}/socios`,
    type: 'website',
    images: [
      {
        url: SEO_CONFIG.ogImageAbsolute,
        width: 1200,
        height: 630,
        alt: SEO_PAGES.socios.title,
      },
    ],
  },
  twitter: {
    card: SEO_CONFIG.twitterCard,
    title: SEO_PAGES.socios.title,
    description: SEO_PAGES.socios.description,
    images: [SEO_CONFIG.ogImageAbsolute],
  },
  alternates: {
    canonical: `${baseUrl}/socios`,
  },
};

export default function SociosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
