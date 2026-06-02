import CategoryCard from "@/components/category-card";

const subcategories = [
  { name: '10" Hydraulic Trailer Brakes', href: "/categories/brake-assemblies/10in-hydraulic" },
  { name: '10" Electric Trailer Brakes', href: "/categories/brake-assemblies/10in-electric" },
  { name: '12" Hydraulic Trailer Brakes', href: "/categories/brake-assemblies/12in-hydraulic" },
  { name: '12" Electric Trailer Brakes', href: "/categories/brake-assemblies/12in-electric" },
];

export const metadata = { title: 'Brake Assemblies' };

export default function BrakeAssembliesPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-ink">
        Brake Assemblies
      </h1>
      <p className="text-base sm:text-lg text-slate-600 mb-10">
        Hydraulic and electric brake assemblies for 10&quot; and 12&quot; trailer drums.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategories.map((sub) => (
          <CategoryCard key={sub.href} name={sub.name} href={sub.href} />
        ))}
      </div>
    </main>
  );
}
