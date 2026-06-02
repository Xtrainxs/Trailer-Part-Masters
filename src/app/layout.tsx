import './globals.css';
import { ReactNode } from 'react';
import Breadcrumbs from '@/components/breadcrumbs';

export const metadata = {
  metadataBase: new URL('https://trailer-part-masters.vercel.app'),
  title: {
    default: 'Trailer Part Masters — Trailer Components Direct from Manufacturer',
    template: '%s | Trailer Part Masters',
  },
  description:
    'Trailer Part Masters (Alberta Inc.) supplies suspension, brakes, lights, jacks, couplers, hubs and hardware sourced directly from trusted global manufacturers. 25+ years of importing expertise serving North America.',
  keywords: [
    'trailer parts',
    'trailer suspension',
    'trailer brakes',
    'trailer lights',
    'trailer jacks',
    'trailer couplers',
    'idler hubs',
    'brake drums',
    'brake assemblies',
    'boat trailer parts',
    'leaf springs',
    'u-bolt kits',
    'North America trailer parts',
    'Alberta trailer parts',
  ],
  openGraph: {
    title: 'Trailer Part Masters',
    description:
      'Trailer components sourced directly from trusted global manufacturers. 25+ years of importing expertise.',
    url: 'https://trailer-part-masters.vercel.app',
    siteName: 'Trailer Part Masters',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Trailer Part Masters' }],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trailer Part Masters',
    description: 'Trailer components direct from global manufacturers.',
    images: ['/logo.png'],
  },
  icons: { icon: '/logo.png' },
  robots: { index: true, follow: true },
};

const NAV = [
  { href: '/categories', label: 'All Categories' },
  { href: '/categories/trailer-suspension-parts', label: 'Suspension' },
  { href: '/categories/brake-assemblies', label: 'Brakes' },
  { href: '/categories/trailer-lights', label: 'Lights' },
  { href: '/categories/trailer-jacks', label: 'Jacks' },
  { href: '/categories/trailer-couplers', label: 'Couplers' },
  { href: '/categories/trailer-hardware', label: 'Hardware' },
  { href: '/about', label: 'About' },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Top utility bar */}
        <div className="bg-ink text-slate-300 text-xs sm:text-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
            <span className="hidden sm:inline tracking-wide">
              Direct from manufacturer · Serving North America since 2001
            </span>
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="tel:+14038755074" className="hover:text-lime transition whitespace-nowrap">
                +1 403-875-5074
              </a>
              <a
                href="mailto:trailerpartmasters@shaw.ca"
                className="hidden sm:inline hover:text-lime transition"
              >
                trailerpartmasters@shaw.ca
              </a>
            </div>
          </div>
        </div>

        {/* Hazard stripe accent */}
        <div className="hazard-stripe h-1.5" aria-hidden="true" />

        {/* Main header / nav */}
        <header className="bg-steel sticky top-0 z-40 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4 py-3">
              <a href="/" className="flex items-center shrink-0">
                <img
                  src="/logo.png"
                  alt="Trailer Part Masters"
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </a>

              <nav className="hidden lg:flex items-center gap-1">
                {NAV.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="font-display uppercase text-sm tracking-wide text-slate-200 hover:text-lime px-3 py-2 transition"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <a href="/request-form" className="btn-lime shrink-0 text-sm px-5 py-2.5">
                Request a Quote
              </a>
            </div>

            {/* Mobile / tablet nav row */}
            <nav className="lg:hidden flex flex-wrap gap-x-4 gap-y-1 pb-3 -mt-1">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-display uppercase text-xs tracking-wide text-slate-300 hover:text-lime py-1 transition"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <Breadcrumbs />

        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-ink text-slate-300 mt-20">
          <div className="hazard-stripe h-1.5" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="lg:col-span-1">
                <img
                  src="/logo.png"
                  alt="Trailer Part Masters"
                  className="h-16 w-auto object-contain mb-4"
                />
                <p className="text-sm leading-relaxed text-slate-400">
                  Trailer components sourced directly from trusted global
                  manufacturers. 25+ years of importing expertise serving North
                  America.
                </p>
              </div>

              <div>
                <h4 className="font-display uppercase text-sm tracking-widest text-lime mb-4">
                  Shop Parts
                </h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/categories/trailer-suspension-parts" className="hover:text-lime transition">Suspension Parts</a></li>
                  <li><a href="/categories/brake-assemblies" className="hover:text-lime transition">Brake Assemblies</a></li>
                  <li><a href="/categories/trailer-lights" className="hover:text-lime transition">Trailer Lights</a></li>
                  <li><a href="/categories/trailer-jacks" className="hover:text-lime transition">Trailer Jacks</a></li>
                  <li><a href="/categories/boat-trailer-parts" className="hover:text-lime transition">Boat Trailer Parts</a></li>
                  <li><a href="/categories" className="font-semibold hover:text-lime transition">All Categories →</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-display uppercase text-sm tracking-widest text-lime mb-4">
                  Company
                </h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/about" className="hover:text-lime transition">About Us</a></li>
                  <li><a href="/request-form" className="hover:text-lime transition">Request a Quote</a></li>
                  <li><a href="/shipping-policy" className="hover:text-lime transition">Shipping Policy</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-display uppercase text-sm tracking-widest text-lime mb-4">
                  Contact
                </h4>
                <address className="not-italic text-sm space-y-3">
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-slate-500">Phone</span>
                    <a href="tel:+14038755074" className="hover:text-lime transition">+1 403-875-5074</a>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-slate-500">Email</span>
                    <a href="mailto:trailerpartmasters@shaw.ca" className="hover:text-lime transition break-all">trailerpartmasters@shaw.ca</a>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-slate-500">Address</span>
                    <span>Taralake Manor NE<br />Calgary, Alberta, Canada T3J 0N1</span>
                  </div>
                </address>
              </div>
            </div>

            <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row sm:justify-between gap-2 text-xs text-slate-500">
              <p>&copy; {new Date().getFullYear()} Trailer Part Masters (Alberta Inc.). All rights reserved.</p>
              <p>Sourced direct from global manufacturers since 2001.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
