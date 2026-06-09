import Link from "next/link";
import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = { title: 'Trailer Idler Hub for 2,000 lb. Axles | 4 on 4\" Bolt Pattern' };

export default function IdlerHub2000_4x4() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-6">
        <Link href="/categories/idler-hubs" className="text-lime-dark font-semibold uppercase text-xs tracking-wide hover:underline">
          Back to Idler Hubs
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-4">Trailer Idler Hub for 2,000 lb. Axles | 4 on 4" Bolt Pattern</h1>
      <p className="text-lg text-gray-700 mb-6">
        Standard idler hub compatible with 2,000 lb axles featuring a 4x4 bolt pattern.
      </p>

      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Available 2,000 lb 4x4 Idler Hubs</h2>
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
              <td className="py-2 px-4 border-b">TPM-IHK-2000-4X4</td>
              <td className="py-2 px-4 border-b">4 on 4"</td>
              <td className="py-2 px-4 border-b">1.98"</td>
              <td className="py-2 px-4 border-b">1/2"</td>
              <td className="py-2 px-4 border-b">Cast Iron</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-IHK-2000-4X4Z</td>
              <td className="py-2 px-4 border-b">4 on 4"</td>
              <td className="py-2 px-4 border-b">1.98"</td>
              <td className="py-2 px-4 border-b">1/2"</td>
              <td className="py-2 px-4 border-b">Cast Iron</td>
              <td className="py-2 px-4 border-b">Zinc</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"Trailer Idler Hub for 2,000 lb. Axles | 4 on 4\" Bolt Pattern"} />
    </div>
  );
}