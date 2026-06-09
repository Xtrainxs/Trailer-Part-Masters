import RequestQuoteCTA from '@/components/request-quote-cta';
import RangeDisclaimer from '@/components/range-disclaimer';

export const metadata = {
  title: 'LED Tail Lights',
  description: 'Wholesale LED Tail Lights sourced direct from manufacturer. Bulk pricing for trailer manufacturers and stockists across Canada and the USA. Request a quote within 1-2 business days.',
};

export default function LedTailLights() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-ink">LED Tail Lights</h1>
      <p className="text-lg text-gray-700 mb-4">High-visibility, long-lasting LED tail lights for trailers. DOT/SAE compliant, waterproof, and vibration-resistant.</p>
      <RangeDisclaimer
        intro="Our LED tail lights range includes:"
        items={["Round LED (3\", 4\", 6\")","Oval LED Tail Lights","Submersible LED","Sealed Combination Lights","Red & Amber options","Stud-Mount","Grommet-Mount","DOT/FMVSS 108 compliant","Waterproof IP67","Surface & Recess-Mount"]}
      />
      <div className="overflow-x-auto mb-8">
        <div className="flex flex-nowrap gap-4 min-w-max">
          {['1.png', '2.png', '3.png', '4.png', '5.png'].map((img, idx) => (
            <div
              key={img}
              className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col items-center w-56"
            >
              <img
                src={`/images/Lights/Tail%20Lights/${img}`}
                alt={`LED Tail Light ${idx + 1}`}
                className="h-36 w-auto object-contain mb-2"
              />
              
            </div>
          ))}
        </div>
      </div>
      <p className="text-lg text-ink font-bold mb-4">
        We can supply all kinds and types of trailer tail lights upon request.
      </p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Product Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Shape</th>
              <th className="py-2 px-4 border-b text-left">Dimensions</th>
              <th className="py-2 px-4 border-b text-left">Voltage</th>
              <th className="py-2 px-4 border-b text-left">Mounting</th>
              <th className="py-2 px-4 border-b text-left">Certifications</th>
              <th className="py-2 px-4 border-b text-left">Waterproof</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">TPM-LTL-OVAL-LED</td>
              <td className="py-2 px-4 border-b">Oval</td>
              <td className="py-2 px-4 border-b">6.5" x 2.25"</td>
              <td className="py-2 px-4 border-b">12V</td>
              <td className="py-2 px-4 border-b">Grommet</td>
              <td className="py-2 px-4 border-b">DOT/SAE</td>
              <td className="py-2 px-4 border-b">IP67</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-LTL-RND-LED</td>
              <td className="py-2 px-4 border-b">Round</td>
              <td className="py-2 px-4 border-b">4" dia.</td>
              <td className="py-2 px-4 border-b">12V</td>
              <td className="py-2 px-4 border-b">Flange</td>
              <td className="py-2 px-4 border-b">DOT/SAE</td>
              <td className="py-2 px-4 border-b">IP67</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-LTL-4R-16LED</td>
              <td className="py-2 px-4 border-b">Round</td>
              <td className="py-2 px-4 border-b">4" dia.</td>
              <td className="py-2 px-4 border-b">12V/24V</td>
              <td className="py-2 px-4 border-b">Grommet</td>
              <td className="py-2 px-4 border-b">DOT/SAE</td>
              <td className="py-2 px-4 border-b">IP67</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-LTL-SQ-110MM</td>
              <td className="py-2 px-4 border-b">Square</td>
              <td className="py-2 px-4 border-b">110 mm x 110 mm</td>
              <td className="py-2 px-4 border-b">12V/24V</td>
              <td className="py-2 px-4 border-b">Surface</td>
              <td className="py-2 px-4 border-b">DOT/SAE</td>
              <td className="py-2 px-4 border-b">IP67</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-LTL-24V-STROBE</td>
              <td className="py-2 px-4 border-b">Rectangular</td>
              <td className="py-2 px-4 border-b">5.9" x 3.1"</td>
              <td className="py-2 px-4 border-b">24V</td>
              <td className="py-2 px-4 border-b">Bolt-on</td>
              <td className="py-2 px-4 border-b">ECE</td>
              <td className="py-2 px-4 border-b">IP67</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-LTL-E4-COMBO</td>
              <td className="py-2 px-4 border-b">Combination</td>
              <td className="py-2 px-4 border-b">7.0" x 5.5"</td>
              <td className="py-2 px-4 border-b">10-30V</td>
              <td className="py-2 px-4 border-b">Bracket</td>
              <td className="py-2 px-4 border-b">E4 / ADR</td>
              <td className="py-2 px-4 border-b">IP67</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-LTL-6IN-MULTI</td>
              <td className="py-2 px-4 border-b">Round</td>
              <td className="py-2 px-4 border-b">6" dia.</td>
              <td className="py-2 px-4 border-b">12V/24V</td>
              <td className="py-2 px-4 border-b">Grommet</td>
              <td className="py-2 px-4 border-b">DOT/SAE</td>
              <td className="py-2 px-4 border-b">IP67</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-LTL-IP67-TLR</td>
              <td className="py-2 px-4 border-b">Oval</td>
              <td className="py-2 px-4 border-b">6.7" x 2.5"</td>
              <td className="py-2 px-4 border-b">12V/24V</td>
              <td className="py-2 px-4 border-b">Flange</td>
              <td className="py-2 px-4 border-b">DOT/SAE</td>
              <td className="py-2 px-4 border-b">IP67</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-LTL-REAR-LAMP-CN</td>
              <td className="py-2 px-4 border-b">Rectangular</td>
              <td className="py-2 px-4 border-b">6.1" x 2.2"</td>
              <td className="py-2 px-4 border-b">12V/24V</td>
              <td className="py-2 px-4 border-b">Surface</td>
              <td className="py-2 px-4 border-b">DOT/SAE</td>
              <td className="py-2 px-4 border-b">IP67</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"LED Tail Lights"} />
    </main>
  );
}

