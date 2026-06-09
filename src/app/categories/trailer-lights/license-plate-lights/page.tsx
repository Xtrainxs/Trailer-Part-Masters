import RequestQuoteCTA from '@/components/request-quote-cta';
import RangeDisclaimer from '@/components/range-disclaimer';

export const metadata = {
  title: 'License Plate Lights',
  description: 'Wholesale License Plate Lights sourced direct from manufacturer. Bulk pricing for trailer manufacturers and stockists across Canada and the USA. Request a quote within 1-2 business days.',
};

export default function LicensePlateLights() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-ink">License Plate Lights</h1>
      <p className="text-lg text-gray-700 mb-4">Bright, compact license plate lights for trailers. Available in LED and incandescent, surface or bracket mount.</p>
      <RangeDisclaimer
        intro="Our license plate lights range includes:"
        items={["LED License Plate Lights","Incandescent License Plate Lights","Surface-Mount","Bracket-Mount","Combination License + Tail","Stainless Steel housing","Plastic housing","Submersible Sealed","DOT compliant","12\" & 18\" wire leads"]}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          "1.png",
          "2.png",
          "3.png",
          "4.png",
          "5.png",
          "6.png",
          "7.png",
        ].map((img, idx) => (
          <div
            key={img}
            className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col items-center w-full"
          >
            <img
              src={`/images/Lights/License%20Plate%20Lights/${img}`}
              alt={`License Plate Light ${idx + 1}`}
              className="h-36 w-auto object-contain mb-2"
            />
            
          </div>
        ))}
      </div>
      <p className="text-lg text-ink font-bold mb-4">
        We can supply all kinds and types of trailer license plate lights irrespective of the table contents.
      </p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Product Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Type</th>
              <th className="py-2 px-4 border-b text-left">Dimensions</th>
              <th className="py-2 px-4 border-b text-left">Voltage</th>
              <th className="py-2 px-4 border-b text-left">Mounting</th>
              <th className="py-2 px-4 border-b text-left">Waterproof</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">TPM-LPL-LED</td>
              <td className="py-2 px-4 border-b">LED</td>
              <td className="py-2 px-4 border-b">1.5" x 1"</td>
              <td className="py-2 px-4 border-b">12V</td>
              <td className="py-2 px-4 border-b">Bracket</td>
              <td className="py-2 px-4 border-b">IP67</td>
            </tr>
            <tr>
                <td className="py-2 px-4 border-b">TPM-LPL-LED</td>
              <td className="py-2 px-4 border-b">Incandescent</td>
              <td className="py-2 px-4 border-b">1.5" x 1"</td>
              <td className="py-2 px-4 border-b">12V</td>
              <td className="py-2 px-4 border-b">Surface</td>
                <td className="py-2 px-4 border-b">TPM-LPL-INC</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"License Plate Lights"} />
    </main>
  );
}

