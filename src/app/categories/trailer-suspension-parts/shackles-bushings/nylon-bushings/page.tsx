import React from "react";
import RangeDisclaimer from '@/components/range-disclaimer';
import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = {
  title: 'Nylon Bushings',
  description: 'Wholesale Nylon Bushings sourced direct from manufacturer. Bulk pricing for trailer manufacturers and stockists across Canada and the USA. Min. order CAD $5,000. Request a quote within 1-2 business days.',
};

export default function NylonBushingsPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-ink">Nylon Bushings</h1>
      <p className="mb-4 text-ink">Nylon bushings offer smooth movement and corrosion resistance for trailer suspension systems. They are lightweight and ideal for light-duty trailers.</p>
      <RangeDisclaimer
        intro="Our nylon bushings range includes:"
        items={["1\" OD","1.125\" OD","1.25\" OD","1.375\" OD","Standard Wall","Heavy Wall","Shackle Bushing Sets (pair)","Spring Eye Bushings","Equalizer Bushings","Natural Nylon","Black Nylon","Sold individually or in bulk"]}
      />
      {/* Gallery below table removed */}
      <h2 className="text-xl font-semibold mb-4 text-ink">Nylon Bushings Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[1,2,3,4].map((num) => (
            <div key={num} className="flex flex-col items-center bg-slate-100 rounded-lg shadow p-4 border border-slate-200">
                <img
                  src={`/images/Shackles%20and%20Bushings/Nylon%20Bushings/Picture${num}.png`}
                  alt={`Nylon Bushing Picture ${num}`}
                  className="w-full h-48 object-contain bg-slate-50 rounded border border-slate-200 mb-2"
                  loading="lazy"
                />
              <span className="text-slate-600 text-sm">Picture {num}</span>
            </div>
          ))}
      </div>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Available Nylon Bushings</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Bushing Type</th>
              <th className="py-2 px-4 border-b text-left">Length (in)</th>
              <th className="py-2 px-4 border-b text-left">Diameter (in)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">TPM-NB-2-1</td>
              <td className="py-2 px-4 border-b">Nylon Bushing</td>
              <td className="py-2 px-4 border-b">2</td>
              <td className="py-2 px-4 border-b">1</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-NB-2.5-1</td>
              <td className="py-2 px-4 border-b">Nylon Bushing</td>
              <td className="py-2 px-4 border-b">2.5</td>
              <td className="py-2 px-4 border-b">1</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-NB-3-1</td>
              <td className="py-2 px-4 border-b">Nylon Bushing</td>
              <td className="py-2 px-4 border-b">3</td>
              <td className="py-2 px-4 border-b">1</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Gallery below table removed */}
      <RequestQuoteCTA partLabel={"Nylon Bushings"} />
    </main>
  );
}

