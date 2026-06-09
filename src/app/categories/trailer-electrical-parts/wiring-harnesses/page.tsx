import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = {
  title: 'Wiring Harnesses',
  description: 'Wholesale Wiring Harnesses sourced direct from manufacturer. Bulk pricing for trailer manufacturers and stockists across Canada and the USA. Request a quote within 1-2 business days.',
};

export default function WiringHarnesses() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-ink">Wiring Harnesses</h1>
      <p className="text-lg text-gray-700 mb-6">Pre-assembled wiring harnesses for trailers, available in various lengths and pin configurations.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {["1.png", "2.png", "3.png", "4.png"].map((img, idx) => (
          <div
            key={img}
            className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col items-center w-full"
          >
            <img
              src={`/images/Wiring%20Harness/${img}`}
              alt={`Wiring Harness ${idx + 1}`}
              className={idx < 2 ? "h-56 w-full object-contain mb-2" : "h-36 w-auto object-contain mb-2"}
            />
            
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Product Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Type</th>
              <th className="py-2 px-4 border-b text-left">Length</th>
              <th className="py-2 px-4 border-b text-left">Pins</th>
              <th className="py-2 px-4 border-b text-left">Includes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">TPM-WH-4WAY25</td>
              <td className="py-2 px-4 border-b">4-Way Flat</td>
              <td className="py-2 px-4 border-b">25 ft</td>
              <td className="py-2 px-4 border-b">4</td>
              <td className="py-2 px-4 border-b">Harness, connectors</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-WH-7WAY20</td>
              <td className="py-2 px-4 border-b">7-Way RV</td>
              <td className="py-2 px-4 border-b">20 ft</td>
              <td className="py-2 px-4 border-b">7</td>
              <td className="py-2 px-4 border-b">Harness, connectors</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-WH-5WAY30</td>
              <td className="py-2 px-4 border-b">5-Way Flat</td>
              <td className="py-2 px-4 border-b">30 ft</td>
              <td className="py-2 px-4 border-b">5</td>
              <td className="py-2 px-4 border-b">Harness, connectors</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-WH-6ROUND18</td>
              <td className="py-2 px-4 border-b">6-Way Round</td>
              <td className="py-2 px-4 border-b">18 ft</td>
              <td className="py-2 px-4 border-b">6</td>
              <td className="py-2 px-4 border-b">Harness, connectors</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-WH-7BLADE22</td>
              <td className="py-2 px-4 border-b">7-Way Blade</td>
              <td className="py-2 px-4 border-b">22 ft</td>
              <td className="py-2 px-4 border-b">7</td>
              <td className="py-2 px-4 border-b">Harness, connectors</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"Wiring Harnesses"} />
    </main>
  );
}

