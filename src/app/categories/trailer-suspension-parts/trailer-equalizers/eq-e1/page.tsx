import React from "react";
import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = { title: 'EQ-E1 Equalizer' };

export default function EQE1Page() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-ink">EQ-E1 Equalizer</h1>
      <p className="mb-8 text-ink">EQ-E1 equalizers are designed for smooth load transfer between axles, improving ride quality and reducing stress on suspension components. Ideal for tandem and triple axle trailers.</p>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Available EQ-E1 Equalizers</h2>
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
              <td className="py-2 px-4 border-b">TPM-EQE1-6-3500</td>
              <td className="py-2 px-4 border-b">Standard EQ-E1</td>
              <td className="py-2 px-4 border-b">6</td>
              <td className="py-2 px-4 border-b">3,500</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-EQE1-8-5000</td>
              <td className="py-2 px-4 border-b">Heavy Duty EQ-E1</td>
              <td className="py-2 px-4 border-b">8</td>
              <td className="py-2 px-4 border-b">5,000</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-EQE1-10-7000</td>
              <td className="py-2 px-4 border-b">Multi-Leaf EQ-E1</td>
              <td className="py-2 px-4 border-b">10</td>
              <td className="py-2 px-4 border-b">7,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"EQ-E1 Equalizer"} />
    </main>
  );
}
