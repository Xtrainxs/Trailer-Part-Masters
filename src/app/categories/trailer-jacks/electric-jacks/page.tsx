import Link from 'next/link';
import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = {
  title: 'Electric Jacks',
  description: 'Wholesale Electric Jacks sourced direct from manufacturer. Bulk pricing for trailer manufacturers and stockists across Canada and the USA. Min. order CAD $5,000. Request a quote within 1-2 business days.',
};

export default function ElectricJacks() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">Electric Jacks</h1>
      <p className="text-lg text-gray-700 mb-6">
        Electric Jacks provide motorized lifting and lowering with minimal effort. Perfect for heavy trailers and frequent use scenarios.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {["1.png", "2.png", "3.png", "4.png"].map((img, idx) => (
          <div
            key={img}
            className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col items-center w-full"
          >
            <img
              src={`/images/Trailer%20Jacks/Electric%20Jacks/${img}`}
              alt={`Electric Jack ${idx + 1}`}
              className="h-36 w-auto object-contain mb-2"
            />
            
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Available Electric Jacks</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Jack Type</th>
              <th className="py-2 px-4 border-b text-left">Lift Capacity (lbs)</th>
              <th className="py-2 px-4 border-b text-left">Travel (in)</th>
              <th className="py-2 px-4 border-b text-left">Voltage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">TPM-EJ-3500</td>
              <td className="py-2 px-4 border-b">Standard Electric</td>
              <td className="py-2 px-4 border-b">3,500</td>
              <td className="py-2 px-4 border-b">18</td>
              <td className="py-2 px-4 border-b">12V</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-EJ-5000</td>
              <td className="py-2 px-4 border-b">Heavy Duty Electric</td>
              <td className="py-2 px-4 border-b">5,000</td>
              <td className="py-2 px-4 border-b">20</td>
              <td className="py-2 px-4 border-b">12V</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-EJ-7000</td>
              <td className="py-2 px-4 border-b">HD Electric</td>
              <td className="py-2 px-4 border-b">7,000</td>
              <td className="py-2 px-4 border-b">22</td>
              <td className="py-2 px-4 border-b">24V</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"Electric Jacks"} />
    </div>
  );
}

