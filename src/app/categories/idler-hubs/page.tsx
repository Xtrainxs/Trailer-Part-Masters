import CategoryCard from "@/components/category-card";

export const metadata = {
  title: 'Wholesale Trailer Idler Hubs & Bearing Kits — 2,000 to 7,000 lb. Axles',
  description: 'Wholesale trailer idler hub and bearing kits for 2,000 to 7,000 lb. axles in all standard bolt patterns. Direct-from-manufacturer pricing for trailer builders and distributors.',
};

const subcategories = [
  { name: 'Idler Hub & Bearing Kit — 2,000 lb. Axles, 4 on 4"', href: "/categories/idler-hubs/idler-kit-2000-4x4" },
  { name: 'Idler Hub & Bearing Kit — 2,000 lb. Axles, 4 on 5"', href: "/categories/idler-hubs/idler-kit-2000-4x5" },
  { name: 'Idler Hub & Bearing Kit — 3,500 lb. Axles, 5 on 4.5"', href: "/categories/idler-hubs/idler-kit-3500-5x45" },
  { name: 'Idler Hub & Bearing Kit — 3,500 lb. Axles, 5 on 4.75"', href: "/categories/idler-hubs/idler-kit-3500-5x475" },
  { name: 'Idler Hub & Bearing Kit — 3,500 lb. Axles, 5 on 5"', href: "/categories/idler-hubs/idler-kit-3500-5x5" },
  { name: 'Idler Hub & Bearing Kit — 3,500 lb. Axles, 5 on 5.5"', href: "/categories/idler-hubs/idler-kit-3500-5x55" },
  { name: 'Idler Hub & Bearing Kit — 5,200/6,000 lb. Axles, 6 on 5.5"', href: "/categories/idler-hubs/idler-kit-5200-6000-6x55" },
  { name: 'Idler Hub & Bearing Kit — 7,000 lb. Axles, 8 on 6.5"', href: "/categories/idler-hubs/idler-kit-7000-8x65" },
];


export default function IdlerHubsPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-ink">
        Idler Hubs
      </h1>
      <p className="text-base sm:text-lg text-slate-600 mb-10">
        Idler hub and bearing kits sized to your axle rating and bolt pattern.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategories.map((sub) => (
          <CategoryCard key={sub.href} name={sub.name} href={sub.href} />
        ))}
      </div>
    </main>
  );
}


