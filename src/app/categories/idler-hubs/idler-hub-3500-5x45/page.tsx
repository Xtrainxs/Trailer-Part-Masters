import Link from 'next/link';
import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = { title: 'Trailer Idler Hub for 3,500 lb. Axles | 5 on 4.5\" Bolt Pattern' };

export default function IdlerHub3500_5x45() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">Trailer Idler Hub for 3,500 lb. Axles | 5 on 4.5" Bolt Pattern</h1>
      <p className="text-lg text-gray-700 mb-6">
        Standard idler hub compatible with 3,500 lb axles featuring a 5x4.5 bolt pattern.
      </p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Available 3,500 lb 5x4.5 Idler Hubs</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Bolt Pattern</th>
              <th className="py-2 px-4 border-b text-left">Hub Bore</th>
              <th className="py-2 px-4 border-b text-left">Stud Size</th>
              <th className="py-2 px-4 border-b text-left">Material</th>
              <th className="py-2 px-4 border-b text-left">Finish</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">TPM-IH-3500-5X45</td>
              <td className="py-2 px-4 border-b">5 on 4.5"</td>
              <td className="py-2 px-4 border-b">2.38"</td>
              <td className="py-2 px-4 border-b">1/2"</td>
              <td className="py-2 px-4 border-b">Cast Iron</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-IH-3500-5X45Z</td>
              <td className="py-2 px-4 border-b">5 on 4.5"</td>
              <td className="py-2 px-4 border-b">2.38"</td>
              <td className="py-2 px-4 border-b">1/2"</td>
              <td className="py-2 px-4 border-b">Cast Iron</td>
              <td className="py-2 px-4 border-b">Zinc</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"Trailer Idler Hub for 3,500 lb. Axles | 5 on 4.5\" Bolt Pattern"} />
    </div>
  );
}