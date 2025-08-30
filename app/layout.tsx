import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kingshot Hub',
  description: 'Guides, heroes, events, and mechanics for Kingshot.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
        <header className="sticky top-0 z-50 border-b bg-white/80 dark:bg-slate-950/80 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-6">
            <Link href="/" className="font-bold text-brand-600">Kingshot Hub</Link>
            <nav className="text-sm flex flex-wrap gap-4">
              <Link href="/events/bear-hunt">Bear Hunt</Link>
              <Link href="/events/viking-vengeance">Vikings</Link>
              <Link href="/events/terrors">Terrors</Link>
              <Link href="/mechanics/rally-rules">Rally Rules</Link>
              <Link href="/territory/fertile-lands">Fertile Lands</Link>
              <Link href="/heroes/chenko">Heroes</Link>
              <Link href="/tools">Tools</Link>
              <Link href="/alliance-notices">Notices</Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <footer className="mx-auto max-w-6xl px-4 py-10 text-sm opacity-70">
          <p>
            Fan site. Not affiliated with the publisher. © {new Date().getFullYear()} Kingshot Hub.
          </p>
        </footer>
      </body>
    </html>
  );
}