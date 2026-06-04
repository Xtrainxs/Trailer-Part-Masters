import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = {
  title: 'Wiring & Connector Kits',
  description: 'Wholesale Wiring & Connector Kits sourced direct from manufacturer. Bulk pricing for trailer manufacturers and stockists across Canada and the USA. Min. order CAD $5,000. Request a quote within 1-2 business days.',
};

export default function WiringConnectorKits() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-ink">Wiring & Connector Kits</h1>
      <p className="text-lg text-gray-700 mb-6">Complete wiring and connector kits for trailer lights. Includes harnesses, plugs, and junction boxes for easy installation.</p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Product Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Type</th>
              <th className="py-2 px-4 border-b text-left">Length</th>
              <th className="py-2 px-4 border-b text-left">Connectors</th>
              <th className="py-2 px-4 border-b text-left">Includes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">TPM-WCK-4WAY</td>
              <td className="py-2 px-4 border-b">4-Way Flat</td>
              <td className="py-2 px-4 border-b">25 ft</td>
              <td className="py-2 px-4 border-b">4-pin</td>
              <td className="py-2 px-4 border-b">Harness, plug, junction box</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-WCK-7WAY</td>
              <td className="py-2 px-4 border-b">7-Way RV</td>
              <td className="py-2 px-4 border-b">20 ft</td>
              <td className="py-2 px-4 border-b">7-pin</td>
              <td className="py-2 px-4 border-b">Harness, plug, junction box</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"Wiring & Connector Kits"} />
    </main>
  );
}

