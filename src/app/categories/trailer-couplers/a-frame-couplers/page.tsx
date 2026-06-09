import Link from 'next/link';
import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = {
  title: 'A-Frame Couplers',
  description: 'Wholesale A-Frame Couplers sourced direct from manufacturer. Bulk pricing for trailer manufacturers and stockists across Canada and the USA. Request a quote within 1-2 business days.',
};

export default function AFrameCouplers() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">A-Frame Couplers</h1>
      <p className="text-lg text-gray-700 mb-6">
        A-frame couplers are designed for trailers with A-frame tongues, offering enhanced stability and strength.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {["1.png", "2.png", "3.png", "4.png"].map((img, idx) => (
          <div
            key={img}
            className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col items-center w-full"
          >
            <img
              src={`/images/Couplers/A%20Frame%20Couplers/${img}`}
              alt={`A-Frame Coupler ${idx + 1}`}
              className="h-36 w-auto object-contain mb-2"
            />
            
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Available A-Frame Couplers</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Coupler Type</th>
              <th className="py-2 px-4 border-b text-left">Ball Size</th>
              <th className="py-2 px-4 border-b text-left">Capacity (lbs)</th>
              <th className="py-2 px-4 border-b text-left">Finish</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">TPM-AFC-2000</td>
              <td className="py-2 px-4 border-b">Standard A-Frame</td>
              <td className="py-2 px-4 border-b">2"</td>
              <td className="py-2 px-4 border-b">2,000</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-AFC-5000</td>
              <td className="py-2 px-4 border-b">Heavy Duty A-Frame</td>
              <td className="py-2 px-4 border-b">2-5/16"</td>
              <td className="py-2 px-4 border-b">5,000</td>
              <td className="py-2 px-4 border-b">Zinc</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-AFC-7000</td>
              <td className="py-2 px-4 border-b">HD A-Frame</td>
              <td className="py-2 px-4 border-b">2-5/16"</td>
              <td className="py-2 px-4 border-b">7,000</td>
              <td className="py-2 px-4 border-b">Galvanized</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"A-Frame Couplers"} />
    </div>
  );
}
