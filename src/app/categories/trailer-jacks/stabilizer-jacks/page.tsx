import Link from 'next/link';
import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = {
  title: 'Stabilizer Jacks',
  description: 'Wholesale Stabilizer Jacks sourced direct from manufacturer. Bulk pricing for trailer manufacturers and stockists across Canada and the USA. Request a quote within 1-2 business days.',
};

export default function StabilizerJacks() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">Stabilizer Jacks</h1>
      <p className="text-lg text-gray-700 mb-6">
        Stabilizer Jacks are designed to prevent trailer sway and movement. Lightweight and easy to install for added safety.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {["1.png", "2.png"].map((img, idx) => (
          <div
            key={img}
            className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col items-center w-full"
          >
            <img
              src={`/images/Trailer%20Jacks/Stablizer%20Jacks/${img}`}
              alt={`Stabilizer Jack ${idx + 1}`}
              className="h-36 w-auto object-contain mb-2"
            />
            
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Available Stabilizer Jacks</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Jack Type</th>
              <th className="py-2 px-4 border-b text-left">Lift Capacity (lbs)</th>
              <th className="py-2 px-4 border-b text-left">Travel (in)</th>
              <th className="py-2 px-4 border-b text-left">Finish</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">TPM-STJ-1000</td>
              <td className="py-2 px-4 border-b">Manual Stabilizer</td>
              <td className="py-2 px-4 border-b">1,000</td>
              <td className="py-2 px-4 border-b">8</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-STJ-2000</td>
              <td className="py-2 px-4 border-b">Heavy Duty Stabilizer</td>
              <td className="py-2 px-4 border-b">2,000</td>
              <td className="py-2 px-4 border-b">10</td>
              <td className="py-2 px-4 border-b">Zinc</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-STJ-3000</td>
              <td className="py-2 px-4 border-b">HD Stabilizer</td>
              <td className="py-2 px-4 border-b">3,000</td>
              <td className="py-2 px-4 border-b">12</td>
              <td className="py-2 px-4 border-b">Galvanized</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"Stabilizer Jacks"} />
    </div>
  );
}

