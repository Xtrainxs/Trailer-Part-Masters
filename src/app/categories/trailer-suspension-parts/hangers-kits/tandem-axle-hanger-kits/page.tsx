import React from "react";
import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = { title: 'Tandem-Axle Hanger Kits' };

export default function TandemAxleHangerKitsPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-[#05203C]">Tandem-Axle Hanger Kits</h1>
      <p className="mb-8 text-[#05203C]">Tandem-axle hanger kits are designed for trailers with two axles, providing the necessary hardware for secure and balanced suspension. These kits help distribute weight evenly and improve ride stability for larger trailers.</p>
      <div className="w-full flex justify-center items-center bg-blue-900 rounded-lg mb-8 p-4 gap-8">
        <div className="flex-1 flex justify-center">
          <img
            src="/images/hangerkits/tandemaxlehangerkits/Picture1.png"
            alt="Tandem Axle Hanger Kits Picture 1"
            className="object-contain rounded-lg drop-shadow-lg"
            style={{ width: '100%', height: '320px', background: 'transparent' }}
          />
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/images/hangerkits/tandemaxlehangerkits/Picture2.png"
            alt="Tandem Axle Hanger Kits Picture 2"
            className="object-contain rounded-lg drop-shadow-lg"
            style={{ width: '100%', height: '320px', background: 'transparent' }}
          />
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/images/hangerkits/tandemaxlehangerkits/Picture3.png"
            alt="Tandem Axle Hanger Kits Picture 3"
            className="object-contain rounded-lg drop-shadow-lg"
            style={{ width: '100%', height: '320px', background: 'transparent' }}
          />
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-[#05203C]">Available Tandem-Axle Hanger Kits</h2>
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
              <td className="py-2 px-4 border-b">BTP-TAHK-3500</td>
              <td className="py-2 px-4 border-b">Standard Tandem-Axle Kit</td>
              <td className="py-2 px-4 border-b">27</td>
              <td className="py-2 px-4 border-b">3,500</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-TAHK-5000</td>
              <td className="py-2 px-4 border-b">Heavy Duty Tandem-Axle Kit</td>
              <td className="py-2 px-4 border-b">30</td>
              <td className="py-2 px-4 border-b">5,000</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">BTP-TAHK-7000</td>
              <td className="py-2 px-4 border-b">Multi-Leaf Tandem-Axle Kit</td>
              <td className="py-2 px-4 border-b">32</td>
              <td className="py-2 px-4 border-b">7,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"Tandem-Axle Hanger Kits"} />
    </main>
  );
}
