import React from "react";
import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = {
  title: 'HD Shackles',
  description: 'Wholesale HD Shackles sourced direct from manufacturer. Bulk pricing for trailer manufacturers and stockists across Canada and the USA. Request a quote within 1-2 business days.',
};

export default function HDShacklesPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-ink">HD Shackles</h1>
      <p className="mb-8 text-ink">Heavy-duty shackles are built for trailers that require extra strength and durability. These shackles are ideal for commercial and heavy-haul applications.</p>
      <div className="w-full flex justify-center items-center bg-white border border-line rounded-sm mb-8 p-4 gap-8">
        <div className="flex-1 flex justify-center">
          <img
            src="/images/Shackles%20and%20Bushings/HD%20Shackles/Picture1.png"
            alt="HD Shackles Picture 1"
            className="object-contain rounded-lg"
            style={{ width: '100%', height: '220px', background: 'transparent' }}
          />
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/images/Shackles%20and%20Bushings/HD%20Shackles/Picture2.png"
            alt="HD Shackles Picture 2"
            className="object-contain rounded-lg"
            style={{ width: '100%', height: '220px', background: 'transparent' }}
          />
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/images/Shackles%20and%20Bushings/HD%20Shackles/Picture3.png"
            alt="HD Shackles Picture 3"
            className="object-contain rounded-lg"
            style={{ width: '100%', height: '220px', background: 'transparent' }}
          />
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Available HD Shackles</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Shackle Type</th>
              <th className="py-2 px-4 border-b text-left">Length (in)</th>
              <th className="py-2 px-4 border-b text-left">Thickness (in)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">TPM-HDS-4-3</td>
              <td className="py-2 px-4 border-b">Heavy Duty Shackle</td>
              <td className="py-2 px-4 border-b">4</td>
              <td className="py-2 px-4 border-b">3/8</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-HDS-5-3</td>
              <td className="py-2 px-4 border-b">Heavy Duty Shackle</td>
              <td className="py-2 px-4 border-b">5</td>
              <td className="py-2 px-4 border-b">3/8</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-HDS-6-3</td>
              <td className="py-2 px-4 border-b">Heavy Duty Shackle</td>
              <td className="py-2 px-4 border-b">6</td>
              <td className="py-2 px-4 border-b">3/8</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"HD Shackles"} />
    </main>
  );
}

