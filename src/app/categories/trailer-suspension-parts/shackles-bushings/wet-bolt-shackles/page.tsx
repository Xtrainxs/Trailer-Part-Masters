import React from "react";
import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = {
  title: 'Wet-Bolt Shackles',
  description: 'Wholesale Wet-Bolt Shackles sourced direct from manufacturer. Bulk pricing for trailer manufacturers and stockists across Canada and the USA. Request a quote within 1-2 business days.',
};

export default function WetBoltShacklesPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-ink">Wet-Bolt Shackles</h1>
      <p className="mb-8 text-ink">Wet-bolt shackles feature greaseable bolts for improved longevity and reduced wear. These shackles are perfect for trailers exposed to harsh conditions and frequent use.</p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Available Wet-Bolt Shackles</h2>
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
              <td className="py-2 px-4 border-b">TPM-WBS-4-1</td>
              <td className="py-2 px-4 border-b">Wet-Bolt Shackle</td>
              <td className="py-2 px-4 border-b">4</td>
              <td className="py-2 px-4 border-b">1/4</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-WBS-5-1</td>
              <td className="py-2 px-4 border-b">Wet-Bolt Shackle</td>
              <td className="py-2 px-4 border-b">5</td>
              <td className="py-2 px-4 border-b">1/4</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-WBS-6-1</td>
              <td className="py-2 px-4 border-b">Wet-Bolt Shackle</td>
              <td className="py-2 px-4 border-b">6</td>
              <td className="py-2 px-4 border-b">1/4</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"Wet-Bolt Shackles"} />
    </main>
  );
}

