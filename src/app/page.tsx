import CategoryCard from '@/components/category-card';
import CategoryIcon from '@/components/category-icon';

export const metadata = {
  alternates: { canonical: '/' },
};

const featured = [
  { name: 'Suspension Parts', href: '/categories/trailer-suspension-parts', icon: 'suspension', description: 'Leaf springs, hangers, equalizers, shackles, bushings, U-bolt kits.' },
  { name: 'Brake Assemblies', href: '/categories/brake-assemblies', icon: 'brakes', description: '10" and 12" hydraulic and electric brake assemblies.' },
  { name: 'Brake Drums', href: '/categories/brake-drums', icon: 'drums', description: 'Drum kits for 2,000–7,000 lb axles in common bolt patterns.' },
  { name: 'Idler Hubs', href: '/categories/idler-hubs', icon: 'hubs', description: 'Hub and bearing kits sized to your axle rating and bolt pattern.' },
  { name: 'Trailer Lights', href: '/categories/trailer-lights', icon: 'lights', description: 'LED and incandescent tail, marker, license plate, and work lights.' },
  { name: 'Electrical Parts', href: '/categories/trailer-electrical-parts', icon: 'electrical', description: 'Adapters, connectors, harnesses, junction and battery boxes.' },
  { name: 'Trailer Jacks', href: '/categories/trailer-jacks', icon: 'jacks', description: 'A-frame, side-wind, top-wind, swivel, electric, stabilizer jacks.' },
  { name: 'Couplers', href: '/categories/trailer-couplers', icon: 'couplers', description: 'Straight tongue, A-frame, channel, gooseneck, adjustable couplers.' },
  { name: 'Trailer Hardware', href: '/categories/trailer-hardware', icon: 'hardware', description: 'E-tracks, D-rings, hinges, latches, chains, bolts, ramps, chocks.' },
  { name: 'Boat Trailer Parts', href: '/categories/boat-trailer-parts', icon: 'boat', description: 'Winches, rollers, bunks, guides, safety chains, marine hardware.' },
];

const marquee = [
  'Leaf Springs', 'Brake Drums', 'Idler Hubs', 'LED Lights', 'U-Bolt Kits',
  'Equalizers', 'Couplers', 'Electric Jacks', 'Wiring Harnesses', 'Shackles',
  'Hydraulic Brakes', 'D-Rings', 'Winches', 'Bushings',
];

export default function Home() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="bg-ink text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] hazard-stripe" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <span className="eyebrow">Wholesale Trailer Components · Direct from Manufacturer</span>
            <h1 className="mt-4 font-display uppercase font-bold leading-[0.95] tracking-tight text-5xl sm:text-6xl lg:text-7xl">
              Built for the
              <span className="text-lime"> long haul.</span>
            </h1>
            <p className="mt-5 font-display uppercase tracking-[0.15em] text-lime text-lg sm:text-xl">
              Master Every Part of the Haul
            </p>
            <p className="mt-5 max-w-xl text-lg text-slate-300 leading-relaxed">
              Wholesale suspension, brakes, lights, jacks, couplers and hardware
              sourced direct from the factories — no distributor markup. Serving
              trailer manufacturers and stockists across Canada and the USA since 2001.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <a href="/request-form" className="btn-lime">Request a Wholesale Quote</a>
              <a href="/categories" className="btn-outline border-white text-white hover:bg-white hover:text-ink">
                Browse the Catalog
              </a>
              <a href="tel:+14038755074" className="btn-outline border-lime text-lime hover:bg-lime hover:text-ink">
                Call +1 403-875-5074
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Quote within 1&ndash;2 business days
            </p>
          </div>
        </div>

        {/* Rolling part marquee */}
        <div className="relative border-t border-white/10 bg-steel/60 py-3 overflow-hidden">
          <div className="marquee-track flex whitespace-nowrap">
            {[...marquee, ...marquee].map((part, i) => (
              <span key={i} className="flex items-center font-display uppercase text-sm tracking-widest text-slate-400 px-6">
                <span className="text-lime mr-6">◆</span>{part}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUST STATS ===== */}
      <section className="bg-white border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-line">
          {[
            { stat: '25+', label: 'Years importing expertise' },
            { stat: '10', label: 'Major part categories' },
            { stat: '3', label: 'Countries served' },
            { stat: '1–2', label: 'Day quote turnaround' },
          ].map((s) => (
            <div key={s.label} className="py-8 px-4 text-center">
              <p className="font-display text-4xl sm:text-5xl text-ink">
                {s.stat}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CATEGORY GRID ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="eyebrow">The Catalog</span>
            <h2 className="mt-2 font-display uppercase text-3xl sm:text-4xl text-ink tracking-tight">
              Shop by Category
            </h2>
          </div>
          <a href="/categories" className="font-display uppercase text-sm tracking-wide text-lime-dark hover:text-ink transition">
            View all categories &rarr;
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {featured.map((c) => (
            <CategoryCard key={c.name} {...c} />
          ))}
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="bg-white border-y border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <span className="eyebrow">No Middleman</span>
            <h2 className="mt-2 font-display uppercase text-3xl sm:text-4xl text-ink tracking-tight">
              How We Work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { n: '01', t: 'Tell us what you need', d: 'Send your specs, axle rating, or part numbers through a quick quote request — or just call.' },
              { n: '02', t: 'We match a supplier', d: 'We check stock, lead time, and pricing across our vetted manufacturer network in Asia.' },
              { n: '03', t: 'You get importer pricing', d: 'A clear quote within 1–2 business days, with the landed cost where possible. No surprises.' },
            ].map((step) => (
              <div key={step.n} className="relative bg-concrete border border-line rounded-sm p-7">
                <span className="font-display text-5xl text-lime/60 leading-none">{step.n}</span>
                <h3 className="mt-3 font-display uppercase text-xl text-ink tracking-wide">{step.t}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VALUE / WHY ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            { icon: 'hardware', t: 'Direct from the factory', d: 'We buy from the same factories most resellers do — and skip the distributor markup entirely.' },
            { icon: 'brakes', t: 'Vetted for quality', d: 'No supplier joins our network without proving quality, lead times, and consistency across orders.' },
            { icon: 'couplers', t: 'One point of contact', d: 'The person you talk to knows both the product and the supplier behind it — order after order.' },
          ].map((f) => (
            <div key={f.t} className="flex gap-5 p-7 bg-white border border-line rounded-sm">
              <span className="shrink-0 flex items-center justify-center w-14 h-14 rounded-sm bg-ink text-lime">
                <CategoryIcon name={f.icon} className="w-7 h-7" />
              </span>
              <div>
                <h3 className="font-display uppercase text-lg text-ink tracking-wide">{f.t}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="bg-lime">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display uppercase text-3xl sm:text-4xl text-ink tracking-tight leading-tight">
              Know the part? Get a quote.
            </h2>
            <p className="mt-2 text-ink/80 max-w-xl">
              Send your specs and we&apos;ll match you with the right manufacturer
              within 1–2 business days.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a href="/request-form" className="btn-dark">Request a Quote</a>
            <a href="tel:+14038755074" className="btn-outline">Call +1 403-875-5074</a>
          </div>
        </div>
      </section>
    </div>
  );
}
