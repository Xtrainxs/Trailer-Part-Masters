import CategoryCard from "@/components/category-card";

const subcategories = [
  { name: '1 ¾" tube (2k)', description: 'For 2,000 lb axles with 1¾\" round tube.', href: "/categories/trailer-suspension-parts/u-bolt-kits/round-u-bolt-kits/1-3-4-tube-2k" },
  { name: '2 3/8" tube (3.5k)', description: 'For 3,500 lb axles with 2 3/8\" round tube.', href: "/categories/trailer-suspension-parts/u-bolt-kits/round-u-bolt-kits/2-3-8-tube-3-5k" },
  { name: '3" tube (5.2k–7k)', description: 'For 5,200–7,000 lb axles with 3\" round tube.', href: "/categories/trailer-suspension-parts/u-bolt-kits/round-u-bolt-kits/3-tube-5-2k-7k" },
  { name: '3.5" tube (8k)', description: 'For 8,000 lb axles with 3.5\" round tube.', href: "/categories/trailer-suspension-parts/u-bolt-kits/round-u-bolt-kits/3-5-tube-8k" },
  { name: '4" tube (9k)', description: 'For 9,000 lb axles with 4\" round tube.', href: "/categories/trailer-suspension-parts/u-bolt-kits/round-u-bolt-kits/4-tube-9k" },
  { name: '5" tube (10k–12k)', description: 'For 10,000–12,000 lb axles with 5\" round tube.', href: "/categories/trailer-suspension-parts/u-bolt-kits/round-u-bolt-kits/5-tube-10k-12k" },
];

export const metadata = { title: 'Round U-Bolt Kits' };

export default function RoundUBoltKitsPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-[#05203C]">
        Round U-Bolt Kits
      </h1>
      <p className="text-base sm:text-lg text-slate-600 mb-10">
        Round-tube U-bolt kits by axle diameter and weight rating.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategories.map((sub) => (
          <CategoryCard key={sub.href} name={sub.name} href={sub.href} description={sub.description} />
        ))}
      </div>
    </main>
  );
}
