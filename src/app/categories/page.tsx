import CategoryCard from "@/components/category-card";

const categories = [
  {
    name: "Trailer Suspension Parts",
    href: "/categories/trailer-suspension-parts",
    icon: "suspension",
    description: "Leaf springs, hangers, equalizers, shackles, bushings, and U-bolt kits.",
  },
  {
    name: "Trailer Lights",
    href: "/categories/trailer-lights",
    icon: "lights",
    description: "LED and incandescent tail, marker, license plate, and work lights.",
  },
  {
    name: "Trailer Electrical Parts",
    href: "/categories/trailer-electrical-parts",
    icon: "electrical",
    description: "Adapters, connectors, wiring harnesses, junction and battery boxes.",
  },
  {
    name: "Trailer Jacks",
    href: "/categories/trailer-jacks",
    icon: "jacks",
    description: "A-frame, side-wind, top-wind, swivel, electric, and stabilizer jacks.",
  },
  {
    name: "Trailer Couplers",
    href: "/categories/trailer-couplers",
    icon: "couplers",
    description: "Straight tongue, A-frame, channel, gooseneck, and adjustable couplers.",
  },
  {
    name: "Idler Hubs",
    href: "/categories/idler-hubs",
    icon: "hubs",
    description: "Hub and bearing kits sized to your axle rating and bolt pattern.",
  },
  {
    name: "Brake Drums",
    href: "/categories/brake-drums",
    icon: "drums",
    description: "Drum kits for 2,000 to 7,000 lb. axles in common bolt patterns.",
  },
  {
    name: "Brake Assemblies",
    href: "/categories/brake-assemblies",
    icon: "brakes",
    description: '10" and 12" hydraulic and electric brake assemblies.',
  },
  {
    name: "Trailer Hardware",
    href: "/categories/trailer-hardware",
    icon: "hardware",
    description: "E-tracks, D-rings, hinges, latches, chains, bolts, ramps, wheel chocks, and much more.",
  },
  {
    name: "Boat Trailer Parts",
    href: "/categories/boat-trailer-parts",
    icon: "boat",
    description: "Winches, rollers, jacks, bunks, guides, safety chains, and marine hardware.",
  },
];

export const metadata = { title: 'Browse by Category' };

export default function CategoriesPage() {
  return (
    <div>
      {/* Page header band */}
      <section className="bg-ink text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <span className="eyebrow">The Catalog</span>
          <h1 className="mt-3 font-display uppercase text-4xl sm:text-5xl tracking-tight">
            Browse by Category
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300 leading-relaxed">
            Suspension, brakes, lights, jacks, couplers, hardware — every trailer
            component, sourced direct from the manufacturer.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.name}
              name={cat.name}
              href={cat.href}
              icon={cat.icon}
              description={cat.description}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-lime rounded-sm p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <h2 className="font-display uppercase text-2xl sm:text-3xl text-ink tracking-tight">
              Can&apos;t find your part?
            </h2>
            <p className="mt-1 text-ink/80">Tell us the specs — we&apos;ll source it for you.</p>
          </div>
          <a href="/request-form" className="btn-dark shrink-0">Request a Quote</a>
        </div>
      </main>
    </div>
  );
}
