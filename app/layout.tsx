import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/globals/header/header";
import Footer from "@/components/globals/footer/footer";
import LayoutWrapper from "@/components/LayoutWrapper";
import { LoadingProvider } from "@/components/globals/loading-context/loading-context";
import { Tracking } from "@/components/Tracking";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

const helvetica = localFont({
  src: [
    {
      path: "../public/fonts/HelveticaNeueThin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeueUltraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeueLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeueRoman.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: '--font-helvetica',
});

const neueMontreal = localFont({
  src: [
    {
      path: "../public/fonts/NeueMontreal-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: '--font-neue-montreal',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '400'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Oakwood Legal Group - Professional Legal Services",
  description:
    "Oakwood Legal Group provides professional legal services with dedication and expertise. Contact us for your legal needs.",
  openGraph: {
    title: "Oakwood Legal Group - Professional Legal Services",
    description: "California's premier personal injury law firm. Expert legal representation for personal injury cases.",
    url: '/',
    siteName: 'Oakwood Legal Group',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Oakwood Legal Group - Professional Legal Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Oakwood Legal Group - Professional Legal Services",
    description: "California's premier personal injury law firm. Expert legal representation for personal injury cases.",
    images: ['/opengraph-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased @container font-sans ${helvetica.variable} ${neueMontreal.variable} ${inter.variable}`}>
        <LoadingProvider>
          <LayoutWrapper>
            <Header />
            {children}
            <Footer />
          </LayoutWrapper>
        </LoadingProvider>
        {process.env.NEXT_PUBLIC_GA4_ID && (
          <Tracking.GA4 GA4_ID={process.env.NEXT_PUBLIC_GA4_ID} />
        )}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <Tracking.Meta
            META_PIXEL_ID={process.env.NEXT_PUBLIC_META_PIXEL_ID}
          />
        )}
        {process.env.NEXT_PUBLIC_CALL_RAIL_SRC && (
          <Tracking.CallRail
            CALL_RAIL_SRC={process.env.NEXT_PUBLIC_CALL_RAIL_SRC}
          />
        )}
        {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && <Tracking.ReCaptchaV3 />}
        <Tracking.VercelInsights />
        <Tracking.VercelAnalytics />
      </body>
    </html>
  );
}
