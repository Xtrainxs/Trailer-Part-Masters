import Link from 'next/link';
import RequestQuoteCTA from '@/components/request-quote-cta';

const subcategories = [
  { name: '12 Inch Manual Adjust Hydraulic Drum Trailer Brake - Left Side', slug: 'manual-drum-left' },
  { name: '12 Inch Manual Adjust Hydraulic Drum Trailer Brake - Right Side', slug: 'manual-drum-right' },
  { name: '12 Inch Freebacking Hydraulic Drum Trailer Brake - Left Side', slug: 'freebacking-drum-left' },
  { name: '12 Inch Freebacking Hydraulic Drum Trailer Brake - Right Side', slug: 'freebacking-drum-right' },
  { name: '12 Inch Manual Adjust Hydraulic Trailer Brake Assembly - Left Side', slug: 'manual-assembly-left' },
  { name: '12 Inch Manual Adjust Hydraulic Trailer Brake Assembly - Right Side', slug: 'manual-assembly-right' },
];

export const metadata = { title: '12\" Hydraulic Trailer Brakes' };

export default function Hydraulic12() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-2">12" Hydraulic Trailer Brakes</h1>
      <p className="text-lg text-gray-600 mb-8">Choose a 12" hydraulic brake product</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {["1.png", "2.png", "3.png", "4.png"].map((img, idx) => (
          <div
            key={img}
            className="bg-slate-50 rounded-lg shadow p-4 flex flex-col items-center w-full"
          >
            <div className="w-[88%] rounded-md p-2 mb-2 flex justify-center bg-slate-50">
              <img
                src={`/images/Brake%20Assemblies/12%20Inch%20Hydraulic/${encodeURIComponent(img)}`}
                alt={`12 inch hydraulic brake assembly ${idx + 1}`}
                className="h-[8.4rem] w-full object-contain object-center"
              />
            </div>
            
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Available 12" Hydraulic Brake Assemblies</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Type</th>
              <th className="py-2 px-4 border-b text-left">Side</th>
              <th className="py-2 px-4 border-b text-left">Adjust</th>
              <th className="py-2 px-4 border-b text-left">Fits Axle</th>
              <th className="py-2 px-4 border-b text-left">Finish</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">TPM-BA-12H-MAN-L</td>
              <td className="py-2 px-4 border-b">Hydraulic Drum</td>
              <td className="py-2 px-4 border-b">Left</td>
              <td className="py-2 px-4 border-b">Manual</td>
              <td className="py-2 px-4 border-b">5,200–7,000 lb</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-BA-12H-MAN-R</td>
              <td className="py-2 px-4 border-b">Hydraulic Drum</td>
              <td className="py-2 px-4 border-b">Right</td>
              <td className="py-2 px-4 border-b">Manual</td>
              <td className="py-2 px-4 border-b">5,200–7,000 lb</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-BA-12H-FB-L</td>
              <td className="py-2 px-4 border-b">Hydraulic Drum (Freebacking)</td>
              <td className="py-2 px-4 border-b">Left</td>
              <td className="py-2 px-4 border-b">Manual</td>
              <td className="py-2 px-4 border-b">5,200–7,000 lb</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-BA-12H-FB-R</td>
              <td className="py-2 px-4 border-b">Hydraulic Drum (Freebacking)</td>
              <td className="py-2 px-4 border-b">Right</td>
              <td className="py-2 px-4 border-b">Manual</td>
              <td className="py-2 px-4 border-b">5,200–7,000 lb</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"12\" Hydraulic Trailer Brakes"} />
    </div>
  );
}
