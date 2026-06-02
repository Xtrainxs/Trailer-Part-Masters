export const metadata = {
  title: 'About Us',
  description:
    'Trailer Part Masters has supplied trailer manufacturers, repair shops, and wholesale distributors across North America since 2000. Founded by Terry, drawing on four decades of trailer-component experience.',
};

export default function AboutPage() {
  const serifHeading = { fontFamily: "'Playfair Display', Georgia, serif" } as const;

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <header className="text-center mb-14">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-sky-700 mb-4">
          About Trailer Part Masters
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold text-[#05203C] tracking-tight leading-[1.1]"
          style={serifHeading}
        >
          A small company built on long relationships.
        </h1>
      </header>

      <p className="text-lg sm:text-xl text-slate-700 leading-relaxed mb-14">
        Trailer Part Masters has supplied trailer manufacturers, repair shops, and
        wholesale distributors across North America since 2000. Behind every order
        is a network of vetted overseas factories and four decades of practical
        experience moving freight, managing customs, and matching the right part to
        the right job.
      </p>

      <section className="border-y border-slate-200 py-8 mb-14 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div>
          <p className="text-3xl font-bold text-[#05203C]" style={serifHeading}>
            2000
          </p>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-2">
            Founded
          </p>
        </div>
        <div>
          <p className="text-3xl font-bold text-[#05203C]" style={serifHeading}>
            40+
          </p>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-2">
            Years of industry experience
          </p>
        </div>
        <div>
          <p className="text-3xl font-bold text-[#05203C]" style={serifHeading}>
            USA &middot; CAN &middot; MEX
          </p>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-2">
            Customers across North America
          </p>
        </div>
      </section>

      <article className="space-y-14 text-slate-800 leading-relaxed text-base sm:text-lg">
        <section>
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#05203C] mb-4"
            style={serifHeading}
          >
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
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#05203C] mb-4"
            style={serifHeading}
          >
            How we work
          </h2>
          <p className="mb-4">
            We are a direct-import operation. Instead of buying from middle
            distributors, we work with the same factories that supply most North
            American trailer-parts retailers &mdash; and we pass importer pricing on
            to our customers.
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
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#05203C] mb-4"
            style={serifHeading}
          >
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
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#05203C] mb-4"
            style={serifHeading}
          >
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

      <section className="mt-16 bg-[#05203C] text-white rounded-xl p-8 sm:p-12 text-center shadow-md">
        <h3
          className="text-2xl sm:text-3xl font-bold mb-3"
          style={serifHeading}
        >
          Need help finding the right part?
        </h3>
        <p className="text-sky-100 mb-7 max-w-xl mx-auto leading-relaxed">
          Browse the catalog or tell us your specs &mdash; we&apos;ll match you with
          the right manufacturer and send a quote within 1&ndash;2 business days.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/categories"
            className="px-8 py-3 bg-white text-[#05203C] rounded-md font-semibold shadow-sm hover:bg-sky-100 transition"
          >
            Browse Categories
          </a>
          <a
            href="/request-form"
            className="px-8 py-3 border-2 border-white text-white rounded-md font-semibold hover:bg-white hover:text-[#05203C] transition"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </div>
  );
}
