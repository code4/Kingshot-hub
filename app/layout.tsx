import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/toaster'
import GAListener from './ga-listener'
import { Suspense } from 'react'
import SiteHeader from '@/components/SiteHeader';

export const metadata: Metadata = {
  title: 'Kingshot Hub',
  description: 'Guides, heroes, events, and mechanics for Kingshot.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  return (
    <html lang="en">
      <head>
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        ) : null}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <Suspense fallback={null}>
          <GAListener />
        </Suspense>
        <SiteHeader />
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground">
          <p>
            Fan site. Not affiliated with the publisher. ©{' '}
            {new Date().getFullYear()} Kingshot Hub.
          </p>
        </footer>
        <Toaster />
      </body>
    </html>
  )
}
