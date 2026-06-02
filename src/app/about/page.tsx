export const metadata = {
  title: 'About Us',
  description:
    'Trailer Part Masters (Alberta Inc.) has supplied trailer manufacturers, repair shops, and wholesale distributors across North America since 2000. Founded by Terry, drawing on four decades of trailer-component experience.',
};

const stats = [
  { stat: '2000', label: 'Founded' },
  { stat: '40+', label: 'Years of industry experience' },
  { stat: 'USA · CAN · MEX', label: 'Customers across North America' },
];

export default function AboutPage() {
  return (
    <div>
      {/* Header band */}
      <section className="bg-ink text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <span className="eyebrow">About Trailer Part Masters</span>
          <h1 className="mt-3 font-display uppercase text-4xl sm:text-5xl tracking-tight leading-[1.05]">
            A small company built on long relationships.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
            Trailer Part Masters has supplied trailer manufacturers, repair shops,
            and wholesale distributors across North America since 2000. Behind every
            order is a network of vetted overseas factories and four decades of
            practical experience moving freight, managing customs, and matching the
            right part to the right job.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stat band */}
        <section className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-line border border-line rounded-sm bg-white mb-16">
          {stats.map((s) => (
            <div key={s.label} className="py-8 px-4 text-center">
              <p className="font-display text-3xl sm:text-4xl text-ink">{s.stat}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                {s.label}
              </p>
            </div>
          ))}
        </section>

        <article className="space-y-12 text-slate-700 leading-relaxed text-base sm:text-lg">
          <section>
            <h2 className="font-display uppercase text-2xl sm:text-3xl text-ink mb-4 border-l-4 border-lime pl-4">
              Our story
            </h2>
            <p className="mb-4">
              Trailer Part Masters was founded in the year 2000 by Terry, who began
              working with truck and trailer components in the mid-1980s. After more
              than a decade in the industry, Terry built the company around two ideas
              that still define it: trusted supplier relationships matter more than
              catalog size, and a smaller company can outperform a bigger one when
              every order gets personal attention.
            </p>
            <p>
              Twenty-five years later, Trailer Part Masters works directly with
              manufacturers in Asia to source suspension, brakes, lights, jacks,
              couplers, and hardware for customers across three countries. We
              don&apos;t try to be the biggest catalog. We try to be the most
              reliable.
            </p>
          </section>

          <section>
            <h2 className="font-display uppercase text-2xl sm:text-3xl text-ink mb-4 border-l-4 border-lime pl-4">
              How we work
            </h2>
            <p className="mb-4">
              We are a direct-import operation. Instead of buying from middle
              distributors, we work with the same factories that supply most North
              American trailer-parts retailers &mdash; and we pass importer pricing
              on to our customers.
            </p>
            <p>
              We&apos;ve spent years vetting the suppliers we use. We don&apos;t add a
              manufacturer to our network without testing their quality, lead times,
              and consistency over multiple orders. For our customers, that means
              competitive pricing, predictable shipments, and a single point of
              contact who knows both the product and the supplier behind it.
            </p>
          </section>

          <section>
            <h2 className="font-display uppercase text-2xl sm:text-3xl text-ink mb-4 border-l-4 border-lime pl-4">
              Who we serve
            </h2>
            <p>
              Trailer manufacturers building from the ground up. Repair shops and
              dealerships sourcing replacement components. Wholesale distributors
              stocking their warehouses. Operators across the USA, Canada, and Mexico.
              Every order &mdash; whether it&apos;s a single part for a custom build or
              a full container for a distributor &mdash; gets the same attention.
            </p>
          </section>

          <section>
            <h2 className="font-display uppercase text-2xl sm:text-3xl text-ink mb-4 border-l-4 border-lime pl-4">
              What we promise
            </h2>
            <p>
              Quality you can resell with confidence. Honest timelines, with no
              surprises at the customs window. Continuity &mdash; the person you talk
              to today will be there when you place your next order. After
              twenty-five years, those are the things that have built the business.
            </p>
          </section>
        </article>

        {/* CTA */}
        <section className="mt-16 bg-ink text-white rounded-sm p-8 sm:p-12 text-center">
          <h3 className="font-display uppercase text-2xl sm:text-3xl mb-3 tracking-tight">
            Need help finding the right part?
          </h3>
          <p className="text-slate-300 mb-7 max-w-xl mx-auto leading-relaxed">
            Browse the catalog or tell us your specs &mdash; we&apos;ll match you with
            the right manufacturer and send a quote within 1&ndash;2 business days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/categories" className="btn-lime">Browse Categories</a>
            <a href="/request-form" className="btn-outline border-white text-white hover:bg-white hover:text-ink">
              Request a Quote
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
