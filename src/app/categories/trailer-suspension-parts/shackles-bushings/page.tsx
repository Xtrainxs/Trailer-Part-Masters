import CategoryCard from "@/components/category-card";

const subcategories = [
  { name: "Standard Shackles", description: "Zinc-plated standard shackles for light to medium trailer suspension.", href: "/categories/trailer-suspension-parts/shackles-bushings/standard-shackles" },
  { name: "HD Shackles", description: "Heavy-duty shackles for 5,200 lb and above axle ratings.", href: "/categories/trailer-suspension-parts/shackles-bushings/hd-shackles" },
  { name: "Wet-Bolt Shackles", description: "Grease-able wet-bolt shackles for extended service life.", href: "/categories/trailer-suspension-parts/shackles-bushings/wet-bolt-shackles" },
  { name: "Nylon Bushings", description: "Self-lubricating nylon bushings in all standard OD sizes.", href: "/categories/trailer-suspension-parts/shackles-bushings/nylon-bushings" },
  { name: "Bronze Bushings", description: "Oil-impregnated bronze bushings for high-load applications.", href: "/categories/trailer-suspension-parts/shackles-bushings/bronze-bushings" },
  { name: "Steel Bushings", description: "Heavy-wall steel bushings for maximum durability.", href: "/categories/trailer-suspension-parts/shackles-bushings/steel-bushings" },
  { name: "Rubber Bushings", description: "Vibration-dampening rubber bushings for smooth ride quality.", href: "/categories/trailer-suspension-parts/shackles-bushings/rubber-bushings" },
];

export const metadata = { title: 'Shackles &amp; Bushings' };

export default function ShacklesBushingsPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-ink">
        Shackles &amp; Bushings
      </h1>
      <p className="text-base sm:text-lg text-slate-600 mb-10">
        Standard, heavy-duty, and wet-bolt shackles, plus nylon, bronze, steel, and
        rubber bushings.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategories.map((sub) => (
          <CategoryCard key={sub.name} name={sub.name} href={sub.href} description={sub.description} />
        ))}
      </div>
    </main>
  );
}
