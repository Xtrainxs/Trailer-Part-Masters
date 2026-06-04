import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = {
  title: 'Trailer Adapters',
  description: 'Wholesale Trailer Adapters sourced direct from manufacturer. Bulk pricing for trailer manufacturers and stockists across Canada and the USA. Min. order CAD $5,000. Request a quote within 1-2 business days.',
};

export default function Adapters() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-ink">Trailer Adapters</h1>
      <p className="text-lg text-gray-700 mb-6">Adapters for connecting different trailer wiring systems, including 4-way, 5-way, 6-way, and 7-way configurations.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {["1.png", "2.png", "3.png", "4.png"].map((img, idx) => (
          <div
            key={img}
            className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col items-center w-full"
          >
            <img
              src={`/images/Trailer%20Adapters/${img}`}
              alt={`Trailer Adapter ${idx + 1}`}
              className="h-36 w-auto object-contain mb-2"
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
              <th className="py-2 px-4 border-b text-left">Input</th>
              <th className="py-2 px-4 border-b text-left">Output</th>
              <th className="py-2 px-4 border-b text-left">Material</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">TPM-ADP-4TO7</td>
              <td className="py-2 px-4 border-b">4-Way to 7-Way</td>
              <td className="py-2 px-4 border-b">4-pin Flat</td>
              <td className="py-2 px-4 border-b">7-pin RV</td>
              <td className="py-2 px-4 border-b">ABS Plastic</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-ADP-7TO6</td>
              <td className="py-2 px-4 border-b">7-Way to 6-Way</td>
              <td className="py-2 px-4 border-b">7-pin RV</td>
              <td className="py-2 px-4 border-b">6-pin Round</td>
              <td className="py-2 px-4 border-b">ABS Plastic</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-ADP-5TO4</td>
              <td className="py-2 px-4 border-b">5-Way to 4-Way</td>
              <td className="py-2 px-4 border-b">5-pin Flat</td>
              <td className="py-2 px-4 border-b">4-pin Flat</td>
              <td className="py-2 px-4 border-b">ABS Plastic</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-ADP-6TO4</td>
              <td className="py-2 px-4 border-b">6-Way to 4-Way</td>
              <td className="py-2 px-4 border-b">6-pin Round</td>
              <td className="py-2 px-4 border-b">4-pin Flat</td>
              <td className="py-2 px-4 border-b">ABS Plastic</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-ADP-7TO5</td>
              <td className="py-2 px-4 border-b">7-Way to 5-Way</td>
              <td className="py-2 px-4 border-b">7-pin RV</td>
              <td className="py-2 px-4 border-b">5-pin Flat</td>
              <td className="py-2 px-4 border-b">ABS Plastic</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"Trailer Adapters"} />
    </main>
  );
}

