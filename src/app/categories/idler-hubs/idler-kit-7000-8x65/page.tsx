import Link from 'next/link';
import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = { title: 'Trailer Idler Hub & Bearing Kit for 7000 lb. Axles | 8 on 6.5\\" Bolt Pattern' };

export default function IdlerKit7000_8x65() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">Trailer Idler Hub & Bearing Kit for 7000 lb. Axles | 8 on 6.5" Bolt Pattern</h1>
      <p className="text-lg text-gray-700 mb-6">
        Premium idler hub and bearing kit for 7000 lb axles with an 8x6.5 bolt pattern.
      </p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-[#05203C]">Available 7,000 lb 8x6.5 Idler Hub Kits</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Bolt Pattern</th>
              <th className="py-2 px-4 border-b text-left">Hub Bore</th>
              <th className="py-2 px-4 border-b text-left">Stud Size</th>
              <th className="py-2 px-4 border-b text-left">Includes Bearings</th>
              <th className="py-2 px-4 border-b text-left">Material</th>
              <th className="py-2 px-4 border-b text-left">Finish</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">BTP-IHK-7000-8X65</td>
              <td className="py-2 px-4 border-b">8 on 6.5"</td>
              <td className="py-2 px-4 border-b">3.50"</td>
              <td className="py-2 px-4 border-b">9/16"</td>
              <td className="py-2 px-4 border-b">25580/25520 & 14125A/14276</td>
              <td className="py-2 px-4 border-b">Cast Iron</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-IHK-7000-8X65Z</td>
              <td className="py-2 px-4 border-b">8 on 6.5"</td>
              <td className="py-2 px-4 border-b">3.50"</td>
              <td className="py-2 px-4 border-b">9/16"</td>
              <td className="py-2 px-4 border-b">25580/25520 & 14125A/14276</td>
              <td className="py-2 px-4 border-b">Cast Iron</td>
              <td className="py-2 px-4 border-b">Zinc</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"Trailer Idler Hub & Bearing Kit for 7000 lb. Axles | 8 on 6.5\" Bolt Pattern"} />
    </div>
  );
}