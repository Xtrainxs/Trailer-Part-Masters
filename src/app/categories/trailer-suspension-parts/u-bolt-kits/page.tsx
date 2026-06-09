import CategoryCard from "@/components/category-card";

const subcategories = [
  { name: "Round U-Bolt Kits", description: "Kits sized to round axle tube diameter from 1Â¾\" to 5\".", href: "/categories/trailer-suspension-parts/u-bolt-kits/round-u-bolt-kits" },
  { name: "Square U-Bolt Kits", description: "Kits for square axle profiles from 1Â¾\" to 2Â½\"–3\".", href: "/categories/trailer-suspension-parts/u-bolt-kits/square-u-bolt-kits" },
  { name: "Bolt Diameters", description: "U-bolt kits indexed by diameter from 3/8\" light-duty to 5/8\" XHD.", href: "/categories/trailer-suspension-parts/u-bolt-kits/bolt-diameters" },
];

export const metadata = {
  title: 'U-Bolt Kits',
  description: 'Wholesale U-Bolt Kits sourced direct from manufacturer. Bulk pricing for trailer manufacturers and stockists across Canada and the USA. Request a quote within 1-2 business days.',
};

export default function UBoltKitsPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-ink">U-Bolt Kits</h1>
      <p className="text-base sm:text-lg text-slate-600 mb-10">
        Browse by tube shape or by bolt diameter to find the right U-bolt kit for
        your axle.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategories.map((sub) => (
          <CategoryCard key={sub.name} name={sub.name} href={sub.href} description={sub.description} />
        ))}
      </div>
    </main>
  );
}

