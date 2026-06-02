import React from "react";

export const metadata = { title: 'Heavy Duty Cast Equalizer Kits' };

export default function HeavyDutyCastEqualizerKitsPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-[#05203C]">Heavy Duty Cast Equalizer Kits</h1>
      <div className="w-full flex justify-center items-center bg-blue-900 rounded-lg mb-8 p-4">
        <img
          src="/images/heavydutycastequalizerkits/Picture1.png"
          alt="Heavy Duty Cast Equalizer Kit"
          className="object-contain rounded-lg drop-shadow-lg"
          style={{ width: '100%', height: '320px', background: 'transparent' }}
        />
      </div>
      {/* Add table here if needed */}
    </main>
  );
}
