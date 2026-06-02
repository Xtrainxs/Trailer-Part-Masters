import Link from 'next/link';
import RequestQuoteCTA from '@/components/request-quote-cta';
import RangeDisclaimer from '@/components/range-disclaimer';

export const metadata = { title: 'Side-Wind Jacks' };

export default function SideWindJacks() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">Side-Wind Jacks</h1>
      <p className="text-lg text-gray-700 mb-4">
        Side-Wind jacks feature a hand crank on the side for smooth, controlled lifting and lowering. Ideal for stabilizing trailers at rest.
      </p>
      <RangeDisclaimer
        intro="Our side-wind jacks range includes:"
        items={["2,000 lb capacity","3,500 lb capacity","5,000 lb capacity","1-Speed Gear","2-Speed Gear","8\" travel","10\" travel","12\" travel","Bolt-On & Weld-On","With & Without Wheels","Zinc-Plated","Black Powder Coat","Heavy-Duty Square Tube"]}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {["1.png", "2.png", "3.png"].map((img, idx) => (
          <div
            key={img}
            className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col items-center w-full"
          >
            <img
              src={`/images/Trailer%20Jacks/Side%20Wind%20Jacks/${img}`}
              alt={`Side-Wind Jack ${idx + 1}`}
              className="h-36 w-auto object-contain mb-2"
            />
            
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-[#05203C]">Available Side-Wind Jacks</h2>
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
              <td className="py-2 px-4 border-b">BTP-SWJ-2000</td>
              <td className="py-2 px-4 border-b">Manual Side-Wind</td>
              <td className="py-2 px-4 border-b">2,000</td>
              <td className="py-2 px-4 border-b">10</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-SWJ-5000</td>
              <td className="py-2 px-4 border-b">Heavy Duty Side-Wind</td>
              <td className="py-2 px-4 border-b">5,000</td>
              <td className="py-2 px-4 border-b">12</td>
              <td className="py-2 px-4 border-b">Zinc</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-SWJ-7000</td>
              <td className="py-2 px-4 border-b">HD Side-Wind</td>
              <td className="py-2 px-4 border-b">7,000</td>
              <td className="py-2 px-4 border-b">14</td>
              <td className="py-2 px-4 border-b">Galvanized</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"Side-Wind Jacks"} />
    </div>
  );
}
