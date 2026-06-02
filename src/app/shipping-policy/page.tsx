export const metadata = {
  title: 'Shipping Policy',
  description:
    'How orders ship from our global manufacturer network, typical transit times, customs handling, and damage/return policy.',
};

export default function ShippingPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-12 text-center">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-sky-700 mb-4">
          Policy
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold text-[#05203C] tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Shipping Policy
        </h1>
        <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Trailer Part Masters works directly with manufacturers in China and India, and
          most orders ship from those suppliers straight to your door. This gives you
          importer pricing without the middleman markup &mdash; but it does mean
          transit times and customs work differently than buying from a local
          retailer. This page covers what to expect.
        </p>
      </header>

      <article className="space-y-12 text-slate-800 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-[#05203C] mb-3">How orders ship</h2>
          <p className="mb-4">
            Orders typically move by one of three methods, depending on size and urgency:
          </p>
          <ul className="space-y-2 list-disc pl-6">
            <li>
              <strong>Sea freight (LCL or FCL)</strong> &mdash; most economical for
              medium and large orders. The slowest option.
            </li>
            <li>
              <strong>Air freight</strong> &mdash; faster, used for smaller or
              time-sensitive shipments.
            </li>
            <li>
              <strong>Express courier (DHL, FedEx, UPS)</strong> &mdash; fastest, used
              for samples and small parts.
            </li>
          </ul>
          <p className="mt-4">
            The right method depends on your order quantity, destination, and timeline.
            We confirm the shipping method on your quote.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#05203C] mb-3">
            Typical transit times
          </h2>
          <p className="mb-4">
            These are <em>typical ranges</em>, not guarantees &mdash; actual times vary
            by port, season, customs processing, and carrier.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-slate-200 rounded-lg">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-[#05203C]">
                    Method
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-[#05203C]">
                    Transit time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200">
                  <td className="py-3 px-4">Sea freight</td>
                  <td className="py-3 px-4">25&ndash;45 days</td>
                </tr>
                <tr className="border-t border-slate-200">
                  <td className="py-3 px-4">Air freight</td>
                  <td className="py-3 px-4">7&ndash;14 days</td>
                </tr>
                <tr className="border-t border-slate-200">
                  <td className="py-3 px-4">Express courier</td>
                  <td className="py-3 px-4">3&ndash;7 days</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            Transit time starts from when your order leaves the supplier&apos;s
            facility, not the day you place the order. Production and consolidation can
            add 5&ndash;14 days on top of transit. If you have a firm deadline, mention
            it when you request a quote so we can match the right method.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#05203C] mb-3">Shipping costs</h2>
          <p>
            Shipping is quoted per order based on size, weight, destination, and
            method. We don&apos;t publish a flat rate because direct-from-supplier
            shipping costs depend too much on the specific shipment to fairly average.
            Your quote includes the total landed cost where possible &mdash; the price
            you see is the price you pay.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#05203C] mb-3">
            Customs and duties
          </h2>
          <p className="mb-4">
            Shipments arriving in North America from overseas suppliers are subject to
            customs duties and taxes. Our default arrangement:
          </p>
          <ul className="space-y-2 list-disc pl-6">
            <li>
              <strong>Larger commercial shipments (sea freight, large air):</strong>{' '}
              the customer of record handles customs clearance and pays duties and
              taxes directly to the carrier or customs broker.
            </li>
            <li>
              <strong>Express courier and small parcels:</strong> customs is typically
              handled by the courier and billed to the recipient on delivery.
            </li>
          </ul>
          <p className="mt-4">
            We can recommend a customs broker if you don&apos;t have one. Tariffs on
            trailer components from China currently include the U.S. Section 301
            surcharge for U.S.-destined orders; quotes for those orders include an
            estimate where possible.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#05203C] mb-3">
            Damage or loss in transit
          </h2>
          <p className="mb-4">Inspect your shipment before signing for it.</p>
          <ul className="space-y-2 list-disc pl-6">
            <li>
              If a carton is damaged on arrival, note it on the delivery receipt and
              photograph it before signing.
            </li>
            <li>
              For sea freight, file any damage claim with the carrier within 5 business
              days.
            </li>
            <li>
              For express courier, report damage to the courier within 24 hours of
              delivery.
            </li>
          </ul>
          <p className="mt-4">
            Contact us immediately if a shipment is damaged or short &mdash; we&apos;ll
            help coordinate replacements or claims with the supplier.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#05203C] mb-3">Returns</h2>
          <p className="mb-4">
            Because parts ship directly from overseas suppliers, returns are handled
            case-by-case:
          </p>
          <ul className="space-y-2 list-disc pl-6">
            <li>
              <strong>Manufacturing defects</strong> are covered by the supplier&apos;s
              warranty; we coordinate replacement or credit.
            </li>
            <li>
              <strong>Wrong part shipped</strong> is covered; return shipping is
              arranged at our cost.
            </li>
            <li>
              <strong>Buyer&apos;s remorse or change of mind</strong> &mdash; returns
              are not typically accepted on overseas shipments because return freight
              costs more than the parts.
            </li>
          </ul>
          <p className="mt-4">
            We&apos;d much rather get the order right the first time. If you&apos;re
            unsure which part fits, share your trailer specs in the quote request and
            we&apos;ll confirm before placing the order.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#05203C] mb-3">Questions</h2>
          <p>
            Every shipment is a little different. If you have specific timing,
            destination, or customs questions, share the details in a{' '}
            <a href="/request-form" className="text-sky-700 hover:underline font-medium">
              quote request
            </a>{' '}
            and we&apos;ll address them in our response &mdash; or call{' '}
            <a href="tel:+14038755074" className="text-sky-700 hover:underline font-medium">
              +1 403-875-5074
            </a>
            .
          </p>
        </section>

        <p className="text-xs text-slate-500 pt-8 border-t border-slate-200">
          This policy is informational and may be updated. Specific terms applying to
          your order are confirmed in writing at the time of quote.
        </p>
      </article>
    </div>
  );
}
