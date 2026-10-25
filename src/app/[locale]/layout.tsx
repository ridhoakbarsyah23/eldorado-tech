import type { Metadata, Viewport } from "next";
import { Calistoga, Geist_Mono, Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';

import { notFound } from 'next/navigation';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const calistoga = Calistoga({
  variable: "--font-calistoga",
  weight: "400",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://eldoradotech.com"),
  title: {
    default: "Eldorado Tech | Software Development & Digital Solutions",
    template: "%s | Eldorado Tech"
  },
  description: "Software house berbasis di Purwokerto untuk pengembangan web, aplikasi mobile, desain UI/UX, dan infrastruktur cloud.",
  keywords: ["Software House", "Web Development Purwokerto", "IT Consultant", "Pembuatan Aplikasi", "Cloud Infrastructure", "Eldorado Tech"],
  authors: [{ name: "Eldorado Tech" }],
  creator: "Eldorado Tech",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/id",
    title: "Eldorado Tech | Software Development & Digital Solutions",
    description: "Solusi pengembangan perangkat lunak untuk membantu bisnis membangun produk digital yang cepat, aman, dan mudah digunakan.",
    siteName: "Eldorado Tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eldorado Tech | Software Development & Digital Solutions",
    description: "Solusi pengembangan perangkat lunak untuk produk digital yang cepat, aman, dan mudah digunakan.",
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

export const viewport: Viewport = {
  themeColor: "#f8fafc",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!routing.locales.some((supportedLocale) => supportedLocale === locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${calistoga.variable} ${geistMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
