import RequestQuoteCTA from '@/components/request-quote-cta';
import RangeDisclaimer from '@/components/range-disclaimer';

export const metadata = { title: 'Marker & Clearance Lights' };

export default function MarkerClearanceLights() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-ink">Marker & Clearance Lights</h1>
      <p className="text-lg text-gray-700 mb-4">LED and incandescent marker/clearance lights for trailer sides and corners. Available in amber and red, waterproof options.</p>
      <RangeDisclaimer
        intro="Our marker &amp; clearance lights range includes:"
        items={["Amber LED Marker Lights","Red LED Marker Lights","Oval Clearance Lights","Round Clearance Lights","Thin-Line LED Side Markers","Submersible Sealed","2-Wire & 3-Wire models","Grommet-Mount","Surface-Mount","Waterproof IP67","DOT/FMVSS 108 compliant","Sold individually or in kits"]}
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
          "8.png",
          "9.png",
          "10.png",
          "11.png",
          "12.png",
        ].map((img, idx) => (
          <div
            key={img}
            className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col items-center w-full"
          >
            <img
              src={`/images/Lights/Marker-Clearance%20Lights/${img}`}
              alt={`Marker Clearance Light ${idx + 1}`}
              className="h-36 w-auto object-contain mb-2"
            />
            
          </div>
        ))}
      </div>
      <p className="text-lg text-ink font-bold mb-4">
        We can supply all kinds and types of trailer marker-clearance lights irrespective of the table contents.
      </p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Product Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Type</th>
              <th className="py-2 px-4 border-b text-left">Color</th>
              <th className="py-2 px-4 border-b text-left">Dimensions</th>
              <th className="py-2 px-4 border-b text-left">Voltage</th>
              <th className="py-2 px-4 border-b text-left">Mounting</th>
              <th className="py-2 px-4 border-b text-left">Waterproof</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">TPM-MCL-LED-AM</td>
              <td className="py-2 px-4 border-b">LED</td>
              <td className="py-2 px-4 border-b">Amber</td>
              <td className="py-2 px-4 border-b">2.5" x 1"</td>
              <td className="py-2 px-4 border-b">12V</td>
              <td className="py-2 px-4 border-b">Surface</td>
              <td className="py-2 px-4 border-b">IP67</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-MCL-INC-RED</td>
              <td className="py-2 px-4 border-b">Incandescent</td>
              <td className="py-2 px-4 border-b">Red</td>
              <td className="py-2 px-4 border-b">2.5" x 1"</td>
              <td className="py-2 px-4 border-b">12V</td>
              <td className="py-2 px-4 border-b">Surface</td>
              <td className="py-2 px-4 border-b">IP65</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"Marker & Clearance Lights"} />
    </main>
  );
}
