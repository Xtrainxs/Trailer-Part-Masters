import CategoryCard from "@/components/category-card";

export const metadata = {
  title: 'Wholesale Trailer Suspension Parts — Leaf Springs, Hangers, Equalizers & More',
  description: 'Wholesale trailer suspension parts: leaf springs, hanger kits, equalizers, shackles, bushings, U-bolt kits, spring seats, and fasteners. Direct from manufacturer for trailer builders and distributors.',
};

const subcategories = [
  { name: "Trailer Leaf Springs", description: "Double-eye, slipper, parabolic, and heavy-duty multi-leaf springs.", href: "/categories/trailer-suspension-parts/trailer-leaf-springs" },
  { name: "Hangers Kits", description: "Single, tandem, and triple-axle hanger kits with all hardware.", href: "/categories/trailer-suspension-parts/hangers-kits" },
  { name: "Trailer Equalizers", description: "Cast and rubber equalizers for tandem and triple-axle trailers.", href: "/categories/trailer-suspension-parts/trailer-equalizers" },
  { name: "Shackles & Bushings", description: "Standard, HD, and wet-bolt shackles; nylon, bronze, steel, rubber bushings.", href: "/categories/trailer-suspension-parts/shackles-bushings" },
  { name: "U-Bolt Kits", description: "Round and square U-bolt kits by tube size and bolt diameter.", href: "/categories/trailer-suspension-parts/u-bolt-kits" },
  { name: "Spring Seats", description: "Weld-on spring seats in 1Â¾\", 2 3/8\", and 3\" axle sizes.", href: "/categories/trailer-suspension-parts/spring-seats" },
  { name: "Suspension Fasteners", description: "Equalizer bolts, shackle bolts, lock nuts, and washers.", href: "/categories/trailer-suspension-parts/suspension-fasteners" },
];


export default function TrailerSuspensionPartsPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-ink">
        Trailer Suspension Parts
      </h1>
      <p className="text-base sm:text-lg text-slate-600 mb-10">
        Leaf springs, hangers, equalizers, shackles, bushings, U-bolt kits, and the
        fasteners that hold it all together.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategories.map((sub) => (
          <CategoryCard key={sub.name} name={sub.name} href={sub.href} description={sub.description} />
        ))}
      </div>
    </main>
  );
}


