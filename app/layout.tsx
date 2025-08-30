import type { Metadata } from 'next';
import Script from 'next/script'
import './globals.css';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import GAListener from './ga-listener';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Kingshot Hub',
  description: 'Guides, heroes, events, and mechanics for Kingshot.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <Suspense fallback={null}>
          <GAListener />
        </Suspense>
        <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-6">
            <Link href="/" className="font-bold text-primary text-lg">Kingshot Hub</Link>
            <nav className="text-sm flex flex-wrap gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/events/bear-hunt">Bear Hunt</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/events/viking-vengeance">Vikings</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/events/terrors">Terrors</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/mechanics/rally-rules">Rally Rules</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/territory/fertile-lands">Fertile Lands</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/heroes/chenko">Heroes</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/tools">Tools</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/alliance-notices">Notices</Link>
              </Button>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground">
          <p>
            Fan site. Not affiliated with the publisher. © {new Date().getFullYear()} Kingshot Hub.
          </p>
        </footer>
        <Toaster />
      </body>
    </html>
  );
}