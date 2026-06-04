import React from "react";
import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = {
  title: 'Triple-Axle Hanger Kits',
  description: 'Wholesale Triple-Axle Hanger Kits sourced direct from manufacturer. Bulk pricing for trailer manufacturers and stockists across Canada and the USA. Min. order CAD $5,000. Request a quote within 1-2 business days.',
};

export default function TripleAxleHangerKitsPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-ink">Triple-Axle Hanger Kits</h1>
      <p className="mb-8 text-ink">Triple-axle hanger kits are built for maximum load capacity and stability, supporting trailers with three axles. These kits include all the necessary components for robust suspension and safe transport of heavy cargo.</p>
      <div className="w-full flex justify-center items-center bg-blue-900 rounded-lg mb-8 p-4 gap-8">
        <div className="flex-1 flex justify-center">
          <img
            src="/images/hangerkits/tripleaxlehangerkits/Picture1.png"
            alt="Triple Axle Hanger Kits Picture 1"
            className="object-contain rounded-lg drop-shadow-lg"
            style={{ width: '100%', height: '320px', background: 'transparent' }}
          />
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/images/hangerkits/tripleaxlehangerkits/Picture2.png"
            alt="Triple Axle Hanger Kits Picture 2"
            className="object-contain rounded-lg drop-shadow-lg"
            style={{ width: '100%', height: '320px', background: 'transparent' }}
          />
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/images/hangerkits/tripleaxlehangerkits/Picture3.png"
            alt="Triple Axle Hanger Kits Picture 3"
            className="object-contain rounded-lg drop-shadow-lg"
            style={{ width: '100%', height: '320px', background: 'transparent' }}
          />
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Available Triple-Axle Hanger Kits</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Kit Type</th>
              <th className="py-2 px-4 border-b text-left">Spring Size (in)</th>
              <th className="py-2 px-4 border-b text-left">Axle Capacity (lbs)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">TPM-TRHK-5000</td>
              <td className="py-2 px-4 border-b">Standard Triple-Axle Kit</td>
              <td className="py-2 px-4 border-b">30</td>
              <td className="py-2 px-4 border-b">5,000</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-TRHK-7000</td>
              <td className="py-2 px-4 border-b">Heavy Duty Triple-Axle Kit</td>
              <td className="py-2 px-4 border-b">32</td>
              <td className="py-2 px-4 border-b">7,000</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-TRHK-10000</td>
              <td className="py-2 px-4 border-b">Multi-Leaf Triple-Axle Kit</td>
              <td className="py-2 px-4 border-b">34</td>
              <td className="py-2 px-4 border-b">10,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"Triple-Axle Hanger Kits"} />
    </main>
  );
}

