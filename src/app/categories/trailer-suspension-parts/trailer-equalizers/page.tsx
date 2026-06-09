export const metadata = {
  title: 'Trailer Equalizers',
  description: 'Wholesale Trailer Equalizers sourced direct from manufacturer. Bulk pricing for trailer manufacturers and stockists across Canada and the USA. Request a quote within 1-2 business days.',
};

export default function TrailerEqualizersPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-8 text-ink">Trailer Equalizers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {["1.png", "2.png", "3.png", "4.png", "5.png"].map((img, idx) => (
          <div
            key={img}
            className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 flex flex-col items-center w-full"
          >
            <div className="w-[88%] rounded-md p-2 mb-2 flex justify-center bg-slate-50">
              <img
                src={`/images/Trailer%20Equalizers/${encodeURIComponent(img)}`}
                alt={`Trailer equalizer ${idx + 1}`}
                className="h-[8.4rem] w-full object-contain object-center"
              />
            </div>
            
          </div>
        ))}
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 rounded-lg mb-8">
          <thead>
            <tr className="bg-slate-900">
              <th className="py-3 px-4 border-b border-slate-700 border-r border-slate-700 text-left">EQ-Code</th>
              <th className="py-3 px-4 border-b border-slate-700 border-r border-slate-700 text-left">Trailer Weight (GTW)</th>
              <th className="py-3 px-4 border-b border-slate-700 text-left">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-4 border-b border-slate-700 border-r border-slate-700 font-semibold">EQ1</td>
              <td className="py-3 px-4 border-b border-slate-700 border-r border-slate-700">4,000 lbs</td>
              <td className="py-3 px-4 border-b border-slate-700">Light-duty equalizer for small cargo and utility trailers.</td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-slate-700 border-r border-slate-700 font-semibold">EQ2</td>
              <td className="py-3 px-4 border-b border-slate-700 border-r border-slate-700">6,000 lbs</td>
              <td className="py-3 px-4 border-b border-slate-700">Common mid-range equalizer for single-axle and light tandem trailers.</td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-slate-700 border-r border-slate-700 font-semibold">EQ3</td>
              <td className="py-3 px-4 border-b border-slate-700 border-r border-slate-700">8,000 lbs</td>
              <td className="py-3 px-4 border-b border-slate-700">High-volume SKU for tandem-axle cargo and utility trailers.</td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-slate-700 border-r border-slate-700 font-semibold">EQ4</td>
              <td className="py-3 px-4 border-b border-slate-700 border-r border-slate-700">10,000 lbs</td>
              <td className="py-3 px-4 border-b border-slate-700">One of the most frequently purchased equalizers in Canada/US.</td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-slate-700 border-r border-slate-700 font-semibold">EQ5</td>
              <td className="py-3 px-4 border-b border-slate-700 border-r border-slate-700">12,000 lbs</td>
              <td className="py-3 px-4 border-b border-slate-700">Heavy-duty equalizer for equipment, RV, and large cargo trailers.</td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-slate-700 border-r border-slate-700 font-semibold">EQ6</td>
              <td className="py-3 px-4 border-b border-slate-700 border-r border-slate-700">16,000 lbs</td>
              <td className="py-3 px-4 border-b border-slate-700">Heavy-duty continuation model for catalog completeness.</td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-r border-slate-700 font-semibold">EQ4541</td>
              <td className="py-3 px-4 border-r border-slate-700">10,000-12,000 lbs</td>
              <td className="py-3 px-4">Premium air-ride equalizer category (e.g., Shocker-style).</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

