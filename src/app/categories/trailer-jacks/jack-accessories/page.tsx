import Link from 'next/link';
import RequestQuoteCTA from '@/components/request-quote-cta';
import RangeDisclaimer from '@/components/range-disclaimer';

export const metadata = { title: 'Jack Accessories' };

export default function JackAccessories() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">Jack Accessories</h1>
      <p className="text-lg text-gray-700 mb-4">
        Complete your jack setup with our selection of accessories including handles, pads, covers, and replacement parts.
      </p>
      <RangeDisclaimer
        intro="Our jack accessories range includes:"
        items={["Jack Pads (rubber & plastic)","Caster Wheels (single & dual)","Jack Foot Plates","Jack Handles & Cranks","Mounting Brackets","Replacement Leg Pins","Protective Covers","Stabilizer Bar Kits"]}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          'Caster Wheels - Single & Dual.png',
          'Jack Foot.png',
          'Jack Pad 1.png',
          'Jack Pad.png',
        ].map((img, idx) => (
          <div
            key={img}
            className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col items-center w-full"
          >
            <img
              src={`/images/Trailer%20Jacks/Jack%20Accesories/${encodeURIComponent(img)}`}
              alt={`Jack Accessory ${idx + 1}`}
              className="h-36 w-auto object-contain mb-2"
            />
            <span className="text-slate-700 text-sm text-center break-words">{img}</span>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-[#05203C]">Available Jack Accessories</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Accessory Type</th>
              <th className="py-2 px-4 border-b text-left">Size</th>
              <th className="py-2 px-4 border-b text-left">Material</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">BTP-JA-HANDLE</td>
              <td className="py-2 px-4 border-b">Replacement Handle</td>
              <td className="py-2 px-4 border-b">Standard</td>
              <td className="py-2 px-4 border-b">Steel</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-JA-PAD</td>
              <td className="py-2 px-4 border-b">Jack Pad</td>
              <td className="py-2 px-4 border-b">8" x 8"</td>
              <td className="py-2 px-4 border-b">Rubber</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-JA-COVER</td>
              <td className="py-2 px-4 border-b">Protective Cover</td>
              <td className="py-2 px-4 border-b">Universal</td>
              <td className="py-2 px-4 border-b">Vinyl</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"Jack Accessories"} />
    </div>
  );
}
