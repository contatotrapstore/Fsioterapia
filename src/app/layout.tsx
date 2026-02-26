import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import { SITE_CONFIG } from '@/lib/constants';
import { localBusinessSchema } from '@/lib/schema';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: `Fisioterapia Domiciliar | ${SITE_CONFIG.name} - Fisioterapeuta em Casa`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    'Fisioterapia domiciliar humanizada em Curitiba e Pinhais. Atendimento em casa para idosos, pós-operatório, reabilitação e mobilidade. Dra. Kelly Cristina Peretti — CREFITO-8/240457-F. Agende pelo WhatsApp.',
  keywords: [
    'fisioterapia domiciliar',
    'fisioterapia em casa',
    'fisioterapeuta domiciliar',
    'fisioterapia para idosos',
    'fisioterapia pós-operatória',
    'reabilitação em casa',
    'fisioterapia ortopédica',
    'fisioterapia Curitiba',
    'fisioterapeuta Curitiba',
    'fisioterapia domiciliar Curitiba',
    'fisioterapia Pinhais',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: `${SITE_CONFIG.name} - Fisioterapia Domiciliar`,
    title: `Fisioterapia Domiciliar | ${SITE_CONFIG.name}`,
    description:
      'Atendimento fisioterapêutico humanizado no conforto do seu lar.',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - Fisioterapeuta Domiciliar`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
