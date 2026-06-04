import React from "react";
import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = {
  title: 'Spring Seats',
  description: 'Wholesale Spring Seats sourced direct from manufacturer. Bulk pricing for trailer manufacturers and stockists across Canada and the USA. Min. order CAD $5,000. Request a quote within 1-2 business days.',
};

export default function SpringSeatsPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-ink">Spring Seats</h1>
      <p className="mb-8 text-ink">Spring seats are essential components that provide a stable mounting surface for trailer leaf springs, ensuring proper alignment and load distribution.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {["1.png", "2.png", "3.png"].map((img, idx) => (
          <div key={img} className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col items-center w-full">
            <img
              src={`/images/Spring%20Seats/${img}`}
              alt={`Spring Seat ${idx + 1}`}
              className="h-36 w-auto object-contain mb-2"
            />
            
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Available Spring Seats</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Seat Size (in)</th>
              <th className="py-2 px-4 border-b text-left">Axle Diameter (in)</th>
              <th className="py-2 px-4 border-b text-left">Material</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">TPM-SS-175-2</td>
              <td className="py-2 px-4 border-b">1 Â¾"</td>
              <td className="py-2 px-4 border-b">2</td>
              <td className="py-2 px-4 border-b">Steel</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-SS-238-2.375</td>
              <td className="py-2 px-4 border-b">2 3/8"</td>
              <td className="py-2 px-4 border-b">2.375</td>
              <td className="py-2 px-4 border-b">Steel</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-SS-3-3</td>
              <td className="py-2 px-4 border-b">3"</td>
              <td className="py-2 px-4 border-b">3</td>
              <td className="py-2 px-4 border-b">Steel</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"Spring Seats"} />
    </main>
  );
}

