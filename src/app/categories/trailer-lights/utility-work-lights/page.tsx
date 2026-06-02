import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = { title: 'Utility & Work Lights' };

export default function UtilityWorkLights() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-ink">Utility & Work Lights</h1>
      <p className="text-lg text-gray-700 mb-6">Versatile utility and work lights for trailers. LED and halogen options, flood and spot beam patterns.</p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Product Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Type</th>
              <th className="py-2 px-4 border-b text-left">Beam</th>
              <th className="py-2 px-4 border-b text-left">Dimensions</th>
              <th className="py-2 px-4 border-b text-left">Voltage</th>
              <th className="py-2 px-4 border-b text-left">Mounting</th>
              <th className="py-2 px-4 border-b text-left">Waterproof</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td className="py-2 px-4 border-b">TPM-UWL-LED-FLOOD</td>
              <td className="py-2 px-4 border-b">LED</td>
              <td className="py-2 px-4 border-b">Flood</td>
              <td className="py-2 px-4 border-b">4" x 4"</td>
              <td className="py-2 px-4 border-b">12V</td>
              <td className="py-2 px-4 border-b">Bracket</td>
              <td className="py-2 px-4 border-b">IP67</td>
            </tr>
            <tr>
                <td className="py-2 px-4 border-b">TPM-UWL-HAL-SPOT</td>
              <td className="py-2 px-4 border-b">Halogen</td>
              <td className="py-2 px-4 border-b">Spot</td>
              <td className="py-2 px-4 border-b">5" x 3"</td>
              <td className="py-2 px-4 border-b">12V</td>
              <td className="py-2 px-4 border-b">Surface</td>
              <td className="py-2 px-4 border-b">IP65</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"Utility & Work Lights"} />
    </main>
  );
}
