import React from "react";
import RequestQuoteCTA from '@/components/request-quote-cta';
import RangeDisclaimer from '@/components/range-disclaimer';

export const metadata = {
  title: 'Suspension Fasteners',
  description: 'Wholesale Suspension Fasteners sourced direct from manufacturer. Bulk pricing for trailer manufacturers and stockists across Canada and the USA. Request a quote within 1-2 business days.',
};

export default function SuspensionFastenersPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-ink">Suspension Fasteners</h1>
      <p className="mb-4 text-ink">Suspension fasteners include bolts, nuts, and washers designed for secure assembly of trailer suspension systems. These components are critical for safety and durability.</p>
      <RangeDisclaimer
        intro="Our suspension fasteners range includes:"
        items={["Equalizer Bolts","Shackle Bolts","Lock Nuts & Nyloc Nuts","Flat Washers","Spring Washers","U-Bolt Nuts","Carriage Bolts","Hex Head Bolts (Grade 5 & Grade 8)","Stainless Steel Bolts & Nuts","Zinc-Plated Fastener Sets","Suspension Bolt Kits","All standard imperial & metric sizes"]}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          "Lock Nuts 1.png",
        ].map((img, idx) => (
          <div
            key={img}
            className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col items-center w-full"
          >
            <img
              src={`/images/Suspension%20Fasteners/${encodeURIComponent(img)}`}
              alt={`Suspension Fastener ${idx + 1}`}
              className="h-36 w-auto object-contain mb-2"
            />
            <span className="text-slate-700 text-sm text-center break-words">{img}</span>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Available Suspension Fasteners</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Type</th>
              <th className="py-2 px-4 border-b text-left">Size (in)</th>
              <th className="py-2 px-4 border-b text-left">Material</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">TPM-SF-BOLT-12</td>
              <td className="py-2 px-4 border-b">Bolt</td>
              <td className="py-2 px-4 border-b">1/2" x 3"</td>
              <td className="py-2 px-4 border-b">Steel</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-SF-NUT-12</td>
              <td className="py-2 px-4 border-b">Nut</td>
              <td className="py-2 px-4 border-b">1/2"</td>
              <td className="py-2 px-4 border-b">Steel</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-SF-WASHER-12</td>
              <td className="py-2 px-4 border-b">Washer</td>
              <td className="py-2 px-4 border-b">1/2"</td>
              <td className="py-2 px-4 border-b">Steel</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"Suspension Fasteners"} />
    </main>
  );
}

