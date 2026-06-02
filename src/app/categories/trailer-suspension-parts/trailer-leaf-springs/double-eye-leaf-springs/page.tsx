import React from "react";
import RangeDisclaimer from '@/components/range-disclaimer';
import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = { title: 'Double-Eye Leaf Springs' };

export default function DoubleEyeLeafSpringsPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-[#05203C]">Double-Eye Leaf Springs</h1>
      <p className="mb-4 text-[#05203C]">Double-Eye Leaf Springs are engineered to deliver reliable support and smooth ride quality for a wide range of trailers. Their dual-eye design ensures secure mounting and consistent load distribution, making them a popular choice for utility, boat, and cargo trailers.</p>
      <RangeDisclaimer
        intro="Our double-eye leaf springs range includes:"
        items={["Light-Duty (1,000–2,000 lb)","Standard (3,500 lb)","Heavy-Duty (5,200–6,000 lb)","Extra Heavy-Duty (7,000–8,000 lb)","Single-Leaf","Multi-Leaf (2–5 leaves)","Equalizer Springs","Galvanized Finish","Black Powder Coat","Standard lengths 25\"–60\"","Custom lengths on request"]}
      />
      <h2 className="text-xl font-semibold mb-2 mt-8 text-[#05203C]">Double Eye Leaf Springs</h2>
      <p className="mb-6 text-[#05203C]">Reliable and versatile, these springs provide smooth ride quality and secure mounting for utility and cargo trailers.</p>

      <div className="flex flex-row gap-6 justify-center items-center mb-8">
        {[3].map(i => (
          <div key={i} className="flex flex-col items-center bg-white border border-slate-200 rounded-xl shadow-sm" style={{ width: '140px', height: '180px', justifyContent: 'center' }}>
            <img src={`/images/Leaf Springs/Double Eye Leaf Springs/Picture${i}.png`} alt={`Double Eye Leaf Spring ${i}`} className="w-full h-32 object-contain bg-slate-50 rounded-md border border-slate-200"  />
            <span className="mt-2 text-sm text-slate-700 text-center">Double Eye Leaf Spring {i}</span>
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
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">BTP-TRA-2250-25</td>
              <td className="py-2 px-4 border-b">TRA-2250</td>
              <td className="py-2 px-4 border-b">2,250</td>
              <td className="py-2 px-4 border-b">3</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">BTP-TRA-3000-26</td>
              <td className="py-2 px-4 border-b">TRA-3000</td>
              <td className="py-2 px-4 border-b">3,000</td>
              <td className="py-2 px-4 border-b">4</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">BTP-TRA-3500-27</td>
              <td className="py-2 px-4 border-b">TRA-3500</td>
              <td className="py-2 px-4 border-b">3,500</td>
              <td className="py-2 px-4 border-b">5</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">BTP-UNA-4000-26</td>
              <td className="py-2 px-4 border-b">UNA-4000</td>
              <td className="py-2 px-4 border-b">4,000</td>
              <td className="py-2 px-4 border-b">6</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">BTP-UNA-5000-29</td>
              <td className="py-2 px-4 border-b">UNA-5000</td>
              <td className="py-2 px-4 border-b">5,000</td>
              <td className="py-2 px-4 border-b">7</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">BTP-DE-6000-28</td>
              <td className="py-2 px-4 border-b">HD</td>
              <td className="py-2 px-4 border-b">6,000</td>
              <td className="py-2 px-4 border-b">7</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">BTP-UNA-022</td>
              <td className="py-2 px-4 border-b">UNA-022</td>
              <td className="py-2 px-4 border-b">2,480</td>
              <td className="py-2 px-4 border-b">6</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">BTP-UNA-030</td>
              <td className="py-2 px-4 border-b">UNA-030</td>
              <td className="py-2 px-4 border-b">1,290</td>
              <td className="py-2 px-4 border-b">4</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">BTP-UNA-035</td>
              <td className="py-2 px-4 border-b">UNA-035</td>
              <td className="py-2 px-4 border-b">650</td>
              <td className="py-2 px-4 border-b">3</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">BTP-UNA-036</td>
              <td className="py-2 px-4 border-b">UNA-036</td>
              <td className="py-2 px-4 border-b">1,250</td>
              <td className="py-2 px-4 border-b">5</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">BTP-UNA-041</td>
              <td className="py-2 px-4 border-b">UNA-041</td>
              <td className="py-2 px-4 border-b">1,500</td>
              <td className="py-2 px-4 border-b">3</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">BTP-UNA-049</td>
              <td className="py-2 px-4 border-b">UNA-049</td>
              <td className="py-2 px-4 border-b">1,000</td>
              <td className="py-2 px-4 border-b">2</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">BTP-UNA-050</td>
              <td className="py-2 px-4 border-b">UNA-050</td>
              <td className="py-2 px-4 border-b">1,500</td>
              <td className="py-2 px-4 border-b">3</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">BTP-UNA-051</td>
              <td className="py-2 px-4 border-b">UNA-051</td>
              <td className="py-2 px-4 border-b">2,000</td>
              <td className="py-2 px-4 border-b">4</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">BTP-UNA-052</td>
              <td className="py-2 px-4 border-b">UNA-052</td>
              <td className="py-2 px-4 border-b">2,500</td>
              <td className="py-2 px-4 border-b">5</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">BTP-UNA-053</td>
              <td className="py-2 px-4 border-b">UNA-053</td>
              <td className="py-2 px-4 border-b">3,000</td>
              <td className="py-2 px-4 border-b">6</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">BTP-UNA-054</td>
              <td className="py-2 px-4 border-b">UNA-054</td>
              <td className="py-2 px-4 border-b">3,500</td>
              <td className="py-2 px-4 border-b">7</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">BTP-UNA-055</td>
              <td className="py-2 px-4 border-b">UNA-055</td>
              <td className="py-2 px-4 border-b">4,000</td>
              <td className="py-2 px-4 border-b">8</td>
            </tr>
          </tbody>
        </table>
      <RequestQuoteCTA partLabel={"Double-Eye Leaf Springs"} />
    </main>
  );
}
