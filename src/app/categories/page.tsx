import Link from 'next/link';
import { catalog } from '@/lib/catalog';

export const metadata = {
  title: 'Wholesale Trailer Parts by Category — Suspension, Brakes, Lights & More',
  description:
    'Browse wholesale trailer parts by category: suspension, brake drums, brake assemblies, idler hubs, lights, jacks, couplers, electrical, hardware, and boat trailer parts. Direct-from-manufacturer pricing for trailer manufacturers and stockists.',
};

export default function CategoriesPage() {
  return (
    <div>
      {/* Page header band */}
      <section className="bg-ink text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <span className="eyebrow">The Catalog</span>
          <h1 className="mt-3 font-display uppercase text-4xl sm:text-5xl tracking-tight">
            Browse the Full Catalog
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300 leading-relaxed">
            Every category and product line on one page — jump straight to what you
            need. Suspension, brakes, lights, jacks, couplers, hardware, and more,
            sourced direct from the manufacturer.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {catalog.map((cat) => (
            <section
              key={cat.href}
              className="flex flex-col bg-white border border-line rounded-sm overflow-hidden hover:border-ink transition-colors"
            >
              <Link
                href={cat.href}
                className="group flex items-center gap-3 px-5 py-4 bg-ink text-white hover:bg-steel transition-colors"
              >
                <span className="text-xl" aria-hidden="true">{cat.icon}</span>
                <span className="font-display uppercase tracking-wide leading-tight">{cat.name}</span>
                <span className="ml-auto text-lime group-hover:translate-x-0.5 transition-transform" aria-hidden="true">→</span>
              </Link>

              <div className="flex-1 p-5">
                {cat.subcategories.length > 0 ? (
                  <ul className="space-y-1.5">
                    {cat.subcategories.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          className="flex items-center text-sm text-slate-700 hover:text-lime-dark hover:underline transition leading-snug"
                        >
                          <span className="text-lime mr-2" aria-hidden="true">›</span>
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-slate-500 leading-relaxed">{cat.blurb}</p>
                )}
              </div>

              <Link
                href={cat.href}
                className="px-5 py-3 border-t border-line font-display uppercase text-xs tracking-widest text-slate-400 hover:text-lime-dark transition"
              >
                View all {cat.name} →
              </Link>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-lime rounded-sm p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <h2 className="font-display uppercase text-2xl sm:text-3xl text-ink tracking-tight">
              Can&apos;t find your part?
            </h2>
            <p className="mt-1 text-ink/80">Tell us the specs — we&apos;ll source it for you.</p>
          </div>
          <a href="/request-form" className="btn-dark shrink-0">Request a Quote</a>
        </div>
      </main>
    </div>
  );
}
