import Link from 'next/link';
import RequestQuoteCTA from '@/components/request-quote-cta';
import RangeDisclaimer from '@/components/range-disclaimer';

export const metadata = { title: 'Gooseneck Couplers' };

export default function GooseneckCouplers() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">Gooseneck Couplers</h1>
      <p className="text-lg text-gray-700 mb-4">
        Gooseneck couplers are built for gooseneck trailers and provide a secure connection for heavy-duty towing.
      </p>
      <RangeDisclaimer
        intro="Our gooseneck couplers range includes:"
        items={["Round Ball Gooseneck","Flat-Plate Gooseneck","Adjustable Gooseneck","2-5/16\" Ball (up to 30,000 lb GTW)","Pintle Ring Adapters","Heavy-Duty Forged Steel","Powder Coat & Zinc finishes","Custom fabrication available"]}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {["3.png"].map((img, idx) => (
          <div
            key={img}
            className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col items-center w-full"
          >
            <img
              src={`/images/Couplers/Gooseneck%20Couplers/${img}`}
              alt={`Gooseneck Coupler ${idx + 1}`}
              className="h-36 w-auto object-contain mb-2"
            />
            
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Available Gooseneck Couplers</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Coupler Type</th>
              <th className="py-2 px-4 border-b text-left">Tube Size</th>
              <th className="py-2 px-4 border-b text-left">Capacity (lbs)</th>
              <th className="py-2 px-4 border-b text-left">Finish</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td className="py-2 px-4 border-b">TPM-GNC-25000</td>
              <td className="py-2 px-4 border-b">Standard Gooseneck</td>
              <td className="py-2 px-4 border-b">2-5/16" Ball, 4" Tube</td>
              <td className="py-2 px-4 border-b">25,000</td>
              <td className="py-2 px-4 border-b">Black Powder Coat</td>
            </tr>
            <tr>
                <td className="py-2 px-4 border-b">TPM-GNC-25000</td>
              <td className="py-2 px-4 border-b">Heavy Duty Gooseneck</td>
                <td className="py-2 px-4 border-b">TPM-GNC-30000</td>
              <td className="py-2 px-4 border-b">30,000</td>
                <td className="py-2 px-4 border-b">TPM-GNC-30000G</td>
            </tr>
            <tr>
                <td className="py-2 px-4 border-b">TPM-GNC-30000G</td>
              <td className="py-2 px-4 border-b">HD Gooseneck</td>
              <td className="py-2 px-4 border-b">2-5/16" Ball, 4" Tube</td>
              <td className="py-2 px-4 border-b">30,000</td>
              <td className="py-2 px-4 border-b">Galvanized</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"Gooseneck Couplers"} />
    </div>
  );
}