import React from "react";

export const metadata = {
  title: 'Heavy Duty Cast Equalizer Kits',
  description: 'Wholesale Heavy Duty Cast Equalizer Kits sourced direct from manufacturer. Bulk pricing for trailer manufacturers and stockists across Canada and the USA. Request a quote within 1-2 business days.',
};

export default function HeavyDutyCastEqualizerKitsPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-ink">Heavy Duty Cast Equalizer Kits</h1>
      <div className="w-full flex justify-center items-center bg-white border border-line rounded-sm mb-8 p-4">
        <img
          src="/images/hangerkits/heavydutycastequalizerkits/Picture1.png"
          alt="Heavy Duty Cast Equalizer Kit"
          className="object-contain"
          style={{ maxHeight: '320px', width: 'auto', maxWidth: '100%' }}
        />
      </div>
      {/* Add table here if needed */}
    </main>
  );
}

