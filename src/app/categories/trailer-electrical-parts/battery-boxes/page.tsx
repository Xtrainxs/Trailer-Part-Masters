import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = {
  title: 'Battery Boxes',
  description: 'Wholesale Battery Boxes sourced direct from manufacturer. Bulk pricing for trailer manufacturers and stockists across Canada and the USA. Request a quote within 1-2 business days.',
};

export default function BatteryBoxes() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-ink">Battery Boxes</h1>
      <p className="text-lg text-gray-700 mb-6">Battery boxes for secure mounting and protection of trailer batteries.</p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Product Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Type</th>
              <th className="py-2 px-4 border-b text-left">Battery Size</th>
              <th className="py-2 px-4 border-b text-left">Material</th>
              <th className="py-2 px-4 border-b text-left">Features</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">TPM-BBX-GROUP24</td>
              <td className="py-2 px-4 border-b">Group 24</td>
              <td className="py-2 px-4 border-b">24</td>
              <td className="py-2 px-4 border-b">Polypropylene</td>
              <td className="py-2 px-4 border-b">Ventilated, mounting hardware</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-BBX-GROUP27</td>
              <td className="py-2 px-4 border-b">Group 27</td>
              <td className="py-2 px-4 border-b">27</td>
              <td className="py-2 px-4 border-b">Polypropylene</td>
              <td className="py-2 px-4 border-b">Ventilated, mounting hardware</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"Battery Boxes"} />
    </main>
  );
}

