import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import LiveChatWidget from "@/components/LiveChatWidget";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Eldorado Tech | Solusi IT & Software Development Premium",
    template: "%s | Eldorado Tech"
  },
  description: "Eldorado Tech adalah agensi pengembangan perangkat lunak terkemuka di Purwokerto. Kami ahli dalam Web Development, Mobile Apps, UI/UX Design, dan Cloud Infrastructure.",
  keywords: ["Software House", "Web Development Purwokerto", "IT Consultant", "Pembuatan Aplikasi", "Cloud Infrastructure", "Eldorado Tech"],
  authors: [{ name: "Eldorado Tech Team" }],
  creator: "Eldorado Tech",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://eldoradotech.com", // Ganti dengan domain asli nanti
    title: "Eldorado Tech | Solusi IT & Software Development Premium",
    description: "Agensi pengembangan perangkat lunak terkemuka untuk membantu transformasi digital bisnis Anda.",
    siteName: "Eldorado Tech",
    images: [{
      url: "https://eldoradotech.com/og-image.jpg", // Ganti dengan URL gambar asli nanti
      width: 1200,
      height: 630,
      alt: "Eldorado Tech Banner"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eldorado Tech | Solusi IT & Software Development Premium",
    description: "Agensi pengembangan perangkat lunak terkemuka untuk membantu transformasi digital bisnis Anda.",
    creator: "@eldoradotech",
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

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          {children}
          <LiveChatWidget />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
