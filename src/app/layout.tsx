import './globals.css';
import { ReactNode } from 'react';
import Breadcrumbs from '@/components/breadcrumbs';
import CatalogNav from '@/components/catalog-nav';

export const metadata = {
  metadataBase: new URL('https://trailerpartmasters.vercel.app'),
  title: {
    default: 'Wholesale Trailer Parts Direct from Manufacturer | Trailer Part Masters',
    template: '%s | Trailer Part Masters',
  },
  description:
    'Wholesale trailer parts sourced direct from manufacturers in Asia — no distributor markup. Suspension, brakes, lights, hubs, couplers, jacks and hardware. Serving trailer manufacturers and stockists across Canada and the USA since 2001.',
  keywords: [
    'wholesale trailer parts',
    'bulk trailer parts Canada',
    'trailer parts manufacturer direct',
    'trailer suspension wholesale',
    'trailer brake parts bulk',
    'trailer lights wholesale',
    'trailer jacks bulk order',
    'trailer couplers wholesale',
    'idler hubs wholesale',
    'brake drums bulk',
    'trailer hardware wholesale',
    'trailer parts importer Canada',
    'direct from manufacturer trailer parts',
    'OEM trailer components Alberta',
  ],
  openGraph: {
    title: 'Wholesale Trailer Parts Direct from Manufacturer | Trailer Part Masters',
    description:
      'Wholesale trailer components sourced direct from manufacturers. No distributor markup. Serving trailer manufacturers and stockists across Canada and USA since 2001.',
    url: 'https://trailerpartmasters.vercel.app',
    siteName: 'Trailer Part Masters',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Trailer Part Masters' }],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wholesale Trailer Parts Direct from Manufacturer | Trailer Part Masters',
    description: 'Wholesale trailer components direct from manufacturers. No distributor markup. Canada and USA.',
    images: ['/logo.png'],
  },
  robots: { index: true, follow: true },
  verification: { google: 'Vngq4aZLhX71gDZqulVHg1K43LlSNAj9OzbOruOY5I8' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Trailer Part Masters',
  alternateName: 'Trailer Part Masters (Alberta Inc.)',
  url: 'https://trailerpartmasters.vercel.app',
  logo: 'https://trailerpartmasters.vercel.app/logo.png',
  foundingDate: '2001',
  description:
    'Wholesale trailer parts sourced direct from manufacturers in Asia. Serving trailer manufacturers, wholesalers, and stockists across Canada and the USA since 2001.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Calgary',
    addressRegion: 'AB',
    addressCountry: 'CA',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-403-875-5074',
    contactType: 'sales',
    areaServed: ['CA', 'US'],
    availableLanguage: 'English',
  },
  areaServed: ['Canada', 'United States'],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Top utility bar */}
        <div className="bg-ink text-slate-300 text-xs sm:text-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
            <span className="hidden sm:inline tracking-wide">
              <span className="font-display uppercase text-lime">Master Every Part of the Haul</span>
              <span className="text-slate-500"> · Serving North America since 2001</span>
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
                <CatalogNav />
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
            <nav className="lg:hidden flex flex-wrap items-center gap-x-4 gap-y-1 pb-3 -mt-1">
              <CatalogNav />
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
                  className="h-16 w-auto object-contain mb-3"
                />
                <p className="font-display uppercase text-lime tracking-wide text-sm mb-4">
                  Master Every Part of the Haul
                </p>
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
                    <span>Trailer Part Masters<br />Calgary, Alberta, CANADA</span>
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
