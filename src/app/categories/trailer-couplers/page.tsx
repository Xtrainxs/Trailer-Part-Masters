import CategoryCard from "@/components/category-card";

const subcategories = [
  { name: "Straight Tongue Couplers", description: "1â…ž\" and 2\" ball couplers for straight-tongue trailers up to 5,000 lb.", href: "/categories/trailer-couplers/straight-tongue-couplers" },
  { name: "A-Frame Couplers", description: "2\" and 2 5/16\" A-frame couplers for light to medium trailers.", href: "/categories/trailer-couplers/a-frame-couplers" },
  { name: "Channel Style Couplers", description: "Adjustable channel couplers with multiple ball-size options.", href: "/categories/trailer-couplers/channel-style-couplers" },
  { name: "Gooseneck Couplers", description: "2 5/16\" gooseneck couplers for heavy-duty towing up to 30,000 lb.", href: "/categories/trailer-couplers/gooseneck-couplers" },
  { name: "Adjustable Couplers", description: "Height-adjustable couplers for variable hitch ball heights.", href: "/categories/trailer-couplers/adjustable-couplers" },
];

export const metadata = { title: 'Trailer Couplers' };

export default function TrailerCouplersPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-ink">
        Trailer Couplers
      </h1>
      <p className="text-base sm:text-lg text-slate-600 mb-10">
        Couplers by style &mdash; straight tongue, A-frame, channel, gooseneck, and
        adjustable.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategories.map((sub) => (
          <CategoryCard key={sub.name} name={sub.name} href={sub.href} description={sub.description} />
        ))}
      </div>
    </main>
  );
}
