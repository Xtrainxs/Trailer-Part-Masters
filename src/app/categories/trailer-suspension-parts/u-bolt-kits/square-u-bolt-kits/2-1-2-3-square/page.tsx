import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = { title: '2 Â½\"–3\" Square U-bolt Kit' };

export default function Square2123Page() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-ink">2 Â½"–3" Square U-bolt Kit</h1>
      <p className="text-lg text-gray-700 mb-6">Kit for 2 Â½"–3" square axle. Includes U-bolts, nuts, and tie plates.</p>
      <div className="flex flex-wrap gap-4 mb-8">
        {[
          "Square U-Bolt Kits - 1.png",
          "Square U-Bolt Kits - 2.png",
          "Square U-Bolt Kits.png",
        ].map((img, idx) => (
          <div
            key={img}
            className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col items-center w-56"
          >
            <img
              src={`/images/U-Bolt%20Kits/Square%20U-Bolt%20Kits/2%20%C2%BD%E2%80%933%20Square%20U-bolt%20Kit/${encodeURIComponent(img)}`}
              alt={`2 1/2-3 Square U-bolt Kit ${idx + 1}`}
              className="h-36 w-auto object-contain mb-2"
            />
            <span className="text-slate-700 text-sm text-center break-words">{img}</span>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Kit Specifications</h2>
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
              <td className="py-2 px-4 border-b">TPM-UBK-2.5-3SQ</td>
              <td className="py-2 px-4 border-b">2 Â½"–3" x 6 Â¼" x 7/16"</td>
              <td className="py-2 px-4 border-b">Steel</td>
              <td className="py-2 px-4 border-b">Zinc</td>
              <td className="py-2 px-4 border-b">4 U-bolts, 8 nuts, 2 tie plates</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"2 Â½\"–3\" Square U-bolt Kit"} />
    </main>
  );
}
