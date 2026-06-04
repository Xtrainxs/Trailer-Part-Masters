import React from "react";
import RequestQuoteCTA from '@/components/request-quote-cta';

export const metadata = {
  title: 'Single-Axle Hanger Kits',
  description: 'Wholesale Single-Axle Hanger Kits sourced direct from manufacturer. Bulk pricing for trailer manufacturers and stockists across Canada and the USA. Min. order CAD $5,000. Request a quote within 1-2 business days.',
};

export default function SingleAxleHangerKitsPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-ink">Single-Axle Hanger Kits</h1>
      <p className="mb-8 text-ink">
        Complete hanger kit options for single-axle setups, including double-eye and slipper configurations.
      </p>

      <div className="w-full flex justify-center items-center bg-blue-900 rounded-lg mb-8 p-4 gap-8">
        <div className="flex-1 flex justify-center">
          <img
            src="/images/hangerkits/singleaxlehangerkits/Picture1.png"
            alt="Single-Axle Hanger Kits Picture 1"
            className="object-contain rounded-lg drop-shadow-lg"
            style={{ width: "100%", height: "320px", background: "transparent" }}
          />
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/images/hangerkits/singleaxlehangerkits/Picture2.png"
            alt="Single-Axle Hanger Kits Picture 2"
            className="object-contain rounded-lg drop-shadow-lg"
            style={{ width: "100%", height: "320px", background: "transparent" }}
          />
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/images/hangerkits/singleaxlehangerkits/Picture3.png"
            alt="Single-Axle Hanger Kits Picture 3"
            className="object-contain rounded-lg drop-shadow-lg"
            style={{ width: "100%", height: "320px", background: "transparent" }}
          />
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-2 mt-8 text-ink">Available Single-Axle Hanger Kits</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">TPM Part Number</th>
              <th className="py-2 px-4 border-b text-left">Kit Type</th>
              <th className="py-2 px-4 border-b text-left">Contents/Specs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-HK1002</td>
              <td className="py-2 px-4 border-b">Double-Eye</td>
              <td className="py-2 px-4 border-b">
                <span
                  dangerouslySetInnerHTML={{
                    __html: `
            &bull; 1-1/2&quot; front hangers (2)<br>
            &bull; 1-1/4&quot; rear hangers (2)<br>
            &bull; 2-5/8&quot; shackle straps (4)<br>
            &bull; Hardware included<br>
            &bull; For 2,000-7,000 lb axles
          `,
                  }}
                />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-HK1003</td>
              <td className="py-2 px-4 border-b">Double-Eye</td>
              <td className="py-2 px-4 border-b">
                <span
                  dangerouslySetInnerHTML={{
                    __html: `
            &bull; 1-1/2&quot; front hangers (2)<br>
            &bull; 1-1/4&quot; rear hangers (2)<br>
            &bull; 3-1/8&quot; shackle straps (4)<br>
            &bull; Hardware included<br>
            &bull; For 2,000-7,000 lb axles
          `,
                  }}
                />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-HK1004</td>
              <td className="py-2 px-4 border-b">Double-Eye</td>
              <td className="py-2 px-4 border-b">
                <span
                  dangerouslySetInnerHTML={{
                    __html: `
            &bull; 3-1/4&quot; front hangers (2)<br>
            &bull; 1-1/4&quot; rear hangers (2)<br>
            &bull; 3-1/8&quot; shackle straps (4)<br>
            &bull; Hardware included<br>
            &bull; For 2,000-7,000 lb axles
          `,
                  }}
                />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-HK1005</td>
              <td className="py-2 px-4 border-b">Double-Eye</td>
              <td className="py-2 px-4 border-b">
                <span
                  dangerouslySetInnerHTML={{
                    __html: `
            &bull; 3-1/4&quot; front hangers (2)<br>
            &bull; 7/8&quot; rear hangers (2)<br>
            &bull; 3-1/8&quot; shackle straps (4)<br>
            &bull; Hardware included<br>
            &bull; For 2,000-7,000 lb axles
          `,
                  }}
                />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-HK2006</td>
              <td className="py-2 px-4 border-b">Slipper</td>
              <td className="py-2 px-4 border-b">
                <span
                  dangerouslySetInnerHTML={{
                    __html: `
            &bull; 3-3/4&quot; front hangers (2)<br>
            &bull; 5-1/6&quot; rear hangers (2)<br>
            &bull; Hardware included<br>
            &bull; For 2,000-8,000 lb axles
          `,
                  }}
                />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-HK2007</td>
              <td className="py-2 px-4 border-b">Slipper</td>
              <td className="py-2 px-4 border-b">
                <span
                  dangerouslySetInnerHTML={{
                    __html: `
            &bull; 5&quot; front hangers (2)<br>
            &bull; 6-3/8&quot; rear hangers (2)<br>
            &bull; Hardware included<br>
            &bull; For 9,000 lb axles
          `,
                  }}
                />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-HK3008</td>
              <td className="py-2 px-4 border-b">Double-Eye</td>
              <td className="py-2 px-4 border-b">
                <span
                  dangerouslySetInnerHTML={{
                    __html: `
            &bull; 3-1/4&quot; front hangers (2)<br>
            &bull; 1-1/4&quot; rear hangers (2)<br>
            &bull; Hardware included<br>
            &bull; For 2,000-7,000 lb axles
          `,
                  }}
                />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-HK4009</td>
              <td className="py-2 px-4 border-b">Double-Eye</td>
              <td className="py-2 px-4 border-b">
                <span
                  dangerouslySetInnerHTML={{
                    __html: `
            &bull; 3-1/4&quot; front hangers (2)<br>
            &bull; Hardware included<br>
            &bull; For 2,000-7,000 lb axles
          `,
                  }}
                />
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b font-semibold whitespace-nowrap">TPM-HK4010</td>
              <td className="py-2 px-4 border-b">Double-Eye</td>
              <td className="py-2 px-4 border-b">
                <span
                  dangerouslySetInnerHTML={{
                    __html: `
            &bull; 1-1/2&quot; front hangers (2)<br>
            &bull; Hardware included<br>
            &bull; For 2,000-7,000 lb axles
          `,
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <RequestQuoteCTA partLabel={"Single-Axle Hanger Kits"} />
    </main>
  );
}
