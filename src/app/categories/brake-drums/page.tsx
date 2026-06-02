import CategoryCard from "@/components/category-card";

const subcategories = [
  { name: '7" Brake Drum Kit â€” 2,000 lb. Axles, 5 on 4.5"', href: "/categories/brake-drums/7in-2000-5x45" },
  { name: '10" Brake Drum Kit â€” 3,500 lb. Axles, 5 on 4.5"', href: "/categories/brake-drums/10in-3500-5x45" },
  { name: '10" Brake Drum Kit â€” 3,500 lb. Axles, 5 on 4.75"', href: "/categories/brake-drums/10in-3500-5x475" },
  { name: '10" Brake Drum Kit â€” 3,500 lb. Axles, 5 on 5"', href: "/categories/brake-drums/10in-3500-5x5" },
  { name: '10" Brake Drum Kit â€” 3,500 lb. Axles, 5 on 5.5"', href: "/categories/brake-drums/10in-3500-5x55" },
  { name: '12" Brake Drum Kit â€” 5,200/6,000 lb. Axles, 6 on 5.5"', href: "/categories/brake-drums/12in-5200-6000-6x55" },
  { name: '12" Brake Drum Kit â€” 7,000 lb. Axles, 8 on 6.5"', href: "/categories/brake-drums/12in-7000-8x65" },
];

export const metadata = { title: 'Brake Drums' };

export default function BrakeDrumsPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-ink">
        Brake Drums
      </h1>
      <p className="text-base sm:text-lg text-slate-600 mb-10">
        Brake drum kits sized to your axle rating and bolt pattern.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategories.map((sub) => (
          <CategoryCard key={sub.href} name={sub.name} href={sub.href} />
        ))}
      </div>
    </main>
  );
}
