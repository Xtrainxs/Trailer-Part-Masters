import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = { title: 'Warning/Strobe Lights' };

export default function WarningStrobeLights() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-[#05203C]">Warning/Strobe Lights</h1>
      <p className="text-lg text-gray-700 mb-6">
        High-visibility warning and strobe lights for trailers, service vehicles,
        and utility applications. Built for durability, weather resistance, and
        reliable signaling.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {["1.png", "2.png", "3.png", "4.png"].map((img, idx) => (
          <div
            key={img}
            className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col items-center w-full"
          >
            <img
              src={`/images/Lights/Warning-Strobe%20Lights/${img}`}
              alt={`Warning Strobe Light ${idx + 1}`}
              className="h-36 w-auto object-contain mb-2"
            />
            
          </div>
        ))}
      </div>
      <p className="text-lg text-[#05203C] font-bold mb-4">
        We can supply all kinds and types of trailer warning-strobe lights irrespective of the table contents.
      </p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-[#05203C]">Product Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Type</th>
              <th className="py-2 px-4 border-b text-left">Color</th>
              <th className="py-2 px-4 border-b text-left">Voltage</th>
              <th className="py-2 px-4 border-b text-left">Mounting</th>
              <th className="py-2 px-4 border-b text-left">Waterproof</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">BTP-WSL-AMB-12V</td>
              <td className="py-2 px-4 border-b">LED Strobe</td>
              <td className="py-2 px-4 border-b">Amber</td>
              <td className="py-2 px-4 border-b">12V</td>
              <td className="py-2 px-4 border-b">Surface</td>
              <td className="py-2 px-4 border-b">IP67</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-WSL-RB-12V</td>
              <td className="py-2 px-4 border-b">Warning Light</td>
              <td className="py-2 px-4 border-b">Red/Blue</td>
              <td className="py-2 px-4 border-b">12V</td>
              <td className="py-2 px-4 border-b">Bracket</td>
              <td className="py-2 px-4 border-b">IP65</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"Warning/Strobe Lights"} />
    </main>
  );
}
