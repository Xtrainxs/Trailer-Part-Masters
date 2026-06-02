import Link from 'next/link';
import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = { title: '10\\" Brake Drum Kit for 3,500 lb. Axles | 5 on 5.5\\" Bolt Pattern' };

export default function BrakeDrum10in3500_5x55() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">10" Brake Drum Kit for 3,500 lb. Axles | 5 on 5.5" Bolt Pattern</h1>
      <p className="text-lg text-gray-700 mb-6">Durable brake drum kit for 3,500 lb axles with a 5x5.5 bolt pattern.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {["1.png", "Kit.png"].map((img, idx) => (
          <div
            key={img}
            className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col items-center w-full"
          >
            <div className="w-[88%] rounded-md p-2 mb-2 flex justify-center bg-slate-50">
              <img
                src={`/images/Brake%20Drums/10%20Inch%20Brake%20Drum%205%20x%205.5/${encodeURIComponent(img)}`}
                alt={`10 inch brake drum kit 5x5.5 ${idx + 1}`}
                className="h-[8.4rem] w-full object-contain object-center"
              />
            </div>
            
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-[#05203C]">Available Kits</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Drum Diameter</th>
              <th className="py-2 px-4 border-b text-left">Bolt Pattern</th>
              <th className="py-2 px-4 border-b text-left">Includes Bearings</th>
              <th className="py-2 px-4 border-b text-left">Material</th>
              <th className="py-2 px-4 border-b text-left">Finish</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">BTP-BDK-10IN-3500-5X55</td>
              <td className="py-2 px-4 border-b">10"</td>
              <td className="py-2 px-4 border-b">5 on 5.5"</td>
              <td className="py-2 px-4 border-b">L68149/L68111 & L44649/L44610</td>
              <td className="py-2 px-4 border-b">Cast Iron</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"10\" Brake Drum Kit for 3,500 lb. Axles | 5 on 5.5\" Bolt Pattern"} />
    </div>
  );
}
