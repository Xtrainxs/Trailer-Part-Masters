import React from "react";
import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = { title: 'Specialty Hanger Kits' };

export default function SpecialtyHangerKitsPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-ink">Specialty Hanger Kits</h1>
      <p className="mb-8 text-ink">Specialty hanger kits are tailored for unique trailer configurations, offering custom solutions for specialized suspension needs. These kits are perfect for trailers with non-standard designs or specific performance requirements.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {["1.png", "2.png"].map((img, idx) => (
          <div
            key={img}
            className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col items-center w-full"
          >
            <div
              className="w-[88%] rounded-md p-2 mb-2 flex justify-center"
              style={{
                backgroundColor: "#a07955",
                backgroundImage:
                  "linear-gradient(90deg, #b89470 0%, #a47b55 48%, #6a462e 100%), repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 3px)",
              }}
            >
              <img
                src={`/images/hangerkits/Speciality%20hanger%20Kits/${encodeURIComponent(img)}`}
                alt={`Specialty hanger kit ${idx + 1}`}
                className="h-[8.4rem] w-full object-contain object-center mix-blend-multiply brightness-110"
              />
            </div>
            
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Available Specialty Hanger Kits</h2>
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
              <td className="py-2 px-4 border-b">TPM-SPHK-3500</td>
              <td className="py-2 px-4 border-b">Custom Specialty Kit</td>
              <td className="py-2 px-4 border-b">27</td>
              <td className="py-2 px-4 border-b">3,500</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-SPHK-5000</td>
              <td className="py-2 px-4 border-b">Heavy Duty Specialty Kit</td>
              <td className="py-2 px-4 border-b">30</td>
              <td className="py-2 px-4 border-b">5,000</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">TPM-SPHK-7000</td>
              <td className="py-2 px-4 border-b">Multi-Leaf Specialty Kit</td>
              <td className="py-2 px-4 border-b">32</td>
              <td className="py-2 px-4 border-b">7,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"Specialty Hanger Kits"} />
    </main>
  );
}
