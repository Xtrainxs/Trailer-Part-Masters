import React from "react";
import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = {
  title: 'Standard Shackles',
  description: 'Wholesale Standard Shackles sourced direct from manufacturer. Bulk pricing for trailer manufacturers and stockists across Canada and the USA. Request a quote within 1-2 business days.',
};

export default function StandardShacklesPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-ink">Standard Shackles</h1>
      <p className="mb-8 text-ink">Standard shackles are essential for connecting leaf springs to the trailer frame, providing secure and flexible suspension. These shackles are suitable for most utility and light-duty trailers.</p>
      <div className="w-full flex justify-center items-center bg-white border border-line rounded-sm mb-8 p-4 gap-8">
        <div className="flex-1 flex justify-center">
          <img
            src="/images/Shackles%20and%20Bushings/Standard%20Shackles/High%20Tensile%20Steel%20Trailer%20Shackle.png"
            alt="High Tensile Steel Trailer Shackle"
            className="object-contain rounded-lg"
            style={{ width: '100%', height: '220px', background: 'transparent' }}
          />
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/images/Shackles%20and%20Bushings/Standard%20Shackles/Picture1.png"
            alt="Standard Shackles Picture 1"
            className="object-contain rounded-lg"
            style={{ width: '100%', height: '220px', background: 'transparent' }}
          />
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/images/Shackles%20and%20Bushings/Standard%20Shackles/Picture2.png"
            alt="Standard Shackles Picture 2"
            className="object-contain rounded-lg"
            style={{ width: '100%', height: '220px', background: 'transparent' }}
          />
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/images/Shackles%20and%20Bushings/Standard%20Shackles/Shackle%20Links.png"
            alt="Shackle Links"
            className="object-contain rounded-lg"
            style={{ width: '100%', height: '220px', background: 'transparent' }}
          />
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Available Standard Shackles</h2>
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
              <td className="py-2 px-4 border-b">TPM-SS-3-1</td>
              <td className="py-2 px-4 border-b">Standard Shackle</td>
              <td className="py-2 px-4 border-b">3</td>
              <td className="py-2 px-4 border-b">1/4</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-SS-4-1</td>
              <td className="py-2 px-4 border-b">Standard Shackle</td>
              <td className="py-2 px-4 border-b">4</td>
              <td className="py-2 px-4 border-b">1/4</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-SS-5-1</td>
              <td className="py-2 px-4 border-b">Standard Shackle</td>
              <td className="py-2 px-4 border-b">5</td>
              <td className="py-2 px-4 border-b">1/4</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"Standard Shackles"} />
    </main>
  );
}

