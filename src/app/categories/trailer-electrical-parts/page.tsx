import CategoryCard from "@/components/category-card";

const subcategories = [
  { name: "Adapters", description: "4-way to 7-way and 5-way to 7-way trailer connector adapters.", href: "/categories/trailer-electrical-parts/adapters" },
  { name: "Connectors", description: "Round and flat trailer connectors in 4, 5, 6, and 7-pin.", href: "/categories/trailer-electrical-parts/connectors" },
  { name: "Wiring Harnesses", description: "Complete trailer wiring harnesses for most trailer configurations.", href: "/categories/trailer-electrical-parts/wiring-harnesses" },
  { name: "Junction Boxes", description: "Weatherproof junction boxes for multi-light wiring setups.", href: "/categories/trailer-electrical-parts/junction-boxes" },
  { name: "Breakaway Kits", description: "Battery-powered breakaway kits for electric brake trailers.", href: "/categories/trailer-electrical-parts/breakaway-kits" },
  { name: "Battery Boxes", description: "Lockable plastic battery boxes for breakaway systems.", href: "/categories/trailer-electrical-parts/battery-boxes" },
];

export const metadata = { title: 'Trailer Electrical Parts' };

export default function TrailerElectricalPartsPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-[#05203C]">
        Trailer Electrical Parts
      </h1>
      <p className="text-base sm:text-lg text-slate-600 mb-10">
        Essential electrical components for trailers &mdash; adapters, connectors,
        wiring harnesses, junction boxes, breakaway kits, and battery boxes.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategories.map((sub) => (
          <CategoryCard key={sub.name} name={sub.name} href={sub.href} description={sub.description} />
        ))}
      </div>
    </main>
  );
}
