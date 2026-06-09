import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = { title: '1/2\" (Standard) Bolt Diameter' };

export default function Bolt12Page() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-xl font-bold mb-6 text-ink">1/2" (Standard) Bolt Diameter</h1>
      <p className="mb-8 text-ink">1/2" standard bolts are commonly used in trailer suspension systems for secure and reliable mounting. Suitable for a wide range of trailer types.</p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Available 1/2" Standard Bolts</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Bolt Length (in)</th>
              <th className="py-2 px-4 border-b text-left">Thread Type</th>
              <th className="py-2 px-4 border-b text-left">Application</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">TPM-BD12-2</td>
              <td className="py-2 px-4 border-b">2</td>
              <td className="py-2 px-4 border-b">Coarse</td>
              <td className="py-2 px-4 border-b">Leaf Spring Mount</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-BD12-2.5</td>
              <td className="py-2 px-4 border-b">2.5</td>
              <td className="py-2 px-4 border-b">Fine</td>
              <td className="py-2 px-4 border-b">Equalizer Mount</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-BD12-3</td>
              <td className="py-2 px-4 border-b">3</td>
              <td className="py-2 px-4 border-b">Coarse</td>
              <td className="py-2 px-4 border-b">Shackle Mount</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"1/2\" (Standard) Bolt Diameter"} />
    </main>
  );
}
