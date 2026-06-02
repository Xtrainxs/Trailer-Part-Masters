      {/* Image gallery for 1 3/4" Tube (2k) Round U-bolt Kit */}
      <div className="flex flex-wrap gap-4 mb-8">
        {['Picture1.png', 'Picture2.png', 'Picture3.png'].map((img, idx) => (
          <div
            key={img}
            className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col items-center w-48"
          >
            <img
              src={`/images/U-Bolt%20Kits/Round%20U-Bolt%20Kits/2k%20Round%20U-bolt%20Kit/${encodeURIComponent(img)}`}
              alt={`1 3/4 Tube 2k Round U-bolt Kit ${idx + 1}`}
              className="h-32 w-auto object-contain mb-2"
            />
            <span className="text-slate-700 text-sm text-center break-words">
              {img.replace('.png', '').replace(/([A-Z])/g, ' $1').trim()}
            </span>
          </div>
        ))}
      </div>
import Link from "next/link";
import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = { title: '1 ¾\\" Tube (2k) Round U-bolt Kit' };

export default function RoundUBoltKit1_3_4Tube2k() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-[#05203C]">1 ¾" Tube (2k) Round U-bolt Kit</h1>
      <p className="text-lg text-gray-700 mb-6">Kit for 2,000 lb axles with 1 ¾" round tube. Includes U-bolts, nuts, and tie plates.</p>

      {/* Image gallery for 1 3/4" Tube (2k) Round U-bolt Kit */}
      <div className="flex flex-wrap gap-4 mb-8">
        {['Picture1.png', 'Picture2.png', 'Picture3.png'].map((img, idx) => (
          <div
            key={img}
            className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col items-center w-48"
          >
            <img
              src={`/images/U-Bolt%20Kits/Round%20U-Bolt%20Kits/2k%20Round%20U-bolt%20Kit/${encodeURIComponent(img)}`}
              alt={`1 3/4 Tube 2k Round U-bolt Kit ${idx + 1}`}
              className="h-32 w-auto object-contain mb-2"
            />
            <span className="text-slate-700 text-sm text-center break-words">
              {img.replace('.png', '').replace(/([A-Z])/g, ' $1').trim()}
            </span>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-2 mt-8 text-[#05203C]">Kit Specifications</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">U-bolt Size</th>
              <th className="py-2 px-4 border-b text-left">Material</th>
              <th className="py-2 px-4 border-b text-left">Finish</th>
              <th className="py-2 px-4 border-b text-left">Includes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">BTP-UBK-1.75T-2K</td>
              <td className="py-2 px-4 border-b">1 ¾" x 4 ¼" x 5/16"</td>
              <td className="py-2 px-4 border-b">Steel</td>
              <td className="py-2 px-4 border-b">Zinc</td>
              <td className="py-2 px-4 border-b">4 U-bolts, 8 nuts, 2 tie plates</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"1 ¾\" Tube (2k) Round U-bolt Kit"} />
    </main>
  );
}
