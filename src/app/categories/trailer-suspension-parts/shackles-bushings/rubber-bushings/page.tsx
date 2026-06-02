import React from "react";
import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = { title: 'Rubber Bushings' };

export default function RubberBushingsPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-ink">Rubber Bushings</h1>
      <p className="mb-8 text-ink">Rubber bushings provide excellent vibration dampening and flexibility for trailer suspension systems. They are ideal for trailers that require a smoother ride and noise reduction.</p>
      <div className="overflow-x-auto mb-8">
        <div className="flex flex-nowrap gap-4 min-w-max">
          {[
            'Leaf Spring Rubber Bushings.png',
            'Picture1.png',
            'Picture2.png',
            'Picture3.png',
          ].map((img, idx) => (
            <div
              key={img}
              className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col items-center w-48 shrink-0"
            >
              <img
                src={`/images/Shackles%20and%20Bushings/rubber-bushings/${encodeURIComponent(img)}`}
                alt={`Rubber Bushings ${idx + 1}`}
                className="h-32 w-auto object-contain mb-2"
              />
              <span className="text-slate-700 text-sm text-center break-words">
                {img.replace('.png', '').replace(/([A-Z])/g, ' $1').trim()}
              </span>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Available Rubber Bushings</h2>
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
              <td className="py-2 px-4 border-b">TPM-RB-2-1</td>
              <td className="py-2 px-4 border-b">Rubber Bushing</td>
              <td className="py-2 px-4 border-b">2</td>
              <td className="py-2 px-4 border-b">1</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-RB-2.5-1</td>
              <td className="py-2 px-4 border-b">Rubber Bushing</td>
              <td className="py-2 px-4 border-b">2.5</td>
              <td className="py-2 px-4 border-b">1</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-RB-3-1</td>
              <td className="py-2 px-4 border-b">Rubber Bushing</td>
              <td className="py-2 px-4 border-b">3</td>
              <td className="py-2 px-4 border-b">1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"Rubber Bushings"} />
    </main>
  );
}
