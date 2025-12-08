import type { Metadata } from 'next';
import { SEO_CONFIG, SEO_PAGES } from '@/lib/constants';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://manifiesto-tau.vercel.app';

export const metadata: Metadata = {
  title: SEO_PAGES.manifiesto.title,
  description: SEO_PAGES.manifiesto.description,
  keywords: SEO_PAGES.manifiesto.keywords,
  openGraph: {
    title: SEO_PAGES.manifiesto.title,
    description: SEO_PAGES.manifiesto.description,
    url: `${baseUrl}/manifiesto`,
    type: 'website',
    images: [
      {
        url: SEO_CONFIG.ogImageAbsolute,
        width: 1200,
        height: 630,
        alt: SEO_PAGES.manifiesto.title,
      },
    ],
  },
  twitter: {
    card: SEO_CONFIG.twitterCard,
    title: SEO_PAGES.manifiesto.title,
    description: SEO_PAGES.manifiesto.description,
    images: [SEO_CONFIG.ogImageAbsolute],
  },
  alternates: {
    canonical: `${baseUrl}/manifiesto`,
  },
};

export default function ManifiestoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
