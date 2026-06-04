import Link from 'next/link';
import RequestQuoteCTA from '@/components/request-quote-cta';
import RangeDisclaimer from '@/components/range-disclaimer';

export const metadata = {
  title: 'Drop-Leg Jacks',
  description: 'Wholesale Drop-Leg Jacks sourced direct from manufacturer. Bulk pricing for trailer manufacturers and stockists across Canada and the USA. Min. order CAD $5,000. Request a quote within 1-2 business days.',
};

export default function DropLegJacks() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">Drop-Leg Jacks</h1>
      <p className="text-lg text-gray-700 mb-4">
        Drop-Leg jacks feature legs that extend downward for extra stability. Great for off-level surfaces and rough terrain.
      </p>
      <RangeDisclaimer
        intro="Our drop-leg jacks range includes:"
        items={["7,000 lb capacity","10,000 lb capacity","12,000 lb capacity","Manual Crank","Speed Handle","2-Speed Gear","Adjustable Drop-Leg (6\"â€“18\")","Swivel Foot Plate","Fixed Foot Plate","Bolt-On mounting","Zinc-Plated","Black Powder Coat"]}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {["1.png", "2.png", "3.png"].map((img, idx) => (
          <div
            key={img}
            className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col items-center w-full"
          >
            <img
              src={`/images/Trailer%20Jacks/Drop%20Leg%20Jacks/${img}`}
              alt={`Drop-Leg Jack ${idx + 1}`}
              className="h-36 w-auto object-contain mb-2"
            />
            
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Available Drop-Leg Jacks</h2>
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
              <td className="py-2 px-4 border-b">TPM-DLJ-5000</td>
              <td className="py-2 px-4 border-b">Manual Drop-Leg</td>
              <td className="py-2 px-4 border-b">5,000</td>
              <td className="py-2 px-4 border-b">12</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-DLJ-7000</td>
              <td className="py-2 px-4 border-b">Heavy Duty Drop-Leg</td>
              <td className="py-2 px-4 border-b">7,000</td>
              <td className="py-2 px-4 border-b">14</td>
              <td className="py-2 px-4 border-b">Zinc</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-DLJ-10000</td>
              <td className="py-2 px-4 border-b">HD Drop-Leg</td>
              <td className="py-2 px-4 border-b">10,000</td>
              <td className="py-2 px-4 border-b">16</td>
              <td className="py-2 px-4 border-b">Galvanized</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"Drop-Leg Jacks"} />
    </div>
  );
}

