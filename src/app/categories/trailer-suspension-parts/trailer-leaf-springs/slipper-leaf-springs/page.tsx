import React from "react";
import RequestQuoteCTA from '@/components/request-quote-cta';
import RangeDisclaimer from '@/components/range-disclaimer';

export const metadata = {
  title: 'Slipper Leaf Springs',
  description: 'Wholesale Slipper Leaf Springs sourced direct from manufacturer. Bulk pricing for trailer manufacturers and stockists across Canada and the USA. Min. order CAD $5,000. Request a quote within 1-2 business days.',
};

export default function SlipperLeafSpringsPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-ink">Slipper Leaf Springs</h1>
      <p className="mb-4 text-ink">Designed for heavy loads, these springs offer durability and effective shock absorption for commercial and agricultural trailers.</p>
      <RangeDisclaimer
        intro="Our slipper leaf springs range includes:"
        items={["Single-Eye Slipper","Hook-End Slipper","Radius-End Slipper","Light-Duty (1,000 lb)","Standard (2,500 lb)","Heavy-Duty (4,000 lb)","Extra Heavy-Duty (8,000â€“12,000 lb)","Galvanized Finish","Black Powder Coat","Custom lengths on request"]}
      />
      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Available Slipper Leaf Springs</h2>
      <div className="flex flex-row gap-6 justify-center items-center mb-8">
        {[1].map(i => (
          <div key={i} className="flex flex-col items-center bg-white border border-slate-200 rounded-xl shadow-sm" style={{ width: '140px', height: '180px', justifyContent: 'center' }}>
            <img src={`/images/Leaf Springs/Slipper Leaf Springs/Picture${i}.png`} alt={`Slipper Leaf Spring ${i}`} className="w-full h-32 object-contain bg-slate-50 rounded-md border border-slate-200"  />
            <span className="mt-2 text-sm text-slate-700 text-center">Slipper Leaf Spring {i}</span>
          </div>
        ))}
      </div>
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">Part Number</th>
              <th className="py-2 px-4 border-b text-left">Spring Type</th>
              <th className="py-2 px-4 border-b text-left">Capacity (lbs)</th>
              <th className="py-2 px-4 border-b text-left">Leaves</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-UNA-013</td>
              <td className="py-2 px-4 border-b">Flat End</td>
              <td className="py-2 px-4 border-b">470</td>
              <td className="py-2 px-4 border-b">2</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-UNA-014</td>
              <td className="py-2 px-4 border-b">Flat End</td>
              <td className="py-2 px-4 border-b">705</td>
              <td className="py-2 px-4 border-b">3</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-UNA-015</td>
              <td className="py-2 px-4 border-b">Flat End</td>
              <td className="py-2 px-4 border-b">940</td>
              <td className="py-2 px-4 border-b">4</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-UNA-016</td>
              <td className="py-2 px-4 border-b">Flat End</td>
              <td className="py-2 px-4 border-b">1,184</td>
              <td className="py-2 px-4 border-b">5</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-UNA-017</td>
              <td className="py-2 px-4 border-b">Flat End</td>
              <td className="py-2 px-4 border-b">1,415</td>
              <td className="py-2 px-4 border-b">6</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-UNA-018</td>
              <td className="py-2 px-4 border-b">Flat End</td>
              <td className="py-2 px-4 border-b">300</td>
              <td className="py-2 px-4 border-b">1</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-UNA-034</td>
              <td className="py-2 px-4 border-b">Flat End</td>
              <td className="py-2 px-4 border-b">800</td>
              <td className="py-2 px-4 border-b">3</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-UNA-207</td>
              <td className="py-2 px-4 border-b">Flat End</td>
              <td className="py-2 px-4 border-b"></td>
              <td className="py-2 px-4 border-b">5</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-UNA-009</td>
              <td className="py-2 px-4 border-b">Hook End</td>
              <td className="py-2 px-4 border-b">800</td>
              <td className="py-2 px-4 border-b">3</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-UNA-010</td>
              <td className="py-2 px-4 border-b">Hook End</td>
              <td className="py-2 px-4 border-b">1,000</td>
              <td className="py-2 px-4 border-b">4</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-UNA-231</td>
              <td className="py-2 px-4 border-b">Hook End</td>
              <td className="py-2 px-4 border-b">2,500</td>
              <td className="py-2 px-4 border-b">4</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-UNA-233</td>
              <td className="py-2 px-4 border-b">Hook End</td>
              <td className="py-2 px-4 border-b">4,000</td>
              <td className="py-2 px-4 border-b">7</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-UNA-300</td>
              <td className="py-2 px-4 border-b">Hook End</td>
              <td className="py-2 px-4 border-b">4,000</td>
              <td className="py-2 px-4 border-b">7</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-UNA-176N</td>
              <td className="py-2 px-4 border-b">Radius End</td>
              <td className="py-2 px-4 border-b">230</td>
              <td className="py-2 px-4 border-b">1.5</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-UNA-177N</td>
              <td className="py-2 px-4 border-b">Radius End</td>
              <td className="py-2 px-4 border-b">500</td>
              <td className="py-2 px-4 border-b">2</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-UNA-178</td>
              <td className="py-2 px-4 border-b">Radius End</td>
              <td className="py-2 px-4 border-b">750</td>
              <td className="py-2 px-4 border-b">3</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-UNA-179</td>
              <td className="py-2 px-4 border-b">Radius End</td>
              <td className="py-2 px-4 border-b">950</td>
              <td className="py-2 px-4 border-b">4</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-UNA-180</td>
              <td className="py-2 px-4 border-b">Radius End</td>
              <td className="py-2 px-4 border-b"></td>
              <td className="py-2 px-4 border-b">5</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-UNA-232</td>
              <td className="py-2 px-4 border-b">Radius End</td>
              <td className="py-2 px-4 border-b">3,500</td>
              <td className="py-2 px-4 border-b">5</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-UNA-299</td>
              <td className="py-2 px-4 border-b">Radius End</td>
              <td className="py-2 px-4 border-b">3,500</td>
              <td className="py-2 px-4 border-b">5</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-UNA-318</td>
              <td className="py-2 px-4 border-b">Radius End</td>
              <td className="py-2 px-4 border-b">8,000</td>
              <td className="py-2 px-4 border-b">6</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-TRA-2740</td>
              <td className="py-2 px-4 border-b">Radius End</td>
              <td className="py-2 px-4 border-b">12,000</td>
              <td className="py-2 px-4 border-b">3</td>
            </tr>
          </tbody>
        </table>
      <RequestQuoteCTA partLabel={"Slipper Leaf Springs"} />
    </main>
  );
}

