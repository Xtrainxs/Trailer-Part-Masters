import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = { title: 'Junction Boxes' };

export default function JunctionBoxes() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-ink">Junction Boxes</h1>
      <p className="text-lg text-gray-700 mb-6">Junction boxes for organizing and protecting trailer wiring connections.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {["1.png", "2.png", "3.png", "4.png"].map((img, idx) => (
          <div
            key={img}
            className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col items-center w-full"
          >
            <img
              src={`/images/Junction%20Boxes/${img}`}
              alt={`Junction Box ${idx + 1}`}
              className="h-36 w-auto object-contain mb-2"
            />
            
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Product Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Type</th>
              <th className="py-2 px-4 border-b text-left">Ports</th>
              <th className="py-2 px-4 border-b text-left">Material</th>
              <th className="py-2 px-4 border-b text-left">Features</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">TPM-JB-6PORT</td>
              <td className="py-2 px-4 border-b">6-Port</td>
              <td className="py-2 px-4 border-b">6</td>
              <td className="py-2 px-4 border-b">ABS Plastic</td>
              <td className="py-2 px-4 border-b">Waterproof, mounting hardware</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-JB-8PORT</td>
              <td className="py-2 px-4 border-b">8-Port</td>
              <td className="py-2 px-4 border-b">8</td>
              <td className="py-2 px-4 border-b">ABS Plastic</td>
              <td className="py-2 px-4 border-b">Waterproof, mounting hardware</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"Junction Boxes"} />
    </main>
  );
}
