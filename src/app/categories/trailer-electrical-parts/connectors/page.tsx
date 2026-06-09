import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = {
  title: 'Trailer Connectors',
  description: 'Wholesale Trailer Connectors sourced direct from manufacturer. Bulk pricing for trailer manufacturers and stockists across Canada and the USA. Request a quote within 1-2 business days.',
};

export default function Connectors() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-ink">Trailer Connectors</h1>
      <p className="text-lg text-gray-700 mb-6">Connectors for trailer wiring, including flat, round, and RV styles for secure electrical connections.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {["1.png", "2.png", "3.png", "4.png", "5.png"].map((img, idx) => (
          <div
            key={img}
            className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col items-center w-full"
          >
            <img
              src={`/images/Trailer%20Connectors/${img}`}
              alt={`Trailer Connector ${idx + 1}`}
              className="h-44 w-full object-contain mb-2"
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
              <th className="py-2 px-4 border-b text-left">Pins</th>
              <th className="py-2 px-4 border-b text-left">Style</th>
              <th className="py-2 px-4 border-b text-left">Material</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">TPM-CON-4FLAT</td>
              <td className="py-2 px-4 border-b">Flat</td>
              <td className="py-2 px-4 border-b">4</td>
              <td className="py-2 px-4 border-b">Flat</td>
              <td className="py-2 px-4 border-b">Nylon</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-CON-7RV</td>
              <td className="py-2 px-4 border-b">RV</td>
              <td className="py-2 px-4 border-b">7</td>
              <td className="py-2 px-4 border-b">Round</td>
              <td className="py-2 px-4 border-b">Aluminum</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-CON-5FLAT</td>
              <td className="py-2 px-4 border-b">Flat</td>
              <td className="py-2 px-4 border-b">5</td>
              <td className="py-2 px-4 border-b">Flat</td>
              <td className="py-2 px-4 border-b">Nylon</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-CON-6ROUND</td>
              <td className="py-2 px-4 border-b">Round</td>
              <td className="py-2 px-4 border-b">6</td>
              <td className="py-2 px-4 border-b">Round</td>
              <td className="py-2 px-4 border-b">Aluminum</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-CON-7BLADE</td>
              <td className="py-2 px-4 border-b">Blade</td>
              <td className="py-2 px-4 border-b">7</td>
              <td className="py-2 px-4 border-b">Blade</td>
              <td className="py-2 px-4 border-b">Nylon</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"Trailer Connectors"} />
    </main>
  );
}

