import Link from 'next/link';

export const metadata = { title: '7\\" Brake Drum Kit for 2,000 lb. Axles | 5 on 4.5\\" Bolt Pattern' };

export default function BrakeDrum7in2000_5x45() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">7" Brake Drum Kit for 2,000 lb. Axles | 5 on 4.5" Bolt Pattern</h1>
      <p className="text-lg text-gray-700 mb-6">High-quality brake drum kit for 2,000 lb axles with a 5x4.5 bolt pattern.</p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Kit Components</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">Part Name</th>
              <th className="py-2 px-4 border-b text-left">Quantity</th>
              <th className="py-2 px-4 border-b text-left">Parts Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Wheel nut</td>
              <td className="py-2 px-4 border-b">5</td>
              <td className="py-2 px-4 border-b">1/2"-20 cone wheel nut</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Dust cap</td>
              <td className="py-2 px-4 border-b">1</td>
              <td className="py-2 px-4 border-b">1.98" drive in</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Bearing cone</td>
              <td className="py-2 px-4 border-b">2</td>
              <td className="py-2 px-4 border-b">L44649</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Bearing cover</td>
              <td className="py-2 px-4 border-b">2</td>
              <td className="py-2 px-4 border-b">Plastic</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Oil seal</td>
              <td className="py-2 px-4 border-b">1</td>
              <td className="py-2 px-4 border-b">1.72" Double lip</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Oil seal (alternate)</td>
              <td className="py-2 px-4 border-b">-</td>
              <td className="py-2 px-4 border-b">1.5" Double lip</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
