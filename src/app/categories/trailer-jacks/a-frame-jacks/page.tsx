import Link from 'next/link';
import RequestQuoteCTA from '@/components/request-quote-cta';
import RangeDisclaimer from '@/components/range-disclaimer';

export const metadata = { title: 'A-Frame Jacks' };

export default function AFrameJacks() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-6">
        <Link href="/categories/trailer-jacks" className="text-blue-600 hover:underline">
          Back to Trailer Jacks
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-4">A-Frame Jacks</h1>
      <p className="text-lg text-gray-700 mb-4">
        A-Frame jacks are designed for trailers with A-frame tongues. These manual jacks provide reliable lifting and lowering with their distinctive A-shaped frame.
      </p>
      <RangeDisclaimer
        intro="Our A-frame jacks range includes:"
        items={["2,000 lb capacity","3,500 lb capacity","5,000 lb capacity","Top-Wind & Side-Wind","With & Without Wheels","6\" Rubber or Swivel Caster","Zinc-Plated","Black Powder Coat","Bolt-On & Weld-On","Heavy-Duty Forged models"]}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {["1.png"].map((img, idx) => (
          <div
            key={img}
            className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col items-center w-full"
          >
            <img
              src={`/images/Trailer%20Jacks/A%20Frame%20Jacks/${img}`}
              alt={`A-Frame Jack ${idx + 1}`}
              className="h-36 w-auto object-contain mb-2"
            />
            
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-[#05203C]">Available A-Frame Jacks</h2>
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
              <td className="py-2 px-4 border-b">BTP-AFJ-2000</td>
              <td className="py-2 px-4 border-b">Manual A-Frame</td>
              <td className="py-2 px-4 border-b">2,000</td>
              <td className="py-2 px-4 border-b">14</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-AFJ-5000</td>
              <td className="py-2 px-4 border-b">Heavy Duty A-Frame</td>
              <td className="py-2 px-4 border-b">5,000</td>
              <td className="py-2 px-4 border-b">15</td>
              <td className="py-2 px-4 border-b">Zinc</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-AFJ-7000</td>
              <td className="py-2 px-4 border-b">HD A-Frame</td>
              <td className="py-2 px-4 border-b">7,000</td>
              <td className="py-2 px-4 border-b">15</td>
              <td className="py-2 px-4 border-b">Galvanized</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"A-Frame Jacks"} />
    </div>
  );
}
