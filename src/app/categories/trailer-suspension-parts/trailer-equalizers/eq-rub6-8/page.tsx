import React from "react";
import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = {
  title: 'EQ-RUB6/8 Equalizer',
  description: 'Wholesale EQ-RUB6/8 Equalizer sourced direct from manufacturer. Bulk pricing for trailer manufacturers and stockists across Canada and the USA. Request a quote within 1-2 business days.',
};

export default function EQRUB68Page() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-ink">EQ-RUB6/8 Equalizer</h1>
      <p className="mb-8 text-ink">EQ-RUB6/8 equalizers feature rubber cushioning for enhanced shock absorption and quieter operation, ideal for trailers that require extra comfort and protection for cargo.</p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Available EQ-RUB6/8 Equalizers</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Equalizer Type</th>
              <th className="py-2 px-4 border-b text-left">Length (in)</th>
              <th className="py-2 px-4 border-b text-left">Axle Capacity (lbs)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">TPM-EQRUB6-6-3500</td>
              <td className="py-2 px-4 border-b">Standard EQ-RUB6</td>
              <td className="py-2 px-4 border-b">6</td>
              <td className="py-2 px-4 border-b">3,500</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-EQRUB8-8-5000</td>
              <td className="py-2 px-4 border-b">Heavy Duty EQ-RUB8</td>
              <td className="py-2 px-4 border-b">8</td>
              <td className="py-2 px-4 border-b">5,000</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-EQRUB8-10-7000</td>
              <td className="py-2 px-4 border-b">Multi-Leaf EQ-RUB8</td>
              <td className="py-2 px-4 border-b">10</td>
              <td className="py-2 px-4 border-b">7,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"EQ-RUB6/8 Equalizer"} />
    </main>
  );
}

