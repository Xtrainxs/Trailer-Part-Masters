import CategoryCard from "@/components/category-card";

const subcategories = [
  { name: "Double-Eye Leaf Springs", description: "Standard double-eye springs from 1,000 to 8,000 lb capacity.", href: "/categories/trailer-suspension-parts/trailer-leaf-springs/double-eye-leaf-springs" },
  { name: "Slipper Leaf Springs", description: "Single-eye and slipper-end springs for heavy commercial trailers.", href: "/categories/trailer-suspension-parts/trailer-leaf-springs/slipper-leaf-springs" },
  { name: "Heavy-Duty Multi-Leaf Springs", description: "Multi-leaf packs for agricultural and heavy-duty applications.", href: "/categories/trailer-suspension-parts/trailer-leaf-springs/heavy-duty-multi-leaf-springs" },
  { name: "Parabolic Leaf Springs", description: "Tapered parabolic springs for a smoother, lower-friction ride.", href: "/categories/trailer-suspension-parts/trailer-leaf-springs/parabolic-leaf-springs" },
];

export const metadata = { title: 'Trailer Leaf Springs' };

export default function TrailerLeafSpringsPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-[#05203C]">
        Trailer Leaf Springs
      </h1>
      <p className="text-base sm:text-lg text-slate-600 mb-10">
        Double-eye, slipper, heavy-duty multi-leaf, and parabolic spring styles for
        every trailer weight class.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategories.map((sub) => (
          <CategoryCard key={sub.name} name={sub.name} href={sub.href} description={sub.description} />
        ))}
      </div>
    </main>
  );
}
