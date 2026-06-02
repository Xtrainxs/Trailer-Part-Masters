import Link from 'next/link';
import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = { title: 'Trailer Idler Hub & Bearing Kit for 3,500 lb. Axles | 5 on 5\\" Bolt Pattern' };

export default function IdlerKit3500_5x5() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">Trailer Idler Hub & Bearing Kit for 3,500 lb. Axles | 5 on 5" Bolt Pattern</h1>
      <p className="text-lg text-gray-700 mb-6">
        Durable idler hub and bearing kit for 3,500 lb axles with a 5x5 bolt pattern.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {["1.png", "2.png", "Kit.png"].map((img, idx) => (
          <div
            key={img}
            className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col items-center w-full"
          >
            <img
              src={`/images/Idler%20Hubs/3500Lbs.%205%20x%205%20Bolt/${img}`}
              alt={`Idler Hub 3500Lbs 5x5 ${idx + 1}`}
              className="h-36 w-auto object-contain mb-2"
            />
            
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-[#05203C]">Available 3,500 lb 5x5 Idler Hub Kits</h2>
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
              <td className="py-2 px-4 border-b">BTP-IHK-3500-5X5</td>
              <td className="py-2 px-4 border-b">5 on 5"</td>
              <td className="py-2 px-4 border-b">2.38"</td>
              <td className="py-2 px-4 border-b">1/2"</td>
              <td className="py-2 px-4 border-b">L68149/L68111 & L44649/L44610</td>
              <td className="py-2 px-4 border-b">Cast Iron</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-IHK-3500-5X5Z</td>
              <td className="py-2 px-4 border-b">5 on 5"</td>
              <td className="py-2 px-4 border-b">2.38"</td>
              <td className="py-2 px-4 border-b">1/2"</td>
              <td className="py-2 px-4 border-b">L68149/L68111 & L44649/L44610</td>
              <td className="py-2 px-4 border-b">Cast Iron</td>
              <td className="py-2 px-4 border-b">Zinc</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"Trailer Idler Hub & Bearing Kit for 3,500 lb. Axles | 5 on 5\" Bolt Pattern"} />
    </div>
  );
}