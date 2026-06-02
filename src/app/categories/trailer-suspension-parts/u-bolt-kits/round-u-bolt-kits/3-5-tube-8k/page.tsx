import Link from "next/link";
import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = { title: '3.5\\" Tube (8k) Round U-bolt Kit' };

export default function RoundUBoltKit3_5Tube8k() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-[#05203C]">3.5" Tube (8k) Round U-bolt Kit</h1>
      <p className="text-lg text-gray-700 mb-6">Kit for 8,000 lb axles with 3.5" round tube. Includes U-bolts, nuts, and tie plates.</p>
      <div className="flex flex-wrap gap-4 mb-8">
        {[
          "8k Round U-Bolt Kit - 1.png",
          "8k Round U-Bolt Kit - 2.png",
          "8k Round U-Bolt Kit.png",
        ].map((img, idx) => (
          <div
            key={img}
            className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col items-center w-56"
          >
            <img
              src={`/images/U-Bolt%20Kits/Round%20U-Bolt%20Kits/8k%20Round%20U-bolt%20Kit/${encodeURIComponent(img)}`}
              alt={`8k Round U-bolt Kit ${idx + 1}`}
              className="h-36 w-auto object-contain mb-2"
            />
            <span className="text-slate-700 text-sm text-center break-words">{img}</span>
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
                    <td className="py-2 px-4 border-b">BTP-UBK-3.5T-8K</td>
              <td className="py-2 px-4 border-b">3.5" x 7 ¼" x 7/16"</td>
              <td className="py-2 px-4 border-b">Steel</td>
              <td className="py-2 px-4 border-b">Zinc</td>
              <td className="py-2 px-4 border-b">4 U-bolts, 8 nuts, 2 tie plates</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"3.5\" Tube (8k) Round U-bolt Kit"} />
    </main>
  );
}
