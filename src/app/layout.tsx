import './globals.css';
import { ReactNode } from 'react';
import Breadcrumbs from '@/components/breadcrumbs';

export const metadata = {
  metadataBase: new URL('https://trailer-part-masters.vercel.app'),
  title: {
    default: 'Trailer Part Masters â€” Premium Components Direct from Global Manufacturers',
    template: '%s | Trailer Part Masters',
  },
  description:
    'Premium trailer parts sourced directly from trusted global manufacturers. 25+ years of importing expertise serving customers across North America. Suspension, brakes, lights, jacks, couplers, hubs, and more.',
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
  ],
  openGraph: {
    title: 'Trailer Part Masters',
    description:
      'Premium trailer components sourced directly from trusted global manufacturers. 25+ years of importing expertise.',
    url: 'https://trailer-part-masters.vercel.app',
    siteName: 'Trailer Part Masters',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Trailer Part Masters' }],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trailer Part Masters',
    description: 'Premium trailer components direct from global manufacturers.',
    images: ['/logo.png'],
  },
  icons: { icon: '/logo.png' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#FAFAFA] text-slate-900 min-h-screen">
        <header className="bg-[#05203C] shadow">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5">
              <a href="/" className="block self-center">
                <img
                  src="/logo.png"
                  alt="Trailer Part Masters logo"
                  className="max-h-24 sm:max-h-28 w-auto object-contain"
                />
              </a>
              <div className="flex flex-col gap-3 sm:items-end">
                <nav className="flex flex-wrap justify-center sm:justify-end items-center gap-3 sm:gap-6 mt-2 sm:mt-0">
                  <a href="/categories" className="text-base sm:text-lg text-sky-300 font-semibold hover:text-white px-2 py-1 rounded transition">All Categories</a>
                  <a href="/categories/trailer-suspension-parts" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Suspension Parts</a>
                  <a href="/categories/trailer-lights" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Trailer Lights</a>
                  <a href="/categories/trailer-electrical-parts" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Electrical Parts</a>
                  <a href="/categories/trailer-jacks" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Trailer Jacks</a>
                  <a href="/categories/trailer-couplers" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Couplers</a>
                  <a href="/categories/idler-hubs" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Idler Hubs</a>
                  <a href="/categories/brake-drums" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Brake Drums</a>
                  <a href="/categories/brake-assemblies" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Brake Assemblies</a>
                  <a href="/categories/trailer-hardware" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Trailer Hardware</a>
                  <a href="/categories/boat-trailer-parts" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Boat Trailer Parts</a>
                  <a href="/about" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">About Us</a>
                  <a href="/request-form" className="text-base sm:text-lg text-white hover:text-sky-300 px-2 py-1 rounded transition">Request Form</a>
                </nav>
                <div className="text-white text-sm sm:text-base leading-relaxed text-center sm:text-right sm:self-end">
                  <div>
                    Phone: <a href="tel:+14038755074" className="underline hover:text-sky-300">+1 403-875-5074</a>
                  </div>
                  <div className="whitespace-nowrap">
                    Email: <a href="mailto:trailerpartmasters@shaw.ca" className="underline hover:text-sky-300 whitespace-nowrap">trailerpartmasters@shaw.ca</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Breadcrumbs />
        <main className="min-h-[calc(100vh-6rem)]">{children}</main>
        <footer className="bg-[#05203C] text-white mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div>
                <h3 className="text-xl font-bold mb-3">Trailer Part Masters</h3>
                <p className="text-sm text-sky-100 leading-relaxed">
                  Premium trailer components sourced directly from trusted global manufacturers.
                  25+ years of importing expertise serving North America.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-sky-300 mb-3">
                  Shop Categories
                </h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/categories/trailer-suspension-parts" className="hover:text-sky-300 transition">Suspension Parts</a></li>
                  <li><a href="/categories/trailer-lights" className="hover:text-sky-300 transition">Trailer Lights</a></li>
                  <li><a href="/categories/trailer-electrical-parts" className="hover:text-sky-300 transition">Electrical Parts</a></li>
                  <li><a href="/categories/trailer-jacks" className="hover:text-sky-300 transition">Trailer Jacks</a></li>
                  <li><a href="/categories/boat-trailer-parts" className="hover:text-sky-300 transition">Boat Trailer Parts</a></li>
                  <li><a href="/categories" className="hover:text-sky-300 transition font-semibold">View all categories â†’</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-sky-300 mb-3">
                  Company
                </h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/about" className="hover:text-sky-300 transition">About Us</a></li>
                  <li><a href="/request-form" className="hover:text-sky-300 transition">Request a Quote</a></li>
                  <li><a href="/shipping-policy" className="hover:text-sky-300 transition">Shipping Policy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-sky-300 mb-3">
                  Contact
                </h4>
                <address className="not-italic text-sm space-y-2 leading-relaxed">
                  <div>
                    <span className="block text-sky-300">Phone</span>
                    <a href="tel:+14038755074" className="hover:text-sky-300 transition">+1 403-875-5074</a>
                  </div>
                  <div>
                    <span className="block text-sky-300">Email</span>
                    <a href="mailto:trailerpartmasters@shaw.ca" className="hover:text-sky-300 transition break-all">trailerpartmasters@shaw.ca</a>
                  </div>
                  <div>
                    <span className="block text-sky-300">Address</span>
                    <span>Taralake Manor NE<br />Calgary, Alberta, Canada T3J 0N1</span>
                  </div>
                </address>
              </div>
            </div>
            <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row sm:justify-between gap-3 text-xs text-sky-200">
              <p>&copy; {new Date().getFullYear()} Trailer Part Masters. All rights reserved.</p>
              <p>Sourced direct from global manufacturers since 2001.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
