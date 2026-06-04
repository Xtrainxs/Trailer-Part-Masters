import React from "react";

type PageProps = {
  searchParams?: { part?: string };
};

export default function RequestFormPage({ searchParams }: PageProps) {
  const partFromUrl = searchParams?.part?.trim();
  const prefilledDetails = partFromUrl
    ? `I'm interested in: ${partFromUrl}\n\n(Please share specs, quantity, and any preferences below.)`
    : '';

  const inputClass =
    "w-full px-3 py-2.5 rounded-md border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-ink focus:outline-none focus:ring-1 focus:ring-lime-dark transition";
  const labelClass = "block font-semibold text-sm mb-1 text-slate-700";

  return (
    <div className="max-w-2xl mx-auto px-6 py-14">
      <header className="text-center mb-10">
        <div className="mb-6 flex items-center justify-center">
          <span className="inline-flex bg-ink rounded-xl px-6 py-4 shadow-sm">
            <img
              src="/logo.png"
              alt="Trailer Part Masters logo"
              className="max-h-20 sm:max-h-24 w-auto object-contain"
            />
          </span>
        </div>
        <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-lime-dark mb-3">
          Wholesale Quote Request
        </p>
        <h1
          className="font-display uppercase text-4xl sm:text-5xl font-bold text-ink tracking-tight"
        >
          Request a Wholesale Quote
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-base text-slate-600 leading-relaxed">
          We supply trailer manufacturers, wholesalers, and stockists across Canada
          and the USA. Send us your parts list and quantities &mdash; we&apos;ll
          respond with factory-direct pricing within 1&ndash;2 business days.
        </p>
      </header>

      {/* B2B trust bar */}
      <section className="bg-ink text-white rounded-sm px-6 py-5 mb-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm">
        <div>
          <p className="font-display uppercase font-bold text-base text-lime">25+ Years</p>
          <p className="text-slate-300">Importing direct from manufacturers</p>
        </div>
        <div>
          <p className="font-display uppercase font-bold text-base text-lime">Min. Order CAD $5,000</p>
          <p className="text-slate-300">Factory-direct pricing at scale</p>
        </div>
        <div>
          <p className="font-display uppercase font-bold text-base text-lime">Canada &amp; USA</p>
          <p className="text-slate-300">Manufacturers &amp; stockists served</p>
        </div>
      </section>

      <div className="border-y border-slate-200 py-6 mb-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-sm">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-lime-dark mb-1">Phone</p>
          <a href="tel:+14038755074" className="text-ink hover:text-lime-dark font-medium transition">
            +1 403-875-5074
          </a>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-lime-dark mb-1">Email</p>
          <a href="mailto:trailerpartmasters@shaw.ca" className="text-ink hover:text-lime-dark font-medium break-all transition">
            trailerpartmasters@shaw.ca
          </a>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-lime-dark mb-1">Address</p>
          <p className="text-ink font-medium leading-snug">
            Taralake Manor NE<br />Calgary, AB, Canada
          </p>
        </div>
      </div>

      <form
        action="https://formspree.io/f/xnjyavqd"
        method="POST"
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        <input type="hidden" name="_subject" value="New quote request from Trailer Part Masters website" />
        <input type="hidden" name="_next" value="https://trailerpartmasters.vercel.app/request-form/thanks" />
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div>
          <label htmlFor="name" className={labelClass}>Name</label>
          <input id="name" name="name" type="text" placeholder="Your full name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>Company <span className="text-red-500">*</span></label>
          <input id="company" name="company" type="text" placeholder="Your company name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone</label>
          <input id="phone" name="phone" type="tel" placeholder="+1 (___) ___-____" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="category" className={labelClass}>Part Category</label>
          <select id="category" name="category" required className={inputClass}>
            <option value="">Select a category</option>
            <option>Jacks</option>
            <option>Couplers</option>
            <option>Brakes</option>
            <option>Suspension</option>
            <option>Lights &amp; Electrical</option>
            <option>Winches</option>
            <option>Hitches &amp; Towing</option>
            <option>Hardware &amp; Accessories</option>
          </select>
          <p className="text-xs text-slate-500 mt-1">Choose the main category that best matches your request.</p>
        </div>
        <div>
          <label htmlFor="capacity" className={labelClass}>Trailer Capacity</label>
          <input id="capacity" name="capacity" type="text" placeholder="e.g. 3,500 lbs, 7,000 lbs" className={inputClass} />
        </div>
        <div>
          <label htmlFor="quantity" className={labelClass}>Estimated Quantity</label>
          <input id="quantity" name="quantity" type="number" min="1" placeholder="e.g. 50" className={inputClass} />
          <p className="text-xs text-slate-500 mt-1">Minimum order value: CAD $5,000.</p>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="details" className={labelClass}>Part Details / Description</label>
          <textarea
            id="details"
            name="details"
            defaultValue={prefilledDetails}
            placeholder="Describe the parts you need, axle rating, suspension type, or any part numbers you have."
            className={`${inputClass} min-h-[110px] resize-y`}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="notes" className={labelClass}>Additional Notes</label>
          <textarea
            id="notes"
            name="notes"
            placeholder="Delivery timelines, preferred brands, or other requirements."
            className={`${inputClass} min-h-[90px] resize-y`}
          />
        </div>
        <div className="sm:col-span-2 flex justify-end mt-2">
          <button type="submit" className="btn-lime">
            Submit Request
          </button>
        </div>
      </form>

      <section className="mt-14 bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8">
        <h2
          className="font-display uppercase text-lg sm:text-xl font-bold text-ink mb-6 text-center"
        >
          What happens next?
        </h2>
        <ol className="space-y-5">
          <li className="flex gap-4 items-start">
            <span className="flex-none w-8 h-8 rounded-full bg-ink text-white text-sm font-semibold flex items-center justify-center">
              1
            </span>
            <div className="flex-1">
              <p className="font-semibold text-ink">We receive your request</p>
              <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                Usually within 30 seconds. You&apos;ll see a confirmation page right
                away.
              </p>
            </div>
          </li>
          <li className="flex gap-4 items-start">
            <span className="flex-none w-8 h-8 rounded-full bg-ink text-white text-sm font-semibold flex items-center justify-center">
              2
            </span>
            <div className="flex-1">
              <p className="font-semibold text-ink">We match it to a supplier and quote</p>
              <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                We check pricing, lead time, and availability across our vetted
                manufacturer network and send you a landed-cost quote within
                1&ndash;2 business days.
              </p>
            </div>
          </li>
          <li className="flex gap-4 items-start">
            <span className="flex-none w-8 h-8 rounded-full bg-ink text-white text-sm font-semibold flex items-center justify-center">
              3
            </span>
            <div className="flex-1">
              <p className="font-semibold text-ink">Order confirmed &rarr; shipment arranged</p>
              <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                Once you approve the quote, we place the order with the factory.
                Most shipments travel by ocean freight and arrive in
                6&ndash;10 weeks from order confirmation. We confirm the exact
                timeline in your quote.
              </p>
            </div>
          </li>
        </ol>
        <p className="mt-7 pt-6 border-t border-slate-200 text-sm text-slate-600 text-center">
          Time-sensitive?{' '}
          <a
            href="tel:+14038755074"
            className="text-lime-dark hover:underline font-medium"
          >
            Call us directly at +1 403-875-5074
          </a>
          .
        </p>
      </section>

      <p className="mt-10 text-xs text-slate-500 text-center">
        25 years of importing experience. Trusted suppliers. Competitive pricing.
      </p>
    </div>
  );
}
