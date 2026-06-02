import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = { title: 'Incandescent Tail Lights' };

export default function IncandescentTailLights() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-ink">Incandescent Tail Lights</h1>
      <p className="text-lg text-gray-700 mb-6">Traditional incandescent tail lights for trailers. Reliable and cost-effective, available in multiple shapes and sizes.</p>
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
            </tr>
          </thead>
          <tbody>
            <tr>
                <td className="py-2 px-4 border-b">TPM-ITL-RECT</td>
              <td className="py-2 px-4 border-b">Rectangular</td>
              <td className="py-2 px-4 border-b">7.5" x 3.25"</td>
              <td className="py-2 px-4 border-b">12V</td>
              <td className="py-2 px-4 border-b">Surface</td>
              <td className="py-2 px-4 border-b">DOT/SAE</td>
            </tr>
            <tr>
                <td className="py-2 px-4 border-b">TPM-ITL-RND</td>
              <td className="py-2 px-4 border-b">Round</td>
              <td className="py-2 px-4 border-b">4" dia.</td>
              <td className="py-2 px-4 border-b">12V</td>
              <td className="py-2 px-4 border-b">Flange</td>
              <td className="py-2 px-4 border-b">DOT/SAE</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"Incandescent Tail Lights"} />
    </main>
  );
}
