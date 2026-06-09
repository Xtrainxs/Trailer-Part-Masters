import CategoryCard from "@/components/category-card";

export const metadata = {
  title: 'Wholesale Trailer Jacks — A-Frame, Side-Wind, Drop-Leg, Electric & Stabilizer',
  description: 'Wholesale trailer jacks: A-frame, side-wind, top-wind, drop-leg, swivel, electric, and stabilizer jacks for all trailer types and weight classes. Factory-direct pricing.',
};

const subcategories = [
  { name: "A-Frame Jacks", description: "Bolt-on A-frame jacks in 2,000, 3,500, and 5,000 lb capacities.", href: "/categories/trailer-jacks/a-frame-jacks" },
  { name: "Side-Wind Jacks", description: "1 and 2-speed side-wind jacks with or without wheels.", href: "/categories/trailer-jacks/side-wind-jacks" },
  { name: "Top-Wind Jacks", description: "Top-crank jacks ideal for low-clearance tongue applications.", href: "/categories/trailer-jacks/top-wind-jacks" },
  { name: "Drop-Leg Jacks", description: "Adjustable drop-leg jacks from 7,000 to 12,000 lb capacity.", href: "/categories/trailer-jacks/drop-leg-jacks" },
  { name: "Swivel Jacks", description: "360Â° swivel jacks for trailers requiring multi-directional adjustment.", href: "/categories/trailer-jacks/swivel-jacks" },
  { name: "Electric Jacks", description: "12V electric tongue and stabilizer jacks for easy operation.", href: "/categories/trailer-jacks/electric-jacks" },
  { name: "Stabilizer Jacks", description: "Corner stabilizer jacks for RV and flatbed trailers.", href: "/categories/trailer-jacks/stabilizer-jacks" },
  { name: "Jack Accessories", description: "Pads, casters, foot plates, handles, and replacement parts.", href: "/categories/trailer-jacks/jack-accessories" },
];


export default function TrailerJacksPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-ink">
        Trailer Jacks
      </h1>
      <p className="text-base sm:text-lg text-slate-600 mb-10">
        A-frame, side-wind, top-wind, swivel, electric, and stabilizer jacks for every
        trailer style and weight class.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategories.map((sub) => (
          <CategoryCard key={sub.name} name={sub.name} href={sub.href} description={sub.description} />
        ))}
      </div>
    </main>
  );
}


