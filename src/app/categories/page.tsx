import CategoryCard from "@/components/category-card";

const categories = [
  {
    name: "Trailer Suspension Parts",
    href: "/categories/trailer-suspension-parts",
    description: "Leaf springs, hangers, equalizers, shackles, bushings, and U-bolt kits.",
  },
  {
    name: "Trailer Lights",
    href: "/categories/trailer-lights",
    description: "LED and incandescent tail, marker, license plate, and work lights.",
  },
  {
    name: "Trailer Electrical Parts",
    href: "/categories/trailer-electrical-parts",
    description: "Adapters, connectors, wiring harnesses, junction and battery boxes.",
  },
  {
    name: "Trailer Jacks",
    href: "/categories/trailer-jacks",
    description: "A-frame, side-wind, top-wind, swivel, electric, and stabilizer jacks.",
  },
  {
    name: "Trailer Couplers",
    href: "/categories/trailer-couplers",
    description: "Straight tongue, A-frame, channel, gooseneck, and adjustable couplers.",
  },
  {
    name: "Idler Hubs",
    href: "/categories/idler-hubs",
    description: "Hub and bearing kits sized to your axle rating and bolt pattern.",
  },
  {
    name: "Brake Drums",
    href: "/categories/brake-drums",
    description: "Drum kits for 2,000 to 7,000 lb. axles in common bolt patterns.",
  },
  {
    name: "Brake Assemblies",
    href: "/categories/brake-assemblies",
    description: "10\" and 12\" hydraulic and electric brake assemblies.",
  },
  {
    name: "Trailer Hardware",
    href: "/categories/trailer-hardware",
    description: "E-tracks, D-rings, hinges, latches, chains, bolts, ramps, wheel chocks, and much more.",
  },
  {
    name: "Boat Trailer Parts",
    href: "/categories/boat-trailer-parts",
    description: "Winches, rollers, jacks, bunks, guides, safety chains, and marine hardware.",
  },
];

export const metadata = { title: 'Browse by category' };

export default function CategoriesPage() {
  return (
    <main className="max-w-6xl mx-auto py-16 px-6">
      <header className="text-center mb-12">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-sky-700 mb-4">
          Catalog
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold text-[#05203C] tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Browse by category
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-base text-slate-600">
          Suspension, brakes, lights, jacks, couplers, hardware &mdash; every
          trailer component, sourced direct from manufacturer.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.name}
            name={cat.name}
            href={cat.href}
            description={cat.description}
          />
        ))}
      </div>
    </main>
  );
}
